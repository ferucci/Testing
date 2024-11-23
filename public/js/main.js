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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_filter_filter_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/filter/filter-select.js */ \"./src/js/module/filter/filter-select.js\");\n/* harmony import */ var _module_aside_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/aside-dropdown.js */ \"./src/js/module/aside-dropdown.js\");\n/* harmony import */ var _module_filter_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/filter/index.js */ \"./src/js/module/filter/index.js\");\n/* harmony import */ var _module_vars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/vars.js */ \"./src/js/module/vars.js\");\n/* harmony import */ var _module_payment_schedule_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/payment_schedule/index.js */ \"./src/js/module/payment_schedule/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n\r\n  const { sidebarLinks } = _module_vars_js__WEBPACK_IMPORTED_MODULE_3__.vars;\r\n\r\n  const optionsWithCanvas = (CN, COLOR) => {\r\n    if (!String(CN)) return;\r\n    return {\r\n      className: CN,\r\n      color: COLOR\r\n    }\r\n  }\r\n\r\n  ;(0,_module_aside_dropdown_js__WEBPACK_IMPORTED_MODULE_1__.toggleDropdown)(sidebarLinks);\r\n  (0,_module_filter_filter_select_js__WEBPACK_IMPORTED_MODULE_0__.Select)()\r\n\r\n\r\n  const income = new _module_payment_schedule_index_js__WEBPACK_IMPORTED_MODULE_4__.ExpensesAnim(optionsWithCanvas('income', '31, 202, 69'))\r\n  const expenses = new _module_payment_schedule_index_js__WEBPACK_IMPORTED_MODULE_4__.ExpensesAnim(optionsWithCanvas('expenses', '202, 31, 41'))\r\n\r\n  const options = {\r\n    tableSelector: '.result__table',\r\n    filterSelector: '.filter',\r\n    datePickerSelector: 'day',\r\n    amountsClasses: {\r\n      income,\r\n      expenses\r\n    }\r\n  }\r\n  new _module_filter_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](options)\r\n\r\n})\r\n\n\n//# sourceURL=webpack://onyx-project/./src/js/main.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/js/module/helpers.js\");\n\r\n\r\nclass DateFilter {\r\n  constructor(options = {}) {\r\n    this.table = document.querySelector(options.tableSelector);\r\n    this.filter = document.querySelector(options.filterSelector);\r\n    this.datePicker = document.getElementById(options.datePickerSelector);\r\n    this.expenses = options.amountsClasses.expenses;\r\n    this.income = options.amountsClasses.income;\r\n    this.currentDate = new Date();\r\n\r\n    this.patterns = [\r\n      {\r\n        pattern: /(\\d{2})\\.(\\d{2})\\.(\\d{4}) (\\d{2}):(\\d{2})/,\r\n        toDate: (matches) => new Date(matches[3], matches[2] - 1, matches[1], matches[4], matches[5]),\r\n      },\r\n      {\r\n        pattern: /(\\d{4}),(\\d{2}),(\\d{2})/,\r\n        toDate: (matches) => new Date(matches[1], matches[2] - 1, matches[3]),\r\n      },\r\n      {\r\n        pattern: /(\\d{2}):(\\d{2}) (\\d{2})\\.(\\d{2})\\./,\r\n        toDate: (matches) =>\r\n          new Date(new Date().getFullYear(), matches[4] - 1, matches[3], matches[1], matches[2]), // Предполагается текущий год\r\n      },\r\n      {\r\n        pattern: /(\\d{2})\\/(\\d{2})\\/(\\d{4})/,\r\n        toDate: (matches) => new Date(matches[3], matches[2] - 1, matches[1]),\r\n      },\r\n    ];\r\n\r\n    this.handlers = {\r\n      '.date-switch.prev': () => this.changeDate('dec'),\r\n      '.date-switch.next': () => this.changeDate('inc'),\r\n      '#today': () => {\r\n        this.updateDisplayedDate((this.currentDate = new Date()));\r\n        this.filterData(this.currentDate);\r\n      },\r\n      '#yesterday': () => {\r\n        this.updateDisplayedDate((this.currentDate = new Date()))\r\n        this.changeDate('dec')\r\n      },\r\n      '#month': () => this.filterData(this.currentDate, 'month'),\r\n      '#year': () => this.filterData(this.currentDate, 'year'),\r\n    };\r\n\r\n    this.delay = 300;\r\n\r\n    this.outputCash = []\r\n    this.outputNonCash = []\r\n\r\n    this.isClickBlocked = false;\r\n    this.debouncedResizeHandler = this.debounce(this.onWindowResize.bind(this), this.delay);\r\n\r\n    window.addEventListener('resize', this.debouncedResizeHandler); // Подписка на событие resize\r\n\r\n    // ОПТИМИЗИРОВАТЬ КОД!\r\n    this.init();\r\n  }\r\n\r\n  init() {\r\n    this.updateDisplayedDate(this.currentDate);\r\n    this.attachEvents();\r\n  }\r\n\r\n  attachEvents() {\r\n    this.filter.addEventListener('click', (e) => {\r\n      const target = e.target;\r\n      // Очищаю массив с общей суммой\r\n      this.outputCash = [];\r\n      this.outputNonCash = [];\r\n      const handlerKey = Object.keys(this.handlers).find(key => target.closest(key));\r\n      if (handlerKey && !this.isClickBlocked) {\r\n        this.isClickBlocked = true;\r\n        setTimeout(() => {\r\n          this.isClickBlocked = false;\r\n        }, this.delay);\r\n        this.handlers[handlerKey]();\r\n      }\r\n    });\r\n  }\r\n\r\n  parseAnyDate(dateString) {\r\n    for (const { pattern, toDate } of this.patterns) {\r\n      const matches = dateString.match(pattern);\r\n      if (matches) {\r\n        return toDate(matches);\r\n      }\r\n    }\r\n\r\n    throw new Error(`Не удалось распознать дату: ${dateString}`);\r\n  }\r\n\r\n  // получаю отфильтрованные элементы\r\n  getAllVisibleElems(item) {\r\n    const itemType = item.querySelector('.type').dataset.type\r\n    const itemAction = item.querySelector('.action').dataset.action\r\n    const itemValue = item.querySelector('.sum').textContent\r\n\r\n    if (itemType === 'cash') this.outputCash.push({\r\n      type: itemType,\r\n      action: itemAction,\r\n      value: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.reduceStringToNumber)(itemValue)\r\n    })\r\n\r\n    if (itemType === 'non-cash') this.outputNonCash.push({\r\n      type: itemType,\r\n      action: itemAction,\r\n      value: (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.reduceStringToNumber)(itemValue)\r\n    })\r\n\r\n  }\r\n\r\n  filterAndCalcValue(typeMoney, action) {\r\n    return typeMoney\r\n      .filter(item => item.action === action)\r\n      .reduce((acc, item) => acc + item.value, 0);\r\n  }\r\n\r\n  // общее количество и вывожу на экран\r\n  setTotalAmountAndView(totalAmountsCash, totalAmountsNonCash, item) {\r\n    const amountCash = item.box.querySelector('.cash > span');\r\n    const amountNonCash = item.box.querySelector('.non-cash > span');\r\n\r\n    amountCash.innerHTML = totalAmountsCash\r\n    amountNonCash.innerHTML = totalAmountsNonCash\r\n  }\r\n\r\n  compareAndSetDisplay(item, ItemDate, date, comparator) {\r\n    if (comparator(ItemDate, date)) {\r\n\r\n      this.getAllVisibleElems(item)\r\n\r\n      this.setTotalAmountAndView(\r\n        this.filterAndCalcValue(this.outputCash, 'sale'),\r\n        this.filterAndCalcValue(this.outputNonCash, 'sale'),\r\n        this.income\r\n      )\r\n      this.setTotalAmountAndView(\r\n        this.filterAndCalcValue(this.outputCash, 'buy'),\r\n        this.filterAndCalcValue(this.outputNonCash, 'buy'),\r\n        this.expenses\r\n      )\r\n\r\n      this.income.start()\r\n      this.expenses.start()\r\n\r\n      item.style.display = 'revert';\r\n    } else {\r\n      item.style.display = 'none';\r\n    }\r\n  }\r\n\r\n  filterData(date, flag = undefined) {\r\n    const itemsTable = this.table.querySelectorAll('.row');\r\n\r\n    itemsTable.forEach((item) => {\r\n      try {\r\n        const itemDate = this.parseAnyDate(item.textContent);\r\n        switch (flag) {\r\n          case 'month':\r\n            this.compareAndSetDisplay(item, itemDate, date, (d1, d2) => d1.getMonth() === d2.getMonth());\r\n            break;\r\n          case 'year':\r\n            this.compareAndSetDisplay(item, itemDate, date, (d1, d2) => d1.getFullYear() === d2.getFullYear());\r\n            break;\r\n          default:\r\n            this.compareAndSetDisplay(item, itemDate, date, (d1, d2) => d1.toDateString() === d2.toDateString());\r\n            break\r\n        }\r\n      } catch (error) {\r\n        console.error(error.message);\r\n      }\r\n    });\r\n  }\r\n\r\n  changeDate(action) {\r\n    if (action === 'dec') {\r\n      this.currentDate.setDate(this.currentDate.getDate() - 1);\r\n    } else {\r\n      this.currentDate.setDate(this.currentDate.getDate() + 1);\r\n    }\r\n\r\n    this.updateDisplayedDate(this.currentDate);\r\n    this.filterData(this.currentDate);\r\n  }\r\n\r\n  formatDate(date) {\r\n    const day = date.getDate();\r\n    const month = date.toLocaleString('ru', { month: 'long' });\r\n    const year = date.getFullYear();\r\n    return `${day} ${month} ${year}`;\r\n  }\r\n\r\n  updateDisplayedDate(date) {\r\n    const formattedDate = this.formatDate(date);\r\n    this.datePicker.querySelector('input').value = formattedDate;\r\n  }\r\n\r\n  onWindowResize() {\r\n    console.log('Window resized!');\r\n  }\r\n\r\n  debounce(func, wait) {\r\n    let timeout;\r\n    return function (...args) {\r\n      clearTimeout(timeout);\r\n      timeout = setTimeout(() => func.apply(this, args), wait);\r\n    };\r\n  }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (DateFilter);\r\n\n\n//# sourceURL=webpack://onyx-project/./src/js/module/filter/index.js?");

/***/ }),

/***/ "./src/js/module/helpers.js":
/*!**********************************!*\
  !*** ./src/js/module/helpers.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reduceStringToNumber: function() { return /* binding */ reduceStringToNumber; }\n/* harmony export */ });\n\r\n\r\nconst reduceStringToNumber = (str) => {\r\n  return parseFloat(str.replace(/\\s/g, '').replace('₽', ''))\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/helpers.js?");

/***/ }),

/***/ "./src/js/module/payment_schedule/index.js":
/*!*************************************************!*\
  !*** ./src/js/module/payment_schedule/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ExpensesAnim: function() { return /* binding */ ExpensesAnim; }\n/* harmony export */ });\n/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers.js */ \"./src/js/module/helpers.js\");\n\r\n\r\nclass ExpensesAnim {\r\n  constructor(options) {\r\n    this.options = options\r\n    this.className = this.options.className\r\n\r\n    if (!this.className) return;\r\n\r\n    this.#init()\r\n    this.start()\r\n  }\r\n\r\n  #init() {\r\n    this.box = document.querySelector(`.${this.className}`)\r\n    this.wrapper = this.box.querySelector('.rev__image')\r\n\r\n    this.canvas = document.getElementById(`${this.className}__output`)\r\n    this.ctx = this.canvas.getContext('2d')\r\n\r\n    this.height = this.wrapper.getBoundingClientRect().height\r\n    this.width = this.wrapper.getBoundingClientRect().width\r\n\r\n    this.grayColor = '#f0f4f7';\r\n  }\r\n\r\n  start() {\r\n    this.setSizes()\r\n    this.drawArc()\r\n    this.updateDynamicArc()\r\n  }\r\n\r\n  setSizes() {\r\n\r\n    this.canvas.width = this.width\r\n    this.canvas.height = this.height\r\n    this.currentAngle = Math.PI\r\n    this.targetAngle = Math.PI * 2\r\n\r\n    this.centerX = this.ctx.canvas.width / 2\r\n    this.centerY = this.ctx.canvas.height\r\n    this.radius = this.ctx.canvas.width / 2.8\r\n    this.startAngle = Math.PI\r\n    this.endAngle = this.currentAngle\r\n    this.lineThickness = 58\r\n  }\r\n\r\n  drawArc = (currentAngle = this.endAngle, color = this.grayColor) => {\r\n    this.ctx.lineWidth = this.lineThickness;\r\n    this.ctx.strokeStyle = color;\r\n    this.ctx.beginPath();\r\n    // this.ctx.lineCap = 'round'\r\n    this.ctx.arc(this.centerX, this.centerY, this.radius, this.startAngle, currentAngle, false);\r\n    this.ctx.stroke();\r\n  }\r\n\r\n  drawArrow = () => {\r\n    // Стрелка, указывающая на продвижение дуги\r\n    this.ctx.beginPath()\r\n    this.resetBoxShadow()\r\n\r\n    this.ctx.moveTo(\r\n      this.centerX + (this.radius / 2) * Math.cos(this.currentAngle),\r\n      this.centerY + (this.radius / 2) * Math.sin(this.currentAngle)\r\n    );\r\n    this.ctx.lineTo(\r\n      0.5 + this.centerX + .5 * Math.cos(this.targetAngle),\r\n      0.5 + this.centerY + .5 * Math.sin(this.targetAngle)\r\n    );\r\n\r\n    this.ctx.strokeStyle = `rgb(${this.options.color})`;\r\n    this.ctx.lineWidth = 10;\r\n    this.ctx.lineCap = 'round';\r\n    this.ctx.stroke();\r\n  }\r\n\r\n  boxShadow = () => {\r\n    this.ctx.shadowColor = `rgba(${this.options.color},0.5)`\r\n    this.ctx.shadowOffsetX = 15\r\n    this.ctx.shadowOffsetY = 8\r\n    this.ctx.shadowBlur = 15\r\n  }\r\n  resetBoxShadow = () => {\r\n    this.ctx.shadowColor = `rgba(${this.options.color},0.5)`\r\n    this.ctx.shadowOffsetX = 0\r\n    this.ctx.shadowOffsetY = 0\r\n    this.ctx.shadowBlur = 0\r\n  }\r\n\r\n  getSumValues() {\r\n    const amountCash = this.box.querySelector('.cash > span');\r\n    const amountNonCash = this.box.querySelector('.non-cash > span');\r\n    const amountVal = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.reduceStringToNumber)(amountCash.textContent);\r\n    const amountNVal = (0,_helpers_js__WEBPACK_IMPORTED_MODULE_0__.reduceStringToNumber)(amountNonCash.textContent);\r\n    const amount = amountVal + amountNVal\r\n    return amount\r\n  }\r\n\r\n  updateDynamicArc = () => {\r\n    const maxValue = 200000;\r\n    const amount = this.getSumValues()\r\n\r\n    if (!isNaN(amount)) {\r\n      // Формула с расчётом на то, что максимальное число 100000\r\n      // Если max-число больше, тогда нужно увеличивать делитель\r\n      this.targetAngle = (1 + amount / maxValue) * Math.PI;\r\n      if (this.targetAngle >= Math.PI * 2) {\r\n        this.targetAngle = Math.PI * 2\r\n      }\r\n      // Запуск анимации\r\n      requestAnimationFrame(this.animateDynamicArc);\r\n    } else {\r\n      console.log('Пожалуйста, передайте корректное число!');\r\n    }\r\n\r\n  };\r\n\r\n  animateDynamicArc = () => {\r\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n    this.ctx.save()\r\n\r\n    // Перерисовка статической дуги\r\n    this.drawArc(Math.PI * 2)\r\n\r\n    this.boxShadow()\r\n\r\n    // Динамическая дуга\r\n    this.drawArc(this.currentAngle, `rgb(${this.options.color})`)\r\n\r\n    this.drawArrow()\r\n\r\n    this.ctx.restore(); // Восстанавливаем предыдущее состояние контекста\r\n\r\n    // Обновление текущего угла\r\n    if (this.currentAngle < this.targetAngle) {\r\n      this.currentAngle += 0.02;\r\n      requestAnimationFrame(this.animateDynamicArc);\r\n    }\r\n  };\r\n}\n\n//# sourceURL=webpack://onyx-project/./src/js/module/payment_schedule/index.js?");

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