(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{419:function(t,e,r){"use strict";r(13),r(16),r(24),r(25);var n=r(2),o=(r(6),r(38),r(14),r(23),r(53),r(405),r(47),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(417),r(418),r(48),r(62),r(15),r(54),r(253),r(0)),c=r(115),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(O)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var n=r[t],o=j(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},423:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("0910f5b2",content,!0,{sourceMap:!1})},430:function(t,e,r){"use strict";r(423)},431:function(t,e,r){var n=r(19)(!1);n.push([t.i,".inspiration[data-v-71fc6102]{position:relative;width:100%;height:100%}.overlays[data-v-71fc6102]{background-image:url(/img/inspire.svg);background-repeat:no-repeat;background-position:50%;width:100%;height:500px;z-index:-1;position:absolute;top:0;right:2%;transform:rotate(-4deg)}.sub-heading[data-v-71fc6102]{height:100%;position:relative;z-index:1;padding-top:15px}.number-heading[data-v-71fc6102]{position:absolute;z-index:0;top:4%;left:55%}.sub-heading p[data-v-71fc6102]{margin:0;text-align:center;padding:20px 140px;line-height:32px}",""]),t.exports=n},439:function(t,e,r){"use strict";r.r(e);var n={name:"InspirationSection"},o=(r(430),r(37)),c=r(51),l=r.n(c),f=r(419),d=r(459),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"inspiration p-12 py-100"},[r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"end"}},[r("v-col",{attrs:{cols:"2"}},[r("h3",[t._v("The inspiration")])])],1),t._v(" "),r("div",{staticClass:"number-heading"},[t._v("2")]),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("div",{staticClass:"sub-heading"},[r("p",[t._v("\n          We looked at Nature and created Saffy a solution for water\n          purification\n        ")]),t._v(" "),r("p",[t._v("Sustainable & biodegradable")]),t._v(" "),r("p",[t._v("Gets ride of pathogens, heavy metals & other pollutants")]),t._v(" "),r("p",[t._v("Eliminates both liquid industrial & agricultural waste")]),t._v(" "),r("p",[t._v("Scalable from a personal use model to a community model")]),t._v(" "),r("div",{staticClass:"overlays"})])])],1)],1)}),[],!1,null,"71fc6102",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})}}]);