var m=(v,b,s)=>new Promise((f,t)=>{var o=p=>{try{g(s.next(p))}catch(S){t(S)}},a=p=>{try{g(s.throw(p))}catch(S){t(S)}},g=p=>p.done?f(p.value):Promise.resolve(p.value).then(o,a);g((s=s.apply(v,b)).next())});import{_ as R}from"./ContentWrap.vue_vue_type_script_setup_true_lang-zabPSsf5.js";import{_ as O}from"./Search.vue_vue_type_script_setup_true_lang-D-sSVAql.js";import{_ as d}from"./Button.vue_vue_type_script_setup_true_lang-BmEbjjX3.js";import{g as B}from"./index-Cw9XXO94.js";import{r as c,n as M,u as l,y as N,W as _,z,A as E,O as n,L as i,a4 as u,I as J}from"./vue-chunks-ChjHxF1G.js";import{_ as W}from"./Icon-DfDcjZQU.js";import"./index-CiB76NFm.js";import"./element-plus-CUBv5pjL.js";/* empty css                *//* empty css                  */import"./Form-DKlONQh9.js";/* empty css                     *//* empty css               *//* empty css               *//* empty css                    */import"./el-radio-button-DlEAFCzX.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-CYaK01To.js";import"./style.css_vue_type_style_index_0_src_true_lang-CIDuEyvy.js";import"./wang-editor-qsc5EwLN.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DSPwTeCg.js";import"./IconPicker-B-Lyc0V0.js";/* empty css                      */import"./useForm-VvdYGQvr.js";import"./useIcon-DblsHs_B.js";const j=()=>{const v=c(),b=t=>{v.value=t},s=()=>m(void 0,null,function*(){yield M();const t=l(v);return t||console.error("The Search is not registered. Please use the register method to register"),t});return{searchRegister:b,searchMethods:{setProps:(...o)=>m(void 0,[...o],function*(t={}){const a=yield s();a==null||a.setProps(t),t.model&&(a==null||a.setValues(t.model))}),setValues:t=>m(void 0,null,function*(){const o=yield s();o==null||o.setValues(t)}),setSchema:t=>m(void 0,null,function*(){const o=yield s();o==null||o.setSchema(t)}),addSchema:(t,o)=>m(void 0,null,function*(){const a=yield s();a==null||a.addSchema(t,o)}),delSchema:t=>m(void 0,null,function*(){const o=yield s();o==null||o.delSchema(t)}),getFormData:()=>m(void 0,null,function*(){const t=yield s();return t==null?void 0:t.getFormData()})}}},q=N({__name:"Search",setup(v){const{searchRegister:b,searchMethods:s}=j(),{setSchema:f,setProps:t,setValues:o,getFormData:a}=s,g=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],p=()=>new Promise(r=>{setTimeout(()=>{r(g)},3e3)}),S=_([{field:"field1",label:"输入框",component:"Input"},{field:"field2",label:"选择器",component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}],on:{change:r=>{}}}},{field:"field3",label:"单选框",component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:"日期选择器",componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:"时间选择"},{field:"field8",label:"输入框",component:"Input"},{field:"field9",label:"输入框",component:"Input"},{field:"field10",label:"输入框",component:"Input"},{field:"field11",label:"输入框",component:"Input"},{field:"field12",label:"输入框",component:"Input"},{field:"field13",label:"输入框",component:"Input"},{field:"field14",label:"输入框",component:"Input"},{field:"field15",label:"输入框",component:"Input"},{field:"field16",label:"输入框",component:"Input"},{field:"field17",label:"输入框",component:"Input"},{field:"field18",label:"输入框",component:"Input"},{field:"field19",label:"树形选择器",component:"TreeSelect",optionApi:()=>m(this,null,function*(){return yield p()})}]),x=c(!1),C=r=>{t({isCol:r})},L=c("inline"),T=()=>{L.value=l(L)==="inline"?"bottom":"inline"},I=c("left"),w=r=>{L.value="bottom",I.value=r},D=()=>m(this,null,function*(){const r=yield B();r&&f([{field:"field2",path:"componentProps.options",value:r.data}])}),P=r=>m(this,null,function*(){yield a()}),$=()=>{f([{field:"field3",path:"remove",value:!0}])},V=()=>{f([{field:"field3",path:"remove",value:!1}])},F=()=>{o({field1:"Joy"})},y=c(!1),A=()=>{y.value=!0,setTimeout(()=>{y.value=!1},2e3)},k=c(!1),G=()=>{k.value=!0,setTimeout(()=>{k.value=!1},2e3)};return(r,e)=>(z(),E(J,null,[n(l(R),{title:"查询 操作",style:{"margin-bottom":"20px"}},{default:i(()=>[n(l(d),{onClick:e[0]||(e[0]=h=>C(!0))},{default:i(()=>e[5]||(e[5]=[u("栅格")])),_:1}),n(l(d),{onClick:e[1]||(e[1]=h=>C(!1))},{default:i(()=>e[6]||(e[6]=[u(" 还原 栅格 ")])),_:1}),n(l(d),{onClick:T},{default:i(()=>e[7]||(e[7]=[u(" 按钮 位置 ")])),_:1}),n(l(d),{onClick:e[2]||(e[2]=h=>w("left"))},{default:i(()=>e[8]||(e[8]=[u(" 底部 位置-左 ")])),_:1}),n(l(d),{onClick:e[3]||(e[3]=h=>w("center"))},{default:i(()=>e[9]||(e[9]=[u(" 底部 位置-中 ")])),_:1}),n(l(d),{onClick:e[4]||(e[4]=h=>w("right"))},{default:i(()=>e[10]||(e[10]=[u(" 底部 位置-右 ")])),_:1}),n(l(d),{onClick:D},{default:i(()=>e[11]||(e[11]=[u(" 选择器 动态选项 ")])),_:1}),n(l(d),{onClick:$},{default:i(()=>e[12]||(e[12]=[u("删除单选框")])),_:1}),n(l(d),{onClick:V},{default:i(()=>e[13]||(e[13]=[u("还原单选框")])),_:1}),n(l(d),{onClick:F},{default:i(()=>e[14]||(e[14]=[u("设置值")])),_:1}),n(l(d),{onClick:A},{default:i(()=>e[15]||(e[15]=[u(" 查询 加载中 ")])),_:1}),n(l(d),{onClick:G},{default:i(()=>e[16]||(e[16]=[u(" 重置 加载中 ")])),_:1})]),_:1}),n(l(R),{title:"查询",message:"基于 Form 组件二次封装，实现查询、重置功能"},{default:i(()=>[n(l(O),{schema:S,"is-col":x.value,layout:L.value,"button-position":I.value,"search-loading":y.value,"reset-loading":k.value,"show-expand":"","expand-field":"field6",onSearch:P,onReset:P,onRegister:l(b)},null,8,["schema","is-col","layout","button-position","search-loading","reset-loading","onRegister"])]),_:1})],64))}}),ke=W(q,[["__scopeId","data-v-536165e5"]]);export{ke as default};