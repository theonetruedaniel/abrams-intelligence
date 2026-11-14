use tauri::{Manager, Webview};
use crate::{AppState,worker::{Action,Reply,Response}};
// Tauri supplies this Webview, not the renderer. The application creates exactly
// one webview and exposes no create/navigate/plugin authority. ACL is local-only.
fn authorized(webview: &Webview) -> Result<(), &'static str> {
    let url = webview.url().map_err(|_| "source unavailable")?;
    if webview.label() != "main" || webview.window().label() != "main"
        || url.scheme() != "https" || url.host_str() != Some("tauri.localhost")
        || url.port().is_some() || !url.username().is_empty() || url.password().is_some()
        || url.query().is_some() || !matches!(url.path(), "/" | "/index.html") {
        return Err("unowned source");
    }
    Ok(())
}
fn confirm(webview:&Webview)->Result<(),&'static str>{
 authorized(webview)?;if webview.state::<AppState>().worker.is_revoked(){Err("native document retired")}else{Ok(())}
}
fn submit(webview:&Webview,action:Action)->Result<Response,&'static str>{
 authorized(webview)?;
 webview.state::<AppState>().worker.submit(action)
}
#[tauri::command]
pub async fn core_open(webview:Webview,operation_id:String)->Result<u32,&'static str>{
 let reply=submit(&webview,Action::Open(operation_id))?.await?;confirm(&webview)?;match reply{Reply::Open(g)=>Ok(g),_=>Err("unexpected native reply")}
}
#[tauri::command]
pub async fn core_request(webview:Webview,generation:u32,bytes:Vec<u8>)->Result<Vec<u8>,&'static str>{
 let reply=submit(&webview,Action::Request(generation,bytes))?.await?;confirm(&webview)?;match reply{Reply::Bytes(b)=>Ok(b),_=>Err("unexpected native reply")}
}
#[tauri::command]
pub async fn core_read_events(webview:Webview,generation:u32,read_id:u32)->Result<Vec<Vec<u8>>,&'static str>{
 let reply=submit(&webview,Action::Read(generation,read_id))?.await?;confirm(&webview)?;match reply{Reply::Events(e)=>Ok(e),_=>Err("unexpected native reply")}
}
#[tauri::command]
pub async fn core_close(webview:Webview,generation:u32)->Result<(),&'static str>{
 let reply=submit(&webview,Action::Close(generation))?.await?;confirm(&webview)?;match reply{Reply::Closed=>Ok(()),_=>Err("unexpected native reply")}
}