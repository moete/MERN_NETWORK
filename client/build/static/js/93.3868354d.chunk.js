(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{2112:function(e,a){},2257:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),l=t(1678),i=t(2266),s=t(2347),m=t(2301),o=t(2202),u=t(2309),g=t(2203),d=t(40),E=t(41),h=t(44),p=t(42),f=t(43),v=t(2077),b=t.n(v),x=700,N=function(e){return e?"".concat(window.location.pathname,"?").concat(b.a.stringify(e)):""},y=(t(2080),t(2300)),S=t(2199),w=Object(S.a)(function(e){var a=e.currentRefinement,t=e.refine;return c.a.createElement("div",{className:"gx-search-bar gx-lt-icon-search-bar"},c.a.createElement("div",{className:"gx-form-group"},c.a.createElement("input",{type:"search",placeholder:"Search here...",value:a,onChange:function(e){return t(e.target.value)},autoComplete:"off",className:"ant-input form-control",id:"q"}),c.a.createElement("span",{className:"gx-search-icon gx-pointer"},c.a.createElement("i",{className:"icon icon-search"}))))}),k=function(){return c.a.createElement("div",{className:"gx-algolia-header"},c.a.createElement(w,null),c.a.createElement("div",{className:"gx-algolia-sort-by"},c.a.createElement("label",null,"Sort by"),c.a.createElement(y.a,{items:[{value:"ikea",label:"Featured"},{value:"ikea_price_asc",label:"Price asc."},{value:"ikea_price_desc",label:"Price desc."}],defaultRefinement:"ikea"})))},R=t(2306),j=t(2307),C=t(2344),_=t(2308),L=t(2345),O=t(2346),M=l.a.Sider,P=function(){return c.a.createElement(M,{className:"gx-algolia-sidebar"},c.a.createElement("div",{className:"gx-algolia-sidebar-content"},c.a.createElement(R.a,{translations:{reset:"Clear all filters"}}),c.a.createElement("div",{className:"gx-algolia-category-item"},c.a.createElement("div",{className:"gx-algolia-category-title"},"Show results for"),c.a.createElement(j.a,{attributes:["category","sub_category","sub_sub_category"]})),c.a.createElement("div",{className:"gx-algolia-category-item"},c.a.createElement("div",{className:"gx-algolia-category-title"},"Refine By"),c.a.createElement(C.a,{header:c.a.createElement("span",null,"Type")},c.a.createElement(_.a,{className:"gx-algolia-refinementList",attribute:"type",operator:"or",limit:5,searchable:!0})),c.a.createElement(C.a,{header:c.a.createElement("span",null,"Materials")},c.a.createElement(_.a,{className:"gx-algolia-refinementList",attribute:"materials",operator:"or",limit:5,searchable:!0})),c.a.createElement(C.a,{header:c.a.createElement("span",null,"Rating")},c.a.createElement(L.a,{className:"gx-algolia-refinementList",attribute:"rating",max:5})),c.a.createElement(C.a,{header:c.a.createElement("span",null,"Price")},c.a.createElement(O.a,{className:"gx-algolia-refinementList",attribute:"price"}))),c.a.createElement("div",{className:"thank-you"},"Data courtesy of ",c.a.createElement("a",{href:"http://www.ikea.com/"},"ikea.com"))))},q=function(e){var a=e.children;return c.a.createElement("div",{className:"gx-algolia-footer"},a)},I=t(238),T=t(127),U=t(2161),D=function(e){var a=e.item;console.log(a);for(var t=[],n=0;n<5;n++){var r=n>=a.rating?"--empty":"",l=n>=a.rating?"Empty":"";t.push(c.a.createElement("svg",{key:n,className:"ais-RatingMenu-starIcon ais-RatingMenu-starIcon".concat(r),"aria-hidden":"true",width:"24",height:"24"},c.a.createElement("use",{xlinkHref:"#ais-RatingMenu-star".concat(l,"Symbol")})))}return c.a.createElement("div",{className:"gx-product-item gx-product-vertical"},c.a.createElement("div",{className:"gx-product-image"},c.a.createElement("img",{src:"https://res.cloudinary.com/hilnmyskv/image/fetch/h_300,q_100,f_auto/".concat(a.image),alt:""})),c.a.createElement("div",{className:"gx-product-body"},c.a.createElement("div",{className:"gx-product-name"},c.a.createElement(U.a,{attribute:"name",hit:a})),c.a.createElement("div",{className:"gx-mb-3"},c.a.createElement(U.a,{attribute:"type",hit:a})),c.a.createElement("div",{className:"ais-RatingMenu-link"},t),c.a.createElement("div",{className:"gx-product-price"},"$",a.price)))},H=function(e){var a=e.hits;return c.a.createElement("div",{id:"product"},c.a.createElement(I.a,null,a.map(function(e){return c.a.createElement(T.a,{xl:8,lg:12,md:12,sm:12,xs:24},c.a.createElement(D,{item:e,key:e.objectID}))})))},J=l.a.Content,B=Object(o.a)(function(e){var a=e.searchState,t=e.searchResult;return t&&0===t.nbHits?c.a.createElement("div",{className:"gx-algolia-content-inner"},c.a.createElement("div",{className:"gx-algolia-no-results"},"No results found matching"," ",c.a.createElement("span",{className:"gx-algolia-query"},a.query))):c.a.createElement("div",{className:"gx-algolia-content-inner"},c.a.createElement(u.a,null),c.a.createElement(F,null))}),F=Object(g.a)(H);a.default=(n=function(e){return c.a.createElement(i.a,{className:"gx-main-content",appId:"latency",apiKey:"6be0576ff61c053d5f9a3225e2a90f76",indexName:"ikea",searchState:e.searchState,createURL:e.createURL,onSearchStateChange:e.onSearchStateChange},c.a.createElement(s.a,{hitsPerPage:16}),c.a.createElement(l.a,{className:"gx-algolia-layout-has-sider"},c.a.createElement(P,null),c.a.createElement("div",{className:"gx-algolia-main"},c.a.createElement(k,null),c.a.createElement(J,{className:"gx-algolia-content"},c.a.createElement(B,null)),c.a.createElement(q,null,c.a.createElement(m.a,{showLast:!0})))))},function(e){function a(){var e;return Object(d.a)(this,a),(e=Object(h.a)(this,Object(p.a)(a).call(this))).onSearchStateChange=function(a){clearTimeout(e.debouncedSetState),e.debouncedSetState=setTimeout(function(){window.history.pushState(a,null,N(a))},x),e.setState({searchState:a})},e.state={searchState:b.a.parse(window.location.search.slice(1))},window.addEventListener("popstate",function(a){var t=a.state;return e.setState({searchState:t})}),e}return Object(f.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){return c.a.createElement(n,Object.assign({},this.props,{searchState:this.state.searchState,onSearchStateChange:this.onSearchStateChange,createURL:N}))}}]),a}(r.Component))}}]);
//# sourceMappingURL=93.3868354d.chunk.js.map