(window.webpackJsonp=window.webpackJsonp||[]).push([[22,6],{314:function(t,e,n){"use strict";n.r(e);n(29),n(36);var r={props:{title:String,description:String}},l=n(53),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded border-s-4 border-red-500 bg-red-50 p-4 fixed bottom-0 right-0 z-10 m-3",attrs:{role:"alert"}},[e("div",{staticClass:"flex items-center gap-2 text-red-800"},[e("svg",{staticClass:"h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z","clip-rule":"evenodd"}})]),t._v(" "),e("strong",{staticClass:"block font-medium"},[t._v(" "+t._s(t.title)+" ")])]),t._v(" "),e("p",{staticClass:"mt-2 text-sm text-red-700"},[t._v("\n    "+t._s(t.description)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},339:function(t,e,n){"use strict";n.r(e);var r=n(10),l=(n(46),{data:function(){return{errorAlert:!1,email:"",password:""}},middleware:"unauth",methods:{login:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,data,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$supabase.auth.signInWithPassword({email:t.email,password:t.password});case 3:n=e.sent,data=n.data,(r=n.error)?(t.errorAlert=!0,console.error("Error signing in:",r.message)):(localStorage.setItem("user",data.session.user.aud),localStorage.setItem("user_id",data.user.id),t.$router.push("/")),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error signing in:",e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}}),o=n(53),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"bg-white"},[t.errorAlert?e("error-alert",{attrs:{title:"Login Gagal!",description:"Email/Password yang anda masukan salah"}}):t._e(),t._v(" "),e("div",{staticClass:"lg:grid lg:min-h-screen lg:grid-cols-12"},[t._m(0),t._v(" "),e("main",{staticClass:"flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"},[e("div",{staticClass:"max-w-xl lg:max-w-3xl"},[t._m(1),t._v(" "),t._m(2),t._v(" "),e("form",{staticClass:"mx-auto mb-0 mt-8 max-w-md space-y-4 p-4 rounded-xl",on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[e("div",[e("label",{staticClass:"sr-only",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),e("div",{staticClass:"relative border-2 rounded-xl"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",attrs:{type:"email",placeholder:"Enter email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("span",{staticClass:"absolute inset-y-0 end-0 grid place-content-center px-4"},[e("svg",{staticClass:"h-4 w-4 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"}})])])])]),t._v(" "),e("div",[e("label",{staticClass:"sr-only",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),e("div",{staticClass:"relative border-2 rounded-xl"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",attrs:{type:"password",placeholder:"Enter password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t._v(" "),e("span",{staticClass:"absolute inset-y-0 end-0 grid place-content-center px-4"},[e("svg",{staticClass:"h-4 w-4 text-gray-400",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}}),t._v(" "),e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"}})])])])]),t._v(" "),e("div",{staticClass:"flex items-center justify-between"},[e("p",{staticClass:"text-sm text-gray-500"},[t._v("\n              No account?\n              "),e("nuxt-link",{staticClass:"underline",attrs:{to:"/auth/signup",href:""}},[t._v("Sign up")])],1),t._v(" "),e("button",{staticClass:"inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white",attrs:{type:"submit"}},[t._v("\n              Sign in\n            ")])])])])])])],1)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"},[e("img",{staticClass:"absolute inset-0 h-full w-full object-cover opacity-80",attrs:{alt:"Night",src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/banner.jpeg"}}),t._v(" "),e("div",{staticClass:"hidden lg:relative lg:block lg:p-12"},[e("h2",{staticClass:"mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl"},[t._v("\n          Welcome to Jago CPNS\n        ")]),t._v(" "),e("p",{staticClass:"mt-4 leading-relaxed text-white/90"},[t._v("\n          Jago CPNS adalah panduan lengkap untuk sukses dalam tes CPNS. Dengan\n          materi terkini dan latihan intensif, kami siap mempersiapkan Anda\n          secara optimal. Temukan strategi terbaik, latihan soal, dan panduan\n          ahli yang membantu Anda mencapai hasil terbaik. Mulailah persiapan\n          Anda menuju karier sebagai pegawai negeri sipil dengan Jago CPNS.\n        ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative -mt-16 block lg:hidden"},[e("a",{staticClass:"inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20",attrs:{href:"/"}},[e("span",{staticClass:"sr-only"},[t._v("Home")]),t._v(" "),e("img",{attrs:{src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/logo-extend.png",alt:""}})]),t._v(" "),e("h1",{staticClass:"mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"},[t._v("\n            Welcome to Jago CPNS\n          ")]),t._v(" "),e("p",{staticClass:"mt-4 leading-relaxed text-gray-500"},[t._v("\n            Jago CPNS adalah panduan lengkap untuk sukses dalam tes CPNS.\n            Dengan materi terkini dan latihan intensif, kami siap\n            mempersiapkan Anda secara optimal. Temukan strategi terbaik,\n            latihan soal, dan panduan ahli yang membantu Anda mencapai hasil\n            terbaik. Mulailah persiapan Anda menuju karier sebagai pegawai\n            negeri sipil dengan Jago CPNS.\n          ")])])},function(){var t=this._self._c;return t("div",{staticClass:"hidden lg:block mx-auto max-w-lg text-center"},[t("h1",{staticClass:"font-bold sm:text-3xl"},[this._v("Sign in")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ErrorAlert:n(314).default})}}]);