import{d as e,h as t,o as i,i as d,j as n}from"./index.263e87c1.js";import"./index.a1dae3eb.js";import"./_stringToArray.cad96220.js";import"./domUtils.842bf6df.js";import"./index.a73e59fe.js";import"./index.7af9597f.js";import"./index.9380c6e4.js";import"./CheckOutlined.02c2529f.js";import"./index.6fa633b9.js";import{_ as a,a as o}from"./index.378fb246.js";import"./FullscreenOutlined.f8a8dae1.js";import"./RightOutlined.d0259003.js";import"./SettingOutlined.6e381a06.js";import"./useTimeout.4920e0e1.js";import"./index.dba68c94.js";import"./animation.3878be1e.js";import"./useScrollTo.e15f955c.js";import"./useAttrs.a43ee0a8.js";import"./useWindowSizeFn.c5c953e5.js";import"./index.a2a48fd0.js";import"./uuid.a6cec785.js";import"./download.2bed4871.js";import"./useForm.1ba423af.js";import"./useSortable.3b304a95.js";import"./useExpose.7c858fec.js";import{u as s}from"./useTable.909da54c.js";import{o as r}from"./select.78918766.js";import{d as l}from"./table.54b1c548.js";const m=[{title:"输入框",dataIndex:"name",edit:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",edit:!0,editable:!0,width:200},{title:"输入框校验",dataIndex:"name1",edit:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",edit:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",edit:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",edit:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",edit:!0,editComponent:"ApiSelect",editComponentProps:{api:r},width:200},{title:"勾选框",dataIndex:"name5",edit:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",edit:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var p=e({components:{BasicTable:a,EditTableHeaderIcon:o},setup(){const[e]=s({title:"可编辑单元格示例",api:l,columns:m,showIndexColumn:!1,bordered:!0});return{registerTable:e,handleEditEnd:function({record:e,index:t,key:i,value:d}){},handleEditCancel:function(){}}}});const c={class:"p-4"};p.render=function(e,a,o,s,r,l){const m=t("BasicTable");return i(),d("div",c,[n(m,{onRegister:e.registerTable,onEditEnd:e.handleEditEnd,onEditCancel:e.handleEditCancel},null,8,["onRegister","onEditEnd","onEditCancel"])])};export default p;