"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_superadmin_NewUsers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
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
      user_form: new (vform__WEBPACK_IMPORTED_MODULE_0___default())({
        id: "",
        name: "",
        email: "",
        password: "",
        association_id: "",
        branch_id: "",
        is_admin: false
      }),
      options_association: null,
      options_branch: null,
      action: 'Add'
    };
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      var _this = this;
      evt.preventDefault();
      if (this.action == 'Add') {
        _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].post("/superadmin/create-user", this.user_form).then(function (_ref) {
          var data = _ref.data;
          _this.$router.push('/superadmin/all-users');
        })["catch"](function (err) {
          //   this.openNotification(err);
        });
      } else {
        _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].put("/superadmin/edit-user/".concat(this.user_form.id), this.user_form).then(function (_ref2) {
          var data = _ref2.data;
          $('#fade').fadeToggle(1000);
          $('#fade').fadeToggle(1000);
        });
      }
    },
    getData: function getData(id) {
      var _this2 = this;
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get("/superadmin/all-user/".concat(id)).then(function (_ref3) {
        var data = _ref3.data;
        _this2.user_form.fill(data[0]);
        _this2.getBranches();
        _this2.user_form.branch_id = data[0]['branch_id'] + "/////" + data[0]['branch_name'];
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
            value: data[i]['id'],
            text: data[i]['name']
          });
        }
        _this3.options_association = association_option;
      });
    },
    getBranches: function getBranches() {
      var _this4 = this;
      if (this.user_form.association_id) {
        _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__["default"].get("/superadmin/all-branch/0/".concat(this.user_form.association_id)).then(function (_ref5) {
          var data = _ref5.data;
          var branch_option = [];
          branch_option.push({
            value: "",
            text: "Assign branch"
          });
          for (var i = 0; i < data.length; i++) {
            branch_option.push({
              value: data[i]['id'] + "/////" + data[i]['name'],
              text: data[i]['name']
            });
          }
          _this4.options_branch = branch_option;
        });
      }
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=template&id=1547e842&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=template&id=1547e842&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v(_vm._s(_vm.action) + " users")]), _vm._v(" "), _c("div", {
    staticClass: "bg-white p-10 rounded"
  }, [_c("div", {
    staticClass: "d-flex mb-7"
  }, [_c("b-form-input", {
    staticClass: "mx-1 input-box",
    attrs: {
      id: "input-1",
      type: "text",
      required: "",
      placeholder: "Name"
    },
    model: {
      value: _vm.user_form.name,
      callback: function callback($$v) {
        _vm.$set(_vm.user_form, "name", $$v);
      },
      expression: "user_form.name"
    }
  }), _vm._v(" "), _c("b-form-input", {
    staticClass: "mx-1 input-box",
    attrs: {
      id: "input-2",
      type: "email",
      required: "",
      placeholder: "Email",
      readonly: _vm.action == "Edit"
    },
    model: {
      value: _vm.user_form.email,
      callback: function callback($$v) {
        _vm.$set(_vm.user_form, "email", $$v);
      },
      expression: "user_form.email"
    }
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-select", {
    staticClass: "ml-1 input-box text-seconday",
    attrs: {
      id: "input-3",
      options: _vm.options_association,
      required: ""
    },
    on: {
      change: function change($event) {
        return _vm.getBranches();
      }
    },
    model: {
      value: _vm.user_form.association_id,
      callback: function callback($$v) {
        _vm.$set(_vm.user_form, "association_id", $$v);
      },
      expression: "user_form.association_id"
    }
  })], 1), _vm._v(" "), _c("b-form-group", [_c("b-form-select", {
    staticClass: "ml-1 input-box text-seconday",
    attrs: {
      id: "input-4",
      options: _vm.options_branch,
      required: ""
    },
    model: {
      value: _vm.user_form.branch_id,
      callback: function callback($$v) {
        _vm.$set(_vm.user_form, "branch_id", $$v);
      },
      expression: "user_form.branch_id"
    }
  })], 1), _vm._v(" "), _vm.action == "Add" ? _c("b-form-group", [_c("b-form-input", {
    staticClass: "ml-1 input-box",
    attrs: {
      id: "input-5",
      type: "password",
      required: "",
      placeholder: "Password"
    },
    model: {
      value: _vm.user_form.password,
      callback: function callback($$v) {
        _vm.$set(_vm.user_form, "password", $$v);
      },
      expression: "user_form.password"
    }
  })], 1) : _vm._e(), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "flex-fill border-top border-2 border-secondary h1"
  }), _vm._v(" "), _c("div", {
    staticClass: "h6 text-center font-weight-bolder"
  }, [_vm._v("Permission")]), _vm._v(" "), _c("div", {
    staticClass: "flex-fill border-bottom border-2 border-secondary h1"
  })]), _vm._v(" "), _c("p", {
    staticClass: "h6"
  }, [_vm._v("Branch admin")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.user_form.is_admin,
      expression: "user_form.is_admin"
    }],
    attrs: {
      type: "checkbox",
      value: "true"
    },
    domProps: {
      checked: Array.isArray(_vm.user_form.is_admin) ? _vm._i(_vm.user_form.is_admin, "true") > -1 : _vm.user_form.is_admin
    },
    on: {
      change: function change($event) {
        var $$a = _vm.user_form.is_admin,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "true",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.user_form, "is_admin", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.user_form, "is_admin", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.user_form, "is_admin", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "text-muted"
  }, [_vm._v("Can create / edit more branch users")])]), _vm._v(" "), _c("div", {
    staticClass: "alert alert-success mt-3",
    attrs: {
      role: "alert",
      id: "fade"
    }
  }, [_c("span", {
    staticClass: "font-weight-bolder font-size-h6"
  }, [_vm._v("Submit successfull...")])]), _vm._v(" "), _c("button", {
    staticClass: "btn font-weight-bolder font-size-h6 py-3 w-100 create_btn text-white mt-3"
  }, [_vm._v(_vm._s(_vm.action) + " user")])], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.fw-700[data-v-1547e842]{\r\n    font-weight: 700;\n}\n.input-box[data-v-1547e842]{\r\n    border: 1px silver solid;\n}\n.create_btn[data-v-1547e842]{\r\n    background: #00A1E4;\n}\n#fade[data-v-1547e842]{\r\n  display: none;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUsers_vue_vue_type_style_index_0_id_1547e842_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUsers_vue_vue_type_style_index_0_id_1547e842_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUsers_vue_vue_type_style_index_0_id_1547e842_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/view/superadmin/NewUsers.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/view/superadmin/NewUsers.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewUsers_vue_vue_type_template_id_1547e842_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewUsers.vue?vue&type=template&id=1547e842&scoped=true& */ "./resources/js/src/view/superadmin/NewUsers.vue?vue&type=template&id=1547e842&scoped=true&");
/* harmony import */ var _NewUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewUsers.vue?vue&type=script&lang=js& */ "./resources/js/src/view/superadmin/NewUsers.vue?vue&type=script&lang=js&");
/* harmony import */ var _NewUsers_vue_vue_type_style_index_0_id_1547e842_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css& */ "./resources/js/src/view/superadmin/NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewUsers_vue_vue_type_template_id_1547e842_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewUsers_vue_vue_type_template_id_1547e842_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "1547e842",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/superadmin/NewUsers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/superadmin/NewUsers.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/view/superadmin/NewUsers.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/superadmin/NewUsers.vue?vue&type=template&id=1547e842&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/view/superadmin/NewUsers.vue?vue&type=template&id=1547e842&scoped=true& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUsers_vue_vue_type_template_id_1547e842_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUsers_vue_vue_type_template_id_1547e842_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUsers_vue_vue_type_template_id_1547e842_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUsers.vue?vue&type=template&id=1547e842&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=template&id=1547e842&scoped=true&");


/***/ }),

/***/ "./resources/js/src/view/superadmin/NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/view/superadmin/NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewUsers_vue_vue_type_style_index_0_id_1547e842_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/superadmin/NewUsers.vue?vue&type=style&index=0&id=1547e842&scoped=true&lang=css&");


/***/ })

}]);