(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>u});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),c=n(667),s=n.n(c),d=new URL(n(154),n.b),l=a()(r()),p=s()(d);l.push([e.id,"@font-face {\n  font-family: 'MyFont';\n  src: url("+p+");\n}\n* {\n  /* border: 1px solid brown; */\n  font-family: 'MyFont', sans-serif;\n  font-size: 1.2rem;\n\n  /* playing with variables */\n  --widget-width: 375px;\n  --widget-window: calc( var(--widget-width) + 10 );\n}\n/* webpage css */\nbody {\n  color: white;\n  background-color: rgb(31, 31, 31);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n}\n.header {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.1rem;\n  margin: 0.5rem;\n  min-width: 16rem;\n  text-align: center;\n  font-size: 1.3rem;\n  text-decoration: none;\n  color: inherit;\n  transition: 100ms;\n}\n.title-text {\n  font-size: 3rem;\n}\n.avatar {\n  border-radius: 50%;\n  height: 3rem;\n  border: 1px solid 190b30cb;\n}\n.intro {\n  width: 80%;\n}\n/* widget css */\n.widget {\n  display: flex;\n  flex-direction: column;\n  border-radius: 10px;\n  min-width: var(--widget-width, 375px);\n  min-height: calc( var(--widget-width) / 1.618 );\n  padding: 10px;\n  user-select: none;\n  cursor: pointer;\n}\n.now-temp {\n  font-size: 4rem;\n  display: flex;\n  align-items: center;\n}\n.now-high-low-div {\n  display: flex;\n  align-items: center;\n}\n.condition-div {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  gap: 10px;\n}\n.condition {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  font-size: 2.1rem;\n}\n.forecast-div {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  gap: 10px;\n}\n.day-1, .day-2, .day-3, .day-4, .day-5 {\n  text-align: center;\n}\n.forecast-day-div {\n  display: flex;\n  flex-direction: column;\n}\n.forecast-high-low {\n  display: flex;\n}\n.day {\n  text-align: center;\n}\n.widget-window {\n  overflow: hidden;\n  display: flex;\n  width: 397px;\n  max-height: 254px;\n  border: 1px solid cyan;\n  border-radius: 10px;\n  gap: 3px;\n  position: relative;\n}\n.menu-div {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  /* border: 1px solid green; */\n  border-radius: 10px;\n  min-width: 395px;\n  height: 250px;\n  transition: .15s ease-out;\n  background-color: rgba(31, 31, 31, 0.8);\n}\n.open {\n  transform: translate(-397px, 0);\n}\nlabel {\n  font-size: 2rem;\n  user-select: none;\n}\ninput {\n  background-color: rgba(255, 255, 255, 0.8);\n  font-size: 2rem;\n  text-align: center;\n  width: 15rem;\n  height: 5rem;\n}",""]);const u=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=o(e,r),d=0;d<i.length;d++){var l=n(i[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},991:(e,t,n)=>{n.d(t,{Z:()=>o});const o={p1:"When I use my weather app, I need it to be intuitive and concise. One glimpse of the screen should let me know the answers to the questions above! I created a weather widget designed to sit in a corner of the screen or on the phone.",p2:"I recently learned how to fetch API data, and I am using this weather project as practice. I hope you like it!"}},497:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(991);const r={init:()=>{const e=r.nowHighLowDiv(),t=document.createElement("div");t.textContent="/",e.append(r.nowHigh(),t,r.nowLow());const n=r.nowTempDiv();n.append(r.nowTemp(),e);const o=r.conditionDiv();o.append(n,r.condition());const i=r.body();i.append(r.location(),o,r.forecastDiv());const a=document.createElement("div");return a.classList.add("widget-window"),a.append(i,r.menu()),a},body:()=>{const e=document.createElement("div");return e.classList.add("widget"),e},location:()=>{const e=document.createElement("div");return e.classList.add("location-div"),e},today:()=>{const e=document.createElement("div");return e.classList.add("today-div"),e},nowTempDiv:()=>{const e=document.createElement("div");return e.classList.add("now-temp-div"),e},nowTemp:()=>{const e=document.createElement("div");return e.classList.add("now-temp"),e},nowHighLowDiv:()=>{const e=document.createElement("div");return e.classList.add("now-high-low-div"),e},nowHigh:()=>{const e=document.createElement("div");return e.classList.add("now-high"),e},nowLow:()=>{const e=document.createElement("div");return e.classList.add("now-low"),e},conditionDiv:()=>{const e=document.createElement("div");return e.classList.add("condition-div"),e},condition:()=>{const e=document.createElement("div");return e.classList.add("condition"),e},forecastDiv:()=>{const e=document.createElement("div");e.classList.add("forecast-div");for(let t=1;t<=5;t+=1){const n=document.createElement("div");n.classList.add("forecast-day-div");const o=document.createElement("div");o.classList.add(`forecast-high-${t}`);const r=document.createElement("div");r.classList.add(`forecast-low-${t}`);const i=document.createElement("div");i.textContent="/";const a=document.createElement("div");a.classList.add("forecast-high-low"),a.append(o,i,r);const c=document.createElement("div");c.classList.add(`day-${t}`),n.append(c,a),e.appendChild(n)}return e},menu:()=>{const e=document.createElement("div");e.classList.add("menu-div");const t=document.createElement("label");t.for="location-input",t.textContent="Location:";const n=document.createElement("input");return n.id="location-input",e.append(t,n),e}},i={init:()=>{document.body.append(i.header(),r.init(),i.intro())},header:()=>{const e=document.createElement("header");return e.classList.add("header"),e.appendChild(i.title()),e},title:()=>{const e=document.createElement("a");e.classList.add("title"),e.target="_blank",e.href="https://github.com/TYLPHE";const t=document.createElement("img");t.classList.add("avatar"),t.src="https://avatars.githubusercontent.com/u/85977718?v=4";const n=document.createElement("div");return n.classList.add("title-text"),n.innerText="Weather by TYLPHE",e.append(t,n),e},intro:()=>{const e=document.createElement("intro");e.classList.add("intro");const t=document.createElement("p");t.textContent=o.Z.p1;const n=document.createElement("p");return n.textContent=o.Z.p2,e.append(t,n),e}},a=i.init},154:(e,t,n)=>{e.exports=n.p+"2bc43ad8eb2f60b39f27.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),s=n.n(c),d=n(216),l=n.n(d),p=n(589),u=n.n(p),m=n(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=n(497);const v="32f3485fcef91da801aff2df635b45db";let g="",w=37.7790262,y=-122.419906,x=`https://api.openweathermap.org/geo/1.0/reverse?lat=${w}&lon=${y}&limit=1&appid=${v}`,b=`https://api.openweathermap.org/geo/1.0/direct?q=${g}&limit=1&appid=${v}`,E=`https://api.openweathermap.org/data/2.5/onecall?&exclude=minutely,hourly&lat=${w}&lon=${y}&APPID=${v}&units=imperial`;async function L(e){try{const t=await fetch(e),n=await t.json();return console.log(n),n}catch(e){throw alert(`Error: ${e}`)}}async function $(e){const t=document.querySelector(".now-temp");t.textContent=Math.round(`${e.current.temp}`),t.textContent+="°",document.querySelector(".now-high").textContent=Math.round(`${e.daily[0].temp.max}`);const n=document.querySelector(".now-low");n.textContent=Math.round(`${e.daily[0].temp.min}`),n.textContent+="°";const o=document.querySelector(".condition"),r=e.current.weather[0].description,i=r.substring(1),a=r.toUpperCase().slice(0,1);o.textContent=a+i,document.querySelector(".location-div").textContent=await async function(e){return w=e.lat,y=e.lon,x=`https://api.openweathermap.org/geo/1.0/reverse?lat=${w}&lon=${y}&limit=1&appid=${v}`,(await L(x))[0].name}(e);for(let t=1;t<=5;t+=1){document.querySelector(`.day-${t}`).textContent=new Date(1e3*e.daily[t].dt).toString().slice(0,3),document.querySelector(`.forecast-high-${t}`).textContent=Math.round(e.daily[t].temp.max);const n=document.querySelector(`.forecast-low-${t}`);n.textContent=Math.round(e.daily[t].temp.min),n.textContent+="°"}}async function C(e){try{g=e.value,b=`https://api.openweathermap.org/geo/1.0/direct?q=${g}&limit=1&appid=${v}`;const t=await L(b);w=t[0].lat,y=t[0].lon,E=`https://api.openweathermap.org/data/2.5/onecall?&exclude=minutely,hourly&lat=${w}&lon=${y}&APPID=${v}&units=imperial`;const n=await L(E);await $(n)}catch(e){throw console.log(`error in getCoords(): ${e}`)}}!async function(e){(0,f.Z)(),function(){const e=document.querySelector(".widget"),t=document.querySelector(".menu-div"),n=document.querySelector("input");e.addEventListener("click",(()=>{t.classList.toggle("open")})),n.addEventListener("keypress",(e=>{"Enter"===e.key&&(t.classList.remove("open"),C(n))})),t.addEventListener("click",(e=>{"menu-div open"===e.target.className&&(t.classList.remove("open"),C(n))}))}(),$(await L(e))}(E)})()})();