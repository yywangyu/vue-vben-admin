let e=document.createElement("style");e.innerHTML=".vben-setting-switch-item[data-v-2b7b2ae4]{display:flex;justify-content:space-between;margin:16px 0}",document.head.appendChild(e);import{a as t,aY as i,u as a,I as s,i as n,o as d,j as o,k as r,n as l,J as p,bi as c}from"./index.683ee02b.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.8bc64622.js";import"./index.671397e5.js";import{S as m}from"./index.84128ec6.js";import"./index.abb0d4ce.js";import"./index.9b3871aa.js";import"./index.1a9db19f.js";import"./RightOutlined.689336d5.js";import"./SettingOutlined.8c9a98ac.js";import"./useTimeout.776a81ea.js";import"./tsxHelper.128c957b.js";import"./index.54e6c75c.js";import"./animation.ba961409.js";import"./useScrollTo.a28219ed.js";import"./useAttrs.694bc2f2.js";import"./useHeaderSetting.a3c9ee5a.js";import{b}from"./index.756e0075.js";var u=t({name:"SwitchItem",components:{Switch:m},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:t}=i("setting-switch-item"),{t:n}=a();return{prefixCls:t,t:n,handleChange:function(t){e.event&&b(e.event,t)},getBindValue:s((()=>e.def?{checked:e.def}:{}))}}});const h=c("data-v-2b7b2ae4")(((e,t,i,a,s,c)=>{const m=n("Switch");return d(),o("div",{class:e.prefixCls},[r("span",null,l(e.title),1),r(m,p(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));u.render=h,u.__scopeId="data-v-2b7b2ae4";export default u;