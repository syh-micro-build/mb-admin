var f=(n,l,t)=>new Promise((o,m)=>{var r=e=>{try{a(t.next(e))}catch(s){m(s)}},i=e=>{try{a(t.throw(e))}catch(s){m(s)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,i);a((t=t.apply(n,l)).next())});import{_ as d}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DGEChWKD.js";import{_ as u}from"./Table.vue_vue_type_script_lang-TLWQP-aa.js";import"./index-DHu9G38q.js";/* empty css                    *//* empty css                  */import{a as g}from"./index-CEV-u-lf.js";/* empty css               */import{l as b}from"./element-plus-BKXXpGCF.js";import{q as v,r as _,t as w,T,S as h,P as c,u as p}from"./vue-chunks-BFNeukf4.js";import"./Icon-CSoiz4op.js";/* empty css                *//* empty css                      *//* empty css                        */import"./el-radio-button-Dk3keam6.js";/* empty css                         *//* empty css                  */import"./Button.vue_vue_type_script_setup_true_lang-BXEH8cFF.js";import"./index-B-Ulzv-f.js";const H=v({__name:"TableImagePreview",setup(n){const l=[{field:"title",label:"标题"},{field:"image_uri",label:"封面"},{field:"author",label:"作者"},{field:"display_time",label:"创建时间"},{field:"importance",label:"重要性",formatter:(r,i,a)=>c(b,{type:a===1?"success":a===2?"warning":"danger"},{default:()=>[a===1?"重要":a===2?"良好":"一般"]})},{field:"pageviews",label:"阅读数"}],t=_(!0);let o=_([]);return(r=>f(this,null,function*(){const i=yield g(r||{pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{t.value=!1});i&&(o.value=i.data.list)}))(),(r,i)=>(w(),T(p(d),{title:"表格图片预览"},{default:h(()=>[c(p(u),{columns:l,data:p(o),loading:t.value,"image-preview":["image_uri"]},null,8,["data","loading"])]),_:1}))}});export{H as default};