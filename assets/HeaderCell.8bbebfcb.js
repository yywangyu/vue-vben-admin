import{d as e,a7 as l,a8 as t,a9 as s,q as a,h as r,o as n,i,w as o,l as u,k as c,ab as p,m as d}from"./index.263e87c1.js";var _=e({name:"TableHeaderCell",components:{EditTableHeaderCell:l((()=>t((()=>__import__("./index.378fb246.js").then((function(e){return e.E}))),["/assets/index.378fb246.js","/assets/index.de6b65c1.css","/assets/index.263e87c1.js","/assets/index.17037a8f.css","/assets/index.a1dae3eb.js","/assets/index.be284e2b.css","/assets/domUtils.842bf6df.js","/assets/_stringToArray.cad96220.js","/assets/index.a73e59fe.js","/assets/index.7af9597f.js","/assets/index.9380c6e4.js","/assets/index.76e45014.css","/assets/RightOutlined.d0259003.js","/assets/useTimeout.4920e0e1.js","/assets/index.dba68c94.js","/assets/index.121e7eba.css","/assets/useScrollTo.e15f955c.js","/assets/animation.3878be1e.js","/assets/index.6fa633b9.js","/assets/index.ca1a8c37.css","/assets/FullscreenOutlined.f8a8dae1.js","/assets/useAttrs.a43ee0a8.js","/assets/useWindowSizeFn.c5c953e5.js","/assets/index.a2a48fd0.js","/assets/uuid.a6cec785.js","/assets/download.2bed4871.js","/assets/CheckOutlined.02c2529f.js","/assets/SettingOutlined.6e381a06.js","/assets/useForm.1ba423af.js","/assets/useSortable.3b304a95.js","/assets/useExpose.7c858fec.js"]))),BasicHelp:l((()=>t((()=>__import__("./BasicHelp.e52f6c0f.js")),["/assets/BasicHelp.e52f6c0f.js","/assets/index.263e87c1.js","/assets/index.17037a8f.css","/assets/_stringToArray.cad96220.js","/assets/domUtils.842bf6df.js","/assets/index.9380c6e4.js","/assets/index.76e45014.css","/assets/RightOutlined.d0259003.js","/assets/useTimeout.4920e0e1.js","/assets/index.dba68c94.js","/assets/index.121e7eba.css","/assets/useScrollTo.e15f955c.js","/assets/animation.3878be1e.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:l}=s("basic-table-header-cell");return{prefixCls:l,getIsEdit:a((()=>{var l;return!!(null==(l=e.column)?void 0:l.edit)})),getTitle:a((()=>{var l;return null==(l=e.column)?void 0:l.customTitle})),getHelpMessage:a((()=>{var l;return null==(l=e.column)?void 0:l.helpMessage}))}}});const f={key:1};_.render=function(e,l,t,s,a,_){const g=r("EditTableHeaderCell"),m=r("BasicHelp");return n(),i(p,null,[e.getIsEdit?(n(),i(g,{key:0},{default:o((()=>[d(u(e.getTitle),1)])),_:1})):(n(),i("span",f,u(e.getTitle),1)),e.getHelpMessage?(n(),i(m,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):c("",!0)],64)};export default _;