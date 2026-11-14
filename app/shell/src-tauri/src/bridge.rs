//! Native-only relay. No Core transition, approval, endpoint or process authority.
use std::collections::HashMap;
use std::sync::{Mutex, atomic::{AtomicBool, AtomicU32, Ordering}};

pub const MAX_BYTES: usize = 65_536;
pub const MAX_EVENTS: usize = 16;
pub const MAX_REPLY_BYTES: usize = 1_048_576;
const MAX_OPEN_OPERATIONS: usize = 1024;
const LIMIT: u32 = 2_147_483_647;

/// A separately admitted owner must implement this on the native side. Bytes are
/// the existing v1 protocol. request MUST validate with the authoritative Core
/// parser before mutation, including exact requestId/canonical-payload deduplication.
/// read_events must return at most limit without truncating/dropping unreturned
/// queued events. These are required owner-admission contracts, not trait guarantees.
/// close retires local delivery only, never global Stop.
/// Successful close proves all callbacks/queues for this lease are retired.
/// This trait is NOT an implementation of the missing Rust-to-TypeScript IPC.
pub trait CoreEndpoint: Send {
    fn open(&mut self, generation: u32) -> Result<(), &'static str>;
    fn request(&mut self, bytes: Vec<u8>, generation: u32) -> Result<Vec<u8>, &'static str>;
    fn read_events(&mut self, generation: u32, limit: usize) -> Result<Vec<Vec<u8>>, &'static str>;
    fn close(&mut self, generation: u32) -> Result<(), &'static str>;
}

pub struct Bridge {
    owner: Option<Box<dyn CoreEndpoint>>,
    generation: u32,
    active: bool,
    uncertain: bool,
    stopped: bool,
    read_id: u32,
    open_ids: HashMap<String, u32>,
    retained_events: Vec<Vec<u8>>,
}
impl Bridge {
    pub fn disconnected() -> Self {
        Self { owner: None, generation: 0, active: false, uncertain: false, stopped: false, read_id: 0, open_ids: HashMap::new(), retained_events: Vec::new() }
    }
    // Native construction only. There is no renderer installation command.
    #[allow(dead_code)]
    pub fn with_admitted_owner(owner: Box<dyn CoreEndpoint>) -> Self {
        Self { owner: Some(owner), ..Self::disconnected() }
    }
    fn available(&self) -> Result<(), &'static str> {
        if self.stopped || self.uncertain || self.owner.is_none() { Err("Core unavailable") } else { Ok(()) }
    }
    fn current(&self, generation: u32) -> Result<(), &'static str> {
        self.available()?;
        if !self.active || generation != self.generation { Err("inactive generation") } else { Ok(()) }
    }
    fn retire(&mut self) -> Result<(), &'static str> {
        if !self.active { return if self.uncertain { Err("cleanup uncertain") } else { Ok(()) }; }
        self.active = false; // Authority ends before owner cleanup.
        self.retained_events.clear();
        if self.owner.as_mut().ok_or("Core unavailable")?.close(self.generation).is_err() {
            self.uncertain = true;
            return Err("cleanup uncertain");
        }
        Ok(())
    }
    fn failed<T>(&mut self) -> Result<T, &'static str> {
        let _ = self.retire();
        Err("Core operation failed; local lease retired")
    }
    pub fn open(&mut self, operation_id: String) -> Result<u32, &'static str> {
        self.available()?;
        if operation_id.is_empty() || operation_id.len() > 64 || !operation_id.bytes().all(|b| b.is_ascii_alphanumeric() || b == b'_' || b == b'-') { return Err("invalid acquisition operation"); }
        if let Some(prior) = self.open_ids.get(&operation_id) {
            return if self.active && *prior == self.generation { Ok(*prior) } else { Err("retired acquisition operation") };
        }
        if self.active || self.generation >= LIMIT || self.open_ids.len() >= MAX_OPEN_OPERATIONS {
            return Err("subscription unavailable");
        }
        // A failed acquisition cannot establish cleanup, so replacement is blocked.
        let generation = self.generation + 1;
        self.generation = generation;
        self.open_ids.insert(operation_id, generation);
        self.uncertain = true;
        self.owner.as_mut().unwrap().open(generation)?;
        self.uncertain = false;
        self.active = true;
        self.read_id = 0;
        self.retained_events.clear();
        Ok(generation)
    }
    pub fn request(&mut self, generation: u32, bytes: Vec<u8>) -> Result<Vec<u8>, &'static str> {
        self.current(generation)?;
        if bytes.is_empty() || bytes.len() > MAX_BYTES { return Err("bounded request required"); }
        match self.owner.as_mut().unwrap().request(bytes, generation) {
            Ok(reply) if !reply.is_empty() && reply.len() <= MAX_REPLY_BYTES => Ok(reply),
            _ => self.failed(),
        }
    }
    pub fn read_events(&mut self, generation: u32, read_id: u32) -> Result<Vec<Vec<u8>>, &'static str> {
        self.current(generation)?;
        // Stock Tauri may repeat one invocation after an uncertain response.
        // A repeat returns the retained batch; only the exact next read ID
        // acknowledges it and is allowed to drain again. No silent event loss.
        if read_id == 0 { return Err("invalid read operation"); }
        if read_id == self.read_id { return Ok(self.retained_events.clone()); }
        if self.read_id.checked_add(1) != Some(read_id) { return Err("stale or skipped read operation"); }
        match self.owner.as_mut().unwrap().read_events(generation, MAX_EVENTS) {
                        Ok(events) if events.len() <= MAX_EVENTS && events.iter().all(|b| !b.is_empty() && b.len() <= MAX_BYTES) => {
                self.read_id = read_id;
                self.retained_events = events.clone();
                Ok(events)
            },
            _ => self.failed(),
        }
    }
    pub fn close(&mut self, generation: u32) -> Result<(), &'static str> {
        // Duplicate release can acknowledge proven retirement, not close a replacement.
        if generation != self.generation || generation == 0 { return Err("inactive generation"); }
        self.retire()
    }
    pub fn shutdown(&mut self) { self.stopped = true; let _ = self.retire(); }
}

pub struct NativeBridge { pub inner: Mutex<Bridge>, pub revoked: AtomicBool, pub loads: AtomicU32 }
impl NativeBridge {
    pub fn disconnected() -> Self { Self { inner: Mutex::new(Bridge::disconnected()), revoked: AtomicBool::new(false), loads: AtomicU32::new(0) } }
    pub fn revoke(&self) {
        self.revoked.store(true, Ordering::SeqCst);
        if let Ok(mut bridge) = self.inner.try_lock() { bridge.shutdown(); }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::collections::HashMap;
use std::sync::{Arc, Mutex};
    #[derive(Default)] struct Facts { opened: Vec<u32>, closed: Vec<u32>, requests: usize, reads: usize, reply_size: usize, fail_open: bool, fail_close: bool, oversized: bool, overflow: bool }
    struct Owner(Arc<Mutex<Facts>>);
    impl CoreEndpoint for Owner {
        fn open(&mut self, g:u32)->Result<(), &'static str>{let mut f=self.0.lock().unwrap();f.opened.push(g);if f.fail_open {Err("unknown acquisition")}else{Ok(())}}
        fn request(&mut self,_:Vec<u8>,_:u32)->Result<Vec<u8>, &'static str>{let mut f=self.0.lock().unwrap();f.requests+=1;Ok(vec![1; if f.oversized {MAX_REPLY_BYTES+1}else{f.reply_size.max(1)}])}
        fn read_events(&mut self,_:u32,limit:usize)->Result<Vec<Vec<u8>>, &'static str>{let mut f=self.0.lock().unwrap();f.reads+=1;Ok(vec![vec![1];if f.overflow{limit+1}else{1}])}
        fn close(&mut self,g:u32)->Result<(), &'static str>{let mut f=self.0.lock().unwrap();f.closed.push(g);if f.fail_close{Err("uncertain")}else{Ok(())}}
    }
    fn fixture()->(Bridge,Arc<Mutex<Facts>>){let f=Arc::new(Mutex::new(Facts::default()));(Bridge::with_admitted_owner(Box::new(Owner(f.clone()))),f)}
    #[test] fn absent_owner_stays_disconnected(){let mut b=Bridge::disconnected();assert!(b.open("open-one".into()).is_err());assert!(b.request(1,vec![1]).is_err());}
    #[test] fn native_handle_advances_after_proven_close(){let(mut b,f)=fixture();assert_eq!(b.open("open-one".into()),Ok(1));assert_eq!(b.close(1),Ok(()));assert_eq!(b.open("open-two".into()),Ok(2));assert!(b.close(1).is_err());assert!(b.request(1,vec![1]).is_err());assert_eq!(f.lock().unwrap().closed,vec![1]);}
    #[test] fn overlap_is_denied(){let(mut b,_)=fixture();assert_eq!(b.open("open-one".into()),Ok(1));assert!(b.open("other".into()).is_err());}
    #[test] fn failed_acquisition_blocks_replacement(){let(mut b,f)=fixture();f.lock().unwrap().fail_open=true;assert!(b.open("open-one".into()).is_err());assert!(b.open("open-one".into()).is_err());assert_eq!(f.lock().unwrap().opened.len(),1);}
    #[test] fn failed_release_blocks_replacement(){let(mut b,f)=fixture();b.open("open-one".into()).unwrap();f.lock().unwrap().fail_close=true;assert!(b.close(1).is_err());assert!(b.open("open-one".into()).is_err());assert!(b.close(1).is_err());}
    #[test] fn oversized_input_never_reaches_owner(){let(mut b,f)=fixture();b.open("open-one".into()).unwrap();assert!(b.request(1,vec![0;MAX_BYTES+1]).is_err());assert_eq!(f.lock().unwrap().requests,0);}
    #[test] fn valid_large_reply_is_not_capped_at_request_limit(){let(mut b,f)=fixture();b.open("large".into()).unwrap();f.lock().unwrap().reply_size=MAX_BYTES+1;assert_eq!(b.request(1,vec![1]).unwrap().len(),MAX_BYTES+1);}
    #[test] fn acquisition_history_is_bounded_and_never_evicted(){let(mut b,_)=fixture();for i in 0..MAX_OPEN_OPERATIONS{let g=b.open(format!("op-{i}")).unwrap();b.close(g).unwrap();}assert!(b.open("op-0".into()).is_err());assert!(b.open("new".into()).is_err());}
    #[test] fn oversized_reply_retires_lease(){let(mut b,f)=fixture();b.open("open-one".into()).unwrap();f.lock().unwrap().oversized=true;assert!(b.request(1,vec![1]).is_err());assert_eq!(f.lock().unwrap().closed,vec![1]);}
    #[test] fn overflowing_event_batch_retires_without_truncation(){let(mut b,f)=fixture();b.open("open-one".into()).unwrap();f.lock().unwrap().overflow=true;assert!(b.read_events(1,1).is_err());assert_eq!(f.lock().unwrap().closed,vec![1]);}
    #[test] fn shutdown_retires_and_never_reopens(){let(mut b,f)=fixture();b.open("open-one".into()).unwrap();b.shutdown();assert_eq!(f.lock().unwrap().closed,vec![1]);assert!(b.open("open-one".into()).is_err());}
    #[test] fn lost_read_response_duplicate_returns_retained_batch(){let(mut b,f)=fixture();b.open("open-one".into()).unwrap();let first=b.read_events(1,1).unwrap();assert_eq!(b.read_events(1,1).unwrap(),first);assert_eq!(f.lock().unwrap().reads,1);b.read_events(1,2).unwrap();assert!(b.read_events(1,1).is_err());assert!(b.read_events(1,4).is_err());assert_eq!(f.lock().unwrap().reads,2);}
    #[test] fn lost_open_response_duplicate_returns_same_lease(){let(mut b,f)=fixture();assert_eq!(b.open("open-one".into()),Ok(1));assert_eq!(b.open("open-one".into()),Ok(1));assert_eq!(f.lock().unwrap().opened,vec![1]);b.close(1).unwrap();assert!(b.open("open-one".into()).is_err());assert_eq!(b.open("new".into()),Ok(2));assert!(b.open("open-one".into()).is_err());}
    #[test] fn reentry_lock_is_nonblocking(){let state=NativeBridge::disconnected();let _guard=state.inner.try_lock().unwrap();assert!(state.inner.try_lock().is_err());state.revoke();assert!(state.revoked.load(Ordering::SeqCst));}
}
