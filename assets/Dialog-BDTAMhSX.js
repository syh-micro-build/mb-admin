var _=(b,d,o)=>new Promise((m,u)=>{var c=i=>{try{n(o.next(i))}catch(a){u(a)}},v=i=>{try{n(o.throw(i))}catch(a){u(a)}},n=i=>i.done?m(i.value):Promise.resolve(i.value).then(c,v);n((o=o.apply(b,d)).next())});import{_ as k}from"./ContentWrap.vue_vue_type_script_setup_true_lang-EGePu28N.js";import{_ as g}from"./Dialog.vue_vue_type_style_index_0_lang-D6WCzuvI.js";import{_ as s}from"./Button.vue_vue_type_script_setup_true_lang-DwheT98Z.js";import{F as y}from"./Form-CdYFjiq9.js";import{u as C}from"./useValidator-Nt61Jv1p.js";import{g as $}from"./index-BGNcelPo.js";import{u as P}from"./useForm-BbCgKKle.js";import{_ as x}from"./Echart.vue_vue_type_script_setup_true_lang-D6YESMUS.js";import{q as D,r as V,K as R,t as S,T as w,S as t,P as r,u as l,W as f}from"./vue-chunks-DOWhatC1.js";import"./Icon-CFil5UeN.js";import"./index-Dpd1fOXa.js";import"./element-plus-6v3c1uXT.js";/* empty css                *//* empty css                  *//* empty css                     *//* empty css               *//* empty css               *//* empty css                    */import"./el-radio-button-D60F957U.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-Bw3FYRH0.js";import"./style.css_vue_type_style_index_0_src_true_lang-CI4m6CEN.js";import"./wang-editor-DjPKVaXS.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-CiKGZgMS.js";import"./IconPicker-MtB4nikl.js";/* empty css                      */import"./Echart.vue_vue_type_script_setup_true_lang-CW6ZhHy4.js";import"./echarts-VT2A7KjM.js";const ne=D({__name:"Dialog",setup(b){const{required:d}=C(),o=V(!1),m=V(!1),{formRegister:u,formMethods:c}=P(),{getElFormExpose:v}=c,n=R([{field:"field1",label:"输入框",component:"Input",formItemProps:{rules:[d()]}},{field:"field2",label:"选择器",component:"Select",optionApi:()=>_(this,null,function*(){return(yield $()).data})},{field:"field3",label:"单选框",component:"RadioGroup",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:"多选框",component:"CheckboxGroup",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field5",component:"DatePicker",label:"日期选择器",componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:"时间选择"}]),i=()=>_(this,null,function*(){const a=yield v();a==null||a.validate(e=>{})});return(a,e)=>(S(),w(l(k),{title:"弹窗",message:"基于 ElementPlus 的 Dialog 组件二次封装"},{default:t(()=>[r(l(s),{type:"primary",onClick:e[0]||(e[0]=p=>o.value=!o.value)},{default:t(()=>[f(" 打开 ")]),_:1}),r(l(s),{type:"primary",onClick:e[1]||(e[1]=p=>m.value=!m.value)},{default:t(()=>[f(" 与表单结合 ")]),_:1}),r(l(g),{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=p=>o.value=p),title:"弹窗"},{footer:t(()=>[r(l(s),{onClick:e[2]||(e[2]=p=>o.value=!1)},{default:t(()=>[f("关闭")]),_:1})]),default:t(()=>[r(x)]),_:1},8,["modelValue"]),r(l(g),{modelValue:m.value,"onUpdate:modelValue":e[5]||(e[5]=p=>m.value=p),title:"弹窗"},{footer:t(()=>[r(l(s),{type:"primary",onClick:i},{default:t(()=>[f("提交")]),_:1}),r(l(s),{onClick:e[4]||(e[4]=p=>m.value=!1)},{default:t(()=>[f("关闭")]),_:1})]),default:t(()=>[r(l(y),{schema:n,onRegister:l(u)},null,8,["schema","onRegister"])]),_:1},8,["modelValue"])]),_:1}))}});export{ne as default};