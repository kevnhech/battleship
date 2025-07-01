/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  font-family: 'Arial';\n}\n\n.body {\n  display: flex;\n  justify-content: center;\n}\n\n#player-grid,\n#opponent-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 44px 88px 0px;\n}\n\n.battlefield-table {\n  border-collapse: collapse;\n}\n\n.battlefield-label {\n  font-size: .8em;\n  text-align: center;\n}\n\n.battlefield-cell {\n  border: 1px solid #000;\n  padding: 0;\n}\n\n#opponent-grid .battlefield-cell__empty:hover {\n  background: rgba(64,191,68,.25);\n  width: 2em;\n  height: 2em;\n  cursor: pointer;\n}\n\n.battlefield-cell__busy {\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.battlefield-cell__miss {\n  background: #f2f4f8;\n}\n\n.battlefield-cell__miss .battlefield-cell-content .z {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 4px;\n  width: 4px;\n  background: #333;\n  border-radius: 50%;\n}\n\n.battlefield-cell__hit .battlefield-cell-content .z {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  overflow: hidden;\n  box-sizing: border-box;\n  background: rgba(255, 0, 0, 0.05)\n}\n\n.battlefield-cell__hit .battlefield-cell-content .z::before {\n  left: 50%;\n  width: 2px;\n  top: -25%;\n  height: 150%;\n  margin-top: 1px;\n}\n\n.battlefield-cell__hit .battlefield-cell-content .z::after {\n  top: 50%;\n  height: 2px;\n  left: -25%;\n  width: 150%;\n  margin-left: -1px;\n}\n\n.battlefield-cell__hit .battlefield-cell-content .z::before,\n.battlefield-cell__hit .battlefield-cell-content .z::after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  background: red;\n  transform: rotate(-45deg);\n}\n\n.battlefield-cell-content {\n  position: relative;\n  height: 2em;\n  width: 2em;\n}\n\n.marker {\n  position: absolute;\n  font-size: 11px;\n}\n\n.marker__col {\n  top: -2em;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n\n.marker__row {\n  left: -3em;\n  width: 2em;\n  text-align: right;\n  top: 1em;\n  height: 1em;\n}\n\n.ship-box {\n  border: 1px solid blue;\n  width: 2em;\n  height: 2em;\n  margin: -2px;\n  background: blue;\n}\n\n.two-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 64px;\n}\n\n.btn-primary {\n  width: fit-content;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Gameboard/gameboard.js":
/*!************************************!*\
  !*** ./src/Gameboard/gameboard.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Gameboard {\n  constructor() {\n    this.board = this.createBoard();\n    this.ships = [];\n    this.hitAttacks = [];\n    this.missedAttacks = [];\n  }\n\n  createBoard() {\n    return Array.from({length: 10}, () => Array(10).fill(null));\n  }\n\n  placeShip(ship, coordinates, orientation = \"horizontal\") {\n    const [x, y] = coordinates;\n\n    for (let i = 0; i < ship.length; i++) {\n      if ((orientation == \"vertical\" && this.board[x + i][y] != undefined) ||\n          (orientation == \"horizontal\" && this.board[x][y + i] != undefined)) {\n        throw new Error(\"There's already a ship here.\")\n      }\n    }\n\n    if ((ship.length + x > 10 && orientation == \"vertical\") || (ship.length + y > 10 && orientation == \"horizontal\")) {\n      throw new Error(\"Ship does not fit here.\");\n    }\n\n    if (x >= 10 || y >= 10) {\n      throw new Error(\"Out of bounds.\");\n    }\n    \n    for (let i = 0; i < ship.length; i++) {\n      let placeX = x;\n      let placeY = y;\n\n      if (orientation == \"vertical\") {\n        placeX += i;\n      } else {\n        placeY += i;\n      }\n\n      this.board[placeX][placeY] = ship;\n    }\n\n    this.ships.push(ship);\n  }\n\n  receiveAttack(coordinates) {\n    const [x, y] = coordinates;\n    const ship = this.board[x][y];\n\n    if (ship != null) {\n      ship.hit();\n      this.hitAttacks.push(coordinates);\n    } else {\n      this.missedAttacks.push(coordinates);\n    }\n  }\n\n  allShipsSunk() {\n    return this.ships.every((ship) => ship.isSunk());\n  }\n}\n\n// module.exports = Gameboard;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship/./src/Gameboard/gameboard.js?");

/***/ }),

/***/ "./src/Player/player.js":
/*!******************************!*\
  !*** ./src/Player/player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Gameboard_gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gameboard/gameboard.js */ \"./src/Gameboard/gameboard.js\");\n// const Gameboard = require(\"../Gameboard/gameboard\");\n\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n    this.gameboard = new _Gameboard_gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  }\n\n  placeShip(ship, coordinates, orientation = \"horizontal\") {\n    this.gameboard.placeShip(ship, coordinates, orientation);\n  }\n}\n\n// module.exports = Player;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship/./src/Player/player.js?");

/***/ }),

/***/ "./src/Ship/ship.js":
/*!**************************!*\
  !*** ./src/Ship/ship.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hitCount = 0;\n    this.sunk = false;\n  }\n\n  hit() {\n    this.hitCount++;\n  }\n\n  isSunk() {\n    if (this.length == this.hitCount) {\n      this.sunk = true;\n    } else {\n      this.sunk = false;\n    }\n    return this.sunk;\n  }\n}\n\n// module.exports = Ship;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship/./src/Ship/ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _Ship_ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship/ship.js */ \"./src/Ship/ship.js\");\n/* harmony import */ var _Player_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player/player.js */ \"./src/Player/player.js\");\n\n\n\n\n// RENDER BOARDS\nconst playerOne = new _Player_player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Player\");\nconst playerTwo = new _Player_player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Opponent\");\n\nfunction randomPlacements() {\n  let success = true;\n\n  for (let i = 1; i < 6; i++) {\n    success = true\n    do {\n      let directions = [\"vertical\", \"horizontal\"];\n      let binary = Math.floor(Math.random() * 2);\n      let randomCoordinate = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];\n      let [x, y] = randomCoordinate;\n      let randomDirections = directions[binary];\n      try {\n        if (i == 1) {\n          playerOne.placeShip(new _Ship_ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](i + 1), randomCoordinate, randomDirections);\n          success = false;\n        } else {\n          playerOne.placeShip(new _Ship_ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](i), randomCoordinate, randomDirections);\n          success = false;\n        }\n      } catch (error) {}\n    } while (success);\n  }\n\n  for (let i = 1; i < 6; i++) {\n    success = true\n    do {\n      let directions = [\"vertical\", \"horizontal\"];\n      let binary = Math.floor(Math.random() * 2);\n      let randomCoordinate = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];\n      let [x, y] = randomCoordinate;\n      let randomDirections = directions[binary];\n      try {\n        if (i == 1) {\n          playerTwo.placeShip(new _Ship_ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](i + 1), randomCoordinate, randomDirections);\n          success = false;\n        } else {\n          playerTwo.placeShip(new _Ship_ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](i), randomCoordinate, randomDirections);\n          success = false;\n        }\n      } catch (error) {}\n    } while (success);\n  }\n}\n\nrandomPlacements();\n\nconst playerGrid = document.getElementById(\"player-grid\");\nconst oppGrid = document.getElementById(\"opponent-grid\");\n\nfunction renderBoard(grid, player) {\n  let col = \"ABCDEFGHIJ\".split(\"\");\n  let row = [\"1\", \"2\", \"3\", \"4\", \"5\", \"6\", \"7\", \"8\", \"9\", \"10\"];\n  let battlefieldTable = document.createElement(\"table\");\n  let tableBody = document.createElement(\"tbody\");\n\n  battlefieldTable.setAttribute(\"class\", \"battlefield-table\");\n\n  for (let x = 0; x < 10; x++) {\n    let tableRow = document.createElement(\"tr\");\n    tableRow.setAttribute(\"class\", \"battlefield-row\")\n    for(let y = 0; y < 10; y++) {\n      let tableData = document.createElement(\"td\");\n      let content = document.createElement(\"div\");\n      tableData.setAttribute(\"class\", \"battlefield-cell\")\n      content.setAttribute(\"class\", \"battlefield-cell-content\")\n\n      if (x == 0 && y == 0) {\n        let markerCol = document.createElement(\"div\");\n        let markerRow = document.createElement(\"div\");\n        markerCol.setAttribute(\"class\", \"marker marker__col\");\n        markerRow.setAttribute(\"class\", \"marker marker__row\");\n        markerCol.textContent = col.shift();\n        markerRow.textContent = row.shift();\n        content.appendChild(markerCol);\n        content.appendChild(markerRow);\n      } else if (x == 0) {\n        let markerCol = document.createElement(\"div\");\n        markerCol.setAttribute(\"class\", \"marker marker__col\");\n        markerCol.textContent = col.shift();\n        content.appendChild(markerCol);\n      } else if (y == 0) {\n        let markerRow = document.createElement(\"div\");\n        markerRow.setAttribute(\"class\", \"marker marker__row\");\n        markerRow.textContent = row.shift();\n        content.appendChild(markerRow);\n      }\n\n      if (player.gameboard.board[x][y] != null && player.name != \"Opponent\") {\n        tableData.classList.add(\"battlefield-cell__busy\");\n        let shipBox = document.createElement(\"div\");\n        shipBox.setAttribute(\"class\", \"ship-box\");\n        content.appendChild(shipBox);\n      } else {\n        tableData.classList.add(\"battlefield-cell__empty\");\n      }\n\n      tableData.appendChild(content);\n      tableRow.appendChild(tableData);\n    }\n    tableBody.appendChild(tableRow);\n  }\n\n  battlefieldTable.appendChild(tableBody);\n  grid.appendChild(battlefieldTable);\n  let battlefieldLabel = document.createElement(\"div\");\n  battlefieldLabel.setAttribute(\"class\", \"battlefield-label\");\n  battlefieldLabel.textContent = `${player.name}'s grid`;\n  grid.appendChild(battlefieldLabel);\n}\n\nrenderBoard(playerGrid, playerOne);\nrenderBoard(oppGrid, playerTwo);\n\n// EVENT LISTENERS\nfunction touchBoard() {\n  for (let x = 0; x < 10; x++) {\n    let row = oppGrid.querySelectorAll(\".battlefield-row\")[x];\n    for (let y = 0; y < 10; y++) {\n      let cell = row.querySelectorAll(\".battlefield-cell\")[y];\n      let cellContent = cell.querySelector(\".battlefield-cell-content\");\n      let span = document.createElement(\"span\");\n      span.setAttribute(\"class\", \"z\");\n      let oppBoard = playerTwo.gameboard;\n      let oppShip = playerTwo.gameboard.board[x][y];\n      cell.addEventListener(\"click\", () => {\n        oppBoard.receiveAttack([x, y]);\n        if (oppShip == null) {\n          cell.classList.remove(\"battlefield-cell__empty\");\n          cell.classList.add(\"battlefield-cell__miss\");\n        } else {\n          cell.classList.remove(\"battlefield-cell__empty\");\n          cell.classList.add(\"battlefield-cell__hit\");\n          oppShip.isSunk();\n        }\n        cellContent.appendChild(span);\n\n        if (playerTwo.gameboard.allShipsSunk()) {\n          alert(\"You win!\");\n          oppGrid.querySelectorAll(\".battlefield-cell__empty\").forEach((cell) => cell.classList.remove(\"battlefield-cell__empty\"));\n          let newOppGrid = oppGrid.cloneNode(true);\n          oppGrid.parentNode.replaceChild(newOppGrid, oppGrid);\n        } else {\n          computerTurn();\n        }\n      }, { once: true });\n    }\n  }\n}\ntouchBoard();\n\n// COMPUTER RANDOM PLAYS\nfunction computerTurn() {\n  let playerBoard = playerOne.gameboard;\n  let randomCoordinate = null;\n  let moves = playerOne.gameboard.hitAttacks.concat(playerBoard.missedAttacks);\n\n  do {\n    randomCoordinate = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];\n  } while (moves.some((arr) => JSON.stringify(arr) == JSON.stringify(randomCoordinate)));\n\n  playerBoard.receiveAttack(randomCoordinate);\n  let [x, y] = randomCoordinate;\n  let row = playerGrid.querySelectorAll(\".battlefield-row\")[x];\n  let cell = row.querySelectorAll(\".battlefield-cell\")[y];\n  let cellContent = cell.querySelector(\".battlefield-cell-content\");\n  let span = document.createElement(\"span\");\n  span.setAttribute(\"class\", \"z\");\n\n  let playerShip = playerBoard.board[x][y];\n  if (playerShip == null) {\n    cell.classList.remove(\"battlefield-cell__empty\");\n    cell.classList.add(\"battlefield-cell__miss\");\n  } else {\n    cell.classList.remove(\"battlefield-cell__busy\");\n    cell.classList.add(\"battlefield-cell__hit\");\n    playerShip.isSunk();\n  }\n  cellContent.appendChild(span);\n  if (playerOne.gameboard.allShipsSunk()) {\n    alert(\"You lose!\");\n    oppGrid.querySelectorAll(\".battlefield-cell__empty\").forEach((cell) => cell.classList.remove(\"battlefield-cell__empty\"));\n    let newOppGrid = oppGrid.cloneNode(true);\n    oppGrid.parentNode.replaceChild(newOppGrid, oppGrid);\n  }\n}\n\nconst randomButton = document.querySelector(\".btn-primary\");\nrandomButton.addEventListener(\"click\", () => {\n  window.location.reload();\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;