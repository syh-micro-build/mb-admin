var c=(d,l,e)=>new Promise((u,m)=>{var p=t=>{try{r(e.next(t))}catch(s){m(s)}},g=t=>{try{r(e.throw(t))}catch(s){m(s)}},r=t=>t.done?u(t.value):Promise.resolve(t.value).then(p,g);r((e=e.apply(d,l)).next())});import{_ as y}from"./Write.vue_vue_type_script_setup_true_lang-DG2SpFfs.js";import{_ as k}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-NICZTxts.js";import{_ as x}from"./Button.vue_vue_type_script_setup_true_lang-B37euhr8.js";import{q as T,aA as b,aH as R,r as f,t as $,T as B,S as n,P as _,u as i,W as w}from"./vue-chunks-DOWhatC1.js";import{c as C,s as D}from"./index-D3L_rTtj.js";import{u as A}from"./useEventBus-BptU9a9z.js";import"./Form-BjRyOzxl.js";import"./index-gv41tsHG.js";import"./element-plus-DmczhoYX.js";/* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-button-cdc4Pf6r.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-Dzr7gSoh.js";import"./Icon-BzYieHKW.js";import"./style.css_vue_type_style_index_0_src_true_lang-BztFNOES.js";import"./wang-editor-DjPKVaXS.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-D41mFSH_.js";import"./IconPicker-B1p2pG5t.js";import"./useForm-CCP6GdPM.js";import"./useValidator-Nt61Jv1p.js";/* empty css                */const it=T({__name:"ExampleEdit",setup(d){const{emit:l}=A(),{push:e,go:u}=b(),{query:m}=R(),p=f(null);c(this,null,function*(){const o=yield C(m.id);o&&(p.value=o.data)});const r=f(),t=f(!1),s=()=>c(this,null,function*(){const o=i(r),a=yield o==null?void 0:o.submit();a&&(t.value=!0,(yield D(a).catch(()=>{}).finally(()=>{t.value=!1}))&&(l("getList","editor"),e("/example/example-page")))});return(o,a)=>($(),B(i(k),{title:"编辑",onBack:a[1]||(a[1]=v=>i(e)("/example/example-page"))},{header:n(()=>[_(i(x),{onClick:a[0]||(a[0]=v=>i(u)(-1))},{default:n(()=>[w(" 返回 ")]),_:1}),_(i(x),{type:"primary",loading:t.value,onClick:s},{default:n(()=>[w(" 保存 ")]),_:1},8,["loading"])]),default:n(()=>[_(y,{ref_key:"writeRef",ref:r,"current-row":p.value},null,8,["current-row"])]),_:1}))}});export{it as default};