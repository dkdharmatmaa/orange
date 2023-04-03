"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[498],{6340:(e,r,t)=>{t.d(r,{Z:()=>o});var s=t(3645),a=t.n(s)()((function(e){return e[1]}));a.push([e.id,".fw-700[data-v-64b8065c]{font-weight:700}.input-box[data-v-64b8065c]{border:1px solid silver}#fade[data-v-64b8065c]{display:none}",""]);const o=a},2498:(e,r,t)=>{t.r(r),t.d(r,{default:()=>l});var s=t(478);const a={data:function(){return{user_form:new Form({id:"",name:"",phone:"",email:"",password:"",branch_id:""}),options_branch:null,action:"Create",action_name:"Create"}},methods:{onSubmit:function(e){var r=this;e.preventDefault(),"Create"==this.action?this.user_form.post("/admin/create-user").then((function(e){e.data;r.$router.push("/admin/all-users")})).catch((function(e){})):this.user_form.put("/admin/edit-user/".concat(this.user_form.id)).then((function(e){e.data;$("#fade").fadeToggle(1e3),$("#fade").fadeToggle(1e3)}))},getData:function(e){var r=this;s.Z.get("/admin/all-user/".concat(e)).then((function(e){var t=e.data;r.user_form.fill(t[0]),r.getBranches()}))},getBranches:function(){var e=this;s.Z.get("/admin/all-branch-option").then((function(r){var t=r.data,s=[];s.push({value:"",text:"Assign branch"});for(var a=0;a<t.length;a++)s.push({value:t[a].id,text:t[a].branch_name});e.options_branch=s}))}},mounted:function(){this.get_item&&(this.getData(this.get_item),this.action="Save",this.action_name="Edit"),this.getBranches()},computed:{get_item:function(){return this.$route.params.id?this.$route.params.id:0}}};var o=t(3379),i=t.n(o),n=t(6340),u={insert:"head",singleton:!1};i()(n.Z,u);n.Z.locals;const l=(0,t(1900).Z)(a,(function(){var e=this,r=e._self._c;return r("div",{staticClass:"mt-10 p-5"},[r("b-form",{staticClass:"w-md-50 fw-700",on:{submit:e.onSubmit}},[r("h3",{staticClass:"fw-700"},[e._v(e._s(e.action_name)+" users")]),e._v(" "),r("div",{staticClass:"bg-white p-10 mt-5 rounded"},[r("b-form-group",[r("b-form-input",{staticClass:"mx-1 input-box",class:{"is-invalid":e.user_form.errors.has("name")},attrs:{id:"input-1",type:"text",required:"",placeholder:"Name"},model:{value:e.user_form.name,callback:function(r){e.$set(e.user_form,"name",r)},expression:"user_form.name"}}),e._v(" "),r("has-error",{attrs:{form:e.user_form,field:"name"}})],1),e._v(" "),r("b-form-group",[r("b-form-input",{staticClass:"mx-1 input-box",class:{"is-invalid":e.user_form.errors.has("phone")},attrs:{id:"input-1",type:"text",required:"",placeholder:"Phone Number"},model:{value:e.user_form.phone,callback:function(r){e.$set(e.user_form,"phone",r)},expression:"user_form.phone"}}),e._v(" "),r("has-error",{attrs:{form:e.user_form,field:"phone"}})],1),e._v(" "),r("b-form-group",[r("b-form-input",{staticClass:"mx-1 input-box",class:{"is-invalid":e.user_form.errors.has("email")},attrs:{id:"input-2",type:"email",required:"",placeholder:"Email address",readonly:"Edit"==e.action},model:{value:e.user_form.email,callback:function(r){e.$set(e.user_form,"email",r)},expression:"user_form.email"}}),e._v(" "),r("has-error",{attrs:{form:e.user_form,field:"email"}})],1),e._v(" "),"Create"==e.action?r("b-form-group",[r("b-form-input",{staticClass:"ml-1 input-box",class:{"is-invalid":e.user_form.errors.has("password")},attrs:{id:"input-5",type:"password",required:"",placeholder:"Password"},model:{value:e.user_form.password,callback:function(r){e.$set(e.user_form,"password",r)},expression:"user_form.password"}}),e._v(" "),r("has-error",{attrs:{form:e.user_form,field:"password"}})],1):e._e(),e._v(" "),r("b-form-group",[r("b-form-select",{staticClass:"ml-1 input-box text-seconday",class:{"is-invalid":e.user_form.errors.has("branch_id")},attrs:{id:"input-4",options:e.options_branch,required:""},model:{value:e.user_form.branch_id,callback:function(r){e.$set(e.user_form,"branch_id",r)},expression:"user_form.branch_id"}}),e._v(" "),r("has-error",{attrs:{form:e.user_form,field:"branch_id"}})],1),e._v(" "),r("div",{staticClass:"alert alert-success mt-3",attrs:{role:"alert",id:"fade"}},[r("span",{staticClass:"font-weight-bolder font-size-h6"},[e._v("Saved Successfully")])]),e._v(" "),r("div",{staticClass:"w-lg-25 w-md-50"},[r("button",{staticClass:"btn font-weight-bolder font-size-h6 py-3 w-100 bg-primary-color text-white mt-3 text-nowrap",staticStyle:{"border-radius":"20px"}},[e._v(e._s(e.action)+" user")])])],1)])],1)}),[],!1,null,"64b8065c",null).exports}}]);