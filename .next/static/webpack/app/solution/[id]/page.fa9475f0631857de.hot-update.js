"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/solution/[id]/page",{

/***/ "(app-pages-browser)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"0faea8f34f36\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz85NGI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiMGZhZWE4ZjM0ZjM2XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/solution.tsx":
/*!*********************************!*\
  !*** ./components/solution.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Solution = (param)=>{\n    let { problem } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col mx-auto max-sm:700px\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-blue-600 font-bold my-10 animate-bounce \",\n                children: \"Don't give up! Try tackling the problem once more. You're closer to the solution than you think!\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\solution.tsx\",\n                lineNumber: 16,\n                columnNumber: 6\n            }, undefined),\n            problem.solutioncode.map((code, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"bg-green-500 text-white p-2 rounded-tl-lg rounded-tr-lg mb-2\",\n                            children: [\n                                \"Solution in \",\n                                index === 0 ? \"C++\" : \"Java\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\solution.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-stone-800 p-4 rounded-bl-lg rounded-br-lg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                className: \"text-white\",\n                                children: code.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\solution.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\solution.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, code.id, true, {\n                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\solution.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\solution.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Solution;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Solution);\nvar _c;\n$RefreshReg$(_c, \"Solution\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvc29sdXRpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBWTFCLE1BQU1DLFdBQTRCO1FBQUMsRUFBRUMsT0FBTyxFQUFFO0lBQzVDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDZCw4REFBQ0M7Z0JBQUVELFdBQVU7MEJBQWdEOzs7Ozs7WUFHM0RGLFFBQVFJLFlBQVksQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLE1BQWdCQyxzQkFDekMsOERBQUNOO29CQUFrQkMsV0FBVTs7c0NBQzNCLDhEQUFDTTs0QkFBR04sV0FBVTs7Z0NBQStEO2dDQUM5REssVUFBVSxJQUFJLFFBQVE7Ozs7Ozs7c0NBRXJDLDhEQUFDTjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ087Z0NBQUlQLFdBQVU7MENBQWNJLEtBQUtJLElBQUk7Ozs7Ozs7Ozs7OzttQkFMaENKLEtBQUtLLEVBQUU7Ozs7Ozs7Ozs7O0FBV3pCO0tBbEJNWjtBQW9CTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NvbHV0aW9uLnRzeD81ZDc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFByb2JsZW0gfSBmcm9tICcuLi9kYXRhL3R5cGVzL3Byb2JsZW0nO1xyXG5cclxudHlwZSBTb2x1dGlvbiA9IHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxufTtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgcHJvYmxlbTogUHJvYmxlbTtcclxufTtcclxuXHJcbmNvbnN0IFNvbHV0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBwcm9ibGVtIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG14LWF1dG8gbWF4LXNtOjcwMHB4XCI+XHJcbiAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCBmb250LWJvbGQgbXktMTAgYW5pbWF0ZS1ib3VuY2UgXCI+XHJcbiAgICAgIERvbid0IGdpdmUgdXAhIFRyeSB0YWNrbGluZyB0aGUgcHJvYmxlbSBvbmNlIG1vcmUuIFlvdSdyZSBjbG9zZXIgdG8gdGhlIHNvbHV0aW9uIHRoYW4geW91IHRoaW5rIVxyXG4gICAgPC9wPlxyXG4gICAgICB7cHJvYmxlbS5zb2x1dGlvbmNvZGUubWFwKChjb2RlOiBTb2x1dGlvbiwgaW5kZXg6IG51bWJlcikgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtjb2RlLmlkfSBjbGFzc05hbWU9XCJwLTRcIj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZC10bC1sZyByb3VuZGVkLXRyLWxnIG1iLTJcIj5cclxuICAgICAgICAgICAgU29sdXRpb24gaW4ge2luZGV4ID09PSAwID8gJ0MrKycgOiAnSmF2YSd9XHJcbiAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1zdG9uZS04MDAgcC00IHJvdW5kZWQtYmwtbGcgcm91bmRlZC1ici1sZ1wiPlxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57Y29kZS5uYW1lfTwvcHJlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNvbHV0aW9uO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTb2x1dGlvbiIsInByb2JsZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic29sdXRpb25jb2RlIiwibWFwIiwiY29kZSIsImluZGV4IiwiaDMiLCJwcmUiLCJuYW1lIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/solution.tsx\n"));

/***/ })

});