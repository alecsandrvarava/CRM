/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/app.scss */ \"./src/scss/app.scss\");\n/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.js */ \"./src/js/demo.js\");\n/* harmony import */ var _demo_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_demo_js__WEBPACK_IMPORTED_MODULE_1__);\n\n/* Your JS Code goes here */\n\n/* Demo JS */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHdlYXJlYXRobG9uL2Zyb250ZW5kLXdlYnBhY2stYm9pbGVycGxhdGUvLi9zcmMvanMvYXBwLmpzPzkwZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcclxuXHJcbi8qIFlvdXIgSlMgQ29kZSBnb2VzIGhlcmUgKi9cclxuXHJcbi8qIERlbW8gSlMgKi9cclxuaW1wb3J0ICcuL2RlbW8uanMnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/app.js\n");

/***/ }),

/***/ "./src/js/demo.js":
/*!************************!*\
  !*** ./src/js/demo.js ***!
  \************************/
/***/ (() => {

eval("var menu = document.querySelector(\".menu__list\");\nvar burger = document.querySelector(\".menu__burger\");\nvar burgerImg = document.querySelector(\".menu__burger-img\");\nvar body = document.querySelector(\".body-lock\");\nvar menuLink = document.querySelectorAll(\".menu__list-link\");\nburger.innerHTML = \"<img class=\\\"menu__burger-img\\\" src=\\\"./images/content/burger.svg\\\" alt=\\\"burger\\\"></img>\";\n\nburger.onclick = function () {\n  if (menu.classList.contains(\"active\")) {\n    setTimeout(function () {\n      menu.classList.remove(\"active\");\n      body.classList.remove(\"active\");\n      burger.innerHTML = \"<img class=\\\"menu__burger-img\\\" src=\\\"./images/content/burger.svg\\\" alt=\\\"burger\\\"></img>\";\n    }, 0);\n  } else {\n    setTimeout(function () {\n      menu.classList.add(\"active\");\n      body.classList.add(\"active\");\n      burger.innerHTML = \"<img class=\\\"menu__burger-img\\\" src=\\\"./images/content/close.svg\\\" alt=\\\"burger\\\"></img>\";\n    }, 0);\n  }\n};\n\nif (screen.width < 991) {\n  menuLink.forEach(function (el) {\n    el.onclick = function () {\n      if (menu.classList.contains(\"active\")) {\n        setTimeout(function () {\n          menu.classList.remove(\"active\");\n          body.classList.remove(\"active\");\n          burger.innerHTML = \"<img class=\\\"menu__burger-img\\\" src=\\\"./images/content/burger.svg\\\" alt=\\\"burger\\\"></img>\";\n        }, 0);\n      } else {\n        setTimeout(function () {\n          menu.classList.add(\"active\");\n          body.classList.add(\"active\");\n          burger.innerHTML = \"<img class=\\\"menu__burger-img\\\" src=\\\"./images/content/close.svg\\\" alt=\\\"burger\\\"></img>\";\n        }, 0);\n      }\n    };\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZGVtby5qcy5qcyIsIm5hbWVzIjpbIm1lbnUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXIiLCJidXJnZXJJbWciLCJib2R5IiwibWVudUxpbmsiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwib25jbGljayIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwic2V0VGltZW91dCIsInJlbW92ZSIsImFkZCIsInNjcmVlbiIsIndpZHRoIiwiZm9yRWFjaCIsImVsIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9qcy9kZW1vLmpzP2MzNDgiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9fbGlzdFwiKTtcclxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51X19idXJnZXJcIik7XHJcbmNvbnN0IGJ1cmdlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9fYnVyZ2VyLWltZ1wiKTtcclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYm9keS1sb2NrXCIpO1xyXG5jb25zdCBtZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudV9fbGlzdC1saW5rXCIpO1xyXG5idXJnZXIuaW5uZXJIVE1MID0gYDxpbWcgY2xhc3M9XCJtZW51X19idXJnZXItaW1nXCIgc3JjPVwiLi9pbWFnZXMvY29udGVudC9idXJnZXIuc3ZnXCIgYWx0PVwiYnVyZ2VyXCI+PC9pbWc+YDtcclxuYnVyZ2VyLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgaWYgKG1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgIGJ1cmdlci5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cIm1lbnVfX2J1cmdlci1pbWdcIiBzcmM9XCIuL2ltYWdlcy9jb250ZW50L2J1cmdlci5zdmdcIiBhbHQ9XCJidXJnZXJcIj48L2ltZz5gO1xyXG4gICAgfSwgMCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgYnVyZ2VyLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwibWVudV9fYnVyZ2VyLWltZ1wiIHNyYz1cIi4vaW1hZ2VzL2NvbnRlbnQvY2xvc2Uuc3ZnXCIgYWx0PVwiYnVyZ2VyXCI+PC9pbWc+YDtcclxuICAgIH0sIDApO1xyXG4gIH1cclxufTtcclxuaWYgKHNjcmVlbi53aWR0aCA8IDk5MSkge1xyXG4gIG1lbnVMaW5rLmZvckVhY2goKGVsKSA9PiB7XHJcbiAgICBlbC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBpZiAobWVudS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgIGJ1cmdlci5pbm5lckhUTUwgPSBgPGltZyBjbGFzcz1cIm1lbnVfX2J1cmdlci1pbWdcIiBzcmM9XCIuL2ltYWdlcy9jb250ZW50L2J1cmdlci5zdmdcIiBhbHQ9XCJidXJnZXJcIj48L2ltZz5gO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgYnVyZ2VyLmlubmVySFRNTCA9IGA8aW1nIGNsYXNzPVwibWVudV9fYnVyZ2VyLWltZ1wiIHNyYz1cIi4vaW1hZ2VzL2NvbnRlbnQvY2xvc2Uuc3ZnXCIgYWx0PVwiYnVyZ2VyXCI+PC9pbWc+YDtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9KTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWI7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFmO0FBQ0EsSUFBTUUsU0FBUyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQWxCO0FBQ0EsSUFBTUcsSUFBSSxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBYjtBQUNBLElBQU1JLFFBQVEsR0FBR0wsUUFBUSxDQUFDTSxnQkFBVCxDQUEwQixrQkFBMUIsQ0FBakI7QUFDQUosTUFBTSxDQUFDSyxTQUFQOztBQUNBTCxNQUFNLENBQUNNLE9BQVAsR0FBaUIsWUFBTTtFQUNyQixJQUFJVCxJQUFJLENBQUNVLFNBQUwsQ0FBZUMsUUFBZixDQUF3QixRQUF4QixDQUFKLEVBQXVDO0lBQ3JDQyxVQUFVLENBQUMsWUFBTTtNQUNmWixJQUFJLENBQUNVLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixRQUF0QjtNQUNBUixJQUFJLENBQUNLLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixRQUF0QjtNQUNBVixNQUFNLENBQUNLLFNBQVA7SUFDRCxDQUpTLEVBSVAsQ0FKTyxDQUFWO0VBS0QsQ0FORCxNQU1PO0lBQ0xJLFVBQVUsQ0FBQyxZQUFNO01BQ2ZaLElBQUksQ0FBQ1UsU0FBTCxDQUFlSSxHQUFmLENBQW1CLFFBQW5CO01BQ0FULElBQUksQ0FBQ0ssU0FBTCxDQUFlSSxHQUFmLENBQW1CLFFBQW5CO01BQ0FYLE1BQU0sQ0FBQ0ssU0FBUDtJQUNELENBSlMsRUFJUCxDQUpPLENBQVY7RUFLRDtBQUNGLENBZEQ7O0FBZUEsSUFBSU8sTUFBTSxDQUFDQyxLQUFQLEdBQWUsR0FBbkIsRUFBd0I7RUFDdEJWLFFBQVEsQ0FBQ1csT0FBVCxDQUFpQixVQUFDQyxFQUFELEVBQVE7SUFDdkJBLEVBQUUsQ0FBQ1QsT0FBSCxHQUFhLFlBQU07TUFDakIsSUFBSVQsSUFBSSxDQUFDVSxTQUFMLENBQWVDLFFBQWYsQ0FBd0IsUUFBeEIsQ0FBSixFQUF1QztRQUNyQ0MsVUFBVSxDQUFDLFlBQU07VUFDZlosSUFBSSxDQUFDVSxTQUFMLENBQWVHLE1BQWYsQ0FBc0IsUUFBdEI7VUFDQVIsSUFBSSxDQUFDSyxTQUFMLENBQWVHLE1BQWYsQ0FBc0IsUUFBdEI7VUFDQVYsTUFBTSxDQUFDSyxTQUFQO1FBQ0QsQ0FKUyxFQUlQLENBSk8sQ0FBVjtNQUtELENBTkQsTUFNTztRQUNMSSxVQUFVLENBQUMsWUFBTTtVQUNmWixJQUFJLENBQUNVLFNBQUwsQ0FBZUksR0FBZixDQUFtQixRQUFuQjtVQUNBVCxJQUFJLENBQUNLLFNBQUwsQ0FBZUksR0FBZixDQUFtQixRQUFuQjtVQUNBWCxNQUFNLENBQUNLLFNBQVA7UUFDRCxDQUpTLEVBSVAsQ0FKTyxDQUFWO01BS0Q7SUFDRixDQWREO0VBZUQsQ0FoQkQ7QUFpQkQifQ==\n//# sourceURL=webpack-internal:///./src/js/demo.js\n");

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9hcHAuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Ad2VhcmVhdGhsb24vZnJvbnRlbmQtd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zY3NzL2FwcC5zY3NzPzYyOWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/app.scss\n");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;