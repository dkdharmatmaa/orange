"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9225],{4203:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(3645),i=r.n(n)()((function(t){return t[1]}));i.push([t.id,".create_btn{background:#00a1e4;padding:2px 25px}",""]);const a=i},9225:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(478);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const o={name:"adminallassociation",data:function(){return{fields:[{label:"Sl",key:"index"},{label:"Name",key:"name"},{label:"Email",key:"email"},{label:"Association Name",key:"get_assos_name"},{label:"Branch Name",key:"branch_name"},{label:"Action",key:"action"}],items:[],filter:null,totalRows:0,currentPage:1,perPage:10,association_id:"",pageOptions:[10,15,20,{value:100,text:"Show a lot"}]}},methods:{get_users:function(){var t=this;n.Z.get("/admin/all-user/0/".concat(this.association_id)).then((function(e){var r=e.data;t.items=r,t.totalRows=r.length}))},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},mounted:function(){this.association_id=this.currentUser.id,this.get_users()},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,r(629).Se)({currentUser:"currentUser"}))};var l=r(3379),c=r.n(l),u=r(4203),f={insert:"head",singleton:!1};c()(u.Z,f);u.Z.locals;const p=(0,r(1900).Z)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-5"},[e("div",{staticClass:"d-flex ml-2"},[e("h2",[t._v("Users")]),t._v("   \n        "),e("button",{staticClass:"btn create_btn font-weight-bold"},[e("router-link",{staticClass:"text-white",attrs:{to:"/admin/new-users"}},[t._v("Add Users")])],1)]),t._v(" "),e("div",{staticClass:"mt-2",attrs:{id:"table_data"}},[e("div",{staticClass:"float-left"},[e("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),t._v(" "),e("div",{staticClass:"float-right"},[e("div",{staticClass:"w-100"},[e("b-form-group",{attrs:{"label-for":"filter-input"}},[e("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1)]),t._v(" "),e("div",{staticClass:"text-center bg-white px-5 py-10 mt-5 rounded"},[e("b-table",{staticStyle:{"white-space":"nowrap"},attrs:{bordered:!0,responsive:"",items:t.items,fields:t.fields,"primary-key":"id",filter:t.filter,"current-page":t.currentPage,"per-page":t.perPage},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n              "+t._s(e.index+1)+"\n            ")]}},{key:"cell(get_assos_name)",fn:function(e){return[t._v("\n             "+t._s(e.item.get_assos_name.name)+"\n            ")]}},{key:"cell(action)",fn:function(r){return[e("b-button",{attrs:{variant:"success"}},[e("router-link",{staticClass:"text-white",attrs:{to:"/admin/new-users/"+r.item.id}},[t._v("Edit")])],1)]}}])}),t._v(" "),e("div",{staticClass:"float-right"},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)])])}),[],!1,null,null,null).exports}}]);