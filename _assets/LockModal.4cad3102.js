let e=document.createElement("style");e.innerHTML=".vben-header-lock-modal__entry{position:relative;height:240px;padding:130px 30px 60px;background:#fff;border-radius:10px}.vben-header-lock-modal__header{position:absolute;top:0;left:calc(50% - 45px);width:auto;text-align:center}.vben-header-lock-modal__header-img{width:70px;border-radius:50%}.vben-header-lock-modal__header-name{margin-top:5px}.vben-header-lock-modal__footer{text-align:center}",document.head.appendChild(e);import{a as t,u as r,aY as s,I as o,dx as i,g as a,i as d,o as n,j as l,w as c,k as m,n as p,p as u,J as j}from"./index.683ee02b.js";import"./xlsx.a48e520c.js";import"./index.654b393d.js";import"./Trigger.4a1012cb.js";import"./omit.2a33c03e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.3c6fc756.js";import"./CheckOutlined.067219d5.js";import{s as x}from"./index.b29cbd78.js";import"./colors.8524fb6a.js";import"./RightOutlined.d099b71b.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.8bc64622.js";import"./index.21384945.js";import"./index.a172b251.js";import"./index.e933223f.js";import"./index.dc57452d.js";import"./UpOutlined.58b411ed.js";import"./index.22c58738.js";import"./index.c919bcdb.js";import"./index.84aedb45.js";import"./index.30ca2de4.js";import"./index.84128ec6.js";import"./index.9b3871aa.js";import"./CloseOutlined.05cd9c0c.js";import"./FullscreenOutlined.0c714ec6.js";import"./LoadingOutlined.9fecd770.js";import"./RightOutlined.689336d5.js";import"./useTimeout.776a81ea.js";import"./tsxHelper.128c957b.js";import"./index.54e6c75c.js";import"./animation.ba961409.js";import"./useScrollTo.a28219ed.js";import{_ as f}from"./header.0299ae16.js";import"./useAttrs.694bc2f2.js";import"./index.6f3ebae1.js";import{s as b,b as h}from"./index.46f31187.js";import"./useWindowSizeFn.da2edc3d.js";import{u as g}from"./useForm.c75537b1.js";var _=t({name:"LockModal",components:{BasicModal:b,BasicForm:x},setup(){const{t:e}=r(),{prefixCls:t}=s("header-lock-modal"),d=o((()=>{var e;return null==(e=a.getUserInfoState)?void 0:e.realName})),[n,{closeModal:l}]=h(),[c,{validateFields:m,resetFields:p}]=g({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:t,getRealName:d,register:n,registerForm:c,handleLock:async function(){const e=(await m()).password;l(),i.commitLockInfoState({isLock:!0,pwd:e}),await p()}}}});_.render=function(e,t,r,s,o,i){const a=d("BasicForm"),x=d("a-button"),b=d("BasicModal");return n(),l(b,j({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:c((()=>[m("div",{class:`${e.prefixCls}__entry`},[m("div",{class:`${e.prefixCls}__header`},[m("img",{src:f,class:`${e.prefixCls}__header-img`},null,2),m("p",{class:`${e.prefixCls}__header-name`},p(e.getRealName),3)],2),m(a,{onRegister:e.registerForm},null,8,["onRegister"]),m("div",{class:`${e.prefixCls}__footer`},[m(x,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:c((()=>[u(p(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default _;