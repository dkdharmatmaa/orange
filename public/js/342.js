"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[342],{9296:(t,e,r)=>{r.d(e,{Z:()=>s});var a=r(3645),n=r.n(a)()((function(t){return t[1]}));n.push([t.id,".fw-700[data-v-90b5f1c8]{font-weight:700}.input-box[data-v-90b5f1c8]{border:1px solid silver;padding:4%}.create_btn[data-v-90b5f1c8]{background:#00a1e4}#fade[data-v-90b5f1c8],#fade1[data-v-90b5f1c8]{display:none}",""]);const s=n},342:(t,e,r)=>{r.r(e),r.d(e,{default:()=>m});var a=r(478),n=r(629),s=r(1163);function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==i(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===i(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const u={data:function(){return{user_form:new Form({name:"",email:""}),password_form:new Form({password:"",password_confirmation:""}),branch_detail:[],branch_id:""}},methods:{onSubmit:function(t){t.preventDefault(),a.Z.put("/user/upadte-detail",this.user_form).then((function(t){t.data;$("#fade1").fadeToggle(1e3),$("#fade1").fadeToggle(1e3)}))},submitPassword:function(t){var e=this;t.preventDefault(),a.Z.put("/user/update-password",this.password_form).then((function(t){t.data;e.$store.dispatch(s.Nv).then((function(){return e.$router.push("/login")}))}))},getBranch:function(){var t=this;a.Z.get("/user/all-branch/".concat(this.branch_id)).then((function(e){var r=e.data;t.branch_detail=r[0]}))}},mounted:function(){this.user_form.name=this.current_user.name,this.user_form.email=this.current_user.email,this.branch_id=this.selected_branch_id,this.getBranch()},computed:c(c({},(0,n.Se)({current_user:"currentUser"})),(0,n.Se)({selected_branch_id:"SelectedBranch"}))};var d=r(3379),f=r.n(d),_=r(9296),v={insert:"head",singleton:!1};f()(_.Z,v);_.Z.locals;const m=(0,r(1900).Z)(u,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-10 p-5 d-flex",staticStyle:{"justify-content":"space-between"}},[e("div",{staticClass:"w-md-50"},[e("div",[e("h3",{staticClass:"fw-700"},[t._v("Branch details")]),t._v(" "),e("div",{staticClass:"bg-white p-10 rounded"},[e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"ml-1"},[e("span",[t._v("Association name")]),t._v(" "),e("h5",[t._v(t._s(t.branch_detail.association_name))])]),t._v(" "),e("div",{staticClass:"ml-1"},[e("span",[t._v("Branch name")]),t._v(" "),e("h5",[t._v(t._s(t.branch_detail.name))])]),t._v(" "),e("div",{staticClass:"ml-1"},[e("span",[t._v("Branch id")]),t._v(" "),e("h5",[t._v(t._s(t.branch_detail.branch_id))])])]),t._v(" "),e("div",{staticClass:"ml-1 mt-5"},[e("span",[t._v("Address 1")]),t._v(" "),e("h5",[t._v(t._s(t.branch_detail.address1))])]),t._v(" "),e("div",{staticClass:"ml-1 mt-5"},[e("span",[t._v("Address 2")]),t._v(" "),e("h5",[t._v(t._s(t.branch_detail.address2))])]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between mt-5"},[e("div",{staticClass:"ml-1"},[e("span",[t._v("City")]),t._v(" "),e("h5",[t._v(t._s(t.branch_detail.city))])]),t._v(" "),e("div",{staticClass:"ml-1"},[e("span",[t._v("State")]),t._v(" "),e("h5",[t._v(t._s(t.branch_detail.state))])]),t._v(" "),e("div",{staticClass:"ml-1"},[e("span",[t._v("Zip")]),t._v(" "),e("h5",[t._v(t._s(t.branch_detail.zip_code))])])])])]),t._v(" "),e("b-form",{staticClass:"fw-700 mt-5"},[e("h3",{staticClass:"fw-700"},[t._v("Personal details")]),t._v(" "),e("div",{staticClass:"bg-white p-10 rounded"},[e("b-form-group",[e("b-form-input",{staticClass:"ml-1 input-box",attrs:{id:"input-3",type:"text",required:"",readonly:"",placeholder:"Name"},model:{value:t.user_form.name,callback:function(e){t.$set(t.user_form,"name",e)},expression:"user_form.name"}})],1),t._v(" "),e("b-form-group",[e("b-form-input",{staticClass:"ml-1 input-box",attrs:{id:"input-3",type:"email",required:"",placeholder:"Email",readonly:""},model:{value:t.user_form.email,callback:function(e){t.$set(t.user_form,"email",e)},expression:"user_form.email"}})],1)],1)])],1)])}),[],!1,null,"90b5f1c8",null).exports}}]);