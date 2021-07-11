(()=>{"use strict";var e,t={417:(e,t,n)=>{function r(e){var t=document.querySelector(e);t.addEventListener("click",(function(){var e=document.querySelectorAll(".tools-bar__tool_active");if(t.classList.add("tools-bar__tool_active"),e.length>=1)for(var n=0;n<e.length;n++)e[n].classList.remove("tools-bar__tool_active")}))}function o(e){return"01"==e[1]?"Январь":"02"==e[1]?"Февраль":"03"==e[1]?"Март":"04"==e[1]?"Апрель":"05"==e[1]?"Май":"06"==e[1]?"Июнь":"07"==e[1]?"Июль":"08"==e[1]?"Август":"09"==e[1]?"Сентябрь":"10"==e[1]?"Октябрь":"11"==e[1]?"Ноябрь":"12"==e[1]?"Декабрь":void 0}function c(e){try{var t=document.querySelector('input[name = "variant"]:checked').nextElementSibling.innerHTML.toLowerCase()}catch(e){}"имени"==t?e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})):"статусу"==t?e.sort((function(e,t){return e.status>t.status?1:e.status<t.status?-1:0})):"оценочной стоимости"==t?e.sort((function(e,t){return e.price<t.price?1:e.price>t.price?-1:0})):"доверию"==t?e.sort((function(e,t){return e.confidence<t.confidence?1:e.confidence>t.confidence?-1:0})):"приоритету"==t&&e.sort((function(e,t){return e.priority<t.priority?1:e.priority>t.priority?-1:0}))}function a(e){try{var t=document.querySelector('input[name = "variant"]:checked').nextElementSibling.innerHTML.toLowerCase()}catch(e){}"имени"==t?e.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0})):"статусу"==t?e.sort((function(e,t){return e.status>t.status?1:e.status<t.status?-1:0})):"оценочной стоимости"==t?e.sort((function(e,t){return e.price<t.price?1:e.price>t.price?-1:0})):"доверию"==t?e.sort((function(e,t){return e.confidence<t.confidence?1:e.confidence>t.confidence?-1:0})):"приоритету"==t&&e.sort((function(e,t){return e.priority<t.priority?1:e.priority>t.priority?-1:0}))}function i(){for(var e=document.querySelector("table").querySelectorAll("tbody"),t=0;t<e.length;t++)e[t].remove()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var l,u,d=n(784),m=[],p=function(e){if(Array.isArray(e))return s(e)}(u=document.querySelectorAll(".tools-bar__tool"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(u)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();p.splice(0,3);for(var f=0;f<p.length;f++)p[f].addEventListener("click",(function(){"sort"==(l=event.target.dataset.method)?document.querySelector(".tools-variants__make").addEventListener("click",(function(){var e=d.cloneDeep(m);a(e),i(),b(e)})):"filter"==l&&document.querySelector(".tools-variants__make").addEventListener("click",(function(){var e=d.cloneDeep(m);c(e),e.splice(1,e.length),i(),b(e)}))}));document.querySelector(".tools-variants__return-to-default").addEventListener("click",(function(){i(),b(m);try{document.querySelector('.tools-variants__variant input[type="radio"]:checked').checked=!1}catch(e){}}));var y=!1;document.querySelector(".tools-bar__btn").addEventListener("click",(function(){y?(document.querySelector(".table-container__new-row-configurator").style.display="none",document.querySelector(".tools-bar__btn").innerText="Новая строка",y=!1):(document.querySelector(".table-container__new-row-configurator").style.display="flex",document.querySelector(".tools-bar__btn").innerText="Отменить",y=!0)})),document.querySelector(".new-row-configurator__make").addEventListener("click",(function(){var e,t,n,r,c,a,s,l,u;e=m,t=document.getElementById("configure-the-name"),n=document.querySelector(".select-status__container input:checked"),r=document.getElementById("configure-the-price"),c=document.getElementById("configure-the-trust"),a=document.getElementById("configure-the-last-contact").value.split("-"),s=document.querySelector(".select-priority input:checked"),l=document.getElementById("configure-the-tel"),u=document.getElementById("configure-the-email"),e.push({name:t.value,status:n.dataset.status,price:r.value,confidence:c.value,month:o(a),year:a[0],number:a[2],priority:Boolean(s.dataset.agreee),tel:l.value,email:u.value}),t.value="",n.checked=!1,r.value="",c.value="",s.checked=!1,document.getElementById("configure-the-last-contact").value="",l.value="",u.value="",console.log(e),i(),b(m),document.querySelector(".table-container__new-row-configurator").style.display="none",document.querySelector(".tools-bar__btn").innerText="Новая строка"}));var v=!1;function b(e){for(var t=0;t<e.length;t++){var n=document.createElement("tbody");n.classList.add("table__todo-tbody");var r=document.createElement("td");r.classList.add("name"),r.innerHTML='<i class="far fa-file-alt"></i> <span class="name-span">'.concat(e[t].name,"</span>");var o=document.createElement("td");1==e[t].status?o.innerHTML='<span class="status-span">Закрыт</span>':2==e[t].status?o.innerHTML='<span class="status-span">Ведется</span>':3==e[t].status?o.innerHTML='<span class="status-span">Планируется</span>':4==e[t].status?o.innerHTML='<span class="status-span">Связался</span>':5==e[t].status&&(o.innerHTML='<span class="status-span">Потерянный</span>');var c=document.createElement("td");c.classList.add("price"),c.innerHTML='$<span class="price-span">'.concat(e[t].price,"</span>");var a=document.createElement("td");a.classList.add("confidence"),a.innerHTML="".concat(e[t].confidence,"%");var i=document.createElement("td"),s=['<span class="month">'.concat(e[t].month,"</span>"),'<span class="number">'.concat(e[t].number,"</span>"),'<span class="year">'.concat(e[t].year,"</span>")],l=s[0],u=s[1],d=s[2];i.innerHTML+="".concat(l," ").concat(u,", ").concat(d);var m=document.createElement("td");e[t].priority?m.innerHTML='<input class="check-priority" disabled checked type="checkbox">':m.innerHTML='<input class="check-priority" disabled type="checkbox">';var p=document.createElement("td"),f=document.createElement("a");f.setAttribute("href","tel: ".concat(e[t].tel)),f.innerHTML=e[t].tel,f.classList.add("tel"),p.append(f);var y=document.createElement("td");y.classList.add("email"),y.innerHTML="".concat(e[t].email),n.append(r,o,c,a,i,m,p,y),document.querySelector("table").append(n);var v=document.querySelectorAll(".status-span");Array.from(v).map((function(e){"Ведется"==e.innerHTML?e.style.background="#e1cee4":"Связался"==e.innerHTML?e.style.background="#d3d6e8":"Планируется"==e.innerHTML?(e.style.background="#d6eff8",e.innerHTML+='<img src="assets/eyes.png">'):"Закрыт"==e.innerHTML?(e.style.background="#d1e7e5",e.innerHTML+='<img src="assets/biceps.png">'):"Потерянный"==e.innerHTML&&(e.style.background="#f0f0f0")}))}document.querySelector("#counts").innerHTML=e.length;for(var b=document.querySelectorAll(".price-span"),h=0,g=0;g<b.length;g++)h+=Number(b[g].innerHTML);document.querySelector("#sum").innerHTML=h+"$"}document.querySelector(".table-container__add-row").addEventListener("click",(function(){v?(document.querySelector(".table-container__new-row-configurator").style.display="none",v=!1):(document.querySelector(".table-container__new-row-configurator").style.display="flex",v=!0)})),b(m),r("#sort"),r("#filter")}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var c=n[e]={id:e,loaded:!1,exports:{}};return t[e].call(c.exports,c,c.exports,r),c.loaded=!0,c.exports}r.m=t,e=[],r.O=(t,n,o,c)=>{if(!n){var a=1/0;for(l=0;l<e.length;l++){for(var[n,o,c]=e[l],i=!0,s=0;s<n.length;s++)(!1&c||a>=c)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(i=!1,c<a&&(a=c));i&&(e.splice(l--,1),t=o())}return t}c=c||0;for(var l=e.length;l>0&&e[l-1][2]>c;l--)e[l]=e[l-1];e[l]=[n,o,c]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var o,c,[a,i,s]=n,l=0;for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(s)var u=s(r);for(t&&t(n);l<a.length;l++)c=a[l],r.o(e,c)&&e[c]&&e[c][0](),e[a[l]]=0;return r.O(u)},n=self.webpackChunk=self.webpackChunk||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var o=r.O(void 0,[784],(()=>r(417)));o=r.O(o)})();