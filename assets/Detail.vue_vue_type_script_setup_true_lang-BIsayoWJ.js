import{D as i}from"./Descriptions-CkB3Wtbt.js";import{I as d}from"./Icon-DMC491Fh.js";import"./index-ej47pwbE.js";/* empty css               */import{l as s}from"./element-plus-BKXXpGCF.js";import{q as f,r as m,P as a,Q as n,t as c,T as b,u as p}from"./vue-chunks-BFNeukf4.js";const g=f({__name:"Detail",props:{currentRow:{type:Object,default:()=>{}}},setup(o){const t=e=>a(s,{type:e?"success":"danger"},{default:()=>[e?"启用":"禁用"]}),u=m([{field:"type",label:"菜单类型",span:24,slots:{default:e=>{const l=e.type;return a(n,null,[l===1?"菜单":"目录"])}}},{field:"parentName",label:"父级菜单"},{field:"meta.title",label:"菜单名称"},{field:"component",label:"组件",slots:{default:e=>{const l=e.component;return a(n,null,[l==="#"?"顶级目录":l==="##"?"子目录":l])}}},{field:"name",label:"组件名称"},{field:"meta.icon",label:"图标",slots:{default:e=>{const l=e.icon;return l?a(n,null,[a(d,{icon:l},null)]):null}}},{field:"path",label:"路径"},{field:"meta.activeMenu",label:"高亮菜单"},{field:"permissionList",label:"按钮权限",span:24,slots:{default:e=>{var l;return a(n,null,[(l=e==null?void 0:e.permissionList)==null?void 0:l.map(r=>a(s,{class:"mr-1",key:r.value},{default:()=>[r.label]}))])}}},{field:"menuState",label:"菜单状态",slots:{default:e=>t(e.menuState)}},{field:"meta.hidden",label:"是否隐藏",slots:{default:e=>t(e.enableHidden)}},{field:"meta.alwaysShow",label:"是否一直显示",slots:{default:e=>t(e.enableDisplay)}},{field:"meta.noCache",label:"是否清除缓存",slots:{default:e=>t(e.enableCleanCache)}},{field:"meta.breadcrumb",label:"是否显示面包屑",slots:{default:e=>t(e.enableShowCrumb)}},{field:"meta.affix",label:"是否固定标签页",slots:{default:e=>t(e.enablePinnedTab)}},{field:"meta.noTagsView",label:"是否隐藏标签页",slots:{default:e=>t(e.enableHiddenTab)}},{field:"meta.canTo",label:"是否可跳转",slots:{default:e=>t(e.enableSkip)}}]);return(e,l)=>(c(),b(p(i),{schema:u.value,data:o.currentRow||{}},null,8,["schema","data"]))}});export{g as _};
