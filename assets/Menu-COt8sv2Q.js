var x=(R,w,i)=>new Promise((y,_)=>{var b=l=>{try{p(i.next(l))}catch(d){_(d)}},k=l=>{try{p(i.throw(l))}catch(d){_(d)}},p=l=>l.done?y(l.value):Promise.resolve(l.value).then(b,k);p((i=i.apply(R,w)).next())});import{g as F}from"./index-_0oJ1_2T.js";import{u as I}from"./useTable-CprnooRV.js";import{_ as M}from"./Table.vue_vue_type_script_lang-hOHgsdkG.js";import"./index-CnZzlLAp.js";/* empty css                        *//* empty css                    *//* empty css                  *//* empty css               */import{I as P}from"./Icon-BDggbI4O.js";import{_ as D}from"./Search.vue_vue_type_script_setup_true_lang-CCIweyZe.js";import{_ as q}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CwE_0Rxu.js";import{_ as K}from"./Write.vue_vue_type_script_setup_true_lang-7hD4pBL2.js";import{_ as Q}from"./Detail.vue_vue_type_script_setup_true_lang-CrEl90_O.js";import{_ as U}from"./Dialog.vue_vue_type_style_index_0_lang-9QFJo3rM.js";import{_ as n}from"./Button.vue_vue_type_script_setup_true_lang-sd1Jfk_J.js";import{C as W}from"./element-plus-6v3c1uXT.js";import{q as Y,K as L,P as a,Q as u,W as m,r,t as g,v as j,S as c,u as o,x as z,T as V,Y as $}from"./vue-chunks-DOWhatC1.js";/* empty css                      *//* empty css                  *//* empty css                        *//* empty css                */import"./el-radio-button-Dsknajo-.js";/* empty css                         *//* empty css                  */import"./index-DEGLKTbz.js";import"./Form-CrGnpKwL.js";/* empty css                     *//* empty css               *//* empty css                        *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-B8prqlCd.js";import"./style.css_vue_type_style_index_0_src_true_lang-h1Rkv56I.js";import"./wang-editor-DjPKVaXS.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DqId7L0Q.js";import"./IconPicker-IcARRrW5.js";import"./useForm-BkHEqNjo.js";import"./useIcon-pf9pQkT1.js";import"./useValidator-Nt61Jv1p.js";import"./AddButtonPermission.vue_vue_type_script_setup_true_lang-C71nDfHJ.js";import"./Descriptions-BRyjkm6g.js";const G={class:"mb-10px"},Pe=Y({__name:"Menu",setup(R){const{tableRegister:w,tableState:i,tableMethods:y}=I({fetchDataApi:()=>x(this,null,function*(){return{list:(yield F()).data.list||[]}})}),{dataList:_,loading:b}=i,{getList:k}=y,p=L([{field:"index",label:"序号",type:"index"},{field:"meta.title",label:"菜单名称",slots:{default:t=>{const e=t.row.meta.title;return a(u,null,[e])}}},{field:"meta.icon",label:"图标",slots:{default:t=>{const e=t.row.meta.icon;return e?a(u,null,[a(P,{icon:e},null)]):null}}},{field:"component",label:"组件",slots:{default:t=>{const e=t.row.component;return a(u,null,[e==="#"?"顶级目录":e==="##"?"子目录":e])}}},{field:"path",label:"路径"},{field:"status",label:"状态",slots:{default:t=>a(u,null,[a(W,{type:t.row.status===0?"danger":"success"},{default:()=>[t.row.status===1?"启用":"禁用"]})])}},{field:"action",label:"操作",width:240,slots:{default:t=>{const e=t.row;return a(u,null,[a(n,{type:"primary",onClick:()=>S(e,"edit")},{default:()=>[m("编辑")]}),a(n,{type:"success",onClick:()=>S(e,"detail")},{default:()=>[m("详情")]}),a(n,{type:"danger"},{default:()=>[m("删除")]})])}}}]),l=L([{field:"meta.title",label:"菜单名称",component:"Input"}]),d=r({}),T=t=>{d.value=t,k()},s=r(!1),C=r(""),v=r(),f=r(""),B=r(),h=r(!1),S=(t,e)=>{C.value=e==="edit"?"编辑":"详情",f.value=e,v.value=t,s.value=!0},N=()=>{C.value="新增",v.value=void 0,s.value=!0,f.value=""},E=()=>x(this,null,function*(){const t=o(B),e=yield t==null?void 0:t.submit();e&&(h.value=!0,setTimeout(()=>{h.value=!1,s.value=!1},1e3))});return(t,e)=>(g(),j(u,null,[a(o(q),null,{default:c(()=>[a(o(D),{schema:l,onReset:T,onSearch:T},null,8,["schema"]),z("div",G,[a(o(n),{type:"primary",onClick:N},{default:c(()=>[m("新增")]),_:1})]),a(o(M),{columns:p,"default-expand-all":"","node-key":"id",data:o(_),loading:o(b),onRegister:o(w)},null,8,["columns","data","loading","onRegister"])]),_:1}),a(o(U),{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=A=>s.value=A),title:C.value},{footer:c(()=>[f.value!=="detail"?(g(),V(o(n),{key:0,type:"primary",loading:h.value,onClick:E},{default:c(()=>[m(" 保存 ")]),_:1},8,["loading"])):$("",!0),a(o(n),{onClick:e[0]||(e[0]=A=>s.value=!1)},{default:c(()=>[m("关闭")]),_:1})]),default:c(()=>[f.value!=="detail"?(g(),V(K,{key:0,ref_key:"writeRef",ref:B,"current-row":v.value},null,8,["current-row"])):$("",!0),f.value==="detail"?(g(),V(Q,{key:1,"current-row":v.value},null,8,["current-row"])):$("",!0)]),_:1},8,["modelValue","title"])],64))}});export{Pe as default};
