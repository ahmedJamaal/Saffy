(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{417:function(t,e,r){"use strict";r(13),r(16),r(24),r(25);var n=r(2),o=(r(6),r(38),r(14),r(23),r(53),r(403),r(47),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(48),r(62),r(15),r(54),r(252),r(0)),c=r(115),l=r(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(O)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=w.get(l);return f||function(){var t,e;for(e in f=[],m)m[e].forEach((function(t){var n=r[t],o=j(e,t,n);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,f)}(),t(r.tag,Object(c.a)(data,{class:f}),o)}})},422:function(t,e,r){var content=r(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("302015b1",content,!0,{sourceMap:!1})},432:function(t,e,r){"use strict";r(422)},433:function(t,e,r){var n=r(19)(!1);n.push([t.i,".inspiration[data-v-288d5424]{position:relative;width:100%;height:100%}.overlays[data-v-288d5424]{background-image:url(/img/insipre_svg.svg);background-repeat:no-repeat;background-position:50%;width:100%;height:400px;z-index:-1;position:absolute;opacity:.6;top:1%;right:2%;transform:rotate(-3deg)}.sub-heading[data-v-288d5424]{height:100%;position:relative;z-index:1;padding-top:15px}.number-heading[data-v-288d5424]{position:absolute;z-index:0;top:10%;left:54%}.sub-heading p[data-v-288d5424]{margin:0;text-align:center;padding:15px 210px}",""]),t.exports=n},444:function(t,e,r){"use strict";r.r(e);var n={name:"InspirationSection"},o=(r(432),r(37)),c=r(51),l=r.n(c),d=r(417),f=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"inspiration p-12 py-xs-10 py-sm-12 py-md-14 py-lg-15 py-xl-16"},[r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"end"}},[r("v-col",{attrs:{cols:"3"}},[r("h3",[t._v("SaffyWater inspiration")])])],1),t._v(" "),r("div",{staticClass:"number-heading"},[t._v("2")]),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("div",{staticClass:"sub-heading"},[r("p",[t._v("\n           We looked at Nature and created Saffy a solution for water purification which is :\n        ")]),t._v(" "),r("p",[t._v("Sustainable & biodegradable")]),t._v(" "),r("p",[t._v("Gets rid of pathogens, heavy metals & other pollutants")]),t._v(" "),r("p",[t._v("Eliminates both liquid industrial & agricultural waste")]),t._v(" "),r("p",[t._v("Scalable from a personal use model to a community model")]),t._v(" "),r("p",[t._v("Aesthetic")]),t._v(" "),r("div",{staticClass:"overlays"})])])],1)],1)}),[],!1,null,"288d5424",null);e.default=component.exports;l()(component,{VCol:d.a,VRow:f.a})}}]);
