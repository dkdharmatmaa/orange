"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_admin_NewBranches_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=script&lang=js& ***!
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
      branch_form: new Form({
        id: "",
        branch_name: "",
        branch_id: "",
        branch_location: ""
      }),
      action: 'Create',
      action_name: 'Create'
    };
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      var _this = this;
      evt.preventDefault();
      if (this.action == 'Create') {
        _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].post("/admin/create-branch", this.branch_form).then(function (_ref) {
          var data = _ref.data;
          _this.$router.push('/admin/branches');
        })["catch"](function (err) {
          //   this.openNotification(err);
        });
      } else {
        _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].put("/admin/edit-branch/".concat(this.branch_form.id), this.branch_form).then(function (_ref2) {
          var data = _ref2.data;
          $('#fade').fadeToggle(1000);
          $('#fade').fadeToggle(1000);
        });
      }
    },
    getData: function getData(id) {
      var _this2 = this;
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].get("/admin/all-branch").then(function (_ref3) {
        var data = _ref3.data;
        _this2.branch_form.fill(data[0]);
      });
    }
  },
  mounted: function mounted() {
    if (this.get_item) {
      this.getData(this.get_item);
      this.action = 'Save';
      this.action_name = 'Edit';
    }
  },
  computed: {
    get_item: function get_item() {
      if (this.$route.params.id) return this.$route.params.id;else return 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=template&id=64e9c8cf&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=template&id=64e9c8cf&scoped=true& ***!
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
  return _c("div", {
    staticClass: "mt-10 p-5"
  }, [_c("b-form", {
    staticClass: "w-md-50 fw-700",
    on: {
      submit: _vm.onSubmit
    }
  }, [_c("h3", {
    staticClass: "fw-700"
  }, [_vm._v(_vm._s(_vm.action_name) + " branch")]), _vm._v(" "), _c("div", {
    staticClass: "bg-white p-10 mt-5 rounded"
  }, [_c("b-form-group", [_c("b-form-input", {
    staticClass: "mx-1 input-box",
    attrs: {
      id: "input-1",
      type: "text",
      required: "",
      placeholder: "Enter branch name"
    },
    model: {
      value: _vm.branch_form.branch_name,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_form, "branch_name", $$v);
      },
      expression: "branch_form.branch_name"
    }
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-input", {
    staticClass: "ml-1 input-box",
    attrs: {
      id: "input-2",
      type: "text",
      required: "",
      placeholder: "Enter branch id"
    },
    model: {
      value: _vm.branch_form.branch_id,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_form, "branch_id", $$v);
      },
      expression: "branch_form.branch_id"
    }
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-input", {
    staticClass: "ml-1 input-box",
    attrs: {
      id: "input-4",
      type: "text",
      required: "",
      placeholder: "Location"
    },
    model: {
      value: _vm.branch_form.branch_location,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_form, "branch_location", $$v);
      },
      expression: "branch_form.branch_location"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "alert alert-success my-3",
    attrs: {
      role: "alert",
      id: "fade"
    }
  }, [_c("span", {
    staticClass: "font-weight-bolder font-size-h6"
  }, [_vm._v("Saved Successfully")])]), _vm._v(" "), _c("div", {
    staticClass: "w-lg-25 w-md-50"
  }, [_c("button", {
    staticClass: "btn font-weight-bolder font-size-h6 py-3 mt-5 w-100 create_btn text-white text-nowrap"
  }, [_vm._v(_vm._s(_vm.action) + " branch")])])], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css& ***!
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.fw-700[data-v-64e9c8cf]{\r\n    font-weight: 700;\n}\n.input-box[data-v-64e9c8cf]{\r\n    border: 1px silver solid;\n}\n.create_btn[data-v-64e9c8cf]{\r\n    background: #ED700F;\r\n    border-radius: 20px;\n}\n#fade[data-v-64e9c8cf]{\r\n  display: none;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_style_index_0_id_64e9c8cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_style_index_0_id_64e9c8cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_style_index_0_id_64e9c8cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/view/admin/NewBranches.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/view/admin/NewBranches.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewBranches_vue_vue_type_template_id_64e9c8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewBranches.vue?vue&type=template&id=64e9c8cf&scoped=true& */ "./resources/js/src/view/admin/NewBranches.vue?vue&type=template&id=64e9c8cf&scoped=true&");
/* harmony import */ var _NewBranches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewBranches.vue?vue&type=script&lang=js& */ "./resources/js/src/view/admin/NewBranches.vue?vue&type=script&lang=js&");
/* harmony import */ var _NewBranches_vue_vue_type_style_index_0_id_64e9c8cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css& */ "./resources/js/src/view/admin/NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewBranches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewBranches_vue_vue_type_template_id_64e9c8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewBranches_vue_vue_type_template_id_64e9c8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "64e9c8cf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/admin/NewBranches.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/admin/NewBranches.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/view/admin/NewBranches.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewBranches.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/admin/NewBranches.vue?vue&type=template&id=64e9c8cf&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/admin/NewBranches.vue?vue&type=template&id=64e9c8cf&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_template_id_64e9c8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_template_id_64e9c8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_template_id_64e9c8cf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewBranches.vue?vue&type=template&id=64e9c8cf&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=template&id=64e9c8cf&scoped=true&");


/***/ }),

/***/ "./resources/js/src/view/admin/NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/view/admin/NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_style_index_0_id_64e9c8cf_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/NewBranches.vue?vue&type=style&index=0&id=64e9c8cf&scoped=true&lang=css&");


/***/ })

}]);