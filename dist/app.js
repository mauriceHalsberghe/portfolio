/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeSwitch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themeSwitch.js */ "./src/scripts/themeSwitch.js");
/* harmony import */ var _menuSwitch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuSwitch.js */ "./src/scripts/menuSwitch.js");
/* harmony import */ var _titleFont_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./titleFont.js */ "./src/scripts/titleFont.js");
/* harmony import */ var _circleFollow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./circleFollow.js */ "./src/scripts/circleFollow.js");
/* harmony import */ var _modals_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modals.js */ "./src/scripts/modals.js");
/* harmony import */ var _popOver_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./popOver.js */ "./src/scripts/popOver.js");
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carousel.js */ "./src/scripts/carousel.js");







document.addEventListener('DOMContentLoaded', function () {
  (0,_themeSwitch_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_menuSwitch_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_titleFont_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_circleFollow_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modals_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_popOver_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_carousel_js__WEBPACK_IMPORTED_MODULE_6__["default"])();
});

/***/ }),

/***/ "./src/scripts/carousel.js":
/*!*********************************!*\
  !*** ./src/scripts/carousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initCarousel() {
  var $currentSlide = document.querySelector('.active');
  if ($currentSlide) {
    var $nextButton = document.querySelector('.next');
    var $previousButton = document.querySelector('.previous');
    if (!$nextButton || !$previousButton) {
      return;
    }
    var updateButtonVisibility = function updateButtonVisibility() {
      var currentId = parseInt($currentSlide.id.replace('slide', ''), 10);
      var $nextSlide = document.getElementById("slide".concat(currentId + 1));
      var $previousSlide = document.getElementById("slide".concat(currentId - 1));
      if ($nextSlide) {
        $nextButton.classList.remove('hidden');
      } else {
        $nextButton.classList.add('hidden');
      }
      if ($previousSlide) {
        $previousButton.classList.remove('hidden');
      } else {
        $previousButton.classList.add('hidden');
      }
    };
    updateButtonVisibility();
    $nextButton.addEventListener('click', function () {
      var currentId = parseInt($currentSlide.id.replace('slide', ''), 10);
      var nextId = currentId + 1;
      var $nextSlide = document.getElementById("slide".concat(nextId));
      if ($nextSlide) {
        $currentSlide.classList.remove('active');
        $nextSlide.classList.add('active');
        $currentSlide = $nextSlide;
        updateButtonVisibility();
      }
    });
    $previousButton.addEventListener('click', function () {
      var currentId = parseInt($currentSlide.id.replace('slide', ''), 10);
      var previousId = currentId - 1;
      var $previousSlide = document.getElementById("slide".concat(previousId));
      if ($previousSlide) {
        $currentSlide.classList.remove('active');
        $previousSlide.classList.add('active');
        $currentSlide = $previousSlide;
        updateButtonVisibility();
      }
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCarousel);

/***/ }),

/***/ "./src/scripts/circleFollow.js":
/*!*************************************!*\
  !*** ./src/scripts/circleFollow.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function circleFollow() {
  var imageLight = document.querySelector('.project-image__light');
  if (imageLight) {
    document.addEventListener('mousemove', function (e) {
      var boundingBox = imageLight.getBoundingClientRect();
      var mouseX = e.clientX - boundingBox.left;
      var mouseY = e.clientY - boundingBox.top;
      var maskWidth = imageLight.offsetWidth;
      var maskHeight = imageLight.offsetHeight;
      imageLight.style.zIndex = '5';
      imageLight.style.maskPosition = "".concat(mouseX - maskWidth / 2, "px ").concat(mouseY - maskHeight / 2, "px");
      imageLight.style.webkitMaskPosition = "".concat(mouseX - maskWidth / 2, "px ").concat(mouseY - maskHeight / 2, "px"); // For WebKit browsers
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (circleFollow);

/***/ }),

/***/ "./src/scripts/menuSwitch.js":
/*!***********************************!*\
  !*** ./src/scripts/menuSwitch.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initMenuSwitch() {
  var $menuSwitch = document.querySelector('.switch--menu');
  var $burgerIcon = document.querySelector('.switch__icon--burger');
  var $crossIcon = document.querySelector('.switch__icon--cross');
  var $nav = document.querySelector('.nav');
  $crossIcon.classList.add('hidden');
  $nav.classList.add('nav--inactive');
  $nav.addEventListener('click', function () {
    $burgerIcon.classList.remove('hidden');
    $crossIcon.classList.add('hidden');
    $nav.classList.add('nav--inactive');
  });
  $menuSwitch.addEventListener('click', function () {
    if ($burgerIcon.classList.contains('hidden')) {
      $burgerIcon.classList.remove('hidden');
      $crossIcon.classList.add('hidden');
      $nav.classList.add('nav--inactive');
    } else {
      $burgerIcon.classList.add('hidden');
      $crossIcon.classList.remove('hidden');
      $nav.classList.remove('nav--inactive');
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initMenuSwitch);

/***/ }),

/***/ "./src/scripts/modals.js":
/*!*******************************!*\
  !*** ./src/scripts/modals.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initModals() {
  var $dialogButtons = document.querySelectorAll("[data-target-modal]");
  if ($dialogButtons) {
    $dialogButtons.forEach(function ($dialogButton) {
      $dialogButton.addEventListener('click', function () {
        var dialogName = $dialogButton.getAttribute('data-target-modal');
        var $dialog = document.querySelector("[data-modal=".concat(dialogName, "]"));
        $dialog.showModal();
        var $closeButton = $dialog.querySelector('[data-close]');
        $closeButton.addEventListener('click', function () {
          return $dialog.close();
        });
      });
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initModals);

/***/ }),

/***/ "./src/scripts/popOver.js":
/*!********************************!*\
  !*** ./src/scripts/popOver.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initPopover() {
  var $form = document.querySelector(".contact-form");
  var $alertPopover = document.querySelector('[popover]');
  if ($form) {
    $form.addEventListener("submit", function (event) {
      event.preventDefault();
      if ($alertPopover && $alertPopover.showPopover) {
        $alertPopover.showPopover();
        setTimeout(function () {
          $alertPopover.hidePopover();
        }, 2500);
      }
      $form.reset();
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPopover);

/***/ }),

/***/ "./src/scripts/themeSwitch.js":
/*!************************************!*\
  !*** ./src/scripts/themeSwitch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function initThemeSwitch() {
  var $themeSwitch = document.querySelector('.switch--theme');
  var $sunIcon = document.querySelector('.switch__icon--sun');
  var $moonIcon = document.querySelector('.switch__icon--moon');
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    applyTheme('dark');
  }
  $themeSwitch.addEventListener('click', function () {
    var newTheme = '';
    if (document.body.classList.contains('dark-mode')) {
      newTheme = 'light';
    } else {
      newTheme = 'dark';
    }
    applyTheme(newTheme);
  });
  function applyTheme(mode) {
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
      $sunIcon.classList.add('hidden');
      $moonIcon.classList.remove('hidden');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      $moonIcon.classList.add('hidden');
      $sunIcon.classList.remove('hidden');
      localStorage.setItem('theme', 'light');
    }
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initThemeSwitch);

/***/ }),

/***/ "./src/scripts/titleFont.js":
/*!**********************************!*\
  !*** ./src/scripts/titleFont.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function titleFont() {
  var $title = document.querySelector('.hero__title--name');
  if ($title) {
    $title.innerHTML = $title.textContent.split(' ').map(function (word) {
      var letters = word.split('').map(function (letter) {
        return "<span class=\"char\">".concat(letter, "</span>");
      }).join('');
      return "<div class=\"word\">".concat(letters, "</div>");
    }).join(' ');
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (titleFont);

/***/ }),

/***/ "./src/style/main.css":
/*!****************************!*\
  !*** ./src/style/main.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio_front_end_mauricehalsberghe"] = self["webpackChunkportfolio_front_end_mauricehalsberghe"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/scripts/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./src/style/main.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;