"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[706],{96:(t,e,a)=>{a.d(e,{Z:()=>r});var i=a(3645),n=a.n(i)()((function(t){return t[1]}));n.push([t.id,".create_btn{background:#ed700f;border-radius:20px;padding:2px 25px}",""]);const r=n},6706:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var i=a(478);const n={name:"product",data:function(){return{fields:[{label:"Sl",key:"index"},{label:"Product name",key:"name"},{label:"Duration",key:"duration"},{label:"Plan pricing",key:"price"},{label:"Edit",key:"edit"},{label:"Delete",key:"delete"}],items:[],filter:null,totalRows:0,currentPage:1,perPage:10,pageOptions:[10,15,20,{value:100,text:"Show a lot"}]}},methods:{delete_product:function(t){var e=this;confirm("Are you sure you want to proceed?")&&i.Z.delete("/admin/product/".concat(t)).then((function(t){t.data;e.get_product()}))},get_product:function(){var t=this;i.Z.get("/admin/all-product").then((function(e){var a=e.data;t.items=a,t.totalRows=a.length}))},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},mounted:function(){this.get_product()}};var r=a(3379),s=a.n(r),l=a(96),o={insert:"head",singleton:!1};s()(l.Z,o);l.Z.locals;const c=(0,a(1900).Z)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-5"},[e("div",{staticClass:"d-flex ml-2 justify-content-between"},[e("h2",[t._v("Products")]),t._v("   \n        "),e("button",{staticClass:"btn create_btn font-weight-bold"},[e("router-link",{staticClass:"text-white",attrs:{to:"/admin/new-product"}},[t._v("Create Plan")])],1)]),t._v(" "),e("div",{staticClass:"mt-2",attrs:{id:"table_data"}},[e("div",{staticClass:"float-left",staticStyle:{padding:"1% 0 0 1.2%"}},[e("b-form-select",{staticStyle:{background:"white !important"},attrs:{id:"per-page-select",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),t._v(" "),e("div",{staticClass:"float-right",staticStyle:{padding:"1% 1.2% 0 0"}},[e("div",{staticClass:"w-100"},[e("b-form-group",{attrs:{"label-for":"filter-input"}},[e("b-form-input",{staticStyle:{background:"white !important"},attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1)]),t._v(" "),e("div",{staticClass:"text-center bg-white px-5 py-10 mt-5 rounded"},[e("b-table",{staticStyle:{"white-space":"nowrap"},attrs:{bordered:!0,responsive:"",items:t.items,fields:t.fields,"primary-key":"id",filter:t.filter,"current-page":t.currentPage,"per-page":t.perPage},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n              "+t._s(e.index+1)+"\n            ")]}},{key:"cell(edit)",fn:function(t){return[e("button",{staticClass:"btn-trans-b-0"},[e("router-link",{staticClass:"text-white",attrs:{to:"/admin/new-product/"+t.item.id}},[e("i",{staticClass:"fas fa-edit text-success"})])],1)]}},{key:"cell(delete)",fn:function(a){return[e("button",{staticClass:"text-white btn-trans-b-0",on:{click:function(e){return t.delete_product(a.item.id)}}},[e("i",{staticClass:"far fa-trash-alt text-danger"})])]}}])}),t._v(" "),e("div",{staticClass:"float-right"},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)])])}),[],!1,null,null,null).exports}}]);