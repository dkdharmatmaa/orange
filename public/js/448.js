"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[448],{37:(t,a,n)=>{n.d(a,{Z:()=>i});var e=n(3645),r=n.n(e)()((function(t){return t[1]}));r.push([t.id,".fw-700[data-v-66d9499c]{font-weight:700}.input-box[data-v-66d9499c]{border:1px solid silver}.create_btn[data-v-66d9499c]{background:#ed700f}#fade[data-v-66d9499c]{display:none}",""]);const i=r},2448:(t,a,n)=>{n.r(a),n.d(a,{default:()=>h});var e=n(478);const r={data:function(){return{branch_form:new Form({id:"",branch_name:"",branch_id:"",branch_location:""}),action:"Create",action_name:"Create"}},methods:{onSubmit:function(t){var a=this;t.preventDefault(),"Create"==this.action?e.Z.post("/admin/create-branch",this.branch_form).then((function(t){t.data;a.$router.push("/admin/branches")})).catch((function(t){})):e.Z.put("/admin/edit-branch/".concat(this.branch_form.id),this.branch_form).then((function(t){t.data;$("#fade").fadeToggle(1e3),$("#fade").fadeToggle(1e3)}))},getData:function(t){var a=this;e.Z.get("/admin/all-branch").then((function(t){var n=t.data;a.branch_form.fill(n[0])}))}},mounted:function(){this.get_item&&(this.getData(this.get_item),this.action="Save",this.action_name="Edit")},computed:{get_item:function(){return this.$route.params.id?this.$route.params.id:0}}};var i=n(3379),c=n.n(i),o=n(37),s={insert:"head",singleton:!1};c()(o.Z,s);o.Z.locals;const h=(0,n(1900).Z)(r,(function(){var t=this,a=t._self._c;return a("div",{staticClass:"mt-10 p-5"},[a("b-form",{staticClass:"w-md-50 fw-700",on:{submit:t.onSubmit}},[a("h3",{staticClass:"fw-700"},[t._v(t._s(t.action_name)+" branch")]),t._v(" "),a("div",{staticClass:"bg-white p-10 mt-5 rounded"},[a("b-form-group",[a("b-form-input",{staticClass:"mx-1 input-box",attrs:{id:"input-1",type:"text",required:"",placeholder:"Enter branch name"},model:{value:t.branch_form.branch_name,callback:function(a){t.$set(t.branch_form,"branch_name",a)},expression:"branch_form.branch_name"}})],1),t._v(" "),a("b-form-group",[a("b-form-input",{staticClass:"ml-1 input-box",attrs:{id:"input-2",type:"text",required:"",placeholder:"Enter branch id"},model:{value:t.branch_form.branch_id,callback:function(a){t.$set(t.branch_form,"branch_id",a)},expression:"branch_form.branch_id"}})],1),t._v(" "),a("b-form-group",[a("b-form-input",{staticClass:"ml-1 input-box",attrs:{id:"input-4",type:"text",required:"",placeholder:"Location"},model:{value:t.branch_form.branch_location,callback:function(a){t.$set(t.branch_form,"branch_location",a)},expression:"branch_form.branch_location"}})],1),t._v(" "),a("div",{staticClass:"alert alert-success my-3",attrs:{role:"alert",id:"fade"}},[a("span",{staticClass:"font-weight-bolder font-size-h6"},[t._v("Saved Successfully")])]),t._v(" "),a("button",{staticClass:"btn font-weight-bolder font-size-h6 py-3 mt-5 w-100 create_btn text-white"},[t._v(t._s(t.action)+" branch")])],1)])],1)}),[],!1,null,"66d9499c",null).exports}}]);