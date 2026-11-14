//! Conservative presence-only launch guard. No registry values, enumeration or mutation.
#[derive(Clone,Copy,Debug)] enum Observation{Absent,Present,Unknown}
#[derive(Clone,Copy)] struct Location{hive:isize,view:u32,key:&'static str}
const HIVES:[isize;2]=[0x80000002u32 as i32 as isize,0x80000001u32 as i32 as isize];
const VIEWS:[u32;2]=[0x0100,0x0200];
const KEYS:[&str;5]=[
 r"Software\Policies\Microsoft\Edge\WebView2\BrowserExecutableFolder",
 r"Software\Policies\Microsoft\Edge\WebView2\UserDataFolder",
 r"Software\Policies\Microsoft\Edge\WebView2\AdditionalBrowserArguments",
 r"Software\Policies\Microsoft\Edge\WebView2\ChannelSearchKind",
 r"Software\Policies\Microsoft\Edge\WebView2\ReleaseChannels",
];
fn check(mut observe:impl FnMut(Location)->Observation)->Result<(),&'static str>{
 for hive in HIVES{for view in VIEWS{for key in KEYS{
  if !matches!(observe(Location{hive,view,key}),Observation::Absent){return Err("WebView2 policy present or unverified; no launch");}
 }}}Ok(())
}
#[link(name="advapi32")] extern "system"{
 fn RegOpenKeyExW(key:*mut std::ffi::c_void,subkey:*const u16,options:u32,access:u32,result:*mut *mut std::ffi::c_void)->i32;
 fn RegCloseKey(key:*mut std::ffi::c_void)->i32;
}
fn windows_observation(location:Location)->Observation{
 let key:Vec<u16>=location.key.encode_utf16().chain(std::iter::once(0)).collect();let mut handle=std::ptr::null_mut();
 let result=unsafe{RegOpenKeyExW(location.hive as *mut _,key.as_ptr(),0,0x0001|location.view,&mut handle)};
 match result{
  2 if handle.is_null()=>Observation::Absent, // ERROR_FILE_NOT_FOUND only, not access-denied/path/error aliases.
  0 if !handle.is_null()=>{if unsafe{RegCloseKey(handle)}==0{Observation::Present}else{Observation::Unknown}},
  _=>Observation::Unknown,
 }
}
/// Main calls once before creating profile, Core owner or WebView. No retries.
/// The20 presence checks are a snapshot, not a lock against later policy changes.
pub fn verify_launch_policy()->Result<(),&'static str>{check(windows_observation)}
#[cfg(test)] mod tests{
 use super::*;
 #[test] fn all_twenty_documented_locations_must_be_absent(){let mut seen=std::collections::BTreeSet::new();assert!(check(|l|{assert!(seen.insert((l.hive,l.view,l.key)));Observation::Absent}).is_ok());assert_eq!(seen.len(),20);}
 #[test] fn any_present_policy_stops_without_reading_values(){let mut n=0;assert!(check(|_|{n+=1;Observation::Present}).is_err());assert_eq!(n,1);}
 #[test] fn any_unknown_or_denied_observation_stops_without_retry(){let mut n=0;assert!(check(|_|{n+=1;Observation::Unknown}).is_err());assert_eq!(n,1);println!("POLICY_PRESENCE_FAIL_CLOSED_INJECTED_ONLY_PASSED");}
}