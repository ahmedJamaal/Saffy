(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{417:function(t,e,r){"use strict";r(13),r(16),r(24),r(25);var n=r(2),o=(r(6),r(38),r(14),r(23),r(53),r(403),r(47),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(48),r(62),r(15),r(54),r(252),r(0)),c=r(115),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],O=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),j=v.reduce((function(t,e){return t["order"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(O),offset:Object.keys(h),order:Object.keys(j)};function m(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},O),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],y)y[e].forEach((function(t){var n=r[t],o=m(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},421:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("5b9db102",content,!0,{sourceMap:!1})},430:function(t,e,r){"use strict";r(421)},431:function(t,e,r){var n=r(19)(!1);n.push([t.i,".awards img[data-v-2c265715]{width:100%;height:100%}",""]),t.exports=n},443:function(t,e,r){"use strict";r.r(e);var n={name:"Awards",data:function(){return{}}},o=(r(430),r(37)),c=r(51),l=r.n(c),f=r(417),d=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"awards px-16 py-xs-10 py-sm-12 py-md-14 py-lg-15 py-xl-16"},[r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h3",[t._v("Awards & Recognition")])])],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"img/other/MIT.png"}})]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"img/other/la french tech.jpg"}})]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"img/other/energy globe.jpg"}})]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"img/other/Startup power.png"}})])],1)],1)}),[],!1,null,"2c265715",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})}}]);
