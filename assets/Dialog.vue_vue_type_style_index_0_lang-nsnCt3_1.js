var N=Object.defineProperty;var g=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var v=(s,o,e)=>o in s?N(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,h=(s,o)=>{for(var e in o||(o={}))V.call(o,e)&&v(s,e,o[e]);if(g)for(var e of g(o))$.call(o,e)&&v(s,e,o[e]);return s};var y=(s,o,e)=>new Promise((p,l)=>{var d=t=>{try{c(e.next(t))}catch(a){l(a)}},n=t=>{try{c(e.throw(t))}catch(a){l(a)}},c=t=>t.done?p(t.value):Promise.resolve(t.value).then(d,n);c((e=e.apply(s,o)).next())});import{I as B}from"./Icon-CdhVCYkm.js";import{p as f,q as H}from"./index-DHbc4UQl.js";import{f as D,aj as j}from"./element-plus-CUBv5pjL.js";import{y as T,G as E,c as k,r as b,w as F,n as I,z as w,K as S,a6 as O,u as i,L as m,B as x,D as _,H as z,O as C,R as A,C as q,F as G,a4 as K,Q as L}from"./vue-chunks-ChjHxF1G.js";const P={class:"flex justify-between items-center h-54px pl-15px pr-15px relative"},Q={class:"h-54px flex justify-between items-center absolute top-[50%] right-15px translate-y-[-50%]"},X=T({__name:"Dialog",props:{modelValue:f.bool.def(!1),title:f.string.def("Dialog"),fullscreen:f.bool.def(!0),maxHeight:f.oneOfType([String,Number]).def("400px")},setup(s){const o=E(),e=s,p=k(()=>{const t=["fullscreen","title","maxHeight"],a=G(),r=h(h({},a),e);for(const u in r)t.indexOf(u)!==-1&&delete r[u];return r}),l=b(!1),d=()=>{l.value=!i(l)},n=b(H(e.maxHeight)?`${e.maxHeight}px`:e.maxHeight);F(()=>l.value,t=>y(this,null,function*(){if(yield I(),t){const a=document.documentElement.offsetHeight;n.value=`${a-55-60-(o.footer?63:0)}px`}else n.value=H(e.maxHeight)?`${e.maxHeight}px`:e.maxHeight}),{immediate:!0});const c=k(()=>({height:i(n)}));return(t,a)=>{const r=B;return w(),S(i(j),q(p.value,{fullscreen:l.value,"destroy-on-close":"","lock-scroll":"",draggable:"",top:"0","close-on-click-modal":!1,"show-close":!1}),O({header:m(({close:u})=>[_("div",P,[x(t.$slots,"title",{},()=>[K(L(s.title),1)]),_("div",Q,[s.fullscreen?(w(),S(r,{key:0,class:"cursor-pointer is-hover !h-54px mr-10px",icon:l.value?"radix-icons:exit-full-screen":"radix-icons:enter-full-screen",color:"var(--el-color-info)","hover-color":"var(--el-color-primary)",onClick:d},null,8,["icon"])):z("",!0),C(r,{class:"cursor-pointer is-hover !h-54px",icon:"ep:close","hover-color":"var(--el-color-primary)",color:"var(--el-color-info)",onClick:u},null,8,["onClick"])])])]),default:m(()=>[C(i(D),{style:A(c.value)},{default:m(()=>[x(t.$slots,"default")]),_:3},8,["style"])]),_:2},[i(o).footer?{name:"footer",fn:m(()=>[x(t.$slots,"footer")]),key:"0"}:void 0]),1040,["fullscreen"])}}});export{X as _};