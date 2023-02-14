"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9208],{4919:(t,a,s)=>{s.d(a,{Z:()=>d});var e=s(3645),i=s.n(e)()((function(t){return t[1]}));i.push([t.id,".input-value[data-v-77efd85d]{border:0;box-shadow:-3px 1px 2px 1px rgba(0,0,0,.2);font-size:16px;padding:1.5%}.input-value[data-v-77efd85d]:focus{outline:none}.col-sm-12[data-v-77efd85d]{background:#f0f2f5;color:#000;margin-left:7px}.table-striped>tbody>tr:nth-child(2n)>td[data-v-77efd85d]{background-color:#00a1e4;color:#000;font-weight:900;opacity:60%}.table-striped>tbody>tr:nth-child(odd)>td[data-v-77efd85d]{background-color:#f5f5f5;color:#000;font-weight:900;opacity:60%}.display-flex[data-v-77efd85d]{display:flex!important}.fw[data-v-77efd85d]{font-weight:bolder}",""]);const d=i},9208:(t,a,s)=>{s.r(a),s.d(a,{default:()=>o});var e=s(478);const i={data:function(){return{user_id:"",branch_detail:[],plans:null,data_loded:!1}},methods:{getUserSumissionDetail:function(){var t=this;e.Z.get("/superadmin/user-sumission-detail/".concat(this.user_id)).then((function(a){var s=a.data;if(t.branch_detail=s,s.plans){var e=JSON.parse(s.plans.plans);delete e.index,delete e.action,delete e.no_of_peoples,t.plans=e}t.data_loded=!0}))}},mounted:function(){this.user_id=this.$route.params.id,this.getUserSumissionDetail()}};var d=s(3379),l=s.n(d),n=s(4919),r={insert:"head",singleton:!1};l()(n.Z,r);n.Z.locals;const o=(0,s(1900).Z)(i,(function(){var t=this,a=t._self._c;return t.data_loded?a("div",{staticClass:"row"},[a("h2",{staticClass:"ml-5"},[t._v(t._s(t.branch_detail.association.association_name))]),t._v(" "),a("div",{staticClass:"col-sm-12 mt-3"},[a("h3",[t._v("Submission details")]),t._v(" "),a("div",{staticClass:"mb-5"},[a("div",{staticClass:"bg-white p-5 rounded",staticStyle:{width:"auto",float:"left"}},[a("h4",[t._v(t._s(t.branch_detail.association.name))]),t._v(" "),a("h4",[t._v(t._s(t.moment(t.branch_detail.created_at).format("MM-DD-YYYY HH:mm:ss")))])])]),t._v(" "),a("br"),a("br"),a("br"),a("br"),a("br"),t._v(" "),a("h3",{staticClass:"mb-1 mt-3"},[t._v("Personal details")]),t._v(" "),a("div",{staticClass:"bg-white p-5 rounded",staticStyle:{"margin-right":"2%"}},[a("div",{staticClass:"mb-3",staticStyle:{width:"48%",float:"right"}},[a("span",[t._v("Last name")]),a("br"),t._v(" "),a("input",{staticClass:"input-value",attrs:{type:"text",readonly:""},domProps:{value:t.branch_detail.last_name}})]),t._v(" "),a("div",{staticClass:"mb-3",staticStyle:{width:"48%"}},[a("span",[t._v("First name")]),a("br"),t._v(" "),a("input",{staticClass:"input-value",attrs:{type:"text",readonly:""},domProps:{value:t.branch_detail.first_name}})]),t._v(" "),a("div",{staticClass:"mb-3",staticStyle:{width:"48%",float:"right"}},[a("span",[t._v("Number of people in household")]),a("br"),t._v(" "),a("input",{staticClass:"input-value",attrs:{type:"text",readonly:""},domProps:{value:t.branch_detail.no_of_people}})]),t._v(" "),a("div",{staticClass:"mb-3",staticStyle:{width:"48%"}},[a("span",[t._v("Email id")]),a("br"),t._v(" "),a("input",{staticClass:"input-value",attrs:{type:"text",readonly:""},domProps:{value:t.branch_detail.email_id}})]),t._v(" "),a("div",{staticClass:"mb-3"},[a("span",[t._v("Address")]),a("br"),t._v(" "),a("input",{staticClass:"input-value",staticStyle:{padding:"7px"},attrs:{type:"text",readonly:""},domProps:{value:t.branch_detail.street_address}})]),t._v(" "),a("div",{staticClass:"mb-3",staticStyle:{width:"31%",float:"right"}},[a("span",[t._v("Zip code")]),a("br"),t._v(" "),a("input",{staticClass:"input-value",attrs:{type:"text",readonly:""},domProps:{value:t.branch_detail.zip_code}})]),t._v(" "),a("div",{staticClass:"mb-3",staticStyle:{width:"31%",float:"right","padding-right":"4%"}},[a("span",[t._v("State")]),a("br"),t._v(" "),a("input",{staticClass:"input-value",attrs:{type:"text",readonly:""},domProps:{value:t.branch_detail.state}})]),t._v(" "),a("div",{staticClass:"mb-3",staticStyle:{width:"31%"}},[a("span",[t._v("City")]),a("br"),t._v(" "),a("input",{staticClass:"input-value",attrs:{type:"text",readonly:""},domProps:{value:t.branch_detail.city}})])]),t._v(" "),t.branch_detail.comment?a("div",{staticClass:"bg-white px-3 pb-1 mt-5 rounded",staticStyle:{"margin-right":"2%"}},[a("span",[t._v("Comments")]),a("br"),t._v(" "),a("h5",[t._v(t._s(t.branch_detail.comment))])]):t._e(),t._v(" "),a("p",{staticClass:"fw mt-5",staticStyle:{"font-size":"18px"}},[t._v(t._s(t.branch_detail.first_name)+" is qualified for following membership rates")]),t._v(" "),a("div",{staticClass:"table-responsive text-center bg-white",staticStyle:{width:"50%"}},[t.plans?a("table",{staticClass:"table table-striped p-2"},[a("tbody",t._l(t.plans,(function(s,e){return a("tr",[a("td",[t._v(t._s(e))]),t._v(" "),a("td",[t._v(t._s(s))])])})),0)]):a("div",[a("h3",[t._v("Not qualified")])])])])]):t._e()}),[],!1,null,"77efd85d",null).exports}}]);