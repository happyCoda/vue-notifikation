(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Notifikation = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
function noop(){}var inserted=exports.cache={};exports.insert=function(e){if(inserted[e])return noop;inserted[e]=!0;var t=document.createElement("style");return t.setAttribute("type","text/css"),"textContent"in t?t.textContent=e:t.styleSheet.cssText=e,document.getElementsByTagName("head")[0].appendChild(t),function(){document.getElementsByTagName("head")[0].removeChild(t),inserted[e]=!1}};
},{}],2:[function(_dereq_,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var NotifikationComponent=_dereq_("./notifikation.vue"),Notifikation={};Notifikation.install=function(t,e){var o=t.extend(NotifikationComponent),i=void 0;t.prototype.$notifikation={show:function(t){var e=void 0,n=void 0,r=void 0,s=void 0;document.querySelector("body");if(s="error"===t.level?"rgb(214, 38, 36)":"success"===t.level?"rgb(134, 193, 73)":"rgb(148, 144, 152)",!i){var a=t.selector||"#notifikation";if(!document.querySelector(a)){var d=document.createElement("div");d.setAttribute("id","notifikation"),document.querySelector("body").appendChild(d)}i=new o({data:{items:[]}}).$mount(a)}n=i.$data.items,r=n.length,e={message:t.message||"Notified!",style:{width:(t.width||200)+"px",height:(t.height||50)+"px",backgroundColor:t.backgroundColor||s,color:t.color||"rgb(255, 255, 255)",right:(t.right||10)+"px",top:function(t){var e=t.height||50,o=t.top||10;return(r>0?r*e+r*o+o:o)+"px"}(t)}},i.$data.items.push(e),setTimeout(function(){i.$data.items.shift(),i.$data.items.forEach(function(t){t.style.top=parseInt(t.style.top,10)-60+"px"})},t.duration||3e3)},info:function(t){this.show(t)},error:function(t){this.show(Object.assign(t,{level:"error"}))},success:function(t){this.show(Object.assign(t,{level:"success"}))},dismiss:function(t){var e=void 0,o=void 0;for(i.$data.items=t?i.$data.items.filter(function(e,o){return o!==t}):[],e=i.$data.items.length,o=t;o<e;o+=1){var n=i.$data.items[o];n.style.top=parseInt(n.style.top,10)-60+"px"}}}},exports.default=Notifikation;

},{"./notifikation.vue":3}],3:[function(_dereq_,module,exports){
var __vueify_style_dispose__=_dereq_("vueify/lib/insert-css").insert(".notification__item[data-v-19d626d0]{display:flex;align-items:center;justify-content:center;position:absolute;z-index:10000;border-radius:4px;box-shadow:1px 1px 10px rgba(0,0,0,.4);cursor:pointer}.notification__item.fade-enter-active[data-v-19d626d0],.notification__item.fade-leave-active[data-v-19d626d0]{transition:opacity .5s}.notification__item.fade-enter[data-v-19d626d0],.notification__item.fade-leave-to[data-v-19d626d0]{opacity:0}");!function(){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"Notifikation",methods:{dismiss:function(t){this.$notifikation.dismiss(t)}}}}(),module.exports.__esModule&&(module.exports=module.exports.default);var __vue__options__="function"==typeof module.exports?module.exports.options:module.exports;__vue__options__.render=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notifikation"},[i("transition-group",{attrs:{name:"fade",tag:"div"}},t._l(t.items,function(e,o){return i("div",{key:o,staticClass:"notification__item",style:e.style,on:{click:function(e){e.stopPropagation(),t.dismiss(o)}}},[t._v(t._s(e.message))])}))],1)},__vue__options__.staticRenderFns=[],__vue__options__._scopeId="data-v-19d626d0";
},{"vueify/lib/insert-css":1}]},{},[2])(2)
});