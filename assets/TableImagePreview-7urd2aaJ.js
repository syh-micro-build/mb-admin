var n=(p,m,t)=>new Promise((r,s)=>{var o=e=>{try{a(t.next(e))}catch(l){s(l)}},i=e=>{try{a(t.throw(e))}catch(l){s(l)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,i);a((t=t.apply(p,m)).next())});import{_ as d}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BufG6Jwo.js";import{_ as u}from"./Table.vue_vue_type_script_lang-B22YyWum.js";import"./index-DHbc4UQl.js";/* empty css                        *//* empty css                    *//* empty css                  */import{g}from"./index-DFQGkRZD.js";/* empty css               */import{C as b}from"./element-plus-CUBv5pjL.js";import{y as v,r as f,z as w,K as y,L,O as c,u as _}from"./vue-chunks-ChjHxF1G.js";import"./Icon-CdhVCYkm.js";/* empty css                *//* empty css                      *//* empty css                  *//* empty css                        */import"./el-radio-button-BNBtg-nU.js";/* empty css                         *//* empty css                  */import"./Button.vue_vue_type_script_setup_true_lang-Zi7YaU9y.js";import"./index-BQQdmLe5.js";const H=v({__name:"TableImagePreview",setup(p){const m=[{field:"title",label:"标题"},{field:"image_uri",label:"封面"},{field:"author",label:"作者"},{field:"display_time",label:"创建时间"},{field:"importance",label:"重要性",formatter:(o,i,a)=>c(b,{type:a===1?"success":a===2?"warning":"danger"},{default:()=>[a===1?"重要":a===2?"良好":"一般"]})},{field:"pageviews",label:"阅读数"}],t=f(!0),r=f([]);return(o=>n(this,null,function*(){const i=yield g({pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{t.value=!1});i&&(r.value=i.data.list)}))(),(o,i)=>(w(),y(_(d),{title:"表格图片预览"},{default:L(()=>[c(_(u),{columns:m,data:r.value,loading:t.value,"image-preview":["image_uri"]},null,8,["data","loading"])]),_:1}))}});export{H as default};