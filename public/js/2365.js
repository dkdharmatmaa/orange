"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2365],{4737:(i,t,e)=>{e.d(t,{Z:()=>r});var l=e(3645),s=e.n(l)()((function(i){return i[1]}));s.push([i.id,".fw-700[data-v-70f38e2e]{font-weight:700}.input-box[data-v-70f38e2e]{border:1px solid silver}.create_btn[data-v-70f38e2e]{background:#00a1e4}#fade[data-v-70f38e2e]{display:none}",""]);const r=s},2365:(i,t,e)=>{e.r(t),e.d(t,{default:()=>m});var l=e(478);const s={data:function(){return{eligiblity_form:new Form({id:"",first_name:"",last_name:"",total_people:"Number of people in household",email:"",phone:"",birthday:"",street_address:"",address:"",city:"",state:"",zip_code:"",lead_id:"",association_id:"",branch_id:""}),options_association:[],options_branch:[],options_people:["Number of people in household","1","2","3","4","5","6","7","8","9","10+"]}},methods:{onSubmit:function(){var i=this;"Number of people in household"==this.eligiblity_form.total_people?alert("Select number of peoples in household "):this.eligiblity_form.post("/superadmin/check-eligibilty").then((function(t){var e=t.data;i.$router.push({name:"superadmin-eligibiltystatus",params:{main_data:e}})})).catch((function(i){}))},onReset:function(i){i.preventDefault(),this.eligiblity_form.first_name="",this.eligiblity_form.last_name="",this.eligiblity_form.total_people="",this.eligiblity_form.email="",this.eligiblity_form.phone="",this.eligiblity_form.birthday="",this.eligiblity_form.address1="",this.eligiblity_form.address2="",this.eligiblity_form.association="",this.eligiblity_form.branch="",this.eligiblity_form.city="",this.eligiblity_form.state="",this.eligiblity_form.zip_code="",this.eligiblity_form.lead_id=""},getAssociation:function(){var i=this;this.options_branch.push({value:"",text:"Assign branch"}),l.Z.get("/superadmin/all-admin").then((function(t){var e=t.data,l=[];l.push({value:"",text:"Assign association"});for(var s=0;s<e.length;s++)l.push({value:e[s].id,text:e[s].name});i.options_association=l}))},getBranches:function(){var i=this;this.eligiblity_form.association_id&&l.Z.get("/superadmin/all-branch/0/".concat(this.eligiblity_form.association_id)).then((function(t){var e=t.data,l=[];l.push({value:"",text:"Assign branch"});for(var s=0;s<e.length;s++)l.push({value:e[s].id+"/////"+e[s].name,text:e[s].name});i.options_branch=l}))}},mounted:function(){this.getAssociation()}};var r=e(3379),o=e.n(r),a=e(4737),n={insert:"head",singleton:!1};o()(a.Z,n);a.Z.locals;const m=(0,e(1900).Z)(s,(function(){var i=this,t=i._self._c;return t("div",{staticClass:"mt-10 p-5"},[t("div",{staticClass:"w-md-50 fw-700"},[t("h3",{staticClass:"fw-700"},[i._v("Check eligibilty")]),i._v(" "),t("div",{staticClass:"bg-white p-10 rounded"},[t("b-form-group",[t("b-form-input",{staticClass:"ml-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("first_name")},attrs:{id:"input-1",type:"text",required:"",placeholder:"First name"},model:{value:i.eligiblity_form.first_name,callback:function(t){i.$set(i.eligiblity_form,"first_name",t)},expression:"eligiblity_form.first_name"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"first_name"}})],1)],1),i._v(" "),t("b-form-group",[t("b-form-input",{staticClass:"ml-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("last_name")},attrs:{id:"input-2",type:"text",required:"",placeholder:"Last name"},model:{value:i.eligiblity_form.last_name,callback:function(t){i.$set(i.eligiblity_form,"last_name",t)},expression:"eligiblity_form.last_name"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"last_name"}})],1)],1),i._v(" "),t("b-form-group",[t("b-form-select",{staticClass:"ml-1 input-box text-seconday",class:{"is-invalid":i.eligiblity_form.errors.has("total_people")},attrs:{id:"input-9",options:i.options_people},model:{value:i.eligiblity_form.total_people,callback:function(t){i.$set(i.eligiblity_form,"total_people",t)},expression:"eligiblity_form.total_people"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"total_people"}})],1)],1),i._v(" "),t("b-form-group",[t("b-form-input",{staticClass:"ml-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("email")},attrs:{id:"input-4",type:"email",required:"",placeholder:"Email Id"},model:{value:i.eligiblity_form.email,callback:function(t){i.$set(i.eligiblity_form,"email",t)},expression:"eligiblity_form.email"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"email"}})],1)],1),i._v(" "),t("div",{staticClass:"d-flex mb-7"},[t("b-form-input",{staticClass:"mx-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("phone")},attrs:{id:"input-5",type:"text",required:"",placeholder:"Phone"},model:{value:i.eligiblity_form.phone,callback:function(t){i.$set(i.eligiblity_form,"phone",t)},expression:"eligiblity_form.phone"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"phone"}})],1),i._v(" "),t("b-form-input",{staticClass:"ml-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("birthday")},attrs:{id:"input-6",type:"text",required:"",placeholder:"Birthday - MM/DD/YYYY"},model:{value:i.eligiblity_form.birthday,callback:function(t){i.$set(i.eligiblity_form,"birthday",t)},expression:"eligiblity_form.birthday"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"birthday"}})],1)],1),i._v(" "),t("b-form-group",[t("b-form-input",{staticClass:"ml-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("street_address")},attrs:{id:"input-7",type:"text",required:"",placeholder:"Street address"},model:{value:i.eligiblity_form.street_address,callback:function(t){i.$set(i.eligiblity_form,"street_address",t)},expression:"eligiblity_form.street_address"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"street_address"}})],1)],1),i._v(" "),t("b-form-group",[t("b-form-input",{staticClass:"ml-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("address")},attrs:{id:"input-8",type:"text",placeholder:"Address (optional)"},model:{value:i.eligiblity_form.address,callback:function(t){i.$set(i.eligiblity_form,"address",t)},expression:"eligiblity_form.address"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"address"}})],1)],1),i._v(" "),t("div",{staticClass:"d-flex mb-7"},[t("b-form-select",{staticClass:"ml-1 input-box text-seconday",class:{"is-invalid":i.eligiblity_form.errors.has("association_id")},attrs:{id:"input-9",options:i.options_association},on:{change:function(t){return i.getBranches()}},model:{value:i.eligiblity_form.association_id,callback:function(t){i.$set(i.eligiblity_form,"association_id",t)},expression:"eligiblity_form.association_id"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"association_id"}})],1),i._v(" "),t("b-form-select",{staticClass:"ml-1 input-box text-seconday",class:{"is-invalid":i.eligiblity_form.errors.has("branch_id")},attrs:{id:"input-10",options:i.options_branch},model:{value:i.eligiblity_form.branch_id,callback:function(t){i.$set(i.eligiblity_form,"branch_id",t)},expression:"eligiblity_form.branch_id"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"branch_id"}})],1)],1),i._v(" "),t("div",{staticClass:"d-flex mb-7"},[t("b-form-input",{staticClass:"mx-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("city")},attrs:{id:"input-11",type:"text",placeholder:"City"},model:{value:i.eligiblity_form.city,callback:function(t){i.$set(i.eligiblity_form,"city",t)},expression:"eligiblity_form.city"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"city"}})],1),i._v(" "),t("b-form-input",{staticClass:"ml-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("state")},attrs:{id:"input-12",type:"text",placeholder:"State"},model:{value:i.eligiblity_form.state,callback:function(t){i.$set(i.eligiblity_form,"state",t)},expression:"eligiblity_form.state"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"state"}})],1),i._v(" "),t("b-form-input",{staticClass:"ml-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("zip_code")},attrs:{id:"input-13",type:"number",required:"",placeholder:"Zip"},model:{value:i.eligiblity_form.zip_code,callback:function(t){i.$set(i.eligiblity_form,"zip_code",t)},expression:"eligiblity_form.zip_code"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"zip_code"}})],1)],1),i._v(" "),t("b-form-group",[t("b-form-input",{staticClass:"ml-1 input-box",class:{"is-invalid":i.eligiblity_form.errors.has("lead_id")},attrs:{id:"input-14",type:"text",required:"",placeholder:"Contact/Lead Id"},model:{value:i.eligiblity_form.lead_id,callback:function(t){i.$set(i.eligiblity_form,"lead_id",t)},expression:"eligiblity_form.lead_id"}},[t("has-error",{attrs:{form:i.eligiblity_form,field:"lead_id"}})],1)],1),i._v(" "),t("button",{staticClass:"btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white",on:{click:i.onSubmit}},[i._v("Submit details")])],1)])])}),[],!1,null,"70f38e2e",null).exports}}]);