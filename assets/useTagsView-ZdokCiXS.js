var p=(t,f,r)=>new Promise((n,g)=>{var V=o=>{try{u(r.next(o))}catch(d){g(d)}},T=o=>{try{u(r.throw(o))}catch(d){g(d)}},u=o=>o.done?n(o.value):Promise.resolve(o.value).then(V,T);u((r=r.apply(t,f)).next())});import{s as w}from"./index-ej47pwbE.js";import{aA as R,d as A,u as i,n as O}from"./vue-chunks-BFNeukf4.js";const y=()=>{const t=w(),{replace:f,currentRoute:r}=R(),n=A(()=>t.getSelectedTag);return{closeAll:e=>{t.delAllViews(),e==null||e()},closeLeft:e=>{t.delLeftViews(i(n)),e==null||e()},closeRight:e=>{t.delRightViews(i(n)),e==null||e()},closeOther:e=>{t.delOthersViews(i(n)),e==null||e()},closeCurrent:(e,s)=>{var h;(h=e==null?void 0:e.meta)!=null&&h.affix||(t.delView(e||i(r)),s==null||s())},refreshPage:(e,s)=>p(void 0,null,function*(){t.delCachedView();const{path:h,query:m}=e||i(r);yield O(),f({path:"/redirect"+h,query:m}),s==null||s()}),setTitle:(e,s)=>{t.setTitle(e,s)}}};export{y as u};
