import{cw as e,r as t,d5 as n,f as s,a,X as i,o,j as c,K as r,N as u}from"./index.e4b88f60.js";var l=a({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(a,{emit:o}){const c=t(null);return function(a,i,o="click"){if(e)return;const c=t(!1);function r(e){if("touchend"===e.type&&(c.value=!0),"click"===e.type&&s(c))return;const t=a.value;t&&e.target&&!t.contains(e.target)&&i(e)}n({el:document,name:"touchend",listener:r,options:!0}),n({el:document,name:o,listener:r,options:!0})}(c,(()=>{o("clickOutside")})),i((()=>{o("mounted")})),{wrap:c}}});const d={ref:"wrap"};l.render=function(e,t,n,s,a,i){return o(),c("div",d,[r(e.$slots,"default")],512)},u(l);export{l as s};