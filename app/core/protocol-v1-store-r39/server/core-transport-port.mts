import {LocalChannel} from './reference-core/shared/transport/local-channel.mts';
// Synthetic integration only. The owner constructs/admit its Core and channel;
// this adapter does not open a store, create listeners, approve or tick runs.
export function createCoreTransportPort({testOnly,channel}:any){
 if(testOnly!==true||!(channel instanceof LocalChannel))throw Error('existing synthetic LocalChannel required');
 const binding=channel.context.binding;
 if(binding===null||typeof binding!=='object'||Array.isArray(binding))throw Error('stable Core binding required');
 const current=()=>{if(channel.context.binding!==binding)throw Error('retired Core transport binding');};
 return Object.freeze({testOnly:true,binding,
  register(generation:number){current();return channel.register(generation);},
  execute(bytes:Uint8Array,context:any){current();return channel.execute(bytes,context);},
  drain(sink:any){current();return channel.drain(sink);},
  closeDelivery(){current();return channel.closeDelivery();},
  assertAvailable(){current();channel.assertAvailable();},
  onUnavailable(listener:()=>void){current();return channel.onUnavailable(listener);}
 });
}
