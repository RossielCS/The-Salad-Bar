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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/stylesheets/style.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/stylesheets/style.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_aboutus_00_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/aboutus_00.png */ \"./src/assets/images/aboutus_00.png\");\n/* harmony import */ var _images_home_00_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/home_00.png */ \"./src/assets/images/home_00.png\");\n/* harmony import */ var _images_deals_00_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/deals_00.png */ \"./src/assets/images/deals_00.png\");\n/* harmony import */ var _images_home_nav_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/home_nav_logo.png */ \"./src/assets/images/home_nav_logo.png\");\n// Imports\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_aboutus_00_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_home_00_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_deals_00_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_home_nav_logo_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nbody,\\nhtml,\\ndiv,\\nspan,\\napplet,\\nobject,\\niframe,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np,\\nblockquote,\\npre,\\na,\\nabbr,\\nacronym,\\naddress,\\nbig,\\ncite,\\ncode,\\ndel,\\ndfn,\\nem,\\nimg,\\nins,\\nkbd,\\nq,\\ns,\\nsamp,\\nsmall,\\nstrike,\\nstrong,\\nsub,\\nsup,\\ntt,\\nvar,\\nb,\\nu,\\ni,\\ncenter,\\ndl,\\ndt,\\ndd,\\nol,\\nul,\\nli,\\nfieldset,\\nform,\\nlabel,\\nlegend,\\ntable,\\ncaption,\\ntbody,\\ntfoot,\\nthead,\\ntr,\\nth,\\ntd,\\narticle,\\naside,\\ncanvas,\\ndetails,\\nembed,\\nfigure,\\nfigcaption,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\noutput,\\nruby,\\nsection,\\nsummary,\\ntime,\\nmark,\\naudio,\\nvideo {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font: inherit;\\n  font-size: 100%;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle,\\naside,\\ndetails,\\nfigcaption,\\nfigure,\\nfooter,\\nheader,\\nhgroup,\\nmenu,\\nnav,\\nsection {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol,\\nul {\\n  list-style: none;\\n}\\n\\nblockquote,\\nq {\\n  quotes: none;\\n}\\n\\nblockquote::before,\\nblockquote::after,\\nq::before,\\nq::after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\n*,\\n*::after,\\n*::before {\\n  box-sizing: border-box;\\n}\\n\\n#art-about-us {\\n  position: relative;\\n  padding-top: 70px;\\n  text-align: start;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-position: center;\\n  background-repeat: repeat;\\n  background-size: cover;\\n}\\n#art-about-us .art-about-us-sect {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  padding: 4%;\\n  max-width: 45%;\\n  background-color: rgba(255, 255, 255, 0.9);\\n}\\n#art-about-us .art-about-us-sect h1 {\\n  margin-bottom: 30px;\\n  font-size: 3.7rem;\\n  font-family: \\\"Amiri\\\", serif;\\n}\\n#art-about-us .art-about-us-sect p {\\n  margin-bottom: 30px;\\n  font-size: 1.3rem;\\n  line-height: 1.6rem;\\n}\\n#art-about-us .art-about-us-sect button {\\n  padding: 2% 4% 1% 4%;\\n  font-size: 1.5rem;\\n  font-family: \\\"Baloo Tamma 2\\\", cursive;\\n  border: none;\\n  color: #fff;\\n  background-color: #333;\\n  outline: none;\\n}\\n#art-about-us .art-about-us-sect button:hover {\\n  color: #333;\\n  background-color: transparent;\\n  cursor: pointer;\\n}\\n\\n#art-contact {\\n  margin-top: 4%;\\n}\\n#art-contact h1 {\\n  font-size: 2.5rem;\\n  font-family: \\\"Amiri\\\", serif;\\n  text-align: center;\\n}\\n#art-contact form {\\n  padding: 5vh;\\n  min-width: 30%;\\n  max-width: 40%;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n}\\n#art-contact form #name,\\n#art-contact form #email,\\n#art-contact form #comment {\\n  width: 100%;\\n}\\n#art-contact form #name,\\n#art-contact form #email {\\n  margin-bottom: 20px;\\n}\\n#art-contact form #comment {\\n  height: 100px;\\n}\\n#art-contact form button {\\n  margin: 20px auto;\\n  padding-top: 0.5vh;\\n  width: 15vw;\\n  height: 5vh;\\n  border: none;\\n  font-family: \\\"Baloo Tamma 2\\\", cursive;\\n  font-size: 1.2rem;\\n  color: #fff;\\n  background-color: #333;\\n}\\n#art-contact form button:hover {\\n  color: #333;\\n  background-color: transparent;\\n  cursor: pointer;\\n}\\n\\n#art-home {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n#art-home .art-home-sect:nth-child(1) {\\n  height: 100%;\\n  flex: 2 1 50%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: 80%;\\n}\\n#art-home .art-home-sect:nth-child(2) {\\n  height: 100%;\\n  padding-right: 4vw;\\n  flex: 1 2 45%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: flex-start;\\n}\\n#art-home .art-home-sect:nth-child(2) h1 {\\n  margin-bottom: 20px;\\n  font-family: \\\"Amiri\\\", serif;\\n  font-size: 3.3rem;\\n}\\n#art-home .art-home-sect:nth-child(2) p {\\n  margin-bottom: 20px;\\n  font-size: 1.3rem;\\n  line-height: 1.9rem;\\n}\\n#art-home .art-home-sect:nth-child(2) button {\\n  padding: 12px 21px 8px 21px;\\n  font-size: 1.6rem;\\n  font-weight: 500;\\n  border: none;\\n  font-family: \\\"Baloo Tamma 2\\\", cursive;\\n  color: #fff;\\n  background-color: #333;\\n}\\n#art-home .art-home-sect:nth-child(2) button:hover {\\n  background-color: #e8e9e5;\\n  color: #333;\\n  cursor: pointer;\\n}\\n\\n#art-menu .art-menu-sect:nth-child(1) {\\n  margin-top: 4%;\\n  margin-bottom: 3%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n#art-menu .art-menu-sect:nth-child(1) h1 {\\n  font-size: 2.5rem;\\n  font-family: \\\"Amiri\\\", serif;\\n}\\n#art-menu .art-menu-sect:nth-child(1) ul {\\n  width: 30%;\\n  margin-top: 5%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n#art-menu .art-menu-sect:nth-child(1) ul li {\\n  font-size: 1.2rem;\\n}\\n#art-menu .art-menu-sect:nth-child(1) ul li:hover {\\n  color: #c3c2b9;\\n  cursor: pointer;\\n}\\n#art-menu .art-menu-sect:nth-child(2) {\\n  height: 70%;\\n  width: 60%;\\n  margin: auto;\\n  display: grid;\\n  grid-gap: 2vh;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-template-rows: repeat(3, 1fr);\\n}\\n#art-menu .art-menu-sect:nth-child(2) .menu-salad-info {\\n  padding: 10%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-around;\\n  align-items: flex-start;\\n}\\n#art-menu .art-menu-sect:nth-child(2) .menu-salad-info h3 {\\n  font-size: 1.1rem;\\n  font-family: \\\"Amiri\\\", serif;\\n}\\n#art-menu .art-menu-sect:nth-child(2) .menu-salad-bg {\\n  padding: 10%;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\n#art-promotions {\\n  padding: 4% 30px;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n#art-promotions .art-promotions-sect {\\n  position: relative;\\n  height: 100%;\\n  padding: 0 60px;\\n}\\n#art-promotions .art-promotions-sect:nth-child(1) {\\n  position: relative;\\n  width: 60%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: contain;\\n}\\n#art-promotions .art-promotions-sect:nth-child(1) p {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  padding: 2.5vh;\\n  max-width: 50%;\\n  text-align: center;\\n  font-size: 1.7rem;\\n  font-family: \\\"Amiri\\\", serif;\\n  background-color: rgba(255, 255, 255, 0.85);\\n}\\n#art-promotions .art-promotions-sect:nth-child(2) {\\n  width: 40%;\\n}\\n#art-promotions .art-promotions-sect:nth-child(2) ul {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n}\\n#art-promotions .art-promotions-sect:nth-child(2) ul li {\\n  max-width: 75%;\\n  height: 13vh;\\n  padding-right: 5%;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: flex-start;\\n  align-items: center;\\n}\\n#art-promotions .art-promotions-sect:nth-child(2) ul li div {\\n  min-width: 15%;\\n}\\n#art-promotions .art-promotions-sect:nth-child(2) ul li p {\\n  font-size: 1.2rem;\\n  font-family: \\\"Amiri\\\", serif;\\n}\\n#art-promotions .art-promotions-sect:nth-child(2) ul li:hover {\\n  color: #c3c2b9;\\n  cursor: pointer;\\n}\\n#art-promotions .art-promotions-sect:nth-child(2) ul li:nth-child(-n+3) {\\n  border-bottom: 1px solid #666563;\\n}\\n\\n#content {\\n  margin: auto;\\n  display: grid;\\n  grid-template-columns: 1fr minmax(768px, 1366px) 1fr;\\n  grid-template-rows: 100px repeat(auto, minmax(500px, 45vw));\\n  font-family: \\\"Baloo Tamma 2\\\", cursive;\\n  color: #333;\\n}\\n\\nheader {\\n  grid-column: 2/3;\\n  grid-row: 1/2;\\n  z-index: 2;\\n  margin: 20px 0;\\n  line-height: 100px;\\n  font-weight: 500;\\n}\\nheader nav {\\n  max-width: 850px;\\n  margin: auto;\\n}\\nheader nav ul {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\nheader nav ul a {\\n  width: 120px;\\n  text-align: center;\\n  text-decoration: none;\\n  font-size: 1.2rem;\\n  white-space: nowrap;\\n  color: #333;\\n}\\nheader nav ul a:hover {\\n  height: 100px;\\n  border-bottom: solid 5px #666563;\\n}\\nheader nav #home-logo {\\n  height: 100px;\\n  min-width: 100px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: contain;\\n}\\nheader nav #home-logo:hover {\\n  cursor: pointer;\\n}\\n\\nmain {\\n  grid-column: 2/3;\\n  grid-row: 2/3;\\n}\\nmain article {\\n  height: 80vh;\\n  width: 100%;\\n}\\n\\n.hidden {\\n  display: none;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/stylesheets/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/about-us.js":
/*!*************************!*\
  !*** ./src/about-us.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ \"./src/builders.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nfunction addContentAboutUs(sections) {\n  const sect01 = sections[0];\n\n  const title1 = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](sect01, 'h1', 'append');\n  title1.innerHTML = 'THE SALAD BAR';\n\n  const pElement1 = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](sect01, 'p', 'append');\n  pElement1.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';\n\n  const button1 = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](sect01, 'button', 'append');\n  button1.innerHTML = 'Discover our Menu';\n  Object(_home__WEBPACK_IMPORTED_MODULE_1__[\"addEventToButton\"])(button1, 'art-about-us');\n}\n\nfunction createAboutUs(main, numSections) {\n  const article = _builders__WEBPACK_IMPORTED_MODULE_0__[\"createArticle\"](main, 'about-us');\n  const sections = _builders__WEBPACK_IMPORTED_MODULE_0__[\"addSectionsToArticle\"](article, numSections);\n  addContentAboutUs(sections);\n  return article;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createAboutUs);\n\n\n//# sourceURL=webpack:///./src/about-us.js?");

/***/ }),

/***/ "./src/assets/images/aboutus_00.png":
/*!******************************************!*\
  !*** ./src/assets/images/aboutus_00.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"30ba27e2993c5a7a20d69a3613b7fb4c.png\");\n\n//# sourceURL=webpack:///./src/assets/images/aboutus_00.png?");

/***/ }),

/***/ "./src/assets/images/deals_00.png":
/*!****************************************!*\
  !*** ./src/assets/images/deals_00.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f44fab7f35fabff7cf585bcac0a0f958.png\");\n\n//# sourceURL=webpack:///./src/assets/images/deals_00.png?");

/***/ }),

/***/ "./src/assets/images/deals_01.png":
/*!****************************************!*\
  !*** ./src/assets/images/deals_01.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d752b9c118b8b3aeb32d6466e22c0861.png\");\n\n//# sourceURL=webpack:///./src/assets/images/deals_01.png?");

/***/ }),

/***/ "./src/assets/images/deals_02.png":
/*!****************************************!*\
  !*** ./src/assets/images/deals_02.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6dc8bada67dc11319b7b1e9ff2be056a.png\");\n\n//# sourceURL=webpack:///./src/assets/images/deals_02.png?");

/***/ }),

/***/ "./src/assets/images/deals_03.png":
/*!****************************************!*\
  !*** ./src/assets/images/deals_03.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7c1300813f7b365f2b303dc34177ba66.png\");\n\n//# sourceURL=webpack:///./src/assets/images/deals_03.png?");

/***/ }),

/***/ "./src/assets/images/home_00.png":
/*!***************************************!*\
  !*** ./src/assets/images/home_00.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a627337abc2fa92162fb4e0570c7d0a2.png\");\n\n//# sourceURL=webpack:///./src/assets/images/home_00.png?");

/***/ }),

/***/ "./src/assets/images/home_nav_logo.png":
/*!*********************************************!*\
  !*** ./src/assets/images/home_nav_logo.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b442c993e2328efee815208317ec3515.png\");\n\n//# sourceURL=webpack:///./src/assets/images/home_nav_logo.png?");

/***/ }),

/***/ "./src/assets/images/menu_00.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_00.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c30d273c98167e7cf2e22fc4a28683e7.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_00.png?");

/***/ }),

/***/ "./src/assets/images/menu_01.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_01.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5e82512964c2b9eccb46aeab63a269cd.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_01.png?");

/***/ }),

/***/ "./src/assets/images/menu_02.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_02.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"6a39f560a4a271e8aaa6626848a860fb.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_02.png?");

/***/ }),

/***/ "./src/assets/images/menu_03.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_03.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"f28f15c9392822402a8121db1620516f.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_03.png?");

/***/ }),

/***/ "./src/assets/images/menu_04.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_04.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"383990043f3f71d64d77ccb6d30fa1cc.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_04.png?");

/***/ }),

/***/ "./src/assets/images/menu_05.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_05.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"5cad1040287e97290cfdd2c54aaaa2c7.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_05.png?");

/***/ }),

/***/ "./src/assets/images/menu_06.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_06.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"10f53a5644ddf63d8923ea353be37f3c.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_06.png?");

/***/ }),

/***/ "./src/assets/images/menu_07.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_07.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"b312a8ded33dae621d3d20d197182b3f.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_07.png?");

/***/ }),

/***/ "./src/assets/images/menu_08.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_08.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"2c3886e711b40cda3e3c342ecb9cfb16.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_08.png?");

/***/ }),

/***/ "./src/assets/images/menu_09.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_09.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a000bfd81904de9ad4e2dc28dc219782.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_09.png?");

/***/ }),

/***/ "./src/assets/images/menu_10.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_10.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"903fdf70d9c118ecf555a8118e8ff2e3.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_10.png?");

/***/ }),

/***/ "./src/assets/images/menu_11.png":
/*!***************************************!*\
  !*** ./src/assets/images/menu_11.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"974000d11e68dfd485067f1f97f9c5cc.png\");\n\n//# sourceURL=webpack:///./src/assets/images/menu_11.png?");

/***/ }),

/***/ "./src/assets/stylesheets/style.scss":
/*!*******************************************!*\
  !*** ./src/assets/stylesheets/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/stylesheets/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/stylesheets/style.scss?");

/***/ }),

/***/ "./src/builders.js":
/*!*************************!*\
  !*** ./src/builders.js ***!
  \*************************/
/*! exports provided: creator, createArticle, addSectionsToArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"creator\", function() { return creator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createArticle\", function() { return createArticle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addSectionsToArticle\", function() { return addSectionsToArticle; });\nfunction creator(parent, newElement, position) {\n  const child = document.createElement(`${newElement}`);\n  if (position === 'append') {\n    parent.appendChild(child);\n  } else {\n    parent.insertBefore(child, position);\n  }\n  return child;\n}\n\nfunction createArticle(main, name) {\n  const article = creator(main, 'article', 'append');\n  article.setAttribute('id', `art-${name}`);\n  return article;\n}\n\nfunction addSectionsToArticle(article, numSections) {\n  for (let i = 0; i < numSections; i += 1) {\n    const section = creator(article, 'section', 'append');\n    section.setAttribute('class', `${article.id}-sect`);\n\n    const h2 = creator(section, 'h2', 'append');\n    h2.setAttribute('class', 'hidden');\n    h2.innerHTML = 'Hidden';\n  }\n  return article.children;\n}\n\n\n\n//# sourceURL=webpack:///./src/builders.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ \"./src/builders.js\");\n\n\nfunction addAttributes(element, name, type, pattern = '') {\n  element.setAttribute('id', `${name}`);\n  element.setAttribute('type', `${type}`);\n  element.setAttribute('name', `${name}`);\n  if (type !== 'textarea') element.setAttribute('pattern', `${pattern}`);\n  element.required = true;\n}\n\nfunction createForm(article) {\n  const form = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](article, 'form', 'append');\n\n  const nameLabel = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](form, 'label', 'append');\n  nameLabel.setAttribute('for', 'username');\n  nameLabel.innerHTML = 'Full Name:';\n  const name = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](form, 'input', 'append');\n  addAttributes(name, 'name', 'text', '\\\\w{4,15}');\n\n  const emailLabel = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](form, 'label', 'append');\n  emailLabel.setAttribute('for', 'email');\n  emailLabel.innerHTML = 'E-mail:';\n  const emailInput = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](form, 'input', 'append');\n  addAttributes(emailInput, 'email', 'email', '[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,}$');\n\n  const textLabel = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](form, 'label', 'append');\n  textLabel.setAttribute('for', 'comment');\n  textLabel.innerHTML = 'Message:';\n  const textArea = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](form, 'textarea', 'append');\n  addAttributes(textArea, 'comment', 'text', '\\\\.{20,500}');\n\n  const submitBtn = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](form, 'button', 'append');\n  submitBtn.setAttribute('type', 'submit');\n  submitBtn.innerHTML = 'SUBMIT';\n}\n\nfunction createContact(main) {\n  const article = _builders__WEBPACK_IMPORTED_MODULE_0__[\"createArticle\"](main, 'contact');\n  const title = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](article, 'h1', 'append');\n  title.innerHTML = 'Contact Us';\n  createForm(article);\n  return article;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createContact);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: tabNames, createHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tabNames\", function() { return tabNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHeader\", function() { return createHeader; });\n/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ \"./src/builders.js\");\n\n\nconst tabNames = ['MENU', 'PROMOTIONS', 'ABOUT US', 'CONTACT'];\n\nfunction addLiToATag(aTag, tempName, i) {\n  const li = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](aTag, 'li', 'append');\n  li.setAttribute('id', `nav-li${i}`);\n  li.innerHTML = `${tempName}`;\n}\n\nfunction addUlistToNav(navbar, tabNames) {\n  const tempNames = [...tabNames];\n  const list = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](navbar, 'ul', 'append');\n  for (let i = 0; i < 4; i += 1) {\n    if (i === 2) {\n      const logo = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](list, 'div', 'append');\n      logo.setAttribute('id', 'home-logo');\n    }\n    const aTag = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](list, 'a', 'append');\n    aTag.href = `#${tempNames[i]}`.toLowerCase();\n    addLiToATag(aTag, tempNames[i], i);\n  }\n  return navbar.children;\n}\n\nfunction createHeader(content, tabNames) {\n  const header = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](content, 'header');\n  const navbar = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](header, 'nav');\n  addUlistToNav(navbar, tabNames);\n\n  return header;\n}\n\n\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: createHome, addEventToButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHome\", function() { return createHome; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventToButton\", function() { return addEventToButton; });\n/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ \"./src/builders.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\nfunction addEventToButton(button, element) {\n  button.addEventListener('click', () => {\n    const main = document.getElementsByTagName('main')[0];\n    document.getElementById(`${element}`).remove();\n    Object(_menu__WEBPACK_IMPORTED_MODULE_1__[\"createMenu\"])(main, 2, _menu__WEBPACK_IMPORTED_MODULE_1__[\"saladsNames\"], _menu__WEBPACK_IMPORTED_MODULE_1__[\"saladsImages\"]);\n    document.getElementById('menu-cat0').click();\n  });\n}\n\nfunction addContentToHome(article) {\n  const art0 = article.children[1];\n  const title = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](art0, 'h1', 'append');\n  title.innerHTML = 'Pellentesque dignissim enim sit amet venenatis.';\n\n  const pElement = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](art0, 'p', 'append');\n  pElement.innerHTML = 'Sed egestas egestas fringilla phasellus faucibus. Sed pulvinar proin gravida hendrerit lectus a.';\n\n  const button = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](art0, 'button', 'append');\n  button.innerHTML = 'GET PRICES';\n  addEventToButton(button, 'art-home');\n}\n\nfunction createHome(main, name, numSections) {\n  const article = _builders__WEBPACK_IMPORTED_MODULE_0__[\"createArticle\"](main, name);\n  _builders__WEBPACK_IMPORTED_MODULE_0__[\"addSectionsToArticle\"](article, numSections);\n  addContentToHome(article);\n  return article;\n}\n\n\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/stylesheets/style.scss */ \"./src/assets/stylesheets/style.scss\");\n/* harmony import */ var _assets_stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./builders */ \"./src/builders.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _promotions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./promotions */ \"./src/promotions.js\");\n/* harmony import */ var _about_us__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us */ \"./src/about-us.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\n\n\n\nconst content = document.getElementById('content');\n\nObject(_header__WEBPACK_IMPORTED_MODULE_2__[\"createHeader\"])(content, _header__WEBPACK_IMPORTED_MODULE_2__[\"tabNames\"]);\nconst main = _builders__WEBPACK_IMPORTED_MODULE_1__[\"creator\"](content, 'main');\nObject(_home__WEBPACK_IMPORTED_MODULE_3__[\"createHome\"])(main, 'home', 2);\nconst navbarLinks = document.getElementsByTagName('ul')[0];\n\n// Menu\nnavbarLinks.children[0].addEventListener('click', () => {\n  main.childNodes[0].remove();\n  Object(_menu__WEBPACK_IMPORTED_MODULE_4__[\"createMenu\"])(main, 2, _menu__WEBPACK_IMPORTED_MODULE_4__[\"saladsNames\"], _menu__WEBPACK_IMPORTED_MODULE_4__[\"saladsImages\"]);\n  document.getElementById('menu-cat0').click();\n});\n\n// Logo\ndocument.getElementById('home-logo').addEventListener('click', () => {\n  main.childNodes[0].remove();\n  Object(_home__WEBPACK_IMPORTED_MODULE_3__[\"createHome\"])(main, 'home', 2);\n});\n\n// Promotions\nnavbarLinks.children[1].addEventListener('click', () => {\n  main.childNodes[0].remove();\n  Object(_promotions__WEBPACK_IMPORTED_MODULE_5__[\"createPromotions\"])(main, 2, _promotions__WEBPACK_IMPORTED_MODULE_5__[\"dealsInfo\"], _promotions__WEBPACK_IMPORTED_MODULE_5__[\"dealsBgImages\"]);\n  document.getElementById('promo-menu0').click();\n});\n\n// About Us\nnavbarLinks.children[3].addEventListener('click', () => {\n  main.childNodes[0].remove();\n  Object(_about_us__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(main, 1);\n});\n\n// Contact\nnavbarLinks.children[4].addEventListener('click', () => {\n  main.childNodes[0].remove();\n  Object(_contact__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(main);\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: createMenu, saladsNames, saladsImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMenu\", function() { return createMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saladsNames\", function() { return saladsNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saladsImages\", function() { return saladsImages; });\n/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ \"./src/builders.js\");\n/* harmony import */ var _assets_images_menu_00_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/menu_00.png */ \"./src/assets/images/menu_00.png\");\n/* harmony import */ var _assets_images_menu_01_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/menu_01.png */ \"./src/assets/images/menu_01.png\");\n/* harmony import */ var _assets_images_menu_02_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/menu_02.png */ \"./src/assets/images/menu_02.png\");\n/* harmony import */ var _assets_images_menu_03_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/menu_03.png */ \"./src/assets/images/menu_03.png\");\n/* harmony import */ var _assets_images_menu_04_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/menu_04.png */ \"./src/assets/images/menu_04.png\");\n/* harmony import */ var _assets_images_menu_05_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/menu_05.png */ \"./src/assets/images/menu_05.png\");\n/* harmony import */ var _assets_images_menu_06_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/menu_06.png */ \"./src/assets/images/menu_06.png\");\n/* harmony import */ var _assets_images_menu_07_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/menu_07.png */ \"./src/assets/images/menu_07.png\");\n/* harmony import */ var _assets_images_menu_08_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/menu_08.png */ \"./src/assets/images/menu_08.png\");\n/* harmony import */ var _assets_images_menu_09_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/menu_09.png */ \"./src/assets/images/menu_09.png\");\n/* harmony import */ var _assets_images_menu_10_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/menu_10.png */ \"./src/assets/images/menu_10.png\");\n/* harmony import */ var _assets_images_menu_11_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/menu_11.png */ \"./src/assets/images/menu_11.png\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst categories = {\n  '01': 'Classics',\n  '02': 'Our Specials',\n};\n\nconst saladsImages = {\n  'menu-cat0': [_assets_images_menu_00_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _assets_images_menu_01_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _assets_images_menu_02_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _assets_images_menu_03_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _assets_images_menu_04_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _assets_images_menu_05_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"]],\n  'menu-cat1': [_assets_images_menu_06_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _assets_images_menu_07_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _assets_images_menu_08_png__WEBPACK_IMPORTED_MODULE_9__[\"default\"], _assets_images_menu_09_png__WEBPACK_IMPORTED_MODULE_10__[\"default\"], _assets_images_menu_10_png__WEBPACK_IMPORTED_MODULE_11__[\"default\"], _assets_images_menu_11_png__WEBPACK_IMPORTED_MODULE_12__[\"default\"]],\n};\n\nconst saladsNames = {\n  'menu-cat0': [\n    'House Salad', 'Fajita Chicken with Avocado', 'Blackberry Lime Fruit',\n    'Asian Crab and Cucumber', 'Thai Steak', 'Winter Fruit', 'Caesar with Chicken'],\n  'menu-cat1': [\n    'Parma Ham slivers with cubes of Melon', 'Goat cheese and Mozzarella Fritters',\n    'Summer Asian Slaw', 'Tuscan bread and Tomato with Chilly',\n    'Rainbow Orzo Salad', 'Heirloom Tomato Fattoush'],\n};\n\nfunction createArticle(main, name) {\n  const article = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](main, 'article', 'append');\n  article.setAttribute('id', `art-${name}`);\n  return article;\n}\n\nfunction addSectionsToArticle(article, numSections) {\n  for (let i = 0; i < numSections; i += 1) {\n    const section = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](article, 'section', 'append');\n    section.setAttribute('class', `${article.id}-sect`);\n\n    const h2 = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](section, 'h2', 'append');\n    h2.setAttribute('class', 'hidden');\n    h2.innerHTML = 'Hidden';\n  }\n  return article.children;\n}\n\nfunction addCategoriesList(sections, categories) {\n  const title = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](sections[0], 'h1', 'append');\n  const listContainer = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](sections[0], 'ul', 'append');\n  title.innerHTML = 'THE SALAD BAR TABLE';\n  for (let i = 1; i < 3; i += 1) {\n    const li = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](listContainer, 'li', 'append');\n    li.innerHTML = categories[`0${i}`];\n    li.setAttribute('id', `menu-cat${i - 1}`);\n  }\n  return listContainer.childNodes;\n}\n\nfunction createInfo(menuCell, index, saladsNames) {\n  menuCell.setAttribute('class', 'menu-salad-info');\n  const title = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](menuCell, 'h3', 'append');\n  title.innerHTML = saladsNames;\n  const para = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](menuCell, 'p', 'append');\n  para.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';\n  const price = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](menuCell, 'p', 'append');\n  price.setAttribute('class', 'menu-price');\n  price.innerHTML = 'FROM: $10.00';\n}\n\nfunction createBg(menuCell, index, saladsImages) {\n  menuCell.setAttribute('class', 'menu-salad-bg');\n  menuCell.style.backgroundImage = `url('${saladsImages}')`;\n}\n\nfunction addSaladsInfoToSection(sections, saladsNames, saladsImages) {\n  for (let i = 0; i < 6; i += 1) {\n    if (i === 2 || i === 3) {\n      const menuCellImg = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](sections[1], 'div', 'append');\n      const menuCellText = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](sections[1], 'div', 'append');\n      createBg(menuCellImg, i, saladsImages[i]);\n      createInfo(menuCellText, i, saladsNames[i]);\n    } else {\n      const menuCellText = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](sections[1], 'div', 'append');\n      const menuCellImg = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](sections[1], 'div', 'append');\n      createInfo(menuCellText, i, saladsNames[i]);\n      createBg(menuCellImg, i, saladsImages[i]);\n    }\n  }\n}\n\nfunction changeCatColor(element) {\n  const list = document.querySelectorAll('[id^=menu-cat]');\n  list.forEach(li => {\n    if (li.id !== element.id) {\n      li.style.color = '#c3c2b9';\n    }\n  });\n}\n\nfunction addEventToCategories(catList, sections, saladsNames, saladsImages) {\n  catList.forEach(li => {\n    li.addEventListener('click', (e) => {\n      const catId = e.target.id;\n      const elements = document.querySelectorAll('[class^=\"menu-salad\"]');\n      if (elements.length) {\n        elements.forEach(x => {\n          x.parentNode.removeChild(x);\n        });\n      }\n      li.style.color = '#333';\n      changeCatColor(li);\n      addSaladsInfoToSection(sections, saladsNames[catId], saladsImages[catId]);\n    });\n  });\n}\n\nfunction createMenu(main, numSections, saladsNames, saladsImages) {\n  const article = createArticle(main, 'menu');\n  const sections = addSectionsToArticle(article, numSections);\n  const catList = addCategoriesList(sections, categories);\n  addEventToCategories(catList, sections, saladsNames, saladsImages);\n  return article;\n}\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/promotions.js":
/*!***************************!*\
  !*** ./src/promotions.js ***!
  \***************************/
/*! exports provided: createPromotions, dealsInfo, dealsBgImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPromotions\", function() { return createPromotions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dealsInfo\", function() { return dealsInfo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dealsBgImages\", function() { return dealsBgImages; });\n/* harmony import */ var _builders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./builders */ \"./src/builders.js\");\n/* harmony import */ var _assets_images_deals_00_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/deals_00.png */ \"./src/assets/images/deals_00.png\");\n/* harmony import */ var _assets_images_deals_01_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/deals_01.png */ \"./src/assets/images/deals_01.png\");\n/* harmony import */ var _assets_images_deals_02_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/deals_02.png */ \"./src/assets/images/deals_02.png\");\n/* harmony import */ var _assets_images_deals_03_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/deals_03.png */ \"./src/assets/images/deals_03.png\");\n\n\n\n\n\n\nconst dealsInfo = {\n  'promo-menu0': 'Make Store-Bought Tomato Sauce Taste 10x Better',\n  'promo-menu1': 'The $3.99 Lunch Our Editor-in-Chief Swears By',\n  'promo-menu2': 'Red Leaf Salad with Tofu and Sesame Dressing',\n  'promo-menu3': 'Set Your Kitchen, Save Your Body',\n};\n\nconst dealsBgImages = {\n  'promo-menu0': _assets_images_deals_00_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  'promo-menu1': _assets_images_deals_01_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  'promo-menu2': _assets_images_deals_02_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  'promo-menu3': _assets_images_deals_03_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n};\n\nfunction createDealsList(section, dealsInfo) {\n  const menuList = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](section, 'ul', 'append');\n  for (let i = 0; i < 4; i += 1) {\n    const li = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](menuList, 'li', 'append');\n    li.setAttribute('id', `promo-menu${i}`);\n    const number = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](li, 'div', 'append');\n    number.innerHTML = `0${i + 1}`;\n    const info = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](li, 'p', 'append');\n    info.innerHTML = dealsInfo[`promo-menu${i}`];\n  }\n  return menuList;\n}\n\nfunction addContentToSections(sections, dealsInfo) {\n  const sect0 = sections[0];\n  const text0 = _builders__WEBPACK_IMPORTED_MODULE_0__[\"creator\"](sect0, 'p', 'append');\n  const sect1 = sections[1];\n  createDealsList(sect1, dealsInfo);\n  return text0;\n}\n\nfunction changeListColor(element) {\n  const list = document.querySelectorAll('[id^=promo-menu]');\n  list.forEach(li => {\n    if (li.id !== element.id) {\n      li.childNodes[0].style.color = '#c3c2b9';\n      li.childNodes[1].style.color = '#333';\n    }\n  });\n}\n\nfunction addEventToLi(dealsBgImages, dealsInfo, paragraph) {\n  const liContainer = document.getElementsByTagName('ul')[1].childNodes;\n  liContainer.forEach(element => {\n    element.addEventListener('click', () => {\n      const sections = document.getElementsByClassName('art-promotions-sect');\n      sections[0].style.backgroundImage = `url('${dealsBgImages[element.id]}')`;\n      element.childNodes[0].style.color = '#333';\n      element.childNodes[1].style.color = '#c3c2b9';\n      changeListColor(element);\n      paragraph.innerHTML = dealsInfo[`${element.id}`];\n    });\n  });\n}\n\nfunction createPromotions(main, numSections, dealsInfo, dealsBgImages) {\n  const article = _builders__WEBPACK_IMPORTED_MODULE_0__[\"createArticle\"](main, 'promotions');\n  const sections = _builders__WEBPACK_IMPORTED_MODULE_0__[\"addSectionsToArticle\"](article, numSections);\n  const section0Para = addContentToSections(sections, dealsInfo);\n  addEventToLi(dealsBgImages, dealsInfo, section0Para);\n  return article;\n}\n\n\n\n//# sourceURL=webpack:///./src/promotions.js?");

/***/ })

/******/ });