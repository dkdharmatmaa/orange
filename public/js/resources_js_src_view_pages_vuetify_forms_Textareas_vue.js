"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_view_pages_vuetify_forms_Textareas_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KTCard",
  props: {
    /**
     * String title
     */
    title: String,
    /**
     * Set card head size. Eg. md, lg, sm, etc.
     */
    headSize: String,
    /**
     * Set card to fluid
     */
    fluidHeight: Boolean,
    /**
     * Set card to fluid in half
     */
    fluidHalfHeight: Boolean,
    /**
     * Set overlay head
     */
    headOverlay: Boolean,
    /**
     * Set extra class for main card
     */
    cardClass: String,
    /**
     * Set extra class for card head
     */
    headClass: String,
    /**
     * Set extra class for card body
     */
    bodyClass: String,
    /**
     * Set card body to fit
     */
    bodyFit: Boolean,
    /**
     * Set card body to fluid
     */
    bodyFluid: Boolean,
    /**
     * Code examples
     */
    example: Boolean
  },
  components: {},
  methods: {},
  computed: {
    classes: function classes() {
      var cls = {
        "example example-compact": this.example,
        "height-fluid": this.fluidHeight,
        "height-fluid-half": this.fluidHalfHeight,
        "head-overlay": this.headOverlay
      };
      cls[this.headSizeClass] = this.headSizeClass;

      // append extra classes
      if (this.cardClass) {
        cls[this.cardClass] = true;
      }
      return cls;
    },
    hasTitleSlot: function hasTitleSlot() {
      return !!this.$slots["title"];
    },
    hasFootSlot: function hasFootSlot() {
      return !!this.$slots["foot"];
    },
    headSizeClass: function headSizeClass() {
      if (this.headSize) {
        return "head-".concat(this.headSize);
      }
      return false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/CodePreview.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/CodePreview.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_content_Card_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/content/Card.vue */ "./resources/js/src/view/content/Card.vue");
/* harmony import */ var _assets_js_layout_extended_examples_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/js/layout/extended/examples.js */ "./resources/js/src/assets/js/layout/extended/examples.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "KTCodePreview",
  props: {
    title: String
  },
  data: function data() {
    return {
      tabIndex: 0,
      isOpen: false
    };
  },
  components: {
    KTCard: _view_content_Card_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    var _this = this;
    // init example codes
    this.$nextTick(function () {
      _assets_js_layout_extended_examples_js__WEBPACK_IMPORTED_MODULE_1__["default"].init([_this.$el]);
      var hljs = _this.$el.querySelectorAll(".hljs");
      hljs.forEach(function (hl) {
        hl.classList.add("language-".concat(hl.classList[1]));
        hl.classList.remove("hljs");
      });
    });
  },
  methods: {
    /**
     * Set current active on click
     * @param event
     */
    setActiveTab: function setActiveTab(event) {
      // get all tab links
      var tab = event.target.closest('[role="tablist"]');
      var links = tab.querySelectorAll('[data-toggle="tab"]');
      // remove active tab links
      for (var i = 0; i < links.length; i++) {
        links[i].classList.remove("active");
      }

      // set current active tab
      event.target.classList.add("active");

      // set clicked tab index to bootstrap tab
      this.tabIndex = parseInt(event.target.getAttribute("data-tab"));
    }
  },
  computed: {
    /**
     * Check if has title
     * @returns {boolean}
     */
    hasTitleSlot: function hasTitleSlot() {
      return !!this.$slots["title"];
    },
    /**
     * Check if code only has one, exclude the tabs
     * @returns {boolean}
     */
    hasSingleCodeType: function hasSingleCodeType() {
      var _this2 = this;
      var exist = 0;
      ["html", "js", "scss"].forEach(function (type) {
        if (_this2.$slots.hasOwnProperty(type)) {
          exist++;
        }
      });
      return exist === 1;
    },
    /**
     * Custom generate codes
     * @returns {boolean}
     */
    hasGeneralCode: function hasGeneralCode() {
      return !!this.$slots["code"];
    },
    /**
     * Check if has JS code slot
     * @returns {boolean}
     */
    hasJsCode: function hasJsCode() {
      return !!this.$slots["js"];
    },
    /**
     * Check if has SCSS code slot
     * @returns {boolean}
     */
    hasScssCode: function hasScssCode() {
      return !!this.$slots["scss"];
    },
    /**
     * Check if has HTML code slot
     * @returns {boolean}
     */
    hasHtmlCode: function hasHtmlCode() {
      return !!this.$slots["html"];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/view/content/CodePreview.vue */ "./resources/js/src/view/content/CodePreview.vue");
/* harmony import */ var _core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/core/services/store/breadcrumbs.module */ "./resources/js/src/core/services/store/breadcrumbs.module.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      code1: {
        html: "<v-container>\n  <v-row>\n    <v-col cols=\"12\" sm=\"6\">\n      <v-textarea\n        class=\"mx-2\"\n        label=\"prepend-icon\"\n        rows=\"1\"\n        prepend-icon=\"comment\"\n      ></v-textarea>\n    </v-col>\n    <v-col cols=\"12\" sm=\"6\">\n      <v-textarea\n        append-icon=\"comment\"\n        class=\"mx-2\"\n        label=\"append-icon\"\n        rows=\"1\"\n      ></v-textarea>\n    </v-col>\n    <v-col cols=\"12\" sm=\"6\">\n      <v-textarea\n        prepend-inner-icon=\"comment\"\n        class=\"mx-2\"\n        label=\"prepend-inner-icon\"\n        rows=\"1\"\n      ></v-textarea>\n    </v-col>\n    <v-col cols=\"12\" sm=\"6\">\n      <v-textarea\n        append-outer-icon=\"comment\"\n        class=\"mx-2\"\n        label=\"append-outer-icon\"\n        rows=\"1\"\n      ></v-textarea>\n    </v-col>\n  </v-row>\n</v-container>"
      },
      code2: {
        html: "<v-container fluid>\n  <v-textarea\n    name=\"input-7-1\"\n    filled\n    label=\"Label\"\n    auto-grow\n    value=\"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.\"\n  ></v-textarea>\n</v-container>"
      },
      code3: {
        html: "<v-container fluid>\n  <v-textarea\n    autocomplete=\"email\"\n    label=\"Email\"\n  ></v-textarea>\n</v-container>"
      },
      code4: {
        html: "<v-container fluid>\n  <v-textarea\n    name=\"input-7-1\"\n    filled\n    label=\"Label\"\n    auto-grow\n    value=\"The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.\"\n  ></v-textarea>\n</v-container>"
      }
    };
  },
  components: {
    KTCodePreview: _view_content_CodePreview_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.$store.dispatch(_core_services_store_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.SET_BREADCRUMB, [{
      title: "Vuetify",
      route: "alerts"
    }, {
      title: "Form Inputs & Control",
      route: "autocompletes"
    }, {
      title: "Textareas"
    }]);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "card card-custom gutter-b",
    "class": _vm.classes
  }, [_vm.hasTitleSlot || _vm.title ? _c("div", {
    staticClass: "card-header",
    "class": _vm.headClass
  }, [_c("div", {
    staticClass: "card-title"
  }, [_vm.hasTitleSlot ? _vm._t("title") : _vm._e(), _vm._v(" "), !_vm.hasTitleSlot ? _c("h3", {
    staticClass: "card-label"
  }, [_vm._v("\n        " + _vm._s(_vm.title) + "\n      ")]) : _vm._e()], 2), _vm._v(" "), _c("div", {
    staticClass: "card-toolbar"
  }, [_vm._t("toolbar")], 2)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "card-body",
    "class": {
      bodyClass: _vm.bodyClass,
      "body-fit": _vm.bodyFit,
      "body-fluid": _vm.bodyFluid
    }
  }, [_vm._t("body")], 2), _vm._v(" "), _vm.hasFootSlot ? _c("div", {
    staticClass: "card-footer"
  }, [_vm._t("foot")], 2) : _vm._e()]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/CodePreview.vue?vue&type=template&id=dbc34778&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/CodePreview.vue?vue&type=template&id=dbc34778& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("KTCard", {
    ref: "preview",
    attrs: {
      title: _vm.title,
      example: true
    },
    scopedSlots: _vm._u([_vm.hasTitleSlot ? {
      key: "title",
      fn: function fn() {
        return [_c("h3", {
          staticClass: "card-title"
        }, [_vm._t("title")], 2)];
      },
      proxy: true
    } : null, {
      key: "toolbar",
      fn: function fn() {
        return [_c("div", {
          staticClass: "example-tools justify-content-center"
        }, [_c("span", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover.top",
            value: "View code",
            expression: "'View code'",
            modifiers: {
              hover: true,
              top: true
            }
          }],
          staticClass: "example-toggle",
          attrs: {
            "data-toggle": "tooltip"
          }
        }), _vm._v(" "), _c("span", {
          directives: [{
            name: "b-tooltip",
            rawName: "v-b-tooltip.hover.top",
            value: "Copy code",
            expression: "'Copy code'",
            modifiers: {
              hover: true,
              top: true
            }
          }],
          staticClass: "example-copy",
          attrs: {
            "data-toggle": "tooltip"
          }
        })])];
      },
      proxy: true
    }, {
      key: "body",
      fn: function fn() {
        return [_c("div", {
          staticClass: "example-code mb-5"
        }, [!_vm.hasGeneralCode && !_vm.hasSingleCodeType ? _c("ul", {
          staticClass: "example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",
          attrs: {
            role: "tablist"
          }
        }, [_vm.hasHtmlCode ? _c("li", {
          staticClass: "nav-item"
        }, [_c("a", {
          staticClass: "nav-link active",
          attrs: {
            "data-tab": "0",
            "data-toggle": "tab",
            href: "#",
            role: "tab",
            "aria-selected": "true"
          },
          on: {
            click: _vm.setActiveTab
          }
        }, [_vm._v("\n            HTML\n          ")])]) : _vm._e(), _vm._v(" "), _vm.hasJsCode ? _c("li", {
          staticClass: "nav-item"
        }, [_c("a", {
          staticClass: "nav-link",
          attrs: {
            "data-tab": "1",
            "data-toggle": "tab",
            href: "#",
            role: "tab",
            "aria-selected": "false"
          },
          on: {
            click: _vm.setActiveTab
          }
        }, [_vm._v("\n             JS \n          ")])]) : _vm._e(), _vm._v(" "), _vm.hasScssCode ? _c("li", {
          staticClass: "nav-item"
        }, [_c("a", {
          staticClass: "nav-link",
          attrs: {
            "data-tab": "2",
            "data-toggle": "tab",
            href: "#",
            role: "tab",
            "aria-selected": "false"
          },
          on: {
            click: _vm.setActiveTab
          }
        }, [_vm._v("\n            SCSS\n          ")])]) : _vm._e()]) : _vm._e(), _vm._v(" "), _vm.hasGeneralCode ? _c("div", [_vm._t("code")], 2) : _vm._e(), _vm._v(" "), !_vm.hasGeneralCode && !_vm.hasSingleCodeType ? _c("div", [_c("b-tabs", {
          staticClass: "hide-tabs",
          attrs: {
            "content-class": "mt-3"
          },
          model: {
            value: _vm.tabIndex,
            callback: function callback($$v) {
              _vm.tabIndex = $$v;
            },
            expression: "tabIndex"
          }
        }, [_c("b-tab", {
          staticClass: "example-highlight",
          attrs: {
            active: ""
          }
        }, [_c("highlight-code", {
          staticClass: "language-html",
          attrs: {
            lang: "html"
          }
        }, [_vm._t("html")], 2)], 1), _vm._v(" "), _c("b-tab", {
          staticClass: "example-highlight"
        }, [_c("highlight-code", {
          staticClass: "language-js",
          attrs: {
            lang: "js"
          }
        }, [_vm._t("js")], 2)], 1), _vm._v(" "), _c("b-tab", {
          staticClass: "example-highlight"
        }, [_c("highlight-code", {
          staticClass: "language-scss",
          attrs: {
            lang: "scss"
          }
        }, [_vm._t("scss")], 2)], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _vm.hasSingleCodeType ? _c("div", {
          staticClass: "example-highlight"
        }, [_vm.hasHtmlCode ? _c("highlight-code", {
          staticClass: "language-html",
          attrs: {
            lang: "html"
          }
        }, [_vm._t("html")], 2) : _vm._e(), _vm._v(" "), _vm.hasJsCode ? _c("highlight-code", {
          staticClass: "language-js",
          attrs: {
            lang: "js"
          }
        }, [_vm._t("js")], 2) : _vm._e(), _vm._v(" "), _vm.hasScssCode ? _c("highlight-code", {
          staticClass: "language-scss",
          attrs: {
            lang: "scss"
          }
        }, [_vm._t("scss")], 2) : _vm._e()], 1) : _vm._e()]), _vm._v(" "), _vm._t("preview")];
      },
      proxy: true
    }], null, true)
  });
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc& ***!
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
  return _c("div", [_c("b-alert", {
    staticClass: "alert alert-custom alert-white alert-shadow fade show gutter-b",
    attrs: {
      show: "",
      variant: "light"
    }
  }, [_c("div", {
    staticClass: "alert-icon"
  }, [_c("span", {
    staticClass: "svg-icon svg-icon-lg"
  }, [_c("inline-svg", {
    attrs: {
      src: "media/svg/icons/Tools/Compass.svg"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "alert-text"
  }, [_c("b", [_vm._v("Textareas")]), _vm._v(" Textarea components are used for collecting large\n      amounts of textual data.\n      "), _c("a", {
    staticClass: "font-weight-bold",
    attrs: {
      href: "https://vuetifyjs.com/en/components/textarea",
      target: "_blank"
    }
  }, [_vm._v("\n        See documentation.\n      ")])])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("KTCodePreview", {
    attrs: {
      title: "Icons"
    },
    scopedSlots: _vm._u([{
      key: "preview",
      fn: function fn() {
        return [_c("p", [_vm._v("\n            The "), _c("code", [_vm._v("append-icon")]), _vm._v(" and "), _c("code", [_vm._v("prepend-icon")]), _vm._v(" props\n            help add context to "), _c("code", [_vm._v("v-textarea")]), _vm._v(".\n          ")]), _vm._v(" "), _c("v-container", [_c("v-row", [_c("v-col", {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c("v-textarea", {
          staticClass: "mx-2",
          attrs: {
            label: "prepend-icon",
            rows: "1",
            "prepend-icon": "comment"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c("v-textarea", {
          staticClass: "mx-2",
          attrs: {
            "append-icon": "comment",
            label: "append-icon",
            rows: "1"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c("v-textarea", {
          staticClass: "mx-2",
          attrs: {
            "prepend-inner-icon": "comment",
            label: "prepend-inner-icon",
            rows: "1"
          }
        })], 1), _vm._v(" "), _c("v-col", {
          attrs: {
            cols: "12",
            sm: "6"
          }
        }, [_c("v-textarea", {
          staticClass: "mx-2",
          attrs: {
            "append-outer-icon": "comment",
            label: "append-outer-icon",
            rows: "1"
          }
        })], 1)], 1)], 1)];
      },
      proxy: true
    }, {
      key: "html",
      fn: function fn() {
        return [_vm._v("\n          " + _vm._s(_vm.code1.html) + "\n        ")];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("KTCodePreview", {
    attrs: {
      title: "Browser autocomplete"
    },
    scopedSlots: _vm._u([{
      key: "preview",
      fn: function fn() {
        return [_c("p", [_vm._v("\n            The "), _c("code", [_vm._v("autocomplete")]), _vm._v(" prop gives you the option to enable\n            the browser to predict user input.\n          ")]), _vm._v(" "), _c("v-container", {
          attrs: {
            fluid: ""
          }
        }, [_c("v-textarea", {
          attrs: {
            autocomplete: "email",
            label: "Email"
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "html",
      fn: function fn() {
        return [_vm._v("\n          " + _vm._s(_vm.code3.html) + "\n        ")];
      },
      proxy: true
    }])
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("KTCodePreview", {
    attrs: {
      title: "Auto grow"
    },
    scopedSlots: _vm._u([{
      key: "preview",
      fn: function fn() {
        return [_c("p", [_vm._v("\n            When using the "), _c("code", [_vm._v("auto-grow")]), _vm._v(" prop, textarea's will\n            automatically increase in size when the contained text exceeds its\n            size.\n          ")]), _vm._v(" "), _c("v-container", {
          attrs: {
            fluid: ""
          }
        }, [_c("v-textarea", {
          attrs: {
            name: "input-7-1",
            filled: "",
            label: "Label",
            "auto-grow": "",
            value: "The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "html",
      fn: function fn() {
        return [_vm._v("\n          " + _vm._s(_vm.code2.html) + "\n        ")];
      },
      proxy: true
    }])
  }), _vm._v(" "), _c("KTCodePreview", {
    attrs: {
      title: "Clearable"
    },
    scopedSlots: _vm._u([{
      key: "preview",
      fn: function fn() {
        return [_c("p", [_vm._v("\n            You can clear the text from a "), _c("code", [_vm._v("v-textarea")]), _vm._v(" by using the\n            "), _c("code", [_vm._v("clearable")]), _vm._v(" prop, and customize the icon used with the\n            "), _c("code", [_vm._v("clearable-icon")]), _vm._v(" prop.\n          ")]), _vm._v(" "), _c("v-container", {
          attrs: {
            fluid: ""
          }
        }, [_c("v-textarea", {
          attrs: {
            name: "input-7-1",
            filled: "",
            label: "Label",
            "auto-grow": "",
            value: "The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
          }
        })], 1)];
      },
      proxy: true
    }, {
      key: "html",
      fn: function fn() {
        return [_vm._v("\n          " + _vm._s(_vm.code4.html) + "\n        ")];
      },
      proxy: true
    }])
  })], 1)])], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/src/view/content/Card.vue":
/*!************************************************!*\
  !*** ./resources/js/src/view/content/Card.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=5cd570b7& */ "./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/src/view/content/Card.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__.render,
  _Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/content/Card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/content/CodePreview.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/view/content/CodePreview.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CodePreview_vue_vue_type_template_id_dbc34778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CodePreview.vue?vue&type=template&id=dbc34778& */ "./resources/js/src/view/content/CodePreview.vue?vue&type=template&id=dbc34778&");
/* harmony import */ var _CodePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CodePreview.vue?vue&type=script&lang=js& */ "./resources/js/src/view/content/CodePreview.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CodePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CodePreview_vue_vue_type_template_id_dbc34778___WEBPACK_IMPORTED_MODULE_0__.render,
  _CodePreview_vue_vue_type_template_id_dbc34778___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/content/CodePreview.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/Textareas.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Textareas.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Textareas.vue?vue&type=template&id=3de000cc& */ "./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc&");
/* harmony import */ var _Textareas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Textareas.vue?vue&type=script&lang=js& */ "./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Textareas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/view/pages/vuetify/forms/Textareas.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/view/content/Card.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/view/content/Card.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/content/CodePreview.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/view/content/CodePreview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CodePreview.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/CodePreview.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CodePreview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Textareas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Textareas.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Textareas_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_5cd570b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=template&id=5cd570b7& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/Card.vue?vue&type=template&id=5cd570b7&");


/***/ }),

/***/ "./resources/js/src/view/content/CodePreview.vue?vue&type=template&id=dbc34778&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/view/content/CodePreview.vue?vue&type=template&id=dbc34778& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodePreview_vue_vue_type_template_id_dbc34778___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodePreview_vue_vue_type_template_id_dbc34778___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_CodePreview_vue_vue_type_template_id_dbc34778___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CodePreview.vue?vue&type=template&id=dbc34778& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/content/CodePreview.vue?vue&type=template&id=dbc34778&");


/***/ }),

/***/ "./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Textareas_vue_vue_type_template_id_3de000cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Textareas.vue?vue&type=template&id=3de000cc& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/view/pages/vuetify/forms/Textareas.vue?vue&type=template&id=3de000cc&");


/***/ })

}]);