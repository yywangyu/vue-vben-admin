let e=document.createElement("style");e.innerHTML=".vben-header-lock-modal__entry{position:relative;height:240px;padding:130px 30px 60px;background:#fff;border-radius:10px}.vben-header-lock-modal__header{position:absolute;top:0;left:calc(50% - 45px);width:auto;text-align:center}.vben-header-lock-modal__header-img{width:70px;border-radius:50%}.vben-header-lock-modal__header-name{margin-top:5px}.vben-header-lock-modal__footer{text-align:center}",document.head.appendChild(e);import{a as t,u as r,aV as s,I as o,dC as i,g as a,i as d,o as n,j as l,w as m,k as p,n as c,p as f,J as u}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./index.63df68f8.js";import"./Trigger.e3ee00d7.js";import"./omit.fa5f69c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06f8d2e0.js";import"./CheckOutlined.7eddd459.js";import{s as j}from"./index.ee856824.js";import"./colors.4a59113e.js";import"./RightOutlined.8b7faa82.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./index.157e5b0f.js";import"./index.a172b251.js";import"./index.49f51c29.js";import"./index.c7a723bb.js";import"./UpOutlined.3eedcb1d.js";import"./index.0a2c42e4.js";import"./index.12e9aa85.js";import"./index.5f2b7f1b.js";import"./index.4d00a526.js";import"./index.e6dc8920.js";import"./index.8d1e8c32.js";import"./CloseOutlined.bfc223d0.js";import"./FullscreenOutlined.bef0f37b.js";import"./LoadingOutlined.0e06bc81.js";import"./RightOutlined.536370f6.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import{_ as x}from"./header.0299ae16.js";import"./useAttrs.75b03407.js";import"./index.431d78e6.js";import{s as b,b as h}from"./index.c0c9b6ac.js";import"./useWindowSizeFn.b44974f1.js";import{u as g}from"./useForm.78921f4a.js";var _=t({name:"LockModal",components:{BasicModal:b,BasicForm:j},setup(){const{t:e}=r(),{prefixCls:t}=s("header-lock-modal"),d=o((()=>{var e;return null==(e=a.getUserInfoState)?void 0:e.realName})),[n,{closeModal:l}]=h(),[m,{validateFields:p,resetFields:c}]=g({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:t,getRealName:d,register:n,registerForm:m,handleLock:async function(){const e=(await p()).password;l(),i.commitLockInfoState({isLock:!0,pwd:e}),await c()}}}});_.render=function(e,t,r,s,o,i){const a=d("BasicForm"),j=d("a-button"),b=d("BasicModal");return n(),l(b,u({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:m((()=>[p("div",{class:`${e.prefixCls}__entry`},[p("div",{class:`${e.prefixCls}__header`},[p("img",{src:x,class:`${e.prefixCls}__header-img`},null,2),p("p",{class:`${e.prefixCls}__header-name`},c(e.getRealName),3)],2),p(a,{onRegister:e.registerForm},null,8,["onRegister"]),p("div",{class:`${e.prefixCls}__footer`},[p(j,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:m((()=>[f(c(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default _;