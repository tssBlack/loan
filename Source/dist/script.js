/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
  constructor(selector, next, prev = null) {
    this.slider = document.querySelector(selector);
    this.slides = Array.from(this.slider.children);
    this.currentIndex = 0;
    this.showSlide();
    if (prev) {
      this.slider.querySelectorAll(prev).forEach(button => {
        button.addEventListener('click', () => this.nextSlide());
      });
    }
    this.slider.querySelectorAll(next).forEach(button => {
      button.addEventListener('click', () => this.nextSlide());
      button.parentElement.previousElementSibling.addEventListener('click', () => {
        this.currentIndex = 0;
        this.showSlide();
      });
    });
  }
  showSlide() {
    this.slides.forEach((slide, i) => {
      slide.style.display = i === this.currentIndex ? 'block' : 'none';
    });
  }
  nextSlide() {
    this.slides[this.currentIndex].style.display = 'none';
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.slides[this.currentIndex].style.display = 'block';
    if (this.currentIndex === 2) {
      this.hanson();
    }
  }
  hanson() {
    this.block = document.querySelector('.hanson');
    this.block.style.bottom = `-100%`;
    setTimeout(() => {
      this.block.style.bottom = `0`;
    }, 3000);
  }
  // prevSlide() {
  //     this.slides[this.currentIndex].style.display = 'none';
  //     if(this.currentIndex > 0) {
  //         this.currentIndex--;
  //     } else {
  //         this.currentIndex = this.slides.length - 1;
  //     }
  //     this.slides[this.currentIndex].style.display = 'block';
  // }
}

/***/ }),

/***/ "./src/js/modules/videoPlayer.js":
/*!***************************************!*\
  !*** ./src/js/modules/videoPlayer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPlayer)
/* harmony export */ });
class VideoPlayer {
  constructor(selector) {
    this.players = document.querySelectorAll(selector);
    this.video = '';
    this.players.forEach(player => {
      player.addEventListener('click', event => {
        if (event.currentTarget.dataset.url) {
          this.video = event.currentTarget.dataset.url;
          this.openOverlay();
        }
      });
    });
    document.querySelector('.close').addEventListener('click', () => {
      this.closeOverlay();
    });
  }
  openOverlay() {
    const overlay = document.querySelector('.overlay');
    const container = overlay.querySelector('#frame');
    overlay.style.display = 'flex';
    container.style.height = '100%';
    container.innerHTML = `
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${this.video}?autoplay=1" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
          </iframe>
        `;
  }
  closeOverlay() {
    const overlay = document.querySelector('.overlay');
    const container = overlay.querySelector('#frame');
    container.innerHTML = ``;
    overlay.style.display = 'none';
  }
}

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js");


window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_slider__WEBPACK_IMPORTED_MODULE_0__["default"]('.page', '.next');
  const video = new _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_1__["default"]('.play');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map