(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,4,5,6,7,8,10],{417:function(t,e,r){"use strict";r(13),r(16),r(24),r(25);var n=r(2),o=(r(6),r(38),r(14),r(23),r(53),r(403),r(47),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(48),r(62),r(15),r(54),r(252),r(0)),c=r(115),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d=["sm","md","lg","xl"],h=d.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=d.reduce((function(t,e){return t["offset"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),y=d.reduce((function(t,e){return t["order"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),_={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(y)};function w(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var x=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var v=x.get(l);return v||function(){var t,e;for(e in v=[],_)_[e].forEach((function(t){var n=r[t],o=w(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),x.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},419:function(t,e,r){var content=r(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("adf7f1e6",content,!0,{sourceMap:!1})},420:function(t,e,r){var content=r(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("2603685d",content,!0,{sourceMap:!1})},421:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("5b9db102",content,!0,{sourceMap:!1})},422:function(t,e,r){var content=r(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("3a7d57f0",content,!0,{sourceMap:!1})},423:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("c8205eba",content,!0,{sourceMap:!1})},424:function(t,e,r){var content=r(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("10f2ed0f",content,!0,{sourceMap:!1})},425:function(t,e,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("9fa8f426",content,!0,{sourceMap:!1})},426:function(t,e,r){"use strict";r(419)},427:function(t,e,r){var n=r(19)(!1);n.push([t.i,".cover{background:#fff url(/img/bg-main.svg) no-repeat bottom;min-height:100vh;display:table;position:relative;text-align:center}.cover,.cover-overlay{width:100%;height:100%}.cover-overlay{position:absolute;top:0;left:0;background:#fff;opacity:.1}.cover-content{display:table-cell;vertical-align:middle;text-align:center;transform:translateY(-2.1rem)}.cover-content .text-content{position:relative;top:-60px}.cover-content h3{text-transform:capitalize;letter-spacing:.3rem}",""]),t.exports=n},428:function(t,e,r){"use strict";r(420)},429:function(t,e,r){var n=r(19)(!1);n.push([t.i,".mission[data-v-09a67932]{position:relative;width:100%;height:100%}.mission h3[data-v-09a67932]{margin-left:17%}.overlays[data-v-09a67932]{background-image:url(/img/mission.svg);background-repeat:no-repeat;background-position:50%;width:100%;height:350px;z-index:-1;position:absolute;top:0;right:7%}.sub-heading[data-v-09a67932]{height:100%;position:relative;z-index:1;padding-top:35px}.number-heading[data-v-09a67932]{position:absolute;z-index:0;top:6%;left:34%}.sub-heading p[data-v-09a67932]{text-align:center;padding:35px 60px;line-height:25px}",""]),t.exports=n},430:function(t,e,r){"use strict";r(421)},431:function(t,e,r){var n=r(19)(!1);n.push([t.i,".awards img[data-v-2c265715]{width:100%;height:100%}",""]),t.exports=n},432:function(t,e,r){"use strict";r(422)},433:function(t,e,r){var n=r(19)(!1);n.push([t.i,".inspiration[data-v-4f546032]{position:relative;width:100%;height:100%}.overlays[data-v-4f546032]{background-image:url(/img/inspire.svg);background-repeat:no-repeat;background-position:50%;width:100%;height:500px;z-index:-1;position:absolute;top:0;right:2%;transform:rotate(-4deg)}.sub-heading[data-v-4f546032]{height:100%;position:relative;z-index:1;padding-top:15px}.number-heading[data-v-4f546032]{position:absolute;z-index:0;top:4%;left:55%}.sub-heading p[data-v-4f546032]{margin:0;text-align:center;padding:20px 140px;line-height:32px}",""]),t.exports=n},434:function(t,e,r){"use strict";r(423)},435:function(t,e,r){var n=r(19)(!1);n.push([t.i,".partner img[data-v-1596f44f]{width:100%;height:100%}",""]),t.exports=n},436:function(t,e,r){"use strict";r(424)},437:function(t,e,r){var n=r(19)(!1);n.push([t.i,".number-heading[data-v-08ea6081]{text-align:right}.technology .technology-cover[data-v-08ea6081]{width:100%;height:100%}.technology .img100[data-v-08ea6081]{max-height:100px;max-width:100px}.technology .img150[data-v-08ea6081]{max-height:150px;max-width:150px}",""]),t.exports=n},438:function(t,e,r){"use strict";r(425)},439:function(t,e,r){var n=r(19)(!1);n.push([t.i,".number-heading[data-v-46b6c34e]{text-align:right}.award_partner .award_partner-contenet[data-v-46b6c34e]{display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.award_partner .award_partner-contenet .award_partner-img[data-v-46b6c34e]{margin:-50px 50px 0 0}.award_partner img[data-v-46b6c34e]{max-height:200px;max-width:200px}",""]),t.exports=n},441:function(t,e,r){"use strict";r.r(e);var n={name:"CoverSection",data:function(){return{slides:[{heading:"SaffyWater",text:"The world first biological solution for water purification",img:"/img/slides/bg-1.svg"}]}}},o=(r(426),r(37)),c=r(51),l=r.n(c),f=r(417),v=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"cover"},[r("div",{staticClass:"cover-content"},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"cover-overlay"}),t._v(" "),r("div",{staticClass:"text-content"},[r("h1",{staticClass:"py-4"},[t._v("SaffyWater")]),t._v(" "),r("h3",{staticClass:"py-2"},[t._v("The world first biological solution for water purification.")])])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:f.a,VRow:v.a})},442:function(t,e,r){"use strict";r.r(e);var n={name:"mission"},o=(r(428),r(37)),c=r(51),l=r.n(c),f=r(417),v=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mission p-12 pb-100"},[r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"end"}},[r("v-col",{attrs:{cols:"2"}},[r("h3",[t._v("Mission")])])],1),t._v(" "),r("div",{staticClass:"number-heading"},[t._v("1")]),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("div",{staticClass:"sub-heading"},[r("p",[t._v("\n          SaffyWater mission is to give access to clean drinkable water at the smartest\n          and most  sustainable way.\n        ")]),t._v(" "),r("p",[t._v("\n         To contribute to a healthier environment by building sustainable eco-friendly products.\n        ")]),t._v(" "),r("div",{staticClass:"overlays"})])])],1)],1)}),[],!1,null,"09a67932",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:v.a})},443:function(t,e,r){"use strict";r.r(e);var n={name:"Awards",data:function(){return{}}},o=(r(430),r(37)),c=r(51),l=r.n(c),f=r(417),v=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"awards px-16 py-100"},[r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h3",[t._v("Awards & Recognition")])])],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"img/other/MIT.png"}})]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"img/other/la french tech.jpg"}})]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"img/other/energy globe.jpg"}})]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"img/other/Startup power.png"}})])],1)],1)}),[],!1,null,"2c265715",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:v.a})},444:function(t,e,r){"use strict";r.r(e);var n={name:"InspirationSection"},o=(r(432),r(37)),c=r(51),l=r.n(c),f=r(417),v=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"inspiration p-12 py-100"},[r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"end"}},[r("v-col",{attrs:{cols:"3"}},[r("h3",[t._v("SaffyWater inspiration")])])],1),t._v(" "),r("div",{staticClass:"number-heading"},[t._v("2")]),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("div",{staticClass:"sub-heading"},[r("p",[t._v("\n          Inspired by Nature to create the most efficient and sustainable water purification technology\n        ")]),t._v(" "),r("p",[t._v("SaffyWater technology is the only technology that fully clean without demineralize ")]),t._v(" "),r("p",[t._v("SaffyWater technology is the best and most efficient on Heavy metals")]),t._v(" "),r("p",[t._v("Gets rid of pathogens, heavy metals & other pollutants")]),t._v(" "),r("p",[t._v("Eliminates both liquid industrial & agricultural waste")]),t._v(" "),r("p",[t._v("Scalable from a personal use model to a community model")]),t._v(" "),r("div",{staticClass:"overlays"})])])],1)],1)}),[],!1,null,"4f546032",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:v.a})},445:function(t,e,r){"use strict";r.r(e);var n={name:"partner",data:function(){return{}}},o=(r(434),r(37)),c=r(51),l=r.n(c),f=r(417),v=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"partner px-16 py-100"},[r("v-row",[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h3",[t._v("Our Partners")])])],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"/img/other/le village.jpg"}})]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"/img/other/Conscious venture lab.png"}})]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"/img/other/Design terminal.png"}})]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{attrs:{src:this.$config.baseUrl+"/img/other/the camp.jpg"}})])],1)],1)}),[],!1,null,"1596f44f",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:v.a})},446:function(t,e,r){"use strict";r.r(e);var n={name:"TechnolgoySection",data:function(){return{}}},o=(r(436),r(37)),c=r(51),l=r.n(c),f=r(417),v=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"technology py-100"},[r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"end"}},[r("v-col",{attrs:{cols:"2"}},[r("div",{staticClass:"number-heading"},[t._v("3")])]),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("h3",[t._v("SaffyWater Technology")]),t._v(" "),r("p",{staticClass:"mt-5"},[t._v("\n        To purify water, Saffy conceived a bio membrane consisting of 3 major layers.\n        Each layer takes care of a certain type of pollutant\n      ")])])],1),t._v(" "),r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"3"}},[r("p",[t._v("\n        The system prevents contaminations both inside and outside the system, without\n        altering the natural properties of drinking water\n      ")])]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{staticClass:"mr-auto img150",attrs:{src:this.$config.baseUrl+"img/technology-right.svg"}})])],1),t._v(" "),r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"2"}},[r("img",{staticClass:"ml-auto img150",attrs:{src:this.$config.baseUrl+"img/technology-left.svg"}})]),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("p",[t._v("\n        Saffy bio membrane is self-sufficient and can be scaled from a personal water\n        bottle up to large industrial or community-owned units\n      ")])])],1),t._v(" "),r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"center"}},[r("img",{staticClass:"technology-cover",attrs:{src:this.$config.baseUrl+"img/saffy_products.svg"}})])],1)}),[],!1,null,"08ea6081",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:v.a})},447:function(t,e,r){"use strict";r.r(e);var n={name:"TechnolgoySection",data:function(){return{}}},o=(r(438),r(37)),c=r(51),l=r.n(c),f=r(417),v=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"award_partner py-100"},[r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"1"}},[r("div",{staticClass:"number-heading"},[t._v("5")])]),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("h3",[t._v("Awards & partners")])])],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"start","no-gutters":""}},[r("v-col",{attrs:{cols:"5"}},[r("div",{staticClass:"award_partner-contenet"},[r("p",{staticClass:"ml-16 px-6"},[t._v("They approve our technology and collaborate with us")]),t._v(" "),r("img",{staticClass:"award_partner-img",attrs:{src:this.$config.baseUrl+"/img/award_partener.png"}})])])],1)],1)}),[],!1,null,"46b6c34e",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:v.a})},469:function(t,e,r){"use strict";r.r(e);var n=r(441),o=r(442),c=r(443),l=r(444),f=r(445),v=r(446),d=r(447),h={name:"IndexPage",layout:"default",components:{Cover:n.default,Mission:o.default,Awards:c.default,Inspiration:l.default,Partners:f.default,Technology:v.default,AwardPartener:d.default}},m=r(37),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Cover"),t._v(" "),r("Mission"),t._v(" "),r("Inspiration"),t._v(" "),r("Technology"),t._v(" "),r("AwardPartener"),t._v(" "),r("Partners"),t._v(" "),r("Awards")],1)}),[],!1,null,null,null);e.default=component.exports}}]);