(()=>{"use strict";var t={192:(t,e,n)=>{n.d(e,{Z:()=>s});var o=n(81),r=n.n(o),i=n(645),a=n.n(i)()(r());a.push([t.id,"html,body{width:100%;height:100%;min-height:100%;margin:0;padding:0}html .main,body .main{width:100%;height:100%;min-width:400px;min-height:300px}html .toolbar,body .toolbar{display:flex;min-height:50px;background:#fff}html .toolbar div,body .toolbar div{flex:1;padding:2em;border:1px solid #000;cursor:pointer}html .toolbar div.on,body .toolbar div.on{font-weight:bold;text-decoration:underline}html .content,body .content{display:flex;flex:1;margin:20em 2em}html .content h2,body .content h2{text-align:center;float:left;font-size:1em}html .progressBar,body .progressBar{height:4px;width:100%}html .progressBarFill,body .progressBarFill{animation:fill 3s linear 1;height:100%;background-color:red}@keyframes fill{0%{width:0%}100%{width:100%}}",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var i=o(t=t||[],r=r||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=o(t,r),l=0;l<i.length;l++){var d=n(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return t[o](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),o=n(795),r=n.n(o),i=n(569),a=n.n(i),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(192),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=a().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var h,v=document.querySelectorAll(".toolbar div"),y=document.querySelector(".allOption"),g=document.querySelector(".progressBar div"),b={opt1:!1,opt2:!1,opt3:!1},x="";function w(){clearTimeout(h),g.style.animation="none",g.offsetHeight,g.style.animation=null}function O(){g.classList.add("progressBarFill")}function L(){g.classList.remove("progressBarFill")}function S(t){switch(document.getElementById("optionSelected"),t){case 1:b[0]=!0,x=1==b[1]||1==b[2]?"Opt 1, "+x:"Opt 1";break;case 2:b[1]=!0,x=!0===b[0]?!0===b[2]?"Opt1, Opt2, Opt 3":", Opt 2":!0===b[2]?"Opt 2, "+x:"Opt 2";break;case 3:b[2]=!0,1==b[0]||1==b[1]?x+=", Opt 3":x="Opt 3"}}function T(t){document.getElementById("optionSelected").replaceChildren(t)}y.addEventListener("click",(function(t){w(),b={opt1:!1,opt2:!1,opt3:!1},y.classList.add("on"),O(),function(){for(let t=1;t<v.length;t++)v[t].classList.remove("on")}(),h=setTimeout((function(){L(),T("All")}),3e3)})),function(){for(let t=1;t<v.length;t++)v[t].addEventListener("click",(function(e){w(),v[t].classList.contains("on")||(O(),v[t].classList.add("on"),y.classList.contains("on")&&y.classList.remove("on"),S(t),h=setTimeout((function(){T(x),L()}),3e3))}))}()})()})();