"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[823],{6235:(t,a,s)=>{s.d(a,{Z:()=>e});var i=s(3645),l=s.n(i)()((function(t){return t[1]}));l.push([t.id,".customer-div{padding:5px;width:50%}.customer-div,.customer-div-45{background:#fff;box-shadow:2px 2px 10px 0 rgba(0,0,0,.1);margin-top:5px}.customer-div-45{padding:2%;width:45%}.inner-box-45{width:45%}.inner-box-100,.inner-box-45{background:#fbfafa;border-bottom:2px solid silver}.inner-box-100{margin-top:2.5%}.inner-box-full{background:#fbfafa;border:2px solid silver}",""]);const e=l},823:(t,a,s)=>{s.r(a),s.d(a,{default:()=>r});var i=s(478);const l={name:"adminReportDetail",data:function(){return{all_data:[],data_loaded:!1}},methods:{get_report:function(){var t=this;i.Z.get("/admin/report-single/".concat(this.$route.params.id)).then((function(a){var s=a.data;console.log(s),t.all_data=s,t.data_loaded=!0}))}},mounted:function(){this.get_report()}};var e=s(3379),n=s.n(e),v=s(6235),_={insert:"head",singleton:!1};n()(v.Z,_);v.Z.locals;const r=(0,s(1900).Z)(l,(function(){var t=this,a=t._self._c;return t.data_loaded?a("div",{staticClass:"mt-5"},[a("div",{staticClass:"ml-2"},[a("h3",{staticClass:"font-weight-bolder"},[t._v("Customer information")]),t._v(" "),a("div",{staticClass:"customer-div"},[a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"inner-box-45"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Full name")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.name))])])]),t._v(" "),a("div",{staticClass:"inner-box-45"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("MBO ID")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.mbo_id))])])])]),t._v(" "),a("div",{staticClass:"d-flex justify-content-between mt-5"},[a("div",{staticClass:"inner-box-45"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Phone Number")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.phone_number))])])]),t._v(" "),a("div",{staticClass:"inner-box-45"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Email")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.email))])])])])]),t._v(" "),a("h3",{staticClass:"font-weight-bolder mt-10"},[t._v("Transaction Information")]),t._v(" "),a("div",{staticClass:"customer-div"},[a("div",{staticClass:"inner-box-100"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Date")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.date))])])]),t._v(" "),a("div",{staticClass:"inner-box-100"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Membership type")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.product.name))])])]),t._v(" "),a("div",{staticClass:"inner-box-100"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Transaction Type")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.payment_type))])])]),t._v(" "),a("div",{staticClass:"inner-box-100"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Amount Received")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.advance_payment))])])]),t._v(" "),a("div",{staticClass:"d-flex justify-content-between mt-5"},[a("div",{staticClass:"inner-box-45"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Pricing")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.membership_price))])])]),t._v(" "),a("div",{staticClass:"inner-box-45"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Advance Payment")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.advance_payment))])])])]),t._v(" "),a("div",{staticClass:"inner-box-100"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Recurring Amount")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.recurring_amount))])])]),t._v(" "),a("div",{staticClass:"mt-5"},[a("label",[t._v("Billing Terms")]),t._v(" "),a("div",{staticClass:"p-3",staticStyle:{border:"1px solid silver"}},[a("div",{staticClass:"d-flex justify-content-between mt-5"},[a("div",{staticClass:"inner-box-45"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("From")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.installment_from))])])]),t._v(" "),a("div",{staticClass:"inner-box-45"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("To")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.installment_to))])])])]),t._v(" "),a("div",{staticClass:"d-flex justify-content-between mt-5"},[a("div",{staticClass:"inner-box-45"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Number of Installments")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.no_of_installment))])])]),t._v(" "),a("div",{staticClass:"inner-box-45"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Amount Per Month")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.installment_amount))])])])])])]),t._v(" "),a("div",{staticClass:"inner-box-100"},[a("div",{staticClass:"b-3 px-2 py-1"},[a("label",{attrs:{for:""}},[t._v("Transaction ID")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.transaction.transaction_id))])])]),t._v(" "),a("div",{staticClass:"inner-box-full p-3 mt-5"},[a("label",{attrs:{for:""}},[t._v("Comments")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.comment))])])]),t._v(" "),a("div",{staticClass:"mt-7 w-50"},[a("div",{staticClass:"d-flex justify-content-between"},[a("div",{staticClass:"customer-div-45"},[a("label",{attrs:{for:""}},[t._v("User Name")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.name))])]),t._v(" "),a("div",{staticClass:"customer-div-45"},[a("label",{attrs:{for:""}},[t._v("Branch Name")]),t._v(" "),a("h5",[t._v(t._s(t.all_data.branch.branch_name))])])])])]),t._v(" "),a("div")]):t._e()}),[],!1,null,null,null).exports}}]);