import{d as e,r as a,h as n,o,i as l,w as r,j as t}from"./index.c87ef19b.js";import{_ as d}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";import{T as s}from"./index.3ed6a216.js";var i=e({components:{Tinymce:s,PageWrapper:d},setup:()=>({handleChange:function(e){},value:a("hello world!")})});i.render=function(e,a,d,s,i,u){const m=n("Tinymce"),p=n("PageWrapper");return o(),l(p,{title:"富文本组件示例"},{default:r((()=>[t(m,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),onChange:e.handleChange,width:"100%"},null,8,["modelValue","onChange"])])),_:1})};export default i;