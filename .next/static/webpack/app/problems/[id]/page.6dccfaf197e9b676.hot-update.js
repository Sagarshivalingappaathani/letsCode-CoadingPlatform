"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/problems/[id]/page",{

/***/ "(app-pages-browser)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"4c00afaf8bef\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz9hNGY4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiNGMwMGFmYWY4YmVmXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Workspace/Playground/Playground.tsx":
/*!********************************************************!*\
  !*** ./components/Workspace/Playground/Playground.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-split */ \"(app-pages-browser)/./node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var _uiw_codemirror_theme_vscode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uiw/codemirror-theme-vscode */ \"(app-pages-browser)/./node_modules/@uiw/codemirror-theme-vscode/esm/index.js\");\n/* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codemirror/lang-javascript */ \"(app-pages-browser)/./node_modules/@codemirror/lang-javascript/dist/index.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/global.css */ \"(app-pages-browser)/./styles/global.css\");\n/* harmony import */ var _EditorFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditorFooter */ \"(app-pages-browser)/./components/Workspace/Playground/EditorFooter.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Playground = (props)=>{\n    _s();\n    const [activeTestCaseId, setActiveTestCaseId] = useState(0);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-dark-layer-1 relative overflow-x-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: \"h-[calc(100vh-94px)]\",\n                direction: \"vertical\",\n                sizes: [\n                    60,\n                    40\n                ],\n                minSize: 60,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full overflow-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            value: props.problem.starterCode,\n                            theme: _uiw_codemirror_theme_vscode__WEBPACK_IMPORTED_MODULE_3__.vscodeDark,\n                            extensions: [\n                                (0,_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_6__.javascript)()\n                            ]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full px-5 overflow-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex h-10 items-center space-x-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative flex h-full flex-col justify-center cursor-pointer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm font-medium leading-5 text-white\",\n                                            children: \"Testcases\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 32,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: props.problem.examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mr-2 items-start mt-2 \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-wrap items-center gap-y-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap\\n\t\t\t\t\t\t\t\t\t\t\".concat(activeTestCaseId === index ? \"text-white\" : \"text-gray-500\", \"\\n\t\t\t\t\t\t\t\t\t\"),\n                                                children: [\n                                                    \"Case \",\n                                                    index + 1\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 10\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, example.id, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 8\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-semibold my-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-medium mt-4 text-white\",\n                                        children: \"Input:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2\",\n                                        children: problem.examples[activeTestCaseId].inputText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-medium mt-4 text-white\",\n                                        children: \"Output:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2\",\n                                        children: problem.examples[activeTestCaseId].outputText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                lineNumber: 20,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditorFooter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                handleSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                lineNumber: 68,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Playground, \"TXnL+aNsBwsan5w6CusNbCJa4+U=\");\n_c = Playground;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Playground);\nvar _c;\n$RefreshReg$(_c, \"Playground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV29ya3NwYWNlL1BsYXlncm91bmQvUGxheWdyb3VuZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUNlO0FBQ1c7QUFDRDtBQUN0QjtBQUVRO0FBTTNDLE1BQU1LLGFBQXdDLENBQUNDOztJQUU5QyxNQUFNLENBQUNDLGtCQUFrQkMsb0JBQW9CLEdBQUdDLFNBQWlCO0lBRWpFLHFCQUNDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFZCw4REFBQ1gsbURBQUtBO2dCQUFDVyxXQUFVO2dCQUF1QkMsV0FBVTtnQkFBV0MsT0FBTztvQkFBQztvQkFBSTtpQkFBRztnQkFBRUMsU0FBUzs7a0NBQ3RGLDhEQUFDSjt3QkFBSUMsV0FBVTtrQ0FDZCw0RUFBQ1YsNkRBQVVBOzRCQUNWYyxPQUFPVCxNQUFNVSxPQUFPLENBQUNDLFdBQVc7NEJBQ2hDQyxPQUFPaEIsb0VBQVVBOzRCQUNqQmlCLFlBQVk7Z0NBQUNoQix1RUFBVUE7NkJBQUc7Ozs7Ozs7Ozs7O2tDQUc1Qiw4REFBQ087d0JBQUlDLFdBQVU7OzBDQUVkLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDZCw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNkLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFBMkM7Ozs7OztzREFDMUQsOERBQUNTOzRDQUFHVCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJaEIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiTCxNQUFNVSxPQUFPLENBQUNLLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUNyQyw4REFBQ2Q7d0NBQ0FDLFdBQVU7a0RBR1YsNEVBQUNEOzRDQUFJQyxXQUFVO3NEQUNkLDRFQUFDRDtnREFDQUMsV0FBVyx3TEFDbUQsT0FBNURKLHFCQUFxQmlCLFFBQVEsZUFBZSxpQkFBZ0I7O29EQUU5RDtvREFDTUEsUUFBUTs7Ozs7Ozs7Ozs7O3VDQVJYRCxRQUFRRSxFQUFFOzs7Ozs7Ozs7OzBDQWVsQiw4REFBQ2Y7Z0NBQUlDLFdBQVU7O2tEQUNkLDhEQUFDZTt3Q0FBRWYsV0FBVTtrREFBc0M7Ozs7OztrREFDbkQsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiSyxRQUFRSyxRQUFRLENBQUNkLGlCQUFpQixDQUFDb0IsU0FBUzs7Ozs7O2tEQUU5Qyw4REFBQ0Q7d0NBQUVmLFdBQVU7a0RBQXNDOzs7Ozs7a0RBQ25ELDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDYkssUUFBUUssUUFBUSxDQUFDZCxpQkFBaUIsQ0FBQ3FCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLbEQsOERBQUN4QixxREFBWUE7Z0JBQUN5QixjQUFjQTs7Ozs7Ozs7Ozs7O0FBRy9CO0dBMURNeEI7S0FBQUE7QUEyRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Xb3Jrc3BhY2UvUGxheWdyb3VuZC9QbGF5Z3JvdW5kLnRzeD9iNjRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTcGxpdCBmcm9tIFwicmVhY3Qtc3BsaXRcIjtcclxuaW1wb3J0IENvZGVNaXJyb3IgZnJvbSBcIkB1aXcvcmVhY3QtY29kZW1pcnJvclwiO1xyXG5pbXBvcnQgeyB2c2NvZGVEYXJrIH0gZnJvbSBcIkB1aXcvY29kZW1pcnJvci10aGVtZS12c2NvZGVcIjtcclxuaW1wb3J0IHsgamF2YXNjcmlwdCB9IGZyb20gXCJAY29kZW1pcnJvci9sYW5nLWphdmFzY3JpcHRcIjtcclxuaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZ2xvYmFsLmNzcydcclxuaW1wb3J0IHsgUHJvYmxlbSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3R5cGVzL3Byb2JsZW0nO1xyXG5pbXBvcnQgICBFZGl0b3JGb290ZXIgZnJvbSAnLi9FZGl0b3JGb290ZXInXHJcblxyXG50eXBlIFBsYXlncm91bmRQcm9wcyA9IHtcclxuXHRwcm9ibGVtOlByb2JsZW1cclxufTtcclxuXHJcbmNvbnN0IFBsYXlncm91bmQ6IFJlYWN0LkZDPFBsYXlncm91bmRQcm9wcz4gPSAocHJvcHM6UGxheWdyb3VuZFByb3BzKSA9PiB7XHJcblxyXG5cdGNvbnN0IFthY3RpdmVUZXN0Q2FzZUlkLCBzZXRBY3RpdmVUZXN0Q2FzZUlkXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBiZy1kYXJrLWxheWVyLTEgcmVsYXRpdmUgb3ZlcmZsb3cteC1oaWRkZW4nPlxyXG5cclxuXHRcdFx0PFNwbGl0IGNsYXNzTmFtZT0naC1bY2FsYygxMDB2aC05NHB4KV0nIGRpcmVjdGlvbj0ndmVydGljYWwnIHNpemVzPXtbNjAsIDQwXX0gbWluU2l6ZT17NjB9PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgb3ZlcmZsb3ctYXV0byc+XHJcblx0XHRcdFx0XHQ8Q29kZU1pcnJvclxyXG5cdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMucHJvYmxlbS5zdGFydGVyQ29kZX1cclxuXHRcdFx0XHRcdFx0dGhlbWU9e3ZzY29kZURhcmt9XHJcblx0XHRcdFx0XHRcdGV4dGVuc2lvbnM9e1tqYXZhc2NyaXB0KCldfVxyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIHB4LTUgb3ZlcmZsb3ctYXV0byc+XHJcblx0XHRcdFx0XHR7LyogdGVzdGNhc2UgaGVhZGluZyAqL31cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGgtMTAgaXRlbXMtY2VudGVyIHNwYWNlLXgtNic+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSBmbGV4IGgtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3RleHQtc20gZm9udC1tZWRpdW0gbGVhZGluZy01IHRleHQtd2hpdGUnPlRlc3RjYXNlczwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxociBjbGFzc05hbWU9J2Fic29sdXRlIGJvdHRvbS0wIGgtMC41IHctZnVsbCByb3VuZGVkLWZ1bGwgYm9yZGVyLW5vbmUgYmctd2hpdGUnIC8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG5cdFx0XHRcdFx0XHR7cHJvcHMucHJvYmxlbS5leGFtcGxlcy5tYXAoKGV4YW1wbGUsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdtci0yIGl0ZW1zLXN0YXJ0IG10LTIgJ1xyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtleGFtcGxlLmlkfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtd3JhcCBpdGVtcy1jZW50ZXIgZ2FwLXktNCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb250LW1lZGl1bSBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbi1hbGwgZm9jdXM6b3V0bGluZS1ub25lIGlubGluZS1mbGV4IGJnLWRhcmstZmlsbC0zIGhvdmVyOmJnLWRhcmstZmlsbC0yIHJlbGF0aXZlIHJvdW5kZWQtbGcgcHgtNCBweS0xIGN1cnNvci1wb2ludGVyIHdoaXRlc3BhY2Utbm93cmFwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JHthY3RpdmVUZXN0Q2FzZUlkID09PSBpbmRleCA/IFwidGV4dC13aGl0ZVwiIDogXCJ0ZXh0LWdyYXktNTAwXCJ9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRDYXNlIHtpbmRleCArIDF9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdCkpfVxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZvbnQtc2VtaWJvbGQgbXktNCc+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSBtdC00IHRleHQtd2hpdGUnPklucHV0OjwvcD5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCBjdXJzb3ItdGV4dCByb3VuZGVkLWxnIGJvcmRlciBweC0zIHB5LVsxMHB4XSBiZy1kYXJrLWZpbGwtMyBib3JkZXItdHJhbnNwYXJlbnQgdGV4dC13aGl0ZSBtdC0yJz5cclxuXHRcdFx0XHRcdFx0XHR7cHJvYmxlbS5leGFtcGxlc1thY3RpdmVUZXN0Q2FzZUlkXS5pbnB1dFRleHR9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9J3RleHQtc20gZm9udC1tZWRpdW0gbXQtNCB0ZXh0LXdoaXRlJz5PdXRwdXQ6PC9wPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGN1cnNvci10ZXh0IHJvdW5kZWQtbGcgYm9yZGVyIHB4LTMgcHktWzEwcHhdIGJnLWRhcmstZmlsbC0zIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIG10LTInPlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9ibGVtLmV4YW1wbGVzW2FjdGl2ZVRlc3RDYXNlSWRdLm91dHB1dFRleHR9XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvU3BsaXQ+XHJcblx0XHRcdDxFZGl0b3JGb290ZXIgaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9IC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBQbGF5Z3JvdW5kOyJdLCJuYW1lcyI6WyJTcGxpdCIsIkNvZGVNaXJyb3IiLCJ2c2NvZGVEYXJrIiwiamF2YXNjcmlwdCIsIkVkaXRvckZvb3RlciIsIlBsYXlncm91bmQiLCJwcm9wcyIsImFjdGl2ZVRlc3RDYXNlSWQiLCJzZXRBY3RpdmVUZXN0Q2FzZUlkIiwidXNlU3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJzaXplcyIsIm1pblNpemUiLCJ2YWx1ZSIsInByb2JsZW0iLCJzdGFydGVyQ29kZSIsInRoZW1lIiwiZXh0ZW5zaW9ucyIsImhyIiwiZXhhbXBsZXMiLCJtYXAiLCJleGFtcGxlIiwiaW5kZXgiLCJpZCIsInAiLCJpbnB1dFRleHQiLCJvdXRwdXRUZXh0IiwiaGFuZGxlU3VibWl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Workspace/Playground/Playground.tsx\n"));

/***/ })

});