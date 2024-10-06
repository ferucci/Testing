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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/select.js */ \"./src/js/module/select.js\");\n/* harmony import */ var _module_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/dropdown.js */ \"./src/js/module/dropdown.js\");\n\r\n\r\n\r\nconst sidebarLink = document.querySelectorAll('.sidebar__item[data-dropdown] > .sidebar__link');\r\n(0,_module_dropdown_js__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)(sidebarLink);\r\n\r\n(0,_module_select_js__WEBPACK_IMPORTED_MODULE_0__.Select)()\n\n//# sourceURL=webpack://onyx-project/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/dropdown.js":
/*!***********************************!*\
  !*** ./src/js/module/dropdown.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleDropdown: function() { return /* binding */ toggleDropdown; }\n/* harmony export */ });\n\r\nconst toggleDropdown = (currentLink) => {\r\n  currentLink.forEach(link => {\r\n    link.addEventListener('click', function (event) {\r\n      event.preventDefault();\r\n      const dropdownId = this.parentElement.getAttribute('data-dropdown');\r\n      const dropdown = document.getElementById(dropdownId);\r\n\r\n      const isActive = this.getAttribute('data-active') === 'true';\r\n\r\n      document.querySelectorAll('.dropdown__list').forEach(list => {\r\n        link.classList.remove('active');\r\n        list.parentElement.setAttribute('data-active', 'false');\r\n      });\r\n\r\n      if (!isActive) {\r\n        this.setAttribute('data-active', 'true');\r\n        this.classList.add('active');\r\n      } else {\r\n        this.setAttribute('data-active', 'false');\r\n        this.classList.remove('active');\r\n      }\r\n\r\n      // Toggle the active class\r\n      dropdown.classList.toggle('show');\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/dropdown.js?");

/***/ }),

/***/ "./src/js/module/select.js":
/*!*********************************!*\
  !*** ./src/js/module/select.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Select: function() { return /* binding */ Select; }\n/* harmony export */ });\nconst Select = () => {\r\n\r\n  const checkList = document.getElementById('filter');\r\n  const items = document.getElementById('items');\r\n  const anchor = checkList.querySelector('.anchor');\r\n\r\n  anchor.addEventListener('click', () => {\r\n    if (items.classList.contains('visible')) {\r\n      items.classList.remove('visible');\r\n      items.style.display = \"none\";\r\n    } else {\r\n      items.classList.add('visible');\r\n      items.style.display = \"block\";\r\n    }\r\n  })\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/select.js?");

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