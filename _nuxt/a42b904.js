(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{419:function(t,e,r){"use strict";r(13),r(16),r(24),r(25);var n=r(2),c=(r(6),r(38),r(14),r(23),r(53),r(405),r(47),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(417),r(418),r(48),r(62),r(15),r(54),r(253),r(0)),o=r(115),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=v.reduce((function(t,e){return t["offset"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(y),offset:Object.keys(w),order:Object.keys(O)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var c=e.replace(t,"");n+="-".concat(c)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var h=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=h.get(l);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var n=r[t],c=j(e,t,n);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),h.set(l,d)}(),t(r.tag,Object(o.a)(data,{class:d}),c)}})},425:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("9abdcfc8",content,!0,{sourceMap:!1})},434:function(t,e,r){"use strict";r(425)},435:function(t,e,r){var n=r(19)(!1);n.push([t.i,".number-heading[data-v-10580cc6]{text-align:right}.award_partner .award_partner-contenet[data-v-10580cc6]{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start}.award_partner .award_partner-contenet .award_partner-img[data-v-10580cc6]{margin:-50px 50px 0 0}",""]),t.exports=n},442:function(t,e,r){"use strict";r.r(e);var n={name:"TechnolgoySection",data:function(){return{baseUrl:"/Saffy"}}},c=(r(434),r(37)),o=r(51),l=r.n(o),f=r(419),d=r(251),v=r(459),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"award_partner py-100"},[r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"1"}},[r("div",{staticClass:"number-heading"},[t._v("5")])]),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("h3",[t._v("Awards & partners")])])],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"start","no-gutters":""}},[r("v-col",{attrs:{cols:"5"}},[r("div",{staticClass:"award_partner-contenet"},[r("p",{staticClass:"ml-16 px-6"},[t._v("They approve our technology and collaborate with us")]),t._v(" "),r("v-img",{staticClass:"award_partner-img",attrs:{src:t.baseUrl+"/img/award_partener.png","max-height":"200","max-width":"200"}})],1)])],1)],1)}),[],!1,null,"10580cc6",null);e.default=component.exports;l()(component,{VCol:f.a,VImg:d.a,VRow:v.a})}}]);