mod bridge;
mod commands;
mod worker;
#[path="../../profile.rs"] mod profile;
#[path="../../profile-policy.rs"] mod profile_policy;
#[path="../../bundle.rs"] mod bundle;
#[path="../../pipe-endpoint.rs"] mod pipe_endpoint;
use std::sync::{Arc,Mutex,mpsc,atomic::{AtomicU32,Ordering}};
use tauri::Manager;
struct AppState {worker:Arc<worker::CoreWorker>,loads:AtomicU32}
struct Timer {stop:mpsc::SyncSender<()>,join:std::thread::JoinHandle<bool>}
fn main()->std::process::ExitCode {
 // Only this native launch choice constructs an owner. Renderer data cannot do so.
 let args:Vec<_>=std::env::args_os().skip(1).collect();
 let synthetic=match args.as_slice(){[]=>false,[arg] if arg=="--synthetic-core-fixture"=>true,_=>return std::process::ExitCode::FAILURE};
 // Presence-only policy gate reads no values and never suppresses managed policy.
 if profile_policy::verify_launch_policy().is_err(){return std::process::ExitCode::FAILURE;}
 // Requested UDF is fresh and native-selected; actual readback is still a launch prerequisite.
 let profile=match profile::FreshProfile::create(){Ok(p)=>p,Err(_)=>return std::process::ExitCode::FAILURE};
 let profile_path=profile.path().to_path_buf();
 let worker=match worker::CoreWorker::start(synthetic){Ok(w)=>w,Err(_)=>return std::process::ExitCode::FAILURE};
 // Retain cleanup authority outside build/run_return, including setup panic paths.
 let timer:Arc<Mutex<Option<Timer>>>=Arc::new(Mutex::new(None));
 let lifecycle=std::panic::catch_unwind(std::panic::AssertUnwindSafe(||{
  let timer_slot=timer.clone();
  let app=tauri::Builder::default()
   .manage(AppState{worker:worker.clone(),loads:AtomicU32::new(0)})
   .invoke_handler(tauri::generate_handler![commands::core_open,commands::core_request,commands::core_read_events,commands::core_close])
   .on_window_event(|window,event|{
    if window.label()=="main"&&matches!(event,tauri::WindowEvent::Destroyed){window.state::<AppState>().worker.revoke();}
   })
   .on_page_load(|webview,payload|{
    if webview.label()=="main"&&matches!(payload.event(),tauri::webview::PageLoadEvent::Started){
     let state=webview.state::<AppState>();
     if state.loads.fetch_add(1,Ordering::SeqCst)>0{state.worker.revoke();}
    }
   })
   .setup(move|app|{
    let admission=if synthetic{"true"}else{"false"};
    let window=tauri::WebviewWindowBuilder::new(app,"main",tauri::WebviewUrl::App("index.html".into()))
     .title("Abrams Phase 2 Shell Fixture").inner_size(800.0,640.0).use_https_scheme(true).devtools(false)
     .data_directory(profile_path.clone()).additional_browser_args("")
     .browser_extensions_enabled(false).general_autofill_enabled(false)
     .on_permission_request(|_,_|tauri::webview::PermissionResponse::Deny)
     .on_download(|_,_|false)
     // This selects the frontend consumer only, never grants owner authority.
     .initialization_script(format!("Object.defineProperty(window,'__ABRAMS_SYNTHETIC_ADMITTED__',{{value:{admission},writable:false,configurable:false}});"))
     .on_navigation(|url|url.scheme()=="https"&&url.host_str()==Some("tauri.localhost")&&url.port().is_none()&&url.username().is_empty()&&url.password().is_none()&&url.query().is_none()&&matches!(url.path(),"/"|"/index.html"))
     .on_new_window(|_,_|tauri::webview::NewWindowResponse::Deny).build()?;
    let mut retained_timer=timer_slot.lock().map_err(|_|std::io::Error::other("timer custody poisoned"))?;
    let close_worker=app.state::<AppState>().worker.clone();let(tx,rx)=mpsc::sync_channel(1);
    let join=std::thread::Builder::new().name("fixture-exit-timer".into()).spawn(move||{
     if matches!(rx.recv_timeout(std::time::Duration::from_secs(15)),Err(mpsc::RecvTimeoutError::Timeout)){close_worker.revoke();window.close().is_ok()}else{true}
    })?;
    *retained_timer=Some(Timer{stop:tx,join});
    Ok(())
   }).build(tauri::generate_context!()).map_err(|_|"native build failed")?;
  Ok::<i32,&'static str>(app.run_return(|app,event|{
   if matches!(event,tauri::RunEvent::Exit|tauri::RunEvent::ExitRequested{..}){app.state::<AppState>().worker.revoke();}
  }))
 }));
 worker.revoke();
 let timer_clean=match timer.lock(){Ok(mut slot)=>match slot.take(){Some(timer)=>{let _=timer.stop.try_send(());matches!(timer.join.join(),Ok(true))},None=>true},Err(_)=>false};
 let owner_clean=worker.finish().is_ok();
 if matches!(lifecycle,Ok(Ok(0)))&&timer_clean&&owner_clean{std::process::ExitCode::SUCCESS}else{std::process::ExitCode::FAILURE}
}