(window.webpackJsonp=window.webpackJsonp||[]).push([[28,4],{321:function(t,e,r){"use strict";r.r(e);var n={props:{title:String}},l=r(53),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex items-center h-screen sm:p-16 bg-slate-50"},[e("div",{staticClass:"container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md"},[e("svg",{staticClass:"w-40 h-40 dark:text-gray-600",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"}}),t._v(" "),e("rect",{attrs:{width:"176",height:"32",x:"168",y:"320",fill:"currentColor"}}),t._v(" "),e("polygon",{attrs:{fill:"currentColor",points:"210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"}}),t._v(" "),e("polygon",{attrs:{fill:"currentColor",points:"383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"}})]),t._v(" "),e("p",{staticClass:"text-3xl"},[t._v(t._s(t.title))]),t._v(" "),e("a",{staticClass:"px-8 py-3 font-semibold rounded bg-blue-500 text-white",attrs:{rel:"noopener noreferrer",href:"/"}},[t._v("Back to homepage")])])])}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,r){"use strict";r.r(e);var n=r(10),l=(r(54),r(86),r(46),{data:function(){return{showAlert:!0,currentQuestion:0,questions:[{question:"",choices:[{text:"",key:""},{text:"",key:""},{text:"",key:""}],answer:"",explain:""}],userAnswers:[]}},methods:{postScore:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=localStorage.getItem("user_id"),n="".concat(t.$route.params.id,"_score"),(l={})[n]=t.calculateScore,e.next=7,t.$supabase.from("users").update(l).eq("id",r);case 7:if(o=e.sent,o.data,!(c=o.error)){e.next=12;break}throw c;case 12:e.next=18;break;case 14:throw e.prev=14,e.t0=e.catch(0),console.error("Error fetching questions:",e.t0.message),e.t0;case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))()},fetchQuestions:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,data,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$supabase.from("".concat(t.$route.params.id)).select("*");case 3:if(r=e.sent,data=r.data,!(n=r.error)){e.next=8;break}throw n;case 8:l=data.map((function(t){return{question:t.question,choices:[{text:t.a,key:"a"},{text:t.b,key:"b"},{text:t.c,key:"c"},{text:t.d,key:"d"},{text:t.e,key:"e"}],answer:t.answer,explain:t.explain||"-"}})),t.questions=l,e.next=16;break;case 12:throw e.prev=12,e.t0=e.catch(0),console.error("Error fetching questions:",e.t0.message),e.t0;case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()},getUserAnswers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("user_id"),n=t.$route.params.id,e.next=4,t.$supabase.from("users").select(n).eq("id",r).single();case 4:l=e.sent,data=l.data,l.error,t.userAnswers=data[n];case 8:case"end":return e.stop()}}),e)})))()},hideAlert:function(){var t=this;setTimeout((function(){t.showAlert=!1}),1e4)},handleNavigate:function(t){this.currentQuestion=t},handleNext:function(){this.currentQuestion!==this.questions.length-1&&this.currentQuestion++},handlePrev:function(){0!==this.currentQuestion&&this.currentQuestion--}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.hideAlert(),e.next=3,t.fetchQuestions();case 3:return e.next=5,t.getUserAnswers();case 5:return e.next=7,t.postScore();case 7:case"end":return e.stop()}}),e)})))()},computed:{calculateScore:function(){var t=this.questions.map((function(t){return t.answer})),e=this.userAnswers;if(!e)return 0;for(var r=0,i=0;i<t.length;i++)t[i]===e[i]&&r++;return r}}}),o=r(53),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",[t.userAnswers?t._e():e("empty-page",{attrs:{title:"Anda belum mengerjakan tryout ini!"}}),t._v(" "),t.userAnswers?e("div",{staticClass:"relative"},[e("div",{staticClass:"fixed top-0 left-0 right-0 bg-white z-10"},[e("header",{staticClass:"flex justify-between border-b border-black h-20"},[e("h1",{staticClass:"text-2xl m-2 md:m-6 font-medium"},[t._v("\n          "+t._s(this.$route.params.id)+"\n        ")]),t._v(" "),e("button",{staticClass:"w-8 h-8 m-6 hover:text-gray-700",on:{click:function(e){return t.$router.push("/")}}},[e("svg",{staticClass:"w-full h-full",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"}})])])])]),t._v(" "),e("div",{staticClass:"flex flex-col md:flex-row md:h-screen"},[e("div",{staticClass:"flex flex-col md:w-1/5 border-r border-black"},[e("div",{staticClass:"border-b border-black mt-20"},[t._m(0),t._v(" "),e("div",{staticClass:"flex justify-between mx-6 my-4"},[e("div",{staticClass:"text-center p-3 w-fit"},[e("h1",{staticClass:"text-lg"},[t._v("Jumlah Soal")]),t._v(" "),e("h1",{staticClass:"text-3xl font-medium"},[t._v(t._s(t.questions.length))])]),t._v(" "),e("div",{staticClass:"text-center p-3 w-fit"},[e("h1",{staticClass:"text-lg"},[t._v("Jawaban Benar")]),t._v(" "),e("h1",{staticClass:"text-3xl font-medium"},[t._v(t._s(t.calculateScore))])])])]),t._v(" "),e("div",{staticClass:"border-b border-black"},[e("div",{staticClass:"mx-auto my-6 text-center"},[e("h1",{staticClass:"text-xl mb-1"},[t._v("Nilai")]),t._v(" "),e("h1",{staticClass:"text-5xl font-medium"},[t._v(t._s(5*t.calculateScore))])])]),t._v(" "),e("div",{staticClass:"w-screen md:w-full navigation overflow-auto flex md:grid md:grid-cols-2 lg:grid-cols-5 gap-y-4 p-4"},t._l(t.questions,(function(r,n){return e("div",{key:n,staticClass:"text-center border border-black cursor-pointer py-2 flex-shrink-0 w-10 h-10 mr-2",class:{"text-white bg-gray-500":t.currentQuestion===n},on:{click:function(e){return t.handleNavigate(n)}}},[t._v("\n            "+t._s(n+1)+"\n          ")])})),0)]),t._v(" "),e("div",{staticClass:"md:w-4/5 md:mt-20"},[t._m(1),t._v(" "),e("div",{staticClass:"p-5 md:p-10"},[e("h1",{staticClass:"text-3xl font-semibold mb-2 md:mb-6"},[t._v("\n            Soal "+t._s(t.currentQuestion+1)+"\n          ")]),t._v(" "),e("p",{staticClass:"mb-4 text-xl"},[t._v("\n            "+t._s(t.questions[t.currentQuestion].question)+"\n          ")]),t._v(" "),e("div",{staticClass:"flex flex-col"},[e("ul",t._l(t.questions[t.currentQuestion].choices,(function(r,n){return e("li",{key:n,staticClass:"mb-3"},[e("button",{staticClass:"flex flex-row items-center",attrs:{disabled:""}},[e("div",{staticClass:"text-center border border-black pt-1 flex-shrink-0 w-9 h-9 mr-3",class:{"bg-gray-500":r.key===t.userAnswers[t.currentQuestion]}},[t._v("\n                    "+t._s(r.key)+"\n                  ")]),t._v(" "),e("p",{staticClass:"text-start"},[t._v(t._s(r.text))]),t._v(" "),r.key===t.questions[t.currentQuestion].answer?e("span",{staticClass:"ml-2 text-green-500"},[e("svg",{staticClass:"w-8 h-8",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z","clip-rule":"evenodd"}})])]):t._e()])])})),0),t._v(" "),t.userAnswers[t.currentQuestion]===t.questions[t.currentQuestion].answer?e("div",{staticClass:"flex w-fit p-2 bg-gray-200 text-green-600"},[e("span",{staticClass:"mr-2"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z","clip-rule":"evenodd"}})])]),t._v(" "),e("h1",[t._v("Jawaban Benar")])]):e("div",{staticClass:"flex w-fit p-2 bg-gray-200 text-red-600"},[e("span",{staticClass:"mr-2"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z","clip-rule":"evenodd"}})])]),t._v(" "),e("h1",[t._v("Jawaban Salah")])]),t._v(" "),e("h1",{staticClass:"font-semibold my-2"},[t._v("Pembahasan:")]),t._v(" "),e("p",[t._v(t._s(t.questions[t.currentQuestion].explain))])]),t._v(" "),e("div",{staticClass:"border-b my-4 border-black"}),t._v(" "),e("div",{staticClass:"justify-center md:justify-start mt-4 flex flex-row"},[e("button",{staticClass:"flex flex-row items-center font-medium mr-4 px-2 py-1",class:{"text-gray-300":0===t.currentQuestion},attrs:{disabled:0===t.currentQuestion},on:{click:t.handlePrev}},[e("span",{staticClass:"mr-2 border rounded-full p-1"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z","clip-rule":"evenodd"}})])]),t._v("\n              Sebelumnya\n            ")]),t._v(" "),e("button",{staticClass:"flex flex-row items-center font-medium px-2 py-1",class:{"text-gray-300":t.currentQuestion===t.questions.length-1},attrs:{disabled:t.currentQuestion===t.questions.length-1},on:{click:t.handleNext}},[t._v("\n              Selanjutnya\n              "),e("span",{staticClass:"ml-2 border rounded-full p-1"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z","clip-rule":"evenodd"}})])])])])])])])]):t._e()],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"hidden md:block ml-4"},[t("img",{staticClass:"w-auto h-20",attrs:{src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"md:hidden block"},[t("img",{staticClass:"w-auto h-20",attrs:{src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png",alt:""}})])}],!1,null,"6d51f933",null);e.default=component.exports;installComponents(component,{EmptyPage:r(321).default})}}]);