(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{2016:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DrawingManager=void 0;var a=m(n(19)),o=m(n(825)),l=m(n(10)),i=m(n(27)),r=m(n(9)),u=m(n(11)),c=m(n(78)),p=m(n(0)),d=m(n(1)),s=n(1701),f=n(1696);function m(e){return e&&e.__esModule?e:{default:e}}var g=t.DrawingManager=function(e){function t(e,n){(0,l.default)(this,t);var i=(0,r.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e,n));(0,c.default)(google.maps.drawing,'Did you include "libraries=drawing" in the URL?');var u=new google.maps.drawing.DrawingManager;return(0,s.construct)(t.propTypes,w,i.props,u),u.setMap(i.context[f.MAP]),i.state=(0,a.default)({},f.DRAWING_MANAGER,u),i}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){(0,s.componentDidMount)(this,this.state[f.DRAWING_MANAGER],y)}},{key:"componentDidUpdate",value:function(e){(0,s.componentDidUpdate)(this,this.state[f.DRAWING_MANAGER],y,w,e)}},{key:"componentWillUnmount",value:function(){(0,s.componentWillUnmount)(this);var e=this.state[f.DRAWING_MANAGER];e&&e.setMap(null)}},{key:"render",value:function(){return!1}},{key:"getDrawingMode",value:function(){return this.state[f.DRAWING_MANAGER].getDrawingMode()}}]),t}(p.default.PureComponent);g.propTypes={defaultDrawingMode:d.default.any,defaultOptions:d.default.any,drawingMode:d.default.any,options:d.default.any,onCircleComplete:d.default.func,onMarkerComplete:d.default.func,onOverlayComplete:d.default.func,onPolygonComplete:d.default.func,onPolylineComplete:d.default.func,onRectangleComplete:d.default.func},g.contextTypes=(0,a.default)({},f.MAP,d.default.object),t.default=g;var y={onCircleComplete:"circlecomplete",onMarkerComplete:"markercomplete",onOverlayComplete:"overlaycomplete",onPolygonComplete:"polygoncomplete",onPolylineComplete:"polylinecomplete",onRectangleComplete:"rectanglecomplete"},w={drawingMode:function(e,t){e.setDrawingMode(t)},options:function(e,t){e.setOptions(t)}}},2333:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(1655),i=n(40),r=n(41),u=n(44),c=n(42),p=n(43),d=n(1706),s=n(2016),f=n.n(s),m=window.google,g=Object(d.withGoogleMap)(function(e){return o.a.createElement(d.GoogleMap,{defaultZoom:15,defaultCenter:new m.maps.LatLng(47.646935,-122.303763)},o.a.createElement(f.a,{defaultDrawingMode:m.maps.drawing.OverlayType.CIRCLE,defaultOptions:{drawingControl:!0,drawingControlOptions:{position:m.maps.ControlPosition.TOP_CENTER,drawingModes:[m.maps.drawing.OverlayType.CIRCLE,m.maps.drawing.OverlayType.POLYGON,m.maps.drawing.OverlayType.POLYLINE,m.maps.drawing.OverlayType.RECTANGLE]},circleOptions:{fillColor:"#ff0000",fillOpacity:.2,strokeWeight:3,clickable:!1,editable:!0,zIndex:1},rectangleOptions:{fillColor:"#ff0000",fillOpacity:.2,strokeWeight:3,clickable:!1,editable:!0,zIndex:1}}}))}),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(g,{loadingElement:o.a.createElement("div",{style:{height:"100%"}}),containerElement:o.a.createElement("div",{style:{height:"550px"}}),mapElement:o.a.createElement("div",{style:{height:"100%"}})})}}]),t}(a.Component),w=n(5);t.default=function(){return o.a.createElement(l.a,{className:"gx-card",title:o.a.createElement(w.a,{id:"sidebar.map.mapDrawing"})},o.a.createElement(y,null))}}}]);
//# sourceMappingURL=112.b907ee98.chunk.js.map