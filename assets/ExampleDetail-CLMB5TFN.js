var c=(u,n,a)=>new Promise((m,r)=>{var l=e=>{try{t(a.next(e))}catch(i){r(i)}},o=e=>{try{t(a.throw(e))}catch(i){r(i)}},t=e=>e.done?m(e.value):Promise.resolve(e.value).then(l,o);t((a=a.apply(u,n)).next())});import{_}from"./Detail.vue_vue_type_script_setup_true_lang-BnUIuQ5p.js";import{_ as d}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-D9HDHQc8.js";import{_ as x}from"./Button.vue_vue_type_script_setup_true_lang-BMTIIzQW.js";import{q as g,aB as w,aH as $,r as k,t as v,S as B,R as p,O as f,u as s,V as D}from"./vue-chunks-C8vH-0tq.js";import{c as R}from"./index-DLwDPM7N.js";import"./Descriptions-CzJeaLh7.js";import"./index-DLMkugkx.js";import"./element-plus-BqdG1kF4.js";/* empty css                  *//* empty css               */import"./Icon-LrwZ7kOU.js";/* empty css               *//* empty css                */const z=g({__name:"ExampleDetail",setup(u){const{push:n,go:a}=w(),{query:m}=$(),r=k(null);return c(this,null,function*(){const o=yield R(m.id);o&&(r.value=o.data)}),(o,t)=>(v(),B(s(d),{title:"详情",onBack:t[1]||(t[1]=e=>s(n)("/example/example-page"))},{header:p(()=>[f(s(x),{onClick:t[0]||(t[0]=e=>s(a)(-1))},{default:p(()=>[D(" 返回 ")]),_:1})]),default:p(()=>[f(_,{"current-row":r.value},null,8,["current-row"])]),_:1}))}});export{z as default};
