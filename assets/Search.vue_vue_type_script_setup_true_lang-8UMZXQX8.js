var K=Object.defineProperty;var A=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var T=(t,r,a)=>r in t?K(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,W=(t,r)=>{for(var a in r||(r={}))U.call(r,a)&&T(t,a,r[a]);if(A)for(var a of A(r))Z.call(r,a)&&T(t,a,r[a]);return t};var f=(t,r,a)=>new Promise((p,d)=>{var h=u=>{try{g(a.next(u))}catch(b){d(b)}},m=u=>{try{g(a.throw(u))}catch(b){d(b)}},g=u=>u.done?p(u.value):Promise.resolve(u.value).then(h,m);g((a=a.apply(t,r)).next())});import{i as ee,F as te}from"./Form-BQfo1faT.js";import{p as i,f as D,k as oe,m as se}from"./index-ej47pwbE.js";import{u as ae}from"./useForm-DEQsUXRz.js";import{_ as R}from"./Button.vue_vue_type_script_setup_true_lang-B46rSp-D.js";import{u as V}from"./useIcon-BWlP_ZDu.js";import{q as $,t as w,v as O,T as L,S as F,W as x,u as n,Y as S,X as ne,Q as z,r as v,d as C,P as y,w as ie,o as le,V as re}from"./vue-chunks-BFNeukf4.js";import{d as ce,_ as de}from"./element-plus-BKXXpGCF.js";const q=$({__name:"ActionButton",props:{showSearch:i.bool.def(!0),showReset:i.bool.def(!0),showExpand:i.bool.def(!1),visible:i.bool.def(!0),searchLoading:i.bool.def(!1),resetLoading:i.bool.def(!1)},emits:["search","reset","expand"],setup(t,{emit:r}){const a=r,p=()=>{a("search")},d=()=>{a("reset")},h=()=>{a("expand")};return(m,g)=>(w(),O(z,null,[t.showSearch?(w(),L(n(R),{key:0,type:"primary",loading:t.searchLoading,icon:n(V)({icon:"ep:search"}),onClick:p},{default:F(()=>[x(" 查询 ")]),_:1},8,["loading","icon"])):S("",!0),t.showReset?(w(),L(n(R),{key:1,loading:t.resetLoading,plain:"",icon:n(V)({icon:"ep:refresh-right"}),onClick:d},{default:F(()=>[x(" 重置 ")]),_:1},8,["loading","icon"])):S("",!0),t.showExpand?(w(),L(n(R),{key:2,icon:n(V)({icon:t.visible?"ep:arrow-up":"ep:arrow-down"}),text:"",onClick:h},{default:F(()=>[x(ne(t.visible?"收起":"展开"),1)]),_:1},8,["icon"])):S("",!0)],64))}}),ke=$({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:i.bool.def(!1),labelWidth:i.oneOfType([String,Number]).def("auto"),layout:i.string.validate(t=>["inline","bottom"].includes(t)).def("inline"),buttonPosition:i.string.validate(t=>["left","center","right"].includes(t)).def("center"),showSearch:i.bool.def(!0),showReset:i.bool.def(!0),showExpand:i.bool.def(!1),expandField:i.string.def(""),inline:i.bool.def(!0),removeNoValueItem:i.bool.def(!0),model:{type:Object,default:()=>({})},searchLoading:i.bool.def(!1),resetLoading:i.bool.def(!1)},emits:["search","reset","register","validate"],setup(t,{expose:r,emit:a}){const p=t,d=a,h=v(!0),m=v(p.model),g=C(()=>{const e=n(c);let o=ce(e.schema);if(e.showExpand&&e.expandField&&!n(h)){const s=D(o,l=>l.field===e.expandField);o.map((l,J)=>(J>=s?l.hidden=!0:l.hidden=!1,l))}return e.layout==="inline"&&(o=o.concat([{field:"action",formItemProps:{labelWidth:"0px",slots:{default:()=>y("div",null,[y(q,{showSearch:e.showSearch,showReset:e.showReset,showExpand:e.showExpand,searchLoading:e.searchLoading,resetLoading:e.resetLoading,visible:h.value,onExpand:I,onReset:B,onSearch:_},null)]),label:()=>y("span",null,[x(" ")])}}}])),o}),{formRegister:u,formMethods:b}=ae(),{getElFormExpose:k,getFormData:j,getFormExpose:Q}=b,X=v({}),E=v({}),c=C(()=>{const e=W({},p);return Object.assign(e,n(E)),e}),Y=(e={})=>{E.value=Object.assign(n(E),e),X.value=e},P=v([]);ie(()=>n(g),(...o)=>f(this,[...o],function*(e=[]){m.value=ee(e,n(m)),P.value=e}),{immediate:!0,deep:!0});const N=()=>f(this,null,function*(){const e=yield j();return n(c).removeNoValueItem?Object.keys(e).reduce((o,s)=>{const l=e[s];return oe(l)||(se(l)?Object.keys(l).length>0&&(o[s]=l):o[s]=l),o},{}):e}),_=()=>f(this,null,function*(){const e=yield k();yield e==null?void 0:e.validate(o=>f(this,null,function*(){if(o){const s=yield N();d("search",s)}}))}),B=()=>f(this,null,function*(){const e=yield k();e==null||e.resetFields();const o=yield N();d("reset",o)}),G=C(()=>({textAlign:n(c).buttonPosition})),I=()=>f(this,null,function*(){h.value=!n(h)}),M={getElFormExpose:k,setProps:Y,setSchema:e=>{const{schema:o}=n(c);for(const s of o)for(const l of e)s.field===l.field&&de(s,l.path,l.value)},setValues:(...o)=>f(this,[...o],function*(e={}){m.value=Object.assign(p.model,n(m),e);const s=yield Q();s==null||s.setValues(e)}),delSchema:e=>{const{schema:o}=n(c),s=D(o,l=>l.field===e);s>-1&&o.splice(s,1)},addSchema:(e,o)=>{const{schema:s}=n(c);if(o!==void 0){s.splice(o,0,e);return}s.push(e)},getFormData:j};le(()=>{d("register",M)}),r(M);const H=(e,o,s)=>{d("validate",e,o,s)};return(e,o)=>(w(),O(z,null,[y(n(te),{model:m.value,"is-custom":!1,"label-width":c.value.labelWidth,"hide-required-asterisk":"",inline:c.value.inline,"is-col":c.value.isCol,schema:P.value,onRegister:n(u),onValidate:H},null,8,["model","label-width","inline","is-col","schema","onRegister"]),t.layout==="bottom"?(w(),O("div",{key:0,style:re(G.value)},[y(q,{"show-reset":c.value.showReset,"show-search":c.value.showSearch,"show-expand":c.value.showExpand,"search-loading":c.value.searchLoading,"reset-loading":c.value.resetLoading,onExpand:I,onReset:B,onSearch:_},null,8,["show-reset","show-search","show-expand","search-loading","reset-loading"])],4)):S("",!0)],64))}});export{ke as _};
