import{r as o,a_ as t,f as a,Z as r}from"./index.b2563c25.js";import{r as s}from"./animation.f3edcb57.js";function n({el:n,to:c,duration:l=500,callback:e}){const i=o(!1),u=(o=>o.scrollTop)(n),f=c-u;let p=0;l=t(l)?500:l;const m=function(){if(!a(i))return;p+=20;const o=(t=p,c=u,b=f,(t/=l/2)<1?b/2*t*t+c:-b/2*(--t*(t-2)-1)+c);var t,c,b;((o,t)=>{o.scrollTop=t})(n,o),p<l&&a(i)?s(m):e&&r(e)&&e()};return{start:()=>{i.value=!0,m()},stop:()=>{i.value=!1}}}export{n as u};