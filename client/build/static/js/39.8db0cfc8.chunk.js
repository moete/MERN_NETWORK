(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1886:function(t,e,n){"use strict";var r=n(0),o=n(12),i=n(3),a=n.n(i),f=n(21),u=n(246),c=n.n(u),l=n(97),s=n(52),p=n.n(s);function d(t){return function(t){if(Array.isArray(t))return h(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function y(t){var e,n=function(){if(null==e){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e=p()(function(n){return function(){e=null,t.apply(void 0,d(n))}}(r))}};return n.cancel=function(){return p.a.cancel(e)},n}function m(){return function(t,e,n){var r=n.value,o=!1;return{configurable:!0,get:function(){if(o||this===t.prototype||this.hasOwnProperty(e))return r;var n=y(r.bind(this));return o=!0,Object.defineProperty(this,e,{value:n,configurable:!0,writable:!0}),o=!1,n}}}}var v=n(36),b=n(107);function g(t){return t!==window?t.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function x(t,e,n){if(void 0!==n&&e.top>t.top-n)return n+e.top}function w(t,e,n){if(void 0!==n&&e.bottom<t.bottom+n)return n+(window.innerHeight-e.bottom)}var O=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],E=[];function P(t,e){if(t){var n=E.find(function(e){return e.target===t});n?n.affixList.push(e):(n={target:t,affixList:[e],eventHandlers:{}},E.push(n),O.forEach(function(e){n.eventHandlers[e]=Object(b.a)(t,e,function(){n.affixList.forEach(function(t){t.lazyUpdatePosition()})})}))}}function j(t){var e=E.find(function(e){var n=e.affixList.some(function(e){return e===t});return n&&(e.affixList=e.affixList.filter(function(e){return e!==t})),n});e&&0===e.affixList.length&&(E=E.filter(function(t){return t!==e}),O.forEach(function(t){var n=e.eventHandlers[t];n&&n.remove&&n.remove()}))}function S(){return(S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function N(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function A(t,e){return(A=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function T(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,r=R(t);if(e){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"===typeof e))return e;return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,n)}}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var B,C=function(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===("undefined"===typeof Reflect?"undefined":k(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var f=t.length-1;f>=0;f--)(o=t[f])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a};!function(t){t[t.None=0]="None",t[t.Prepare=1]="Prepare"}(B||(B={}));var _=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&A(t,e)}(u,r["Component"]);var e,n,o,i=T(u);function u(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.apply(this,arguments)).state={status:B.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var e=t.props,n=e.offset,r=e.offsetBottom,o=t.props.offsetTop;return"undefined"===typeof o&&(o=n,Object(v.a)("undefined"===typeof n,"Affix","`offset` is deprecated. Please use `offsetTop` instead.")),void 0===r&&void 0===o&&(o=0),o},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(e){t.placeholderNode=e},t.saveFixedNode=function(e){t.fixedNode=e},t.measure=function(){var e=t.state,n=e.status,r=e.lastAffix,o=t.props,i=o.target,a=o.onChange;if(n===B.Prepare&&t.fixedNode&&t.placeholderNode&&i){var f=t.getOffsetTop(),u=t.getOffsetBottom(),c=i();if(c){var l={status:B.None},s=g(c),p=g(t.placeholderNode),d=x(p,s,f),h=w(p,s,u);void 0!==d?(l.affixStyle={position:"fixed",top:d,width:p.width,height:p.height},l.placeholderStyle={width:p.width,height:p.height}):void 0!==h&&(l.affixStyle={position:"fixed",bottom:h,width:p.width,height:p.height},l.placeholderStyle={width:p.width,height:p.height}),l.lastAffix=!!l.affixStyle,a&&r!==l.lastAffix&&a(l.lastAffix),t.setState(l)}}},t.prepareMeasure=function(){t.setState({status:B.Prepare,affixStyle:void 0,placeholderStyle:void 0})},t.renderAffix=function(e){var n,o,i,u=e.getPrefixCls,l=t.state,s=l.affixStyle,p=l.placeholderStyle,d=t.props,h=d.prefixCls,y=d.children,m=a()((n={},o=u("affix",h),i=s,o in n?Object.defineProperty(n,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[o]=i,n)),v=Object(f.default)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return r.createElement(c.a,{onResize:function(){t.updatePosition()}},r.createElement("div",S({},v,{ref:t.savePlaceholderNode}),s&&r.createElement("div",{style:p,"aria-hidden":"true"}),r.createElement("div",{className:m,ref:t.saveFixedNode,style:s},r.createElement(c.a,{onResize:function(){t.updatePosition()}},y))))},t}return e=u,(n=[{key:"componentDidMount",value:function(){var t=this,e=this.props.target;e&&(this.timeout=setTimeout(function(){P(e(),t),t.updatePosition()}))}},{key:"componentDidUpdate",value:function(t){var e=this.state.prevTarget,n=this.props.target,r=null;n&&(r=n()||null),e!==r&&(j(this),r&&(P(r,this),this.updatePosition()),this.setState({prevTarget:r})),t.offsetTop===this.props.offsetTop&&t.offsetBottom===this.props.offsetBottom||this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),j(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var t=this.props.target,e=this.state.affixStyle;if(t&&e){var n=this.getOffsetTop(),r=this.getOffsetBottom(),o=t();if(o&&this.placeholderNode){var i=g(o),a=g(this.placeholderNode),f=x(a,i,n),u=w(a,i,r);if(void 0!==f&&e.top===f||void 0!==u&&e.bottom===u)return}}this.prepareMeasure()}},{key:"render",value:function(){return r.createElement(l.a,null,this.renderAffix)}}])&&N(e.prototype,n),o&&N(e,o),u}();_.defaultProps={target:function(){return"undefined"!==typeof window?window:null}},C([m()],_.prototype,"updatePosition",null),C([m()],_.prototype,"lazyUpdatePosition",null),Object(o.polyfill)(_);e.a=_},1904:function(t,e,n){},2292:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(238),a=n(127),f=n(1655),u=n(1886),c=n(106),l=function(){return o.a.createElement(f.a,{className:"gx-card",title:"Basic"},o.a.createElement(u.a,null,o.a.createElement(c.a,{type:"primary"},"Affix top")),o.a.createElement("br",null),o.a.createElement(u.a,{offsetBottom:0},o.a.createElement(c.a,{type:"primary"},"Affix bottom")))},s=function(){return o.a.createElement(f.a,{className:"gx-card",title:"Affix top"},o.a.createElement(u.a,{offsetTop:120,onChange:function(t){return console.log(t)}},o.a.createElement(c.a,null,"120px to affix top")))},p=n(40),d=n(41),h=n(44),y=n(42),m=n(43),v=(n(1904),function(t){function e(){return Object(p.a)(this,e),Object(h.a)(this,Object(y.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement(f.a,{className:"gx-card",title:"Fixed at the top of container"},o.a.createElement("div",{className:"scrollable-container",ref:function(e){t.container=e}},o.a.createElement("div",{className:"background"},o.a.createElement(u.a,{target:function(){return t.container}},o.a.createElement(c.a,{type:"primary"},"Fixed at the top of container")))))}}]),e}(o.a.Component));e.default=function(){return o.a.createElement(i.a,null,o.a.createElement(a.a,{lg:12,md:12,sm:24,xs:24},o.a.createElement(l,null),o.a.createElement(s,null)),o.a.createElement(a.a,{lg:12,md:12,sm:24,xs:24},o.a.createElement(v,null)))}}}]);
//# sourceMappingURL=39.8db0cfc8.chunk.js.map