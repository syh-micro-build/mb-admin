var c=(u,s,o)=>new Promise((n,i)=>{var m=t=>{try{e(o.next(t))}catch(r){i(r)}},f=t=>{try{e(o.throw(t))}catch(r){i(r)}},e=t=>t.done?n(t.value):Promise.resolve(t.value).then(m,f);e((o=o.apply(u,s)).next())});import{_ as v}from"./Write.vue_vue_type_script_setup_true_lang-D5TL03j1.js";import{_ as g}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-CmgU50WO.js";import{_}from"./Button.vue_vue_type_script_setup_true_lang-D30nW9Ww.js";import{q as k,aA as y,r as d,t as $,T as w,S as p,P as l,u as a,W as x}from"./vue-chunks-DOWhatC1.js";import{s as B}from"./index-BREq-kD7.js";import{u as C}from"./useEventBus-BptU9a9z.js";import"./Form-ZkHkWrOD.js";import"./index-CagagDwf.js";import"./element-plus-0HRIQ2yl.js";/* empty css                     *//* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-button-CqWb39Qc.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-BOX-ar3k.js";import"./Icon-Cv3nD_MN.js";import"./style.css_vue_type_style_index_0_src_true_lang-DYH4isOl.js";import"./wang-editor-DjPKVaXS.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-YZRYyHzj.js";import"./IconPicker-B_fI3u80.js";/* empty css                      */import"./useForm-CUdxxXhr.js";import"./useValidator-Nt61Jv1p.js";/* empty css                */const ot=k({__name:"ExampleAdd",setup(u){const{emit:s}=C(),{push:o,go:n}=y(),i=d(),m=d(!1),f=()=>c(this,null,function*(){const e=a(i),t=yield e==null?void 0:e.submit();t&&(m.value=!0,(yield B(t).catch(()=>{}).finally(()=>{m.value=!1}))&&(s("getList","add"),o("/example/example-page")))});return(e,t)=>($(),w(a(g),{title:"新增",onBack:t[1]||(t[1]=r=>a(o)("/example/example-page"))},{header:p(()=>[l(a(_),{onClick:t[0]||(t[0]=r=>a(n)(-1))},{default:p(()=>[x(" 返回 ")]),_:1}),l(a(_),{type:"primary",loading:m.value,onClick:f},{default:p(()=>[x("保存 ")]),_:1},8,["loading"])]),default:p(()=>[l(v,{ref_key:"writeRef",ref:i},null,512)]),_:1}))}});export{ot as default};