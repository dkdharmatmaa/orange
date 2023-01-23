"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3730],{7551:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(3645),a=n.n(i)()((function(e){return e[1]}));a.push([e.id,".create_btn[data-v-638de20b]{background:#00a1e4}#fade[data-v-638de20b]{display:none}",""]);const r=a},3730:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i=n(478);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const c={data:function(){return{main_arr:[],add_incomebind_active:!1,incomebind_min:"",incomebind_max:"",edit_incomebind:!1,branch_id:"",options_branch:[]}},methods:{add_plan:function(e){var t=this.main_arr[e],n=t.plan_name;t.fields.push(n);for(var i=0;i<t.items;i++)t.items[i].push({main_plan:""});this.main_arr[e].plan_name=""},add_no_of_people:function(e){var t=this.main_arr[e].fields.reduce((function(e,t){return o(o({},e),{},s({},t,""))}),{});this.main_arr[e].items.push(t)},add_incomebind:function(){this.main_arr.push({minmum_range:this.incomebind_min,maximum_range:this.incomebind_max,plan_name:"",fields:["index","action","no_of_peoples"],items:[{index:"",action:"",no_of_peoples:1}]}),this.add_incomebind_active=!1,this.incomebind_min="",this.incomebind_max=""},copy_plan:function(e){var t=this.main_arr[e],n=$.extend(!0,{},t);this.main_arr.push(n)},delete_plan:function(e,t,n){this.main_arr[e].fields.splice(t,1);for(var i=0;i<this.main_arr[e].items.length;i++)delete this.main_arr[e].items[i][n]},delete_row:function(e,t){this.main_arr[e].items.splice(t,1)},onSubmit:function(e){var t=this;e.preventDefault(),this.branch_id?i.Z.post("/admin/create-matrix/".concat(this.branch_id),this.main_arr).then((function(e){e.data;t.$router.push("/admin/all-matrix")})).catch((function(e){})):alert("Select correct Association and Branch")},getBranches:function(){var e=this;i.Z.get("/admin/all-branch").then((function(t){var n=t.data,i=[];i.push({value:"",text:"Assign branch"});for(var a=0;a<n.length;a++)i.push({value:n[a].id,text:n[a].name});e.options_branch=i}))}},mounted:function(){this.getBranches()}};var l=n(3379),d=n.n(l),m=n(7551),u={insert:"head",singleton:!1};d()(m.Z,u);m.Z.locals;const p=(0,n(1900).Z)(c,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mt-5"},[t("div",{staticClass:"d-flex"},[t("h2",{staticClass:"font-weight-bolder"},[e._v("Membership plans")]),e._v(" "),t("b-form-group",{staticClass:"ml-3"},[t("b-form-select",{staticClass:"input-box text-seconday",attrs:{id:"input-4",options:e.options_branch,required:""},model:{value:e.branch_id,callback:function(t){e.branch_id=t},expression:"branch_id"}})],1),e._v(" "),t("div",{staticClass:"ml-3"},[t("button",{staticClass:"btn create_btn font-weight-bolder text-white",on:{click:function(t){e.add_incomebind_active=!e.add_incomebind_active}}},[e._v("Add income band")])])],1),e._v(" "),e.add_incomebind_active?t("div",{staticClass:"d-flex mt-8"},[t("h5",{staticClass:"mt-3 font-weight-bolder"},[e._v("Income band")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.incomebind_min,expression:"incomebind_min"}],staticClass:"border rounded border-secondary bg-white ml-2 p-1",attrs:{type:"number",placeholder:"Minimum income in $"},domProps:{value:e.incomebind_min},on:{input:function(t){t.target.composing||(e.incomebind_min=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.incomebind_max,expression:"incomebind_max"}],staticClass:"border rounded border-secondary bg-white ml-2 p-1",attrs:{type:"number",placeholder:"Maximum income in $"},domProps:{value:e.incomebind_max},on:{input:function(t){t.target.composing||(e.incomebind_max=t.target.value)}}}),e._v(" "),t("button",{staticClass:"btn create_btn font-weight-bolder py-2 ml-2 text-white",on:{click:function(t){return e.add_incomebind()}}},[e._v("Save details")])]):e._e(),e._v(" "),e._l(e.main_arr,(function(n,i){return t("div",{key:n.name},[t("div",{staticClass:"bg-white px-5 py-10 mt-5 rounded"},[e.edit_incomebind?t("div",{staticClass:"d-flex my-8"},[t("input",{directives:[{name:"model",rawName:"v-model",value:n.minmum_range,expression:"single_arr.minmum_range"}],staticClass:"border rounded border-secondary bg-white ml-2 p-1",attrs:{type:"number",placeholder:"Minimum income in $"},domProps:{value:n.minmum_range},on:{input:function(t){t.target.composing||e.$set(n,"minmum_range",t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.maximum_range,expression:"single_arr.maximum_range"}],staticClass:"border rounded border-secondary bg-white ml-2 p-1",attrs:{type:"number",placeholder:"Maximum income in $"},domProps:{value:n.maximum_range},on:{input:function(t){t.target.composing||e.$set(n,"maximum_range",t.target.value)}}}),e._v(" "),t("button",{staticClass:"btn create_btn font-weight-bolder py-2 ml-2 text-white",on:{click:function(t){e.edit_incomebind=!e.edit_incomebind}}},[e._v("Save")])]):t("div",{staticClass:"d-flex"},[t("h3",{staticClass:"font-weight-bolder mb-4"},[e._v("Income band - $"+e._s(n.minmum_range)+"-$"+e._s(n.maximum_range))]),e._v("\n           "),t("span",{on:{click:function(t){e.edit_incomebind=!e.edit_incomebind}}},[t("i",{staticClass:"fas fa-edit"})])]),e._v(" "),t("button",{staticClass:"create_btn font-weight-bolder text-white rounded p-1"},[e._v("+Add plan")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.plan_name,expression:"single_arr.plan_name"}],staticClass:"rounded p-1",staticStyle:{border:"2px solid silver"},attrs:{type:"text"},domProps:{value:n.plan_name},on:{blur:function(t){return e.add_plan(i)},input:function(t){t.target.composing||e.$set(n,"plan_name",t.target.value)}}}),e._v(" "),t("b-table",{staticStyle:{"white-space":"nowrap"},attrs:{responsive:"",items:n.items,fields:n.fields},scopedSlots:e._u([e._l(n.fields,(function(n,a){return{key:"head(".concat(n,")"),fn:function(n){return["index"!=n.field.key?t("span",{domProps:{innerHTML:e._s(n.field.label)}}):e._e(),e._v(" "),"action"!=n.field.key&&"index"!=n.field.key&&"no_of_peoples"!=n.field.key?t("span",{staticClass:"text-danger",on:{click:function(t){return e.delete_plan(i,a,n.field.key)}}},[e._v(" | "),t("svg",{staticClass:"bi bi-trash",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}}),t("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}})])]):e._e()]}}})),e._l(n.fields,(function(n){return{key:"cell(".concat(n,")"),fn:function(n){return["action"==n.field.key?[t("span",{staticClass:"text-danger",on:{click:function(t){return e.delete_row(i,n.index)}}},[t("svg",{staticClass:"bi bi-trash",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",viewBox:"0 0 16 16"}},[t("path",{attrs:{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}}),t("path",{attrs:{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}})])])]:"index"!=n.field.key?[t("input",{directives:[{name:"model",rawName:"v-model",value:n.item[n.field.key],expression:"data.item[data.field.key]"}],staticClass:"rounded p-1",staticStyle:{border:"2px solid silver"},attrs:{type:"text"},domProps:{value:n.item[n.field.key]},on:{input:function(t){t.target.composing||e.$set(n.item,n.field.key,t.target.value)}}})]:e._e()]}}}))],null,!0)}),e._v(" "),t("div",[t("button",{staticClass:"create_btn font-weight-bolder text-white rounded p-1",on:{click:function(t){return e.add_no_of_people(i)}}},[e._v("+Add peoples")]),e._v(" "),t("span",{staticClass:"glyphicon glyphicon-folder-open bg-success float-right py-1 px-3 text-white rounded",on:{click:function(t){return e.copy_plan(i)}}},[t("i",{staticClass:"fas fa-copy text-white"}),e._v(" Copy")])])],1)])})),e._v(" "),t("div",{staticClass:"my-10 text-center"},[e.main_arr.length?t("button",{staticClass:"btn create_btn font-weight-bolder text-white w-50 h3",on:{click:e.onSubmit}},[e._v("Submit all details")]):e._e()])],2)}),[],!1,null,"638de20b",null).exports}}]);