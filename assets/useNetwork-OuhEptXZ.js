import{_ as r}from"./ContentWrap.vue_vue_type_script_setup_true_lang-BufG6Jwo.js";import{r as i,S as s,y as a,z as m,K as u,L as d,a4 as l,D as p,Q as f,u as o}from"./vue-chunks-ChjHxF1G.js";import"./Icon-CdhVCYkm.js";import"./index-DHbc4UQl.js";import"./element-plus-CUBv5pjL.js";/* empty css                *//* empty css                  */const w=()=>{const t=i(!0),e=()=>{t.value=navigator.onLine};return window.addEventListener("online",e),window.addEventListener("offline",e),s(()=>{window.removeEventListener("online",e),window.removeEventListener("offline",e)}),{online:t}},E=a({__name:"useNetwork",setup(t){const{online:e}=w();return(c,n)=>(m(),u(o(r),{title:"useNetwork"},{default:d(()=>[n[0]||(n[0]=l(" 当前网络状态: ")),p("code",null,f(o(e)?"已连接":"已断开"),1)]),_:1}))}});export{E as default};