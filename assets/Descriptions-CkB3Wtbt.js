var z=Object.defineProperty;var m=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var h=(e,o,r)=>o in e?z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,n=(e,o)=>{for(var r in o||(o={}))O.call(o,r)&&h(e,r,o[r]);if(m)for(var r of m(o))C.call(o,r)&&h(e,r,o[r]);return e};import{q as D,d as k,u as f,r as I,P as t,a0 as S,a1 as A,I as u,B as E}from"./vue-chunks-BFNeukf4.js";import{p as s,u as V}from"./index-ej47pwbE.js";/* empty css                  *//* empty css               */import{I as y,_ as B}from"./Icon-DMC491Fh.js";import{H as N,af as T,t as q,v as P,Z as _}from"./element-plus-BKXXpGCF.js";function H(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!E(e)}const M=V(),R=k(()=>M.getMobile),w="-",Z=D({name:"Descriptions",props:{title:s.string.def(""),message:s.string.def(""),collapse:s.bool.def(!0),border:s.bool.def(!0),column:s.number.def(2),size:s.oneOf(["large","default","small"]).def("default"),direction:s.oneOf(["horizontal","vertical"]).def("horizontal"),extra:s.string.def(""),schema:{type:Array,default:()=>[]},data:{type:Object,default:()=>({})}},setup(e,{attrs:o}){const r=k(()=>{const i=["title","message","collapse","schema","data","class"],l=n(n({},o),e);for(const a in l)i.indexOf(a)!==-1&&delete l[a];return f(R)&&(l.direction="vertical"),l}),p=i=>{const l=["field"],a=n({},i);for(const c in a)l.indexOf(c)!==-1&&delete a[c];return n({labelClassName:"descriptions-label"},a)},d=I(!0),j=()=>{e.collapse&&(d.value=!f(d))};return()=>{let i;return t("div",{class:["descriptions","bg-[var(--el-color-white)] dark:bg-[var(--el-bg-color)] dark:border-[var(--el-border-color)] dark:border-1px"]},[e.title?t("div",{class:["descriptions-header","relative h-50px flex justify-between items-center layout-border__bottom px-10px cursor-pointer"],onClick:j},[t("div",{class:["descriptions-header__title","relative font-18px font-bold ml-10px"]},[t("div",{class:"flex items-center"},[e.title,e.message?t(N,{content:e.message,placement:"right"},{default:()=>[t(y,{icon:"bi:question-circle-fill",class:"ml-5px",size:14},null)]}):null])]),e.collapse?t(y,{icon:d.value?"ep:arrow-down":"ep:arrow-up"},null):null]):null,t(T,null,{default:()=>[S(t("div",{class:["descriptions-content","p-20px"]},[t(q,u({gutter:0},f(r),{class:"outline-1px outline-[var(--el-border-color-lighter)] outline-solid"}),H(i=e.schema.map(l=>t(P,{key:l.field,span:l.span||24/e.column,class:"flex items-stretch"},{default:()=>{var a,c,x,b,v,g;return[e.direction==="horizontal"?t("div",{class:"flex items-stretch bg-[var(--el-fill-color-light)] outline-1px outline-[var(--el-border-color-lighter)] outline-solid flex-1"},[t("div",u(p(l),{class:"w-120px text-left px-8px py-11px font-700 color-[var(--el-text-color-regular)] border-r-1px border-r-[var(--el-border-color-lighter)] border-r-solid "}),[l.label]),t("div",{class:"flex-1 px-8px py-11px bg-[var(--el-bg-color)] color-[var(--el-text-color-primary)] text-size-14px"},[(a=l.slots)!=null&&a.default?(c=l.slots)==null?void 0:c.default(e.data):(x=_(e.data,l.field))!=null?x:w])]):t("div",{class:"bg-[var(--el-fill-color-light)] outline-1px outline-[var(--el-border-color-lighter)] outline-solid flex-1"},[t("div",u(p(l),{class:"text-left px-8px py-11px font-700 color-[var(--el-text-color-regular)] border-b-1px border-b-[var(--el-border-color-lighter)] border-b-solid"}),[l.label]),t("div",{class:"flex-1 px-8px py-11px bg-[var(--el-bg-color)] color-[var(--el-text-color-primary)] text-size-14px"},[(b=l.slots)!=null&&b.default?(v=l.slots)==null?void 0:v.default(e.data):(g=_(e.data,l.field))!=null?g:w])])]}})))?i:{default:()=>[i]})]),[[A,f(d)]])]})])}}}),W=B(Z,[["__scopeId","data-v-1252c088"]]);export{W as D};
