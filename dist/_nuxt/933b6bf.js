(window.webpackJsonp=window.webpackJsonp||[]).push([[28,2,5],{318:function(t,e,n){"use strict";n.r(e);var r={props:{title:String}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"flex items-center h-screen sm:p-16 bg-slate-50"},[e("div",{staticClass:"container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md"},[e("svg",{staticClass:"w-40 h-40 dark:text-gray-600",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[e("path",{attrs:{fill:"currentColor",d:"M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"}}),t._v(" "),e("rect",{attrs:{width:"176",height:"32",x:"168",y:"320",fill:"currentColor"}}),t._v(" "),e("polygon",{attrs:{fill:"currentColor",points:"210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"}}),t._v(" "),e("polygon",{attrs:{fill:"currentColor",points:"383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"}})]),t._v(" "),e("p",{staticClass:"text-3xl"},[t._v(t._s(t.title))]),t._v(" "),e("a",{staticClass:"px-8 py-3 font-semibold rounded bg-blue-500 text-white",attrs:{rel:"noopener noreferrer",href:"/"}},[t._v("Back to homepage")])])])}),[],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{agreements:"",url:"/tryout/".concat(this.$route.params.id,"/start")}},methods:{handleCancel:function(){localStorage.removeItem("token")},handleAccept:function(){localStorage.removeItem("currentQuestion"),localStorage.removeItem("answers")}}},o=n(53),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container my-10 w-fit mx-auto px-4 lg:px-20 py-8 bg-gray-50 lg:shadow-xl"},[e("h2",{staticClass:"text-2xl font-bold my-4"},[t._v("Petunjuk Menjalankan Latihan Tes")]),t._v(" "),e("h2",{staticClass:"text-2xl text-red-500 font-bold my-4"},[t._v("\n    Soal hanya bisa dikerjakan satu kali setelah klik setuju & mulai\n  ")]),t._v(" "),t._m(0),t._v(" "),e("div",[e("nuxt-link",{attrs:{to:t.url}},[e("button",{staticClass:"mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2",on:{click:t.handleAccept}},[t._v("\n        Setuju & Mulai\n      ")])]),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("button",{staticClass:"mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600",on:{click:t.handleCancel}},[t._v("\n        Cancel\n      ")])])],1)])}),[function(){var t=this,e=t._self._c;return e("ol",[e("li",{staticClass:"py-2"},[e("strong",[t._v("1. Bagian Soal")]),t._v(" "),e("ol",[e("li",{staticClass:"p-2 border rounded"},[e("img",{attrs:{src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/soal",alt:"contoh-soal"}})]),t._v(" "),e("li",{staticClass:"my-2"},[t._v("\n          Klik/pilih jawaban yang menurut anda benar seperti dalam contoh\n          (pilihan a),lalu klik tombol Next untuk menyimpan jawaban yang anda\n          pilih.\n        ")])])]),t._v(" "),e("li",{staticClass:"py-2"},[e("strong",[t._v("2. Bagian Navigasi")]),t._v(" "),e("ol",[e("li",{staticClass:"p-2 border rounded"},[e("img",{attrs:{src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/nav-soal.png",alt:"navigasi soal"}})]),t._v(" "),e("li",[t._v("\n          Gunakan navigasi soal untuk berpindah soal ke nomer soal yang anda\n          inginkan. Warna biru merepresentasikan nomer soal yang sedang\n          tampil,warna hijau merepresentasikan nomer soal yang sudah\n          di-isi,jika soal belum di-jawab maka tidak ada warna/transparan.\n        ")])])]),t._v(" "),e("li",{staticClass:"py-2"},[e("strong",[t._v("3. Tombol Next,Prev,dan Submit")]),t._v(" "),e("ol",[e("li",{staticClass:"p-2 border rounded"},[e("img",{attrs:{src:"https://azvyntaelgowdhbadqbs.supabase.co/storage/v1/object/public/ui/button-submit",alt:"button"}})]),t._v(" "),e("li",[t._v("\n          Jika anda telah mencapai halaman terakhir soal,maka tombol next akan\n          berubah menjadi Submit,gunakan tombol sumbit tersebut untuk\n          men-submit jawaban jika anda sudah yakin dengan jawaban anda.\n        ")])])])])}],!1,null,"7c109494",null);e.default=component.exports},346:function(t,e,n){"use strict";n.r(e);var r=n(10),o=(n(46),{middleware:"tryout",data:function(){return{isTryout:!1}},methods:{checkTryout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.id,r=localStorage.getItem("user_id"),e.next=4,t.$supabase.from("users").select(n).eq("id",r).single();case 4:o=e.sent,data=o.data,o.error,data[n]&&(t.isTryout=!0);case 8:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.checkTryout();case 2:case"end":return e.stop()}}),e)})))()}}),l=n(53),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t.isTryout?e("empty-page",{attrs:{title:"Anda sudah mengerjakan tryout ini!"}}):t._e(),t._v(" "),t.isTryout?t._e():e("before-tryout")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EmptyPage:n(318).default,BeforeTryout:n(330).default})}}]);