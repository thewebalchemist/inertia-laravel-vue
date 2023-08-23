"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Blogs_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Calculator_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Calculator.vue */ "./resources/js/Pages/Blogs/Calculator.vue");
/* harmony import */ var _Shared_Icons_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Icons.vue */ "./resources/js/Shared/Icons.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    blogs: {
      type: Array,
      required: true
    }
  },
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.Link,
    Calculator: _Calculator_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Icons: _Shared_Icons_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      activeTab: 0 // Initially show the first category
    };
  },

  computed: {
    categories: function categories() {
      var allCategories = _toConsumableArray(new Set(this.blogs.map(function (blog) {
        return blog.category;
      })));
      return allCategories; // Return only the first 5 categories
    },
    tabCategories: function tabCategories() {
      var tabCategories = _toConsumableArray(new Set(this.blogs.map(function (blog) {
        return blog.category;
      })));
      return tabCategories.slice(0, 5); // Return only the first 5 categories
    },
    filteredBlogs: function filteredBlogs() {
      var selectedCategory = this.categories[this.activeTab];
      if (selectedCategory) {
        // Filter blogs by selected category
        return this.blogs.filter(function (blog) {
          return blog.category === selectedCategory;
        });
      } else {
        // No category selected, show all blogs
        return this.blogs;
      }
    },
    wealthManagementPosts: function wealthManagementPosts() {
      // Filter blogs to include only those in the 'Wealth Management' category
      return this.blogs.filter(function (blog) {
        return blog.category === "Wealth Building";
      });
    },
    investing101Posts: function investing101Posts() {
      // Filter blogs to include only those in the 'Investing 101' category
      return this.blogs.filter(function (blog) {
        return blog.category === "Investing 101";
      });
    },
    riskManagementPosts: function riskManagementPosts() {
      // Filter blogs to include only those in the 'Investing 101' category
      return this.blogs.filter(function (blog) {
        return blog.category === "Risk Management";
      });
    }
  },
  methods: {
    changeTab: function changeTab(index) {
      this.activeTab = index;
    },
    truncatedContent: function truncatedContent(blog) {
      var maxWords = 15; // Adjust the number of words you want to display
      var words = blog.content.split(" ");
      if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
      }
      return blog.content;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icons.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icons.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    name: String
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Calculator.vue?vue&type=template&id=5f6436ee":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Calculator.vue?vue&type=template&id=5f6436ee ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "text-3xl capitalize text-gray-300 text-center"
}, " Expore our amazing tools ", -1 /* HOISTED */);
var _hoisted_2 = {
  "class": "grid grid-cols-4 gap-5 py-10"
};
var _hoisted_3 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "font-semibold mb-2 text-white"
}, "Cost of Living Calculator ", -1 /* HOISTED */);
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, "Uncover Deep Insights into Your Target Audience", -1 /* HOISTED */);
var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);
var _hoisted_8 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "font-semibold mb-2 text-white"
}, "Inflation Calculator ", -1 /* HOISTED */);
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, "Uncover Deep Insights into Your Target Audience", -1 /* HOISTED */);
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);
var _hoisted_13 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "font-semibold mb-2 text-white"
}, "Grocery Calculator ", -1 /* HOISTED */);
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, "Uncover Deep Insights into Your Target Audience", -1 /* HOISTED */);
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);
var _hoisted_18 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "font-semibold mb-2 text-white"
}, "Travel Calculator ", -1 /* HOISTED */);
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, "Uncover Deep Insights into Your Target Audience", -1 /* HOISTED */);
var _hoisted_22 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);
var _hoisted_23 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "font-semibold mb-2 text-white"
}, "Student Loan Calculator ", -1 /* HOISTED */);
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, "Uncover Deep Insights into Your Target Audience", -1 /* HOISTED */);
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);
var _hoisted_28 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "font-semibold mb-2 text-white"
}, "Wedding Calculator ", -1 /* HOISTED */);
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, "Uncover Deep Insights into Your Target Audience", -1 /* HOISTED */);
var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);
var _hoisted_33 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "font-semibold mb-2 text-white"
}, "Rent Calculator ", -1 /* HOISTED */);
var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, "Uncover Deep Insights into Your Target Audience", -1 /* HOISTED */);
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);
var _hoisted_38 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "flex font-semibold mb-2 text-white"
}, "Networth Calculator ", -1 /* HOISTED */);
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, "Uncover Deep Insights into Your Target Audience", -1 /* HOISTED */);
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);
var _hoisted_43 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_44 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "font-semibold mb-2 text-white"
}, "Compound Interest Calculator ", -1 /* HOISTED */);
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, "Uncover Deep Insights into Your Target Audience", -1 /* HOISTED */);
var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);
var _hoisted_48 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_50 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "font-semibold mb-2 text-white"
}, "CC Payoff Calculator", -1 /* HOISTED */);
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, " Uncover Deep Insights into Your Target Audience ", -1 /* HOISTED */);
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);
var _hoisted_53 = {
  className: "border gridService  border-gray-400 rounded-xl hover:bg-gray-500 hover:bg-opacity-10 p-5"
};
var _hoisted_54 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  className: "flex justify-center items-center mb-4 w-10 h-10 rounded-full lg:h-12 lg:w-12 bg-gray-300 p-1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  className: "w-5 h-5 lg:w-6 lg:h-6 text-primary-300",
  fill: "currentColor",
  viewBox: "0 0 20 20",
  xmlns: "http://www.w3.org/2000/svg"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z",
  "clip-rule": "evenodd"
})])], -1 /* HOISTED */);
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  className: "font-semibold mb-2 text-white"
}, " Retirement Calculator ", -1 /* HOISTED */);
var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  className: "text-sm text-gray-300"
}, "Uncover Deep Insights into Your Target Audience", -1 /* HOISTED */);
var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  className: "block mt-2 border-t text-center border-gray-400 pt-2"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "#",
  className: " text-blue-500 text-md hover:text-blue-300 font-semibold"
}, "Use Calculator")], -1 /* HOISTED */);

function render(_ctx, _cache) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_4, _hoisted_5, _hoisted_6, _hoisted_7];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_9, _hoisted_10, _hoisted_11, _hoisted_12];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_14, _hoisted_15, _hoisted_16, _hoisted_17];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_19, _hoisted_20, _hoisted_21, _hoisted_22];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_24, _hoisted_25, _hoisted_26, _hoisted_27];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_39, _hoisted_40, _hoisted_41, _hoisted_42];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_44, _hoisted_45, _hoisted_46, _hoisted_47];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_49, _hoisted_50, _hoisted_51, _hoisted_52];
    }),
    _: 1 /* STABLE */
  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    href: "/",
    className: "card",
    target: "_blank",
    rel: "noopener noreferrer"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_54, _hoisted_55, _hoisted_56, _hoisted_57];
    }),
    _: 1 /* STABLE */
  })])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=template&id=fe32ddca":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=template&id=fe32ddca ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("title", null, "Our Blog", -1 /* HOISTED */);
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  "head-key": "description",
  name: "description",
  content: "We use an agile approach to test assumptions and connect with the needs of your audience early and often."
}, null, -1 /* HOISTED */);
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
  rel: "icon",
  type: "image/svg+xml",
  href: "/favicon.png"
}, null, -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "bg-white dark:bg-gray-900"
};
var _hoisted_5 = {
  "class": "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
};
var _hoisted_6 = {
  "class": "flex flex-col justify-between space-y-10 lg:p-10 border border-gray-400 rounded-3xl"
};
var _hoisted_7 = {
  "class": "flex flex-row justify-between"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-start lg:mb-16 mb-8 max-auto max-w-prose"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
}, " Our mission is to make knowledge and news accessible for everyone."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "font-light text-gray-500 sm:text-xl dark:text-gray-400"
}, "We use an agile approach to test assumptions and connect with the needs of your audience early and often.")], -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "flex mt-4 space-x-2 sm:justify-center sm:mt-0"
};
var _hoisted_10 = {
  "class": "flex flex-row justify-between"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div><form><label for=\"default-search\" class=\"mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white\">Search</label><div class=\"relative\"><div class=\"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none\"><svg class=\"w-4 h-4 text-gray-500 dark:text-gray-400\" aria-hidden=\"true\" xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 20 20\"><path stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z\"></path></svg></div><input type=\"search\" id=\"default-search\" class=\"block w-full py-3 px-10 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500\" placeholder=\"Search Mockups, Logos...\" required></div></form></div>", 1);
var _hoisted_12 = {
  "class": "sm:hidden"
};
var _hoisted_13 = {
  "class": "hidden text-sm font-medium text-center text-gray-500 sm:flex gap-2 dark:text-gray-400"
};
var _hoisted_14 = {
  "class": "py-10"
};
var _hoisted_15 = {
  "class": "py-20"
};
var _hoisted_16 = {
  "class": "grid sm:grid-cols-1 lg:grid-cols-2 gap-10"
};
var _hoisted_17 = ["href"];
var _hoisted_18 = ["alt"];
var _hoisted_19 = {
  "class": "absolute bottom-2 left-2 bg-blue-700/70 text-white px-4 py-2 font-medium rounded-3xl"
};
var _hoisted_20 = {
  "class": "absolute top-0 right-0 mt-2 mr-2"
};
var _hoisted_21 = {
  "class": "flex items-center justify-center w-12 h-12 bg-orange-300/70 rounded-full"
};
var _hoisted_22 = {
  "class": "p-5"
};
var _hoisted_23 = ["href"];
var _hoisted_24 = {
  "class": "mt-2 text-gray-500 dark:text-gray-400"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Full Post ");
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-3.5 h-3.5 ml-2",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 14 10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M1 5h12m0 0L9 1m4 4L9 9"
})], -1 /* HOISTED */);
var _hoisted_27 = {
  "class": "py-20"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "capitalize text-4xl text-center text-gray-400"
}, " In-depth articles for curious minds ", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "grid grid-cols-4 gap-10 py-10"
};
var _hoisted_30 = {
  "class": "text-sm md:text-md tracking-widest"
};
var _hoisted_31 = {
  "class": "py-8"
};
var _hoisted_32 = {
  "class": "grid sm:grid-cols-1 lg:grid-cols-3 gap-10"
};
var _hoisted_33 = ["href"];
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "rounded-t-lg object-cover w-full",
  src: "/images/3.jpg",
  alt: ""
}, null, -1 /* HOISTED */);
var _hoisted_35 = [_hoisted_34];
var _hoisted_36 = {
  "class": "p-5"
};
var _hoisted_37 = ["href"];
var _hoisted_38 = {
  "class": "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
};
var _hoisted_39 = {
  "class": "mb-3 font-normal text-gray-700 dark:text-gray-400"
};
var _hoisted_40 = ["href"];
var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Read more ");
var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  "class": "w-3.5 h-3.5 ml-2",
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 14 10"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "stroke-width": "2",
  d: "M1 5h12m0 0L9 1m4 4L9 9"
})], -1 /* HOISTED */);
var _hoisted_43 = [_hoisted_41, _hoisted_42];
var _hoisted_44 = {
  "class": "py-20"
};
var _hoisted_45 = {
  "class": "grid grid-cols-2 gap-5 py-10"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "object-cover w-full rounded-lg h-48",
  src: "/images/2.jpg",
  alt: ""
}, null, -1 /* HOISTED */);
var _hoisted_47 = {
  "class": "flex flex-col justify-between p-4 leading-normal"
};
var _hoisted_48 = {
  "class": "mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline hover:decoration-sky-500"
};
var _hoisted_49 = {
  "class": "mb-3 font-normal text-sm text-gray-700 dark:text-gray-400"
};
var _hoisted_50 = {
  "aria-label": "Related articles",
  "class": "py-8 lg:py-24 bg-gray-50 dark:bg-gray-900"
};
var _hoisted_51 = {
  "class": "px-4 mx-auto max-w-screen-xl"
};
var _hoisted_52 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "mb-8 text-2xl font-bold text-gray-900 dark:text-white"
}, "Related articles", -1 /* HOISTED */);
var _hoisted_53 = {
  "class": "grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
};
var _hoisted_54 = ["href"];
var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/images/5.jpg",
  "class": "mb-5 rounded-lg",
  alt: "Image 1"
}, null, -1 /* HOISTED */);
var _hoisted_56 = [_hoisted_55];
var _hoisted_57 = {
  "class": "mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white hover:underline hover:decoration-sky-500"
};
var _hoisted_58 = {
  href: "#"
};
var _hoisted_59 = {
  "class": "mb-4 font-light text-gray-500 dark:text-gray-400"
};
var _hoisted_60 = ["href"];
var _hoisted_61 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"bg-white dark:bg-gray-800 rounded-2xl\"><div class=\"py-16 px-4\"><div class=\"flex flex-row justify-center gap-10 items-center\"><div class=\"items-center\"><h2 class=\"mb-4 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl dark:text-white\"> Sign up for our newsletter</h2><p class=\"mx-auto max-w-2xl font-light text-gray-500 sm:text-xl dark:text-gray-400\">Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.</p></div><div><form action=\"#\"><div class=\"items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0\"><div class=\"relative w-full\"><label for=\"email\" class=\"hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300\">Email address</label><div class=\"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none\"><svg class=\"w-5 h-5 text-gray-500 dark:text-gray-400\" fill=\"currentColor\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z\"></path><path d=\"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z\"></path></svg></div><input class=\"block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500\" placeholder=\"Enter your email\" type=\"email\" id=\"email\" required=\"\"></div><div><button type=\"submit\" class=\"py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800\">Subscribe</button></div></div><div class=\"mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer dark:text-gray-300\"> We care about the protection of your data. <a href=\"#\" class=\"font-medium text-primary-600 dark:text-primary-500 hover:underline\">Read our Privacy Policy</a>.</div></form></div></div></div></section>", 1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_icons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icons");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  var _component_calculator = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("calculator");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, null, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_1, _hoisted_2, _hoisted_3];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "preserve-scroll": "",
    href: "#",
    "class": "flex items-center justify-center w-10 h-10 bg-blue-300/50 rounded-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icons, {
        name: "facebook",
        "class": "h-8"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "preserve-scroll": "",
    href: "#",
    "class": "flex items-center justify-center w-10 h-10 bg-blue-300/50 rounded-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icons, {
        name: "twitter",
        "class": "h-8"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "preserve-scroll": "",
    href: "#",
    "class": "flex items-center justify-center w-10 h-10 bg-blue-300/50 rounded-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icons, {
        name: "linkedin",
        "class": "h-8"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "preserve-scroll": "",
    href: "#",
    "class": "flex items-center justify-center w-10 h-10 bg-red-300/50 rounded-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icons, {
        name: "youtube",
        "class": "h-8"
      })];
    }),
    _: 1 /* STABLE */
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "preserve-scroll": "",
    href: "#",
    "class": "flex items-center justify-center w-10 h-10 bg-red-300/50 rounded-full"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icons, {
        name: "instagram",
        "class": "h-8"
      })];
    }),
    _: 1 /* STABLE */
  })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Tab Interface "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    id: "tabs",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $data.activeTab = $event;
    }),
    "class": "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.tabCategories, function (category, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: index
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category), 1 /* TEXT */);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $data.activeTab]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_13, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.tabCategories, function (category, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: index,
      "class": ""
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "preserve-scroll": "",
      onClick: function onClick($event) {
        return $options.changeTab(index);
      },
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{
        'bg-gray-100': $data.activeTab === index
      }, "inline-block w-full border border-gray-500 rounded-full py-3 px-4 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800 active focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700"]),
      href: "#"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category), 1 /* TEXT */)];
      }),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["onClick", "class"])]);
  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Blog Posts "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.filteredBlogs, function (blog) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: blog.id,
      "class": "w-full flex flex-col justify-between shadow dark:bg-gray-900 relative"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: '/blog/' + blog.id,
      "class": "relative block w-full h-80 rounded-lg overflow-hidden"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
      "class": "object-cover w-full h-full",
      src: "/images/6.jpg",
      alt: blog.title
    }, null, 8 /* PROPS */, _hoisted_18), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Category rounded container "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(blog.category), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Fire emoji and rounded circle "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icons, {
      name: "fire",
      "class": "h-10"
    })])])], 8 /* PROPS */, _hoisted_17), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: '/blog/' + blog.id,
      "class": "text-xl font-bold text-gray-900 dark:text-white"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(blog.title), 9 /* TEXT, PROPS */, _hoisted_23), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.truncatedContent(blog)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "preserve-scroll": "",
      href: '/blog/' + blog.id,
      "class": "inline-flex items-center px-3 py-2 mt-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [_hoisted_25, _hoisted_26];
      }),
      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])])]);
  }), 128 /* KEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_calculator), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.categories, function (category, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: index,
      "class": "blue-shadow border-2 rounded-lg cursor-pointer border-gray-300 text-white text-center flex flex-col space-y-4 p-5"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      "preserve-scroll": ""
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", _hoisted_30, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category), 1 /* TEXT */)];
      }),

      _: 2 /* DYNAMIC */
    }, 1024 /* DYNAMIC_SLOTS */)]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.wealthManagementPosts, function (blog) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: blog.id,
      "class": "max-w-sm flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: '/blog/' + blog.id
    }, _hoisted_35, 8 /* PROPS */, _hoisted_33), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: '/blog/' + blog.id
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(blog.title), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_37), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_39, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.truncatedContent(blog)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: '/blog/' + blog.id,
      "class": "inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    }, _hoisted_43, 8 /* PROPS */, _hoisted_40)])]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.investing101Posts, function (blog) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
      key: blog.id,
      "class": "flex flex-col justify-between shadow md:flex-row md:max-w-xl hover:cursor-pointer"
    }, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: '/blog/' + blog.id
    }, {
      "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
        return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(blog.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.truncatedContent(blog)), 1 /* TEXT */)];
      }),

      _: 2 /* DYNAMIC */
    }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["href"])])]);
  }), 128 /* KEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_hoisted_52, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.riskManagementPosts, function (blog) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("article", {
      key: blog.id,
      "class": "max-w-xs flex flex-col justify-between"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: '/blog/' + blog.id
    }, _hoisted_56, 8 /* PROPS */, _hoisted_54), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_58, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(blog.title), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_59, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.truncatedContent(blog)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
      href: '/blog/' + blog.id,
      "class": "inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
    }, " Read in 2 minutes ", 8 /* PROPS */, _hoisted_60)]);
  }), 128 /* KEYED_FRAGMENT */))])])]), _hoisted_61])])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icons.vue?vue&type=template&id=4592e86e":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icons.vue?vue&type=template&id=4592e86e ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
}, null, -1 /* HOISTED */);
var _hoisted_3 = [_hoisted_2];
var _hoisted_4 = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polygon", {
  points: "12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"
}, null, -1 /* HOISTED */);
var _hoisted_6 = [_hoisted_5];
var _hoisted_7 = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"
}, null, -1 /* HOISTED */);
var _hoisted_9 = [_hoisted_8];
var _hoisted_10 = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  viewBox: "0 0 100 100"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"
}, null, -1 /* HOISTED */);
var _hoisted_12 = [_hoisted_11];
var _hoisted_13 = {
  key: 4,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"
}, null, -1 /* HOISTED */);
var _hoisted_15 = [_hoisted_14];
var _hoisted_16 = {
  key: 5,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"
}, null, -1 /* HOISTED */);
var _hoisted_18 = [_hoisted_17];
var _hoisted_19 = {
  key: 6,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"
}, null, -1 /* HOISTED */);
var _hoisted_21 = [_hoisted_20];
var _hoisted_22 = {
  key: 7,
  src: "/images/fire.png",
  alt: "fire"
};
var _hoisted_23 = {
  key: 8,
  src: "/images/facebook.png",
  alt: "facebook"
};
var _hoisted_24 = {
  key: 9,
  src: "/images/instagram.png",
  alt: "instagram"
};
var _hoisted_25 = {
  key: 10,
  src: "/images/linkedin.png",
  alt: "linkedin"
};
var _hoisted_26 = {
  key: 11,
  src: "/images/twitter.png",
  alt: "twitter"
};
var _hoisted_27 = {
  key: 12,
  src: "/images/tiktok.png",
  alt: "tiktok"
};
var _hoisted_28 = {
  key: 13,
  src: "/images/youtube.png",
  alt: "youtube"
};
var _hoisted_29 = {
  key: 14,
  src: "/images/whatsapp.png",
  alt: "whatsapp"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.name === 'cheveron-down' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_1, _hoisted_3)) : $props.name === 'cheveron-right' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_4, _hoisted_6)) : $props.name === 'dashboard' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_7, _hoisted_9)) : $props.name === 'office' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_10, _hoisted_12)) : $props.name === 'printer' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_13, _hoisted_15)) : $props.name === 'trash' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_16, _hoisted_18)) : $props.name === 'users' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", _hoisted_19, _hoisted_21)) : $props.name === 'fire' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_22)) : $props.name === 'facebook' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_23)) : $props.name === 'instagram' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_24)) : $props.name === 'linkedin' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_25)) : $props.name === 'twitter' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_26)) : $props.name === 'tiktok' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_27)) : $props.name === 'youtube' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_28)) : $props.name === 'whatsapp' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", _hoisted_29)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade-enter-active,\n.fade-leave-active {\n    transition: opacity 0.5s;\n}\n.fade-enter,\n.fade-leave-to\n\n/* .fade-leave-active below version 2.1.8 */\n    {\n    opacity: 0;\n}\n.blue-shadow {\n    box-shadow: 5px 5px #2463eb;\n    transition: ease-in-out 0.5s;\n}\n.blue-shadow:hover {\n    box-shadow: none;\n}\n.gridService:hover {\n    transform: translateY(-3px);\n}\n.gridService {\n    transition: all 0.3s ease-in-out 0s;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_fe32ddca_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_fe32ddca_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_fe32ddca_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Pages/Blogs/Calculator.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Blogs/Calculator.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Calculator_vue_vue_type_template_id_5f6436ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator.vue?vue&type=template&id=5f6436ee */ "./resources/js/Pages/Blogs/Calculator.vue?vue&type=template&id=5f6436ee");
/* harmony import */ var _home_Alkemist_Documents_Dev_mwalimumarket_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");

const script = {}

;
const __exports__ = /*#__PURE__*/(0,_home_Alkemist_Documents_Dev_mwalimumarket_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_1__["default"])(script, [['render',_Calculator_vue_vue_type_template_id_5f6436ee__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Blogs/Calculator.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Blogs/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/Pages/Blogs/Index.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_fe32ddca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=fe32ddca */ "./resources/js/Pages/Blogs/Index.vue?vue&type=template&id=fe32ddca");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/Blogs/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_fe32ddca_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css */ "./resources/js/Pages/Blogs/Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css");
/* harmony import */ var _home_Alkemist_Documents_Dev_mwalimumarket_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_home_Alkemist_Documents_Dev_mwalimumarket_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_fe32ddca__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Pages/Blogs/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Shared/Icons.vue":
/*!***************************************!*\
  !*** ./resources/js/Shared/Icons.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Icons_vue_vue_type_template_id_4592e86e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons.vue?vue&type=template&id=4592e86e */ "./resources/js/Shared/Icons.vue?vue&type=template&id=4592e86e");
/* harmony import */ var _Icons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons.vue?vue&type=script&lang=js */ "./resources/js/Shared/Icons.vue?vue&type=script&lang=js");
/* harmony import */ var _home_Alkemist_Documents_Dev_mwalimumarket_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_Alkemist_Documents_Dev_mwalimumarket_laravel_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Icons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Icons_vue_vue_type_template_id_4592e86e__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Shared/Icons.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Blogs/Index.vue?vue&type=script&lang=js":
/*!********************************************************************!*\
  !*** ./resources/js/Pages/Blogs/Index.vue?vue&type=script&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Shared/Icons.vue?vue&type=script&lang=js":
/*!***************************************************************!*\
  !*** ./resources/js/Shared/Icons.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icons_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Icons.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icons.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Blogs/Calculator.vue?vue&type=template&id=5f6436ee":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Blogs/Calculator.vue?vue&type=template&id=5f6436ee ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Calculator_vue_vue_type_template_id_5f6436ee__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Calculator_vue_vue_type_template_id_5f6436ee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Calculator.vue?vue&type=template&id=5f6436ee */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Calculator.vue?vue&type=template&id=5f6436ee");


/***/ }),

/***/ "./resources/js/Pages/Blogs/Index.vue?vue&type=template&id=fe32ddca":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Blogs/Index.vue?vue&type=template&id=fe32ddca ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_fe32ddca__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_fe32ddca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=fe32ddca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=template&id=fe32ddca");


/***/ }),

/***/ "./resources/js/Shared/Icons.vue?vue&type=template&id=4592e86e":
/*!*********************************************************************!*\
  !*** ./resources/js/Shared/Icons.vue?vue&type=template&id=4592e86e ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icons_vue_vue_type_template_id_4592e86e__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Icons_vue_vue_type_template_id_4592e86e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Icons.vue?vue&type=template&id=4592e86e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Shared/Icons.vue?vue&type=template&id=4592e86e");


/***/ }),

/***/ "./resources/js/Pages/Blogs/Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css":
/*!****************************************************************************************!*\
  !*** ./resources/js/Pages/Blogs/Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_fe32ddca_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Blogs/Index.vue?vue&type=style&index=0&id=fe32ddca&lang=css");


/***/ })

}]);