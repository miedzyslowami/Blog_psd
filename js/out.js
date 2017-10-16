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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//hamburger menu

//slider code starts here
const banner = document.getElementById('main_banner');
const slider = banner.getElementsByTagName('img')[0];
const titles = ['Live in Paris', 'Travel alone', 'Feel freedom'];
const indicators = document.querySelectorAll('.slide_inidicator');

let title = document.getElementById('latest_news_title');
let currentImage = 0;
setTimeout(changeOpacity, 5000);

function changeOpacity() {
  slider.classList.toggle('fadeOut');
}

function changeCurrentImage() {
  currentImage == 2
    ? currentImage = 0
    : currentImage++;
  slider.src = `./images/banner_${currentImage}.jpg`;
  title.innerText = titles[currentImage];
  indicators.forEach((indicator,index)=>{
    currentImage == index
    ? indicator.innerText= '⬛'
    : indicator.innerText = '⬜';
  });
}

slider.addEventListener('transitionend', () => {
  if (slider.classList == 'fadeOut') {
    changeCurrentImage();
    changeOpacity();
  } else {
    setTimeout(changeOpacity, 5000);
  }
})
//slider code ends here

//form validation code starts here
const submit = document.getElementById('submit');
const email = document.getElementById('email');
const name = document.getElementById('name');
const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
  if(validateName() && validateEmail()){
  }else{
    e.preventDefault();
    console.log('check form');
  }
});

function validateName(){
  if(name.value.length > 5){
    return true;
  }else{
    return false;
  }
}

function validateEmail(){
  if(email.value.length>3 && email.value.includes('@')){
    return true;
  }else{
    return false;
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);