"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3016],{9963:(t,e,a)=>{a.d(e,{Z:()=>i});var s=a(3645),n=a.n(s)()((function(t){return t[1]}));n.push([t.id,".create_btn{background:#00a1e4;padding:9px 25px!important}",""]);const i=n},3016:(t,e,a)=>{a.r(e),a.d(e,{default:()=>c});var s=a(478);const n={name:"superadminallassociation",data:function(){return{fields:[{label:"Sl",key:"index"},{label:"Name",key:"name"},{label:"Email address",key:"email"},{label:"Association Name",key:"get_assos_name"},{label:"Branch Name",key:"branch_name"},{label:"Action",key:"action"}],items:[],filter:null,totalRows:0,currentPage:1,perPage:10,pageOptions:[10,15,20,{value:100,text:"Show a lot"}],association_id:"",options_association:[]}},methods:{delete_user:function(t){var e=this;confirm("Are you sure you want to proceed?")&&s.Z.delete("/superadmin/user/".concat(t)).then((function(t){t.data;e.get_users()}))},get_users:function(){var t=this;s.Z.get("/superadmin/all-user/0/".concat(this.association_id)).then((function(e){var a=e.data;t.items=a,t.totalRows=a.length}))},getAssociation:function(){var t=this;s.Z.get("/superadmin/all-admin").then((function(e){var a=e.data,s=[];s.push({value:"",text:"Select association"});for(var n=0;n<a.length;n++)s.push({value:a[n].id,text:a[n].name});t.options_association=s}))},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}},mounted:function(){this.getAssociation()}};var i=a(3379),r=a.n(i),o=a(9963),l={insert:"head",singleton:!1};r()(o.Z,l);o.Z.locals;const c=(0,a(1900).Z)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-5"},[e("div",{staticClass:"d-flex ml-2"},[e("h2",[t._v("Users")]),t._v("   \n        "),e("b-form-group",{staticClass:"ml-3"},[e("b-form-select",{staticClass:"input-box text-seconday",attrs:{id:"input-3",options:t.options_association,required:""},on:{change:function(e){return t.get_users()}},model:{value:t.association_id,callback:function(e){t.association_id=e},expression:"association_id"}})],1),t._v("   \n        "),e("div",[e("button",{staticClass:"btn create_btn font-weight-bold"},[e("router-link",{staticClass:"text-white",attrs:{to:"/superadmin/new-users"}},[t._v("Add Users")])],1)])],1),t._v(" "),e("div",{staticClass:"mt-2",attrs:{id:"table_data"}},[e("div",{staticClass:"float-left"},[e("b-form-select",{attrs:{id:"per-page-select",options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1),t._v(" "),e("div",{staticClass:"float-right"},[e("div",{staticClass:"w-100"},[e("b-form-group",{attrs:{"label-for":"filter-input"}},[e("b-form-input",{attrs:{id:"filter-input",type:"search",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1)],1)]),t._v(" "),e("div",{staticClass:"text-center bg-white px-5 py-10 mt-5 rounded"},[e("b-table",{staticStyle:{"white-space":"nowrap"},attrs:{bordered:!0,responsive:"",items:t.items,fields:t.fields,"primary-key":"id",filter:t.filter,"current-page":t.currentPage,"per-page":t.perPage},on:{filtered:t.onFiltered},scopedSlots:t._u([{key:"cell(index)",fn:function(e){return[t._v("\n              "+t._s(e.index+1)+"\n            ")]}},{key:"cell(get_assos_name)",fn:function(e){return[t._v("\n             "+t._s(e.item.get_assos_name.name)+"\n            ")]}},{key:"cell(action)",fn:function(a){return[e("b-button",{attrs:{variant:"success"}},[e("router-link",{staticClass:"text-white",attrs:{to:"/superadmin/new-users/"+a.item.id}},[t._v("Edit")])],1),t._v(" "),e("b-button",{attrs:{variant:"danger"},on:{click:function(e){return t.delete_user(a.item.id)}}},[t._v("Delete")])]}}])}),t._v(" "),e("div",{staticClass:"float-right"},[e("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,align:"fill",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)])])}),[],!1,null,null,null).exports}}]);