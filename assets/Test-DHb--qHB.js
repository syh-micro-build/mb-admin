import{p as k,v as D}from"./index-ej47pwbE.js";import{q as g,aA as V,d as P,u as e,H as T,Y as m,r as x,ap as A,t as o,T as p,S as t,P as r,W as a,a0 as f}from"./vue-chunks-BFNeukf4.js";import{_ as C}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CC7WBs_1.js";/* empty css                   *//* empty css               */import{_ as i}from"./Button.vue_vue_type_script_setup_true_lang-B46rSp-D.js";import{s as c,t as y,v as n}from"./element-plus-BKXXpGCF.js";import"./Icon-DMC491Fh.js";/* empty css                *//* empty css                  */const E=g({__name:"Permission",props:{permission:k.string.def()},setup(d){const{currentRoute:u}=V(),h=d,w=P(()=>{var s,_;return((_=(s=e(u))==null?void 0:s.meta)==null?void 0:_.permission)||[]}),l=P(()=>{const s=e(h.permission);return s?e(w).includes(s):!0});return(s,_)=>l.value?T(s.$slots,"default",{key:0}):m("",!0)}}),v=d=>{const u=D.currentRoute.value.meta.permission||[];if(!d)throw new Error("请设置操作权限值");return!!u.includes(d)},j=g({__name:"Test",setup(d){const u=x("add");return setTimeout(()=>{u.value="view"},3e3),(h,w)=>{const l=E,s=A("hasPermi");return o(),p(e(C),null,{default:t(()=>[r(e(c),null,{default:t(()=>[a("组件方式判断（已经全局注册，支持动态修改）")]),_:1}),r(e(y),{gutter:20},{default:t(()=>[r(e(n),{span:8},{default:t(()=>[a(" 新增权限： "),r(l,{permission:"add"},{default:t(()=>[r(e(i),{type:"primary"},{default:t(()=>[a(" Add ")]),_:1})]),_:1})]),_:1}),r(e(n),{span:8},{default:t(()=>[a(" 删除权限： "),r(l,{permission:"delete"},{default:t(()=>[r(e(i),{type:"danger"},{default:t(()=>[a(" Delete ")]),_:1})]),_:1})]),_:1}),r(e(n),{span:8},{default:t(()=>[a(" 3秒后切换查看权限： "),r(l,{permission:u.value},{default:t(()=>[r(e(i),{type:"primary"},{default:t(()=>[a(" View ")]),_:1})]),_:1},8,["permission"])]),_:1})]),_:1}),r(e(c),null,{default:t(()=>[a("指令方式判断（已经全局注册，不支持动态修改）")]),_:1}),r(e(y),{gutter:20},{default:t(()=>[r(e(n),{span:8},{default:t(()=>[a(" 新增权限： "),f((o(),p(e(i),{type:"primary"},{default:t(()=>[a(" Add ")]),_:1})),[[s,"add"]])]),_:1}),r(e(n),{span:8},{default:t(()=>[a(" 删除权限： "),f((o(),p(e(i),{type:"danger"},{default:t(()=>[a(" Delete ")]),_:1})),[[s,"delete"]])]),_:1}),r(e(n),{span:8},{default:t(()=>[a(" 3秒后切换查看权限（无法动态修改）： "),f((o(),p(e(i),{type:"primary"},{default:t(()=>[a(" View ")]),_:1})),[[s,u.value]])]),_:1})]),_:1}),r(e(c),null,{default:t(()=>[a("函数方式判断")]),_:1}),r(e(y),{gutter:20},{default:t(()=>[r(e(n),{span:8},{default:t(()=>[a(" 新增权限： "),e(v)("add")?(o(),p(e(i),{key:0,type:"primary"},{default:t(()=>[a(" Add ")]),_:1})):m("",!0)]),_:1}),r(e(n),{span:8},{default:t(()=>[a(" 删除权限： "),e(v)("delete")?(o(),p(e(i),{key:0,type:"danger"},{default:t(()=>[a(" Delete ")]),_:1})):m("",!0)]),_:1}),r(e(n),{span:8},{default:t(()=>[a(" 3秒后切换查看权限： "),e(v)(e(u.value))?(o(),p(e(i),{key:0,type:"primary"},{default:t(()=>[a(" View ")]),_:1})):m("",!0)]),_:1})]),_:1})]),_:1})}}});export{j as default};
