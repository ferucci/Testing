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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_filter_filter_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/filter/filter-select.js */ \"./src/js/module/filter/filter-select.js\");\n/* harmony import */ var _module_aside_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/aside-dropdown.js */ \"./src/js/module/aside-dropdown.js\");\n/* harmony import */ var _module_filter_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/filter/index.js */ \"./src/js/module/filter/index.js\");\n/* harmony import */ var _module_vars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/vars.js */ \"./src/js/module/vars.js\");\n/* harmony import */ var _module_payment_schedule_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/payment_schedule/index.js */ \"./src/js/module/payment_schedule/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n  const { sidebarLinks } = _module_vars_js__WEBPACK_IMPORTED_MODULE_3__.vars;\r\n\r\n  const optionsWithCanvas = (CN, COLOR) => {\r\n    if (!String(CN)) return;\r\n    return {\r\n      className: CN,\r\n      color: COLOR\r\n    }\r\n  }\r\n\r\n  ;(0,_module_aside_dropdown_js__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)(sidebarLinks);\r\n  (0,_module_filter_index_js__WEBPACK_IMPORTED_MODULE_2__.filterByDate)()\r\n  ;(0,_module_filter_filter_select_js__WEBPACK_IMPORTED_MODULE_0__.Select)()\r\n\r\n  new _module_payment_schedule_index_js__WEBPACK_IMPORTED_MODULE_4__.ExpensesAnim(optionsWithCanvas('income', '31, 202, 69'))\r\n  new _module_payment_schedule_index_js__WEBPACK_IMPORTED_MODULE_4__.ExpensesAnim(optionsWithCanvas('expenses', '202, 31, 41'))\r\n\r\n})\n\n//# sourceURL=webpack://onyx-project/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/aside-dropdown.js":
/*!*****************************************!*\
  !*** ./src/js/module/aside-dropdown.js ***!
  \*****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toggleDropdown: function() { return /* binding */ toggleDropdown; }\n/* harmony export */ });\n\r\nconst toggleDropdown = (currentLink) => {\r\n  currentLink.forEach(link => {\r\n    link.addEventListener('click', function (event) {\r\n      event.preventDefault();\r\n      const dropdownId = this.parentElement.getAttribute('data-dropdown');\r\n      const dropdown = document.getElementById(dropdownId);\r\n\r\n      const isActive = this.getAttribute('data-active') === 'true';\r\n\r\n      document.querySelectorAll('.dropdown__list').forEach(list => {\r\n        link.classList.remove('active');\r\n        list.parentElement.setAttribute('data-active', 'false');\r\n      });\r\n\r\n      if (!isActive) {\r\n        this.setAttribute('data-active', 'true');\r\n        this.classList.add('active');\r\n      } else {\r\n        this.setAttribute('data-active', 'false');\r\n        this.classList.remove('active');\r\n      }\r\n\r\n      dropdown.classList.toggle('show');\r\n    });\r\n  });\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/aside-dropdown.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   filterByDate: function() { return /* binding */ filterByDate; }\n/* harmony export */ });\nconst filterByDate = () => {\r\n\r\n  const datePicker = document.getElementById(\"day\");\r\n  const table = document.querySelector('.result__table')\r\n  const filter = document.querySelector('.filter')\r\n  const filterButtons = document.querySelectorAll('.filter-buttons > button')\r\n  const itemsTable = table.querySelectorAll('.row')\r\n  // itemsTable\r\n\r\n  // 1. Найти дату, по полю в таблице дайт\r\n  // 2. Повесить обработчик событий на кнопки в хедере\r\n  // 3. Каждой кнопки добавить дата-атрибут, для сравнения даты\r\n  // 4. Сравнивать нажатую кнопку с полем дайт в таблице \r\n  // 5. Выводить только элементы, которые совпадают. \r\n\r\n\r\n  const changeDate = () => {\r\n    const datePicker = document.getElementById(\"day\");\r\n\r\n    let currentDate = new Date();\r\n    currentDate.setMonth(currentDate.getMonth());\r\n\r\n    updateDisplayedDate(currentDate);\r\n\r\n    datePicker.querySelector('.prev').addEventListener('click', () => {\r\n      currentDate.setDate(currentDate.getDate() - 1);\r\n      updateDisplayedDate(currentDate);\r\n    });\r\n\r\n    datePicker.querySelector('.next').addEventListener('click', () => {\r\n      currentDate.setDate(currentDate.getDate() + 1);\r\n      updateDisplayedDate(currentDate);\r\n    });\r\n\r\n    function updateDisplayedDate(date) {\r\n      const formattedDate = formatDate(date);\r\n      datePicker.querySelector('input').value = formattedDate;\r\n    }\r\n\r\n    function formatDate(date) {\r\n      const day = date.getDate();\r\n      const month = date.toLocaleString('ru', { month: 'long' });\r\n      // const year = date.getFullYear();\r\n      return `${day} ${month}`;\r\n    }\r\n  }\r\n\r\n  changeDate()\r\n\r\n}\r\n\n\n//# sourceURL=webpack://onyx-project/./src/js/module/filter/index.js?");

/***/ }),

/***/ "./src/js/module/payment_schedule/index.js":
/*!*************************************************!*\
  !*** ./src/js/module/payment_schedule/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExpensesAnim: function() { return /* binding */ ExpensesAnim; }\n/* harmony export */ });\nclass ExpensesAnim {\r\n  constructor(options) {\r\n    this.options = options\r\n    this.className = this.options.className\r\n\r\n    if (!this.className) return;\r\n\r\n    this.init()\r\n  }\r\n\r\n  init() {\r\n    this.box = document.querySelector(`.${this.className}`)\r\n    this.wrapper = this.box.querySelector('.rev__image')\r\n\r\n    this.canvas = document.getElementById(`${this.className}__output`)\r\n    this.ctx = this.canvas.getContext('2d')\r\n\r\n    this.grayColor = '#f0f4f7';\r\n    this.setSizes()\r\n\r\n    this.drawArc()\r\n    this.updateDynamicArc()\r\n  }\r\n\r\n  setSizes() {\r\n    const width = this.wrapper.getBoundingClientRect().width\r\n    const height = this.wrapper.getBoundingClientRect().height\r\n\r\n    this.canvas.width = width\r\n    this.canvas.height = height\r\n    this.currentAngle = Math.PI\r\n    this.targetAngle = Math.PI * 2\r\n\r\n    this.centerX = this.ctx.canvas.width / 2\r\n    this.centerY = this.ctx.canvas.height\r\n    this.radius = this.ctx.canvas.width / 2.8\r\n    this.startAngle = Math.PI\r\n    this.endAngle = this.currentAngle\r\n    this.lineThickness = 58\r\n  }\r\n\r\n  drawArc = (currentAngle = this.endAngle, color = this.grayColor) => {\r\n    this.ctx.lineWidth = this.lineThickness;\r\n    this.ctx.strokeStyle = color;\r\n    this.ctx.beginPath();\r\n    // this.ctx.lineCap = 'round'\r\n    this.ctx.arc(this.centerX, this.centerY, this.radius, this.startAngle, currentAngle, false);\r\n    this.ctx.stroke();\r\n  }\r\n\r\n  drawArrow = () => {\r\n    // Стрелка, указывающая на продвижение дуги\r\n    this.ctx.beginPath()\r\n    this.resetBoxShadow()\r\n\r\n    this.ctx.moveTo(\r\n      this.centerX + (this.radius / 2) * Math.cos(this.currentAngle),\r\n      this.centerY + (this.radius / 2) * Math.sin(this.currentAngle)\r\n    );\r\n    this.ctx.lineTo(\r\n      0.5 + this.centerX + .5 * Math.cos(this.targetAngle),\r\n      0.5 + this.centerY + .5 * Math.sin(this.targetAngle)\r\n    );\r\n\r\n    this.ctx.strokeStyle = `rgb(${this.options.color})`;\r\n    this.ctx.lineWidth = 10;\r\n    this.ctx.lineCap = 'round';\r\n    this.ctx.stroke();\r\n  }\r\n\r\n  boxShadow = () => {\r\n    this.ctx.shadowColor = `rgba(${this.options.color},0.5)`\r\n    this.ctx.shadowOffsetX = 15\r\n    this.ctx.shadowOffsetY = 8\r\n    this.ctx.shadowBlur = 15\r\n  }\r\n  resetBoxShadow = () => {\r\n    this.ctx.shadowColor = `rgba(${this.options.color},0.5)`\r\n    this.ctx.shadowOffsetX = 0\r\n    this.ctx.shadowOffsetY = 0\r\n    this.ctx.shadowBlur = 0\r\n  }\r\n  updateDynamicArc = () => {\r\n    const amountCash = this.box.querySelector('.cash > span');\r\n    const amountNonCash = this.box.querySelector('.non-cash > span');\r\n    const amountVal = parseFloat(amountCash.innerHTML.replace('₽', '').trim());\r\n    const amountNVal = parseFloat(amountNonCash.innerHTML.replace('₽', '').trim());\r\n    const amount = amountVal + amountNVal\r\n\r\n    if (!isNaN(amount)) {\r\n      // Формула с расчётом на то, что максимальное число 100000\r\n      // Если число больше, тогда нужно увеличивать делитель\r\n      this.targetAngle = (1 + amount / 100) * Math.PI;\r\n\r\n      // Запуск анимации\r\n      requestAnimationFrame(this.animateDynamicArc);\r\n    } else {\r\n      console.log('Пожалуйста, передайте корректное число!');\r\n    }\r\n\r\n  };\r\n\r\n  animateDynamicArc = () => {\r\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    this.ctx.save()\r\n\r\n    // Перерисовка статической дуги\r\n    this.drawArc(Math.PI * 2)\r\n\r\n    this.boxShadow()\r\n\r\n    // Динамическая дуга\r\n    this.drawArc(this.currentAngle, `rgb(${this.options.color})`)\r\n\r\n    this.drawArrow()\r\n\r\n    this.ctx.restore(); // Восстанавливаем предыдущее состояние контекста\r\n\r\n    // Обновление текущего угла\r\n    if (this.currentAngle < this.targetAngle) {\r\n      this.currentAngle += 0.02;\r\n      requestAnimationFrame(this.animateDynamicArc);\r\n    }\r\n  };\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/payment_schedule/index.js?");

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