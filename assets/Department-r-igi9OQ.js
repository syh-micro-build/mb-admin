var j=Object.defineProperty;var E=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var F=(i,o,l)=>o in i?j(i,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[o]=l,U=(i,o)=>{for(var l in o||(o={}))G.call(o,l)&&F(i,l,o[l]);if(E)for(var l of E(o))H.call(o,l)&&F(i,l,o[l]);return i};var v=(i,o,l)=>new Promise((y,b)=>{var C=n=>{try{h(l.next(n))}catch(m){b(m)}},P=n=>{try{h(l.throw(n))}catch(m){b(m)}},h=n=>n.done?y(n.value):Promise.resolve(n.value).then(C,P);h((l=l.apply(i,o)).next())});import{_ as J}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CZzT7ndh.js";import{_ as O}from"./Search.vue_vue_type_script_setup_true_lang-D-wCjS9L.js";import{_ as X}from"./Dialog.vue_vue_type_style_index_0_lang-pRYNw0Ic.js";import"./index-h7JMuW2G.js";/* empty css               */import{_ as Z}from"./Table.vue_vue_type_script_lang-DsWyhndL.js";/* empty css                        *//* empty css                    *//* empty css                  */import{g as ee,a as te,d as ae,s as re}from"./index-Djc4RWEH.js";import{u as le}from"./useTable-DK-2xbCu.js";import{_ as oe}from"./Write.vue_vue_type_script_setup_true_lang-C4E56_Av.js";import{_ as se}from"./Detail.vue_vue_type_script_setup_true_lang-BudhliYh.js";import{u as ne}from"./useCrudSchemas-B5FzcJ46.js";import{_ as d}from"./Button.vue_vue_type_script_setup_true_lang-BZKOxh1n.js";import{C as I}from"./element-plus-6v3c1uXT.js";import{q as ie,r as u,K as ue,P as r,Q as p,W as c,u as a,t as k,v as me,S as f,x as de,i as K,T as R,Y as T}from"./vue-chunks-DOWhatC1.js";import"./Icon-CYRfJ4BL.js";/* empty css                */import"./Form-CqSfiPnT.js";/* empty css                     *//* empty css               */import"./el-radio-button-DcNedwWv.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-BNaNeZzI.js";import"./style.css_vue_type_style_index_0_src_true_lang-DEl4LcDK.js";import"./wang-editor-DjPKVaXS.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-Dgj-AK-D.js";import"./IconPicker-Do40ZJTJ.js";/* empty css                      */import"./useForm-fM418eb_.js";import"./useIcon-CFJj95VN.js";/* empty css                        *//* empty css                         *//* empty css                  */import"./index-Bg1-InV9.js";import"./useValidator-Nt61Jv1p.js";import"./Descriptions-D6sJbBt9.js";import"./tree-Dgaev6Pi.js";const pe={class:"mb-10px"},rt=ie({__name:"Department",setup(i){const o=u([]),{tableRegister:l,tableState:y,tableMethods:b}=le({fetchDataApi:()=>v(this,null,function*(){const{currentPage:e,pageSize:t}=y,s=yield te(U({pageIndex:a(e),pageSize:a(t)},a(V)));return{list:s.data.list,total:s.data.total}}),fetchDelApi:()=>v(this,null,function*(){return!!(yield ae(a(o)))})}),{loading:C,dataList:P,total:h,currentPage:n,pageSize:m}=y,{getList:$,getElTableExpose:q,delList:M}=b,V=u({}),N=e=>{V.value=e,$()},Q=ue([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:"序号",type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"id",label:"部门名称",table:{slots:{default:e=>r(p,null,[e.row.departmentName])}},form:{component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"departmentName"}},optionApi:()=>v(this,null,function*(){return(yield ee()).data.list})},detail:{slots:{default:e=>r(p,null,[e.departmentName])}}},{field:"status",label:"状态",search:{hidden:!0},table:{slots:{default:e=>{const t=e.row.status;return r(p,null,[r(I,{type:t===0?"danger":"success"},{default:()=>[t===1?"启用":"禁用"]})])}}},form:{component:"Select",componentProps:{options:[{value:0,label:"禁用"},{value:1,label:"启用"}]}},detail:{slots:{default:e=>r(p,null,[r(I,{type:e.status===0?"danger":"success"},{default:()=>[e.status===1?"启用":"禁用"]})])}}},{field:"createTime",label:"创建时间",search:{hidden:!0},form:{hidden:!0}},{field:"remark",label:"备注",search:{hidden:!0},form:{component:"Input",componentProps:{type:"textarea",rows:5},colProps:{span:24}},detail:{slots:{default:e=>r(p,null,[e.remark])}}},{field:"action",width:"260px",label:"操作",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{slots:{default:e=>r(p,null,[r(d,{type:"primary",onClick:()=>B(e.row,"edit")},{default:()=>[c("编辑")]}),r(d,{type:"success",onClick:()=>B(e.row,"detail")},{default:()=>[c("详情")]}),r(d,{type:"danger",onClick:()=>z(e.row)},{default:()=>[c("删除")]})])}}}]),{allSchemas:w}=ne(Q),g=u(!1),x=u(""),S=u(null),_=u(""),W=()=>{x.value="新增",S.value=null,g.value=!0,_.value=""},A=u(!1),z=e=>v(this,null,function*(){const t=yield q();o.value=e?[e.id]:(t==null?void 0:t.getSelectionRows().map(s=>s.id))||[],A.value=!0,yield M(a(o).length).finally(()=>{A.value=!1})}),B=(e,t)=>{x.value=t==="edit"?"编辑":"详情",_.value=t,S.value=e,g.value=!0},L=u(),D=u(!1),Y=()=>v(this,null,function*(){const e=a(L),t=yield e==null?void 0:e.submit();t&&(D.value=!0,(yield re(t).catch(()=>{}).finally(()=>{D.value=!1}))&&(g.value=!1,n.value=1,$()))});return(e,t)=>(k(),me(p,null,[r(a(J),null,{default:f(()=>[r(a(O),{schema:a(w).searchSchema,onSearch:N,onReset:N},null,8,["schema"]),de("div",pe,[r(a(d),{type:"primary",onClick:W},{default:f(()=>[c("新增")]),_:1}),r(a(d),{loading:A.value,type:"danger",onClick:t[0]||(t[0]=s=>z(null))},{default:f(()=>[c(" 删除 ")]),_:1},8,["loading"])]),r(a(Z),{pageSize:a(m),"onUpdate:pageSize":t[1]||(t[1]=s=>K(m)?m.value=s:null),currentPage:a(n),"onUpdate:currentPage":t[2]||(t[2]=s=>K(n)?n.value=s:null),columns:a(w).tableColumns,data:a(P),loading:a(C),pagination:{total:a(h)},onRegister:a(l)},null,8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])]),_:1}),r(a(X),{modelValue:g.value,"onUpdate:modelValue":t[4]||(t[4]=s=>g.value=s),title:x.value},{footer:f(()=>[_.value!=="detail"?(k(),R(a(d),{key:0,type:"primary",loading:D.value,onClick:Y},{default:f(()=>[c(" 保存 ")]),_:1},8,["loading"])):T("",!0),r(a(d),{onClick:t[3]||(t[3]=s=>g.value=!1)},{default:f(()=>[c("关闭")]),_:1})]),default:f(()=>[_.value!=="detail"?(k(),R(oe,{key:0,ref_key:"writeRef",ref:L,"form-schema":a(w).formSchema,"current-row":S.value},null,8,["form-schema","current-row"])):T("",!0),_.value==="detail"?(k(),R(se,{key:1,"detail-schema":a(w).detailSchema,"current-row":S.value},null,8,["detail-schema","current-row"])):T("",!0)]),_:1},8,["modelValue","title"])],64))}});export{rt as default};
