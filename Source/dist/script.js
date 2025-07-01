/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/difference.js":
/*!**************************************!*\
  !*** ./src/js/modules/difference.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Difference)
/* harmony export */ });
class Difference {
  constructor({
    officerold,
    officernew,
    item,
    btn
  }) {
    this.officerold = document.querySelector(officerold);
    this.officernew = document.querySelector(officernew);
    this.itemOld = this.officerold.querySelectorAll(item);
    this.itemNew = this.officernew.querySelectorAll(item);
    this.btnOld = this.officerold.querySelector(btn);
    this.btnNew = this.officernew.querySelector(btn);
    this.hideItems();
    this.itemIndexOld = 0;
    this.itemIndexNew = 0;
    this.btnOld.addEventListener('click', () => this.showItemsOld());
    this.btnNew.addEventListener('click', () => this.showItemsNew());
  }
  hideItems() {
    this.itemOld.forEach(item => {
      if (item !== this.btnOld.parentElement) {
        item.style.display = 'none';
      }
    });
    this.itemNew.forEach(item => {
      if (item !== this.btnNew.parentElement) {
        item.style.display = 'none';
      }
    });
  }
  showItemsOld() {
    this.itemOld[this.itemIndexOld].style.display = '';
    this.itemIndexOld++;
    if (this.itemIndexOld >= this.itemOld.length - 1) {
      this.btnOld.parentElement.style.display = 'none';
    }
  }
  showItemsNew() {
    this.itemNew[this.itemIndexNew].style.display = '';
    this.itemIndexNew++;
    if (this.itemIndexNew >= this.itemNew.length - 1) {
      this.btnNew.parentElement.style.display = 'none';
    }
  }
}

/***/ }),

/***/ "./src/js/modules/sliders/moduleslider.js":
/*!************************************************!*\
  !*** ./src/js/modules/sliders/moduleslider.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModuleSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class ModuleSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    selector,
    next,
    prev,
    activeClass
  }) {
    super({
      selector,
      next,
      prev,
      activeClass
    });
    this.slider.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        align-items: flex-start;
        `;
    this.next.forEach(el => {
      el.addEventListener('click', () => this.nextSlide());
    });
    this.prev.forEach(el => {
      el.addEventListener('click', () => this.prevSlide());
    });
    this.activeElement();
  }
  nextSlide() {
    const firstSlide = this.slides[0];
    this.deActiveElement();
    this.slider.appendChild(firstSlide);
    firstSlide.classList.remove(this.activeClass);
    this.slides = Array.from(this.slider.children).filter(el => el.tagName !== 'BUTTON');
    this.slides[0].classList.add(this.activeClass);
    this.activeElement();
  }
  prevSlide() {
    const slides = Array.from(this.slider.children).filter(el => el.tagName !== 'BUTTON');
    const lastSlide = slides[slides.length - 1];
    this.deActiveElement();
    this.slides[0].classList.remove(this.activeClass);
    this.slider.prepend(lastSlide);
    this.slides = Array.from(this.slider.children).filter(el => el.tagName !== 'BUTTON');
    this.slides[0].classList.add(this.activeClass);
    this.activeElement();
  }
  activeElement() {
    if (this.activeClass === 'card-active') {
      const activeEl = this.slider.querySelector('.' + this.activeClass + ' .card__title');
      if (activeEl) {
        this.slider.querySelector('.card__controls-arrow').style.opacity = '1';
        activeEl.style.opacity = '1';
      }
    }
  }
  deActiveElement() {
    if (this.activeClass === 'card-active') {
      const activeEl = this.slider.querySelector('.' + this.activeClass + ' .card__title');
      if (activeEl) {
        this.slider.querySelector('.card__controls-arrow').style.opacity = '';
        activeEl.style.opacity = '';
      }
    }
  }
}

/***/ }),

/***/ "./src/js/modules/sliders/pageSlider.js":
/*!**********************************************!*\
  !*** ./src/js/modules/sliders/pageSlider.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageSlider)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class pageSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor({
    selector,
    next,
    prev
  }) {
    super({
      selector,
      next,
      prev
    });
    this.slider.querySelectorAll(next).forEach(button => {
      button.addEventListener('click', () => this.nextSlide());
      button.parentElement.previousElementSibling.addEventListener('click', () => {
        this.currentIndex = 0;
        this.showSlide();
      });
    });
    this.slider.querySelectorAll(prev).forEach(button => {
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
  prevSlide() {
    this.slides[this.currentIndex].style.display = 'none';
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.slides.length - 1;
    }
    this.slides[this.currentIndex].style.display = 'block';
    if (this.currentIndex === 2) {
      this.hanson();
    }
  }
  hanson() {
    this.block = document.querySelector('.hanson');
    if (this.block) {
      this.block.style.bottom = `-100%`;
      setTimeout(() => {
        this.block.style.bottom = `0`;
      }, 3000);
    }
  }
}

/***/ }),

/***/ "./src/js/modules/sliders/slider.js":
/*!******************************************!*\
  !*** ./src/js/modules/sliders/slider.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
class Slider {
  constructor({
    selector = '',
    next = '',
    prev = '',
    activeClass = ''
  } = {}) {
    this.slider = document.querySelector(selector);
    this.slides = Array.from(this.slider.children);
    this.next = next ? Array.from(document.querySelectorAll(next)) : [];
    this.prev = prev ? Array.from(document.querySelectorAll(prev)) : [];
    this.activeClass = activeClass.replace(/\./g, '');
    this.currentIndex = 0;
  }
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
    this.check = false;
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
    this.check = true;
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
/* harmony import */ var _modules_sliders_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders/slider */ "./src/js/modules/sliders/slider.js");
/* harmony import */ var _modules_sliders_pageSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders/pageSlider */ "./src/js/modules/sliders/pageSlider.js");
/* harmony import */ var _modules_sliders_moduleslider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/sliders/moduleslider */ "./src/js/modules/sliders/moduleslider.js");
/* harmony import */ var _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/videoPlayer */ "./src/js/modules/videoPlayer.js");
/* harmony import */ var _modules_difference__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/difference */ "./src/js/modules/difference.js");





window.addEventListener('DOMContentLoaded', () => {
  // Проверка .page
  if (document.querySelector('.page')) {
    const pageslider = new _modules_sliders_pageSlider__WEBPACK_IMPORTED_MODULE_1__["default"]({
      selector: '.page',
      next: '.next'
    });
  }

  // Видео
  if (document.querySelector('.play')) {
    const video = new _modules_videoPlayer__WEBPACK_IMPORTED_MODULE_3__["default"]('.play');
  }

  // showup
  if (document.querySelector('.showup__content-slider')) {
    const educationalModule = new _modules_sliders_moduleslider__WEBPACK_IMPORTED_MODULE_2__["default"]({
      selector: '.showup__content-slider',
      next: '.showup__next',
      prev: '.showup__prev',
      activeClass: '.card-active'
    });
  }

  // modules
  if (document.querySelector('.modules__content-slider')) {
    const modulesModule = new _modules_sliders_moduleslider__WEBPACK_IMPORTED_MODULE_2__["default"]({
      selector: '.modules__content-slider',
      next: '.modules__info-btns .slick-next',
      prev: '.modules__info-btns .slick-prev',
      activeClass: '.card-active'
    });
  }

  // feed
  if (document.querySelector('.feed__slider')) {
    const feedModule = new _modules_sliders_moduleslider__WEBPACK_IMPORTED_MODULE_2__["default"]({
      selector: '.feed__slider',
      next: '.feed__slider .slick-next',
      prev: '.feed__slider .slick-prev',
      activeClass: '.feed__item-active',
      slideClass: '.feed__item'
    });
  }

  // difference
  if (document.querySelector('.officerold') && document.querySelector('.officernew')) {
    const difference = new _modules_difference__WEBPACK_IMPORTED_MODULE_4__["default"]({
      officerold: '.officerold',
      officernew: '.officernew',
      item: '.officer__card-item',
      btn: '.card__click'
    });
  }

  // pageSlider на module
  if (document.querySelector('.moduleapp')) {
    const moduleSlider = new _modules_sliders_pageSlider__WEBPACK_IMPORTED_MODULE_1__["default"]({
      selector: '.moduleapp',
      next: '.next',
      prev: '.prev'
    });
  }
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map