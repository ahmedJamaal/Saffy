(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{417:function(t,e,n){"use strict";n(13),n(16),n(24),n(25);var r=n(2),o=(n(6),n(38),n(14),n(23),n(53),n(403),n(47),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(414),n(415),n(416),n(48),n(62),n(15),n(54),n(252),n(0)),c=n(115),l=n(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(h),offset:Object.keys(y),order:Object.keys(m)};function j(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var r=n[t],o=j(e,t,r);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),w.set(l,d)}(),t(n.tag,Object(c.a)(data,{class:d}),o)}})},422:function(t,e,n){var content=n(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1512f1d2",content,!0,{sourceMap:!1})},432:function(t,e,n){"use strict";n(422)},433:function(t,e,n){var r=n(19)(!1);r.push([t.i,".inspiration[data-v-2f3ec963]{position:relative;width:100%;height:100%}.overlays[data-v-2f3ec963]{background-image:url(/Saffy/img/inspire.svg);background-repeat:no-repeat;background-position:50%;width:100%;height:500px;z-index:-1;position:absolute;top:0;right:2%;transform:rotate(-4deg)}.sub-heading[data-v-2f3ec963]{height:100%;position:relative;z-index:1;padding-top:15px}.number-heading[data-v-2f3ec963]{position:absolute;z-index:0;top:4%;left:55%}.sub-heading p[data-v-2f3ec963]{margin:0;text-align:center;padding:20px 140px;line-height:32px}",""]),t.exports=r},444:function(t,e,n){"use strict";n.r(e);var r={name:"InspirationSection"},o=(n(432),n(37)),c=n(51),l=n.n(c),f=n(417),d=n(466),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"inspiration p-12 py-100"},[n("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"end"}},[n("v-col",{attrs:{cols:"3"}},[n("h3",[t._v("SaffyWater inspiration")])])],1),t._v(" "),n("div",{staticClass:"number-heading"},[t._v("2")]),t._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("div",{staticClass:"sub-heading"},[n("p",[t._v("\n          Inspired by Nature to create the most efficient and sustainable water purification technology\n        ")]),t._v(" "),n("p",[t._v("SaffyWater technology is the only technology that fully clean without demineralize ")]),t._v(" "),n("p",[t._v("SaffyWater technology is the best and most efficient on Heavy metals")]),t._v(" "),n("p",[t._v("Gets rid of pathogens, heavy metals & other pollutants")]),t._v(" "),n("p",[t._v("Eliminates both liquid industrial & agricultural waste")]),t._v(" "),n("p",[t._v("Scalable from a personal use model to a community model")]),t._v(" "),n("div",{staticClass:"overlays"})])])],1)],1)}),[],!1,null,"2f3ec963",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})}}]);