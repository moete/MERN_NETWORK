(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{2245:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(238),c=t(127),m=t(1655),i=t(106),o=function(){return r.a.createElement(m.a,{className:"gx-card",title:"Basic"},r.a.createElement(i.a,{type:"primary"},"Primary"),r.a.createElement(i.a,null,"Default"),r.a.createElement(i.a,{type:"dashed"},"Dashed"),r.a.createElement(i.a,{type:"danger"},"Danger"))},s=function(){return r.a.createElement(m.a,{className:"gx-card",title:"Icon"},r.a.createElement(i.a,{type:"primary",shape:"circle",icon:"search"}),r.a.createElement(i.a,{type:"primary",icon:"search"},"Search"),r.a.createElement(i.a,{shape:"circle",icon:"search"}),r.a.createElement(i.a,{icon:"search"},"Search"),r.a.createElement("br",null),r.a.createElement(i.a,{shape:"circle",icon:"search"}),r.a.createElement(i.a,{icon:"search"},"Search"),r.a.createElement(i.a,{type:"dashed",shape:"circle",icon:"search"}),r.a.createElement(i.a,{type:"dashed",icon:"search"},"Search"))},E=t(40),d=t(41),u=t(44),p=t(42),y=t(43),h=t(1658),g=t(29),b=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={size:"large"},t.handleSizeChange=function(e){t.setState({size:e.target.value})},t}return Object(y.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.state.size;return r.a.createElement(m.a,{className:"gx-card",title:"Size"},r.a.createElement(h.a.Group,{value:e,onChange:this.handleSizeChange},r.a.createElement(h.a.Button,{value:"large"},"Large"),r.a.createElement(h.a.Button,{value:"default"},"Default"),r.a.createElement(h.a.Button,{value:"small"},"Small")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(i.a,{type:"primary",size:e},"Primary"),r.a.createElement(i.a,{size:e},"Normal"),r.a.createElement(i.a,{type:"dashed",size:e},"Dashed"),r.a.createElement(i.a,{type:"danger",size:e},"Danger"),r.a.createElement("br",null),r.a.createElement(i.a,{type:"primary",shape:"circle",icon:"download",size:e}),r.a.createElement(i.a,{type:"primary",icon:"download",size:e},"Download"),r.a.createElement("br",null),r.a.createElement(i.a.Group,{size:e},r.a.createElement(i.a,{type:"primary"},r.a.createElement(g.a,{type:"left"}),"Backward"),r.a.createElement(i.a,{type:"primary"},"Forward",r.a.createElement(g.a,{type:"right"}))))}}]),a}(n.Component),f=function(){return r.a.createElement(m.a,{className:"gx-card",title:"Disabled"},r.a.createElement(i.a,{type:"primary"},"Primary"),r.a.createElement(i.a,{type:"primary",disabled:!0},"Primary(disabled)"),r.a.createElement("br",null),r.a.createElement(i.a,null,"Default"),r.a.createElement(i.a,{disabled:!0},"Default(disabled)"),r.a.createElement("br",null),r.a.createElement(i.a,{type:"dashed"},"Dashed"),r.a.createElement(i.a,{type:"dashed",disabled:!0},"Dashed(disabled)"),r.a.createElement("div",{className:"gx-bg-grey gx-px-3 gx-pt-3"},r.a.createElement(i.a,null,"Ghost"),r.a.createElement(i.a,{disabled:!0},"Ghost(disabled)")))},v=function(e){function a(){var e,t;Object(E.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(u.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={loading:!1,iconLoading:!1},t.enterLoading=function(){t.setState({loading:!0})},t.enterIconLoading=function(){t.setState({iconLoading:!0})},t}return Object(y.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{className:"gx-card",title:"Loading"},r.a.createElement(i.a,{type:"primary",loading:!0},"Loading"),r.a.createElement(i.a,{type:"primary",size:"small",loading:!0},"Loading"),r.a.createElement("br",null),r.a.createElement(i.a,{type:"primary",loading:this.state.loading,onClick:this.enterLoading},"Click me!"),r.a.createElement(i.a,{type:"primary",icon:"poweroff",loading:this.state.iconLoading,onClick:this.enterIconLoading},"Click me!"),r.a.createElement("br",null),r.a.createElement(i.a,{shape:"circle",loading:!0}),r.a.createElement(i.a,{type:"primary",shape:"circle",loading:!0}))}}]),a}(n.Component),w=i.a.Group,k=function(){return r.a.createElement(m.a,{className:"gx-card",title:"Button Groups"},r.a.createElement("h4",null,"Basic"),r.a.createElement(w,null,r.a.createElement(i.a,null,"Cancel"),r.a.createElement(i.a,null,"OK")),r.a.createElement(w,null,r.a.createElement(i.a,{disabled:!0},"L"),r.a.createElement(i.a,{disabled:!0},"M"),r.a.createElement(i.a,{disabled:!0},"R")),r.a.createElement(w,null,r.a.createElement(i.a,null,"L"),r.a.createElement(i.a,null,"M"),r.a.createElement(i.a,null,"R")),r.a.createElement("h4",null,"With Icon"),r.a.createElement(w,null,r.a.createElement(i.a,{type:"primary"},r.a.createElement(g.a,{type:"left"}),"Go back"),r.a.createElement(i.a,{type:"primary"},"Go forward",r.a.createElement(g.a,{type:"right"}))),r.a.createElement(w,null,r.a.createElement(i.a,{type:"primary",icon:"cloud"}),r.a.createElement(i.a,{type:"primary",icon:"cloud-download"})))},O=function(){return r.a.createElement(m.a,{title:"Ghost Button",className:"gx-card gx-bg-grey"},r.a.createElement(i.a,{type:"primary",ghost:!0},"Primary"),r.a.createElement(i.a,{ghost:!0},"Default"),r.a.createElement(i.a,{type:"dashed",ghost:!0},"Dashed"),r.a.createElement(i.a,{type:"danger",ghost:!0},"danger"))},j=t(473),x=t(1659);var z=r.a.createElement(j.a,{onClick:function(e){console.log("click",e)}},r.a.createElement(j.a.Item,{key:"1"},"1st item"),r.a.createElement(j.a.Item,{key:"2"},"2nd item"),r.a.createElement(j.a.Item,{key:"3"},"3rd item")),D=function(e){function a(){return Object(E.a)(this,a),Object(u.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{className:"gx-card",title:"Multiple"},r.a.createElement(i.a,{type:"primary"},"primary"),r.a.createElement(i.a,null,"secondary"),r.a.createElement(x.a,{overlay:z},r.a.createElement(i.a,null,"Actions ",r.a.createElement(g.a,{type:"down"}))))}}]),a}(n.Component);a.default=function(){return r.a.createElement(l.a,null,r.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(o,null),r.a.createElement(v,null),r.a.createElement(b,null),r.a.createElement(f,null)),r.a.createElement(c.a,{lg:12,md:12,sm:24,xs:24},r.a.createElement(s,null),r.a.createElement(D,null),r.a.createElement(k,null),r.a.createElement(O,null)))}}}]);
//# sourceMappingURL=144.602565bd.chunk.js.map