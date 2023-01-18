"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_pages_NewMatrix_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/core/services/api.service */ "./resources/js/src/core/services/api.service.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      main_arr: [],
      add_incomebind_active: false,
      incomebind_min: '',
      incomebind_max: '',
      edit_incomebind: false,
      //  for branch association work
      branch_id: '',
      options_branch: []
    };
  },
  methods: {
    add_plan: function add_plan(index) {
      var main_access = this.main_arr[index];
      var main_plan = main_access.plan_name;
      main_access.fields.push(main_plan);
      for (var i = 0; i < main_access.items; i++) {
        main_access.items[i].push({
          main_plan: ""
        });
      }
      this.main_arr[index].plan_name = "";
    },
    add_no_of_people: function add_no_of_people(index) {
      var arr = this.main_arr[index].fields;
      var obj = arr.reduce(function (accumulator, value) {
        return _objectSpread(_objectSpread({}, accumulator), {}, _defineProperty({}, value, ''));
      }, {});
      this.main_arr[index].items.push(obj);
    },
    add_incomebind: function add_incomebind() {
      this.main_arr.push({
        "minmum_range": this.incomebind_min,
        'maximum_range': this.incomebind_max,
        'plan_name': '',
        'fields': ['index', 'action', 'no_of_peoples'],
        'items': [{
          'index': "",
          'action': "",
          "no_of_peoples": 1
        }]
      });
      this.add_incomebind_active = false;
      this.incomebind_min = '';
      this.incomebind_max = '';
    },
    copy_plan: function copy_plan(index) {
      var main_array = this.main_arr[index];
      var copy_array = $.extend(true, {}, main_array);
      this.main_arr.push(copy_array);
    },
    delete_plan: function delete_plan(index, field_index, delete_value) {
      this.main_arr[index].fields.splice(field_index, 1);
      for (var i = 0; i < this.main_arr[index].items.length; i++) {
        delete this.main_arr[index].items[i][delete_value];
      }
    },
    delete_row: function delete_row(index, delete_index) {
      this.main_arr[index].items.splice(delete_index, 1);
    },
    onSubmit: function onSubmit(evt) {
      var _this = this;
      evt.preventDefault();
      if (this.branch_id) {
        _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].post("/admin/create-matrix/".concat(this.branch_id), this.main_arr).then(function (_ref) {
          var data = _ref.data;
          _this.$router.push('/admin/all-matrix');
        })["catch"](function (err) {});
      } else {
        alert("Select correct Association and Branch");
      }
    },
    getBranches: function getBranches() {
      var _this2 = this;
      _core_services_api_service__WEBPACK_IMPORTED_MODULE_0__["default"].get("/admin/all-branch").then(function (_ref2) {
        var data = _ref2.data;
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
    }
  },
  mounted: function mounted() {
    this.getBranches();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=template&id=7d01d096&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=template&id=7d01d096&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "d-flex"
  }, [_c("h2", {
    staticClass: "font-weight-bolder"
  }, [_vm._v("Membership plans")]), _vm._v(" "), _c("b-form-group", {
    staticClass: "ml-3"
  }, [_c("b-form-select", {
    staticClass: "input-box text-seconday",
    attrs: {
      id: "input-4",
      options: _vm.options_branch,
      required: ""
    },
    model: {
      value: _vm.branch_id,
      callback: function callback($$v) {
        _vm.branch_id = $$v;
      },
      expression: "branch_id"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "ml-3"
  }, [_c("button", {
    staticClass: "btn create_btn font-weight-bolder text-white",
    on: {
      click: function click($event) {
        _vm.add_incomebind_active = !_vm.add_incomebind_active;
      }
    }
  }, [_vm._v("Add income band")])])], 1), _vm._v(" "), _vm.add_incomebind_active ? _c("div", {
    staticClass: "d-flex mt-8"
  }, [_c("h5", {
    staticClass: "mt-3 font-weight-bolder"
  }, [_vm._v("Income band")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.incomebind_min,
      expression: "incomebind_min"
    }],
    staticClass: "border rounded border-secondary bg-white ml-2 p-1",
    attrs: {
      type: "number",
      placeholder: "Minimum income in $"
    },
    domProps: {
      value: _vm.incomebind_min
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.incomebind_min = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.incomebind_max,
      expression: "incomebind_max"
    }],
    staticClass: "border rounded border-secondary bg-white ml-2 p-1",
    attrs: {
      type: "number",
      placeholder: "Maximum income in $"
    },
    domProps: {
      value: _vm.incomebind_max
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.incomebind_max = $event.target.value;
      }
    }
  }), _vm._v(" "), _c("button", {
    staticClass: "btn create_btn font-weight-bolder py-2 ml-2 text-white",
    on: {
      click: function click($event) {
        return _vm.add_incomebind();
      }
    }
  }, [_vm._v("Save details")])]) : _vm._e(), _vm._v(" "), _vm._l(_vm.main_arr, function (single_arr, index_main) {
    return _c("div", {
      key: single_arr.name
    }, [_c("div", {
      staticClass: "bg-white px-5 py-10 mt-5 rounded"
    }, [_vm.edit_incomebind ? _c("div", {
      staticClass: "d-flex my-8"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: single_arr.minmum_range,
        expression: "single_arr.minmum_range"
      }],
      staticClass: "border rounded border-secondary bg-white ml-2 p-1",
      attrs: {
        type: "number",
        placeholder: "Minimum income in $"
      },
      domProps: {
        value: single_arr.minmum_range
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(single_arr, "minmum_range", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: single_arr.maximum_range,
        expression: "single_arr.maximum_range"
      }],
      staticClass: "border rounded border-secondary bg-white ml-2 p-1",
      attrs: {
        type: "number",
        placeholder: "Maximum income in $"
      },
      domProps: {
        value: single_arr.maximum_range
      },
      on: {
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(single_arr, "maximum_range", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("button", {
      staticClass: "btn create_btn font-weight-bolder py-2 ml-2 text-white",
      on: {
        click: function click($event) {
          _vm.edit_incomebind = !_vm.edit_incomebind;
        }
      }
    }, [_vm._v("Save")])]) : _c("div", {
      staticClass: "d-flex"
    }, [_c("h3", {
      staticClass: "font-weight-bolder mb-4"
    }, [_vm._v("Income band - $" + _vm._s(single_arr.minmum_range) + "-$" + _vm._s(single_arr.maximum_range))]), _vm._v("\n           "), _c("span", {
      on: {
        click: function click($event) {
          _vm.edit_incomebind = !_vm.edit_incomebind;
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-edit"
    })])]), _vm._v(" "), _c("button", {
      staticClass: "create_btn font-weight-bolder text-white rounded p-1"
    }, [_vm._v("+Add plan")]), _vm._v(" "), _c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: single_arr.plan_name,
        expression: "single_arr.plan_name"
      }],
      staticClass: "rounded p-1",
      staticStyle: {
        border: "2px solid silver"
      },
      attrs: {
        type: "text"
      },
      domProps: {
        value: single_arr.plan_name
      },
      on: {
        blur: function blur($event) {
          return _vm.add_plan(index_main);
        },
        input: function input($event) {
          if ($event.target.composing) return;
          _vm.$set(single_arr, "plan_name", $event.target.value);
        }
      }
    }), _vm._v(" "), _c("b-table", {
      staticStyle: {
        "white-space": "nowrap"
      },
      attrs: {
        responsive: "",
        items: single_arr.items,
        fields: single_arr.fields
      },
      scopedSlots: _vm._u([_vm._l(single_arr.fields, function (field, field_index) {
        return {
          key: "head(".concat(field, ")"),
          fn: function fn(data) {
            return [data.field.key != "index" ? _c("span", {
              domProps: {
                innerHTML: _vm._s(data.field.label)
              }
            }) : _vm._e(), _vm._v(" "), data.field.key != "action" && data.field.key != "index" && data.field.key != "no_of_peoples" ? _c("span", {
              staticClass: "text-danger",
              on: {
                click: function click($event) {
                  return _vm.delete_plan(index_main, field_index, data.field.key);
                }
              }
            }, [_vm._v(" | "), _c("svg", {
              staticClass: "bi bi-trash",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                viewBox: "0 0 16 16"
              }
            }, [_c("path", {
              attrs: {
                d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              }
            }), _c("path", {
              attrs: {
                "fill-rule": "evenodd",
                d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              }
            })])]) : _vm._e()];
          }
        };
      }), _vm._l(single_arr.fields, function (field) {
        return {
          key: "cell(".concat(field, ")"),
          fn: function fn(data) {
            return [data.field.key == "action" ? [_c("span", {
              staticClass: "text-danger",
              on: {
                click: function click($event) {
                  return _vm.delete_row(index_main, data.index);
                }
              }
            }, [_c("svg", {
              staticClass: "bi bi-trash",
              attrs: {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                viewBox: "0 0 16 16"
              }
            }, [_c("path", {
              attrs: {
                d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              }
            }), _c("path", {
              attrs: {
                "fill-rule": "evenodd",
                d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              }
            })])])] : data.field.key != "index" ? [_c("input", {
              directives: [{
                name: "model",
                rawName: "v-model",
                value: data.item[data.field.key],
                expression: "data.item[data.field.key]"
              }],
              staticClass: "rounded p-1",
              staticStyle: {
                border: "2px solid silver"
              },
              attrs: {
                type: "text"
              },
              domProps: {
                value: data.item[data.field.key]
              },
              on: {
                input: function input($event) {
                  if ($event.target.composing) return;
                  _vm.$set(data.item, data.field.key, $event.target.value);
                }
              }
            })] : _vm._e()];
          }
        };
      })], null, true)
    }), _vm._v(" "), _c("div", [_c("button", {
      staticClass: "create_btn font-weight-bolder text-white rounded p-1",
      on: {
        click: function click($event) {
          return _vm.add_no_of_people(index_main);
        }
      }
    }, [_vm._v("+Add peoples")]), _vm._v(" "), _c("span", {
      staticClass: "glyphicon glyphicon-folder-open bg-success float-right py-1 px-3 text-white rounded",
      on: {
        click: function click($event) {
          return _vm.copy_plan(index_main);
        }
      }
    }, [_c("i", {
      staticClass: "fas fa-copy text-white"
    }), _vm._v(" Copy")])])], 1)]);
  }), _vm._v(" "), _c("div", {
    staticClass: "my-10 text-center"
  }, [_vm.main_arr.length ? _c("button", {
    staticClass: "btn create_btn font-weight-bolder text-white w-50 h3",
    on: {
      click: _vm.onSubmit
    }
  }, [_vm._v("Submit all details")]) : _vm._e()])], 2);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.create_btn[data-v-7d01d096]{\r\n    background: #00A1E4;\n}\n#fade[data-v-7d01d096]{\r\n  display: none;\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMatrix_vue_vue_type_style_index_0_id_7d01d096_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMatrix_vue_vue_type_style_index_0_id_7d01d096_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMatrix_vue_vue_type_style_index_0_id_7d01d096_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/view/pages/NewMatrix.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/view/pages/NewMatrix.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NewMatrix_vue_vue_type_template_id_7d01d096_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewMatrix.vue?vue&type=template&id=7d01d096&scoped=true& */ "./resources/js/src/view/pages/NewMatrix.vue?vue&type=template&id=7d01d096&scoped=true&");
/* harmony import */ var _NewMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewMatrix.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/NewMatrix.vue?vue&type=script&lang=js&");
/* harmony import */ var _NewMatrix_vue_vue_type_style_index_0_id_7d01d096_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css& */ "./resources/js/src/view/pages/NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NewMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NewMatrix_vue_vue_type_template_id_7d01d096_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NewMatrix_vue_vue_type_template_id_7d01d096_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7d01d096",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/NewMatrix.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/NewMatrix.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/view/pages/NewMatrix.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMatrix.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMatrix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/NewMatrix.vue?vue&type=template&id=7d01d096&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/view/pages/NewMatrix.vue?vue&type=template&id=7d01d096&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMatrix_vue_vue_type_template_id_7d01d096_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMatrix_vue_vue_type_template_id_7d01d096_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMatrix_vue_vue_type_template_id_7d01d096_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMatrix.vue?vue&type=template&id=7d01d096&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=template&id=7d01d096&scoped=true&");


/***/ }),

/***/ "./resources/js/src/view/pages/NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NewMatrix_vue_vue_type_style_index_0_id_7d01d096_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/NewMatrix.vue?vue&type=style&index=0&id=7d01d096&scoped=true&lang=css&");


/***/ })

}]);