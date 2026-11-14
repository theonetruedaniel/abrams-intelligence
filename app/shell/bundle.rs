//! Fixture-only native trust/custody. No renderer arguments, environment overrides or discovery.
use std::fs::{File,OpenOptions};
use std::io::Read;
use std::path::{Path,PathBuf,Component,Prefix};
use std::collections::BTreeSet;
use std::os::windows::fs::{OpenOptionsExt,MetadataExt};
#[path="bundle-spec.rs"] mod spec;
type Result<T>=std::result::Result<T,&'static str>;
const REPARSE:u32=0x400;
const OPEN_REPARSE:u32=0x0020_0000;
const BACKUP_SEMANTICS:u32=0x0200_0000;
const SHARE_READ:u32=1;
const READ_ATTRIBUTES:u32=0x80;
const MAX_TOTAL:u64=128*1024*1024;
#[link(name="bcrypt")] extern "system" {
 fn BCryptOpenAlgorithmProvider(handle:*mut *mut std::ffi::c_void,name:*const u16,implementation:*const u16,flags:u32)->i32;
 fn BCryptGetProperty(handle:*mut std::ffi::c_void,name:*const u16,out:*mut u8,size:u32,result:*mut u32,flags:u32)->i32;
 fn BCryptCreateHash(alg:*mut std::ffi::c_void,hash:*mut *mut std::ffi::c_void,object:*mut u8,size:u32,secret:*mut u8,secret_size:u32,flags:u32)->i32;
 fn BCryptHashData(hash:*mut std::ffi::c_void,data:*const u8,size:u32,flags:u32)->i32;
 fn BCryptFinishHash(hash:*mut std::ffi::c_void,out:*mut u8,size:u32,flags:u32)->i32;
 fn BCryptDestroyHash(hash:*mut std::ffi::c_void)->i32;
 fn BCryptCloseAlgorithmProvider(alg:*mut std::ffi::c_void,flags:u32)->i32;
}
struct Cng {alg:*mut std::ffi::c_void,hash:*mut std::ffi::c_void,object:Vec<u8>}
impl Drop for Cng{fn drop(&mut self){unsafe{if !self.hash.is_null(){BCryptDestroyHash(self.hash);}if !self.alg.is_null(){BCryptCloseAlgorithmProvider(self.alg,0);}}}}
fn digest(reader:&mut impl Read,length:u64)->Result<String>{
 if length>MAX_TOTAL{return Err("hash input bound");}
 let mut c=Cng{alg:std::ptr::null_mut(),hash:std::ptr::null_mut(),object:Vec::new()};
 let sha:Vec<u16>="SHA256\0".encode_utf16().collect();let prop:Vec<u16>="ObjectLength\0".encode_utf16().collect();
 unsafe{
  if BCryptOpenAlgorithmProvider(&mut c.alg,sha.as_ptr(),std::ptr::null(),0)<0{return Err("SHA256 provider failed");}
  let(mut size,mut got)=(0u32,0u32);
  if BCryptGetProperty(c.alg,prop.as_ptr(),(&mut size as *mut u32).cast(),4,&mut got,0)<0||got!=4||size==0||size>4096{return Err("hash object bound");}
  c.object=vec![0;size as usize];
  if BCryptCreateHash(c.alg,&mut c.hash,c.object.as_mut_ptr(),size,std::ptr::null_mut(),0,0)<0{return Err("hash create failed");}
 }
 let mut read=0u64;let mut block=[0u8;65536];
 loop{let n=reader.read(&mut block).map_err(|_|"hash read failed")?;if n==0{break;}read=read.checked_add(n as u64).ok_or("hash size overflow")?;if read>length{return Err("hash size mismatch");}if unsafe{BCryptHashData(c.hash,block.as_ptr(),n as u32,0)}<0{return Err("hash update failed");}}
 if read!=length{return Err("hash size mismatch");}
 let mut hash=[0u8;32];if unsafe{BCryptFinishHash(c.hash,hash.as_mut_ptr(),32,0)}<0{return Err("hash finish failed");}
 Ok(hash.iter().map(|b|format!("{b:02x}")).collect())
}
fn normal_relative(value:&str)->bool{
 !value.is_empty()&&value.len()<=160&&!value.contains('\\')&&!value.contains(':')&&value.split('/').all(|p|!p.is_empty()&&p!="."&&p!="..")&&Path::new(value).components().all(|c|matches!(c,Component::Normal(_)))
}
fn directory(path:&Path)->Result<File>{
 let file=OpenOptions::new().access_mode(READ_ATTRIBUTES).share_mode(SHARE_READ).custom_flags(BACKUP_SEMANTICS|OPEN_REPARSE).open(path).map_err(|_|"directory custody unavailable")?;
 let m=file.metadata().map_err(|_|"directory metadata unavailable")?;
 if !m.is_dir()||m.file_attributes()&REPARSE!=0{return Err("directory reparse or type rejected");}Ok(file)
}
fn safe_root(path:&Path)->bool{
 let Some(s)=path.to_str()else{return false;};let b=s.as_bytes();
 // Supported serialization is one plain local drive path. No UNC/verbatim prefix,
 // lossy Unicode, permission-list comma/glob tokens or Win32 trailing-dot aliases.
 if b.len()<3||b.len()>512||!b[0].is_ascii_alphabetic()||b[1]!=b':'||b[2]!=b'\\'{return false;}
 s[3..].split('\\').all(|part|!part.is_empty()&&part!="."&&part!=".."&&!part.ends_with(' ')&&!part.ends_with('.')&&part.bytes().all(|c|c.is_ascii_alphanumeric()||b" _-.".contains(&c)))
}
fn ancestors(path:&Path)->Result<Vec<File>>{
 if !safe_root(path){return Err("unsupported bundle path serialization");}
 let mut at=PathBuf::new();let mut held=Vec::new();let mut prefix=false;let mut rooted=false;
 for c in path.components(){if held.len()>=64{return Err("ancestor bound");}match c{
  Component::Prefix(p) if !prefix=>{if !matches!(p.kind(),Prefix::Disk(_)){return Err("nonlocal bundle path");}prefix=true;at.push(p.as_os_str());},
  Component::RootDir if prefix&&!rooted=>{at.push(c.as_os_str());rooted=true;held.push(directory(&at)?);},
  Component::Normal(name) if rooted=>{at.push(name);held.push(directory(&at)?);},
  _=>return Err("noncanonical bundle path"),
 }}
 if !rooted||held.len()>64{return Err("ancestor bound");}Ok(held)
}
pub(crate) struct BundleLease{root:PathBuf,_files:Vec<File>,_directories:Vec<File>}
impl BundleLease{
 pub(crate) fn acquire()->Result<Self>{let exe=std::env::current_exe().map_err(|_|"native executable path unavailable")?;let parent=exe.parent().ok_or("native parent absent")?;Self::at(&parent.join("fixture-bundle"))}
 fn at(root:&Path)->Result<Self>{
  let mut held=ancestors(root)?;
  let mut names=BTreeSet::new();let mut dirs=BTreeSet::new();let mut total=0u64;
  if spec::FILES.len()!=16{return Err("bundle closure count");}
  for p in spec::FILES{
   if !normal_relative(p.path)||!names.insert(p.path.to_string())||p.length>MAX_TOTAL{return Err("native pin invalid");}
   total=total.checked_add(p.length).ok_or("bundle size overflow")?;if total>MAX_TOTAL{return Err("bundle size bound");}
   let mut parent=Path::new(p.path).parent();while let Some(v)=parent{if v.as_os_str().is_empty(){break;}dirs.insert(v.to_path_buf());parent=v.parent();}
  }
  for d in &dirs{held.push(directory(&root.join(d))?);}
  // Bounded exact namespace check, including no extra DLL/config/module files.
  let mut seen=0usize;
  for d in std::iter::once(PathBuf::new()).chain(dirs.iter().cloned()){
   for entry in std::fs::read_dir(root.join(&d)).map_err(|_|"bundle inventory unavailable")?{
    seen+=1;if seen>64{return Err("bundle entry bound");}let entry=entry.map_err(|_|"bundle entry unavailable")?;
    let relative=d.join(entry.file_name());let m=std::fs::symlink_metadata(entry.path()).map_err(|_|"bundle entry metadata")?;
    if m.file_attributes()&REPARSE!=0{return Err("bundle reparse rejected");}
    if m.is_dir(){if !dirs.contains(&relative){return Err("extra bundle directory");}}
    else if !m.is_file()||!names.contains(&relative.to_string_lossy().replace('\\',"/")){return Err("extra bundle file");}
   }
  }
  let mut files=Vec::with_capacity(spec::FILES.len());
  for p in spec::FILES{
   let mut file=OpenOptions::new().read(true).share_mode(SHARE_READ).custom_flags(OPEN_REPARSE).open(root.join(p.path)).map_err(|_|"pinned file custody unavailable")?;
   let m=file.metadata().map_err(|_|"pinned file metadata unavailable")?;
   if !m.is_file()||m.file_attributes()&REPARSE!=0||m.len()!=p.length{return Err("pinned file type or length mismatch");}
   if digest(&mut file,p.length)?!=p.sha256{return Err("pinned file digest mismatch");}files.push(file);
  }
  Ok(Self{root:root.to_path_buf(),_files:files,_directories:held})
 }
 pub(crate) fn node(&self)->PathBuf{self.root.join("node.exe")}
 pub(crate) fn entry(&self,failure:bool)->PathBuf{self.root.join(if failure{"failure-peer.mjs"}else{"owner-entry.mjs"})}
 pub(crate) fn root(&self)->&Path{&self.root}
 pub(crate) fn source_permissions(&self)->Vec<String>{spec::FILES.iter().filter(|p|p.path.ends_with(".mjs")||p.path.ends_with(".mts")).map(|p|format!("--allow-fs-read={}",self.root.join(p.path).to_str().expect("validated ASCII drive path"))).collect()}
}
#[cfg(test)] pub(crate) mod tests{
 use super::*;
 pub(crate) fn assert_module_write_denied()->Result<()>{
  let root=std::env::current_exe().map_err(|_|"test executable path")?.parent().ok_or("test parent")?.join("fixture-bundle");
  for name in ["node.exe","owner-entry.mjs","bundle-manifest.json"]{match OpenOptions::new().write(true).open(root.join(name)){Err(e) if e.raw_os_error()==Some(32)=>{},Err(_)=>return Err("write rejection was not sharing violation32"),Ok(_)=>return Err("live pinned file not write leased")}}
  println!("PINNED_LIVE_WRITES_REJECTED_SHARING_VIOLATION32");Ok(())
 }
 pub(crate) fn assert_writable_after_retirement()->Result<()>{
  let root=std::env::current_exe().map_err(|_|"test executable path")?.parent().ok_or("test parent")?.join("fixture-bundle");
  for name in ["node.exe","owner-entry.mjs","bundle-manifest.json"]{drop(OpenOptions::new().write(true).open(root.join(name)).map_err(|_|"unleased write-open unavailable")?);}Ok(())
 }
 pub(crate) fn prerequisites(){
  sha256_known_answers();native_relative_policy();
  use std::sync::atomic::Ordering;
  let root=std::env::current_exe().unwrap().parent().unwrap().join("fixture-bundle");
  let before=crate::pipe_endpoint::SPAWN_ATTEMPTS.load(Ordering::SeqCst);
  assert_writable_after_retirement().unwrap();
  let unleased=root.with_file_name("directory-rename-probe");assert!(!unleased.exists());
  std::fs::rename(&root,&unleased).unwrap();std::fs::rename(&unleased,&root).unwrap();
  let lease=BundleLease::acquire().unwrap();assert_module_write_denied().unwrap();
  // Only a new synthetic sibling in this owned relocation. Broad ancestors do not
  // claim to seal their descendant namespaces or prohibit ordinary sibling writes.
  let sibling=root.parent().unwrap().join("ancestor-lease-sibling.txt");
  let mut sibling_file=OpenOptions::new().write(true).create_new(true).open(&sibling).unwrap();
  std::io::Write::write_all(&mut sibling_file,b"synthetic ancestor lease scope proof").unwrap();drop(sibling_file);
  let module=root.join("owner-entry.mjs");let moved_module=root.parent().unwrap().join("unexpected-module-move.mjs");assert!(!moved_module.exists());
  let module_rename=std::fs::rename(&module,&moved_module);if module_rename.is_ok(){std::fs::rename(&moved_module,&module).unwrap();}assert_eq!(module_rename.unwrap_err().raw_os_error(),Some(32));
  let moved=unleased.clone();
  let renamed=std::fs::rename(&root,&moved);if renamed.is_ok(){std::fs::rename(&moved,&root).unwrap();}let directory_code=renamed.unwrap_err().raw_os_error();assert!(matches!(directory_code,Some(5)|Some(32)),"unexpected leased directory rename error: {directory_code:?}");
  println!("PINNED_FILE_RENAME_REJECTED_SHARING_VIOLATION32");
  drop(lease);assert_writable_after_retirement().unwrap();
  std::fs::rename(&root,&unleased).unwrap();std::fs::rename(&unleased,&root).unwrap();
  std::fs::rename(&module,&moved_module).unwrap();std::fs::rename(&moved_module,&module).unwrap();
  println!("PINNED_DIRECTORY_RENAME_BLOCKED code={} SAME_PATH_UNLEASED_BASELINES_PASSED",directory_code.unwrap());
  let node=root.join("node.exe");let missing=root.parent().unwrap().join("temporarily-missing-node.exe");assert!(!missing.exists());
  std::fs::rename(&node,&missing).unwrap();
  let w=crate::worker::CoreWorker::start(false).unwrap();let disconnected=crate::worker::tests::wait(w.submit(crate::worker::Action::Open("no-bundle".into())).unwrap()).is_err();let cleaned=w.finish().is_ok();
  let rejected=crate::pipe_endpoint::PipeOwner::spawn();
  std::fs::rename(&missing,&node).unwrap();
  if let Ok(owner)=&rejected{owner.lock().unwrap().retire_failure().unwrap();}
  assert!(disconnected&&cleaned&&rejected.is_err());assert_eq!(crate::pipe_endpoint::SPAWN_ATTEMPTS.load(Ordering::SeqCst),before);
  for name in ["bundle-manifest.json","owner-entry.mjs"]{
   let path=root.join(name);let original=std::fs::read(&path).unwrap();let mut changed=original.clone();changed[0]^=1;std::fs::write(&path,&changed).unwrap();
   let rejected=crate::pipe_endpoint::PipeOwner::spawn();
   if let Ok(owner)=&rejected{owner.lock().unwrap().retire_failure().unwrap();}
   std::fs::write(&path,&original).unwrap();
   assert!(rejected.is_err());assert_eq!(crate::pipe_endpoint::SPAWN_ATTEMPTS.load(Ordering::SeqCst),before);
  }
  assert!(BundleLease::acquire().is_ok());
  println!("PINNED_BUNDLE_REJECTION_BEFORE_SPAWN_AND_CUSTODY_PASSED");
 }
 #[test] fn sha256_known_answers(){
  for(data,expected)in [(b"".as_slice(),"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"),(b"abc".as_slice(),"ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad")]{assert_eq!(digest(&mut std::io::Cursor::new(data),data.len()as u64).unwrap(),expected);}
  assert!(digest(&mut std::io::Cursor::new(b"abc"),2).is_err());
 }
 #[test] fn native_relative_policy(){for p in ["../x","/x","C:/x","owner/../x","owner\\x","owner//x",""]{assert!(!normal_relative(p));}assert!(normal_relative("owner/framing.mts"));for root in [r"C:\safe,unsafe",r"C:\wild*",r"\\?\C:\root",r"C:\root.",r"C:\root ",r"C:\a\..\b"]{assert!(!safe_root(Path::new(root)));}assert!(safe_root(Path::new(r"C:\relocated two\fixture-bundle")));assert!(ancestors(Path::new("relative/fixture-bundle")).is_err());}
}
