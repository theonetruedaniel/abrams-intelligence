//! Requested fresh WebView2 data path only. NOT actual-policy/readback or OS isolation proof.
use std::{fs::{File,OpenOptions},path::{Path,PathBuf,Component,Prefix},time::{SystemTime,UNIX_EPOCH}};
use std::os::windows::fs::{OpenOptionsExt,MetadataExt};
type Result<T>=std::result::Result<T,&'static str>;
const OVERRIDES:&[&str]=&["WEBVIEW2_USER_DATA_FOLDER","WEBVIEW2_BROWSER_EXECUTABLE_FOLDER","WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS","WEBVIEW2_CHANNEL_SEARCH_KIND","WEBVIEW2_RELEASE_CHANNELS","WEBVIEW2_WAIT_FOR_SCRIPT_DEBUGGER","WEBVIEW2_PIPE_FOR_SCRIPT_DEBUGGER"];
pub struct FreshProfile{path:PathBuf,_directories:Vec<File>}
fn safe_component(s:&str)->bool{!s.is_empty()&&s.len()<=96&&s.bytes().all(|b|b.is_ascii_alphanumeric()||b==b'-')}
fn plain_drive(path:&Path)->bool{
 let mut c=path.components();
 matches!(c.next(),Some(Component::Prefix(p)) if matches!(p.kind(),Prefix::Disk(_)))&&matches!(c.next(),Some(Component::RootDir))&&c.all(|p|matches!(p,Component::Normal(_)))
}
fn directory(path:&Path)->Result<File>{
 // READ_ATTRIBUTES, share ordinary reads/writes but not deletion/rename of this directory object.
 // Does not seal child namespaces or change ACLs.
 let f=OpenOptions::new().access_mode(0x80).share_mode(3).custom_flags(0x02000000|0x00200000).open(path).map_err(|_|"profile ancestor custody unavailable")?;
 let m=f.metadata().map_err(|_|"profile ancestor metadata unavailable")?;
 if !m.is_dir()||m.file_attributes()&0x400!=0{return Err("profile ancestor type/reparse rejected");}Ok(f)
}
fn held_ancestors(parent:&Path)->Result<Vec<File>>{
 if !plain_drive(parent){return Err("profile parent must be plain absolute drive path");}
 let mut at=PathBuf::new();let mut held=Vec::new();
 for part in parent.components(){at.push(part.as_os_str());if matches!(part,Component::Prefix(_)){continue;}if held.len()>=64{return Err("profile ancestor bound");}held.push(directory(&at)?);}
 Ok(held)
}
impl FreshProfile{
 pub fn create()->Result<Self>{
  // Do not overwrite inherited configuration, and do not inspect/modify managed registry policy.
  if OVERRIDES.iter().any(|key|std::env::var_os(key).is_some()){return Err("unexpected WebView2 launch override; no profile created");}
  let exe=std::env::current_exe().map_err(|_|"native executable path unavailable")?;
  let parent=exe.parent().ok_or("native executable parent absent")?;
  let stamp=SystemTime::now().duration_since(UNIX_EPOCH).map_err(|_|"profile clock unavailable")?.as_nanos();
  let name=format!("ui-profile-{}-{stamp}",std::process::id());
  Self::create_in(parent,&name)
 }
 fn create_in(parent:&Path,name:&str)->Result<Self>{
  if !safe_component(name){return Err("invalid native profile component");}
  let mut held=held_ancestors(parent)?;
  let path=parent.join(name);
  // No create_dir_all, no collision retry and no existing-profile reuse.
  std::fs::create_dir(&path).map_err(|_|"fresh profile creation failed; no reuse")?;
  held.push(directory(&path)?);
  Ok(Self{path,_directories:held})
 }
 pub fn path(&self)->&Path{&self.path}
}
// No Drop deletion. Retain the disposable directory as evidence, including after failed startup.
#[cfg(test)] mod tests{
 use super::*;
 fn name(prefix:&str)->String{format!("{prefix}-{}-{}",std::process::id(),SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_nanos())}
 fn parent()->PathBuf{std::env::current_exe().unwrap().parent().unwrap().to_path_buf()}
 #[test] fn component_and_parent_policy(){
  for s in ["", "../x", "a/b", "a\\b", "a:b", "a.b", "a b"]{assert!(!safe_component(s));}assert!(safe_component("ui-profile-123-456"));
  assert!(!plain_drive(Path::new("relative")));assert!(!plain_drive(Path::new(r"\\server\share\x")));assert!(!plain_drive(Path::new(r"\\?\C:\x")));assert!(!plain_drive(Path::new(r"C:\a\..\b")));assert!(plain_drive(Path::new(r"C:\a\b")));
 }
 #[test] fn native_creation_selects_fresh_sibling(){let p=FreshProfile::create().unwrap();assert_eq!(p.path().parent().unwrap(),parent());assert!(p.path().file_name().unwrap().to_str().unwrap().starts_with("ui-profile-"));assert!(p.path().is_dir());}
 #[test] fn existing_profile_is_not_reused(){let parent=parent();let n=name("collision");let p=FreshProfile::create_in(&parent,&n).unwrap();std::fs::write(p.path().join("synthetic-marker"),b"preserve").unwrap();assert!(FreshProfile::create_in(&parent,&n).is_err());assert_eq!(std::fs::read(p.path().join("synthetic-marker")).unwrap(),b"preserve");}
 #[test] fn existing_file_is_not_replaced(){let parent=parent();let n=name("existing-file");let p=parent.join(&n);std::fs::write(&p,b"synthetic").unwrap();assert!(FreshProfile::create_in(&parent,&n).is_err());assert_eq!(std::fs::read(&p).unwrap(),b"synthetic");}
 #[test] fn retired_profile_is_preserved_as_evidence(){let p=FreshProfile::create().unwrap();let path=p.path().to_path_buf();std::fs::write(path.join("synthetic-marker"),b"retained").unwrap();drop(p);assert_eq!(std::fs::read(path.join("synthetic-marker")).unwrap(),b"retained");println!("FRESH_PROFILE_NATIVE_PATH_AND_NO_REUSE_PASSED");}
}