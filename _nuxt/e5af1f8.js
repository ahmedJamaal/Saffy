(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{417:function(t,e,r){"use strict";r(13),r(16),r(24),r(25);var n=r(2),o=(r(6),r(38),r(14),r(23),r(53),r(403),r(47),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(48),r(62),r(15),r(54),r(252),r(0)),c=r(115),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],d=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=m.reduce((function(t,e){return t["offset"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),O=m.reduce((function(t,e){return t["order"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),j={col:Object.keys(d),offset:Object.keys(y),order:Object.keys(O)};function h(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},d),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var v=w.get(l);return v||function(){var t,e;for(e in v=[],j)j[e].forEach((function(t){var n=r[t],o=h(e,t,n);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,v)}(),t(r.tag,Object(c.a)(data,{class:v}),o)}})},440:function(t,e,r){var content=r(449);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("46af1599",content,!0,{sourceMap:!1})},448:function(t,e,r){"use strict";r(440)},449:function(t,e,r){var n=r(19)(!1);n.push([t.i,".story .img100[data-v-5fe23c9f]{max-height:100px;max-width:100px}.story .img150[data-v-5fe23c9f]{max-height:150px;max-width:150px}",""]),t.exports=n},453:function(t,e,r){"use strict";r.r(e);var n={name:"StorySection",data:function(){return{}}},o=(r(448),r(37)),c=r(51),l=r.n(c),f=r(417),v=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"story py-100"},[r("v-row",{attrs:{justify:"center",align:"center","no-gutters":""}},[r("v-col",{attrs:{cols:"2"}},[r("img",{staticClass:"story-img img150",attrs:{src:this.$config.baseUrl+"/img/story-top.svg"}})])],1),t._v(" "),r("v-row",{attrs:{"no-gutters":"",justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"1"}},[r("div",{staticClass:"number-heading"},[t._v("4")])]),t._v(" "),r("v-col",{attrs:{cols:"1"}},[r("img",{staticClass:"story-img img100",attrs:{src:this.$config.baseUrl+"/img/story-mid.png"}})])],1),t._v(" "),r("v-row",{attrs:{"no-gutters":"",justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"1"}},[r("img",{staticClass:"story-img img100",attrs:{src:this.$config.baseUrl+"/img/story-head.png"}})]),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("h3",[t._v("Our Story")])])],1),t._v(" "),r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("p",{staticClass:"ml-2 px-6"},[t._v("\n            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo\n           ")])])],1),t._v(" "),r("v-row",{attrs:{"no-gutters":"",justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"1"}},[r("img",{staticClass:"story-img img100",attrs:{src:this.$config.baseUrl+"/img/story-bottom.png"}})])],1)],1)}),[],!1,null,"5fe23c9f",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:v.a})}}]);