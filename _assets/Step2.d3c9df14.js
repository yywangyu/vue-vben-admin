let e=document.createElement("style");e.innerHTML=".step2[data-v-3e6a7e30]{width:450px;margin:0 auto}",document.head.appendChild(e);import{a as t,d6 as i,d7 as s,i as o,o as a,j as n,k as r,bp as d,p as m}from"./index.e4b88f60.js";import"./xlsx.a48e520c.js";import"./index.63df68f8.js";import"./Trigger.e3ee00d7.js";import"./omit.fa5f69c9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.06f8d2e0.js";import"./CheckOutlined.7eddd459.js";import{s as p}from"./index.ee856824.js";import"./colors.4a59113e.js";import"./RightOutlined.8b7faa82.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.d92ff7b8.js";import"./index.157e5b0f.js";import"./index.a172b251.js";import"./index.49f51c29.js";import"./index.c7a723bb.js";import"./UpOutlined.3eedcb1d.js";import"./index.0a2c42e4.js";import"./index.12e9aa85.js";import"./index.5f2b7f1b.js";import"./index.4d00a526.js";import"./index.e6dc8920.js";import"./index.8d1e8c32.js";import"./CloseOutlined.bfc223d0.js";import"./FullscreenOutlined.bef0f37b.js";import"./LoadingOutlined.0e06bc81.js";import"./RightOutlined.536370f6.js";import"./useTimeout.f29a1845.js";import"./tsxHelper.c30fb80c.js";import"./index.f8ee4236.js";import"./animation.dc344f03.js";import"./useScrollTo.800fbd0c.js";import"./useAttrs.75b03407.js";import"./index.431d78e6.js";import"./index.c0c9b6ac.js";import"./useWindowSizeFn.b44974f1.js";import{u as c}from"./useForm.78921f4a.js";import{step2Schemas as l}from"./data.9968c9c2.js";var u=t({components:{BasicForm:p},emits:["next","prev"],setup(e,{emit:t}){const[i,{validate:s,setProps:o}]=c({labelWidth:80,schemas:l,actionColOptions:{span:14},resetButtonOptions:{text:"上一步"},submitButtonOptions:{text:"提交"},resetFunc:async function(){t("prev")},submitFunc:async function(){try{const e=await s();o({submitButtonOptions:{loading:!0}}),setTimeout((()=>{o({submitButtonOptions:{loading:!1}}),t("next",e)}),1500)}catch(e){}}});return{register:i}}});const j=d("data-v-3e6a7e30");i("data-v-3e6a7e30");const f={class:"step2"},b=m(" ant-design@alipay.com "),x=m(" test@example.com "),g=m(" Vben "),O=m(" 500元 ");s();const h=j(((e,t,i,s,d,m)=>{const p=o("a-alert"),c=o("a-descriptions-item"),l=o("a-descriptions"),u=o("a-divider"),h=o("BasicForm");return a(),n("div",f,[r(p,{message:"确认转账后，资金将直接打入对方账户，无法退回。","show-icon":""}),r(l,{column:1,class:"mt-5"},{default:j((()=>[r(c,{label:"付款账户"},{default:j((()=>[b])),_:1}),r(c,{label:"收款账户"},{default:j((()=>[x])),_:1}),r(c,{label:"收款人姓名"},{default:j((()=>[g])),_:1}),r(c,{label:"转账金额"},{default:j((()=>[O])),_:1})])),_:1}),r(u),r(h,{onRegister:e.register},null,8,["onRegister"])])}));u.render=h,u.__scopeId="data-v-3e6a7e30";export default u;