(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1712:function(e,t,a){"use strict";function n(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"a",function(){return n})},2282:function(e,t,a){"use strict";a.r(t);var n=a(40),r=a(41),l=a(44),c=a(42),o=a(43),i=a(0),s=a.n(i),u=a(238),m=a(127),f=a(1655),g=a(822),h=function(){return s.a.createElement(f.a,{title:"Basic",className:"gx-card"},s.a.createElement(g.a,null,"Tag 1"),s.a.createElement(g.a,null,s.a.createElement("a",{href:"https://github.com/ant-design/ant-design/issues/1862"},"Link")),s.a.createElement(g.a,{closable:!0,onClose:function(e){console.log(e)}},"Tag 2"),s.a.createElement(g.a,{closable:!0,onClose:function(e){e.preventDefault(),console.log("Clicked! But prevent CRM.")}},"Prevent Default"))},p=function(){return s.a.createElement(f.a,{title:"Color Tag",className:"gx-card"},s.a.createElement("h4",{style:{marginBottom:16}},"Presets:"),s.a.createElement("div",null,s.a.createElement(g.a,{color:"magenta"},"magenta"),s.a.createElement(g.a,{color:"red"},"red"),s.a.createElement(g.a,{color:"volcano"},"volcano"),s.a.createElement(g.a,{color:"orange"},"orange"),s.a.createElement(g.a,{color:"gold"},"gold"),s.a.createElement(g.a,{color:"lime"},"lime"),s.a.createElement(g.a,{color:"green"},"green"),s.a.createElement(g.a,{color:"cyan"},"cyan"),s.a.createElement(g.a,{color:"blue"},"blue"),s.a.createElement(g.a,{color:"geekblue"},"geekblue"),s.a.createElement(g.a,{color:"purple"},"purple")),s.a.createElement("h4",{style:{margin:"16px 0"}},"Custom:"),s.a.createElement("div",null,s.a.createElement(g.a,{color:"#f50"},"#f50"),s.a.createElement(g.a,{color:"#2db7f5"},"#2db7f5"),s.a.createElement(g.a,{color:"#87d068"},"#87d068"),s.a.createElement(g.a,{color:"#108ee9"},"#108ee9")))},d=a(1712),E=a(195),b=a(496),y=a(29),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={tags:["Unremovable","Tag 2","Tag 3"],inputVisible:!1,inputValue:""},a.handleClose=function(e){var t=a.state.tags.filter(function(t){return t!==e});console.log(t),a.setState({tags:t})},a.showInput=function(){a.setState({inputVisible:!0},function(){return a.input.focus()})},a.handleInputChange=function(e){a.setState({inputValue:e.target.value})},a.handleInputConfirm=function(){var e=a.state,t=e.inputValue,n=e.tags;t&&-1===n.indexOf(t)&&(n=[].concat(Object(d.a)(n),[t])),console.log(n),a.setState({tags:n,inputVisible:!1,inputValue:""})},a.saveInputRef=function(e){return a.input=e},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.tags,n=t.inputVisible,r=t.inputValue;return s.a.createElement(f.a,{title:"Dynamic",className:"gx-card"},a.map(function(t,a){var n=t.length>20,r=s.a.createElement(g.a,{key:t,closable:0!==a,afterClose:function(){return e.handleClose(t)}},n?"".concat(t.slice(0,20),"..."):t);return n?s.a.createElement(E.a,{title:t,key:t},r):r}),n&&s.a.createElement(b.a,{ref:this.saveInputRef,type:"text",size:"small",style:{width:78},value:r,onChange:this.handleInputChange,onBlur:this.handleInputConfirm,onPressEnter:this.handleInputConfirm}),!n&&s.a.createElement(g.a,{onClick:this.showInput,style:{background:"#fff",borderStyle:"dashed"}},s.a.createElement(y.a,{type:"plus"})," New Tag"))}}]),t}(s.a.Component),C=g.a.CheckableTag,O=["Movies","Books","Music","Sports"],j=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(o)))).state={selectedTags:[]},a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"handleChange",value:function(e,t){var a=this.state.selectedTags,n=t?[].concat(Object(d.a)(a),[e]):a.filter(function(t){return t!==e});console.log("You are interested in: ",n),this.setState({selectedTags:n})}},{key:"render",value:function(){var e=this,t=this.state.selectedTags;return s.a.createElement(f.a,{title:"Hot Tag",className:"gx-card"},s.a.createElement("h6",{style:{marginRight:8,display:"inline"}},"Categories:"),O.map(function(a){return s.a.createElement(C,{key:a,checked:t.indexOf(a)>-1,onChange:function(t){return e.handleChange(a,t)}},a)}))}}]),t}(s.a.Component),k=function(e){function t(){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(u.a,null,s.a.createElement(m.a,{lg:12,md:12,sm:24,xs:24},s.a.createElement(h,null),s.a.createElement(p,null)),s.a.createElement(m.a,{lg:12,md:12,sm:24,xs:24},s.a.createElement(v,null),s.a.createElement(j,null)))}}]),t}(i.Component);t.default=k}}]);
//# sourceMappingURL=94.69e270cf.chunk.js.map