use std::io::{Read, Write};
use std::process::{Child, Command, Stdio};
use std::sync::{mpsc::{self, Receiver, SyncSender}, Arc, Mutex};
use std::thread::{self, JoinHandle};
use std::time::{Duration, Instant};
use std::os::windows::process::CommandExt;
use crate::bridge::CoreEndpoint;
use crate::bundle::BundleLease;
use std::sync::atomic::{AtomicU8,Ordering};
//0 idle,1 exact owned session,2 terminal uncertain custody. One native session per process.
static CUSTODY_STATE:AtomicU8=AtomicU8::new(0);
#[cfg(test)] pub(crate) static SPAWN_ATTEMPTS:std::sync::atomic::AtomicUsize=std::sync::atomic::AtomicUsize::new(0);

type Result<T> = std::result::Result<T, &'static str>;
const HEADER: usize=24;
const MAX_BODY: usize=16*(4+65536);
const DEADLINE: Duration=Duration::from_secs(5);

/// Fixed fixture-only modes. No arbitrary executable/path or renderer control.
#[derive(Clone,Copy,Debug)]
pub enum FailureCase { NoReply, NonzeroEof, Truncated, Malformed, PartialStart }
impl FailureCase { fn argument(self)->&'static str {match self {
 Self::NoReply=>"no-reply",Self::NonzeroEof=>"nonzero-eof",Self::Truncated=>"truncated",Self::Malformed=>"malformed",Self::PartialStart=>"partial-start",
}}}
#[derive(Debug)]
pub struct FailureRetirement {pub deliberate_kill:bool,pub exit_code:Option<i32>,pub workers_started:usize,pub workers_joined:usize,pub worker_errors:usize,pub reader_error:Option<&'static str>}
enum Incoming { Frame(Vec<u8>), Eof }
struct Worker { done: Receiver<Result<()>>, join: Option<JoinHandle<()>> }
impl Worker {
 fn finish(&mut self)->Result<()> {self.retire()?}
 fn retire(&mut self)->Result<Result<()>> {
  if self.join.is_none(){return Ok(Ok(()));}
  let outcome=match self.done.recv_timeout(DEADLINE){
   Ok(work)=>work,Err(mpsc::RecvTimeoutError::Timeout)=>return Err("worker retirement timeout"),
   Err(mpsc::RecvTimeoutError::Disconnected)=>Err("worker completion disconnected"),
  };
  let joined=self.join.take().ok_or("worker absent")?.join();
  Ok(if joined.is_err(){Err("worker panic")}else{outcome})
 }
}
fn spawn_worker(name:&str,work:impl FnOnce()->Result<()>+Send+'static)->Result<Worker>{
 let(tx,rx)=mpsc::sync_channel(1);
 let join=thread::Builder::new().name(name.into()).spawn(move||{let result=work();let _=tx.try_send(result);}).map_err(|_|"worker creation failed")?;
 Ok(Worker{done:rx,join:Some(join)})
}
fn u32_at(b:&[u8],offset:usize)->u32 {u32::from_le_bytes(b[offset..offset+4].try_into().unwrap())}
fn put(b:&mut[u8],offset:usize,n:u32){b[offset..offset+4].copy_from_slice(&n.to_le_bytes());}
fn make_frame(op:u8,seq:u32,lease:u32,read_id:u32,body:&[u8])->Result<Vec<u8>>{
 if body.len()>65536{return Err("request limit");}
 let mut f=vec![0;HEADER+body.len()];f[..4].copy_from_slice(b"ABP1");f[4]=op;
 put(&mut f,8,seq);put(&mut f,12,lease);put(&mut f,16,read_id);put(&mut f,20,body.len() as u32);f[HEADER..].copy_from_slice(body);Ok(f)
}

/// Fixture-owned process control; never exposed to the renderer/Core command wire.
pub struct PipeOwner {
 bundle:Option<BundleLease>, child:Child, tx:Option<SyncSender<Vec<u8>>>, written:Receiver<Result<()>>, incoming:Receiver<Incoming>,
 writer:Option<Worker>,reader:Option<Worker>,stderr:Option<Worker>,stderr_bytes:Arc<Mutex<Vec<u8>>>,
 seq:u32,remote_open:u32,finished:bool,failed:bool,cleanup_attempted:bool,
}
impl PipeOwner {
 pub fn spawn()->Result<Arc<Mutex<Self>>>{Self::spawn_case(None)}
 pub fn spawn_failure(case:FailureCase)->Result<Arc<Mutex<Self>>>{Self::spawn_case(Some(case))}
 fn spawn_case(case:Option<FailureCase>)->Result<Arc<Mutex<Self>>>{
  if CUSTODY_STATE.compare_exchange(0,1,Ordering::SeqCst,Ordering::SeqCst).is_err(){return Err("bundle custody occupied or uncertain");}
  let bundle=match BundleLease::acquire(){Ok(b)=>b,Err(e)=>{CUSTODY_STATE.store(0,Ordering::SeqCst);return Err(e);}};
  #[cfg(test)] {SPAWN_ATTEMPTS.fetch_add(1,Ordering::SeqCst);println!("\nPINNED_NODE_SPAWN_SELECTED {}",bundle.node().to_str().expect("validated native bundle path"));}
  let child=Command::new(bundle.node()).args(["--max-old-space-size=128","--permission"])
   .args(bundle.source_permissions()).arg(bundle.entry(case.is_some())).arg(case.map_or("--synthetic-owned-pipe",FailureCase::argument))
   .current_dir(bundle.root()).env_clear().env("SystemRoot",r"C:\Windows").env("WINDIR",r"C:\Windows").env("NODE_DISABLE_COMPILE_CACHE","1")
   .creation_flags(0x08000000).stdin(Stdio::piped()).stdout(Stdio::piped()).stderr(Stdio::piped())
   .spawn();
  let child=match child{Ok(c)=>c,Err(_)=>{CUSTODY_STATE.store(0,Ordering::SeqCst);return Err("owned Node spawn failed");}};
  let(tx,rx)=mpsc::sync_channel::<Vec<u8>>(1);let(ack_tx,ack_rx)=mpsc::sync_channel(1);let(in_tx,in_rx)=mpsc::sync_channel(1);
  let mut owner=Self{bundle:Some(bundle),child,tx:Some(tx),written:ack_rx,incoming:in_rx,writer:None,reader:None,stderr:None,stderr_bytes:Arc::new(Mutex::new(Vec::new())),seq:0,remote_open:0,finished:false,failed:false,cleanup_attempted:false};
  let setup=(|| -> Result<()> {
  let mut stdin=owner.child.stdin.take().ok_or("missing owned stdin")?;
  let mut stdout=owner.child.stdout.take().ok_or("missing owned stdout")?;
  let mut stderr=owner.child.stderr.take().ok_or("missing owned stderr")?;
  owner.writer=Some(spawn_worker("owned-pipe-writer",move||{
   while let Ok(frame)=rx.recv(){
    let result=stdin.write_all(&frame).and_then(|_|stdin.flush()).map_err(|_|"pipe write failed");
    ack_tx.try_send(result).map_err(|_|"write acknowledgement queue unavailable")?;result?;
   }
   drop(stdin);Ok(()) // EOF is owner finalization, not CoreEndpoint.close.
  })?);
  if matches!(case,Some(FailureCase::PartialStart)){return Err("injected after writer start");}
  owner.reader=Some(spawn_worker("owned-pipe-reader",move||{
   loop{
    let mut head=[0u8;HEADER];
    match stdout.read(&mut head[..1]){Ok(0)=>{in_tx.try_send(Incoming::Eof).map_err(|_|"unexpected response backlog at EOF")?;return Ok(());},Ok(1)=>{},_=>return Err("pipe header read failed")}
    stdout.read_exact(&mut head[1..]).map_err(|_|"truncated response header")?;
    let n=u32_at(&head,20) as usize;
    if &head[..4]!=b"ABP1"||head[6]!=0||head[7]!=0||n>MAX_BODY{return Err("response header limit");}
    let mut frame=vec![0;HEADER+n];frame[..HEADER].copy_from_slice(&head);stdout.read_exact(&mut frame[HEADER..]).map_err(|_|"truncated response body")?;
    in_tx.try_send(Incoming::Frame(frame)).map_err(|_|"unsolicited response backlog")?;
   }
  })?);
  let capture=owner.stderr_bytes.clone();
  owner.stderr=Some(spawn_worker("owned-pipe-stderr",move||{
   let mut buf=[0u8;4096];let mut overflow=false;
   loop{let n=stderr.read(&mut buf).map_err(|_|"stderr read failed")?;if n==0{break;}
    let mut bytes=capture.lock().map_err(|_|"stderr capture poisoned")?;
    if bytes.len()+n<=65536&&!overflow{bytes.extend_from_slice(&buf[..n]);}else{overflow=true;}
   }
   if overflow{Err("stderr bound exceeded")}else{Ok(())}
  })?);
  Ok(())
  })();
  if setup.is_err(){
   owner.failed=true;
   if !matches!(case,Some(FailureCase::PartialStart)){let report=owner.retire_failure()?;eprintln!("STARTUP_FAILURE_RETIRED {report:?}");return Err("startup failed with proven retirement");}
  }
  Ok(Arc::new(Mutex::new(owner)))
 }
 fn exchange(&mut self,op:u8,lease:u32,read_id:u32,body:&[u8])->Result<(u32,Vec<u8>)>{
  if self.failed||self.finished||self.seq>=512{return Err("pipe session unavailable");}
  self.seq+=1;let seq=self.seq;
  let frame=match make_frame(op,seq,lease,read_id,body){Ok(f)=>f,Err(e)=>{self.failed=true;return Err(e);}};
  let outcome=(||{
   self.tx.as_ref().ok_or("writer retired")?.try_send(frame).map_err(|_|"write queue occupied")?;
   self.written.recv_timeout(DEADLINE).map_err(|_|"write deadline")??;
   let response=match self.incoming.recv_timeout(DEADLINE).map_err(|e|match e{mpsc::RecvTimeoutError::Timeout=>"reply deadline",mpsc::RecvTimeoutError::Disconnected=>"reader unavailable"})?{Incoming::Frame(f)=>f,Incoming::Eof=>return Err("owner EOF before reply")};
   if response[4]!=op||response[5]!=1||u32_at(&response,8)!=seq||u32_at(&response,16)!=read_id{return Err("response correlation or owner failure");}
   let remote=u32_at(&response,12);
   if (op==1&&(remote==0||remote>2147483647))||(op!=1&&remote!=lease){return Err("response lease mismatch");}
   let payload=response[HEADER..].to_vec();
   if (op==1||op==4)&&!payload.is_empty(){return Err("unexpected control reply body");}
   if op==2&&(payload.is_empty()||payload.len()>1048576){return Err("Core reply limit");}
   if op==1{self.remote_open=remote;}if op==4{self.remote_open=0;}
   Ok((remote,payload))
  })();
  if outcome.is_err(){self.failed=true;}outcome
 }
 /// Failure cleanup is NOT a successful Core close or natural owner retirement.
 pub fn retire_failure(&mut self)->Result<FailureRetirement> {
  if self.finished||self.cleanup_attempted{return Err("cleanup already attempted; no retry");}
  self.cleanup_attempted=true;
  self.failed=true;self.tx.take();
  // Close any handles not yet moved to workers during partial startup.
  self.child.stdin.take();self.child.stdout.take();self.child.stderr.take();
  let mut killed=false;let mut uncertainty=false;let mut status=None;
  let grace=Instant::now()+Duration::from_secs(1);
  loop{match self.child.try_wait(){
   Ok(Some(s))=>{status=Some(s);break;},Ok(None)=>{if Instant::now()>=grace{break;}thread::sleep(Duration::from_millis(10));},
   Err(_)=>{uncertainty=true;break;}
  }}
  if status.is_none(){
   killed=true;if self.child.kill().is_err(){uncertainty=true;}
   let until=Instant::now()+DEADLINE;
   loop{match self.child.try_wait(){
    Ok(Some(s))=>{status=Some(s);break;},Ok(None)=>{if Instant::now()>=until{uncertainty=true;break;}thread::sleep(Duration::from_millis(10));},
    Err(_)=>{uncertainty=true;break;}
   }}
  }
  let mut joined=0;let mut work_errors=0;let mut started=0;let mut reader_error=None;
  // Never short-circuit subsequent joins because one worker failed.
  for (index,slot) in [&mut self.writer,&mut self.reader,&mut self.stderr].into_iter().enumerate(){
   if let Some(worker)=slot.as_mut(){started+=1;match worker.retire(){
    Ok(work)=>{joined+=1;if let Err(code)=work{work_errors+=1;if index==1{reader_error=Some(code);}}},Err(_)=>uncertainty=true,
   }}
  }
  if uncertainty||status.is_none()||joined!=started{
   self.retain_uncertain_custody();return Err("failure cleanup uncertain; no next child");
  }
  self.finished=true;self.bundle.take();CUSTODY_STATE.store(0,Ordering::SeqCst); // Release only after child reap and every worker join. Failure latch stays true.
  Ok(FailureRetirement{deliberate_kill:killed,exit_code:status.unwrap().code(),workers_started:started,workers_joined:joined,worker_errors:work_errors,reader_error})
 }
 fn retain_uncertain_custody(&mut self){
  CUSTODY_STATE.store(2,Ordering::SeqCst);
  // Bounded16 file leases plus bounded directory leases remain until this process exits.
  // Dropping uncertain child/I/O custody must not unlock executable/modules still in use.
  if let Some(held)=self.bundle.take(){std::mem::forget(held);}
 }
 pub fn finish(&mut self)->Result<()> {
  if self.failed||self.finished||self.remote_open!=0{return Err("cannot finalize active or failed pipe");}
  self.failed=true; // Until every finalization proof succeeds, this session cannot reopen.
  self.tx.take(); // writer drops only this child's stdin after queued work.
  self.writer.as_mut().ok_or("writer missing")?.finish()?;
  let until=Instant::now()+DEADLINE;
  loop{match self.child.try_wait().map_err(|_|"owned child wait failed")?{
   Some(status)=>{if !status.success(){return Err("Node owner nonzero exit");}break;},
   None=>{if Instant::now()>=until{return Err("Node owner exit deadline");}thread::sleep(Duration::from_millis(10));}
  }}
  self.reader.as_mut().ok_or("reader missing")?.finish()?;
  match self.incoming.try_recv(){Ok(Incoming::Eof)=>{},_=>return Err("missing final pipe EOF")}
  self.stderr.as_mut().ok_or("stderr worker missing")?.finish()?;
  let stderr=self.stderr_bytes.lock().map_err(|_|"stderr capture poisoned")?;
  let marker=b"OWNER_LOCAL_DELIVERY_RETIRED_STATE_UNCHANGED\n";
  if !stderr.ends_with(marker){return Err("owner cleanup audit missing");}
  self.finished=true;self.failed=false;self.bundle.take();CUSTODY_STATE.store(0,Ordering::SeqCst);Ok(())
 }
}
impl Drop for PipeOwner {
 fn drop(&mut self){
  if !self.finished {
   if self.cleanup_attempted{self.retain_uncertain_custody();eprintln!("PIPE_CLEANUP_UNCERTAIN_NO_NEXT_CHILD");return;}
   match self.retire_failure(){
    Ok(report)=>eprintln!("UNEXPECTED_PIPE_FAILURE_RETIRED {report:?}"),
    Err(_)=>eprintln!("PIPE_CLEANUP_UNCERTAIN_NO_NEXT_CHILD"),
   }
  }
 }
}
pub struct PipeEndpoint {owner:Arc<Mutex<PipeOwner>>,generation:u32,remote:u32,read_id:u32}
impl PipeEndpoint {pub fn new(owner:Arc<Mutex<PipeOwner>>)->Self{Self{owner,generation:0,remote:0,read_id:0}}}
impl CoreEndpoint for PipeEndpoint {
 fn open(&mut self,generation:u32)->Result<()>{
  if self.remote!=0||generation!=self.generation+1{return Err("endpoint generation unavailable");}
  let(remote,_)=self.owner.try_lock().map_err(|_|"pipe owner occupied")?.exchange(1,0,0,&[])?;
  self.generation=generation;self.remote=remote;self.read_id=0;Ok(())
 }
 fn request(&mut self,bytes:Vec<u8>,generation:u32)->Result<Vec<u8>>{
  if self.remote==0||generation!=self.generation{return Err("inactive endpoint");}
  self.owner.try_lock().map_err(|_|"pipe owner occupied")?.exchange(2,self.remote,0,&bytes).map(|(_,body)|body)
 }
 fn read_events(&mut self,generation:u32,limit:usize)->Result<Vec<Vec<u8>>>{
  if self.remote==0||generation!=self.generation||limit!=16||self.read_id==2147483647{return Err("invalid read lease or bound");}
  self.read_id+=1;let(_,body)=self.owner.try_lock().map_err(|_|"pipe owner occupied")?.exchange(3,self.remote,self.read_id,&[])?;
  let parsed=(||{
  let mut events=Vec::new();let mut at=0;
  while at<body.len(){
   if at+4>body.len()||events.len()>=limit{return Err("invalid event batch");}
   let n=u32_at(&body,at) as usize;at+=4;
   if n==0||n>65536||at+n>body.len(){return Err("invalid event size");}events.push(body[at..at+n].to_vec());at+=n;
  }
  Ok(events)
  })();
  if parsed.is_err(){if let Ok(mut owner)=self.owner.try_lock(){owner.failed=true;}}
  parsed
 }
 fn close(&mut self,generation:u32)->Result<()>{
  if self.remote==0||generation!=self.generation{return Err("inactive endpoint close");}
  self.owner.try_lock().map_err(|_|"pipe owner occupied")?.exchange(4,self.remote,0,&[])?;
  self.remote=0;Ok(()) // Child/Core persist; fixture owner finalizes separately.
 }
}
