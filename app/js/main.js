(()=>{"use strict";var e,t={355:(e,t,n)=>{function r(e){try{var t=document.querySelector('input[name = "variant"]:checked').nextElementSibling.innerHTML.toLowerCase()}catch(e){}"имени"==t?e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})):"статусу"==t?e.sort((function(e,t){return e.status>t.status?1:e.status<t.status?-1:0})):"оценочной стоимости"==t?e.sort((function(e,t){return e.price<t.price?1:e.price>t.price?-1:0})):"доверию"==t?e.sort((function(e,t){return e.confidence<t.confidence?1:e.confidence>t.confidence?-1:0})):"приориету"==t&&e.sort((function(e,t){return e.priority>t.priority?1:e.priority<t.priority?-1:0}))}function a(e,t,n,r,a){var c=document.querySelector(e),o=!1;c.addEventListener("click",(function(){o?(c.innerHTML=t,o=!1,document.querySelector(n).style.maxHeight=null):(c.innerHTML+=" по",o=!0,document.querySelector(n).style.maxHeight=r,a&&(document.querySelector(n).style.marginTop="15px",document.querySelector(n).style.overflow="auto"))}))}function c(e){try{var t=document.querySelector('input[name = "variant"]:checked').nextElementSibling.innerHTML.toLowerCase()}catch(e){}"имени"==t?e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})):"статусу"==t?e.sort((function(e,t){return e.status>t.status?1:e.status<t.status?-1:0})):"оценочной стоимости"==t?e.sort((function(e,t){return e.price<t.price?1:e.price>t.price?-1:0})):"доверию"==t?e.sort((function(e,t){return e.confidence<t.confidence?1:e.confidence>t.confidence?-1:0})):"приоритету"==t&&e.sort((function(e,t){return e.priority<t.priority?1:e.priority>t.priority?-1:0}))}function o(){for(var e=document.querySelector("table").querySelectorAll("tbody"),t=0;t<e.length;t++)e[t].remove()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s,l,u=n(784),d=[{name:"Яков",status:1,price:2e4,confidence:20,month:"Июнь",number:12,year:2015,priority:!1,tel:74642005646,email:"iamjs@gmail.com"},{name:"Саша",status:4,price:96320,confidence:53,month:"Апрель",number:30,year:2018,priority:!1,tel:79463024659,email:"ihatejs@gmail.com"},{name:"Иван",status:2,price:987e3,confidence:86,month:"Декабрь",number:31,year:2006,priority:!0,tel:79623106556,email:"ilikejs@gmail.com"}],p=function(e){if(Array.isArray(e))return i(e)}(l=document.querySelectorAll(".tools-bar__tool"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(l)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(l)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();p.splice(0,3);for(var m=0;m<p.length;m++)p[m].addEventListener("click",(function(){"sort"==(s=event.target.id)&&document.querySelector(".tools-variants__make").addEventListener("click",(function(){c(d),o(),f(d)})),"filter"==s&&document.querySelector(".tools-variants__make").addEventListener("click",(function(){r(d);var e=u.cloneDeep(d);console.log(e),e.splice(1,e.length),o(),f(e)}))}));function f(e){for(var t=0;t<e.length;t++){var n=document.createElement("tbody");n.classList.add("table__todo-tbody");var r=document.createElement("td");r.classList.add("name"),r.innerHTML='<i class="far fa-file-alt"></i> <span class="name-span">'.concat(e[t].name,"</span>");var a=document.createElement("td");1==e[t].status?a.innerHTML='<span class="status-span">Закрыт</span>':2==e[t].status?a.innerHTML='<span class="status-span">Ведется</span>':3==e[t].status?a.innerHTML='<span class="status-span">Планируется</span>':4==e[t].status?a.innerHTML='<span class="status-span">Связался</span>':5==e[t].status&&(a.innerHTML='<span class="status-span">Потерянный</span>');var c=document.createElement("td");c.classList.add("price"),c.innerHTML='$<span class="price-span">'.concat(e[t].price,"</span>");var o=document.createElement("td");o.classList.add("confidence"),o.innerHTML="".concat(e[t].confidence,"%");var i=document.createElement("td"),s=['<span class="month">'.concat(e[t].month,"</span>"),'<span class="number">'.concat(e[t].number,"</span>"),'<span class="year">'.concat(e[t].year,"</span>")],l=s[0],u=s[1],d=s[2];i.innerHTML+="".concat(l," ").concat(u,", ").concat(d);var p=document.createElement("td");e[t].priority?p.innerHTML='<input class="check-priority" disabled checked type="checkbox">':p.innerHTML='<input class="check-priority" disabled type="checkbox">';var m=document.createElement("td"),f=document.createElement("a");f.setAttribute("href","tel: ".concat(e[t].tel)),f.innerHTML="+".concat(e[t].tel),f.classList.add("tel"),m.append(f);var y=document.createElement("td");y.classList.add("email"),y.innerHTML="".concat(e[t].email),n.append(r,a,c,o,i,p,m,y),document.querySelector("table").append(n);var v=document.querySelectorAll(".status-span");Array.from(v).map((function(e){"Ведется"==e.innerHTML?e.style.background="#e1cee4":"Связался"==e.innerHTML?e.style.background="#d3d6e8":"Планируется"==e.innerHTML?(e.style.background="#d6eff8",e.innerHTML+='<img src="assets/eyes.png">'):"Закрыт"==e.innerHTML?(e.style.background="#d1e7e5",e.innerHTML+='<img src="assets/biceps.png">'):"Потерянный"==e.innerHTML&&(e.style.background="#f0f0f0")}))}document.querySelector("#counts").innerHTML=e.length;for(var b=document.querySelectorAll(".price-span"),h=0,L=0;L<b.length;L++)h+=Number(b[L].innerHTML);document.querySelector("#sum").innerHTML=h+"$"}f(d),a("#sort","Сортировка",".table-container__tools","60px",!1),a("#filter","Фильтр",".table-container__tools","60px",!1)}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var c=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=t,e=[],r.O=(t,n,a,c)=>{if(!n){var o=1/0;for(l=0;l<e.length;l++){for(var[n,a,c]=e[l],i=!0,s=0;s<n.length;s++)(!1&c||o>=c)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(i=!1,c<o&&(o=c));i&&(e.splice(l--,1),t=a())}return t}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[n,a,c]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,c,[o,i,s]=n,l=0;for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(s)var u=s(r);for(t&&t(n);l<o.length;l++)c=o[l],r.o(e,c)&&e[c]&&e[c][0](),e[o[l]]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=r.O(void 0,[784],(()=>r(355)));a=r.O(a)})();