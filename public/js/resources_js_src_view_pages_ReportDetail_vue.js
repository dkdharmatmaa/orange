"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_pages_ReportDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "userReportDetail",
  data: function data() {
    return {
      all_data: [],
      data_loaded: false
    };
  },
  methods: {
    get_report: function get_report() {
      var _this = this;
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].get("/user/report-single/".concat(this.$route.params.id)).then(function (_ref) {
        var data = _ref.data;
        _this.all_data = data;
        _this.data_loaded = true;
      });
    }
  },
  mounted: function mounted() {
    this.get_report();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=template&id=e8bcc5be&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=template&id=e8bcc5be& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_loaded ? _c("div", {
    staticClass: "mt-5"
  }, [_c("div", {
    staticClass: "ml-2"
  }, [_c("h3", {
    staticClass: "font-weight-bolder"
  }, [_vm._v("Customer information")]), _vm._v(" "), _c("div", {
    staticClass: "customer-div"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "inner-box-45"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Full name")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["name"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-45"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("MBO ID")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["mbo_id"]))])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mt-5"
  }, [_c("div", {
    staticClass: "inner-box-45"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Phone Number")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["phone_number"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-45"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["email"]))])])])])]), _vm._v(" "), _c("h3", {
    staticClass: "font-weight-bolder mt-10"
  }, [_vm._v("Transaction Information")]), _vm._v(" "), _c("div", {
    staticClass: "customer-div"
  }, [_c("div", {
    staticClass: "inner-box-100"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["date"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-100"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Membership type")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["product"]["name"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-100"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Transaction Type")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["payment_type"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-100"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Amount Received")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["advance_payment"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mt-5"
  }, [_c("div", {
    staticClass: "inner-box-45"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Pricing")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["membership_price"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-45"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Advance Payment")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["advance_payment"]))])])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-100"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Recurring Amount")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["recurring_amount"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_c("label", [_vm._v("Billing Terms")]), _vm._v(" "), _c("div", {
    staticClass: "p-3",
    staticStyle: {
      border: "1px solid silver"
    }
  }, [_c("div", {
    staticClass: "d-flex justify-content-between mt-5"
  }, [_c("div", {
    staticClass: "inner-box-45"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("From")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["installment_from"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-45"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("To")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["installment_to"]))])])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex justify-content-between mt-5"
  }, [_c("div", {
    staticClass: "inner-box-45"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Number of Installments")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["no_of_installment"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-45"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Amount Per Month")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["installment_amount"]))])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-100"
  }, [_c("div", {
    staticClass: "b-3 px-2 py-1"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Transaction ID")]), _vm._v(" "), _vm.all_data["transaction"] ? _c("h5", [_vm._v(_vm._s(_vm.all_data["transaction"]["transaction_id"]))]) : _c("h5", [_vm._v(_vm._s(_vm.all_data["transaction_id"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "inner-box-full p-3 mt-5"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Comments")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["comment"]))])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-7 w-50"
  }, [_c("div", {
    staticClass: "d-flex justify-content-between"
  }, [_c("div", {
    staticClass: "customer-div-45"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("User Name")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["name"]))])]), _vm._v(" "), _c("div", {
    staticClass: "customer-div-45"
  }, [_c("label", {
    attrs: {
      "for": ""
    }
  }, [_vm._v("Branch Name")]), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.all_data["branch"]["branch_name"]))])])])])]), _vm._v(" "), _c("div")]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.customer-div{\r\n    margin-top: 5px;\r\n    padding: 5px;\r\n    background: white;\r\n    width: 50%;\r\n    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);\n}\n.customer-div-45{\r\n    margin-top: 5px;\r\n    padding: 2%;\r\n    background: white;\r\n    width: 45%;\r\n    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1);\n}\n.inner-box-45{\r\n    background: #FBFAFA;\r\n    border-bottom: 2px solid silver;\r\n    width: 45%;\n}\n.inner-box-100{\r\n    background: #FBFAFA;\r\n    border-bottom: 2px solid silver;\r\n    margin-top: 2.5%;\n}\n.inner-box-full{\r\n    background: #FBFAFA;\r\n    border: 2px solid silver;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportDetail_vue_vue_type_style_index_0_id_e8bcc5be_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportDetail_vue_vue_type_style_index_0_id_e8bcc5be_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportDetail_vue_vue_type_style_index_0_id_e8bcc5be_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/view/pages/ReportDetail.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/view/pages/ReportDetail.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ReportDetail_vue_vue_type_template_id_e8bcc5be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportDetail.vue?vue&type=template&id=e8bcc5be& */ "./resources/js/src/view/pages/ReportDetail.vue?vue&type=template&id=e8bcc5be&");
/* harmony import */ var _ReportDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/ReportDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _ReportDetail_vue_vue_type_style_index_0_id_e8bcc5be_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css& */ "./resources/js/src/view/pages/ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ReportDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportDetail_vue_vue_type_template_id_e8bcc5be___WEBPACK_IMPORTED_MODULE_0__.render,
  _ReportDetail_vue_vue_type_template_id_e8bcc5be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/ReportDetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/ReportDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/view/pages/ReportDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/ReportDetail.vue?vue&type=template&id=e8bcc5be&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/view/pages/ReportDetail.vue?vue&type=template&id=e8bcc5be& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportDetail_vue_vue_type_template_id_e8bcc5be___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportDetail_vue_vue_type_template_id_e8bcc5be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportDetail_vue_vue_type_template_id_e8bcc5be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportDetail.vue?vue&type=template&id=e8bcc5be& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=template&id=e8bcc5be&");


/***/ }),

/***/ "./resources/js/src/view/pages/ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportDetail_vue_vue_type_style_index_0_id_e8bcc5be_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/ReportDetail.vue?vue&type=style&index=0&id=e8bcc5be&lang=css&");


/***/ })

}]);