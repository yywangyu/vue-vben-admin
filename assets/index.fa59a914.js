import{D as e}from"./index.5a2c5d21.js";import{u as a}from"./useDescription.a3c55778.js";import{_ as t}from"./index.025c1173.js";import{d as s,h as i,o as r,i as o,w as n,j as m}from"./index.d4318adc.js";import"./index.b625d1ea.js";import"./responsiveObserve.c545f1cc.js";import"./index.4936604d.js";import"./index.85243e6a.js";import"./domUtils.96378b32.js";import"./_stringToArray.3c05aa00.js";import"./RightOutlined.aa2d326a.js";import"./index.95c10fda.js";import"./useTimeout.ed91a96d.js";import"./useScrollTo.fc1f5456.js";import"./animation.9de4462f.js";import"./index.045fcbee.js";import"./index.f10db5c5.js";import"./EllipsisOutlined.078d6602.js";import"./types.4f1ac25d.js";import"./isEqual.9fc12f76.js";import"./toInteger.daaae8e7.js";import"./DownOutlined.b7602ab2.js";import"./index.86bc52fe.js";import"./usePageContext.0b56e62c.js";import"./transButton.1a8cd0b2.js";import"./ArrowLeftOutlined.ae61cb07.js";import"./vendor.783aefe0.js";const l={username:"test",nickName:"VB",age:25,phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},d=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}];var c=s({components:{Description:e,PageWrapper:t},setup(){const[e]=a({title:"useDescription",data:l,schema:d}),[t]=a({title:"无边框",bordered:!1,data:l,schema:d});return{mockData:l,schema:d,register:e,register1:t}}});c.render=function(e,a,t,s,l,d){const c=i("Description"),p=i("PageWrapper");return r(),o(p,{title:"详情组件示例"},{default:n((()=>[m(c,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),m(c,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),m(c,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),m(c,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])])),_:1})};export default c;