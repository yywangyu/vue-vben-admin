let e=document.createElement("style");e.innerHTML=".vben-layout-footer[data-v-6da14420]{color:rgba(0,0,0,.45);text-align:center}.vben-layout-footer__links[data-v-6da14420]{margin-bottom:8px}.vben-layout-footer__links a[data-v-6da14420]{color:rgba(0,0,0,.45)}.vben-layout-footer__links a[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}.vben-layout-footer__github[data-v-6da14420]{margin:0 30px}.vben-layout-footer__github[data-v-6da14420]:hover{color:rgba(0,0,0,.85)}",document.head.appendChild(e);import{a as o,u as t,a_ as i,aV as r,I as a,b7 as s,f as d,b9 as n,d6 as p,d7 as m,i as l,o as c,j,k as f,n as b,m as u,bp as x}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./useSortable.a227f6d3.js";import"./index.63df68f8.js";import"./Trigger.e3ee00d7.js";import"./omit.fa5f69c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06f8d2e0.js";import"./CheckOutlined.7eddd459.js";import"./index.c6a6b983.js";import"./index.99831407.js";import"./index.fc197608.js";import"./colors.4a59113e.js";import"./index.e9c76b61.js";import"./RightOutlined.8b7faa82.js";import{L as _}from"./index.17535709.js";import"./index.874dac81.js";import"./types.0b2024d5.js";import"./index.e66f21d9.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./_baseFor.f4e5f03f.js";import"./index.157e5b0f.js";import"./index.a172b251.js";import"./index.49f51c29.js";import"./index.c7a723bb.js";import"./index.ae61caad.js";import"./UpOutlined.3eedcb1d.js";import"./LeftOutlined.22980e9b.js";import"./index.0a2c42e4.js";import"./index.b08693ae.js";import"./index.12e9aa85.js";import"./index.2eedb6b3.js";import"./index.cb3cff10.js";import"./zh_CN.0242bd16.js";import"./index.ceeef7cc.js";import"./index.4d00a526.js";import"./index.bb6c9219.js";import"./index.59ca3f5a.js";import"./index.e6dc8920.js";import"./CaretDownFilled.22ce7fec.js";import"./FileOutlined.aa9b143a.js";import"./index.084e2f91.js";import"./index.e90c3e4e.js";import"./index.8d1e8c32.js";import{G as v}from"./GithubFilled.4b2cb515.js";import"./RightOutlined.536370f6.js";import"./index.fd1c75fe.js";import"./index.d370ab61.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import"./index.431d78e6.js";import"./useWindowSizeFn.b44974f1.js";import"./index.d40d1fc3.js";import"./useHeaderSetting.d8375fc6.js";import{D as g,G as h,S as y}from"./siteSetting.99cfbd47.js";var C=o({name:"LayoutFooter",components:{Footer:_.Footer,GithubFilled:v},setup(){const{t:e}=t(),{getShowFooter:o}=n(),{currentRoute:p}=i(),{prefixCls:m}=r("layout-footer");return{getShowLayoutFooter:a((()=>{var e;return d(o)&&!(null==(e=d(p).meta)?void 0:e.hiddenFooter)})),prefixCls:m,t:e,DOC_URL:g,GITHUB_URL:h,SITE_URL:y,openWindow:s}}});const F=x("data-v-6da14420");p("data-v-6da14420");const L=f("div",null,"Copyright ©2020 Vben Admin",-1);m();const S=F(((e,o,t,i,r,a)=>{const s=l("GithubFilled"),d=l("Footer");return e.getShowLayoutFooter?(c(),j(d,{key:0,class:e.prefixCls},{default:F((()=>[f("div",{class:`${e.prefixCls}__links`},[f("a",{onClick:o[1]||(o[1]=o=>e.openWindow(e.SITE_URL))},b(e.t("layout.footer.onlinePreview")),1),f(s,{onClick:o[2]||(o[2]=o=>e.openWindow(e.GITHUB_URL)),class:`${e.prefixCls}__github`},null,8,["class"]),f("a",{onClick:o[3]||(o[3]=o=>e.openWindow(e.DOC_URL))},b(e.t("layout.footer.onlineDocument")),1)],2),L])),_:1},8,["class"])):u("v-if",!0)}));C.render=S,C.__scopeId="data-v-6da14420";export default C;