var F=Object.defineProperty;var L=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var A=(r,o,t)=>o in r?F(r,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[o]=t,E=(r,o)=>{for(var t in o||(o={}))I.call(o,t)&&A(r,t,o[t]);if(L)for(var t of L(o))M.call(o,t)&&A(r,t,o[t]);return r};var b=(r,o,t)=>new Promise((f,p)=>{var _=l=>{try{m(t.next(l))}catch(d){p(d)}},g=l=>{try{m(t.throw(l))}catch(d){p(d)}},m=l=>l.done?f(l.value):Promise.resolve(l.value).then(_,g);m((t=t.apply(r,o)).next())});import{_ as N}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BYlW2f59.js";import{_ as Y}from"./Search.vue_vue_type_script_setup_true_lang-DoI6Xu44.js";import"./index-DmeB5VGo.js";/* empty css               */import{_ as H}from"./Table.vue_vue_type_script_lang-Cms4GZlR.js";/* empty css                    *//* empty css                  */import{g as V,d as U}from"./index-C4fPkm4H.js";import{u as q}from"./useTable-fdeJv6ua.js";import{q as K,aA as Q,r as S,K as W,P as n,W as c,Q as j,u as a,t as G,T as J,S as P,x as O,i as R}from"./vue-chunks-DOWhatC1.js";import{u as X}from"./useEventBus-BptU9a9z.js";import{u as Z}from"./useCrudSchemas-B5FzcJ46.js";import{_ as u}from"./Button.vue_vue_type_script_setup_true_lang-78d8zLg4.js";import{C as ee}from"./element-plus-0HRIQ2yl.js";import"./Icon-CrBj_0Si.js";/* empty css                */import"./Form-DNBfPnod.js";/* empty css                     *//* empty css               */import"./el-radio-button-C1KsEths.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-DR0tab7u.js";import"./style.css_vue_type_style_index_0_src_true_lang-CTdgiGzp.js";import"./wang-editor-DjPKVaXS.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DVF9hHeS.js";import"./IconPicker-BCGGYgrF.js";/* empty css                      */import"./useForm-D2VG_Sbe.js";import"./useIcon-BvqCpySf.js";/* empty css                        *//* empty css                         *//* empty css                  */import"./index-RqkRK_Mz.js";import"./tree-Dgaev6Pi.js";const te={class:"mb-10px"},He=K({name:"ExamplePage",__name:"ExamplePage",setup(r){const{push:o}=Q(),t=S([]),f=S({}),p=e=>{f.value=e,y()},{tableRegister:_,tableState:g,tableMethods:m}=q({fetchDataApi:()=>b(this,null,function*(){const{currentPage:e,pageSize:i}=g,s=yield V(E({pageIndex:a(e),pageSize:a(i)},a(f)));return{list:s.data.list,total:s.data.total}}),fetchDelApi:()=>b(this,null,function*(){return!!(yield U(a(t)))})}),{loading:l,dataList:d,total:T,currentPage:h,pageSize:v}=g,{getList:y,getElTableExpose:$,delList:z}=m;y(),X({name:"getList",callback:e=>{e==="add"&&(h.value=1),y()}});const D=W([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:"序号",type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"title",label:"标题",search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"author",label:"作者",search:{hidden:!0}},{field:"display_time",label:"创建时间",search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:"重要性",search:{hidden:!0},form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},detail:{slots:{default:e=>n(ee,{type:e.importance===1?"success":e.importance===2?"warning":"danger"},{default:()=>[e.importance===1?"重要":e.importance===2?"良好":"	一般"]})}}},{field:"pageviews",label:"阅读数",search:{hidden:!0},form:{component:"InputNumber",value:0}},{field:"content",label:"内容",search:{hidden:!0},table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24,slots:{default:e=>n("div",{innerHTML:e.content},null)}}},{field:"action",width:"260px",label:"操作",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>n(j,null,[n(u,{type:"primary",onClick:()=>k(e.row,"edit")},{default:()=>[c("编辑")]}),n(u,{type:"success",onClick:()=>k(e.row,"detail")},{default:()=>[c("详情")]}),n(u,{type:"danger",onClick:()=>C(e.row)},{default:()=>[c("删除")]})])}}}]),{allSchemas:w}=Z(D),B=()=>{o("/example/example-add")},x=S(!1),C=e=>b(this,null,function*(){const i=yield $();t.value=e?[e.id]:(i==null?void 0:i.getSelectionRows().map(s=>s.id))||[],x.value=!0,yield z(a(t).length).finally(()=>{x.value=!1})}),k=(e,i)=>{o(`/example/example-${i}?id=${e.id}`)};return(e,i)=>(G(),J(a(N),null,{default:P(()=>[n(a(Y),{schema:a(w).searchSchema,onSearch:p,onReset:p},null,8,["schema"]),O("div",te,[n(a(u),{type:"primary",onClick:B},{default:P(()=>[c("新增")]),_:1}),n(a(u),{loading:x.value,type:"danger",onClick:i[0]||(i[0]=s=>C(null))},{default:P(()=>[c(" 删除 ")]),_:1},8,["loading"])]),n(a(H),{pageSize:a(v),"onUpdate:pageSize":i[1]||(i[1]=s=>R(v)?v.value=s:null),currentPage:a(h),"onUpdate:currentPage":i[2]||(i[2]=s=>R(h)?h.value=s:null),columns:a(w).tableColumns,data:a(d),loading:a(l),pagination:{total:a(T)},onRegister:a(_)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])]),_:1}))}});export{He as default};