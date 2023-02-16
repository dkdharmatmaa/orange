"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_pages_Account_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/auth.module */ "./resources/js/src/core/services/store/auth.module.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user_form: new Form({
        name: "",
        email: ""
      }),
      password_form: new Form({
        password: "",
        password_confirmation: ""
      }),
      branch_detail: [],
      branch_id: ''
    };
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      evt.preventDefault();
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].put("/user/upadte-detail", this.user_form).then(function (_ref) {
        var data = _ref.data;
        $('#fade1').fadeToggle(1000);
        $('#fade1').fadeToggle(1000);
      });
    },
    submitPassword: function submitPassword(evt) {
      var _this = this;
      evt.preventDefault();
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].put("/user/update-password", this.password_form).then(function (_ref2) {
        var data = _ref2.data;
        _this.$store.dispatch(_core_services_store_auth_module__WEBPACK_IMPORTED_MODULE_1__.LOGOUT).then(function () {
          return _this.$router.push('/login');
        });
      });
    },
    getBranch: function getBranch() {
      var _this2 = this;
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].get("/user/all-branch/".concat(this.branch_id)).then(function (_ref3) {
        var data = _ref3.data;
        _this2.branch_detail = data[0];
      });
    }
  },
  mounted: function mounted() {
    this.user_form.name = this.current_user.name;
    this.user_form.email = this.current_user.email;
    this.branch_id = this.selected_branch_id;
    this.getBranch();
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    current_user: 'currentUser'
  })), (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    selected_branch_id: 'SelectedBranch'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=template&id=55a94d61&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=template&id=55a94d61&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mt-10 p-5 d-flex",
    staticStyle: {
      "justify-content": "space-between"
    }
  }, [_c("div", {
    staticClass: "w-md-50"
  }, [_c("div", [_c("h3", {
    staticClass: "fw-700"
  }, [_vm._v("Branch details")]), _vm._v(" "), _c("div", {
    staticClass: "bg-white p-10 rounded"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "ml-1"
  }, [_c("span", [_vm._v("Association name")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.branch_detail.association_name))])]), _vm._v(" "), _c("div", {
    staticClass: "ml-1"
  }, [_c("span", [_vm._v("Branch name")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.branch_detail.name))])]), _vm._v(" "), _c("div", {
    staticClass: "ml-1"
  }, [_c("span", [_vm._v("Branch id")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.branch_detail.branch_id))])])]), _vm._v(" "), _c("div", {
    staticClass: "ml-1 mt-5"
  }, [_c("span", [_vm._v("Address 1")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.branch_detail.address1))])]), _vm._v(" "), _c("div", {
    staticClass: "ml-1 mt-5"
  }, [_c("span", [_vm._v("Address 2")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.branch_detail.address2))])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mt-5"
  }, [_c("div", {
    staticClass: "ml-1"
  }, [_c("span", [_vm._v("City")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.branch_detail.city))])]), _vm._v(" "), _c("div", {
    staticClass: "ml-1"
  }, [_c("span", [_vm._v("State")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.branch_detail.state))])]), _vm._v(" "), _c("div", {
    staticClass: "ml-1"
  }, [_c("span", [_vm._v("Zip")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.branch_detail.zip_code))])])])])]), _vm._v(" "), _c("b-form", {
    staticClass: "fw-700 mt-5"
  }, [_c("h3", {
    staticClass: "fw-700"
  }, [_vm._v("Personal details")]), _vm._v(" "), _c("div", {
    staticClass: "bg-white p-10 rounded"
  }, [_c("b-form-group", [_c("b-form-input", {
    staticClass: "ml-1 input-box",
    attrs: {
      id: "input-3",
      type: "text",
      required: "",
      readonly: "",
      placeholder: "Name"
    },
    model: {
      value: _vm.user_form.name,
      callback: function callback($$v) {
        _vm.$set(_vm.user_form, "name", $$v);
      },
      expression: "user_form.name"
    }
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-input", {
    staticClass: "ml-1 input-box",
    attrs: {
      id: "input-3",
      type: "email",
      required: "",
      placeholder: "Email",
      readonly: ""
    },
    model: {
      value: _vm.user_form.email,
      callback: function callback($$v) {
        _vm.$set(_vm.user_form, "email", $$v);
      },
      expression: "user_form.email"
    }
  })], 1)], 1)])], 1)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fw-700[data-v-55a94d61]{\r\n    font-weight: 700;\n}\n.input-box[data-v-55a94d61]{\r\n    padding: 4%;\r\n    border: 1px silver solid;\n}\n.create_btn[data-v-55a94d61]{\r\n    background: #00A1E4;\n}\n#fade[data-v-55a94d61]{\r\n  display: none;\n}\n#fade1[data-v-55a94d61]{\r\n  display: none;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_55a94d61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_55a94d61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_55a94d61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/view/pages/Account.vue":
/*!*************************************************!*\
  !*** ./resources/js/src/view/pages/Account.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Account_vue_vue_type_template_id_55a94d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account.vue?vue&type=template&id=55a94d61&scoped=true& */ "./resources/js/src/view/pages/Account.vue?vue&type=template&id=55a94d61&scoped=true&");
/* harmony import */ var _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/Account.vue?vue&type=script&lang=js&");
/* harmony import */ var _Account_vue_vue_type_style_index_0_id_55a94d61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css& */ "./resources/js/src/view/pages/Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Account_vue_vue_type_template_id_55a94d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Account_vue_vue_type_template_id_55a94d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "55a94d61",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/Account.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/Account.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/view/pages/Account.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/Account.vue?vue&type=template&id=55a94d61&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/Account.vue?vue&type=template&id=55a94d61&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_55a94d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_55a94d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_55a94d61_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=template&id=55a94d61&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=template&id=55a94d61&scoped=true&");


/***/ }),

/***/ "./resources/js/src/view/pages/Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_style_index_0_id_55a94d61_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/Account.vue?vue&type=style&index=0&id=55a94d61&scoped=true&lang=css&");


/***/ })

}]);