let e=document.createElement("style");e.innerHTML=".box[data-v-49e309b4]{width:150px;height:150px;margin-top:20px;background:pink}",document.head.appendChild(e);import{a,r as s,d6 as t,d7 as i,i as o,o as l,j as n,k as r,cT as d,ap as c,aq as p,bp as u,p as m}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import{S as v}from"./index.63df68f8.js";import"./Trigger.e3ee00d7.js";import"./omit.fa5f69c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06f8d2e0.js";import"./CheckOutlined.7eddd459.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./tsxHelper.c30fb80c.js";import{F as S,S as f,a as T,b as x,c as b,d as j,e as h,f as R,g as X,h as Y,i as g,E as k,j as y}from"./index.f8ee4236.js";const E=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"].map((e=>({label:e,value:e,key:e})));var _=a({components:{Select:v,FadeTransition:S,ScaleTransition:f,SlideYTransition:T,ScrollYTransition:x,SlideYReverseTransition:b,ScrollYReverseTransition:j,SlideXTransition:h,ScrollXTransition:R,SlideXReverseTransition:X,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:k,ExpandTransition:y},setup(){const e=s("Fade"),a=s(!0);return{options:E,value:e,start:function(){a.value=!1,setTimeout((()=>{a.value=!0}),300)},show:a}}});const w=u("data-v-49e309b4");t("data-v-49e309b4");const C={class:"p-4"},F={class:"flex"},H=m(" start "),O={class:"box"};i();const U=w(((e,a,s,t,i,u)=>{const m=o("Select"),v=o("a-button");return l(),n("div",C,[r("div",F,[r(m,{options:e.options,value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a),placeholder:"选择动画",style:{width:"150px"}},null,8,["options","value"]),r(v,{type:"primary",class:"ml-4",onClick:e.start},{default:w((()=>[H])),_:1},8,["onClick"])]),(l(),n(d(`${e.value}Transition`),null,{default:w((()=>[c(r("div",O,null,512),[[p,e.show]])])),_:1}))])}));_.render=U,_.__scopeId="data-v-49e309b4";export default _;