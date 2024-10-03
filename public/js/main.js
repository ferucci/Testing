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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/select.js */ \"./src/js/module/select.js\");\n/* harmony import */ var _module_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/dropdown.js */ \"./src/js/module/dropdown.js\");\n\r\n\r\n\r\nconst sidebarLink = document.querySelectorAll('.sidebar__item[data-dropdown] > .sidebar__link');\r\n(0,_module_dropdown_js__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)(sidebarLink);\r\n\r\n\r\nconst selectOptions = {\r\n  placeholder: 'Фильтры',\r\n  selectedId: '1',\r\n  data: [\r\n    { id: '1', value: 'Услуги' },\r\n    { id: '2', value: 'Продажи' },\r\n    { id: '3', value: 'Расходники' },\r\n    { id: '4', value: 'Покупки' },\r\n  ],\r\n  onSelect(item) {\r\n    // console.log('Выбранный элемент: ', item)\r\n  }\r\n}\r\n\r\nconst select = new _module_select_js__WEBPACK_IMPORTED_MODULE_0__.Select('#select', selectOptions);\n\n//# sourceURL=webpack://onyx-project/./src/js/main.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Select: function() { return /* binding */ Select; }\n/* harmony export */ });\n\r\n\r\n\r\nconst getTemplate = (data = [], placeholder, selectedId) => {\r\n\r\n  let text = placeholder ?? 'Placeholder default';\r\n\r\n  const items = data.map(item => {\r\n    let cls = ''\r\n    if (item.id === selectedId) {\r\n      text = item.value\r\n      cls = 'selected'\r\n    }\r\n    return `\r\n    <li class=\"select__item ${cls}\" data-type=\"item\" data-id=\"${item.id}\">\r\n      <span class=\"select__item-value\">${item.value}</span>\r\n    </li>`\r\n  })\r\n  return `\r\n        <div class=\"select__backdrop\" data-type=\"backdrop\"></div>\r\n        <div class=\"select__input\" data-type=\"input\">\r\n            <span data-type=\"value\">${text}</span>\r\n            <span class=\"triangle-icon-open\" data-type=\"arrow\"></span>\r\n          </div>\r\n          <div class=\"select__dropdown\">\r\n            <ul class=\"select__list\">\r\n              ${items.join('')}\r\n            </ul>\r\n        </div>\r\n    `\r\n}\r\n\r\nclass Select {\r\n  constructor(selector, options) {\r\n    this.elem = document.querySelector(selector)\r\n\r\n    if (!this.elem) {\r\n      return;\r\n    }\r\n\r\n    this.options = options\r\n    this.selectedId = options.selectedId\r\n\r\n    this.#render()\r\n    this.#setup()\r\n\r\n  }\r\n\r\n  // # - Приватный метод, доступен только внутри класса Select\r\n  #render() {\r\n    const { placeholder, data } = this.options\r\n    this.elem.classList.add('select');\r\n    this.elem.innerHTML = getTemplate(data, placeholder, this.selectedId);\r\n  }\r\n\r\n  #setup() {\r\n    this.clickHandler = this.clickHandler.bind(this)\r\n    this.elem.addEventListener('click', this.clickHandler)\r\n    this.arrow = this.elem.querySelector('[data-type=\"arrow\"]')\r\n    this.value = this.elem.querySelector('[data-type=\"value\"]')\r\n  }\r\n\r\n  clickHandler(e) {\r\n    const target = e.target;\r\n    const { type } = target.dataset;\r\n\r\n    if (type === 'input' || e.target.closest('.select__input')) {\r\n      const items = document.querySelectorAll('.select');\r\n\r\n      items.forEach(item => {\r\n        if (item.closest('.select-open')) {\r\n          item.classList.remove('select-open');\r\n          const arrow = item.querySelector('.triangle-icon-close');\r\n          arrow.classList.remove('triangle-icon-close');\r\n          arrow.classList.add('triangle-icon-open');\r\n        }\r\n      })\r\n\r\n      this.toggle()\r\n    } else if (type === 'item' || target.closest(\".select__item[data-type='item']\")) {\r\n      const id = e.target.dataset.id || target.closest(\".select__item[data-type='item']\").dataset.id;\r\n      this.select(id)\r\n    } else if (type === 'backdrop') {\r\n      this.close()\r\n    }\r\n  }\r\n\r\n  get isOpen() {\r\n    return this.elem.classList.contains('select-open')\r\n  }\r\n\r\n  get current() {\r\n    return this.options.data.find(item => item.id === this.selectedId)\r\n  }\r\n\r\n  select(id) {\r\n    this.selectedId = id\r\n    this.value.textContent = this.current.value\r\n\r\n    this.elem.querySelectorAll('[data-type=\"item\"]').forEach(el => {\r\n      el.classList.remove('selected')\r\n    });\r\n    this.elem.querySelector(`[data-id=\"${id}\"]`).classList.add('selected')\r\n\r\n    this.options.onSelect ? this.options.onSelect(this.current) : null\r\n    this.close()\r\n  }\r\n\r\n  toggle() {\r\n    this.isOpen ? this.close() : this.open()\r\n  }\r\n\r\n  open() {\r\n    this.elem.classList.add('select-open');\r\n    this.arrow.classList.remove('triangle-icon-open');\r\n    this.arrow.classList.add('triangle-icon-close');\r\n  }\r\n\r\n  close() {\r\n    this.elem.classList.remove('select-open');\r\n    this.arrow.classList.remove('triangle-icon-close');\r\n    this.arrow.classList.add('triangle-icon-open');\r\n  }\r\n\r\n  destroy() {\r\n    this.elem.removeEventListener('click', this.clickHandler)\r\n    this.elem.innerHTML = ''\r\n  }\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/select.js?");

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