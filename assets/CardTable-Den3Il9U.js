var f=(m,l,o)=>new Promise((_,n)=>{var i=s=>{try{t(o.next(s))}catch(d){n(d)}},r=s=>{try{t(o.throw(s))}catch(d){n(d)}},t=s=>s.done?_(s.value):Promise.resolve(s.value).then(i,r);t((o=o.apply(m,l)).next())});import{_ as v}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CC7WBs_1.js";import{_ as C}from"./Table.vue_vue_type_script_lang-BxtT5keK.js";import"./index-ej47pwbE.js";/* empty css                    *//* empty css                  */import{g as k}from"./index-DyzAuvGA.js";/* empty css                *//* empty css                   */import{K as u,s as b}from"./element-plus-BKXXpGCF.js";import{q as T,r as x,t as y,T as L,S as c,P as p,u as a,x as e,X as g,W as h}from"./vue-chunks-BFNeukf4.js";import"./Icon-DMC491Fh.js";/* empty css                *//* empty css               *//* empty css                      *//* empty css                        */import"./el-radio-button-BgtAaRBT.js";/* empty css                         *//* empty css                  */import"./Button.vue_vue_type_script_setup_true_lang-B46rSp-D.js";import"./index-CYEDDztj.js";const B={class:"flex cursor-pointer"},w={class:"pr-16px"},z=["src"],D={class:"mb-12px font-700 font-size-16px"},N={class:"line-clamp-3 font-size-12px"},S={class:"flex justify-center items-center"},V=["onClick"],E=["onClick"],et=T({__name:"CardTable",setup(m){const l=x(!0);let o=x([]);(i=>f(this,null,function*(){const r=yield k(i||{pageIndex:1,pageSize:10}).catch(()=>{}).finally(()=>{l.value=!1});r&&(o.value=r.data.list)}))();const n=i=>{};return(i,r)=>(y(),L(a(v),{title:"卡片表格"},{default:c(()=>[p(a(C),{columns:[],data:a(o),loading:l.value,"custom-content":"","card-wrap-style":{width:"200px",marginBottom:"20px",marginRight:"20px"}},{content:c(t=>[e("div",B,[e("div",w,[e("img",{src:t.logo,class:"w-48px h-48px rounded-[50%]",alt:""},null,8,z)]),e("div",null,[e("div",D,g(t.name),1),e("div",N,g(t.desc),1)])])]),"content-footer":c(t=>[e("div",S,[e("div",{class:"flex-1 text-center",onClick:()=>n(t)},[p(a(u),{underline:!1},{default:c(()=>[h("操作一")]),_:1})],8,V),p(a(b),{direction:"vertical"}),e("div",{class:"flex-1 text-center",onClick:()=>n(t)},[p(a(u),{underline:!1},{default:c(()=>[h("操作二")]),_:1})],8,E)])]),_:1},8,["data","loading"])]),_:1}))}});export{et as default};
