(window.webpackJsonp=window.webpackJsonp||[]).push([[11,17],{313:function(t,e,n){"use strict";n.r(e);var l={props:{title:String}},o=n(53),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("span",{staticClass:"flex items-center my-6"},[e("span",{staticClass:"h-px flex-1 bg-black"}),t._v(" "),e("span",{staticClass:"shrink-0 px-6"},[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"h-px flex-1 bg-black"})])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n.r(e);var l=n(313),o={data:function(){return{components:{TheDivider:l.default}}},props:{tryouts:Array},methods:{isTryout:function(){},handleSelect:function(t){var e="score/".concat(t);this.$router.push(e)}},mounted:function(){this.$emit("score-mounted")}},r=n(53),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full"},[e("div",{staticClass:"w-full py-16"},[e("div",{staticClass:"lg:flex flex-row w-full justify-start"},[e("div",{staticClass:"grid grid-cols lg:grid-cols-4 gap-6 p-6"},t._l(t.tryouts,(function(n,l){return e("div",{key:l,staticClass:"border lg:w-4/6 p-4 shadow-md rounded-md"},[e("div",{staticClass:"flex flex-row items-center justify-between"},[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"h-6 w-6 mr-2"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"{1.5}",stroke:"currentColor",className:"w-6 h-6"}},[e("path",{attrs:{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"}})])]),t._v(" "),e("span",{staticClass:"text-xl font-medium"},[t._v(t._s(n.title))])])]),t._v(" "),e("div",[e("p",[t._v("Date: "+t._s(n.date))]),t._v(" "),e("p",[t._v("Type: "+t._s(n.type))])]),t._v(" "),e("div",{staticClass:"mt-4"},[e("button",{staticClass:"middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",on:{click:function(e){return t.handleSelect(n.url)}}},[t._v("\n              lihat nilai\n            ")])])])})),0)])])])}),[],!1,null,"1f354226",null);e.default=component.exports}}]);