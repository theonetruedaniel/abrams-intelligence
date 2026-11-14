export class FakeElement {
 children:FakeElement[]=[]; parentNode:FakeElement|null=null;
 listeners=new Map<string,Set<()=>void>>(); attrs=new Map<string,string>();
 private text=''; private valueText=''; private disabledValue=false; private typeValue='';
 writes=0; hook:((operation:string)=>void)|null=null;
 readonly tagName:string; readonly ownerDocument:FakeDocument;
 constructor(tagName:string,ownerDocument:FakeDocument){this.tagName=tagName;this.ownerDocument=ownerDocument;}
 private call(op:string){this.hook?.(op);this.ownerDocument.hook?.(this,op);}
 set textContent(s:string){this.call('text');this.text=s;this.writes++;}
 get textContent(){this.call('read-text');return this.text+this.children.map(x=>x.textContent).join('\n');}
 set disabled(v:boolean){this.call('disabled');this.disabledValue=v;this.writes++;}
 get disabled(){this.call('read-disabled');return this.disabledValue;}
 set type(v:string){this.call('type');this.typeValue=v;this.writes++;}
 get type(){return this.typeValue;}
 set value(v:string){this.call('value');this.valueText=v;this.writes++;}
 get value(){this.call('read-value');return this.valueText;}
 setAttribute(k:string,v:string){this.call('attribute');this.attrs.set(k,v);this.writes++;}
 appendChild(n:FakeElement){this.call('append');this.children.push(n);n.parentNode=this;this.writes++;return n;}
 removeChild(n:FakeElement){this.call('remove-node');const i=this.children.indexOf(n);if(i<0)throw Error('not a child');this.children.splice(i,1);n.parentNode=null;return n;}
 addEventListener(t:string,f:()=>void){this.call('add-listener');const a=this.listeners.get(t)??new Set();a.add(f);this.listeners.set(t,a);}
 removeEventListener(t:string,f:()=>void){this.call('remove-listener');this.listeners.get(t)?.delete(f);}
 click(){if(!this.disabled)for(const f of [...this.listeners.get('click')??[]])f();}
 retained(){return [...this.listeners.get('click')??[]];}
}
export class FakeDocument {
 elements:FakeElement[]=[];hook:((element:FakeElement,operation:string)=>void)|null=null;
 createElement(tag:string){const n=new FakeElement(tag,this);this.elements.push(n);return n;}
 host(){return this.createElement('host');}
 button(label:string){return this.elements.find(x=>x.tagName==='button'&&x.textContent===label)!;}
 paragraph(prefix:string){return this.elements.find(x=>x.tagName==='p'&&x.textContent.startsWith(prefix))!;}
 totalWrites(){return this.elements.reduce((a,b)=>a+b.writes,0);}
}


