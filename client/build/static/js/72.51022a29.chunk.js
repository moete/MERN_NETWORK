(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1692:function(t,e,a){"undefined"!==typeof window?(window.React=a(0),window.ReactDOM=a(14),window.createReactClass=a(352),a(1695),t.exports=window.AmCharts):t.exports={}},1695:function(t,e){!function(){function t(t){return{}.toString.call(t)}function e(t,e){return{}.hasOwnProperty.call(t,e)}function a(r){switch(t(r)){case"[object Array]":return function(t){for(var e=t.length,r=new Array(e),n=0;n<e;++n)r[n]=a(t[n]);return r}(r);case"[object Object]":return function(t){var r={};for(var n in t)e(t,n)&&(r[n]=a(t[n]));return r}(r);case"[object Date]":return new Date(r.getTime());default:return r}}function r(t){return t!==t}function n(t,e,a){if(e!==a){null==e&&(e=[]),null==a&&(a=[]);for(var r=e.length,n=a.length,i=0;i<r;++i){for(var o=e[i],c=!1,s=0;s<n;++s){var l=a[s];if(o.event===l.event&&o.method===l.method){c=!0;break}}c||t.removeListener(t,o.event,o.method)}}}function i(n,c,s,l){var h=!1;if(s!==l&&e(n,c)){var p=t(s);if(p===t(l))switch(p){case"[object Array]":"groupToPeriods"===c?(n[c]=a(l),h=!0):function(t,e,r){var n=!1;if(e!==r){var o=e.length,c=r.length;o!==c&&(t.length=c,n=!0);for(var s=0;s<c;++s)s<o?i(t,s,e[s],r[s])&&(n=!0):(t[s]=a(r[s]),n=!0)}return n}(n[c],s,l)&&(h=!0);break;case"[object Object]":o(n[c],s,l)&&(h=!0);break;case"[object Date]":s.getTime()!==l.getTime()&&(n[c]=a(l),h=!0);break;case"[object Number]":(function(t,e){return t===e||r(t)&&r(e)})(s,l)||(n[c]=a(l),h=!0);break;default:n[c]=a(l),h=!0}else n[c]=a(l),h=!0}return h}function o(t,r,o){var c=!1;if(r!==o){for(var s in o)e(o,s)&&(e(r,s)?("listeners"===s&&n(t,r[s],o[s]),i(t,s,r[s],o[s])&&(c=!0)):(t[s]=a(o[s]),c=!0));for(var s in r)e(r,s)&&!e(o,s)&&("listeners"===s&&n(t,r[s],[]),delete t[s],c=!0)}return c}var c=0;AmCharts.React=createReactClass({getInitialState:function(){return{id:"__AmCharts_React_"+ ++c+"__",chart:null}},componentDidMount:function(){var t=a(this.props.options),e=AmCharts.makeChart(this.state.id,t,this.props.delay);this.setState({chart:e})},componentDidUpdate:function(t){this.state.chart&&(o(this.state.chart,t.options,this.props.options)&&this.state.chart.validateNow(!0))},componentWillUnmount:function(){this.state.chart&&this.state.chart.clear()},render:function(){return React.createElement("div",{id:this.state.id,className:this.props.className,style:this.props.style})}})}()},2322:function(t,e,a){"use strict";a.r(e);var r=a(0),n=a.n(r),i=a(1655),o=a(1692),c=a.n(o),s=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(c.a.React,{style:{width:"100%",height:"500px"},options:{type:"map",theme:"light",dragMap:!1,projection:"eckert3",areasSettings:{autoZoom:!1,rollOverOutlineColor:"#000000",selectedColor:"#000000",outlineAlpha:1,outlineColor:"#FFFFFF",outlineThickness:1,color:"#000000"},dataProvider:{map:"continentsLow",areas:[{id:"africa",title:"Africa",pattern:{url:"https://www.amcharts.com/lib/3/patterns/black/pattern1.png",width:4,height:4}},{id:"asia",title:"Asia",pattern:{url:"https://www.amcharts.com/lib/3/patterns/black/pattern2.png",width:4,height:4}},{id:"australia",title:"Australia",pattern:{url:"https://www.amcharts.com/lib/3/patterns/black/pattern3.png",width:4,height:4,color:"#BBBB00"}},{id:"europe",title:"Europe",pattern:{url:"https://www.amcharts.com/lib/3/patterns/black/pattern4.png",width:4,height:4}},{id:"north_america",title:"North America",pattern:{url:"https://www.amcharts.com/lib/3/patterns/black/pattern5.png",width:4,height:4}},{id:"south_america",title:"South America",pattern:{url:"https://www.amcharts.com/lib/3/patterns/black/pattern6.png",width:4,height:4}}]},zoomControl:{panControlEnabled:!1,zoomControlEnabled:!1,homeButtonEnabled:!1},export:{enabled:!0}}}))},l=a(5);e.default=function(){return n.a.createElement(i.a,{className:"gx-card",title:n.a.createElement(l.a,{id:"sidebar.map.patterns"})},n.a.createElement(s,null))}}}]);
//# sourceMappingURL=72.51022a29.chunk.js.map