var r=($,b,u)=>new Promise((g,v)=>{var c=d=>{try{p(u.next(d))}catch(f){v(f)}},k=d=>{try{p(u.throw(d))}catch(f){v(f)}},p=d=>d.done?g(d.value):Promise.resolve(d.value).then(c,k);p((u=u.apply($,b)).next())});import{F as j}from"./Form-DKlONQh9.js";import{_ as V}from"./ContentWrap.vue_vue_type_script_setup_true_lang-zabPSsf5.js";import{u as G}from"./useForm-VvdYGQvr.js";import"./index-CiB76NFm.js";import{u as N}from"./useValidator-Nt61Jv1p.js";import{g as q}from"./index-Cw9XXO94.js";import{_ as a}from"./Button.vue_vue_type_script_setup_true_lang-BmEbjjX3.js";import{j as K,E as H}from"./element-plus-CUBv5pjL.js";import{y as J,W as Q,O as t,a4 as n,r as X,z as Y,A as Z,L as i,u as o,I as h}from"./vue-chunks-ChjHxF1G.js";import{_}from"./Icon-DfDcjZQU.js";/* empty css                     *//* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import"./el-radio-button-DlEAFCzX.js";/* empty css                        *//* empty css                  *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-CYaK01To.js";import"./style.css_vue_type_style_index_0_src_true_lang-CIDuEyvy.js";import"./wang-editor-qsc5EwLN.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-DSPwTeCg.js";import"./IconPicker-B-Lyc0V0.js";/* empty css                      *//* empty css                */const ee=J({__name:"UseFormDemo",setup($){const{required:b}=N(),u=[{value:"1",label:"Level one 1",children:[{value:"1-1",label:"Level two 1-1",children:[{value:"1-1-1",label:"Level three 1-1-1"}]}]},{value:"2",label:"Level one 2",children:[{value:"2-1",label:"Level two 2-1",children:[{value:"2-1-1",label:"Level three 2-1-1"}]},{value:"2-2",label:"Level two 2-2",children:[{value:"2-2-1",label:"Level three 2-2-1"}]}]},{value:"3",label:"Level one 3",children:[{value:"3-1",label:"Level two 3-1",children:[{value:"3-1-1",label:"Level three 3-1-1"}]},{value:"3-2",label:"Level two 3-2",children:[{value:"3-2-1",label:"Level three 3-2-1"}]}]}],g=()=>new Promise(l=>{setTimeout(()=>{l(u)},3e3)}),v=Q([{field:"field1",label:"输入框",component:"Input",formItemProps:{rules:[b()]}},{field:"field2",label:"选择器",component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]},formItemProps:{rules:[b()]}},{field:"field3",label:"单选框",component:"RadioGroup",hidden:!0,value:"1",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:"多选框",component:"CheckboxGroup",value:["1"],remove:!0,componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:"日期选择器",componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:"时间选择"},{field:"field7",label:"树形选择器",component:"TreeSelect",optionApi:()=>r(this,null,function*(){return yield g()})},{field:"field8",component:"Upload",label:"默认",componentProps:{limit:3,action:"https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15",multiple:!0,onPreview:l=>{},onRemove:l=>{},beforeRemove:l=>K.confirm(`Cancel the transfer of ${l.name} ?`).then(()=>!0,()=>!1),onExceed:(l,e)=>{H.warning(`The limit is 3, you selected ${l.length} files this time, add up to ${l.length+e.length} totally`)},slots:{default:()=>t(a,{type:"primary"},{default:()=>[n("Click to upload")]}),tip:()=>t("div",{class:"el-upload__tip"},[n("jpg/png files with a size less than 500KB.")])}}}]),{formRegister:c,formMethods:k}=G(),{setProps:p,delSchema:d,addSchema:f,setValues:I,setSchema:y,getComponentExpose:L,getFormItemExpose:R,getElFormExpose:C,getFormData:w}=k,P=l=>{p({labelWidth:l})},D=l=>{p({size:l})},F=l=>{p({disabled:l})},S=l=>{l?d("field2"):!l&&v[1].field!=="field2"&&f({field:"field2",label:"选择器",component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},x=l=>r(this,null,function*(){const e=yield C();if(l)e==null||e.resetFields();else{I({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00",field8:[{name:"element-plus-logo.svg",url:"https://element-plus.org/images/element-plus-logo.svg"},{name:"element-plus-logo2.svg",url:"https://element-plus.org/images/element-plus-logo.svg"}]});const s=yield w()}}),m=X(7),T=()=>{y([{field:"field2",path:"label",value:`选择器 ${m.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),m.value++},z=()=>{o(m)%2===0?f({field:`field${o(m)}`,label:`输入框${o(m)}`,component:"Input"}):f({field:`field${o(m)}`,label:`输入框${o(m)}`,component:"Input"},o(m)),m.value++},U=()=>r(this,null,function*(){const l=yield C();l==null||l.validate(e=>{})}),W=()=>r(this,null,function*(){const l=yield C();l==null||l.resetFields()}),B=()=>r(this,null,function*(){const l=yield q();l&&y([{field:"field2",path:"componentProps.options",value:l.data}])}),E=()=>r(this,null,function*(){const l=yield L("field1");l==null||l.focus()}),A=()=>r(this,null,function*(){const l=yield R("field1"),e=yield L("field1");e==null||e.focus(),l==null||l.validate("focus",s=>{})}),M=(l,e,s)=>{};setTimeout(()=>r(this,null,function*(){const l=yield w()}),2e3);const O=()=>r(this,null,function*(){const l=yield w()});return(l,e)=>(Y(),Z(h,null,[t(o(V),{title:"UseForm 操作",style:{"margin-bottom":"20px"}},{default:i(()=>[t(o(a),{onClick:e[0]||(e[0]=s=>P(150))},{default:i(()=>e[10]||(e[10]=[n("更改 labelWidth")])),_:1}),t(o(a),{onClick:e[1]||(e[1]=s=>P("auto"))},{default:i(()=>e[11]||(e[11]=[n("还原 labelWidth")])),_:1}),t(o(a),{onClick:e[2]||(e[2]=s=>D("large"))},{default:i(()=>e[12]||(e[12]=[n("更改 size")])),_:1}),t(o(a),{onClick:e[3]||(e[3]=s=>D("default"))},{default:i(()=>e[13]||(e[13]=[n("还原 size")])),_:1}),t(o(a),{onClick:e[4]||(e[4]=s=>F(!0))},{default:i(()=>e[14]||(e[14]=[n("禁用")])),_:1}),t(o(a),{onClick:e[5]||(e[5]=s=>F(!1))},{default:i(()=>e[15]||(e[15]=[n("解除禁用")])),_:1}),t(o(a),{onClick:e[6]||(e[6]=s=>S(!0))},{default:i(()=>e[16]||(e[16]=[n(" 删除 选择器 ")])),_:1}),t(o(a),{onClick:e[7]||(e[7]=s=>S(!1))},{default:i(()=>e[17]||(e[17]=[n(" 添加 选择器 ")])),_:1}),t(o(a),{onClick:e[8]||(e[8]=s=>x(!1))},{default:i(()=>e[18]||(e[18]=[n("设置值")])),_:1}),t(o(a),{onClick:e[9]||(e[9]=s=>x(!0))},{default:i(()=>e[19]||(e[19]=[n("重置值")])),_:1}),t(o(a),{onClick:T},{default:i(()=>e[20]||(e[20]=[n(" 设置 选择器 label ")])),_:1}),t(o(a),{onClick:z},{default:i(()=>e[21]||(e[21]=[n(" 添加 子项 ")])),_:1}),t(o(a),{onClick:U},{default:i(()=>e[22]||(e[22]=[n(" 表单验证 ")])),_:1}),t(o(a),{onClick:W},{default:i(()=>e[23]||(e[23]=[n(" 验证重置 ")])),_:1}),t(o(a),{onClick:B},{default:i(()=>e[24]||(e[24]=[n(" 选择器 动态选项 ")])),_:1}),t(o(a),{onClick:E},{default:i(()=>e[25]||(e[25]=[n(" 输入框 聚焦 ")])),_:1}),t(o(a),{onClick:A},{default:i(()=>e[26]||(e[26]=[n(" 输入框 表单验证 ")])),_:1}),t(o(a),{onClick:O},{default:i(()=>e[27]||(e[27]=[n(" 获取值 ")])),_:1})]),_:1}),t(o(V),{title:"UseForm 示例"},{default:i(()=>[t(o(j),{schema:v,onRegister:o(c),onValidate:M},null,8,["schema","onRegister"])]),_:1})],64))}}),Ie=_(ee,[["__scopeId","data-v-41286e55"]]);export{Ie as default};