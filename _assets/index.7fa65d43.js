let a=document.createElement("style");a.innerHTML=".list-basic__top[data-v-2bd2a634]{padding:24px;margin:24px 24px 0;text-align:center;background:#fff}.list-basic__top-col[data-v-2bd2a634]:not(:last-child){border-right:1px dashed rgba(206,206,206,.4)}.list-basic__top-col div[data-v-2bd2a634]{margin-bottom:12px;font-size:14px;line-height:22px;color:rgba(0,0,0,.45)}.list-basic__top-col p[data-v-2bd2a634]{margin:0;font-size:24px;line-height:32px;color:rgba(0,0,0,.85)}.list-basic__content[data-v-2bd2a634]{padding:24px;margin:12px 24px;background:#fff}.list-basic__content .list[data-v-2bd2a634]{position:relative}.list-basic__content .icon[data-v-2bd2a634]{font-size:40px!important}.list-basic__content .extra[data-v-2bd2a634]{position:absolute;top:20px;right:15px;font-weight:400;color:#1890ff;cursor:pointer}.list-basic__content .description[data-v-2bd2a634]{display:inline-block;width:40%}.list-basic__content .info[data-v-2bd2a634]{display:inline-block;width:30%;text-align:center}.list-basic__content .info div[data-v-2bd2a634]{display:inline-block;padding:0 20px}.list-basic__content .info div span[data-v-2bd2a634]{display:block}.list-basic__content .progress[data-v-2bd2a634]{display:inline-block;width:15%;vertical-align:top}",document.head.appendChild(a);import{a as t,d6 as i,d7 as s,i as l,o as n,j as e,k as o,aM as d,aW as c,bp as p,m as r,n as b,p as _}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./CheckOutlined.7eddd459.js";import"./types.0b2024d5.js";import{P as v}from"./index.bb6c9219.js";import{s as f}from"./index.431d78e6.js";import{cardList as x}from"./data.cee46033.js";var u=t({components:{Icon:f,Progress:v},setup:()=>({prefixCls:"list-basic",list:x,pagination:{show:!0,pageSize:3}})});const g=p("data-v-2bd2a634");i("data-v-2bd2a634");const m=o("div",null,"我的待办",-1),h=o("p",null,"8个任务",-1),k=o("div",null,"本周任务平均处理时间",-1),y=o("p",null,"32分钟",-1),C=o("div",null,"本周完成任务数",-1),j=o("p",null,"24个任务",-1),w={key:0,class:"extra"},$={class:"description"},z={class:"info"},I=o("span",null,"Owner",-1),P=o("span",null,"开始时间",-1),M={class:"progress"};s();const O=g(((a,t,i,s,p,v)=>{const f=l("a-page-header"),x=l("a-col"),u=l("a-row"),O=l("Icon"),E=l("Progress"),H=l("a-list-item-meta"),L=l("a-list-item"),S=l("a-list");return n(),e("div",{class:a.prefixCls},[o(f,{title:"标准列表",ghost:!1}),o("div",{class:`${a.prefixCls}__top`},[o(u,{gutter:12},{default:g((()=>[o(x,{span:8,class:`${a.prefixCls}__top-col`},{default:g((()=>[m,h])),_:1},8,["class"]),o(x,{span:8,class:`${a.prefixCls}__top-col`},{default:g((()=>[k,y])),_:1},8,["class"]),o(x,{span:8,class:`${a.prefixCls}__top-col`},{default:g((()=>[C,j])),_:1},8,["class"])])),_:1})],2),o("div",{class:`${a.prefixCls}__content`},[o(S,{pagination:a.pagination},{default:g((()=>[(n(!0),e(d,null,c(a.list,(a=>(n(),e(L,{key:a.id,class:"list"},{default:g((()=>[o(H,null,{avatar:g((()=>[a.icon?(n(),e(O,{key:0,class:"icon",icon:a.icon,color:a.color},null,8,["icon","color"])):r("v-if",!0)])),title:g((()=>[o("span",null,b(a.title),1),a.extra?(n(),e("div",w,b(a.extra),1)):r("v-if",!0)])),description:g((()=>[o("div",$,b(a.description),1),o("div",z,[o("div",null,[I,_(b(a.author),1)]),o("div",null,[P,_(b(a.datetime),1)])]),o("div",M,[o(E,{percent:a.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)],2)}));u.render=O,u.__scopeId="data-v-2bd2a634";export default u;