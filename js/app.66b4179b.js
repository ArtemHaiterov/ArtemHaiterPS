(function(t){function e(e){for(var a,c,n=e[0],r=e[1],l=e[2],m=0,u=[];m<n.length;m++)c=n[m],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&u.push(s[c][0]),s[c]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);v&&v(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,n=1;n<i.length;n++){var r=i[n];0!==s[r]&&(a=!1)}a&&(o.splice(e--,1),t=c(c.s=i[0]))}return t}var a={},s={app:0},o=[];function c(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,c),i.l=!0,i.exports}c.m=t,c.c=a,c.d=function(t,e,i){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(c.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(i,a,function(e){return t[e]}.bind(null,a));return i},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var v=r;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"01f6":function(t,e,i){},"065a":function(t,e,i){"use strict";i("74da")},"1e1d":function(t,e,i){},"1ea5":function(t,e,i){},"25bf":function(t,e,i){},"3cdf":function(t,e,i){"use strict";i("5fc5")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[i("pv-topbar"),i("router-view",{staticClass:"content"}),i("pv-footer")],1)},o=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"topbar"},[i("div",{staticClass:"topbar-menu"},[i("router-link",{staticClass:"link",class:{active:t.isActiveHome},attrs:{to:{name:"home"}}},[t._v(" Резюме ")]),i("router-link",{staticClass:"link",class:{active:t.isActivePortfolio},attrs:{to:{name:"portfolio"}}},[t._v(" Портфолио ")]),i("router-link",{staticClass:"link",class:{active:t.isActiveContact},attrs:{to:{name:"contact"}}},[t._v(" Контакты ")])],1),i("div",{staticClass:"hamburger-menu"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.isActiveMenu,expression:"isActiveMenu"}],attrs:{id:"menu__toggle",type:"checkbox"},domProps:{checked:Array.isArray(t.isActiveMenu)?t._i(t.isActiveMenu,null)>-1:t.isActiveMenu},on:{change:function(e){var i=t.isActiveMenu,a=e.target,s=!!a.checked;if(Array.isArray(i)){var o=null,c=t._i(i,o);a.checked?c<0&&(t.isActiveMenu=i.concat([o])):c>-1&&(t.isActiveMenu=i.slice(0,c).concat(i.slice(c+1)))}else t.isActiveMenu=s}}}),t._m(0),i("ul",{staticClass:"menu__box"},[i("li",{on:{click:t.closeMenu}},[i("router-link",{staticClass:"menu__item",class:{active:t.isActiveHome},attrs:{to:{name:"home"}}},[t._v(" Резюме ")])],1),i("li",{on:{click:t.closeMenu}},[i("router-link",{staticClass:"menu__item",class:{active:t.isActivePortfolio},attrs:{to:{name:"portfolio"}}},[t._v(" Портфолио ")])],1),i("li",{on:{click:t.closeMenu}},[i("router-link",{staticClass:"menu__item",class:{active:t.isActiveContact},attrs:{to:{name:"contact"}}},[t._v(" Контакты ")])],1)])]),i("div",{staticClass:"name"},[t._v("Артём Гайтеров")])])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{staticClass:"menu__btn",attrs:{for:"menu__toggle"}},[i("span")])}],r={name:"PvTopbar",data:function(){return{isActiveMenu:!1}},computed:{isActiveHome:function(){return"/home"===this.$route.path},isActivePortfolio:function(){return"/portfolio"===this.$route.path},isActiveContact:function(){return"/contact"===this.$route.path}},methods:{closeMenu:function(){this.isActiveMenu=!1}},watch:{isActiveMenu:function(t){var e="scroll-disable";t?document.body.classList.add(e):document.body.classList.remove(e)}}},l=r,v=(i("d112"),i("065a"),i("2877")),m=Object(v["a"])(l,c,n,!1,null,"49984024",null),u=m.exports,f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"info"},[t._v("© 2021 Артём Гайтеров - персональный сайт")])])}],d={name:"PvFooter"},_=d,h=(i("b9a5"),Object(v["a"])(_,f,p,!1,null,"eac45894",null)),C=h.exports,g={name:"PvApp",components:{PvTopbar:u,PvFooter:C}},I=g,b=Object(v["a"])(I,s,o,!1,null,null,null),k=b.exports,w=i("8c4f"),A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-wrapper"},[i("div",{staticClass:"homeItem"},[i("div",{staticClass:"homeItem-title"},[t._v("Профессиональные навыки")]),i("div",{staticClass:"homeItem-content"},[i("ul",[i("li",[t._v(" JavaScript (1 год опыта) Выше среднего, использую в настоящее время. ")]),i("li",[t._v(" HTML/CSS(LESS) (2 года опыта) Выше среднего, использую в настоящее время. ")]),i("li",[t._v(" Vue.js (1 года опыта) Выше среднего, использую в настоящее время. ")]),i("li",[t._v("JQuery (1 год опыта) Средний, использую в настоящее время.")]),i("li",[t._v("Python (1 год опыта) Начинающий, 1 год назад.")]),i("li",[t._v("C++ (1 год опыта) Начинающий, 1 год назад.")]),i("li",[t._v("GitHub (1 год опыта) Средний, использую в настоящее время.")]),i("li",[t._v("Git (1 год опыта) Средний, использую в настоящее время.")]),i("li",[t._v("Webpack (1 год опыта) Средний, использую в настоящее время.")]),i("li",[t._v("SQL (1 года опыта) Средний, 1 год назад.")])])])]),i("div",{staticClass:"homeItem"},[i("div",{staticClass:"homeItem-title"},[t._v("Образование")]),i("div",{staticClass:"homeItem-content"},[i("li",[t._v(" Приднепровская государственная академия строительства и архитектуры ")]),i("li",[t._v("Информационные технологии и механическая инженерия, Днепр")]),i("li",[t._v("Неоконченное высшее, с 09.2016 по 05.2022 (5 года 8 месяцев)")])])]),i("div",{staticClass:"homeItem"},[i("div",{staticClass:"homeItem-title"},[t._v("Знание языков")]),i("div",{staticClass:"homeItem-content"},[i("li",[t._v("Украинский ─ свободно")]),i("li",[t._v("Русский ─ свободно")]),i("li",[t._v("Английский ─ средний")])])]),i("div",{staticClass:"homeItem"},[i("div",{staticClass:"homeItem-title"},[t._v("О себе")]),i("div",{staticClass:"homeItem-content"},[t._v(" Меня зовут Артём, мне 21 год. Люблю работать в команде, легко нахожу общий язык с людьми. Быстро обучаюсь новому. Готов к трудным и интересным проектам. Целеустремленный и легкообучаем, готов довести любое дело до результативного конца. ")])])])}],P={name:"pvHome"},M=P,j=(i("f179"),Object(v["a"])(M,A,y,!1,null,"84fc4096",null)),x=j.exports,O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"portfolio-wrapper"},[a("div",{staticClass:"portfolioItem"},[a("div",{staticClass:"portfolioItem-header"},[a("div",{staticClass:"portfolioItem-title"},[t._v("Персональный сайт")]),a("div",{staticClass:"portfolioItem-link"},[a("a",{attrs:{href:"https://artemhaiterov.github.io/ArtemHaiterPS/index.html#/home",target:"_blank"}},[t._v("Artem Haiterov")])])]),a("div",{staticClass:"portfolioItem-middle"},[a("div",{staticClass:"portfolioItem-images"},[a("div",{staticClass:"portfolioItem-image"},[a("img",{attrs:{src:i("9de2")}})]),a("div",{staticClass:"portfolioItem-image"},[a("img",{attrs:{src:i("d2de")}})])])]),a("div",{staticClass:"portfolioItem-content content-inner"},[a("p",[t._v("Single Page Application на Vue.")]),a("p",[t._v(" Персональный сайт, с моим резюме, портфолио и контактами. ")]),a("p",[t._v(" Проект находится в стадии разработки. Программная часть готовая почти полностью. ")])])]),a("div",{staticClass:"portfolioItem"},[a("div",{staticClass:"portfolioItem-header"},[a("div",{staticClass:"portfolioItem-title"},[t._v("Персональный сайт")]),a("div",{staticClass:"portfolioItem-link"},[a("a",{attrs:{href:"https://artemhaiterov.github.io/ArtemHaiterPS/index.html#/home",target:"_blank"}},[t._v("Artem Haiterov")])])]),a("div",{staticClass:"portfolioItem-middle"},[a("div",{staticClass:"portfolioItem-images"},[a("div",{staticClass:"portfolioItem-image"},[a("img",{attrs:{src:i("9de2")}})]),a("div",{staticClass:"portfolioItem-image"},[a("img",{attrs:{src:i("d2de")}})])])]),a("div",{staticClass:"portfolioItem-content content-inner"},[a("p",[t._v("Single Page Application на Vue.")]),a("p",[t._v(" Персональный сайт, с моим резюме, портфолио и контактами. ")]),a("p",[t._v(" Проект находится в стадии разработки. Программная часть готовая почти полностью. ")])])]),a("div",{staticClass:"portfolioItem"},[a("div",{staticClass:"portfolioItem-header"},[a("div",{staticClass:"portfolioItem-title"},[t._v("Персональный сайт")]),a("div",{staticClass:"portfolioItem-link"},[a("a",{attrs:{href:"https://www.microsoft.com/uk-ua/",target:"_blank"}},[t._v("Artem Haiterov")])])]),a("div",{staticClass:"portfolioItem-middle"},[a("div",{staticClass:"portfolioItem-images"},[a("div",{staticClass:"portfolioItem-image"},[a("img",{attrs:{src:i("9de2")}})]),a("div",{staticClass:"portfolioItem-image"},[a("img",{attrs:{src:i("d2de")}})])])]),a("div",{staticClass:"portfolioItem-content content-inner"},[a("p",[t._v("Single Page Application на Vue.")]),a("p",[t._v(" Персональный сайт, с моим резюме, портфолио и контактами. ")]),a("p",[t._v(" Проект находится в стадии разработки. Программная часть готовая почти полностью. ")])])]),a("div",{staticClass:"portfolioItem"},[a("div",{staticClass:"portfolioItem-header"},[a("div",{staticClass:"portfolioItem-title"},[t._v("Персональный сайт")]),a("div",{staticClass:"portfolioItem-link"},[a("a",{attrs:{href:"https://artemhaiterov.github.io/ArtemHaiterPS/index.html#/home",target:"_blank"}},[t._v("Artem Haiterov")])])]),a("div",{staticClass:"portfolioItem-middle"},[a("div",{staticClass:"portfolioItem-images"},[a("div",{staticClass:"portfolioItem-image"},[a("img",{attrs:{src:i("9de2")}})]),a("div",{staticClass:"portfolioItem-image"},[a("img",{attrs:{src:i("d2de")}})])])]),a("div",{staticClass:"portfolioItem-content content-inner"},[a("p",[t._v("Single Page Application на Vue.")]),a("p",[t._v(" Персональный сайт, с моим резюме, портфолио и контактами. ")]),a("p",[t._v(" Проект находится в стадии разработки. Программная часть готовая почти полностью. ")])])])])}],$={name:"pvPortfolio"},H=$,E=(i("aa1c"),Object(v["a"])(H,O,S,!1,null,"5ed61375",null)),T=E.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"contact-wrapper"},[i("div",{staticClass:"contactItem"},[i("div",{staticClass:"contactItem-content"},[i("div",{staticClass:"contactItem-content"},[i("a",{attrs:{href:"tel:+380968379499",target:"_blank",rel:"nofollow"}},[t._v(" +380968379499")])])])]),i("div",{staticClass:"contactItem"},[i("div",{staticClass:"contactItem-content"},[i("div",{staticClass:"contactItem-content"},[i("a",{attrs:{href:"https://github.com/ArtemHaiterov",target:"_blank"}},[t._v(" ArtemHaiterov | Github")])])])]),i("div",{staticClass:"contactItem"},[i("div",{staticClass:"contactItem-content"},[i("a",{attrs:{href:"https://www.facebook.com/artem.haiterov",target:"_blank"}},[t._v("Artem Haiterov | Facebook")])])]),i("div",{staticClass:"contactItem"},[i("div",{staticClass:"contactItem-content"},[i("div",{staticClass:"contactItem-content"},[i("a",{attrs:{href:"https://instagram.com/_19artem99?r=nametag",target:"_blank"}},[t._v(" _19artem99 | Instagram")])])])]),i("div",{staticClass:"contactItem"},[i("div",{staticClass:"contactItem-content"},[i("div",{staticClass:"contactItem-content"},[i("a",{attrs:{href:"mailto:artem.haiterov@gmail.com",target:"_blank"}},[t._v("artem.haiterov@gmail.com ")])])])])])])}],J={name:"pvContact"},F=J,G=(i("3cdf"),Object(v["a"])(F,L,V,!1,null,"59f690d8",null)),Q=G.exports,N=[{path:"/home",name:"home",component:x},{path:"/portfolio",name:"portfolio",component:T},{path:"/contact",name:"contact",component:Q}],W=new w["a"]({routes:N});a["a"].use(w["a"]);var q=W,z=i("2f62");a["a"].use(z["a"]);var B=new z["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:q,store:B,render:function(t){return t(k)}}).$mount("#app")},"5fc5":function(t,e,i){},"74da":function(t,e,i){},"9de2":function(t,e,i){t.exports=i.p+"img/first.0da34e47.jpg"},aa1c:function(t,e,i){"use strict";i("01f6")},b9a5:function(t,e,i){"use strict";i("1e1d")},d112:function(t,e,i){"use strict";i("1ea5")},d2de:function(t,e,i){t.exports=i.p+"img/second.dda0469e.jpg"},f179:function(t,e,i){"use strict";i("25bf")}});
//# sourceMappingURL=app.66b4179b.js.map

