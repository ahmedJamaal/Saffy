(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{417:function(t,e,r){"use strict";r(13),r(16),r(24),r(25);var n=r(2),o=(r(6),r(38),r(14),r(23),r(53),r(403),r(47),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(48),r(62),r(15),r(54),r(252),r(0)),c=r(115),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(O)};function m(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],j)j[e].forEach((function(t){var n=r[t],o=m(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},419:function(t,e,r){var content=r(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("adf7f1e6",content,!0,{sourceMap:!1})},426:function(t,e,r){"use strict";r(419)},427:function(t,e,r){var n=r(19)(!1);n.push([t.i,".cover{background:#fff url(/img/bg-main.svg) no-repeat bottom;width:100vw;height:100vh;min-height:100vh;display:table;position:relative;text-align:center}.cover-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;opacity:.1}.cover .text-content{height:45vh;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}.cover h1{letter-spacing:.2rem}.cover h3{text-transform:capitalize;letter-spacing:.15rem}",""]),t.exports=n},441:function(t,e,r){"use strict";r.r(e);var n={name:"CoverSection",data:function(){return{}}},o=(r(426),r(37)),c=r(51),l=r.n(c),f=r(417),d=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"cover"},[r("div",{staticClass:"cover-overlay"}),t._v(" "),r("div",{staticClass:"text-content"},[r("h1",[t._v("SaffyWater")]),t._v(" "),r("h3",{staticClass:"pt-3"},[t._v("The world first biological solution for water purification.")])])])])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})}}]);