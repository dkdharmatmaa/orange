"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4540],{940:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(3645),a=r.n(n)()((function(e){return e[1]}));a.push([e.id,".create_btn{background:#00a1e4;padding:2px 25px}",""]);const i=a},4540:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p});var n=r(478);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const l={name:"userallassociation",data:function(){return{fields:[{label:"Sl",key:"index"},{label:"Name",key:"name"},{label:"Branch_id",key:"branch_id"},{label:"Association Name",key:"association_name"},{label:"Address",key:"address"},{label:"Zip Code",key:"zip_code"}],items:[],filter:null,totalRows:0,currentPage:1,perPage:10,pageOptions:[10,15,20,{value:100,text:"Show a lot"}]}},methods:{get_branches:function(){var e=this;n.Z.get("/user/all-branch/0/all").then((function(t){var r=t.data;e.items=r,e.totalRows=r.length}))},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1}},mounted:function(){this.get_branches()},computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},(0,r(629).Se)({selected_branch_id:"SelectedBranch"}))};var o=r(3379),c=r.n(o),u=r(940),f={insert:"head",singleton:!1};c()(u.Z,f);u.Z.locals;const p=(0,r(1900).Z)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-5"},[e._m(0),e._v(" "),t("div",{staticClass:"mt-2",attrs:{id:"table_data"}},[t("div",{staticClass:"float-left"},[t("b-form-select",{attrs:{id:"per-page-select",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1),e._v(" "),t("div",{staticClass:"float-right"},[t("div",{staticClass:"w-100"},[t("b-form-group",{attrs:{"label-for":"filter-input"}},[t("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)],1)]),e._v(" "),t("div",{staticClass:"text-center bg-white px-5 py-10 mt-5 rounded"},[t("b-table",{staticStyle:{"white-space":"nowrap"},attrs:{bordered:!0,responsive:"",items:e.items,fields:e.fields,"primary-key":"id",filter:e.filter,"current-page":e.currentPage,"per-page":e.perPage},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(index)",fn:function(t){return[e._v("\n              "+e._s(t.index+1)+"\n            ")]}},{key:"cell(address)",fn:function(r){return[e._v("\n              "+e._s(r.item.address1)+", "),r.item.address2?t("span",[e._v(e._s(r.item.address2)+",")]):e._e(),e._v(" "+e._s(r.item.city)+", "+e._s(r.item.state)+"\n            ")]}}])}),e._v(" "),t("div",{staticClass:"float-right"},[t("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)])])}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex ml-2"},[t("h2",[e._v("Branches")]),e._v("   \n    ")])}],!1,null,null,null).exports}}]);