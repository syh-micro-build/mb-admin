var d=(n,l,e)=>new Promise((i,r)=>{var o=t=>{try{s(e.next(t))}catch(m){r(m)}},a=t=>{try{s(e.throw(t))}catch(m){r(m)}},s=t=>t.done?i(t.value):Promise.resolve(t.value).then(o,a);s((e=e.apply(n,l)).next())});import{_ as f}from"./ContentWrap.vue_vue_type_script_setup_true_lang-DGEChWKD.js";import{_}from"./Table.vue_vue_type_script_lang-TLWQP-aa.js";import"./index-DHu9G38q.js";/* empty css                    *//* empty css                  */import{a as u}from"./index-CEV-u-lf.js";import{q as b,r as c,t as g,T as v,S as w,P as T,u as p}from"./vue-chunks-BFNeukf4.js";import"./Icon-CSoiz4op.js";import"./element-plus-BKXXpGCF.js";/* empty css                *//* empty css               *//* empty css                      *//* empty css                        */import"./el-radio-button-Dk3keam6.js";/* empty css                         *//* empty css                  */import"./Button.vue_vue_type_script_setup_true_lang-BXEH8cFF.js";import"./index-B-Ulzv-f.js";const F=b({__name:"TableVideoPreview",setup(n){const l=[{field:"title",label:"标题"},{field:"video_uri",label:"视频预览"},{field:"author",label:"作者"},{field:"display_time",label:"创建时间"},{field:"pageviews",label:"阅读数"}],e=c(!0);let i=c([]);return(o=>d(this,null,function*(){const a=yield u(o||{pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{e.value=!1});a&&(i.value=a.data.list)}))(),(o,a)=>(g(),v(p(f),{title:"表格图片预览"},{default:w(()=>[T(p(_),{columns:l,data:p(i),loading:e.value,"video-preview":["image_uri","video_uri"]},null,8,["data","loading"])]),_:1}))}});export{F as default};