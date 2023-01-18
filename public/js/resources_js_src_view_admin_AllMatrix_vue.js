"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_admin_AllMatrix_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "adminallassociation",
  data: function data() {
    return {
      main_arr: [],
      branch_id: '',
      options_branch: []
    };
  },
  methods: {
    get_plans: function get_plans() {
      var _this = this;
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].get("/admin/all-matrix/".concat(this.branch_id)).then(function (data) {
        for (var short_data in data.data) {
          var temp_array = {
            minmum_range: '',
            maximum_range: '',
            fields: [],
            items: []
          };
          var arr_data = data.data[short_data];
          temp_array.minmum_range = arr_data[0].minmum_range;
          temp_array.maximum_range = arr_data[0].maximum_range;
          temp_array.fields = JSON.parse(arr_data[0]['fields']);
          temp_array.fields.splice(0, 2);
          for (var i = 0; i < arr_data.length; i++) {
            var item_data = JSON.parse(arr_data[i]['plans']);
            delete item_data.index;
            delete item_data.action;
            temp_array.items.push(item_data);
          }
          _this.main_arr.push(temp_array);
        }
      });
    },
    getBranches: function getBranches() {
      var _this2 = this;
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].get("/admin/all-branch").then(function (_ref) {
        var data = _ref.data;
        var branch_option = [];
        branch_option.push({
          value: "",
          text: "Assign branch"
        });
        for (var i = 0; i < data.length; i++) {
          branch_option.push({
            value: data[i]['id'],
            text: data[i]['name']
          });
        }
        _this2.options_branch = branch_option;
      });
    },
    delete_matrix: function delete_matrix(id) {
      var _this3 = this;
      var proceed = confirm("Are you sure you want to delete this matrix?");
      if (proceed) {
        _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"]("/admin/delete-matrix/".concat(id)).then(function (_ref2) {
          var data = _ref2.data;
          _this3.get_plans();
        });
      }
    }
  },
  mounted: function mounted() {
    this.getBranches();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=template&id=5e931ec1&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=template&id=5e931ec1& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "mt-5"
  }, [_c("div", {
    staticClass: "d-flex ml-2 justify-content-between"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "d-flex"
  }, [_c("b-form-group", {
    staticClass: "ml-3"
  }, [_c("b-form-select", {
    staticClass: "input-box text-seconday",
    attrs: {
      id: "input-4",
      options: _vm.options_branch,
      required: ""
    },
    on: {
      change: function change($event) {
        return _vm.get_plans();
      }
    },
    model: {
      value: _vm.branch_id,
      callback: function callback($$v) {
        _vm.branch_id = $$v;
      },
      expression: "branch_id"
    }
  })], 1), _vm._v(" "), _c("div", [_c("button", {
    staticClass: "btn create_btn font-weight-bold py-2 ml-2"
  }, [_c("router-link", {
    staticClass: "text-white",
    attrs: {
      to: "/admin/new-matrix"
    }
  }, [_vm._v("Add plans")])], 1)])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "mt-2",
    attrs: {
      id: "table_data"
    }
  }, _vm._l(_vm.main_arr, function (single_arr) {
    return _c("div", [_c("h5", {
      staticClass: "font-weight-bolder my-5"
    }, [_vm._v("INCOME BAND - $" + _vm._s(single_arr["minmum_range"]) + "-$" + _vm._s(single_arr["maximum_range"]) + " "), _c("router-link", {
      attrs: {
        to: "/admin/edit-matrix/" + _vm.branch_id + "/" + single_arr["minmum_range"] + "/" + single_arr["maximum_range"]
      }
    }, [_c("span", [_c("i", {
      staticClass: "fas fa-edit"
    })])])], 1), _vm._v(" "), _c("div", {
      staticClass: "text-center bg-white px-5 py-10 mt-5 rounded"
    }, [_c("b-table", {
      staticStyle: {
        "white-space": "nowrap"
      },
      attrs: {
        bordered: true,
        responsive: "",
        items: single_arr["items"],
        fields: single_arr["fields"]
      }
    })], 1)]);
  }), 0)]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("h2", {
    staticClass: "font-weight-bolder"
  }, [_vm._v("Financial aid matrix")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.create_btn{\r\n    background: #00A1E4;\r\n    padding: 2px 25px;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllMatrix_vue_vue_type_style_index_0_id_5e931ec1_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllMatrix_vue_vue_type_style_index_0_id_5e931ec1_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllMatrix_vue_vue_type_style_index_0_id_5e931ec1_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/view/admin/AllMatrix.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/view/admin/AllMatrix.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AllMatrix_vue_vue_type_template_id_5e931ec1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllMatrix.vue?vue&type=template&id=5e931ec1& */ "./resources/js/src/view/admin/AllMatrix.vue?vue&type=template&id=5e931ec1&");
/* harmony import */ var _AllMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllMatrix.vue?vue&type=script&lang=js& */ "./resources/js/src/view/admin/AllMatrix.vue?vue&type=script&lang=js&");
/* harmony import */ var _AllMatrix_vue_vue_type_style_index_0_id_5e931ec1_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css& */ "./resources/js/src/view/admin/AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AllMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AllMatrix_vue_vue_type_template_id_5e931ec1___WEBPACK_IMPORTED_MODULE_0__.render,
  _AllMatrix_vue_vue_type_template_id_5e931ec1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/admin/AllMatrix.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/admin/AllMatrix.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/view/admin/AllMatrix.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllMatrix.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AllMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/admin/AllMatrix.vue?vue&type=template&id=5e931ec1&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/view/admin/AllMatrix.vue?vue&type=template&id=5e931ec1& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllMatrix_vue_vue_type_template_id_5e931ec1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllMatrix_vue_vue_type_template_id_5e931ec1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllMatrix_vue_vue_type_template_id_5e931ec1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllMatrix.vue?vue&type=template&id=5e931ec1& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=template&id=5e931ec1&");


/***/ }),

/***/ "./resources/js/src/view/admin/AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/admin/AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AllMatrix_vue_vue_type_style_index_0_id_5e931ec1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/admin/AllMatrix.vue?vue&type=style&index=0&id=5e931ec1&lang=css&");


/***/ })

}]);