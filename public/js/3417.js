"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3417],{488:(t,a,e)=>{e.d(a,{Z:()=>i});var n=e(3645),r=e.n(n)()((function(t){return t[1]}));r.push([t.id,".fw-700[data-v-40fc4936]{font-weight:700}.input-box[data-v-40fc4936]{border:1px solid silver}.create_btn[data-v-40fc4936]{background:#00a1e4}#fade[data-v-40fc4936]{display:none}",""]);const i=r},3417:(t,a,e)=>{e.r(a),e.d(a,{default:()=>d});var n=e(478);const r={data:function(){return{branch_form:new Form({id:"",name:"",branch_id:"",address1:"",address2:"",city:"",state:"",zip_code:""}),action:"Add",action_name:"Add"}},methods:{onSubmit:function(t){var a=this;t.preventDefault(),"Add"==this.action?n.Z.post("/admin/create-branch",this.branch_form).then((function(t){t.data;a.$router.push("/admin/all-branches")})).catch((function(t){})):n.Z.put("/admin/edit-branch/".concat(this.branch_form.id),this.branch_form).then((function(t){t.data;$("#fade").fadeToggle(1e3),$("#fade").fadeToggle(1e3)}))},getData:function(t){var a=this;n.Z.get("/admin/all-branch/".concat(t)).then((function(t){var e=t.data;a.branch_form.fill(e[0])}))}},mounted:function(){this.get_item&&(this.getData(this.get_item),this.action="Save",this.action_name="Edit")},computed:{get_item:function(){return this.$route.params.id?this.$route.params.id:0}}};var i=e(3379),s=e.n(i),c=e(488),o={insert:"head",singleton:!1};s()(c.Z,o);c.Z.locals;const d=(0,e(1900).Z)(r,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"mt-10 p-5"},[a("b-form",{staticClass:"w-md-50 fw-700",on:{submit:t.onSubmit}},[a("h3",{staticClass:"fw-700"},[t._v(t._s(t.action_name)+" branch")]),t._v(" "),a("div",{staticClass:"bg-white p-10 rounded"},[a("div",{staticClass:"d-flex mb-7"},[a("b-form-input",{staticClass:"mx-1 input-box",attrs:{id:"input-1",type:"text",required:"",placeholder:"Enter branch name"},model:{value:t.branch_form.name,callback:function(a){t.$set(t.branch_form,"name",a)},expression:"branch_form.name"}}),t._v(" "),a("b-form-input",{staticClass:"ml-1 input-box",attrs:{id:"input-2",type:"text",required:"",placeholder:"Enter branch id"},model:{value:t.branch_form.branch_id,callback:function(a){t.$set(t.branch_form,"branch_id",a)},expression:"branch_form.branch_id"}})],1),t._v(" "),a("b-form-group",[a("b-form-input",{staticClass:"ml-1 input-box",attrs:{id:"input-4",type:"text",required:"",placeholder:"Address 1"},model:{value:t.branch_form.address1,callback:function(a){t.$set(t.branch_form,"address1",a)},expression:"branch_form.address1"}})],1),t._v(" "),a("b-form-group",[a("b-form-input",{staticClass:"ml-1 input-box",attrs:{id:"input-5",type:"text",placeholder:"Address 2"},model:{value:t.branch_form.address2,callback:function(a){t.$set(t.branch_form,"address2",a)},expression:"branch_form.address2"}})],1),t._v(" "),a("div",{staticClass:"d-flex"},[a("b-form-input",{staticClass:"mx-1 input-box",attrs:{id:"input-6",type:"text",required:"",placeholder:"City"},model:{value:t.branch_form.city,callback:function(a){t.$set(t.branch_form,"city",a)},expression:"branch_form.city"}}),t._v(" "),a("b-form-input",{staticClass:"mx-1 input-box",attrs:{id:"input-7",type:"text",required:"",placeholder:"State"},model:{value:t.branch_form.state,callback:function(a){t.$set(t.branch_form,"state",a)},expression:"branch_form.state"}}),t._v(" "),a("b-form-input",{staticClass:"ml-1 input-box",attrs:{id:"input-8",type:"number",required:"",placeholder:"Zip code"},model:{value:t.branch_form.zip_code,callback:function(a){t.$set(t.branch_form,"zip_code",a)},expression:"branch_form.zip_code"}})],1),t._v(" "),a("div",{staticClass:"alert alert-success my-3",attrs:{role:"alert",id:"fade"}},[a("span",{staticClass:"font-weight-bolder font-size-h6"},[t._v("Saved Successfully")])]),t._v(" "),a("button",{staticClass:"btn font-weight-bolder font-size-h6 py-3 mt-5 w-100 create_btn text-white"},[t._v(t._s(t.action)+" branch")])],1)])],1)}),[],!1,null,"40fc4936",null).exports}}]);