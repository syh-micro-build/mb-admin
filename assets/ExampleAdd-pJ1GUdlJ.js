var c=(u,s,o)=>new Promise((n,i)=>{var m=t=>{try{e(o.next(t))}catch(r){i(r)}},f=t=>{try{e(o.throw(t))}catch(r){i(r)}},e=t=>t.done?n(t.value):Promise.resolve(t.value).then(m,f);e((o=o.apply(u,s)).next())});import{_ as v}from"./Write.vue_vue_type_script_setup_true_lang-COo0ocCa.js";import{_ as g}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-d9XdYGxg.js";import{_}from"./Button.vue_vue_type_script_setup_true_lang-1zrRevXL.js";import{q as k,aA as y,r as d,t as $,T as w,S as p,P as l,u as a,W as x}from"./vue-chunks-DOWhatC1.js";import{s as B}from"./index-CsfV-N7y.js";import{u as C}from"./useEventBus-BptU9a9z.js";import"./Form-C7qSE2R1.js";import"./index-BX5Y7Zbz.js";import"./element-plus-6v3c1uXT.js";/* empty css                     *//* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-button-CKEqZvIA.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-DBxd88cE.js";import"./Icon-jk1cmimt.js";import"./style.css_vue_type_style_index_0_src_true_lang-HJAapolX.js";import"./wang-editor-DjPKVaXS.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-BzNVHzpL.js";import"./IconPicker-Bh6tK7N8.js";/* empty css                      */import"./useForm-Ck6TSM8D.js";import"./useValidator-Nt61Jv1p.js";/* empty css                */const ot=k({__name:"ExampleAdd",setup(u){const{emit:s}=C(),{push:o,go:n}=y(),i=d(),m=d(!1),f=()=>c(this,null,function*(){const e=a(i),t=yield e==null?void 0:e.submit();t&&(m.value=!0,(yield B(t).catch(()=>{}).finally(()=>{m.value=!1}))&&(s("getList","add"),o("/example/example-page")))});return(e,t)=>($(),w(a(g),{title:"新增",onBack:t[1]||(t[1]=r=>a(o)("/example/example-page"))},{header:p(()=>[l(a(_),{onClick:t[0]||(t[0]=r=>a(n)(-1))},{default:p(()=>[x(" 返回 ")]),_:1}),l(a(_),{type:"primary",loading:m.value,onClick:f},{default:p(()=>[x("保存 ")]),_:1},8,["loading"])]),default:p(()=>[l(v,{ref_key:"writeRef",ref:i},null,512)]),_:1}))}});export{ot as default};