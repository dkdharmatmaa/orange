"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_admin_UserDetails_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      user_id: '',
      branch_detail: [],
      plans: null,
      data_loded: false
    };
  },
  methods: {
    getUserSumissionDetail: function getUserSumissionDetail() {
      var _this = this;
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].get("/admin/user-sumission-detail/".concat(this.user_id)).then(function (_ref) {
        var data = _ref.data;
        _this.branch_detail = data;
        if (data['plans']) {
          var plan_data = JSON.parse(data['plans']['plans']);
          delete plan_data.index;
          delete plan_data.action;
          delete plan_data.no_of_people;
          _this.plans = plan_data;
        }
        _this.data_loded = true;
      });
    }
  },
  mounted: function mounted() {
    this.user_id = this.$route.params.id;
    this.getUserSumissionDetail();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=template&id=4a3d5c94&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=template&id=4a3d5c94&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.data_loded ? _c("div", {
    staticClass: "row"
  }, [_c("h2", {
    staticClass: "ml-5"
  }, [_vm._v(_vm._s(_vm.branch_detail["association"]["association_name"]))]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-12 mt-3"
  }, [_c("h3", [_vm._v("Submission details")]), _vm._v(" "), _c("div", {
    staticClass: "mb-5"
  }, [_c("div", {
    staticClass: "bg-white p-5 rounded",
    staticStyle: {
      width: "auto",
      "float": "left"
    }
  }, [_c("h4", [_vm._v(_vm._s(_vm.branch_detail["association"]["name"]))]), _vm._v(" "), _c("h4", [_vm._v(_vm._s(_vm.moment(_vm.branch_detail["created_at"]).format("MM-DD-YYYY HH:mm:ss")))])])]), _vm._v(" "), _c("br"), _c("br"), _c("br"), _c("br"), _c("br"), _vm._v(" "), _c("h3", {
    staticClass: "mb-1 mt-3"
  }, [_vm._v("Personal details")]), _vm._v(" "), _c("div", {
    staticClass: "bg-white p-5 rounded",
    staticStyle: {
      "margin-right": "2%"
    }
  }, [_c("div", {
    staticClass: "mb-3",
    staticStyle: {
      width: "48%",
      "float": "right"
    }
  }, [_c("span", [_vm._v("Last name")]), _c("br"), _vm._v(" "), _c("input", {
    staticClass: "input-value",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.branch_detail["last_name"]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    staticStyle: {
      width: "48%"
    }
  }, [_c("span", [_vm._v("First name")]), _c("br"), _vm._v(" "), _c("input", {
    staticClass: "input-value",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.branch_detail["first_name"]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    staticStyle: {
      width: "48%",
      "float": "right"
    }
  }, [_c("span", [_vm._v("Number of people in household")]), _c("br"), _vm._v(" "), _c("input", {
    staticClass: "input-value",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.branch_detail["no_of_people"]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    staticStyle: {
      width: "48%"
    }
  }, [_c("span", [_vm._v("Email id")]), _c("br"), _vm._v(" "), _c("input", {
    staticClass: "input-value",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.branch_detail["email_id"]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("span", [_vm._v("Address")]), _c("br"), _vm._v(" "), _c("input", {
    staticClass: "input-value",
    staticStyle: {
      padding: "7px"
    },
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.branch_detail["street_address"]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    staticStyle: {
      width: "31%",
      "float": "right"
    }
  }, [_c("span", [_vm._v("Zip code")]), _c("br"), _vm._v(" "), _c("input", {
    staticClass: "input-value",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.branch_detail["zip_code"]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    staticStyle: {
      width: "31%",
      "float": "right",
      "padding-right": "4%"
    }
  }, [_c("span", [_vm._v("State")]), _c("br"), _vm._v(" "), _c("input", {
    staticClass: "input-value",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.branch_detail["state"]
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "mb-3",
    staticStyle: {
      width: "31%"
    }
  }, [_c("span", [_vm._v("City")]), _c("br"), _vm._v(" "), _c("input", {
    staticClass: "input-value",
    attrs: {
      type: "text",
      readonly: ""
    },
    domProps: {
      value: _vm.branch_detail["city"]
    }
  })])]), _vm._v(" "), _vm.branch_detail["comment"] ? _c("div", {
    staticClass: "bg-white px-3 pb-1 mt-5 rounded",
    staticStyle: {
      "margin-right": "2%"
    }
  }, [_c("span", [_vm._v("Comments")]), _c("br"), _vm._v(" "), _c("h5", [_vm._v(_vm._s(_vm.branch_detail["comment"]))])]) : _vm._e(), _vm._v(" "), _c("p", {
    staticClass: "fw mt-5",
    staticStyle: {
      "font-size": "18px"
    }
  }, [_vm._v(_vm._s(_vm.branch_detail["first_name"]) + "\n            "), _vm.branch_detail["api_status"] == "Qualified" ? _c("span", [_vm._v(" \n              is qualified for the following financial assistance.\n            ")]) : _vm.branch_detail["api_status"] == "Not Qualified" ? _c("span", [_vm._v("\n              is not qualified for any financial assistance.\n            ")]) : _c("span", [_vm._v("\n              - There was no match for this data.\n            ")])]), _vm._v(" "), _c("div", {
    staticClass: "table-responsive text-center bg-white",
    staticStyle: {
      width: "50%"
    }
  }, [_c("table", {
    staticClass: "table table-striped p-2"
  }, [_c("tbody", _vm._l(_vm.plans, function (key, value) {
    return _c("tr", [_c("td", [_vm._v(_vm._s(value))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(key))])]);
  }), 0)])])])]) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.input-value[data-v-4a3d5c94]{\r\n    padding: 1.5%;\r\n    border: 0;\r\n    font-size: 16px;\r\n    box-shadow: -3px 1px 2px 1px rgb(0 0 0 / 20%);\n}\n.input-value[data-v-4a3d5c94]:focus {\r\n  outline: none;\n}\n.col-sm-12[data-v-4a3d5c94]{\r\n    margin-left: 7px;\r\n    background: #F0F2F5;\r\n    color: black;\n}\n.table-striped>tbody>tr:nth-child(even)>td[data-v-4a3d5c94] {\r\n   background-color: #00A1E4; \r\n   opacity: 60%;\r\n   color: black;\r\n   font-weight: 900;\n}\n.table-striped>tbody>tr:nth-child(odd)>td[data-v-4a3d5c94] {\r\n    background-color: whitesmoke; \r\n   opacity: 60%;\r\n   color: black;\r\n   font-weight: 900;\n}\n.display-flex[data-v-4a3d5c94]{\r\n    display: flex !important;\n}\n.fw[data-v-4a3d5c94]{\r\n    font-weight: bolder;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetails_vue_vue_type_style_index_0_id_4a3d5c94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetails_vue_vue_type_style_index_0_id_4a3d5c94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetails_vue_vue_type_style_index_0_id_4a3d5c94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/view/admin/UserDetails.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/view/admin/UserDetails.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserDetails_vue_vue_type_template_id_4a3d5c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDetails.vue?vue&type=template&id=4a3d5c94&scoped=true& */ "./resources/js/src/view/admin/UserDetails.vue?vue&type=template&id=4a3d5c94&scoped=true&");
/* harmony import */ var _UserDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDetails.vue?vue&type=script&lang=js& */ "./resources/js/src/view/admin/UserDetails.vue?vue&type=script&lang=js&");
/* harmony import */ var _UserDetails_vue_vue_type_style_index_0_id_4a3d5c94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css& */ "./resources/js/src/view/admin/UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDetails_vue_vue_type_template_id_4a3d5c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserDetails_vue_vue_type_template_id_4a3d5c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4a3d5c94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/admin/UserDetails.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/admin/UserDetails.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/view/admin/UserDetails.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/admin/UserDetails.vue?vue&type=template&id=4a3d5c94&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/admin/UserDetails.vue?vue&type=template&id=4a3d5c94&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetails_vue_vue_type_template_id_4a3d5c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetails_vue_vue_type_template_id_4a3d5c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetails_vue_vue_type_template_id_4a3d5c94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDetails.vue?vue&type=template&id=4a3d5c94&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=template&id=4a3d5c94&scoped=true&");


/***/ }),

/***/ "./resources/js/src/view/admin/UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/view/admin/UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDetails_vue_vue_type_style_index_0_id_4a3d5c94_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/UserDetails.vue?vue&type=style&index=0&id=4a3d5c94&scoped=true&lang=css&");


/***/ })

}]);