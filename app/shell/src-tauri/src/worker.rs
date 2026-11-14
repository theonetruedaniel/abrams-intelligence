//! One retained native worker. No synchronous pipe waits run on the UI thread.
use crate::{bridge::Bridge,pipe_endpoint::{PipeOwner,PipeEndpoint}};
use std::{future::Future,pin::Pin,sync::{Arc,Mutex,mpsc::{self,SyncSender,Receiver},atomic::{AtomicBool,Ordering}},task::{Context,Poll,Waker},thread::{self,JoinHandle},time::Duration};
type Result<T>=std::result::Result<T,&'static str>;
#[derive(Debug)] pub enum Reply { Open(u32), Bytes(Vec<u8>), Events(Vec<Vec<u8>>), Closed }
pub enum Action { Open(String), Request(u32,Vec<u8>), Read(u32,u32), Close(u32) }
struct Completion { result:Option<Result<Reply>>,waker:Option<Waker> }
pub struct Response(Arc<Mutex<Completion>>,Arc<Flags>);
impl Future for Response {
 type Output=Result<Reply>;
 fn poll(self:Pin<&mut Self>,cx:&mut Context<'_>)->Poll<Self::Output>{
  if self.1.revoked.load(Ordering::SeqCst){return Poll::Ready(Err("native document retired"));}
  let mut state=match self.0.lock(){Ok(s)=>s,Err(_)=>return Poll::Ready(Err("completion poisoned"))};
  if let Some(result)=state.result.take(){Poll::Ready(if self.1.revoked.load(Ordering::SeqCst){Err("native document retired")}else{result})}else{state.waker=Some(cx.waker().clone());Poll::Pending}
 }
}
struct Job {action:Action,completion:Arc<Mutex<Completion>>}
struct Flags {revoked:AtomicBool,busy:AtomicBool}
pub struct CoreWorker {flags:Arc<Flags>,tx:SyncSender<Job>,done:Mutex<Receiver<Result<()>>>,join:Mutex<Option<JoinHandle<()>>>}
impl CoreWorker {
 pub fn start(synthetic:bool)->Result<Arc<Self>> {
  Self::start_factory(move||{
   if !synthetic{return Ok((Bridge::disconnected(),None));}
   let owner=PipeOwner::spawn()?;
   Ok((Bridge::with_admitted_owner(Box::new(PipeEndpoint::new(owner.clone()))),Some(owner)))
  })
 }
 fn start_factory(factory:impl FnOnce()->Result<(Bridge,Option<Arc<Mutex<PipeOwner>>>)>+Send+'static)->Result<Arc<Self>>{
  let flags=Arc::new(Flags{revoked:AtomicBool::new(false),busy:AtomicBool::new(false)});
  let(tx,rx)=mpsc::sync_channel::<Job>(1);let(done_tx,done_rx)=mpsc::sync_channel(1);let(ready_tx,ready_rx)=mpsc::sync_channel(1);
  let f=flags.clone();
  let join=thread::Builder::new().name("native-core-worker".into()).spawn(move||{
   let outcome=(||{
    let(mut bridge,owner)=factory()?;
    let _=ready_tx.try_send(());
    let mut in_flight=None;
    let work=std::panic::catch_unwind(std::panic::AssertUnwindSafe(||{
     while !f.revoked.load(Ordering::SeqCst){
      let job=match rx.recv_timeout(Duration::from_millis(50)){Ok(j)=>j,Err(mpsc::RecvTimeoutError::Timeout)=>continue,Err(_)=>break};
      in_flight=Some(job.completion.clone());
      let result=if f.revoked.load(Ordering::SeqCst){Err("native document retired")}else{match job.action{
       Action::Open(id)=>bridge.open(id).map(Reply::Open),Action::Request(g,b)=>bridge.request(g,b).map(Reply::Bytes),
       Action::Read(g,r)=>bridge.read_events(g,r).map(Reply::Events),Action::Close(g)=>bridge.close(g).map(|_|Reply::Closed),
      }};
      let result=if f.revoked.load(Ordering::SeqCst){Err("native document retired")}else{result};
      f.busy.store(false,Ordering::SeqCst);complete(job.completion,result);in_flight=None;
     }
    }));
    f.revoked.store(true,Ordering::SeqCst);
    if let Some(completion)=in_flight.take(){complete(completion,Err("native worker failed"));}
    // A job that raced revocation is rejected, never dispatched.
    if let Ok(job)=rx.try_recv(){complete(job.completion,Err("native document retired"));}
    f.busy.store(false,Ordering::SeqCst);
    bridge.shutdown(); // local lease only; not global Stop.
    let cleanup=if let Some(owner)=owner{
     let mut owner=owner.lock().map_err(|_|"owner cleanup poisoned")?;
     match owner.finish(){Ok(())=>Ok(()),Err(_)=>{let _proof=owner.retire_failure()?;Err("owner needed failure retirement")}}
    }else{Ok(())};
    if work.is_err(){return Err("native worker panicked");}cleanup
   })();
   f.revoked.store(true,Ordering::SeqCst);
   let _=done_tx.try_send(outcome);
  }).map_err(|_|"native worker creation failed")?;
  let worker=Arc::new(Self{flags,tx,done:Mutex::new(done_rx),join:Mutex::new(Some(join))});
  if ready_rx.recv_timeout(Duration::from_secs(5)).is_err(){worker.revoke();if worker.finish().is_err(){return Err("native startup failed; retirement unsuccessful");}return Err("native worker startup failed");}
  Ok(worker)
 }
 pub fn submit(&self,action:Action)->Result<Response>{
  match &action{Action::Open(s) if s.len()>64=>return Err("open bound"),Action::Request(_,b) if b.is_empty()||b.len()>65536=>return Err("request bound"),_=>{}}
  if self.flags.revoked.load(Ordering::SeqCst){return Err("native document retired");}
  if self.flags.busy.compare_exchange(false,true,Ordering::SeqCst,Ordering::SeqCst).is_err(){return Err("native worker occupied");}
  let completion=Arc::new(Mutex::new(Completion{result:None,waker:None}));
  if self.flags.revoked.load(Ordering::SeqCst)||self.tx.try_send(Job{action,completion:completion.clone()}).is_err(){self.flags.busy.store(false,Ordering::SeqCst);return Err("native worker unavailable");}
  Ok(Response(completion,self.flags.clone()))
 }
 pub fn is_revoked(&self)->bool{self.flags.revoked.load(Ordering::SeqCst)}
 pub fn revoke(&self){self.flags.revoked.store(true,Ordering::SeqCst);}
 /// Call only before UI creation on startup failure, or after the event loop exits.
 pub fn finish(&self)->Result<()> {
  self.revoke();
  let result=match self.done.lock().map_err(|_|"completion lock poisoned")?.recv_timeout(Duration::from_secs(45)){
   Ok(result)=>result,Err(mpsc::RecvTimeoutError::Timeout)=>return Err("native worker cleanup uncertain"),Err(mpsc::RecvTimeoutError::Disconnected)=>Err("native worker disconnected"),
  };
  self.join.lock().map_err(|_|"join lock poisoned")?.take().ok_or("native worker already joined")?.join().map_err(|_|"native worker join failed")?;
  result
 }
}
impl Drop for CoreWorker {fn drop(&mut self){self.revoke(); /* Explicit finish is required for any cleanup claim. */}}
fn complete(state:Arc<Mutex<Completion>>,result:Result<Reply>){
 let wake=if let Ok(mut state)=state.lock(){state.result=Some(result);state.waker.take()}else{None};
 if let Some(w)=wake{w.wake();}
}
#[cfg(test)] pub(crate) mod tests {
 use super::*;use crate::bridge::CoreEndpoint;
 pub(crate) fn wait(response:Response)->Result<Reply>{
  struct WakeThread(thread::Thread);impl std::task::Wake for WakeThread{fn wake(self:Arc<Self>){self.0.unpark();}}
  let waker=std::task::Waker::from(Arc::new(WakeThread(thread::current())));let mut cx=Context::from_waker(&waker);let mut response=Box::pin(response);
  let until=std::time::Instant::now()+Duration::from_secs(15);
  loop{match response.as_mut().poll(&mut cx){Poll::Ready(r)=>return r,Poll::Pending=>{if std::time::Instant::now()>=until{return Err("test response timeout");}thread::park_timeout(Duration::from_millis(20));}}}
 }
 struct Owner{entered:SyncSender<()>,release:Receiver<()>,closed:Arc<std::sync::atomic::AtomicUsize>,hold_open:bool}
 impl CoreEndpoint for Owner{
  fn open(&mut self,_:u32)->Result<()>{if self.hold_open{let _=self.entered.try_send(());self.release.recv_timeout(Duration::from_secs(3)).map_err(|_|"test gate timeout")?;}Ok(())}
  fn request(&mut self,_:Vec<u8>,_:u32)->Result<Vec<u8>>{let _=self.entered.try_send(());self.release.recv_timeout(Duration::from_secs(3)).map_err(|_|"test gate timeout")?;Ok(vec![1])}
  fn read_events(&mut self,_:u32,_:usize)->Result<Vec<Vec<u8>>>{Ok(vec![])}
  fn close(&mut self,_:u32)->Result<()>{self.closed.fetch_add(1,Ordering::SeqCst);Ok(())}
 }
 fn held(open:bool)->(Arc<CoreWorker>,Receiver<()>,SyncSender<()>,Arc<std::sync::atomic::AtomicUsize>){
  let(tx,entered)=mpsc::sync_channel(1);let(release,rx)=mpsc::sync_channel(1);let closed=Arc::new(std::sync::atomic::AtomicUsize::new(0));let copy=closed.clone();
  let worker=CoreWorker::start_factory(move||Ok((Bridge::with_admitted_owner(Box::new(Owner{entered:tx,release:rx,closed:copy,hold_open:open})),None))).unwrap();
  (worker,entered,release,closed)
 }
 #[test] fn cancelled_future_does_not_release_capacity_or_skip_cleanup(){
  let(w,entered,release,closed)=held(false);assert!(matches!(wait(w.submit(Action::Open("a".into())).unwrap()),Ok(Reply::Open(1))));
  let response=w.submit(Action::Request(1,vec![1])).unwrap();entered.recv_timeout(Duration::from_secs(3)).unwrap();drop(response);
  assert!(w.submit(Action::Read(1,1)).is_err());w.revoke();release.send(()).unwrap();assert!(w.finish().is_ok());assert_eq!(closed.load(Ordering::SeqCst),1);assert!(w.submit(Action::Open("b".into())).is_err());
 }
 #[test] fn revoked_pending_acquisition_never_returns_live_lease(){
  let(w,entered,release,closed)=held(true);let response=w.submit(Action::Open("a".into())).unwrap();entered.recv_timeout(Duration::from_secs(3)).unwrap();w.revoke();release.send(()).unwrap();assert!(wait(response).is_err());assert!(w.finish().is_ok());assert_eq!(closed.load(Ordering::SeqCst),1);
 }
 #[test] fn completed_response_is_not_live_after_revocation(){
  let flags=Arc::new(Flags{revoked:AtomicBool::new(false),busy:AtomicBool::new(false)});
  let response=Response(Arc::new(Mutex::new(Completion{result:Some(Ok(Reply::Open(1))),waker:None})),flags.clone());
  flags.revoked.store(true,Ordering::SeqCst);assert!(wait(response).is_err());
 }
 #[test] fn default_disconnected_and_pre_revoked_calls_never_install_owner(){
  let w=CoreWorker::start(false).unwrap();assert!(wait(w.submit(Action::Open("a".into())).unwrap()).is_err());w.revoke();assert!(w.submit(Action::Open("b".into())).is_err());assert!(w.finish().is_ok());
 }
}