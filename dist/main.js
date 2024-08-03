/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*
=============== 
Fonts
===============
*/

/*
=============== 
Variables
===============
*/

:root {
    /* dark shades of primary color*/
    --clr-primary-1: hsl(205, 86%, 17%);
    --clr-primary-2: hsl(205, 77%, 27%);
    --clr-primary-3: hsl(205, 72%, 37%);
    --clr-primary-4: hsl(205, 63%, 48%);
    /* primary/main color */
    --clr-primary-5: #49a6e9;
    /* lighter shades of primary color */
    --clr-primary-6: hsl(205, 89%, 70%);
    --clr-primary-7: hsl(205, 90%, 76%);
    --clr-primary-8: hsl(205, 86%, 81%);
    --clr-primary-9: hsl(205, 90%, 88%);
    --clr-primary-10: hsl(205, 100%, 96%);
    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-2: hsl(211, 39%, 23%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-6: hsl(209, 23%, 60%);
    --clr-grey-7: hsl(211, 27%, 70%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: hsl(210, 36%, 96%);
    --clr-white: #fff;
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-green-dark: hsl(125, 67%, 44%);
    --clr-green-light: hsl(125, 71%, 66%);
    --clr-black: #222;
    --ff-primary: 'Roboto', sans-serif;
    --ff-secondary: 'Open Sans', sans-serif;
    --transition: all 0.3s linear;
    --spacing: 0.25rem;
    --radius: 0.5rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 620px;
}

/*
=============== 
Global Styles
===============
*/

*,
::after,
::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--ff-secondary);
    background: var(--clr-grey-9);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
    height: 100vh;
}

ul {
    list-style-type: none;
}

a {
    text-decoration: none;
}

h1,
h2,
h3,
h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: var(--ff-primary);
}

h1 {
    font-size: 3rem;
}

h2 {
    font-size: 2rem;
}

h3 {
    font-size: 1.25rem;
}

h4 {
    font-size: 0.875rem;
}

p {
    margin-bottom: 1.25rem;
    color: var(--clr-grey-5);
}

@media screen and (min-width: 800px) {
    h1 {
        font-size: 4rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 1.75rem;
    }

    h4 {
        font-size: 1rem;
    }

    body {
        font-size: 1rem;
    }

    h1,
    h2,
    h3,
    h4 {
        line-height: 1;
    }
}

/*  global classes */

.btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: block;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid var(--clr-primary-5);
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
}

.btn:hover {
    color: var(--clr-primary-5);
    background: var(--clr-primary-1);
    border-color: var(--clr-primary-1);
}


/*
=======================================================
                section
=======================================================
*/
.nav>nav {
   background-color: black;
    height: 3rem;
    color: white;
}

.section .section-center{
    display: grid;
    grid-template-columns: 1fr 2fr;
    border: 1px solid var(--clr-black);
    height: 1000px;
    gap: 5px;
}

.side-bar{
    border-right: 1px solid black;
}
.main{
    border-left: 1px black solid;
}

.cross img{
    background-color: var(--clr-primary-5);
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

/* .bars{
    background-color: var(--clr-white);
    width: 30px;
    height: 30px;
    border: 1px solid black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
} */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;;CAIC;;AAGD;;;;CAIC;;AAED;IACI,gCAAgC;IAChC,mCAAmC;IACnC,mCAAmC;IACnC,mCAAmC;IACnC,mCAAmC;IACnC,uBAAuB;IACvB,wBAAwB;IACxB,oCAAoC;IACpC,mCAAmC;IACnC,mCAAmC;IACnC,mCAAmC;IACnC,mCAAmC;IACnC,qCAAqC;IACrC,qCAAqC;IACrC,gCAAgC;IAChC,gCAAgC;IAChC,gCAAgC;IAChC,gCAAgC;IAChC,6BAA6B;IAC7B,gCAAgC;IAChC,gCAAgC;IAChC,gCAAgC;IAChC,gCAAgC;IAChC,gCAAgC;IAChC,iCAAiC;IACjC,iBAAiB;IACjB,kCAAkC;IAClC,mCAAmC;IACnC,oCAAoC;IACpC,qCAAqC;IACrC,iBAAiB;IACjB,kCAAkC;IAClC,uCAAuC;IACvC,6BAA6B;IAC7B,kBAAkB;IAClB,gBAAgB;IAChB,6CAA6C;IAC7C,4CAA4C;IAC5C,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;;;;CAIC;;AAED;;;IAGI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,gCAAgC;IAChC,6BAA6B;IAC7B,wBAAwB;IACxB,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;;;IAII,8BAA8B;IAC9B,0BAA0B;IAC1B,iBAAiB;IACjB,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;AAC5B;;AAEA;IACI;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,eAAe;IACnB;;IAEA;;;;QAII,cAAc;IAClB;AACJ;;AAEA,oBAAoB;;AAEpB;IACI,yBAAyB;IACzB,gCAAgC;IAChC,uBAAuB;IACvB,yBAAyB;IACzB,8BAA8B;IAC9B,cAAc;IACd,6BAA6B;IAC7B,mBAAmB;IACnB,sCAAsC;IACtC,eAAe;IACf,wCAAwC;IACxC,4BAA4B;AAChC;;AAEA;IACI,2BAA2B;IAC3B,gCAAgC;IAChC,kCAAkC;AACtC;;;AAGA;;;;CAIC;AACD;GACG,uBAAuB;IACtB,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,kCAAkC;IAClC,cAAc;IACd,QAAQ;AACZ;;AAEA;IACI,6BAA6B;AACjC;AACA;IACI,4BAA4B;AAChC;;AAEA;IACI,sCAAsC;IACtC,WAAW;IACX,YAAY;IACZ,uBAAuB;IACvB,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;;;;;;;;;GASG","sourcesContent":["/*\r\n=============== \r\nFonts\r\n===============\r\n*/\r\n@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto:400,700&display=swap');\r\n\r\n/*\r\n=============== \r\nVariables\r\n===============\r\n*/\r\n\r\n:root {\r\n    /* dark shades of primary color*/\r\n    --clr-primary-1: hsl(205, 86%, 17%);\r\n    --clr-primary-2: hsl(205, 77%, 27%);\r\n    --clr-primary-3: hsl(205, 72%, 37%);\r\n    --clr-primary-4: hsl(205, 63%, 48%);\r\n    /* primary/main color */\r\n    --clr-primary-5: #49a6e9;\r\n    /* lighter shades of primary color */\r\n    --clr-primary-6: hsl(205, 89%, 70%);\r\n    --clr-primary-7: hsl(205, 90%, 76%);\r\n    --clr-primary-8: hsl(205, 86%, 81%);\r\n    --clr-primary-9: hsl(205, 90%, 88%);\r\n    --clr-primary-10: hsl(205, 100%, 96%);\r\n    /* darkest grey - used for headings */\r\n    --clr-grey-1: hsl(209, 61%, 16%);\r\n    --clr-grey-2: hsl(211, 39%, 23%);\r\n    --clr-grey-3: hsl(209, 34%, 30%);\r\n    --clr-grey-4: hsl(209, 28%, 39%);\r\n    /* grey used for paragraphs */\r\n    --clr-grey-5: hsl(210, 22%, 49%);\r\n    --clr-grey-6: hsl(209, 23%, 60%);\r\n    --clr-grey-7: hsl(211, 27%, 70%);\r\n    --clr-grey-8: hsl(210, 31%, 80%);\r\n    --clr-grey-9: hsl(212, 33%, 89%);\r\n    --clr-grey-10: hsl(210, 36%, 96%);\r\n    --clr-white: #fff;\r\n    --clr-red-dark: hsl(360, 67%, 44%);\r\n    --clr-red-light: hsl(360, 71%, 66%);\r\n    --clr-green-dark: hsl(125, 67%, 44%);\r\n    --clr-green-light: hsl(125, 71%, 66%);\r\n    --clr-black: #222;\r\n    --ff-primary: 'Roboto', sans-serif;\r\n    --ff-secondary: 'Open Sans', sans-serif;\r\n    --transition: all 0.3s linear;\r\n    --spacing: 0.25rem;\r\n    --radius: 0.5rem;\r\n    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\r\n    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\r\n    --max-width: 1170px;\r\n    --fixed-width: 620px;\r\n}\r\n\r\n/*\r\n=============== \r\nGlobal Styles\r\n===============\r\n*/\r\n\r\n*,\r\n::after,\r\n::before {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    font-family: var(--ff-secondary);\r\n    background: var(--clr-grey-9);\r\n    color: var(--clr-grey-1);\r\n    line-height: 1.5;\r\n    font-size: 0.875rem;\r\n    height: 100vh;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n    letter-spacing: var(--spacing);\r\n    text-transform: capitalize;\r\n    line-height: 1.25;\r\n    margin-bottom: 0.75rem;\r\n    font-family: var(--ff-primary);\r\n}\r\n\r\nh1 {\r\n    font-size: 3rem;\r\n}\r\n\r\nh2 {\r\n    font-size: 2rem;\r\n}\r\n\r\nh3 {\r\n    font-size: 1.25rem;\r\n}\r\n\r\nh4 {\r\n    font-size: 0.875rem;\r\n}\r\n\r\np {\r\n    margin-bottom: 1.25rem;\r\n    color: var(--clr-grey-5);\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    h1 {\r\n        font-size: 4rem;\r\n    }\r\n\r\n    h2 {\r\n        font-size: 2.5rem;\r\n    }\r\n\r\n    h3 {\r\n        font-size: 1.75rem;\r\n    }\r\n\r\n    h4 {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    body {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    h1,\r\n    h2,\r\n    h3,\r\n    h4 {\r\n        line-height: 1;\r\n    }\r\n}\r\n\r\n/*  global classes */\r\n\r\n.btn {\r\n    text-transform: uppercase;\r\n    background: var(--clr-primary-5);\r\n    color: var(--clr-white);\r\n    padding: 0.375rem 0.75rem;\r\n    letter-spacing: var(--spacing);\r\n    display: block;\r\n    transition: var(--transition);\r\n    font-size: 0.875rem;\r\n    border: 2px solid var(--clr-primary-5);\r\n    cursor: pointer;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\r\n    border-radius: var(--radius);\r\n}\r\n\r\n.btn:hover {\r\n    color: var(--clr-primary-5);\r\n    background: var(--clr-primary-1);\r\n    border-color: var(--clr-primary-1);\r\n}\r\n\r\n\r\n/*\r\n=======================================================\r\n                section\r\n=======================================================\r\n*/\r\n.nav>nav {\r\n   background-color: black;\r\n    height: 3rem;\r\n    color: white;\r\n}\r\n\r\n.section .section-center{\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    border: 1px solid var(--clr-black);\r\n    height: 1000px;\r\n    gap: 5px;\r\n}\r\n\r\n.side-bar{\r\n    border-right: 1px solid black;\r\n}\r\n.main{\r\n    border-left: 1px black solid;\r\n}\r\n\r\n.cross img{\r\n    background-color: var(--clr-primary-5);\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 1px solid black;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n/* .bars{\r\n    background-color: var(--clr-white);\r\n    width: 30px;\r\n    height: 30px;\r\n    border: 1px solid black;\r\n    border-radius: 50%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".cross").addEventListener("click", () => {
    alert("You clicked the cross");
  });
  const img = document.createElement("img");
  img.setAttribute("src", "./icons/cross.svg");
  document.querySelector(".side-bar").appendChild(img);
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHFJQUFxSTtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxTQUFTLG1GQUFtRixNQUFNLFFBQVEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxRQUFRLE1BQU0sT0FBTyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxRQUFRLFVBQVUsTUFBTSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEs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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnN8Um9ib3RvOjQwMCw3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKlxyXG49PT09PT09PT09PT09PT0gXHJcbkZvbnRzXHJcbj09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuLypcclxuPT09PT09PT09PT09PT09IFxyXG5WYXJpYWJsZXNcclxuPT09PT09PT09PT09PT09XHJcbiovXHJcblxyXG46cm9vdCB7XHJcbiAgICAvKiBkYXJrIHNoYWRlcyBvZiBwcmltYXJ5IGNvbG9yKi9cclxuICAgIC0tY2xyLXByaW1hcnktMTogaHNsKDIwNSwgODYlLCAxNyUpO1xyXG4gICAgLS1jbHItcHJpbWFyeS0yOiBoc2woMjA1LCA3NyUsIDI3JSk7XHJcbiAgICAtLWNsci1wcmltYXJ5LTM6IGhzbCgyMDUsIDcyJSwgMzclKTtcclxuICAgIC0tY2xyLXByaW1hcnktNDogaHNsKDIwNSwgNjMlLCA0OCUpO1xyXG4gICAgLyogcHJpbWFyeS9tYWluIGNvbG9yICovXHJcbiAgICAtLWNsci1wcmltYXJ5LTU6ICM0OWE2ZTk7XHJcbiAgICAvKiBsaWdodGVyIHNoYWRlcyBvZiBwcmltYXJ5IGNvbG9yICovXHJcbiAgICAtLWNsci1wcmltYXJ5LTY6IGhzbCgyMDUsIDg5JSwgNzAlKTtcclxuICAgIC0tY2xyLXByaW1hcnktNzogaHNsKDIwNSwgOTAlLCA3NiUpO1xyXG4gICAgLS1jbHItcHJpbWFyeS04OiBoc2woMjA1LCA4NiUsIDgxJSk7XHJcbiAgICAtLWNsci1wcmltYXJ5LTk6IGhzbCgyMDUsIDkwJSwgODglKTtcclxuICAgIC0tY2xyLXByaW1hcnktMTA6IGhzbCgyMDUsIDEwMCUsIDk2JSk7XHJcbiAgICAvKiBkYXJrZXN0IGdyZXkgLSB1c2VkIGZvciBoZWFkaW5ncyAqL1xyXG4gICAgLS1jbHItZ3JleS0xOiBoc2woMjA5LCA2MSUsIDE2JSk7XHJcbiAgICAtLWNsci1ncmV5LTI6IGhzbCgyMTEsIDM5JSwgMjMlKTtcclxuICAgIC0tY2xyLWdyZXktMzogaHNsKDIwOSwgMzQlLCAzMCUpO1xyXG4gICAgLS1jbHItZ3JleS00OiBoc2woMjA5LCAyOCUsIDM5JSk7XHJcbiAgICAvKiBncmV5IHVzZWQgZm9yIHBhcmFncmFwaHMgKi9cclxuICAgIC0tY2xyLWdyZXktNTogaHNsKDIxMCwgMjIlLCA0OSUpO1xyXG4gICAgLS1jbHItZ3JleS02OiBoc2woMjA5LCAyMyUsIDYwJSk7XHJcbiAgICAtLWNsci1ncmV5LTc6IGhzbCgyMTEsIDI3JSwgNzAlKTtcclxuICAgIC0tY2xyLWdyZXktODogaHNsKDIxMCwgMzElLCA4MCUpO1xyXG4gICAgLS1jbHItZ3JleS05OiBoc2woMjEyLCAzMyUsIDg5JSk7XHJcbiAgICAtLWNsci1ncmV5LTEwOiBoc2woMjEwLCAzNiUsIDk2JSk7XHJcbiAgICAtLWNsci13aGl0ZTogI2ZmZjtcclxuICAgIC0tY2xyLXJlZC1kYXJrOiBoc2woMzYwLCA2NyUsIDQ0JSk7XHJcbiAgICAtLWNsci1yZWQtbGlnaHQ6IGhzbCgzNjAsIDcxJSwgNjYlKTtcclxuICAgIC0tY2xyLWdyZWVuLWRhcms6IGhzbCgxMjUsIDY3JSwgNDQlKTtcclxuICAgIC0tY2xyLWdyZWVuLWxpZ2h0OiBoc2woMTI1LCA3MSUsIDY2JSk7XHJcbiAgICAtLWNsci1ibGFjazogIzIyMjtcclxuICAgIC0tZmYtcHJpbWFyeTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLWZmLXNlY29uZGFyeTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgIC0tc3BhY2luZzogMC4yNXJlbTtcclxuICAgIC0tcmFkaXVzOiAwLjVyZW07XHJcbiAgICAtLWxpZ2h0LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAtLWRhcmstc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIC0tbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgICAtLWZpeGVkLXdpZHRoOiA2MjBweDtcclxufVxyXG5cclxuLypcclxuPT09PT09PT09PT09PT09IFxyXG5HbG9iYWwgU3R5bGVzXHJcbj09PT09PT09PT09PT09PVxyXG4qL1xyXG5cclxuKixcclxuOjphZnRlcixcclxuOjpiZWZvcmUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXNlY29uZGFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jbHItZ3JleS05KTtcclxuICAgIGNvbG9yOiB2YXIoLS1jbHItZ3JleS0xKTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXNwYWNpbmcpO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxufVxyXG5cclxuaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS1jbHItZ3JleS01KTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDEsXHJcbiAgICBoMixcclxuICAgIGgzLFxyXG4gICAgaDQge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiAgZ2xvYmFsIGNsYXNzZXMgKi9cclxuXHJcbi5idG4ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5LTUpO1xyXG4gICAgY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXNwYWNpbmcpO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeS01KTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS01KTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5LTEpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS0xKTtcclxufVxyXG5cclxuXHJcbi8qXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgIHNlY3Rpb25cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4qL1xyXG4ubmF2Pm5hdiB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VjdGlvbiAuc2VjdGlvbi1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLWJsYWNrKTtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgZ2FwOiA1cHg7XHJcbn1cclxuXHJcbi5zaWRlLWJhcntcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5tYWlue1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBibGFjayBzb2xpZDtcclxufVxyXG5cclxuLmNyb3NzIGltZ3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LTUpO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIC5iYXJze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7O0NBSUM7O0FBR0Q7Ozs7Q0FJQzs7QUFFRDtJQUNJLGdDQUFnQztJQUNoQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQ0FBb0M7SUFDcEMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLHFDQUFxQztJQUNyQyxxQ0FBcUM7SUFDckMsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxpQkFBaUI7SUFDakIsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixrQ0FBa0M7SUFDbEMsdUNBQXVDO0lBQ3ZDLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLDZDQUE2QztJQUM3Qyw0Q0FBNEM7SUFDNUMsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTs7OztDQUlDOztBQUVEOzs7SUFHSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0Isd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTs7OztJQUlJLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTs7OztRQUlJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0kseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLDhCQUE4QjtJQUM5QixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLHdDQUF3QztJQUN4Qyw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLGtDQUFrQztBQUN0Qzs7O0FBR0E7Ozs7Q0FJQztBQUNEO0dBQ0csdUJBQXVCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsY0FBYztJQUNkLFFBQVE7QUFDWjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7Ozs7Ozs7O0dBU0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXHJcXG49PT09PT09PT09PT09PT0gXFxyXFxuRm9udHNcXHJcXG49PT09PT09PT09PT09PT1cXHJcXG4qL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zfFJvYm90bzo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qXFxyXFxuPT09PT09PT09PT09PT09IFxcclxcblZhcmlhYmxlc1xcclxcbj09PT09PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAvKiBkYXJrIHNoYWRlcyBvZiBwcmltYXJ5IGNvbG9yKi9cXHJcXG4gICAgLS1jbHItcHJpbWFyeS0xOiBoc2woMjA1LCA4NiUsIDE3JSk7XFxyXFxuICAgIC0tY2xyLXByaW1hcnktMjogaHNsKDIwNSwgNzclLCAyNyUpO1xcclxcbiAgICAtLWNsci1wcmltYXJ5LTM6IGhzbCgyMDUsIDcyJSwgMzclKTtcXHJcXG4gICAgLS1jbHItcHJpbWFyeS00OiBoc2woMjA1LCA2MyUsIDQ4JSk7XFxyXFxuICAgIC8qIHByaW1hcnkvbWFpbiBjb2xvciAqL1xcclxcbiAgICAtLWNsci1wcmltYXJ5LTU6ICM0OWE2ZTk7XFxyXFxuICAgIC8qIGxpZ2h0ZXIgc2hhZGVzIG9mIHByaW1hcnkgY29sb3IgKi9cXHJcXG4gICAgLS1jbHItcHJpbWFyeS02OiBoc2woMjA1LCA4OSUsIDcwJSk7XFxyXFxuICAgIC0tY2xyLXByaW1hcnktNzogaHNsKDIwNSwgOTAlLCA3NiUpO1xcclxcbiAgICAtLWNsci1wcmltYXJ5LTg6IGhzbCgyMDUsIDg2JSwgODElKTtcXHJcXG4gICAgLS1jbHItcHJpbWFyeS05OiBoc2woMjA1LCA5MCUsIDg4JSk7XFxyXFxuICAgIC0tY2xyLXByaW1hcnktMTA6IGhzbCgyMDUsIDEwMCUsIDk2JSk7XFxyXFxuICAgIC8qIGRhcmtlc3QgZ3JleSAtIHVzZWQgZm9yIGhlYWRpbmdzICovXFxyXFxuICAgIC0tY2xyLWdyZXktMTogaHNsKDIwOSwgNjElLCAxNiUpO1xcclxcbiAgICAtLWNsci1ncmV5LTI6IGhzbCgyMTEsIDM5JSwgMjMlKTtcXHJcXG4gICAgLS1jbHItZ3JleS0zOiBoc2woMjA5LCAzNCUsIDMwJSk7XFxyXFxuICAgIC0tY2xyLWdyZXktNDogaHNsKDIwOSwgMjglLCAzOSUpO1xcclxcbiAgICAvKiBncmV5IHVzZWQgZm9yIHBhcmFncmFwaHMgKi9cXHJcXG4gICAgLS1jbHItZ3JleS01OiBoc2woMjEwLCAyMiUsIDQ5JSk7XFxyXFxuICAgIC0tY2xyLWdyZXktNjogaHNsKDIwOSwgMjMlLCA2MCUpO1xcclxcbiAgICAtLWNsci1ncmV5LTc6IGhzbCgyMTEsIDI3JSwgNzAlKTtcXHJcXG4gICAgLS1jbHItZ3JleS04OiBoc2woMjEwLCAzMSUsIDgwJSk7XFxyXFxuICAgIC0tY2xyLWdyZXktOTogaHNsKDIxMiwgMzMlLCA4OSUpO1xcclxcbiAgICAtLWNsci1ncmV5LTEwOiBoc2woMjEwLCAzNiUsIDk2JSk7XFxyXFxuICAgIC0tY2xyLXdoaXRlOiAjZmZmO1xcclxcbiAgICAtLWNsci1yZWQtZGFyazogaHNsKDM2MCwgNjclLCA0NCUpO1xcclxcbiAgICAtLWNsci1yZWQtbGlnaHQ6IGhzbCgzNjAsIDcxJSwgNjYlKTtcXHJcXG4gICAgLS1jbHItZ3JlZW4tZGFyazogaHNsKDEyNSwgNjclLCA0NCUpO1xcclxcbiAgICAtLWNsci1ncmVlbi1saWdodDogaHNsKDEyNSwgNzElLCA2NiUpO1xcclxcbiAgICAtLWNsci1ibGFjazogIzIyMjtcXHJcXG4gICAgLS1mZi1wcmltYXJ5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS1mZi1zZWNvbmRhcnk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLXRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcXHJcXG4gICAgLS1zcGFjaW5nOiAwLjI1cmVtO1xcclxcbiAgICAtLXJhZGl1czogMC41cmVtO1xcclxcbiAgICAtLWxpZ2h0LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICAgIC0tZGFyay1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcbiAgICAtLW1heC13aWR0aDogMTE3MHB4O1xcclxcbiAgICAtLWZpeGVkLXdpZHRoOiA2MjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG49PT09PT09PT09PT09PT0gXFxyXFxuR2xvYmFsIFN0eWxlc1xcclxcbj09PT09PT09PT09PT09PVxcclxcbiovXFxyXFxuXFxyXFxuKixcXHJcXG46OmFmdGVyLFxcclxcbjo6YmVmb3JlIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXNlY29uZGFyeSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1ncmV5LTkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWdyZXktMSk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCB7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiB2YXIoLS1zcGFjaW5nKTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDMge1xcclxcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxyXFxufVxcclxcblxcclxcbmg0IHtcXHJcXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItZ3JleS01KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGgzIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoNCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaDEsXFxyXFxuICAgIGgyLFxcclxcbiAgICBoMyxcXHJcXG4gICAgaDQge1xcclxcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogIGdsb2JhbCBjbGFzc2VzICovXFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5LTUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXHJcXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLXNwYWNpbmcpO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgdHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5LTUpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLXByaW1hcnktNSk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNsci1wcmltYXJ5LTEpO1xcclxcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWNsci1wcmltYXJ5LTEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlxcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgICAgICAgICAgICAgc2VjdGlvblxcclxcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4qL1xcclxcbi5uYXY+bmF2IHtcXHJcXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5zZWN0aW9uIC5zZWN0aW9uLWNlbnRlcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItYmxhY2spO1xcclxcbiAgICBoZWlnaHQ6IDEwMDBweDtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zaWRlLWJhcntcXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbi5tYWlue1xcclxcbiAgICBib3JkZXItbGVmdDogMXB4IGJsYWNrIHNvbGlkO1xcclxcbn1cXHJcXG5cXHJcXG4uY3Jvc3MgaW1ne1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeS01KTtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIC5iYXJze1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcm9zc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgYWxlcnQoXCJZb3UgY2xpY2tlZCB0aGUgY3Jvc3NcIik7XHJcbiAgfSk7XHJcbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pY29ucy9jcm9zcy5zdmdcIik7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLWJhclwiKS5hcHBlbmRDaGlsZChpbWcpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9