import{_ as e}from"./index.46e5b397.js";import{d as t,g as o,h as i,o as s,i as r,bw as n,j as p}from"./index.06f3ee29.js";import{_ as a}from"./index.192de65f.js";import{u as l}from"./useForm.bc255b70.js";import"./index.33949cd9.js";import"./responsiveObserve.c545f1cc.js";import"./index.ca107bc6.js";import"./vendor.0d1494f4.js";import"./findIndex.e0eb9451.js";import"./isEqual.74a158b4.js";import"./_baseProperty.74f89655.js";import"./toInteger.c1d92202.js";import"./index.980e8b38.js";import"./index.6f563249.js";import"./SearchOutlined.80b97ace.js";import"./CheckOutlined.170c5a81.js";import"./DownOutlined.a2b62231.js";import"./index.05074f4c.js";import"./index.a3e88181.js";import"./UpOutlined.c18e08b2.js";import"./index.5f26cfb9.js";import"./EyeOutlined.9c30adbb.js";import"./index.1856500c.js";import"./colors.150c899a.js";import"./RightOutlined.3a6167aa.js";import"./RedoOutlined.8be832f0.js";import"./index.7729c420.js";import"./EllipsisOutlined.9da6daab.js";import"./types.ea4e42e6.js";import"./Tree.918118f3.js";import"./util.6f4aed49.js";import"./useAttrs.75e4bdd4.js";import"./index.95c10fda.js";import"./index.316663d4.js";import"./uuid.0357dfa3.js";import"./index.51a23a15.js";import"./DeleteOutlined.084cf4d3.js";import"./index.894ac7ce.js";import"./useTimeout.6f68f351.js";import"./useWindowSizeFn.c470727d.js";import"./index.6ff2b8a1.js";import"./index.de8bd41e.js";import"./domUtils.8545414a.js";import"./_stringToArray.de50b038.js";import"./useScrollTo.0454a233.js";import"./animation.557dbdd5.js";import"./FullscreenOutlined.bbb91eb1.js";import"./index.33e2796b.js";import"./index.be890f15.js";import"./index.2b3a1b55.js";import"./LeftOutlined.117bdb10.js";import"./download.0962c71e.js";import"./index.c2c2071e.js";import"./index.3617ac63.js";import"./usePageContext.5934f257.js";import"./transButton.0234a19c.js";import"./ArrowLeftOutlined.8c726f84.js";const d=[{field:"title",component:"Input",label:"标题",componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",required:!0},{field:"target",component:"InputTextArea",label:"目标描述",componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"client",component:"Input",label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"inviteer",component:"Input",label:"邀评人",subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"weights",component:"InputNumber",label:"权重",subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosurer",component:"Select",label:" ",show:({model:e})=>"2"===e.disclosure,componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}];var m=t({components:{BasicForm:e,PageWrapper:a},setup(){const{createMessage:e}=o(),[t,{validate:i,setProps:s}]=l({labelCol:{span:7},wrapperCol:{span:10},schemas:d,actionColOptions:{offset:8},submitButtonOptions:{text:"提交"},submitFunc:async function(){try{await i(),s({submitButtonOptions:{loading:!0}}),setTimeout((()=>{s({submitButtonOptions:{loading:!1}}),e.success("提交成功！")}),2e3)}catch(t){}}});return{register:t}}});const c=n("data-v-5cbaa0f1"),u=c(((e,t,o,n,a,l)=>{const d=i("BasicForm"),m=i("PageWrapper");return s(),r(m,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:c((()=>[p(d,{onRegister:e.register},null,8,["onRegister"])])),_:1})}));m.render=u,m.__scopeId="data-v-5cbaa0f1";export default m;