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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"e3165df7cdd1\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz9hNGY4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiZTMxNjVkZjdjZGQxXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Workspace/Playground/Playground.tsx":
/*!********************************************************!*\
  !*** ./components/Workspace/Playground/Playground.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-split */ \"(app-pages-browser)/./node_modules/react-split/dist/react-split.es.js\");\n/* harmony import */ var _uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @uiw/react-codemirror */ \"(app-pages-browser)/./node_modules/@uiw/react-codemirror/esm/index.js\");\n/* harmony import */ var _uiw_codemirror_theme_vscode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @uiw/codemirror-theme-vscode */ \"(app-pages-browser)/./node_modules/@uiw/codemirror-theme-vscode/esm/index.js\");\n/* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codemirror/lang-javascript */ \"(app-pages-browser)/./node_modules/@codemirror/lang-javascript/dist/index.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/global.css */ \"(app-pages-browser)/./styles/global.css\");\n/* harmony import */ var _EditorFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditorFooter */ \"(app-pages-browser)/./components/Workspace/Playground/EditorFooter.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Playground = (props)=>{\n    _s();\n    const [activeTestCaseId, setActiveTestCaseId] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);\n    function handleSubmit() {}\n    if (!props.problem) {\n        console.error(\"props.problem is null or undefined\");\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"No problem data available.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n            lineNumber: 25,\n            columnNumber: 10\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col bg-dark-layer-1 relative overflow-x-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_split__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                className: \"h-[calc(100vh-94px)]\",\n                direction: \"vertical\",\n                sizes: [\n                    60,\n                    40\n                ],\n                minSize: 60,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full overflow-auto\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_uiw_react_codemirror__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            value: props.problem.starterCode,\n                            theme: _uiw_codemirror_theme_vscode__WEBPACK_IMPORTED_MODULE_3__.vscodeDark,\n                            extensions: [\n                                (0,_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_7__.javascript)()\n                            ]\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full px-5 overflow-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex h-10 items-center space-x-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"relative flex h-full flex-col justify-center cursor-pointer\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"text-sm font-medium leading-5 text-white\",\n                                            children: \"Testcases\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                                            className: \"absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 7\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex\",\n                                children: props.problem.examples.map((example, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mr-2 items-start mt-2 \",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex flex-wrap items-center gap-y-4\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"font-medium items-center transition-all focus:outline-none inline-flex bg-dark-fill-3 hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 cursor-pointer whitespace-nowrap\\n\t\t\t\t\t\t\t\t\t\t\".concat(activeTestCaseId === index ? \"text-white\" : \"text-gray-500\", \"\\n\t\t\t\t\t\t\t\t\t\"),\n                                                children: [\n                                                    \"Case \",\n                                                    index + 1\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 10\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, example.id, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 8\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-semibold my-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-medium mt-4 text-white\",\n                                        children: \"Input:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2\",\n                                        children: props.problem.examples[activeTestCaseId].inputText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-sm font-medium mt-4 text-white\",\n                                        children: \"Output:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full cursor-text rounded-lg border px-3 py-[10px] bg-dark-fill-3 border-transparent text-white mt-2\",\n                                        children: props.problem.examples[activeTestCaseId].outputText\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                lineNumber: 31,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditorFooter__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                handleSubmit: handleSubmit\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n                lineNumber: 79,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\letsCode SLP\\\\letscode\\\\components\\\\Workspace\\\\Playground\\\\Playground.tsx\",\n        lineNumber: 29,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Playground, \"TXnL+aNsBwsan5w6CusNbCJa4+U=\");\n_c = Playground;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Playground);\nvar _c;\n$RefreshReg$(_c, \"Playground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvV29ya3NwYWNlL1BsYXlncm91bmQvUGxheWdyb3VuZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2U7QUFDVztBQUNEO0FBQ3RCO0FBRVE7QUFFVjtBQU1qQyxNQUFNTSxhQUF3QyxDQUFDQzs7SUFFOUMsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUFHSiwrQ0FBUUEsQ0FBUztJQUVqRSxTQUFTSyxnQkFFVDtJQUVBLElBQUksQ0FBQ0gsTUFBTUksT0FBTyxFQUFFO1FBQ25CQyxRQUFRQyxLQUFLLENBQUM7UUFDZCxxQkFBTyw4REFBQ0M7c0JBQUk7Ozs7OztJQUNYO0lBRUYscUJBQ0MsOERBQUNBO1FBQUlDLFdBQVU7OzBCQUVkLDhEQUFDZixtREFBS0E7Z0JBQUNlLFdBQVU7Z0JBQXVCQyxXQUFVO2dCQUFXQyxPQUFPO29CQUFDO29CQUFJO2lCQUFHO2dCQUFFQyxTQUFTOztrQ0FDdEYsOERBQUNKO3dCQUFJQyxXQUFVO2tDQUNkLDRFQUFDZCw2REFBVUE7NEJBQ1ZrQixPQUFPWixNQUFNSSxPQUFPLENBQUNTLFdBQVc7NEJBQ2hDQyxPQUFPbkIsb0VBQVVBOzRCQUNqQm9CLFlBQVk7Z0NBQUNuQix1RUFBVUE7NkJBQUc7Ozs7Ozs7Ozs7O2tDQUc1Qiw4REFBQ1c7d0JBQUlDLFdBQVU7OzBDQUVkLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDZCw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNkLDhEQUFDRDs0Q0FBSUMsV0FBVTtzREFBMkM7Ozs7OztzREFDMUQsOERBQUNROzRDQUFHUixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJaEIsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUNiUixNQUFNSSxPQUFPLENBQUNhLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUNyQyw4REFBQ2I7d0NBQ0FDLFdBQVU7a0RBR1YsNEVBQUNEOzRDQUFJQyxXQUFVO3NEQUNkLDRFQUFDRDtnREFDQUMsV0FBVyx3TEFDbUQsT0FBNURQLHFCQUFxQm1CLFFBQVEsZUFBZSxpQkFBZ0I7O29EQUU5RDtvREFDTUEsUUFBUTs7Ozs7Ozs7Ozs7O3VDQVJYRCxRQUFRRSxFQUFFOzs7Ozs7Ozs7OzBDQWVsQiw4REFBQ2Q7Z0NBQUlDLFdBQVU7O2tEQUNkLDhEQUFDYzt3Q0FBRWQsV0FBVTtrREFBc0M7Ozs7OztrREFDbkQsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiUixNQUFNSSxPQUFPLENBQUNhLFFBQVEsQ0FBQ2hCLGlCQUFpQixDQUFDc0IsU0FBUzs7Ozs7O2tEQUVwRCw4REFBQ0Q7d0NBQUVkLFdBQVU7a0RBQXNDOzs7Ozs7a0RBQ25ELDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDYlIsTUFBTUksT0FBTyxDQUFDYSxRQUFRLENBQUNoQixpQkFBaUIsQ0FBQ3VCLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLeEQsOERBQUMzQixxREFBWUE7Z0JBQUNNLGNBQWNBOzs7Ozs7Ozs7Ozs7QUFHL0I7R0FuRU1KO0tBQUFBO0FBb0VOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvV29ya3NwYWNlL1BsYXlncm91bmQvUGxheWdyb3VuZC50c3g/YjY0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3BsaXQgZnJvbSBcInJlYWN0LXNwbGl0XCI7XHJcbmltcG9ydCBDb2RlTWlycm9yIGZyb20gXCJAdWl3L3JlYWN0LWNvZGVtaXJyb3JcIjtcclxuaW1wb3J0IHsgdnNjb2RlRGFyayB9IGZyb20gXCJAdWl3L2NvZGVtaXJyb3ItdGhlbWUtdnNjb2RlXCI7XHJcbmltcG9ydCB7IGphdmFzY3JpcHQgfSBmcm9tIFwiQGNvZGVtaXJyb3IvbGFuZy1qYXZhc2NyaXB0XCI7XHJcbmltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2dsb2JhbC5jc3MnXHJcbmltcG9ydCB7IFByb2JsZW0gfSBmcm9tICcuLi8uLi8uLi91dGlscy90eXBlcy9wcm9ibGVtJztcclxuaW1wb3J0ICAgRWRpdG9yRm9vdGVyIGZyb20gJy4vRWRpdG9yRm9vdGVyJ1xyXG5pbXBvcnQgUHJlZmVyZW5jZU5hdiAgZnJvbSAnLi9QcmVmZXJlbmNlTmF2J1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxudHlwZSBQbGF5Z3JvdW5kUHJvcHMgPSB7XHJcblx0cHJvYmxlbTpQcm9ibGVtXHJcbn07XHJcblxyXG5jb25zdCBQbGF5Z3JvdW5kOiBSZWFjdC5GQzxQbGF5Z3JvdW5kUHJvcHM+ID0gKHByb3BzOlBsYXlncm91bmRQcm9wcykgPT4ge1xyXG5cclxuXHRjb25zdCBbYWN0aXZlVGVzdENhc2VJZCwgc2V0QWN0aXZlVGVzdENhc2VJZF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApO1xyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVTdWJtaXQoKXtcclxuXHJcblx0fVxyXG5cdFxyXG5cdGlmICghcHJvcHMucHJvYmxlbSkge1xyXG5cdFx0Y29uc29sZS5lcnJvcihcInByb3BzLnByb2JsZW0gaXMgbnVsbCBvciB1bmRlZmluZWRcIik7XHJcblx0XHRyZXR1cm4gPGRpdj5ObyBwcm9ibGVtIGRhdGEgYXZhaWxhYmxlLjwvZGl2PjtcclxuXHQgIH1cclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGJnLWRhcmstbGF5ZXItMSByZWxhdGl2ZSBvdmVyZmxvdy14LWhpZGRlbic+XHJcblx0XHRcdFxyXG5cdFx0XHQ8U3BsaXQgY2xhc3NOYW1lPSdoLVtjYWxjKDEwMHZoLTk0cHgpXScgZGlyZWN0aW9uPSd2ZXJ0aWNhbCcgc2l6ZXM9e1s2MCwgNDBdfSBtaW5TaXplPXs2MH0+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3ctZnVsbCBvdmVyZmxvdy1hdXRvJz5cclxuXHRcdFx0XHRcdDxDb2RlTWlycm9yXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtwcm9wcy5wcm9ibGVtLnN0YXJ0ZXJDb2RlfVxyXG5cdFx0XHRcdFx0XHR0aGVtZT17dnNjb2RlRGFya31cclxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9ucz17W2phdmFzY3JpcHQoKV19XHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgcHgtNSBvdmVyZmxvdy1hdXRvJz5cclxuXHRcdFx0XHRcdHsvKiB0ZXN0Y2FzZSBoZWFkaW5nICovfVxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggaC0xMCBpdGVtcy1jZW50ZXIgc3BhY2UteC02Jz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIGZsZXggaC1mdWxsIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGN1cnNvci1wb2ludGVyJz5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSBsZWFkaW5nLTUgdGV4dC13aGl0ZSc+VGVzdGNhc2VzPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTAgaC0wLjUgdy1mdWxsIHJvdW5kZWQtZnVsbCBib3JkZXItbm9uZSBiZy13aGl0ZScgLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCc+XHJcblx0XHRcdFx0XHRcdHtwcm9wcy5wcm9ibGVtLmV4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaW5kZXgpID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J21yLTIgaXRlbXMtc3RhcnQgbXQtMiAnXHJcblx0XHRcdFx0XHRcdFx0XHRrZXk9e2V4YW1wbGUuaWR9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC13cmFwIGl0ZW1zLWNlbnRlciBnYXAteS00Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvbnQtbWVkaXVtIGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uLWFsbCBmb2N1czpvdXRsaW5lLW5vbmUgaW5saW5lLWZsZXggYmctZGFyay1maWxsLTMgaG92ZXI6YmctZGFyay1maWxsLTIgcmVsYXRpdmUgcm91bmRlZC1sZyBweC00IHB5LTEgY3Vyc29yLXBvaW50ZXIgd2hpdGVzcGFjZS1ub3dyYXBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQke2FjdGl2ZVRlc3RDYXNlSWQgPT09IGluZGV4ID8gXCJ0ZXh0LXdoaXRlXCIgOiBcInRleHQtZ3JheS01MDBcIn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdENhc2Uge2luZGV4ICsgMX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZm9udC1zZW1pYm9sZCBteS00Jz5cclxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPSd0ZXh0LXNtIGZvbnQtbWVkaXVtIG10LTQgdGV4dC13aGl0ZSc+SW5wdXQ6PC9wPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGN1cnNvci10ZXh0IHJvdW5kZWQtbGcgYm9yZGVyIHB4LTMgcHktWzEwcHhdIGJnLWRhcmstZmlsbC0zIGJvcmRlci10cmFuc3BhcmVudCB0ZXh0LXdoaXRlIG10LTInPlxyXG5cdFx0XHRcdFx0XHRcdHtwcm9wcy5wcm9ibGVtLmV4YW1wbGVzW2FjdGl2ZVRlc3RDYXNlSWRdLmlucHV0VGV4dH1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC1zbSBmb250LW1lZGl1bSBtdC00IHRleHQtd2hpdGUnPk91dHB1dDo8L3A+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgY3Vyc29yLXRleHQgcm91bmRlZC1sZyBib3JkZXIgcHgtMyBweS1bMTBweF0gYmctZGFyay1maWxsLTMgYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgbXQtMic+XHJcblx0XHRcdFx0XHRcdFx0e3Byb3BzLnByb2JsZW0uZXhhbXBsZXNbYWN0aXZlVGVzdENhc2VJZF0ub3V0cHV0VGV4dH1cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9TcGxpdD5cclxuXHRcdFx0PEVkaXRvckZvb3RlciBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLz5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFBsYXlncm91bmQ7Il0sIm5hbWVzIjpbIlNwbGl0IiwiQ29kZU1pcnJvciIsInZzY29kZURhcmsiLCJqYXZhc2NyaXB0IiwiRWRpdG9yRm9vdGVyIiwidXNlU3RhdGUiLCJQbGF5Z3JvdW5kIiwicHJvcHMiLCJhY3RpdmVUZXN0Q2FzZUlkIiwic2V0QWN0aXZlVGVzdENhc2VJZCIsImhhbmRsZVN1Ym1pdCIsInByb2JsZW0iLCJjb25zb2xlIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJkaXJlY3Rpb24iLCJzaXplcyIsIm1pblNpemUiLCJ2YWx1ZSIsInN0YXJ0ZXJDb2RlIiwidGhlbWUiLCJleHRlbnNpb25zIiwiaHIiLCJleGFtcGxlcyIsIm1hcCIsImV4YW1wbGUiLCJpbmRleCIsImlkIiwicCIsImlucHV0VGV4dCIsIm91dHB1dFRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Workspace/Playground/Playground.tsx\n"));

/***/ })

});