var m=(g,u,r)=>new Promise((p,n)=>{var i=e=>{try{a(r.next(e))}catch(l){n(l)}},t=e=>{try{a(r.throw(e))}catch(l){n(l)}},a=e=>e.done?p(e.value):Promise.resolve(e.value).then(i,t);a((r=r.apply(g,u)).next())});import{F}from"./Form-BQfo1faT.js";import{u as _}from"./useForm-DEQsUXRz.js";import"./index-ej47pwbE.js";import{u as v}from"./useValidator-Nt61Jv1p.js";import{_ as h}from"./Button.vue_vue_type_script_setup_true_lang-B46rSp-D.js";import{r as b}from"./element-plus-BKXXpGCF.js";import{q as k,K as x,r as C,t as y,T as B,u as w,P as o,W as f,Q as I}from"./vue-chunks-BFNeukf4.js";const D=k({__name:"RegisterForm",emits:["to-login"],setup(g,{emit:u}){const r=u,{formRegister:p,formMethods:n}=_(),{getElFormExpose:i}=n,{required:t}=v(),a=x([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>o("h2",{class:"text-2xl font-bold text-center w-[100%]"},[f("注册")])}}},{field:"username",label:"用户名",value:"",component:"Input",colProps:{span:24},componentProps:{placeholder:"请输入用户名"}},{field:"password",label:"密码",value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:"请输入密码"}},{field:"check_password",label:"确认密码",value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:"请输入密码"}},{field:"code",label:"验证码",colProps:{span:24},formItemProps:{slots:{default:s=>o("div",{class:"w-[100%] flex"},[o(b,{modelValue:s.code,"onUpdate:modelValue":c=>s.code=c,placeholder:"请输入验证码"},null)])}}},{field:"register",colProps:{span:24},formItemProps:{slots:{default:()=>o(I,null,[o("div",{class:"w-[100%]"},[o(h,{type:"primary",class:"w-[100%]",loading:d.value,onClick:P},{default:()=>[f("注册")]})]),o("div",{class:"w-[100%] mt-15px"},[o(h,{class:"w-[100%]",onClick:l},{default:()=>[f("已有账号？去登录")]})])])}}}]),e={username:[t()],password:[t()],check_password:[t()],code:[t()]},l=()=>{r("to-login")},d=C(!1),P=()=>m(this,null,function*(){const s=yield i();s==null||s.validate(c=>m(this,null,function*(){if(c)try{d.value=!0,l()}finally{d.value=!1}}))});return(s,c)=>(y(),B(w(F),{schema:a,rules:e,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:w(p)},null,8,["schema","onRegister"]))}});export{D as _};
