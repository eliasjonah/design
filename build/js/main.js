/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_scroll_width__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/scroll-width */ \"./js/utils/scroll-width.js\");\n/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ios-vh-fix */ \"./js/utils/ios-vh-fix.js\");\n/* harmony import */ var _modules_header_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/header-popup */ \"./js/modules/header-popup.js\");\n/* harmony import */ var _modules_draft_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/draft-slider */ \"./js/modules/draft-slider.js\");\n/* harmony import */ var _modules_basic_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/basic-slider */ \"./js/modules/basic-slider.js\");\n/* harmony import */ var _modules_products_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/products-slider */ \"./js/modules/products-slider.js\");\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n  Object(_utils_scroll_width__WEBPACK_IMPORTED_MODULE_0__[\"setScrollWidth\"])();\n  Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__[\"iosVhFix\"])();\n});\n\n// в load следует добавить скрипты, не участвующие в работе первого экрана\nwindow.addEventListener('load', () => {\n  Object(_modules_header_popup__WEBPACK_IMPORTED_MODULE_2__[\"headerPopup\"])();\n  Object(_modules_draft_slider__WEBPACK_IMPORTED_MODULE_3__[\"draftSlider\"])();\n  Object(_modules_basic_slider__WEBPACK_IMPORTED_MODULE_4__[\"basicSlider\"])();\n  Object(_modules_products_slider__WEBPACK_IMPORTED_MODULE_5__[\"productsSlider\"])();\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/modules/basic-slider.js":
/*!************************************!*\
  !*** ./js/modules/basic-slider.js ***!
  \************************************/
/*! exports provided: basicSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"basicSlider\", function() { return basicSlider; });\nfunction basicSlider() {\n  // eslint-disable-next-line no-unused-vars\n  const swiper = new Swiper('.basic__slider', {\n    centeredSlides: true,\n    loop: true,\n    speed: 1500,\n    slidesPerView: 'auto',\n    spaceBetween: 20,\n    autoplay: {\n      delay: 4000,\n      disableOnInteraction: false\n    },\n    breakpoints: {\n      // when window width is >= 720px\n      767: {\n        slidesPerView: 3\n      },\n      // when window width is >= 576px\n      576: {\n        centeredSlides: false,\n        slidesPerView: 2\n      },\n      // when window width is >= 320px\n      320: {\n        slidesPerView: 'auto',\n        freeMode: true\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./js/modules/basic-slider.js?");

/***/ }),

/***/ "./js/modules/draft-slider.js":
/*!************************************!*\
  !*** ./js/modules/draft-slider.js ***!
  \************************************/
/*! exports provided: draftSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draftSlider\", function() { return draftSlider; });\nfunction draftSlider() {\n  // eslint-disable-next-line no-unused-vars\n  const swiper = new Swiper('.draft__slider', {\n    centeredSlides: true,\n    loop: true,\n    speed: 1500,\n    autoplay: {\n      delay: 4000,\n      disableOnInteraction: false\n    },\n    pagination: {\n      el: '.swiper-pagination',\n      type: 'fraction'\n    },\n    navigation: {\n      nextEl: '.draft__btn--next',\n      prevEl: '.draft__btn--prev'\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./js/modules/draft-slider.js?");

/***/ }),

/***/ "./js/modules/header-popup.js":
/*!************************************!*\
  !*** ./js/modules/header-popup.js ***!
  \************************************/
/*! exports provided: headerPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"headerPopup\", function() { return headerPopup; });\nfunction headerPopup() {\n  const burger = document.querySelector(\".header__burger\");\n  const header = document.querySelector(\".header\");\n  const popup = document.querySelector(\".header__popup\");\n  const linksWrapper = document.querySelector(\".header__links\");\n  const links = document.querySelectorAll(\".header__link\");\n  const html = document.querySelector(\"html\");\n  function showHide() {\n    const activeItems = [burger, header, popup, html];\n    activeItems.forEach(item => {\n      item.classList.toggle(\"active\");\n    });\n  }\n  burger.onclick = function () {\n    showHide();\n  };\n  links.forEach(item => {\n    item.onclick = function () {\n      showHide();\n    };\n  });\n  popup.addEventListener('click', e => {\n    if (e.target == popup && e.target != linksWrapper) {\n      showHide();\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./js/modules/header-popup.js?");

/***/ }),

/***/ "./js/modules/products-slider.js":
/*!***************************************!*\
  !*** ./js/modules/products-slider.js ***!
  \***************************************/
/*! exports provided: productsSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"productsSlider\", function() { return productsSlider; });\nfunction productsSlider() {\n  // eslint-disable-next-line no-unused-vars\n  const swiper = new Swiper('.products__slider', {\n    loop: true,\n    speed: 1500,\n    slidesPerView: '4',\n    spaceBetween: 20,\n    autoplay: {\n      delay: 3000,\n      disableOnInteraction: false\n    },\n    pagination: {\n      el: '.products__pagination',\n      clickable: true\n    },\n    breakpoints: {\n      // when window width is >= 720px\n      992: {\n        slidesPerView: 4\n      },\n      // when window width is >= 546px\n      767: {\n        slidesPerView: 3\n      },\n      // when window width is >= 546px\n      546: {\n        slidesPerView: 2\n      },\n      // when window width is >= 320px\n      320: {\n        slidesPerView: 'auto',\n        freeMode: true\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack:///./js/modules/products-slider.js?");

/***/ }),

/***/ "./js/utils/ios-checker.js":
/*!*********************************!*\
  !*** ./js/utils/ios-checker.js ***!
  \*********************************/
/*! exports provided: iosChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iosChecker\", function() { return iosChecker; });\nconst iosChecker = () => {\n  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform)\n  // iPad on iOS 13 detection\n  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;\n};\n\n//# sourceURL=webpack:///./js/utils/ios-checker.js?");

/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iosVhFix\", function() { return iosVhFix; });\n/* harmony import */ var _ios_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ios-checker */ \"./js/utils/ios-checker.js\");\n\nconst iosVhFix = () => {\n  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {\n    if (Object(_ios_checker__WEBPACK_IMPORTED_MODULE_0__[\"iosChecker\"])()) {\n      let vh = window.innerHeight * 0.01;\n      document.documentElement.style.setProperty('--vh', `${vh}px`);\n      window.addEventListener('resize', function () {\n        vh = window.innerHeight * 0.01;\n        document.documentElement.style.setProperty('--vh', `${vh}px`);\n      });\n    }\n  }\n};\n\n\n//# sourceURL=webpack:///./js/utils/ios-vh-fix.js?");

/***/ }),

/***/ "./js/utils/scroll-width.js":
/*!**********************************!*\
  !*** ./js/utils/scroll-width.js ***!
  \**********************************/
/*! exports provided: setScrollWidth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setScrollWidth\", function() { return setScrollWidth; });\nconst setScrollWidth = () => {\n  return document.documentElement.style.setProperty('--scroll-width', `${getScrollbarWidth()}px`);\n};\nfunction getScrollbarWidth() {\n  const outer = document.createElement('div');\n  outer.style.visibility = 'hidden';\n  outer.style.width = '100px';\n  outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps\n\n  document.body.appendChild(outer);\n  const widthNoScroll = outer.offsetWidth;\n  outer.style.overflow = 'scroll';\n\n  // add innerdiv\n  const inner = document.createElement('div');\n  inner.style.width = '100%';\n  outer.appendChild(inner);\n  const widthWithScroll = inner.offsetWidth;\n\n  // remove divs\n  outer.parentNode.removeChild(outer);\n  return widthNoScroll - widthWithScroll;\n}\n\n\n//# sourceURL=webpack:///./js/utils/scroll-width.js?");

/***/ })

/******/ });