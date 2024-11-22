/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_filter_filter_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/filter/filter-select.js */ \"./src/js/module/filter/filter-select.js\");\n/* harmony import */ var _module_aside_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/aside-dropdown.js */ \"./src/js/module/aside-dropdown.js\");\n/* harmony import */ var _module_filter_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/filter/index.js */ \"./src/js/module/filter/index.js\");\n/* harmony import */ var _module_vars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/vars.js */ \"./src/js/module/vars.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n  const { sidebarLinks } = _module_vars_js__WEBPACK_IMPORTED_MODULE_3__.vars;\r\n\r\n  (0,_module_aside_dropdown_js__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)(sidebarLinks);\r\n  (0,_module_filter_index_js__WEBPACK_IMPORTED_MODULE_2__.filterByDate)()\r\n  ;(0,_module_filter_filter_select_js__WEBPACK_IMPORTED_MODULE_0__.Select)()\r\n\r\n})\n\n//# sourceURL=webpack://onyx-project/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/aside-dropdown.js":
/*!*****************************************!*\
  !*** ./src/js/module/aside-dropdown.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleDropdown: function() { return /* binding */ toggleDropdown; }\n/* harmony export */ });\n\r\nconst toggleDropdown = (currentLink) => {\r\n  currentLink.forEach(link => {\r\n    link.addEventListener('click', function (event) {\r\n      event.preventDefault();\r\n      const dropdownId = this.parentElement.getAttribute('data-dropdown');\r\n      const dropdown = document.getElementById(dropdownId);\r\n\r\n      const isActive = this.getAttribute('data-active') === 'true';\r\n\r\n      document.querySelectorAll('.dropdown__list').forEach(list => {\r\n        link.classList.remove('active');\r\n        list.parentElement.setAttribute('data-active', 'false');\r\n      });\r\n\r\n      if (!isActive) {\r\n        this.setAttribute('data-active', 'true');\r\n        this.classList.add('active');\r\n      } else {\r\n        this.setAttribute('data-active', 'false');\r\n        this.classList.remove('active');\r\n      }\r\n\r\n      // Toggle the active class\r\n      dropdown.classList.toggle('show');\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/aside-dropdown.js?");

/***/ }),

/***/ "./src/js/module/filter/filter-select.js":
/*!***********************************************!*\
  !*** ./src/js/module/filter/filter-select.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Select: function() { return /* binding */ Select; }\n/* harmony export */ });\nconst Select = () => {\r\n\r\n  const checkList = document.getElementById('filter-select');\r\n  const items = document.getElementById('items');\r\n  const anchor = checkList.querySelector('.anchor');\r\n\r\n  anchor.addEventListener('click', () => {\r\n    if (items.classList.contains('visible')) {\r\n      items.classList.remove('visible');\r\n      items.style.display = \"none\";\r\n    } else {\r\n      items.classList.add('visible');\r\n      items.style.display = \"block\";\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/filter/filter-select.js?");

/***/ }),

/***/ "./src/js/module/filter/index.js":
/*!***************************************!*\
  !*** ./src/js/module/filter/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterByDate: function() { return /* binding */ filterByDate; }\n/* harmony export */ });\nconst filterByDate = () => {\r\n  const datePicker = document.getElementById(\"day\");\r\n\r\n  let currentDate = new Date();\r\n  currentDate.setMonth(currentDate.getMonth());\r\n\r\n  updateDisplayedDate(currentDate);\r\n\r\n  datePicker.querySelector('.prev').addEventListener('click', () => {\r\n    currentDate.setDate(currentDate.getDate() - 1);\r\n    updateDisplayedDate(currentDate);\r\n  });\r\n\r\n  datePicker.querySelector('.next').addEventListener('click', () => {\r\n    currentDate.setDate(currentDate.getDate() + 1);\r\n    updateDisplayedDate(currentDate);\r\n  });\r\n\r\n  function updateDisplayedDate(date) {\r\n    const formattedDate = formatDate(date);\r\n    datePicker.querySelector('input').value = formattedDate;\r\n  }\r\n\r\n  function formatDate(date) {\r\n    const day = date.getDate();\r\n    const month = date.toLocaleString('ru', { month: 'long' });\r\n    // const year = date.getFullYear();\r\n    return `${day} ${month}`;\r\n  }\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/filter/index.js?");

/***/ }),

/***/ "./src/js/module/vars.js":
/*!*******************************!*\
  !*** ./src/js/module/vars.js ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   vars: function() { return /* binding */ vars; }\n/* harmony export */ });\n\r\nconst vars = {\r\n  sidebarLinks: document.querySelectorAll('.sidebar__item[data-dropdown] > .sidebar__link'),\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/vars.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;