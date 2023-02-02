"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9836],{9796:(t,e,r)=>{r.d(e,{Z:()=>a});var s=r(3645),i=r.n(s)()((function(t){return t[1]}));i.push([t.id,".fw-700[data-v-487b2d34]{font-weight:700}.input-box[data-v-487b2d34]{border:1px solid silver}.create_btn[data-v-487b2d34]{background:#00a1e4}#fade[data-v-487b2d34]{display:none}",""]);const a=i},9836:(t,e,r)=>{r.r(e),r.d(e,{default:()=>b});var s=r(175),i=r.n(s),a=r(478);function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function c(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var s=r.call(t,e||"default");if("object"!==n(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const u={data:function(){return{user_form:new(i())({id:"",name:"",email:"",password:"",association_id:"",branch_id:"",is_admin:!1}),options_branch:null,action:"Add"}},methods:{onSubmit:function(t){var e=this;t.preventDefault(),"Add"==this.action?a.Z.post("/admin/create-user",this.user_form).then((function(t){t.data;e.$router.push("/admin/all-users")})).catch((function(t){})):a.Z.put("/admin/edit-user/".concat(this.user_form.id),this.user_form).then((function(t){t.data;$("#fade").fadeToggle(1e3),$("#fade").fadeToggle(1e3)}))},getData:function(t){var e=this;a.Z.get("/admin/all-user/".concat(t)).then((function(t){var r=t.data;e.user_form.fill(r[0]),e.getBranches(),e.user_form.branch_id=r[0].branch_id+"/////"+r[0].branch_name}))},getBranches:function(){var t=this;a.Z.get("/admin/all-branch").then((function(e){var r=e.data,s=[];s.push({value:"",text:"Assign branch"});for(var i=0;i<r.length;i++)s.push({value:r[i].id+"/////"+r[i].name,text:r[i].name});t.options_branch=s}))}},mounted:function(){this.get_item&&(this.getData(this.get_item),this.action="Edit"),this.getBranches(),this.user_form.association_id=this.currentUser.id},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({get_item:function(){return this.$route.params.id?this.$route.params.id:0}},(0,r(629).Se)({currentUser:"currentUser"}))};var d=r(3379),l=r.n(d),m=r(9796),f={insert:"head",singleton:!1};l()(m.Z,f);m.Z.locals;const b=(0,r(1900).Z)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 p-5"},[e("b-form",{staticClass:"w-md-50 fw-700",on:{submit:t.onSubmit}},[e("h3",{staticClass:"fw-700"},[t._v(t._s(t.action)+" users")]),t._v(" "),e("div",{staticClass:"bg-white p-10 rounded"},[e("div",{staticClass:"d-flex mb-7"},[e("b-form-input",{staticClass:"mx-1 input-box",attrs:{id:"input-1",type:"text",required:"",placeholder:"Name"},model:{value:t.user_form.name,callback:function(e){t.$set(t.user_form,"name",e)},expression:"user_form.name"}}),t._v(" "),e("b-form-input",{staticClass:"mx-1 input-box",attrs:{id:"input-2",type:"email",required:"",placeholder:"Email",readonly:"Edit"==t.action},model:{value:t.user_form.email,callback:function(e){t.$set(t.user_form,"email",e)},expression:"user_form.email"}})],1),t._v(" "),e("b-form-group",[e("b-form-select",{staticClass:"ml-1 input-box text-seconday",attrs:{id:"input-4",options:t.options_branch,required:""},model:{value:t.user_form.branch_id,callback:function(e){t.$set(t.user_form,"branch_id",e)},expression:"user_form.branch_id"}})],1),t._v(" "),"Add"==t.action?e("b-form-group",[e("b-form-input",{staticClass:"ml-1 input-box",attrs:{id:"input-5",type:"password",required:"",placeholder:"Password"},model:{value:t.user_form.password,callback:function(e){t.$set(t.user_form,"password",e)},expression:"user_form.password"}})],1):t._e(),t._v(" "),e("div",[e("div",{staticClass:"d-flex"},[e("div",{staticClass:"flex-fill border-top border-2 border-secondary h1"}),t._v(" "),e("div",{staticClass:"h6 text-center font-weight-bolder"},[t._v("Permission")]),t._v(" "),e("div",{staticClass:"flex-fill border-bottom border-2 border-secondary h1"})]),t._v(" "),e("p",{staticClass:"h6"},[t._v("Branch admin")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_form.is_admin,expression:"user_form.is_admin"}],attrs:{type:"checkbox",value:"true"},domProps:{checked:Array.isArray(t.user_form.is_admin)?t._i(t.user_form.is_admin,"true")>-1:t.user_form.is_admin},on:{change:function(e){var r=t.user_form.is_admin,s=e.target,i=!!s.checked;if(Array.isArray(r)){var a="true",n=t._i(r,a);s.checked?n<0&&t.$set(t.user_form,"is_admin",r.concat([a])):n>-1&&t.$set(t.user_form,"is_admin",r.slice(0,n).concat(r.slice(n+1)))}else t.$set(t.user_form,"is_admin",i)}}}),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("Can create / edit more branch users")])]),t._v(" "),e("div",{staticClass:"alert alert-success mt-3",attrs:{role:"alert",id:"fade"}},[e("span",{staticClass:"font-weight-bolder font-size-h6"},[t._v("Saved Successfully")])]),t._v(" "),e("button",{staticClass:"btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white mt-3"},[t._v(t._s(t.action)+" user")])],1)])],1)}),[],!1,null,"487b2d34",null).exports}}]);