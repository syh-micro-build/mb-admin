var g=Object.defineProperty;var f=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var u=(o,e,t)=>e in o?g(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,p=(o,e)=>{for(var t in e||(e={}))B.call(e,t)&&u(o,t,e[t]);if(f)for(var t of f(e))S.call(e,t)&&u(o,t,e[t]);return o};import{u as b}from"./index-BBsYgDjd.js";import{a3 as k}from"./element-plus-DmczhoYX.js";import{q as v,d as n,t as C,T,S as h,H as r,I as j,u as i}from"./vue-chunks-DOWhatC1.js";const $=v({__name:"Button",props:{size:{type:String,default:void 0},type:{type:String,default:"default"},disabled:{type:Boolean,default:!1},plain:{type:Boolean,default:!1},text:{type:Boolean,default:!1},bg:{type:Boolean,default:!1},link:{type:Boolean,default:!1},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{type:[String,Object],default:void 0},icon:{type:[String,Object],default:void 0},autofocus:{type:Boolean,default:!1},nativeType:{type:String,default:"button"},autoInsertSpace:{type:Boolean,default:!1},color:{type:String,default:""},darker:{type:Boolean,default:!1},tag:{type:[String,Object],default:"button"}},emits:["click"],setup(o,{emit:e}){const t=b(),d=n(()=>t.getTheme),a=o,c=e,y=n(()=>{const{type:l}=a;return l==="primary"?i(d).elColorPrimary:""}),m=n(()=>{const{type:l}=a;return l==="primary"?"--el-button-text-color: #fff; --el-button-hover-text-color: #fff":""});return(l,s)=>(C(),T(i(k),j({class:"button color-#fff"},p({},a),{color:y.value,style:m.value,onClick:s[0]||(s[0]=()=>c("click"))}),{default:h(()=>[r(l.$slots,"default"),r(l.$slots,"icon"),r(l.$slots,"loading")]),_:3},16,["color","style"]))}});export{$ as _};
