var d=(s,m,t)=>new Promise((a,i)=>{var n=e=>{try{o(t.next(e))}catch(r){i(r)}},l=e=>{try{o(t.throw(e))}catch(r){i(r)}},o=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,l);o((t=t.apply(s,m)).next())});import{_ as I}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CC7WBs_1.js";import{F as b}from"./Form-BQfo1faT.js";import{u as V}from"./useValidator-Nt61Jv1p.js";import{u as x}from"./useForm-DEQsUXRz.js";import{q as F,K as u,t as R,T as S,S as w,P as C,u as p}from"./vue-chunks-BFNeukf4.js";import"./Icon-DMC491Fh.js";import"./index-ej47pwbE.js";import"./element-plus-BKXXpGCF.js";/* empty css                *//* empty css                  *//* empty css               *//* empty css               *//* empty css                    */import"./el-radio-button-BgtAaRBT.js";/* empty css                        *//* empty css                      *//* empty css                   *//* empty css                *//* empty css                    */import"./InputPassword-lJNIVt1s.js";import"./style.css_vue_type_style_index_0_src_true_lang-D_0jezjb.js";import"./wang-editor-B87DVY_Q.js";import"./JsonEditor.vue_vue_type_script_setup_true_lang-8r0k9f_F.js";import"./IconPicker-DhPtXzcW.js";const Y=F({__name:"useValidator",setup(s){const{formRegister:m,formMethods:t}=x(),{getFormData:a}=t,{required:i,lengthRange:n,notSpace:l,notSpecialCharacters:o}=V(),e=u([{field:"field1",label:"必填",component:"Input"},{field:"field2",label:"长度范围",component:"Input"},{field:"field3",label:"不能有空格",component:"Input"},{field:"field4",label:"不能有特殊字符",component:"Input"},{field:"field5",label:"是否相等-值1",component:"Input"},{field:"field6",label:"是否相等-值2",component:"Input"}]),r=u({field1:[i()],field2:[n({min:2,max:5})],field3:[l()],field4:[o()],field5:[{asyncValidator:(_,f,c)=>d(this,null,function*(){const h=yield a(),{field6:g}=h;f!==g?c(new Error("两个值不相等")):c()})}]});return(_,f)=>(R(),S(p(I),{title:"useValidator"},{default:w(()=>[C(p(b),{schema:e,rules:r,onRegister:p(m)},null,8,["schema","rules","onRegister"])]),_:1}))}});export{Y as default};
