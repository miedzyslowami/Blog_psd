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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_js__ = __webpack_require__(1);
//hamburger menu
const burger = document.getElementById('burger');
const navigation = document.querySelector('nav ul');
const nav = document.querySelector('nav');
burger.addEventListener('click',()=>{
  burger.children[0].classList.toggle('rotate_star');
  navigation.classList.toggle('show_menu');
  nav.classList.toggle('fixed_nav');
})


//slider code starts here
const banner = document.getElementById('main_banner');
const slider = banner.getElementsByTagName('img')[0];
const titles = ['Live in Paris', 'Travel alone', 'Feel freedom'];
const indicators = document.querySelectorAll('.slide_inidicator');

let latestNews = document.querySelector('#main_banner h3');
let title = document.getElementById('latest_news_title');
let currentImage = 0;

setTimeout(changeOpacity, 5000);

function changeOpacity() {
  slider.classList.toggle('fadeOut');
  title.classList.toggle('.fadeOut');
  latestNews.classList.toggle('.fadeOut')
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
const nameWarning = document.getElementById('name_validation_warning');
const emailWarning = document.getElementById('email_validation_warning');
let dataObject={name:'',email:''};

form.addEventListener('submit',(e)=>{
  if(validateName() && validateEmail()){
    e.preventDefault();
    nameWarning.classList.remove('show_warning');
    emailWarning.classList.remove('show_warning');
    dataObject.name = name.value;
    dataObject.email = email.value;
    updateFirebase(dataObject.name,dataObject.email).then(()=>{
      form.reset();
    });

  }else {
    e.preventDefault();
    validateName();
    validateEmail();
  }
});

function validateName(){
  if(name.value.length > 4){
    nameWarning.classList.remove('show_warning');
    return true;
  }else{
    nameWarning.classList.add('show_warning');
    return false;
  }
}

function validateEmail(){
  if(email.value.length>3 && email.value.includes('@')){
    emailWarning.classList.remove('show_warning');
    return true;
  }else{
      emailWarning.classList.add('show_warning');
    return false;
  }
}
//send data to firebase

firebase.initializeApp(__WEBPACK_IMPORTED_MODULE_0__config_js__["a" /* config */]);

function updateFirebase(name, email) {
  let dataStamp = Date.now();
  return new Promise((resolve,reject) => {
    firebase.database().ref(dataStamp).set({
      name: name,
      email: email
    });
    return resolve();
  });
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

const config = {
    apiKey: "AIzaSyDafrPwrp-oDmwiAXhiBAQ7F8fp-VWBD3E",
    authDomain: "forms-c4662.firebaseapp.com",
    databaseURL: "https://forms-c4662.firebaseio.com",
    projectId: "forms-c4662",
    storageBucket: "forms-c4662.appspot.com",
    messagingSenderId: "378013086252"
  };
/* harmony export (immutable) */ __webpack_exports__["a"] = config;



/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);