var D=Object.defineProperty;var v=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var y=(o,s,e)=>s in o?D(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,R=(o,s)=>{for(var e in s||(s={}))M.call(s,e)&&y(o,e,s[e]);if(v)for(var e of v(s))N.call(s,e)&&y(o,e,s[e]);return o};var w=(o,s,e)=>new Promise((f,d)=>{var b=l=>{try{h(e.next(l))}catch(k){d(k)}},c=l=>{try{h(e.throw(l))}catch(k){d(k)}},h=l=>l.done?f(l.value):Promise.resolve(l.value).then(b,c);h((e=e.apply(o,s)).next())});import{F as P}from"./Form-CtaqT3x_.js";import{u as I}from"./useForm-hwxPoyzp.js";import{u as K}from"./useValidator-Nt61Jv1p.js";import{m as S}from"./index-C9gz6vhG.js";/* empty css                *//* empty css                    */import"./el-radio-button-Dr5ZQThF.js";import{g as q}from"./index-Df5UmuKq.js";import{e as _,f as B}from"./tree-Dgaev6Pi.js";import{ak as j,S as A,y as G}from"./element-plus-6v3c1uXT.js";import{q as O,r as x,P as u,u as i,Q,K as U,w as W,t as z,T as H,n as J}from"./vue-chunks-DOWhatC1.js";const ce=O({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(o,{expose:s}){const{required:e}=K(),f=o,d=x(),b=x([{field:"roleName",label:"角色名称",component:"Input"},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"禁用",value:0},{label:"启用",value:1}]}},{field:"menu",label:"菜单分配",colProps:{span:24},formItemProps:{slots:{default:()=>{var t;return u(Q,null,[u("div",{class:"flex w-full"},[u("div",{class:"flex-1"},[u(j,{ref:d,"show-checkbox":!0,"node-key":"id","highlight-current":!0,"check-strictly":!0,"expand-on-click-node":!1,data:g.value,"onNode-click":h},{default:r=>u("span",null,[r.data.meta.title])})]),u("div",{class:"flex-1"},[i(c)&&((t=i(c))!=null&&t.permissionList)?u(A,{modelValue:i(c).meta.permission,"onUpdate:modelValue":r=>i(c).meta.permission=r},{default:()=>{var r;return[(r=i(c))==null?void 0:r.permissionList.map(n=>u(G,{label:n.value},{default:()=>[n.label]}))]}}):null])])])}}}}]),c=x(),h=t=>{c.value=t},l=U({roleName:[e()],role:[e()],status:[e()]}),{formRegister:k,formMethods:C}=I(),{setValues:E,getFormData:F,getElFormExpose:L}=C,g=x([]);w(this,null,function*(){var r;const t=yield q();if(t){if(g.value=t.data.list,!f.currentRow)return;yield J();const n=[];_(f.currentRow.menu,a=>{var m;n.push({id:a.id,permission:((m=a.meta)==null?void 0:m.permission)||[]})}),_(g.value,a=>{const m=S(n,p=>p.id===a.id);if(m>-1){const p=R({},a.meta||{});p.permission=n[m].permission,a.meta=p}});for(const a of n)(r=i(d))==null||r.setChecked(a.id,!0,!1)}});const T=()=>w(this,null,function*(){var n;const t=yield L();if(yield t==null?void 0:t.validate().catch(a=>{})){const a=yield F(),m=((n=i(d))==null?void 0:n.getCheckedKeys())||[],p=B(i(g),V=>m.includes(V.id));return a.menu=p||[],a}});return W(()=>f.currentRow,t=>{t&&E(t)},{deep:!0,immediate:!0}),s({submit:T}),(t,r)=>(z(),H(i(P),{rules:l,onRegister:i(k),schema:b.value},null,8,["rules","onRegister","schema"]))}});export{ce as _};