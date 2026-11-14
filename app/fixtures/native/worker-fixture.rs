#[path="src-tauri/src/bridge.rs"] mod bridge;
#[path="pipe-endpoint.rs"] mod pipe_endpoint;
#[path="src-tauri/src/worker.rs"] mod worker;
#[cfg(test)] mod integration {
 use super::worker::{CoreWorker,Action,Reply,tests::wait};
 fn q(kind:&str,id:&str,payload:&str)->Vec<u8>{format!(r#"{{"v":1,"type":"{kind}","requestId":"{id}","payload":{payload}}}"#).into_bytes()}
 #[test] fn actual_worker_local_close_preserves_running_core_and_joins_owner(){
  let w=CoreWorker::start(true).unwrap();
  let result=(||->Result<(),&'static str>{
   if !matches!(wait(w.submit(Action::Open("first".into()))?)?,Reply::Open(1)){return Err("first lease");}
   let start=r#"{"runId":"A","fixtureId":"H","approvalId":"approval_A","approvalRevision":1,"expectedEpoch":1}"#;
   if !matches!(wait(w.submit(Action::Request(1,q("start-mock-run","start",start)))?)?,Reply::Bytes(_)){return Err("start reply");}
   match wait(w.submit(Action::Read(1,1))?)?{Reply::Events(e) if e.len()==2&&e[1].windows(11).any(|b|b==b"pipe-output")=>{},_=>return Err("real output events")}
   if !matches!(wait(w.submit(Action::Close(1))?)?,Reply::Closed){return Err("local close");}
   if !matches!(wait(w.submit(Action::Open("second".into()))?)?,Reply::Open(2)){return Err("replacement lease");}
   let expected=br#"{"v":1,"type":"health","requestId":"health","ok":true,"payload":{"protocol":1,"epoch":1,"lastGlobalSeq":2}}"#;
   match wait(w.submit(Action::Request(2,q("health","health","{}")))?)?{Reply::Bytes(b) if b==expected=>{},_=>return Err("owner state did not persist")}
   // Deliberately leave the local lease and run active: supervisor must close only delivery.
   Ok(())
  })();
  w.revoke();let cleanup=w.finish();assert!(result.is_ok(),"{result:?}");assert!(cleanup.is_ok(),"{cleanup:?}");
  println!("ACTUAL_WORKER_CORE_PRESERVED_AND_NATURAL_CLEANUP_PASSED");
 }
}