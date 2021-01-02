let e=document.createElement("style");e.innerHTML=".darg-verify{position:relative;overflow:hidden;text-align:center;background-color:#eee;border:1px solid #ddd;border-radius:4px}.darg-verify-bar{position:absolute;width:0;height:36px;background:#55d187;border-radius:4px}.darg-verify-bar.to-left{width:0!important;transition:width .3s}.darg-verify-content{position:absolute;top:0;font-size:12px;-webkit-text-size-adjust:none;background:-webkit-gradient(linear,left top,right top,color-stop(0,#333),color-stop(.4,#333),color-stop(.5,#fff),color-stop(.6,#333),color-stop(1,#333));-webkit-animation:3s infinite slidetounlock;animation:3s infinite slidetounlock;-webkit-background-clip:text;-moz-user-select:none;-webkit-user-select:none;-o-user-select:none;-ms-user-select:none;user-select:none;-webkit-text-fill-color:transparent}.darg-verify-content.success{-webkit-text-fill-color:#fff}.darg-verify-content>*{-webkit-text-fill-color:#333}.darg-verify-action{position:absolute;top:0;left:0;display:flex;cursor:move;background:#fff;border-radius:4px;justify-content:center;align-items:center}.darg-verify-action__icon{cursor:inherit}.darg-verify-action.to-left{left:0!important;transition:left .3s}@-webkit-keyframes slidetounlock{0%{background-position:-120px 0}100%{background-position:120px 0}}",document.head.appendChild(e);import{u as t,a as i,b as s,r as o,aU as n,aN as r,I as a,c$ as l,f as c,ay as u}from"./index.683ee02b.js";import{C as d}from"./CheckOutlined.524ab7ba.js";import{D as f}from"./DoubleRightOutlined.e5665ad8.js";import{u as p}from"./useTimeout.776a81ea.js";import{g}from"./tsxHelper.128c957b.js";import{u as m}from"./useExpose.86fc274f.js";const{t:y}=t(),h={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:y("component.verify.dragText")},successText:{type:[String],default:y("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},v={...h,src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}};var b=i({name:"BaseDargVerify",props:h,emits:["success","update:value","change","start","move","end"],setup(e,{emit:t,slots:i}){const y=s({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),h=o(null),v=o(null),b=o(null),x=o(null);n((()=>y.isPassing),(e=>{if(e){const{startTime:i,endTime:s}=y;t("success",{isPassing:e,time:((s-i)/1e3).toFixed(1)}),t("update:value",e),t("change",e)}})),r((()=>{y.isPassing=!!e.value}));const w=a((()=>{const{height:t,actionStyle:i}=e,s=`${parseInt(t)}px`;return{left:0,width:s,height:s,...i}})),k=a((()=>{const{height:t,width:i,circle:s,wrapStyle:o}=e,n=parseInt(t);return{width:`${parseInt(i)}px`,height:`${n}px`,lineHeight:`${n}px`,borderRadius:s?n/2+"px":0,...o}})),T=a((()=>{const{height:t,circle:i,barStyle:s}=e,o=parseInt(t);return{height:`${o}px`,borderRadius:i?o/2+"px 0 0 "+o/2+"px":0,...s}})),S=a((()=>{const{height:t,width:i,contentStyle:s}=e;return{height:`${parseInt(t)}px`,width:`${parseInt(i)}px`,...s}}));function D(e){return e.pageX||e.touches[0].pageX}function j(e){if(y.isPassing)return;const i=c(x);i&&(t("start",e),y.moveDistance=D(e)-parseInt(i.style.left.replace("px",""),10),y.startTime=(new Date).getTime(),y.isMoving=!0)}function M(t){const i=parseInt(t.style.width),{width:s}=e,o=parseInt(s);return{offset:o-i-6,widthNum:o,actionWidth:i}}function I(i){const{isMoving:s,moveDistance:o}=y;if(s){const s=c(x),n=c(v);if(!s||!n)return;const{offset:r,widthNum:a,actionWidth:l}=M(s),u=D(i)-o;t("move",{event:i,moveDistance:o,moveX:u}),u>0&&u<=r?(s.style.left=`${u}px`,n.style.width=`${u+l/2}px`):u>r&&(s.style.left=a-l+"px",n.style.width=a-l/2+"px",e.isSlot||N())}}function $(i){const{isMoving:s,isPassing:o,moveDistance:n}=y;if(s&&!o){t("end",i);const s=c(x),o=c(v);if(!s||!o)return;const r=D(i)-n,{offset:a,widthNum:l,actionWidth:u}=M(s);r<a?e.isSlot?setTimeout((()=>{if(e.value){const e=c(b);e&&(e.style.width=`${parseInt(o.style.width)}px`)}else P()}),0):P():(s.style.left=l-u+"px",o.style.width=l-u/2+"px",N()),y.isMoving=!1}}function N(){e.isSlot?P():(y.endTime=(new Date).getTime(),y.isPassing=!0,y.isMoving=!1)}function P(){y.isMoving=!1,y.isPassing=!1,y.moveDistance=0,y.toLeft=!1,y.startTime=0,y.endTime=0;const e=c(x),t=c(v),i=c(b);e&&t&&i&&(y.toLeft=!0,p((()=>{y.toLeft=!1,e.style.left="0",t.style.width="0"}),300),i.style.width=c(S).width)}return l({el:document,name:"mouseup",listener:()=>{y.isMoving&&P()}}),m({resume:P}),()=>u("div",{class:"darg-verify",ref:h,style:c(k),onMousemove:I,onTouchmove:I,onMouseleave:$,onMouseup:$,onTouchend:$},(()=>{const e=["darg-verify-bar"];return y.toLeft&&e.push("to-left"),u("div",{class:e,ref:v,style:c(T)})})(),(()=>{const t=["darg-verify-content"],{isPassing:s}=y,{text:o,successText:n}=e;return s&&t.push("success"),u("div",{class:t,ref:b,style:c(S)},g(i,"text",s)||(s?n:o))})(),(()=>{const e=["darg-verify-action"],{toLeft:t,isPassing:s}=y;return t&&e.push("to-left"),u("div",{class:e,onMousedown:j,onTouchstart:j,style:c(w),ref:x},g(i,"actionIcon",s)||u(s?d:f,{class:"darg-verify-action__icon"}))})())}}),x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:b});export{b as B,x as D,v as r};