var m=(l,n,i)=>new Promise((T,f)=>{var C=r=>{try{y(i.next(r))}catch(w){f(w)}},v=r=>{try{y(i.throw(r))}catch(w){f(w)}},y=r=>r.done?T(r.value):Promise.resolve(r.value).then(C,v);y((i=i.apply(l,n)).next())});import{I as M}from"./Icon-jk1cmimt.js";import{_ as R}from"./avatar-BwWoj8dC.js";import{p as W,m as g,n as k,k as p,q as B,l as _,r as E,s as q}from"./element-plus-6v3c1uXT.js";import{r as A,f as Y}from"./index-BX5Y7Zbz.js";/* empty css               *//* empty css                         *//* empty css                *//* empty css                   *//* empty css                */import{_ as N}from"./CountTo.vue_vue_type_script_setup_true_lang-CyXWhYHf.js";import{r as z,_ as F}from"./Echart.vue_vue_type_script_setup_true_lang-DltL96cO.js";import"./echarts-VT2A7KjM.js";import{_ as G}from"./Highlight.vue_vue_type_script_lang-B_FoEuPR.js";import{q as K,r as Q,K as b,t as c,v as h,x as s,P as e,S as a,u as t,W as j,Q as $,a8 as O,T as I,X as x}from"./vue-chunks-DOWhatC1.js";const X={justNow:"刚刚",invalid:"无效时间",past:l=>l.match(/\d/)?`${l}前`:l,future:l=>l.match(/\d/)?`${l}后`:l,month:(l,n)=>l===1?n?"上个月":"下个月":`${l} 个月`,year:(l,n)=>l===1?n?"去年":"明年":`${l} 年`,day:(l,n)=>l===1?n?"昨天":"明天":`${l} 天`,week:(l,n)=>l===1?n?"上周":"下周":`${l} 周`,hour:l=>`${l} 小时`,minute:l=>`${l} 分钟`,second:l=>`${l} 秒`},H=l=>W(l,{messages:X}),J=()=>A.get({url:"/mock/workplace/total"}),U=()=>A.get({url:"/mock/workplace/project"}),Z=()=>A.get({url:"/mock/workplace/dynamic"}),tt=()=>A.get({url:"/mock/workplace/team"}),et=()=>A.get({url:"/mock/workplace/radar"}),at=s("div",{class:"flex items-center"},[s("img",{src:R,alt:"",class:"w-70px h-70px rounded-[50%] mr-20px"}),s("div",null,[s("div",{class:"text-20px"},"早安，ShanYi，祝你开心每一天!"),s("div",{class:"mt-10px text-14px text-gray-500"},"今日晴，20℃ - 32℃！")])],-1),st={class:"flex h-70px items-center justify-end lt-sm:mt-20px"},lt={class:"px-8px text-right"},nt=s("div",{class:"text-14px text-gray-400 mb-20px"},"项目数",-1),ot={class:"px-8px text-right"},dt=s("div",{class:"text-14px text-gray-400 mb-20px"},"待办",-1),rt={class:"px-8px text-right"},it=s("div",{class:"text-14px text-gray-400 mb-20px"},"项目访问",-1),ct={class:"flex justify-between"},ut=s("span",null,"项目数",-1),mt={class:"flex items-center"},pt={class:"text-16px"},_t={class:"mt-15px text-14px text-gray-400"},xt={class:"mt-20px text-12px text-gray-400 flex justify-between"},ft={class:"flex justify-between"},gt=s("span",null,"动态",-1),ht={class:"flex items-center"},vt=s("img",{src:R,alt:"",class:"w-35px h-35px rounded-[50%] mr-20px"},null,-1),yt={class:"text-14px"},wt={class:"mt-15px text-12px text-gray-400"},kt=s("span",null,"快捷操作",-1),bt=s("span",null,"xx指数",-1),jt=s("span",null,"团队",-1),$t={class:"flex items-center"},Wt=K({__name:"Workplace",setup(l){const n=Q(!0);let i=b({project:0,access:0,todo:0});const T=()=>m(this,null,function*(){const o=yield J().catch(()=>{});o&&(i=Object.assign(i,o.data))});let f=b([]);const C=()=>m(this,null,function*(){const o=yield U().catch(()=>{});o&&(f=Object.assign(f,o.data))});let v=b([]);const y=()=>m(this,null,function*(){const o=yield Z().catch(()=>{});o&&(v=Object.assign(v,o.data))});let r=b([]);const w=()=>m(this,null,function*(){const o=yield tt().catch(()=>{});o&&(r=Object.assign(r,o.data))});let S=b(z);const V=()=>m(this,null,function*(){const o=yield et().catch(()=>{});o&&(q(S,"radar.indicator",o.data.map(u=>({name:u.name,max:u.max}))),q(S,"series",[{name:"xxx指数",type:"radar",data:[{value:o.data.map(u=>u.personal),name:"个人"},{value:o.data.map(u=>u.team),name:"团队"}]}]))});return m(this,null,function*(){yield Promise.all([T(),C(),y(),w(),V()]),n.value=!1}),(o,u)=>{const P=M;return c(),h($,null,[s("div",null,[e(t(_),{shadow:"never"},{default:a(()=>[e(t(g),{loading:n.value,animated:""},{default:a(()=>[e(t(k),{gutter:20,justify:"space-between"},{default:a(()=>[e(t(p),{xl:12,lg:12,md:12,sm:24,xs:24},{default:a(()=>[at]),_:1}),e(t(p),{xl:12,lg:12,md:12,sm:24,xs:24},{default:a(()=>[s("div",st,[s("div",lt,[nt,e(t(N),{class:"text-20px","start-val":0,"end-val":t(i).project,duration:2600},null,8,["end-val"])]),e(t(B),{direction:"vertical"}),s("div",ot,[dt,e(t(N),{class:"text-20px","start-val":0,"end-val":t(i).todo,duration:2600},null,8,["end-val"])]),e(t(B),{direction:"vertical","border-style":"dashed"}),s("div",rt,[it,e(t(N),{class:"text-20px","start-val":0,"end-val":t(i).access,duration:2600},null,8,["end-val"])])])]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1})]),e(t(k),{class:"mt-20px",gutter:20,justify:"space-between"},{default:a(()=>[e(t(p),{xl:16,lg:16,md:24,sm:24,xs:24,class:"mb-20px"},{default:a(()=>[e(t(_),{shadow:"never"},{header:a(()=>[s("div",ct,[ut,e(t(E),{type:"primary",underline:!1},{default:a(()=>[j("更多")]),_:1})])]),default:a(()=>[e(t(g),{loading:n.value,animated:""},{default:a(()=>[e(t(k),null,{default:a(()=>[(c(!0),h($,null,O(t(f),(d,D)=>(c(),I(t(p),{key:`card-${D}`,xl:8,lg:8,md:12,sm:24,xs:24},{default:a(()=>[e(t(_),{shadow:"hover"},{default:a(()=>[s("div",mt,[e(P,{icon:d.icon,size:25,class:"mr-10px"},null,8,["icon"]),s("span",pt,x(d.name),1)]),s("div",_t,x(d.message),1),s("div",xt,[s("span",null,x(d.personal),1),s("span",null,x(t(Y)(d.time,"yyyy-MM-dd")),1)])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1},8,["loading"])]),_:1}),e(t(_),{shadow:"never",class:"mt-20px"},{header:a(()=>[s("div",ft,[gt,e(t(E),{type:"primary",underline:!1},{default:a(()=>[j("更多")]),_:1})])]),default:a(()=>[e(t(g),{loading:n.value,animated:""},{default:a(()=>[(c(!0),h($,null,O(t(v),(d,D)=>(c(),h("div",{key:`dynamics-${D}`},[s("div",ht,[vt,s("div",null,[s("div",yt,[e(t(G),{keys:d.keys.map(L=>L)},{default:a(()=>[j(" ShanYi 推送 代码到 Github ")]),_:2},1032,["keys"])]),s("div",wt,x(t(H)(d.time)),1)])]),e(t(B))]))),128))]),_:1},8,["loading"])]),_:1})]),_:1}),e(t(p),{xl:8,lg:8,md:24,sm:24,xs:24,class:"mb-20px"},{default:a(()=>[e(t(_),{shadow:"never"},{header:a(()=>[kt]),default:a(()=>[e(t(g),{loading:n.value,animated:""},{default:a(()=>[e(t(k),null,{default:a(()=>[(c(),h($,null,O(9,d=>e(t(p),{key:`card-${d}`,xl:12,lg:12,md:12,sm:24,xs:24,class:"mb-10px"},{default:a(()=>[e(t(E),{type:"default",underline:!1},{default:a(()=>[j(" 操作"+x(d),1)]),_:2},1024)]),_:2},1024)),64))]),_:1})]),_:1},8,["loading"])]),_:1}),e(t(_),{shadow:"never",class:"mt-20px"},{header:a(()=>[bt]),default:a(()=>[e(t(g),{loading:n.value,animated:""},{default:a(()=>[e(t(F),{options:t(S),height:400},null,8,["options"])]),_:1},8,["loading"])]),_:1}),e(t(_),{shadow:"never",class:"mt-20px"},{header:a(()=>[jt]),default:a(()=>[e(t(g),{loading:n.value,animated:""},{default:a(()=>[e(t(k),null,{default:a(()=>[(c(!0),h($,null,O(t(r),d=>(c(),I(t(p),{key:`team-${d.name}`,span:12,class:"mb-20px"},{default:a(()=>[s("div",$t,[e(P,{icon:d.icon,class:"mr-10px"},null,8,["icon"]),e(t(E),{type:"default",underline:!1},{default:a(()=>[j(x(d.name),1)]),_:2},1024)])]),_:2},1024))),128))]),_:1})]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})],64)}}});export{Wt as default};