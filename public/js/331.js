"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[331],{8347:(a,t,s)=>{s.d(t,{Z:()=>e});var i=s(3645),l=s.n(i)()((function(a){return a[1]}));l.push([a.id,".customer-div{padding:5px;width:50%}.customer-div,.customer-div-45{background:#fff;box-shadow:2px 2px 10px 0 rgba(0,0,0,.1);margin-top:5px}.customer-div-45{padding:2%;width:45%}.inner-box-45{width:45%}.inner-box-100,.inner-box-45{background:#fbfafa;border-bottom:2px solid silver}.inner-box-100{margin-top:2.5%}.inner-box-full{background:#fbfafa;border:2px solid silver}",""]);const e=l},4331:(a,t,s)=>{s.r(t),s.d(t,{default:()=>r});var i=s(478);const l={name:"adminReportDetail",data:function(){return{all_data:[],data_loaded:!1}},methods:{get_report:function(){var a=this;i.Z.get("/admin/report-single/".concat(this.$route.params.id)).then((function(t){var s=t.data;a.all_data=s,a.data_loaded=!0}))}},mounted:function(){this.get_report()}};var e=s(3379),n=s.n(e),v=s(8347),_={insert:"head",singleton:!1};n()(v.Z,_);v.Z.locals;const r=(0,s(1900).Z)(l,(function(){var a=this,t=a._self._c;return a.data_loaded?t("div",{staticClass:"mt-5"},[t("div",{staticClass:"ml-2"},[t("h3",{staticClass:"font-weight-bolder"},[a._v("Customer information")]),a._v(" "),t("div",{staticClass:"customer-div"},[t("div",{staticClass:"d-flex justify-content-between"},[t("div",{staticClass:"inner-box-45"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Full name")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.name))])])]),a._v(" "),t("div",{staticClass:"inner-box-45"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("MBO ID")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.mbo_id))])])])]),a._v(" "),t("div",{staticClass:"d-flex justify-content-between mt-5"},[t("div",{staticClass:"inner-box-45"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Phone Number")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.phone_number))])])]),a._v(" "),t("div",{staticClass:"inner-box-45"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Email")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.email))])])])])]),a._v(" "),t("h3",{staticClass:"font-weight-bolder mt-10"},[a._v("Transaction Information")]),a._v(" "),t("div",{staticClass:"customer-div"},[t("div",{staticClass:"inner-box-100"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Date")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.date))])])]),a._v(" "),t("div",{staticClass:"inner-box-100"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Membership type")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.product.name))])])]),a._v(" "),t("div",{staticClass:"inner-box-100"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Transaction Type")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.payment_type))])])]),a._v(" "),t("div",{staticClass:"inner-box-100"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Amount Received")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.advance_payment))])])]),a._v(" "),t("div",{staticClass:"d-flex justify-content-between mt-5"},[t("div",{staticClass:"inner-box-45"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Pricing")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.membership_price))])])]),a._v(" "),t("div",{staticClass:"inner-box-45"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Advance Payment")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.advance_payment))])])])]),a._v(" "),t("div",{staticClass:"inner-box-100"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Recurring Amount")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.recurring_amount))])])]),a._v(" "),t("div",{staticClass:"mt-5"},[t("label",[a._v("Billing Terms")]),a._v(" "),t("div",{staticClass:"p-3",staticStyle:{border:"1px solid silver"}},[t("div",{staticClass:"d-flex justify-content-between mt-5"},[t("div",{staticClass:"inner-box-45"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("From")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.installment_from))])])]),a._v(" "),t("div",{staticClass:"inner-box-45"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("To")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.installment_to))])])])]),a._v(" "),t("div",{staticClass:"d-flex justify-content-between mt-5"},[t("div",{staticClass:"inner-box-45"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Number of Installments")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.no_of_installment))])])]),a._v(" "),t("div",{staticClass:"inner-box-45"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Amount Per Month")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.installment_amount))])])])])])]),a._v(" "),t("div",{staticClass:"inner-box-100"},[t("div",{staticClass:"b-3 px-2 py-1"},[t("label",{attrs:{for:""}},[a._v("Transaction ID")]),a._v(" "),a.all_data.transaction?t("h5",[a._v(a._s(a.all_data.transaction.transaction_id))]):t("h5",[a._v(a._s(a.all_data.transaction_id))])])]),a._v(" "),t("div",{staticClass:"inner-box-full p-3 mt-5"},[t("label",{attrs:{for:""}},[a._v("Comments")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.comment))])])]),a._v(" "),t("div",{staticClass:"mt-7 w-50"},[t("div",{staticClass:"d-flex justify-content-between"},[t("div",{staticClass:"customer-div-45"},[t("label",{attrs:{for:""}},[a._v("User Name")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.name))])]),a._v(" "),t("div",{staticClass:"customer-div-45"},[t("label",{attrs:{for:""}},[a._v("Branch Name")]),a._v(" "),t("h5",[a._v(a._s(a.all_data.branch.branch_name))])])])])]),a._v(" "),t("div")]):a._e()}),[],!1,null,null,null).exports}}]);