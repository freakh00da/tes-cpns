(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{315:function(t,e,l){"use strict";l.r(e);l(29),l(36),l(86);var n={data:function(){return{disable:!1}},props:{title:String,description:String},methods:{handdleAccept:function(){var t=this;this.$emit("accept-clicked"),this.disable=!0,setTimeout((function(){t.disable=!1}),1e4)},handleReject:function(){this.$emit("reject-clicked")}}},r=l(53),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative z-20",attrs:{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"}},[e("div",{staticClass:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}),t._v(" "),e("div",{staticClass:"fixed inset-0 z-10 w-screen overflow-y-auto"},[e("div",{staticClass:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},[e("div",{staticClass:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},[e("div",{staticClass:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},[e("div",{staticClass:"sm:flex sm:items-start"},[e("div",{staticClass:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[e("svg",{staticClass:"h-6 w-6 text-red-600",attrs:{fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"}})])]),t._v(" "),e("div",{staticClass:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},[e("h3",{staticClass:"text-base font-semibold leading-6 text-gray-900",attrs:{id:"modal-title"}},[t._v("\n                "+t._s(t.title)+"\n              ")]),t._v(" "),e("div",{staticClass:"mt-2"},[e("p",{staticClass:"text-sm text-gray-500"},[t._v("\n                  "+t._s(t.description)+"\n                ")])])])])]),t._v(" "),e("div",{staticClass:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},[e("button",{staticClass:"inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto",attrs:{disabled:t.disable,type:"button"},on:{click:t.handdleAccept}},[t._v("\n            Accept\n          ")]),t._v(" "),e("button",{staticClass:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",attrs:{type:"button"},on:{click:t.handleReject}},[t._v("\n            Cancel\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);