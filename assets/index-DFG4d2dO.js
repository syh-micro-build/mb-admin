import{r as t}from"./index-CagagDwf.js";const s=()=>t.get({url:"/mock/department/list"}),a=e=>t.get({url:"/mock/department/users",params:e}),n=e=>t.post({url:"/mock/department/user/delete",data:{ids:e}}),p=e=>t.post({url:"/mock/department/user/save",data:e}),o=e=>t.post({url:"/mock/department/save",data:e}),m=e=>t.post({url:"/mock/department/delete",data:{ids:e}}),u=e=>t.get({url:"/mock/department/table/list",params:e});export{u as a,a as b,n as c,m as d,p as e,s as g,o as s};