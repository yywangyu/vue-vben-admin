import{B as e,t}from"./data.ca242668.js";import{a}from"./index.ea618bdb.js";import{d as n,r as s,h as l,f as d,i as c,o,j as i,w as r,k as u,n as p}from"./index.50b828bd.js";import{_ as f}from"./index.4486a83c.js";import"./index.3550ea99.js";import"./domUtils.4d4b190d.js";import"./RightOutlined.238a31d2.js";import"./index.8d91dadc.js";import"./useTimeout.027d8171.js";import"./useScrollTo.3be61fce.js";import"./animation.64c13706.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.9fbd6c39.js";import"./usePageContext.a9759aff.js";var m=n({components:{BasicTree:e,CollapseContainer:a,PageWrapper:f},setup(){const e=s(null),{createMessage:a}=l();function n(){const t=d(e);if(!t)throw new Error("tree is null!");return t}return{treeData:t,treeRef:e,handleLevel:function(e){n().filterByLevel(e)},handleSetCheckData:function(){n().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=n().getCheckedKeys();a.success(JSON.stringify(e))},handleSetSelectData:function(){n().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=n().getSelectedKeys();a.success(JSON.stringify(e))},handleSetExpandData:function(){n().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=n().getExpandedKeys();a.success(JSON.stringify(e))},appendNodeByKey:function(e=null){n().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){n().deleteNodeByKey(e)},updateNodeByKey:function(e){n().updateNodeByKey(e,{title:"parent2-new"})}}}});const y={class:"mb-4"},C=p("显示到第2级"),h=p("显示到第1级"),k=p("设置勾选数据"),x=p("获取勾选数据"),K=p("设置选中数据"),j=p("获取选中数据"),D=p("设置展开数据"),S=p("获取展开数据"),B={class:"mb-4"},_=p("添加根节点"),b=p("添加在parent3内添加节点"),N=p("删除parent3节点"),g=p("更新parent2节点");m.render=function(e,t,a,n,s,l){const d=c("a-button"),p=c("BasicTree"),f=c("CollapseContainer"),m=c("PageWrapper");return o(),i(m,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:r((()=>[u("div",y,[u(d,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:r((()=>[C])),_:1}),u(d,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:r((()=>[h])),_:1}),u(d,{onClick:e.handleSetCheckData,class:"mr-2"},{default:r((()=>[k])),_:1},8,["onClick"]),u(d,{onClick:e.handleGetCheckData,class:"mr-2"},{default:r((()=>[x])),_:1},8,["onClick"]),u(d,{onClick:e.handleSetSelectData,class:"mr-2"},{default:r((()=>[K])),_:1},8,["onClick"]),u(d,{onClick:e.handleGetSelectData,class:"mr-2"},{default:r((()=>[j])),_:1},8,["onClick"]),u(d,{onClick:e.handleSetExpandData,class:"mr-2"},{default:r((()=>[D])),_:1},8,["onClick"]),u(d,{onClick:e.handleGetExpandData,class:"mr-2"},{default:r((()=>[S])),_:1},8,["onClick"])]),u("div",B,[u(d,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:r((()=>[_])),_:1}),u(d,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:r((()=>[b])),_:1}),u(d,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:r((()=>[N])),_:1}),u(d,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:r((()=>[g])),_:1})]),u(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:r((()=>[u(p,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])),_:1})};export default m;