"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8941],{7198:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(3645),n=a.n(s)()((function(e){return e[1]}));n.push([e.id,".create_btn{background:#00a1e4;padding:2px 25px}",""]);const i=n},8941:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var s=a(478);const n={name:"superadminallassociation",data:function(){return{fields:[{label:"Sl",key:"index"},{label:"Name",key:"name"},{label:"Branch_id",key:"branch_id"},{label:"Association Name",key:"association_name"},{label:"Address",key:"address"},{label:"Zip Code",key:"zip_code"},{label:"Action",key:"action"}],items:[],filter:null,totalRows:0,currentPage:1,perPage:10,pageOptions:[10,15,20,{value:100,text:"Show a lot"}]}},methods:{get_branches:function(){var e=this;s.Z.get("/superadmin/all-branch").then((function(t){var a=t.data;e.items=a,e.totalRows=a.length}))},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1}},mounted:function(){this.get_branches()}};var i=a(3379),r=a.n(i),l=a(7198),o={insert:"head",singleton:!1};r()(l.Z,o);l.Z.locals;const c=(0,a(1900).Z)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-5"},[t("div",{staticClass:"d-flex ml-2"},[t("h2",[e._v("Branches")]),e._v("   \n        "),t("button",{staticClass:"btn create_btn font-weight-bold"},[t("router-link",{staticClass:"text-white",attrs:{to:"/superadmin/new-branches"}},[e._v("Add branches")])],1)]),e._v(" "),t("div",{staticClass:"mt-2",attrs:{id:"table_data"}},[t("div",{staticClass:"float-left"},[t("b-form-select",{attrs:{id:"per-page-select",options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1),e._v(" "),t("div",{staticClass:"float-right"},[t("div",{staticClass:"w-100"},[t("b-form-group",{attrs:{"label-for":"filter-input"}},[t("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})],1)],1)]),e._v(" "),t("div",{staticClass:"text-center bg-white px-5 py-10 mt-5 rounded"},[t("b-table",{staticStyle:{"white-space":"nowrap"},attrs:{bordered:!0,responsive:"",items:e.items,fields:e.fields,"primary-key":"id",filter:e.filter,"current-page":e.currentPage,"per-page":e.perPage},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"cell(index)",fn:function(t){return[e._v("\n              "+e._s(t.index+1)+"\n            ")]}},{key:"cell(address)",fn:function(a){return[e._v("\n              "+e._s(a.item.address1)+", "),a.item.address2?t("span",[e._v(e._s(a.item.address2)+",")]):e._e(),e._v(" "+e._s(a.item.city)+", "+e._s(a.item.state)+"\n            ")]}},{key:"cell(action)",fn:function(a){return[t("b-button",{attrs:{variant:"success"}},[t("router-link",{staticClass:"text-white",attrs:{to:"/superadmin/new-branches/"+a.item.id}},[e._v("Edit")])],1)]}}])}),e._v(" "),t("div",{staticClass:"float-right"},[t("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage,align:"fill",size:"sm"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)])])}),[],!1,null,null,null).exports}}]);