(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{324:function(e,r,t){var content=t(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(115).default)("a4c188ea",content,!0,{sourceMap:!1})},339:function(e,r,t){"use strict";t(324)},340:function(e,r,t){var n=t(114)((function(i){return i[1]}));n.push([e.i,"",""]),n.locals={},e.exports=n},347:function(e,r,t){"use strict";t.r(r);t(37);var n=t(10),c=(t(46),t(54),t(48),t(24),{data:function(){return{rankingData:[{name:"John Doe",city:"New York",score:"85"}],currentPage:1,currentPageInput:1,userCount:0,searchQuery:"",rank:[]}},methods:{fetchScore:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t,data,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$supabase.from("users").select("name, city, ".concat(e.$route.params.id,"_score")).order("".concat(e.$route.params.id,"_score"),{ascending:!1}).range(0,14).not("".concat(e.$route.params.id,"_score"),"is",null).not("".concat(e.$route.params.id,"_score"),"eq",0);case 3:if(t=r.sent,data=t.data,n=t.error,e.rankingData=data.map((function(r){return{name:r.name,city:r.city,score:r["".concat(e.$route.params.id,"_score")]}})),e.generateRanking(),!n){r.next=10;break}throw n;case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(0),console.error("Terjadi kesalahan saat mengambil data:",r.t0.message);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})))()},generateRanking:function(){var e=15*(this.currentPage-1)+1;this.rank=Array.from({length:15},(function(r,t){return e+t}))},nextPage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n,c,o,data,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=1,t=e.currentPage+1,n=15*(t-1),c=15*t-1,r.next=7,e.$supabase.from("users").select("name, city, ".concat(e.$route.params.id,"_score")).order("".concat(e.$route.params.id,"_score"),{ascending:!1}).range(n,c).not("".concat(e.$route.params.id,"_score"),"is",null).not("".concat(e.$route.params.id,"_score"),"eq",0);case 7:if(o=r.sent,data=o.data,!(l=o.error)){r.next=12;break}throw l;case 12:e.rankingData=data.map((function(r){return{name:r.name,city:r.city,score:r["".concat(e.$route.params.id,"_score")]}})),e.currentPage=t,e.currentPageInput=t,e.generateRanking(),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(1),console.error("Terjadi kesalahan saat mengambil data:",r.t0.message);case 21:case"end":return r.stop()}}),r,null,[[1,18]])})))()},prevPage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n,c,o,data,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=1,t=e.currentPage-1,n=15*(t-1),c=15*t-1,r.next=7,e.$supabase.from("users").select("name, city,".concat(e.$route.params.id,"_score ")).order("".concat(e.$route.params.id,"_score"),{ascending:!1}).range(n,c).not("".concat(e.$route.params.id,"_score"),"is",null).not("".concat(e.$route.params.id,"_score"),"eq",0);case 7:if(o=r.sent,data=o.data,!(l=o.error)){r.next=12;break}throw l;case 12:e.rankingData=data.map((function(r){return{name:r.name,city:r.city,score:r["".concat(e.$route.params.id,"_score")]}})),e.currentPage=t,e.currentPageInput=t,e.generateRanking(),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(1),console.error("Terjadi kesalahan saat mengambil data:",r.t0.message);case 21:case"end":return r.stop()}}),r,null,[[1,18]])})))()},byInput:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n,c,o,data,l;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.currentPageInput,r.prev=2,n=15*(t-1),c=15*t-1,r.next=7,e.$supabase.from("users").select("name, city,".concat(e.$route.params.id,"_score ")).order("".concat(e.$route.params.id,"_score"),{ascending:!1}).range(n,c).not("".concat(e.$route.params.id,"_score"),"is",null).not("".concat(e.$route.params.id,"_score"),"eq",0);case 7:if(o=r.sent,data=o.data,!(l=o.error)){r.next=12;break}throw l;case 12:e.rankingData=data.map((function(r){return{name:r.name,city:r.city,score:r["".concat(e.$route.params.id,"_score")]}})),e.currentPage=t,e.currentPageInput=t,e.generateRanking(),r.next=21;break;case 18:r.prev=18,r.t0=r.catch(2),console.error("Terjadi kesalahan saat mengambil data:",r.t0.message);case 21:case"end":return r.stop()}}),r,null,[[2,18]])})))()},handleSearch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t,data,n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$supabase.from("users").select("name, city, ".concat(e.$route.params.id,"_score")).ilike("name","%".concat(e.searchQuery,"%")).order("".concat(e.$route.params.id,"_score"),{ascending:!1}).range(0,15).not("".concat(e.$route.params.id,"_score"),"is",null).not("".concat(e.$route.params.id,"_score"),"eq",0);case 2:if(t=r.sent,data=t.data,!(n=t.error)){r.next=8;break}return console.error("Error fetching user:",n),r.abrupt("return",null);case 8:c="".concat(e.$route.params.id,"_score"),e.rankingData=data.map((function(e){return{name:e.name,city:e.city,score:e[c]}})),e.generateRanking();case 11:case"end":return r.stop()}}),r)})))()},getTotalPage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var t,n,c,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$supabase.from("users").select("name",{count:"exact",head:!0}).not("".concat(e.$route.params.id,"_score"),"is",null).not("".concat(e.$route.params.id,"_score"),"eq",0);case 2:if(t=r.sent,n=t.count,!(c=t.error)){r.next=8;break}return console.error("Error fetching counter:",c),r.abrupt("return",null);case 8:o=Math.ceil(n/15),e.userCount=o;case 10:case"end":return r.stop()}}),r)})))()}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.fetchScore(),e.getTotalPage();case 2:case"end":return r.stop()}}),r)})))()}}),o=(t(339),t(53)),component=Object(o.a)(c,(function(){var e=this,r=e._self._c;return r("div",[r("header",{staticClass:"flex justify-between border-b border-black h-20"},[r("div",{staticClass:"relative m-4"},[r("label",{staticClass:"sr-only",attrs:{for:"search"}},[e._v("Search")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"h-10 w-full mr-1 border border-black bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56",attrs:{id:"search",type:"search",placeholder:"Cari nama anda"},domProps:{value:e.searchQuery},on:{change:e.handleSearch,input:function(r){r.target.composing||(e.searchQuery=r.target.value)}}}),e._v(" "),r("button",{staticClass:"absolute inset-y-0 right-0 rounded-full h-fit p-3 text-gray-600 transition hover:text-gray-700",attrs:{type:"button"},on:{click:e.handleSearch}},[r("span",{staticClass:"sr-only"},[e._v("Search")]),e._v(" "),r("svg",{staticClass:"h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"}})])])]),e._v(" "),r("button",{staticClass:"w-8 h-8 m-6 hover:text-gray-700",on:{click:function(r){return e.$router.push("/")}}},[r("svg",{staticClass:"w-full h-full",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])]),e._v(" "),r("div",{staticClass:"mt-6 px-6 min-w-full max-w"},[r("table",{staticClass:"min-w-full text-start"},[e._m(0),e._v(" "),r("tbody",e._l(e.rankingData,(function(t,n){return r("tr",{key:n},[r("td",{staticClass:"border px-4 py-2"},[e._v(e._s(e.rank[n]))]),e._v(" "),r("td",{staticClass:"border px-4 py-2"},[e._v(e._s(t.name))]),e._v(" "),r("td",{staticClass:"border px-4 py-2"},[e._v(e._s(t.city))]),e._v(" "),r("td",{staticClass:"border px-4 py-2"},[e._v(e._s(5*t.score))])])})),0)]),e._v(" "),r("div",{staticClass:"flex justify-center items-center mt-4"},[r("div",[r("button",{staticClass:"px-4 py-2 bg-gray-200 rounded-lg text-gray-700 disabled:opacity-50",attrs:{disabled:1===e.currentPage},on:{click:e.prevPage}},[e._v("\n          Prev\n        ")])]),e._v(" "),r("div",{staticClass:"mx-4"},[r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.currentPageInput,expression:"currentPageInput",modifiers:{number:!0}}],staticClass:"px-4 py-2 text-center w-20 border border-gray-300 rounded-lg",attrs:{type:"number",min:"1",max:1e3},domProps:{value:e.currentPageInput},on:{change:e.byInput,input:function(r){r.target.composing||(e.currentPageInput=e._n(r.target.value))},blur:function(r){return e.$forceUpdate()}}}),e._v(" "),r("span",[e._v(" / "+e._s(e.userCount))])]),e._v(" "),r("div",[r("button",{staticClass:"px-4 py-2 bg-gray-200 rounded-lg text-gray-700 disabled:opacity-50",attrs:{disabled:e.currentPage===e.userCount},on:{click:e.nextPage}},[e._v("\n          Next\n        ")])])])])])}),[function(){var e=this,r=e._self._c;return r("thead",[r("tr",[r("th",{staticClass:"px-4 py-2 w-10"},[e._v("No")]),e._v(" "),r("th",{staticClass:"px-4 py-2"},[e._v("Nama")]),e._v(" "),r("th",{staticClass:"px-4 py-2"},[e._v("Kota")]),e._v(" "),r("th",{staticClass:"px-4 py-2 w-20"},[e._v("Nilai")])])])}],!1,null,null,null);r.default=component.exports}}]);