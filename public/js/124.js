"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[124],{1522:(t,s,e)=>{e.d(s,{Z:()=>r});var a=e(3645),i=e.n(a)()((function(t){return t[1]}));i.push([t.id,".fw-700[data-v-c07700ce]{font-weight:700}",""]);const r=i},1369:(t,s,e)=>{e.d(s,{Z:()=>r});var a=e(3645),i=e.n(a)()((function(t){return t[1]}));i.push([t.id,".hidden_header{display:none!important}.table-striped>tbody>tr:nth-child(2n)>td{background-color:#00a1e4;color:#000;font-weight:900;opacity:60%}.table-striped>tbody>tr:nth-child(odd)>td{background-color:#f5f5f5;color:#000;font-weight:900;opacity:60%}.print_btn{margin-top:-6px;padding:12px 20px}#fade{display:none}",""]);const r=i},124:(t,s,e)=>{e.r(s),e.d(s,{default:()=>u});var a=e(478);const i={name:"superadmin-eligibiltystatus",data:function(){return{items:[],status_arr:{comment:"",status:""},success_box:!0,user_details:[],plans:[],main_message:""}},methods:{save_comment:function(){a.Z.post("/superadmin/add-eligibilty-comment/".concat(this.user_details.id),this.status_arr).then((function(t){t.data;$("#fade").fadeToggle(1e3),$("#fade").fadeToggle(1e3)}))}},mounted:function(){if(this.$route.params.main_data)if(this.user_details=this.$route.params.main_data.data.details,this.$route.params.main_data.status){this.plans=this.$route.params.main_data.data.plans,this.main_message="".concat(this.user_details.first_name," is qualified for following membership rates");var t=Object.entries(JSON.parse(this.plans.plans));t.splice(0,3),this.items=t}else this.main_message="".concat(this.user_details.first_name," is not qualified ");else this.$router.push("/superadmin/check-eligibilty")}};var r=e(3379),n=e.n(r),c=e(1522),o={insert:"head",singleton:!1};n()(c.Z,o);c.Z.locals;var d=e(1369),l={insert:"head",singleton:!1};n()(d.Z,l);d.Z.locals;const u=(0,e(1900).Z)(i,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"row mt-10"},[s("div",{staticClass:"col-md-6"},[s("h3",{staticClass:"fw-700"},[t._v(t._s(t.main_message))]),t._v(" "),s("div",{staticClass:"bg-white rounded mt-5 p-5"},[t.items?s("b-table",{staticClass:"text-center",attrs:{striped:"",items:t.items,"thead-class":"hidden_header"}}):t._e()],1)]),t._v(" "),s("div",{staticClass:"col-md-6 p-10"},[t.success_box?s("div",{staticClass:"bg-white p-5 rounded",staticStyle:{height:"75px"}},[t._m(0),t._v(" "),s("div",{staticClass:"float-right",on:{click:function(s){t.success_box=!t.success_box}}},[s("img",{staticClass:"img-fluid mt-2",attrs:{src:"/media/custome/x.svg",alt:"success icon",width:"20",height:"20"}})])]):t._e(),t._v(" "),s("div",{staticClass:"mt-5"},[s("h4",{staticClass:"font-weight-bolder"},[t._v("Comment")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.status_arr.comment,expression:"status_arr.comment"}],staticClass:"bg-white rounded p-2",attrs:{name:"comment",id:"comment",cols:"85",rows:"3",placeholder:"Add comments here"},domProps:{value:t.status_arr.comment},on:{input:function(s){s.target.composing||t.$set(t.status_arr,"comment",s.target.value)}}}),s("br"),t._v(" "),s("div",{staticClass:"mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.status_arr.status,expression:"status_arr.status"}],staticClass:"bg-white p-2 font-weight-bolder opacity-75",attrs:{type:"radio",name:"convert",value:"Accepted",required:""},domProps:{checked:t._q(t.status_arr.status,"Accepted")},on:{change:function(s){return t.$set(t.status_arr,"status","Accepted")}}}),t._v(" Accepted    \n          "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.status_arr.status,expression:"status_arr.status"}],staticClass:"bg-white p-2 font-weight-bolder opacity-75",attrs:{type:"radio",name:"convert",value:"Deferred",required:""},domProps:{checked:t._q(t.status_arr.status,"Deferred")},on:{change:function(s){return t.$set(t.status_arr,"status","Deferred")}}}),t._v(" Deferred\n        ")]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"my-5"},[s("b-button",{staticClass:"px-5 h5",attrs:{variant:"primary"},on:{click:function(s){return t.save_comment()}}},[t._v("Save details")]),t._v("    \n          "),s("b-button",{staticClass:"print_btn border border-secondary",attrs:{variant:"white"}},[s("a",{staticClass:"h5",attrs:{href:"/generate-pdf/"+t.main_message+"/"+JSON.stringify(t.items)+"/"+JSON.stringify(t.user_details)+"/"+t.status_arr.comment,target:"_blank"}},[t._v("Print details")])])],1)])])])}),[function(){var t=this,s=t._self._c;return s("div",{staticClass:"float-left"},[s("img",{staticClass:"img-fluid mt-2",attrs:{src:"/media/custome/check.svg",alt:"success icon",width:"20",height:"20"}}),t._v(" \n         "),s("span",{staticClass:"text-success h5 font-weight-bolder"},[t._v("Success")]),s("br"),s("span",[t._v("       Details saved successfully.")])])},function(){var t=this._self._c;return t("div",{staticClass:"alert alert-success mt-3",attrs:{role:"alert",id:"fade"}},[t("span",{staticClass:"font-weight-bolder font-size-h6"},[this._v("Saved Successfully")])])}],!1,null,"c07700ce",null).exports}}]);