(this["webpackJsonpmis-libros"]=this["webpackJsonpmis-libros"]||[]).push([[0],{28:function(e,t,a){"use strict";a(68);var n=a(1);t.a=function(){return Object(n.jsx)("div",{className:"loader"})}},43:function(e,t,a){},44:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),s=a(10),u=a(16),i=a(30),l=a(31),b=a(3),d={books:[],loading:!0,search:!1,query:"",page:0,numberPage:1,categories:[],categ:!1,idCateg:0,categName:"",bookDetail:{},language:""};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"QUERY":return Object(b.a)(Object(b.a)({},e),{},{loading:t.payload});case"GET-BOOKS":var a=t.payload;return a?Object(b.a)(Object(b.a)({},e),{},{books:t.payload,loading:t.load,search:t.search,page:t.pagina,numberPage:t.nroPag,categ:t.categ,bookDetail:t.bookDetail,language:t.language}):(alert("No hay mas libros",e.books),Object(b.a)({},e));case"SEARCH-BOOK":return t.payload.length>0?Object(b.a)(Object(b.a)({},e),{},{books:t.payload,loading:t.load,search:t.search,query:t.query}):(alert("no encontrados"),Object(b.a)(Object(b.a)({},e),{},{loading:t.load}));case"GET-CATEGORIES":return Object(b.a)(Object(b.a)({},e),{},{categories:t.payload});case"GET-BY-CATEGORY":return Object(b.a)(Object(b.a)({},e),{},{books:t.payload,categ:t.categ,idCateg:t.id,categName:t.categName,loading:t.load,search:t.search,page:t.pagina,numberPage:t.nroPag,bookDetail:t.bookDetail,language:t.language});case"GET-BOOK-DETAIL":case"EXIT-DETAIL":return Object(b.a)(Object(b.a)({},e),{},{bookDetail:t.payload});case"CHANGE-LANGUAGE":return Object(b.a)(Object(b.a)({},e),{},{language:t.payload});default:return e}},j=Object(u.createStore)(p,Object(i.composeWithDevTools)(Object(u.applyMiddleware)(l.a))),g=(a(43),a(32)),O=a(2),f=(a(44),a(8)),h=a(7),v=(a(64),a(1));var m=function(){var e=Object(s.b)(),t=Object(n.useState)(""),a=Object(f.a)(t,2),r=a[0],c=a[1];return Object(v.jsxs)("div",{className:"containerSearch",children:[Object(v.jsxs)("form",{className:"formSearch",onSubmit:function(t){return function(t){t.preventDefault(),e(Object(h.f)(!0)),e(Object(h.g)(r)),c("")}(t)},children:[Object(v.jsx)("input",{className:"inputSearch",type:"text",placeholder:"Titulo o Autor",value:r,onChange:function(e){return function(e){e.preventDefault(),c(e.target.value)}(e)}}),Object(v.jsx)("input",{className:"buttonSearch",type:"submit",value:"Buscar"})]}),Object(v.jsx)("button",{className:"buttonSearch",onClick:function(){return e(Object(h.f)(!0)),void e(Object(h.c)(0,1,"all"))},children:"Todos"})]})},y=(a(66),a.p+"static/media/libro1.f4e529df.gif");var x=function(){return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)("img",{className:"logo",src:y,alt:""}),Object(v.jsx)("div",{className:"Title",children:"Libros Gratuitos"}),Object(v.jsx)("div",{className:"search",children:Object(v.jsx)(m,{})})]})};a(67);var E=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.categories})),a=Object(s.c)((function(e){return e.language}));return Object(n.useEffect)((function(){e(Object(h.e)())}),[e]),Object(v.jsxs)("div",{className:"ul",children:[Object(v.jsx)("p",{className:"liTitle",children:"CATEGORIAS"}),t.map((function(t){return Object(v.jsx)("p",{className:"li",name:t.nicename,value:t.nicename,onClick:function(){return n=t.category_id,r=t.name,e(Object(h.f)(!0)),void e(Object(h.d)(n,r,0,1,a));var n,r},children:t.name},t.name)}))]})},k=a(28),w=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,73))}));var N=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(x,{}),Object(v.jsx)(n.Suspense,{fallback:Object(v.jsx)(k.a,{}),children:Object(v.jsxs)("div",{className:"space",children:[Object(v.jsx)(E,{}),Object(v.jsx)(w,{className:"lista"})]})})]})};var T=function(){return Object(v.jsx)(g.a,{basename:"/LibrosGratuitos",children:Object(v.jsx)(O.c,{children:Object(v.jsx)(O.a,{path:"/",element:Object(v.jsx)(N,{})})})})};o.a.render(Object(v.jsxs)(s.a,{store:j,children:[Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(T,{})}),","]}),document.getElementById("root"))},7:function(e,t,a){"use strict";a.d(t,"f",(function(){return u})),a.d(t,"c",(function(){return i})),a.d(t,"g",(function(){return l})),a.d(t,"e",(function(){return b})),a.d(t,"d",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return j}));var n=a(9),r=a.n(n),c=a(12),o=a(11),s=a.n(o);function u(e){return{type:"QUERY",payload:e}}function i(e,t,a){return function(){var n=Object(c.a)(r.a.mark((function n(c){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.get("https://www.etnassoft.com/api/v1/get/?lang=".concat(a,"&results_range=").concat(e,"&order=newest"));case 3:if(!(o=n.sent).data){n.next=6;break}return n.abrupt("return",c({type:"GET-BOOKS",payload:o.data,load:!1,search:!1,pagina:e,nroPag:t,categ:!1,bookDetail:{},language:a}));case 6:n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),alert("No se pudieron obtener los datos",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}function l(e){return function(){var t=Object(c.a)(r.a.mark((function t(a){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get("https://www.etnassoft.com/api/v1/get/?book_title=".concat(e));case 3:if(!((n=t.sent).data.length>0)){t.next=8;break}return t.abrupt("return",a({type:"SEARCH-BOOK",payload:n.data,load:!1,search:!0,query:e}));case 8:return t.next=10,s.a.get("https://www.etnassoft.com/api/v1/get/?book_author=".concat(e));case 10:return c=t.sent,t.abrupt("return",a({type:"SEARCH-BOOK",payload:c.data,load:!1,search:!0,query:e}));case 12:t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.log("No se pudo obtener la query",t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e){return t.apply(this,arguments)}}()}function b(){return function(){var e=Object(c.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://www.etnassoft.com/api/v1/get/?get_categories=all");case 3:return a=e.sent,e.abrupt("return",t({type:"GET-CATEGORIES",payload:a.data}));case 7:e.prev=7,e.t0=e.catch(0),console.log("No se obtuvieron las categor\xedas",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}function d(e,t,a,n,o){return function(){var u=Object(c.a)(r.a.mark((function c(u){var i;return r.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,s.a.get("https://www.etnassoft.com/api/v1/get/?category_id=".concat(e,"&lang=").concat(o,"&results_range=").concat(a));case 3:return i=r.sent,r.abrupt("return",u({type:"GET-BY-CATEGORY",payload:i.data,categ:!0,id:e,categName:t,load:!1,search:!1,pagina:a,nroPag:n,bookDetail:{},language:o}));case 7:r.prev=7,r.t0=r.catch(0),console.log("No se obtuvieron datos",r.t0);case 10:case"end":return r.stop()}}),c,null,[[0,7]])})));return function(e){return u.apply(this,arguments)}}()}function p(e){return{type:"GET-BOOK-DETAIL",payload:e}}function j(){return{type:"EXIT-DETAIL",payload:{}}}}},[[69,1,2]]]);
//# sourceMappingURL=main.08f0f34b.chunk.js.map