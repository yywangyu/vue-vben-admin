import{a as s,_ as o}from"./index.adcbe97e.js";import{_ as t}from"./index.1b767185.js";import{d as e,r,e as a,cr as l,cs as c,h as i,o as n,i as d,j as m,aR as p,aS as u,l as f,bz as j,m as b}from"./index.a566a5ca.js";import"./index.11164d45.js";import"./domUtils.a46c7224.js";import"./_stringToArray.1cfb153c.js";import"./RightOutlined.b48611f5.js";import"./index.8d91dadc.js";import"./useTimeout.e434fe9c.js";import"./useScrollTo.e749e6c6.js";import"./animation.831cbf1f.js";import"./index.327858b4.js";import"./index.5274dc7a.js";import"./RightOutlined.91e3265a.js";import"./types.e18f0e7b.js";import"./isEqual.ec621c06.js";import"./toInteger.baf86ce7.js";import"./DownOutlined.dd4e6399.js";import"./index.726e5344.js";import"./usePageContext.0bdca749.js";import"./transButton.fe643f31.js";var x=e({components:{CollapseContainer:s,ScrollContainer:o,PageWrapper:t},setup(){const s=r(null),o=()=>{const o=a(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){o().scrollTo(s)},scrollRef:s,scrollBottom:function(){o().scrollBottom()}}}});const _=j("data-v-6abcde9e");l("data-v-6abcde9e");const C={class:"my-4"},T=b("滚动到100px位置"),g=b("滚动到800px位置"),v=b("滚动到顶部"),k=b("滚动到底部"),y={class:"scroll-wrap"},R={class:"p-3"};c();const h=_(((s,o,t,e,r,a)=>{const l=i("a-button"),c=i("ScrollContainer"),j=i("PageWrapper");return n(),d(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:_((()=>[m("div",C,[m(l,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:_((()=>[T])),_:1}),m(l,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:_((()=>[g])),_:1}),m(l,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:_((()=>[v])),_:1}),m(l,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:_((()=>[k])),_:1})]),m("div",y,[m(c,{class:"mt-4",ref:"scrollRef"},{default:_((()=>[m("ul",R,[(n(),d(p,null,u(100,(s=>m("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},f(s),1))),64))])])),_:1},512)])])),_:1})}));x.render=h,x.__scopeId="data-v-6abcde9e";export default x;