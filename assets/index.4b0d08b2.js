import{d as a,bD as s,bE as t,h as l,o as i,i as e,j as o,ab as r,ac as d,aL as n}from"./index.263e87c1.js";import"./_stringToArray.cad96220.js";import"./domUtils.842bf6df.js";import m from"./GrowCard.920ef5a8.js";import{a as f}from"./index.9380c6e4.js";import"./RightOutlined.d0259003.js";import{growCardList as c,taskList as p}from"./data.72fbcf3d.js";import"./index.4b64d667.js";import"./useTimeout.4920e0e1.js";import"./useECharts.35e827bc.js";import"./props.f48aca0b.js";import u from"./TrendLine.f2d8d1e1.js";import j from"./AnalysisLine.cb3b862e.js";import y from"./AnalysisPie.fda4fff2.js";import _ from"./AnalysisBar.a99e7a08.js";import b from"./TaskCard.45f24d17.js";import"./index.dba68c94.js";import"./animation.3878be1e.js";import"./useScrollTo.e15f955c.js";import A from"./FlowAnalysis.7fa8ffd2.js";var C=a({components:{GrowCard:m,CollapseContainer:f,TrendLine:u,AnalysisLine:j,AnalysisPie:y,AnalysisBar:_,TaskCard:b,FlowAnalysis:A},setup:()=>({growCardList:c,taskList:p})});const L=n("data-v-d62b6ce4");s("data-v-d62b6ce4");const g={class:"analysis p-4"};t();const w=L(((a,s,t,n,m,f)=>{const c=l("GrowCard"),p=l("ACol"),u=l("a-row"),j=l("AnalysisLine"),y=l("CollapseContainer"),_=l("AnalysisPie"),b=l("a-col"),A=l("AnalysisBar"),C=l("TaskCard"),w=l("FlowAnalysis");return i(),e("div",g,[o(u,{class:"pl-2"},{default:L((()=>[(i(!0),e(r,null,d(a.growCardList,(a=>(i(),e(p,{key:a.title,sm:24,md:12,lg:6},{default:L((()=>[o(c,{info:a},null,8,["info"])])),_:2},1024)))),128))])),_:1}),o(u,null,{default:L((()=>[o(b,{md:24,lg:17,class:"my-3"},{default:L((()=>[o(y,{class:"mr-3",title:"产品成交额",canExpan:!1},{default:L((()=>[o(j)])),_:1}),o(u,{class:"mt-3"},{default:L((()=>[o(b,{md:24,lg:12,class:"product-total"},{default:L((()=>[o(y,{class:"mr-3",title:"产品成交额",canExpan:!1},{default:L((()=>[o(_)])),_:1})])),_:1}),o(b,{md:24,lg:12},{default:L((()=>[o(y,{class:"mr-3",title:"用户来源",canExpan:!1},{default:L((()=>[o(A)])),_:1})])),_:1})])),_:1})])),_:1}),o(b,{md:24,lg:7},{default:L((()=>[o(y,{class:"mt-3",title:"项目进度",canExpan:!1},{default:L((()=>[(i(!0),e(r,null,d(a.taskList,(a=>(i(),e(C,{key:a.title,info:a},null,8,["info"])))),128))])),_:1})])),_:1})])),_:1}),o(u,null,{default:L((()=>[o(w)])),_:1})])}));C.render=w,C.__scopeId="data-v-d62b6ce4";export default C;