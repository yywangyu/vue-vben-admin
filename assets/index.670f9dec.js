import{d as e,I as a,r as o,f as s,h as t,i,o as n,j as r,w as p,k as d,n as l}from"./index.50b828bd.js";import"./index.61099513.js";import{a as u}from"./index.ea618bdb.js";import{u as m}from"./useCopyToClipboard.e296f579.js";import{_ as c}from"./index.4486a83c.js";import"./index.3550ea99.js";import"./domUtils.4d4b190d.js";import"./RightOutlined.238a31d2.js";import"./index.8d91dadc.js";import"./useTimeout.027d8171.js";import"./useScrollTo.3be61fce.js";import"./animation.64c13706.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.9fbd6c39.js";import"./usePageContext.a9759aff.js";var f=e({name:"Copy",components:{CollapseContainer:u,PageWrapper:c,[a.name]:a},setup(){const e=o(""),{createMessage:a}=t(),{clipboardRef:i,copiedRef:n}=m();return{handleCopy:function(){const o=s(e);o?(i.value=o,s(n)&&a.warning("copy success！")):a.warning("请输入要拷贝的内容！")},value:e}}});const j={class:"flex justify-center"},x=l("Copy");f.render=function(e,a,o,s,t,l){const u=i("a-input"),m=i("a-button"),c=i("CollapseContainer"),f=i("PageWrapper");return n(),r(f,{title:"文本复制示例"},{default:p((()=>[d(c,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:p((()=>[d("div",j,[d(u,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),d(m,{type:"primary",onClick:e.handleCopy},{default:p((()=>[x])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default f;