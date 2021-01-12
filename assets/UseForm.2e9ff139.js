import{d as e,g as s,h as o,o as t,i as l,w as a,j as i,m as r}from"./index.263e87c1.js";import{_ as n}from"./index.a1dae3eb.js";import"./_stringToArray.cad96220.js";import"./domUtils.842bf6df.js";import"./index.a73e59fe.js";import"./index.7af9597f.js";import{a as p}from"./index.9380c6e4.js";import"./index.6fa633b9.js";import"./FullscreenOutlined.f8a8dae1.js";import"./RightOutlined.d0259003.js";import"./useTimeout.4920e0e1.js";import"./index.dba68c94.js";import"./animation.3878be1e.js";import"./useScrollTo.e15f955c.js";import"./useAttrs.a43ee0a8.js";import"./useWindowSizeFn.c5c953e5.js";import"./index.a2a48fd0.js";import"./uuid.a6cec785.js";import"./download.2bed4871.js";import{u as c}from"./useForm.1ba423af.js";import{_ as d}from"./index.f7c7adf0.js";import"./usePageContext.929623d6.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=e({components:{BasicForm:n,CollapseContainer:p,PageWrapper:d},setup(){const{createMessage:e}=s(),[o,{setProps:t}]=c({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:t}}});const f={class:"mb-4"},b=r("更改labelWidth"),P=r("还原labelWidth"),C=r("更改Size"),j=r("还原Size"),h=r("禁用表单"),k=r("解除禁用"),_=r("紧凑表单"),g=r("还原正常间距"),x=r(" 操作按钮位置 "),S={class:"mb-4"},v=r(" 隐藏操作按钮 "),w=r(" 显示操作按钮 "),B=r(" 隐藏重置按钮 "),W=r(" 显示重置按钮 "),F=r(" 隐藏查询按钮 "),O=r(" 显示查询按钮 "),R=r(" 修改重置按钮 "),z=r(" 修改查询按钮 ");u.render=function(e,s,r,n,p,c){const d=o("a-button"),m=o("BasicForm"),u=o("CollapseContainer"),y=o("PageWrapper");return t(),l(y,{title:"UseForm操作示例"},{default:a((()=>[i("div",f,[i(d,{onClick:s[1]||(s[1]=s=>e.setProps({labelWidth:150})),class:"mr-2"},{default:a((()=>[b])),_:1}),i(d,{onClick:s[2]||(s[2]=s=>e.setProps({labelWidth:120})),class:"mr-2"},{default:a((()=>[P])),_:1}),i(d,{onClick:s[3]||(s[3]=s=>e.setProps({size:"large"})),class:"mr-2"},{default:a((()=>[C])),_:1}),i(d,{onClick:s[4]||(s[4]=s=>e.setProps({size:"default"})),class:"mr-2"},{default:a((()=>[j])),_:1}),i(d,{onClick:s[5]||(s[5]=s=>e.setProps({disabled:!0})),class:"mr-2"},{default:a((()=>[h])),_:1}),i(d,{onClick:s[6]||(s[6]=s=>e.setProps({disabled:!1})),class:"mr-2"},{default:a((()=>[k])),_:1}),i(d,{onClick:s[7]||(s[7]=s=>e.setProps({compact:!0})),class:"mr-2"},{default:a((()=>[_])),_:1}),i(d,{onClick:s[8]||(s[8]=s=>e.setProps({compact:!1})),class:"mr-2"},{default:a((()=>[g])),_:1}),i(d,{onClick:s[9]||(s[9]=s=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:a((()=>[x])),_:1})]),i("div",S,[i(d,{onClick:s[10]||(s[10]=s=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:a((()=>[v])),_:1}),i(d,{onClick:s[11]||(s[11]=s=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:a((()=>[w])),_:1}),i(d,{onClick:s[12]||(s[12]=s=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:a((()=>[B])),_:1}),i(d,{onClick:s[13]||(s[13]=s=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:a((()=>[W])),_:1}),i(d,{onClick:s[14]||(s[14]=s=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:a((()=>[F])),_:1}),i(d,{onClick:s[15]||(s[15]=s=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:a((()=>[O])),_:1}),i(d,{onClick:s[16]||(s[16]=s=>e.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:a((()=>[R])),_:1}),i(d,{onClick:s[17]||(s[17]=s=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:a((()=>[z])),_:1})]),i(u,{title:"useForm示例"},{default:a((()=>[i(m,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;