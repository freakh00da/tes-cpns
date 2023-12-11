(window.webpackJsonp=window.webpackJsonp||[]).push([[24,3,7,8,9,10,11,12,17,18,20],{314:function(t,e,n){"use strict";n.r(e);var r={props:{title:String}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("span",{staticClass:"flex items-center my-6"},[e("span",{staticClass:"h-px flex-1 bg-black"}),t._v(" "),e("span",{staticClass:"shrink-0 px-6"},[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"h-px flex-1 bg-black"})])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{access_code:""}},props:{wrongAlert:Boolean},methods:{submitBtn:function(){this.$emit("submit-btn",this.access_code)},cancelBtn:function(){this.$emit("cancel-btn")}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative z-10",attrs:{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),t._v(" "),e("div",{staticClass:"fixed inset-0 z-10 w-screen overflow-y-auto"},[e("div",{staticClass:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},[e("div",{staticClass:"my-14 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},[e("div",{staticClass:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},[e("div",{staticClass:"sm:flex sm:items-start"},[e("div",{staticClass:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[e("svg",{staticClass:"h-6 w-6 text-red-600",attrs:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}})])]),t._v(" "),e("div",{staticClass:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},[e("h3",{staticClass:"text-base font-semibold leading-6 text-gray-900",attrs:{id:"modal-title"}},[t._v("\n                Masukan Kode Akses!\n              ")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.access_code,expression:"access_code"}],staticClass:"mt-1 p-3 w-full rounded-md shadow-sm sm:text-sm border-2 border-black",attrs:{type:"text",id:"access_code",placeholder:"Kode Akses"},domProps:{value:t.access_code},on:{input:function(e){e.target.composing||(t.access_code=e.target.value)}}}),t._v(" "),t.wrongAlert?e("p",{staticClass:"text-red-500"},[t._v("\n                  Kode Akses Salah!\n                ")]):t._e()])])])]),t._v(" "),e("div",{staticClass:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},[e("button",{staticClass:"inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",attrs:{type:"submit"},on:{click:t.submitBtn}},[t._v("\n            Submit\n          ")]),t._v(" "),e("button",{staticClass:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",attrs:{type:"cancel"},on:{click:t.cancelBtn}},[t._v("\n            Cancel\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,n){var content=n(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(115).default)("35149f2c",content,!0,{sourceMap:!1})},325:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(46),{components:{TheDivider:n(314).default},data:function(){return{userCount:0,tryoutCount:0}},methods:{countUsers:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("users").select("name");case 2:if(n=e.sent,data=n.data,!(r=n.error)){e.next=8;break}return console.error("Error fetching counter:",r),e.abrupt("return",null);case 8:o=data.length,t.userCount=o+543;case 10:case"end":return e.stop()}}),e)})))()},countTryout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("tryout-list").select("id");case 2:if(n=e.sent,data=n.data,!(r=n.error)){e.next=8;break}return console.error("Error fetching counter:",r),e.abrupt("return",null);case 8:o=data.length,t.tryoutCount=o;case 10:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$emit("dashboard-mounted"),e.next=3,t.countUsers();case 3:return e.next=5,t.countTryout();case 5:case"end":return e.stop()}}),e)})))()}}),l=n(53),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("section",{staticClass:"bg-white"},[e("div",{staticClass:"mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8"},[e("div",{staticClass:"flex flex-col lg:flex-row"},[t._m(0),t._v(" "),e("div",{staticClass:"border-2 rounded-xl mt-6 xl:mt-0 p-4 text-start"},[e("h1",{staticClass:"text-2xl font-semibold"},[t._v("Total User: "+t._s(t.userCount))]),t._v(" "),e("h1",{staticClass:"text-2xl font-semibold"},[t._v("\n            Tryout Tersedia: "+t._s(t.tryoutCount)+"\n          ")])])]),t._v(" "),t._m(1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-4xl lg:mr-4 border-2 rounded-xl p-4 text-start"},[e("h2",{staticClass:"text-3xl font-bold text-gray-900 sm:text-4xl"},[t._v("\n            Welcome to Jago CPNS\n          ")]),t._v(" "),e("p",{staticClass:"mt-4 text-gray-500 sm:text-xl"},[t._v("\n            Jago CPNS adalah Website Layanan belajar dan tryout CPNS untuk\n            persiapan tes CPNS. di Jago Cpns Juga tersedia informasi, materi,\n            soal dan tryout Online CPNS Untuk mempersiapkan diri dalam\n            menghadapi Seleksi CPNS. Soal soal dirancang oleh Tim Khusus Yang\n            disesuaikan Dengan Kisi Kisi terbaru\n          ")]),t._v(" "),e("img",{attrs:{src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col lg:flex-row"},[e("div",{staticClass:"mt-8 sm:mt-12 p-4 border-2 rounded-xl text-lg font-medium text-gray-500"},[e("h1",{staticClass:"mb-2"},[t._v("\n            Bantu kami mengembangkan website ini melalui QRIS dibawah ini\n          ")]),t._v(" "),e("img",{staticClass:"h-40 w-40",attrs:{src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/qris?t=2023-11-29T08%3A25%3A58.743Z",alt:""}})]),t._v(" "),e("div",{staticClass:"mt-8 lg:ml-4 sm:mt-12 p-4 border-2 rounded-xl text-lg font-medium text-gray-500"},[e("h1",{staticClass:"mb-2"},[t._v("Contact Us")]),t._v(" "),e("h2",[t._v("\n            Grup Diskusi Telegram :\n            "),e("a",{staticClass:"text-blue-500 underline",attrs:{href:"https://t.me/JagoCpnsTryout"}},[t._v("telegram group")])]),t._v(" "),e("h2",[t._v("\n            Informasi & Aduan :\n            "),e("a",{staticClass:"text-blue-500 underline",attrs:{href:"https://t.me/jagocpnsto"}},[t._v("telegram channel")])])])])}],!1,null,null,null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(46),n(314)),l=n(317),c={components:{TheDivider:o.default,ModalAlertVue:l.default},data:function(){return{selectedData:"",showModal:!1,wrongAlert:!1}},props:{tryouts:Array},methods:{getCode:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("tryout-list").select("password").eq("url",t.selectedData).single();case 2:return n=e.sent,data=n.data,n.error,e.abrupt("return",data.password);case 6:case"end":return e.stop()}}),e)})))()},handleSubmit:function(data){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getCode();case 2:e.sent===data?(localStorage.setItem("token",data),n="/tryout/".concat(t.selectedData),t.$router.push(n)):t.wrongAlert=!0;case 4:case"end":return e.stop()}}),e)})))()},handleSelect:function(t){this.showModal=!0,this.selectedData=t},handleCancel:function(){this.showModal=!1},handleAccept:function(){}},mounted:function(){this.$emit("tryout-mounted")}},d=n(53),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[t.showModal?e("modal-alert",{attrs:{wrongAlert:t.wrongAlert},on:{"submit-btn":t.handleSubmit,"cancel-btn":t.handleCancel}}):t._e(),t._v(" "),e("div",{staticClass:"w-full"},[e("div",{staticClass:"w-full py-16"},[e("div",{staticClass:"lg:flex flex-row w-full justify-start"},[e("div",{staticClass:"grid grid-cols lg:grid-cols-4 gap-6 p-6"},t._l(t.tryouts,(function(n,r){return e("div",{key:r,staticClass:"border lg:w-4/6 p-4 shadow-md rounded-md"},[e("div",{staticClass:"flex flex-row items-center justify-between"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"h-6 w-6 mr-2"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"{1.5}",stroke:"currentColor",className:"w-6 h-6"}},[e("path",{attrs:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"}})])]),t._v(" "),e("span",{staticClass:"text-xl font-medium"},[t._v(t._s(n.title))])])]),t._v(" "),e("div",[e("p",[t._v("Date: "+t._s(n.date))]),t._v(" "),e("p",[t._v("Type: "+t._s(n.type))])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("button",{staticClass:"middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",on:{click:function(e){return t.handleSelect(n.url)}}},[t._v("\n                Mulai\n              ")])])])})),0)])])])],1)}),[],!1,null,"4f6eedac",null);e.default=component.exports;installComponents(component,{ModalAlert:n(317).default})},327:function(t,e,n){"use strict";n.r(e);var r={props:{tryouts:Array},methods:{handleSelect:function(t){var e="rank/".concat(t);this.$router.push(e)}},mounted:function(){this.$emit("rank-mounted")}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("div",{staticClass:"w-full py-16"},[e("div",{staticClass:"lg:flex flex-row w-full justify-start"},[e("div",{staticClass:"grid grid-cols lg:grid-cols-4 gap-6 p-6"},t._l(t.tryouts,(function(n,r){return e("div",{key:r,staticClass:"border lg:w-4/6 p-4 shadow-md rounded-md"},[e("div",{staticClass:"flex flex-row items-center justify-between"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"h-6 w-6 mr-2"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"{1.5}",stroke:"currentColor",className:"w-6 h-6"}},[e("path",{attrs:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"}})])]),t._v(" "),e("span",{staticClass:"text-xl font-medium"},[t._v(t._s(n.title))])])]),t._v(" "),e("div",[e("p",[t._v("Date: "+t._s(n.date))]),t._v(" "),e("p",[t._v("Type: "+t._s(n.type))])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("button",{staticClass:"middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",on:{click:function(e){return t.handleSelect(n.url)}}},[t._v("\n              lihat Ranking\n            ")])])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},328:function(t,e,n){"use strict";n.r(e);var r={props:{userphone:String,usercity:String,username:String,useremail:String},mounted:function(){this.$emit("profile-mounted")}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"overflow-hidden shadow rounded-lg w-full mt-16"},[t._m(0),t._v(" "),e("div",{staticClass:"border-t border-gray-200 px-4 py-5 sm:p-0"},[e("dl",{staticClass:"sm:divide-y sm:divide-gray-200"},[e("div",{staticClass:"py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[e("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("Nama Lengkap")]),t._v(" "),e("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n          "+t._s(t.username)+"\n        ")])]),t._v(" "),e("div",{staticClass:"py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[e("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("Email address")]),t._v(" "),e("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n          "+t._s(t.useremail)+"\n        ")])]),t._v(" "),e("div",{staticClass:"py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[e("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("Nomer Hp")]),t._v(" "),e("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n          "+t._s(t.userphone)+"\n        ")])]),t._v(" "),e("div",{staticClass:"py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"},[e("dt",{staticClass:"text-sm font-medium text-gray-500"},[t._v("Kota")]),t._v(" "),e("dd",{staticClass:"mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"},[t._v("\n          "+t._s(t.usercity)+"\n        ")])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-4 py-5 sm:px-6"},[e("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[t._v("User Profile")]),t._v(" "),e("p",{staticClass:"mt-1 max-w-2xl text-sm text-gray-500"},[t._v("\n      Data nama dan kota pada profil adalah data yang akan ditampilkan pada\n      rank\n    ")])])}],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);var r=n(314),o={data:function(){return{components:{TheDivider:r.default}}},props:{tryouts:Array},methods:{isTryout:function(){},handleSelect:function(t){var e="score/".concat(t);this.$router.push(e)}},mounted:function(){this.$emit("score-mounted")}},l=n(53),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("div",{staticClass:"w-full py-16"},[e("div",{staticClass:"lg:flex flex-row w-full justify-start"},[e("div",{staticClass:"grid grid-cols lg:grid-cols-4 gap-6 p-6"},t._l(t.tryouts,(function(n,r){return e("div",{key:r,staticClass:"border lg:w-4/6 p-4 shadow-md rounded-md"},[e("div",{staticClass:"flex flex-row items-center justify-between"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"h-6 w-6 mr-2"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"{1.5}",stroke:"currentColor",className:"w-6 h-6"}},[e("path",{attrs:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"}})])]),t._v(" "),e("span",{staticClass:"text-xl font-medium"},[t._v(t._s(n.title))])])]),t._v(" "),e("div",[e("p",[t._v("Date: "+t._s(n.date))]),t._v(" "),e("p",[t._v("Type: "+t._s(n.type))])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("button",{staticClass:"middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",on:{click:function(e){return t.handleSelect(n.url)}}},[t._v("\n              lihat nilai\n            ")])])])})),0)])])])}),[],!1,null,"1f354226",null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r={props:{username:String,useremail:String,active:String},methods:{showHome:function(){this.$emit("showContent","TheDashboard")},showTryout:function(){this.$emit("showContent","TheTryout")},showNilai:function(){this.$emit("showContent","TheScore")},showRank:function(){this.$emit("showContent","TheRank")},showProfile:function(){this.$emit("showContent","TheProfile")}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex h-screen flex-col justify-between border-e w-1/6 bg-gray-50 shadow-md"},[e("div",{staticClass:"py-6"},[t._m(0),t._v(" "),e("ul",{staticClass:"mt-6 space-y-1"},[e("li",[e("button",{staticClass:"flex w-full px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700",class:{"bg-gray-200":"TheDashboard"===t.active},on:{click:t.showHome}},[e("span",{staticClass:"mr-2"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{d:"M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"}}),t._v(" "),e("path",{attrs:{d:"M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"}})])]),t._v("\n          Home\n        ")])]),t._v(" "),e("li",[e("button",{staticClass:"flex w-full px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700",class:{"bg-gray-200":"TheTryout"===t.active},on:{click:t.showTryout}},[e("span",{staticClass:"mr-2"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z","clip-rule":"evenodd"}})])]),t._v("\n          Tryout\n        ")])]),t._v(" "),e("li",[e("button",{staticClass:"flex w-full px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700",class:{"bg-gray-200":"TheScore"===t.active},on:{click:t.showNilai}},[e("span",{staticClass:"mr-2"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{d:"M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"}}),t._v(" "),e("path",{attrs:{d:"M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"}}),t._v(" "),e("path",{attrs:{d:"M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"}})])]),t._v("\n          Nilai\n        ")])]),t._v(" "),e("li",[e("button",{staticClass:"flex w-full px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700",class:{"bg-gray-200":"TheRank"===t.active},on:{click:t.showRank}},[e("span",{staticClass:"mr-2"},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z","clip-rule":"evenodd"}})])]),t._v("\n          Rank\n        ")])])])]),t._v(" "),e("div",{staticClass:"sticky inset-x-0 bottom-0 border-t border-gray-100"},[e("button",{staticClass:"flex items-center w-full text-start gap-2 bg-white p-4 hover:bg-gray-50",on:{click:t.showProfile}},[e("div",[e("p",{staticClass:"text-xs"},[e("strong",{staticClass:"block font-medium"},[t._v(t._s(t.username))]),t._v(" "),e("span",[t._v(" "+t._s(t.useremail)+" ")])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"mx-4 h-20 place-content-center"},[t("a",{attrs:{href:"/"}},[t("img",{staticClass:"max-h-full",attrs:{src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png",alt:"logo"}})])])}],!1,null,null,null);e.default=component.exports},331:function(t,e,n){"use strict";n.r(e);var r={props:{title:String,username:String,useremail:String},data:function(){return{isDropdownOpen:!1}},methods:{toggleDropdown:function(){this.isDropdownOpen=!this.isDropdownOpen},handleLogout:function(){localStorage.clear(),this.$router.push("/auth/signin")},handleProfile:function(){this.$emit("profile-clicked")}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"bg-gray-50 h-fit fixed top-0 left-0 right-0 z-10"},[e("div",{staticClass:"mx-auto max-w-screen-xl px-4 py-5 sm:px-6 lg:px-8"},[e("div",{staticClass:"flex items-center justify-center sm:justify-between sm:gap-4"},[e("div",{staticClass:"block lg:hidden mr-4"},[e("nuxt-link",{attrs:{to:"/"}},[e("div",{staticClass:"w-20 h-auto"},[e("img",{attrs:{src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png",alt:""}})])])],1),t._v(" "),e("div",[e("h1",{staticClass:"text-xl lg:text-2xl font-bold"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"flex flex-1 items-center justify-between gap-8 sm:justify-end"},[e("div",{staticClass:"flex gap-4"}),t._v(" "),e("div",{staticClass:"relative ml-4",on:{click:t.toggleDropdown}},[e("button",{staticClass:"group flex shrink-0 items-center rounded-lg transition",attrs:{type:"button"}},[e("span",{staticClass:"sr-only"},[t._v("Menu")]),t._v(" "),e("svg",{staticClass:"w-9 h-9",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z","clip-rule":"evenodd"}})]),t._v(" "),e("p",{staticClass:"ms-2 hidden text-left text-xs sm:block"},[e("strong",{staticClass:"block font-medium"},[t._v(t._s(t.username))]),t._v(" "),e("span",{staticClass:"text-gray-500"},[t._v(t._s(t.useremail))])]),t._v(" "),e("svg",{staticClass:"ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t._v(" "),t.isDropdownOpen?e("div",{staticClass:"origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"},[e("div",{staticClass:"py-1"},[e("button",{staticClass:"w-full text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",attrs:{type:"button"},on:{click:t.handleProfile}},[t._v("\n                Profil\n              ")]),t._v(" "),e("button",{staticClass:"w-full text-start block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",attrs:{type:"button"},on:{click:t.handleLogout}},[t._v("\n                Logout\n              ")])])]):t._e()])])])])])}),[],!1,null,null,null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);var r={methods:{showHome:function(){this.$emit("showContent","TheDashboard")},showTryout:function(){this.$emit("showContent","TheTryout")},showScore:function(){this.$emit("showContent","TheScore")},showRank:function(){this.$emit("showContent","TheRank")},showProfile:function(){this.$emit("showContent","TheProfile")}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"fixed bottom-0 left-0 right-0 bg-gray-100 flex justify-around py-2 z-10"},[e("button",{staticClass:"focus:outline-none flex flex-col items-center",on:{click:t.showHome}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{d:"M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"}}),t._v(" "),e("path",{attrs:{d:"M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"}})]),t._v("\n\n    Home\n  ")]),t._v(" "),e("button",{staticClass:"focus:outline-none flex flex-col items-center",on:{click:t.showTryout}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.5 3.798v5.02a3 3 0 01-.879 2.121l-2.377 2.377a9.845 9.845 0 015.091 1.013 8.315 8.315 0 005.713.636l.285-.071-3.954-3.955a3 3 0 01-.879-2.121v-5.02a23.614 23.614 0 00-3 0zm4.5.138a.75.75 0 00.093-1.495A24.837 24.837 0 0012 2.25a25.048 25.048 0 00-3.093.191A.75.75 0 009 3.936v4.882a1.5 1.5 0 01-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0115 8.818V3.936z","clip-rule":"evenodd"}})]),t._v("\n\n    Tryout\n  ")]),t._v(" "),e("button",{staticClass:"focus:outline-none flex flex-col items-center",on:{click:t.showScore}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{d:"M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z"}}),t._v(" "),e("path",{attrs:{d:"M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z"}}),t._v(" "),e("path",{attrs:{d:"M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z"}})]),t._v("\n\n    Nilai\n  ")]),t._v(" "),e("button",{staticClass:"focus:outline-none flex flex-col items-center",on:{click:t.showRank}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z","clip-rule":"evenodd"}})]),t._v("\n\n    Rank\n  ")]),t._v(" "),e("button",{staticClass:"focus:outline-none flex flex-col items-center",on:{click:t.showProfile}},[e("svg",{staticClass:"w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z","clip-rule":"evenodd"}})]),t._v("\n\n    Profile\n  ")])])}),[],!1,null,"33a6a644",null);e.default=component.exports},335:function(t,e,n){"use strict";n(323)},336:function(t,e,n){var r=n(114)((function(i){return i[1]}));r.push([t.i,"@keyframes slideInFromLeft-50fb87ae{0%{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes slideInFromBottom-50fb87ae{0%{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}.animate-slideInFromLeft[data-v-50fb87ae]{animation:slideInFromLeft-50fb87ae .5s ease-in-out}.animate-slideInFromBottom[data-v-50fb87ae]{animation:slideInFromBottom-50fb87ae .5s ease-in-out}",""]),r.locals={},t.exports=r},346:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(46),n(86),n(37),n(54),n(325)),l=n(326),c=n(327),d=n(328),m=n(329),v={middleware:"auth",components:{TheDashboard:o.default,TheTryout:l.default,TheRank:c.default,TheScore:m.default,TheProfile:d.default},data:function(){return{userphone:"",usercity:"",username:"",useremail:"",showSidebar:!0,currentContent:"TheDashboard",showContent:!1,tryouts:[]}},methods:{updateTransition:function(){var t=this;this.showContent=!0,setTimeout((function(){t.showContent=!1}),600)},fetchUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=localStorage.getItem("user_id"),e.next=3,t.$supabase.from("users").select("*").eq("id",n).single();case 3:if(r=e.sent,data=r.data,!(o=r.error)){e.next=9;break}return console.error("Error fetching user:",o),e.abrupt("return",null);case 9:t.usercity=data.city,t.userphone=data.phone,t.username=data.name,t.useremail=data.email;case 13:case"end":return e.stop()}}),e)})))()},getTryoutList:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$supabase.from("tryout-list").select("*");case 2:n=e.sent,data=n.data,n.error,r=data.map((function(t){return{title:t.title,date:t.date,type:t.type,url:t.url}})),t.tryouts=r;case 7:case"end":return e.stop()}}),e)})))()},handleProfile:function(){this.currentContent="TheProfile"},toggleSidebar:function(){this.showSidebar=!this.showSidebar},updateContent:function(content){this.currentContent=content}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchUser();case 2:return e.next=4,t.getTryoutList();case 4:case"end":return e.stop()}}),e)})))()},computed:{titleContent:function(){return"TheDashboard"===this.currentContent?"Dashboard":"TheTryout"===this.currentContent?"Tryout":"TheRank"===this.currentContent?"Rank":"TheScore"===this.currentContent?"Nilai":"TheProfile"===this.currentContent?"Profile":"Dashboard"}}},h=(n(335),n(53)),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-screen w-screen overflow-x-hidden lg:flex justify-end"},[t.showSidebar?e("the-sidebar",{staticClass:"fixed z-20 left-0 hidden lg:block animate-slideInFromLeft",attrs:{active:t.currentContent,username:t.username,useremail:t.useremail},on:{showContent:t.updateContent}}):t._e(),t._v(" "),e("the-header",{staticClass:"fixed top-0 left-0 right-0",attrs:{title:t.titleContent,username:t.username,useremail:t.useremail},on:{"profile-clicked":t.handleProfile,"toggle-sidebar":t.toggleSidebar}}),t._v(" "),e("div",{staticClass:"lg:flex lg:w-5/6 justify-center my-8",class:{"animate-slideInFromBottom":!0===t.showContent}},[e(t.currentContent,{tag:"component",attrs:{tryouts:t.tryouts,usercity:t.usercity,userphone:t.userphone,username:t.username,useremail:t.useremail},on:{"dashboard-mounted":t.updateTransition,"tryout-mounted":t.updateTransition,"profile-mounted":t.updateTransition,"rank-mounted":t.updateTransition,"score-mounted":t.updateTransition}})],1),t._v(" "),e("bottom-nav",{staticClass:"block lg:hidden",on:{showContent:t.updateContent}})],1)}),[],!1,null,"50fb87ae",null);e.default=component.exports;installComponents(component,{TheSidebar:n(330).default,TheHeader:n(331).default,BottomNav:n(332).default})}}]);