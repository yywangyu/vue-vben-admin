import{d as e,b3 as s,b_ as o,g as r,h as t,o as a,i,w as n,j as l}from"./index.263e87c1.js";import{_ as d}from"./index.a1dae3eb.js";import"./_stringToArray.cad96220.js";import"./domUtils.842bf6df.js";import"./index.a73e59fe.js";import"./index.7af9597f.js";import{a as p}from"./index.9380c6e4.js";import"./index.6fa633b9.js";import"./FullscreenOutlined.f8a8dae1.js";import"./RightOutlined.d0259003.js";import"./useTimeout.4920e0e1.js";import"./index.dba68c94.js";import"./animation.3878be1e.js";import"./useScrollTo.e15f955c.js";import"./useAttrs.a43ee0a8.js";import"./useWindowSizeFn.c5c953e5.js";import"./index.a2a48fd0.js";import"./uuid.a6cec785.js";import"./download.2bed4871.js";import{u as m}from"./useForm.1ba423af.js";import{_ as u}from"./index.f7c7adf0.js";import"./usePageContext.929623d6.js";const c=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:r})=>s(o,{placeholder:"请输入",value:e[r],onChange:s=>{e[r]=s.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var f=e({components:{BasicForm:d,CollapseContainer:p,PageWrapper:u},setup(){const{createMessage:e}=r(),[s,{setProps:o}]=m({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:o}}});f.render=function(e,s,o,r,d,p){const m=t("a-input"),u=t("BasicForm"),c=t("CollapseContainer"),f=t("PageWrapper");return a(),i(f,{title:"自定义组件示例"},{default:n((()=>[l(c,{title:"自定义表单"},{default:n((()=>[l(u,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:n((({model:e,field:s})=>[l(m,{value:e[s],"onUpdate:value":o=>e[s]=o,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default f;