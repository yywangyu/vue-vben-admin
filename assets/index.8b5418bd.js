var e=Object.assign;import{d as t,cj as i,r as n,b as o,X as d,br as s,bs as r,i as a,o as p,j as m,aJ as c,k as j,ak as l,al as u,l as x}from"./index.50b828bd.js";import"./index.b1e90d03.js";import f from"./Step1.dd6fbc5e.js";import b from"./Step2.625ce01e.js";import S from"./Step3.8bd7550c.js";import{_ as v}from"./index.4486a83c.js";import"./index.a45b2b74.js";import"./index.61099513.js";import"./index.47fbc714.js";import"./index.d8babbed.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.9284d4e4.js";import"./useAttrs.cfd03cd2.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.56b9f6b2.js";import"./useTimeout.027d8171.js";import"./useWindowSizeFn.48b953f5.js";import"./index.ea618bdb.js";import"./index.3550ea99.js";import"./domUtils.4d4b190d.js";import"./RightOutlined.238a31d2.js";import"./useScrollTo.3be61fce.js";import"./animation.64c13706.js";import"./FullscreenOutlined.aede640d.js";import"./index.443a48d5.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.bf43035d.js";import"./data.2505cb7f.js";import"./useForm.192c15e4.js";import"./index.c741f5a3.js";import"./index.545f875a.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.a9759aff.js";var h=t({components:{Step1:f,Step2:b,Step3:S,PageWrapper:v,[i.name]:i,[i.Step.name]:i.Step},setup(){const t=n(0),i=o({initSetp2:!1,initSetp3:!1});return e({current:t,handleStep1Next:function(e){t.value++,i.initSetp2=!0},handleStep2Next:function(e){t.value++,i.initSetp3=!0},handleRedo:function(){t.value=0,i.initSetp2=!1,i.initSetp3=!1},handleStepPrev:function(){t.value--}},d(i))}});const N=c("data-v-6a09ea8d");s("data-v-6a09ea8d");const P={class:"step-form-form"},g={class:"mt-5"};r();const k=N(((e,t,i,n,o,d)=>{const s=a("a-step"),r=a("a-steps"),c=a("Step1"),f=a("Step2"),b=a("Step3"),S=a("PageWrapper");return p(),m(S,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:N((()=>[j("div",P,[j(r,{current:e.current},{default:N((()=>[j(s,{title:"填写转账信息"}),j(s,{title:"确认转账信息"}),j(s,{title:"完成"})])),_:1},8,["current"])]),j("div",g,[l(j(c,{onNext:e.handleStep1Next},null,8,["onNext"]),[[u,0===e.current]]),e.initSetp2?l((p(),m(f,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[u,1===e.current]]):x("",!0),e.initSetp3?l((p(),m(b,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[u,2===e.current]]):x("",!0)])])),_:1})}));h.render=k,h.__scopeId="data-v-6a09ea8d";export default h;