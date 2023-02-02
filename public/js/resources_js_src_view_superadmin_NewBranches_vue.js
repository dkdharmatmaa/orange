"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_superadmin_NewBranches_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      branch_form: new (vform__WEBPACK_IMPORTED_MODULE_0___default())({
        id: "",
        name: "",
        branch_id: "",
        association_id: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip_code: ""
      }),
      options: null,
      action: 'Add'
    };
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      var _this = this;
      evt.preventDefault();
      if (this.action == 'Add') {
        _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].post("/superadmin/create-branch", this.branch_form).then(function (_ref) {
          var data = _ref.data;
          _this.$router.push('/superadmin/all-branches');
        })["catch"](function (err) {
          //   this.openNotification(err);
        });
      } else {
        _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].put("/superadmin/edit-branch/".concat(this.branch_form.id), this.branch_form).then(function (_ref2) {
          var data = _ref2.data;
          $('#fade').fadeToggle(1000);
          $('#fade').fadeToggle(1000);
        });
      }
    },
    getData: function getData(id) {
      var _this2 = this;
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get("/superadmin/all-branch/".concat(id)).then(function (_ref3) {
        var data = _ref3.data;
        _this2.branch_form.fill(data[0]);
        _this2.branch_form.association_id = data[0]['association_id'] + "/////" + data[0]['association_name'];
      });
    },
    getAssociation: function getAssociation() {
      var _this3 = this;
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get("/superadmin/all-admin").then(function (_ref4) {
        var data = _ref4.data;
        var association_option = [];
        association_option.push({
          value: "",
          text: "Assign association"
        });
        for (var i = 0; i < data.length; i++) {
          association_option.push({
            value: data[i]['id'] + "/////" + data[i]['name'],
            text: data[i]['name']
          });
        }
        _this3.options = association_option;
      });
    }
  },
  mounted: function mounted() {
    if (this.get_item) {
      this.getData(this.get_item);
      this.action = 'Edit';
    }
    this.getAssociation();
  },
  computed: {
    get_item: function get_item() {
      if (this.$route.params.id) return this.$route.params.id;else return 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=template&id=dafb14f4&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=template&id=dafb14f4&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.action) + " branch")]), _vm._v(" "), _c("div", {
    staticClass: "bg-white p-10 rounded"
  }, [_c("div", {
    staticClass: "d-flex mb-7"
  }, [_c("b-form-input", {
    staticClass: "mx-1 input-box",
    attrs: {
      id: "input-1",
      type: "text",
      required: "",
      placeholder: "Enter branch name"
    },
    model: {
      value: _vm.branch_form.name,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_form, "name", $$v);
      },
      expression: "branch_form.name"
    }
  }), _vm._v(" "), _c("b-form-input", {
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
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-select", {
    staticClass: "ml-1 input-box text-seconday",
    attrs: {
      id: "input-3",
      options: _vm.options,
      required: ""
    },
    model: {
      value: _vm.branch_form.association_id,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_form, "association_id", $$v);
      },
      expression: "branch_form.association_id"
    }
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-input", {
    staticClass: "ml-1 input-box",
    attrs: {
      id: "input-4",
      type: "text",
      required: "",
      placeholder: "Address 1"
    },
    model: {
      value: _vm.branch_form.address1,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_form, "address1", $$v);
      },
      expression: "branch_form.address1"
    }
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-input", {
    staticClass: "ml-1 input-box",
    attrs: {
      id: "input-5",
      type: "text",
      required: "",
      placeholder: "Address 2"
    },
    model: {
      value: _vm.branch_form.address2,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_form, "address2", $$v);
      },
      expression: "branch_form.address2"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("b-form-input", {
    staticClass: "mx-1 input-box",
    attrs: {
      id: "input-6",
      type: "text",
      required: "",
      placeholder: "City"
    },
    model: {
      value: _vm.branch_form.city,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_form, "city", $$v);
      },
      expression: "branch_form.city"
    }
  }), _vm._v(" "), _c("b-form-input", {
    staticClass: "mx-1 input-box",
    attrs: {
      id: "input-7",
      type: "text",
      required: "",
      placeholder: "State"
    },
    model: {
      value: _vm.branch_form.state,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_form, "state", $$v);
      },
      expression: "branch_form.state"
    }
  }), _vm._v(" "), _c("b-form-input", {
    staticClass: "ml-1 input-box",
    attrs: {
      id: "input-8",
      type: "number",
      required: "",
      placeholder: "Zip code"
    },
    model: {
      value: _vm.branch_form.zip_code,
      callback: function callback($$v) {
        _vm.$set(_vm.branch_form, "zip_code", $$v);
      },
      expression: "branch_form.zip_code"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "alert alert-success my-3",
    attrs: {
      role: "alert",
      id: "fade"
    }
  }, [_c("span", {
    staticClass: "font-weight-bolder font-size-h6"
  }, [_vm._v("Saved Successfully")])]), _vm._v(" "), _c("button", {
    staticClass: "btn font-weight-bolder font-size-h6 py-3 mt-5 w-100 create_btn text-white"
  }, [_vm._v(_vm._s(_vm.action) + " branch")])], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.fw-700[data-v-dafb14f4]{\r\n    font-weight: 700;\n}\n.input-box[data-v-dafb14f4]{\r\n    border: 1px silver solid;\n}\n.create_btn[data-v-dafb14f4]{\r\n    background: #00A1E4;\n}\n#fade[data-v-dafb14f4]{\r\n  display: none;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_style_index_0_id_dafb14f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_style_index_0_id_dafb14f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_style_index_0_id_dafb14f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/view/superadmin/NewBranches.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/view/superadmin/NewBranches.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewBranches_vue_vue_type_template_id_dafb14f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewBranches.vue?vue&type=template&id=dafb14f4&scoped=true& */ "./resources/js/src/view/superadmin/NewBranches.vue?vue&type=template&id=dafb14f4&scoped=true&");
/* harmony import */ var _NewBranches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewBranches.vue?vue&type=script&lang=js& */ "./resources/js/src/view/superadmin/NewBranches.vue?vue&type=script&lang=js&");
/* harmony import */ var _NewBranches_vue_vue_type_style_index_0_id_dafb14f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css& */ "./resources/js/src/view/superadmin/NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewBranches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewBranches_vue_vue_type_template_id_dafb14f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewBranches_vue_vue_type_template_id_dafb14f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "dafb14f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/superadmin/NewBranches.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/superadmin/NewBranches.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/view/superadmin/NewBranches.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewBranches.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/superadmin/NewBranches.vue?vue&type=template&id=dafb14f4&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/view/superadmin/NewBranches.vue?vue&type=template&id=dafb14f4&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_template_id_dafb14f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_template_id_dafb14f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_template_id_dafb14f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewBranches.vue?vue&type=template&id=dafb14f4&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=template&id=dafb14f4&scoped=true&");


/***/ }),

/***/ "./resources/js/src/view/superadmin/NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/view/superadmin/NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewBranches_vue_vue_type_style_index_0_id_dafb14f4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewBranches.vue?vue&type=style&index=0&id=dafb14f4&scoped=true&lang=css&");


/***/ })

}]);