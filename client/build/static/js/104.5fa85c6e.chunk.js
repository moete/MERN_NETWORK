(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1747:function(e,a,n){"use strict";var t=n(0),r=n(3),l=n.n(r),o=n(97);function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function d(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}var c=function(e,a){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)a.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n};a.a=function(e){return t.createElement(o.a,null,function(a){var n,r=a.getPrefixCls,o=e.prefixCls,i=e.type,m=void 0===i?"horizontal":i,p=e.orientation,k=void 0===p?"center":p,u=e.className,y=e.children,g=e.dashed,N=c(e,["prefixCls","type","orientation","className","children","dashed"]),f=r("divider",o),E=k.length>0?"-".concat(k):k,x=l()(u,f,"".concat(f,"-").concat(m),(d(n={},"".concat(f,"-with-text").concat(E),y),d(n,"".concat(f,"-dashed"),!!g),n));return t.createElement("div",s({className:x},N,{role:"separator"}),y&&t.createElement("span",{className:"".concat(f,"-inner-text")},y))})}},2276:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(238),o=n(127),s=n(1747),d=n(29),c=n(1655),i=n(2224),m=[{title:"Name",dataIndex:"name",key:"name",render:function(e){return r.a.createElement("span",{className:"gx-link"},e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Action",key:"action",render:function(e,a){return r.a.createElement("span",null,r.a.createElement("span",{className:"gx-link"},"Action \u4e00 ",a.name),r.a.createElement(s.a,{type:"vertical"}),r.a.createElement("span",{className:"gx-link"},"Delete"),r.a.createElement(s.a,{type:"vertical"}),r.a.createElement("span",{className:"gx-link ant-dropdown-link"},"More actions ",r.a.createElement(d.a,{type:"down"})))}}],p=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],k=function(){return r.a.createElement(c.a,{title:"Simple Table"},r.a.createElement(i.a,{className:"gx-table-responsive",columns:m,dataSource:p}))},u=[{title:"Name",dataIndex:"name",render:function(e){return r.a.createElement("span",{className:"gx-link"},e)}},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],y=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Disabled User",age:99,address:"Sidney No. 1 Lake Park"}],g={onChange:function(e,a){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",a)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}},N=function(){return r.a.createElement(c.a,{title:"Selection Table"},r.a.createElement(i.a,{className:"gx-table-responsive",rowSelection:g,columns:u,dataSource:y}))},f=[{title:"Name",dataIndex:"name"},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],E=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],x=function(){return r.a.createElement(c.a,{title:"Size Table"},r.a.createElement("h4",null,"Middle size table"),r.a.createElement(i.a,{className:"gx-table-responsive",columns:f,dataSource:E,size:"middle"}),r.a.createElement("h4",null,"Small size table"),r.a.createElement(i.a,{className:"gx-table-responsive",columns:f,dataSource:E,size:"small"}))},h=[{title:"Name",dataIndex:"name",render:function(e){return r.a.createElement("span",{className:"gx-link"},e)}},{title:"Cash Assets",className:"column-money",dataIndex:"money"},{title:"Address",dataIndex:"address"}],b=[{key:"1",name:"John Brown",money:"\uffe5300,000.00",address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",money:"\uffe51,256,000.00",address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",money:"\uffe5120,000.00",address:"Sidney No. 1 Lake Park"}],w=function(){return r.a.createElement(c.a,{title:"Title Table"},r.a.createElement(i.a,{className:"gx-table-responsive",columns:h,dataSource:b,bordered:!0,title:function(){return"Header"},footer:function(){return"Footer"}}))},S=function(e,a,n){var t={children:e,props:{}};return 4===n&&(t.props.colSpan=0),t},P=[{title:"Name",dataIndex:"name",render:function(e,a,n){return n<4?r.a.createElement("span",{className:"gx-link"},e):{children:r.a.createElement("span",{className:"gx-link"},e),props:{colSpan:5}}}},{title:"Age",dataIndex:"age",render:S},{title:"Home phone",colSpan:2,dataIndex:"tel",render:function(e,a,n){var t={children:e,props:{}};return 2===n&&(t.props.rowSpan=2),3===n&&(t.props.rowSpan=0),4===n&&(t.props.colSpan=0),t}},{title:"Phone",colSpan:0,dataIndex:"phone",render:S},{title:"Address",dataIndex:"address",render:S}],v=[{key:"1",name:"John Brown",age:32,tel:"0571-22098909",phone:18889898989,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",tel:"0571-22098333",phone:18889898888,age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,tel:"0575-22098909",phone:18900010002,address:"Sidney No. 1 Lake Park"},{key:"4",name:"Jim Red",age:18,tel:"0575-22098909",phone:18900010002,address:"London No. 2 Lake Park"},{key:"5",name:"Jake White",age:18,tel:"0575-22098909",phone:18900010002,address:"Dublin No. 2 Lake Park"}],L=function(){return r.a.createElement(c.a,{title:"ColSpan and RowSpan Table"},r.a.createElement(i.a,{className:"gx-table-responsive",columns:P,dataSource:v,bordered:!0}))};a.default=function(){return r.a.createElement(l.a,null,r.a.createElement(o.a,{span:24},r.a.createElement(k,null)),r.a.createElement(o.a,{span:24},r.a.createElement(N,null)),r.a.createElement(o.a,{span:24},r.a.createElement(x,null)),r.a.createElement(o.a,{span:24},r.a.createElement(w,null)),r.a.createElement(o.a,{span:24},r.a.createElement(L,null)))}}}]);
//# sourceMappingURL=104.5fa85c6e.chunk.js.map