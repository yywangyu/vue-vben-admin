import{d as e,h as i,o as t,i as s,j as o}from"./index.263e87c1.js";import"./index.a1dae3eb.js";import"./_stringToArray.cad96220.js";import"./domUtils.842bf6df.js";import"./index.a73e59fe.js";import"./index.7af9597f.js";import"./index.9380c6e4.js";import"./CheckOutlined.02c2529f.js";import"./index.6fa633b9.js";import{_ as a}from"./index.378fb246.js";import"./FullscreenOutlined.f8a8dae1.js";import"./RightOutlined.d0259003.js";import"./SettingOutlined.6e381a06.js";import"./useTimeout.4920e0e1.js";import"./index.dba68c94.js";import"./animation.3878be1e.js";import"./useScrollTo.e15f955c.js";import"./useAttrs.a43ee0a8.js";import"./useWindowSizeFn.c5c953e5.js";import"./index.a2a48fd0.js";import"./uuid.a6cec785.js";import"./download.2bed4871.js";import"./useForm.1ba423af.js";import"./useSortable.3b304a95.js";import"./useExpose.7c858fec.js";import{getBasicColumns as r,getTreeTableData as m}from"./tableData.7aa0192c.js";var n=e({components:{BasicTable:a},setup:()=>({columns:r(),data:m()})});const d={class:"p-4"};n.render=function(e,a,r,m,n,p){const c=i("BasicTable");return t(),s("div",d,[o(c,{rowSelection:{type:"checkbox"},title:"树形表格",titleHelpMessage:"树形组件不能和序列号列同时存在",columns:e.columns,dataSource:e.data,rowKey:"id",indentSize:20,isTreeTable:""},null,8,["columns","dataSource"])])};export default n;