"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/problems/page",{

/***/ "(app-pages-browser)/./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"863d865ea8c2\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWwuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFsLmNzcz85NGI5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiODYzZDg2NWVhOGMyXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/global.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/problemsTable.tsx":
/*!**************************************!*\
  !*** ./components/problemsTable.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebaseConfig */ \"(app-pages-browser)/./firebaseConfig.tsx\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\nconst ProblemsTable = (param)=>{\n    let { loadingProblems, setLoadingProblems } = param;\n    _s();\n    const problems = useGetProblems(loadingProblems, setLoadingProblems);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n            className: \"gradiant text-dark \",\n            children: problems.map((problem, idx)=>{\n                const difficulyColor = problem.difficulty === \"Easy\" ? \"text-dark-green-s\" : problem.difficulty === \"Medium\" ? \"text-dark-yellow\" : \"text-dark-pink\";\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    className: \"gradiant items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: idx + 1\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                className: \"hover:text-blue-600 cursor-pointer\",\n                                href: \"/problems/\".concat(problem.id),\n                                children: problem.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 10\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4 \".concat(difficulyColor),\n                            children: problem.difficulty\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: problem.category\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 8\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-2 py-4 font-medium whitespace-nowrap text-dark-green-s\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 29\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                            className: \"px-6 py-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/solution/\".concat(problem.id),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: \"/assets/images/solution.png\",\n                                    alt: \"logo\",\n                                    width: 45,\n                                    height: 45,\n                                    className: \"object-contain\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 33\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 8\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 8\n                        }, undefined)\n                    ]\n                }, problem.id, true, {\n                    fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 7\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\sagar\\\\OneDrive\\\\Desktop\\\\copy\\\\letscode\\\\components\\\\problemsTable.tsx\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n_s(ProblemsTable, \"9Uv03Ll4Pl7bQK/ARctgRuyhsZM=\", false, function() {\n    return [\n        useGetProblems\n    ];\n});\n_c = ProblemsTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProblemsTable);\nfunction useGetProblems(loadingProblems, setLoadingProblems) {\n    _s1();\n    const [problems, setProblems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    console.log(loadingProblems);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getProblems = async ()=>{\n            // fetching data logic\n            console.log(loadingProblems);\n            setLoadingProblems(true);\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.collection)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.firestore, \"problems\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.orderBy)(\"order\", \"asc\"));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDocs)(q);\n            const tmp = [];\n            querySnapshot.forEach((doc)=>{\n                tmp.push({\n                    id: doc.id,\n                    ...doc.data()\n                });\n            });\n            setProblems(tmp);\n            setLoadingProblems(false);\n            console.log(loadingProblems);\n        };\n        getProblems();\n    }, [\n        setLoadingProblems\n    ]);\n    return problems;\n}\n_s1(useGetProblems, \"VBi59e6jMrp0EO3shHKvwMVAqws=\");\nvar _c;\n$RefreshReg$(_c, \"ProblemsTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvYmxlbXNUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ0U7QUFFYTtBQUNHO0FBQ3VDO0FBT3RGLE1BQU1TLGdCQUE4QztRQUFDLEVBQUVDLGVBQWUsRUFBQ0Msa0JBQWtCLEVBQUU7O0lBRTFGLE1BQU1DLFdBQVdDLGVBQWVILGlCQUFnQkM7SUFFaEQscUJBQ0M7a0JBQ0MsNEVBQUNHO1lBQU1DLFdBQVU7c0JBQ2ZILFNBQVNJLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQztnQkFDdkIsTUFBTUMsaUJBQ0xGLFFBQVFHLFVBQVUsS0FBSyxTQUNwQixzQkFDQUgsUUFBUUcsVUFBVSxLQUFLLFdBQ3ZCLHFCQUNBO2dCQUNKLHFCQUNDLDhEQUFDQztvQkFBR04sV0FBVzs7c0NBQ2QsOERBQUNPOzRCQUFHUCxXQUFXO3NDQUFjRyxNQUFJOzs7Ozs7c0NBQ2pDLDhEQUFDSTs0QkFBR1AsV0FBVTtzQ0FFWiw0RUFBQ2Ysa0RBQUlBO2dDQUNKZSxXQUFVO2dDQUNWUSxNQUFNLGFBQXdCLE9BQVhOLFFBQVFPLEVBQUU7MENBRTVCUCxRQUFRUSxLQUFLOzs7Ozs7Ozs7OztzQ0FJakIsOERBQUNIOzRCQUFHUCxXQUFXLGFBQTRCLE9BQWZJO3NDQUFtQkYsUUFBUUcsVUFBVTs7Ozs7O3NDQUNqRSw4REFBQ0U7NEJBQUdQLFdBQVc7c0NBQWNFLFFBQVFTLFFBQVE7Ozs7OztzQ0FDeEIsOERBQUNDOzRCQUFHWixXQUFVOzs7Ozs7c0NBRW5DLDhEQUFDTzs0QkFBR1AsV0FBVztzQ0FDZiw0RUFBQ2Ysa0RBQUlBO2dDQUFDdUIsTUFBTSxhQUF3QixPQUFYTixRQUFRTyxFQUFFOzBDQUNWLDRFQUFDdkIsbURBQUtBO29DQUNOMkIsS0FBSTtvQ0FDSkMsS0FBSTtvQ0FDSkMsT0FBTztvQ0FDUEMsUUFBUTtvQ0FDUmhCLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQXZCUUUsUUFBUU8sRUFBRTs7Ozs7WUE4QnhEOzs7Ozs7O0FBS0o7R0FsRE1mOztRQUVZSTs7O0tBRlpKO0FBbUROLCtEQUFlQSxhQUFhQSxFQUFDO0FBRTdCLFNBQVNJLGVBQWVILGVBQXVCLEVBQUNDLGtCQUFpRTs7SUFDaEgsTUFBTSxDQUFDQyxVQUFVb0IsWUFBWSxHQUFHN0IsK0NBQVFBLENBQWMsRUFBRTtJQUN4RDhCLFFBQVFDLEdBQUcsQ0FBQ3hCO0lBQ1pSLGdEQUFTQSxDQUFDO1FBQ1QsTUFBTWlDLGNBQWM7WUFDbkIsc0JBQXNCO1lBQ3RCRixRQUFRQyxHQUFHLENBQUN4QjtZQUNaQyxtQkFBbUI7WUFDbkIsTUFBTXlCLElBQUk1Qix5REFBS0EsQ0FBQ0gsOERBQVVBLENBQUNELHNEQUFTQSxFQUFFLGFBQWFHLDJEQUFPQSxDQUFDLFNBQVM7WUFDcEUsTUFBTThCLGdCQUFnQixNQUFNL0IsMkRBQU9BLENBQUM4QjtZQUNwQyxNQUFNRSxNQUFtQixFQUFFO1lBQzNCRCxjQUFjRSxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ3RCRixJQUFJRyxJQUFJLENBQUM7b0JBQUVqQixJQUFJZ0IsSUFBSWhCLEVBQUU7b0JBQUUsR0FBR2dCLElBQUlFLElBQUksRUFBRTtnQkFBQztZQUN0QztZQUNBVixZQUFZTTtZQUNaM0IsbUJBQW1CO1lBQ25Cc0IsUUFBUUMsR0FBRyxDQUFDeEI7UUFDYjtRQUVBeUI7SUFDRCxHQUFHO1FBQUN4QjtLQUFtQjtJQUN2QixPQUFPQztBQUNSO0lBdEJTQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2JsZW1zVGFibGUudHN4P2ExYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IERCUHJvYmxlbSB9IGZyb20gXCIuLi9kYXRhL3R5cGVzL3Byb2JsZW1cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2FwcCxmaXJlc3RvcmV9IGZyb20gXCIuLi9maXJlYmFzZUNvbmZpZ1wiXHJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGRvYywgZ2V0RG9jLCBnZXREb2NzLCBvcmRlckJ5LCBxdWVyeSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuXHJcbnR5cGUgUHJvYmxlbXNUYWJsZVByb3BzID0ge1xyXG5cdGxvYWRpbmdQcm9ibGVtczpib29sZWFuXHJcblx0c2V0TG9hZGluZ1Byb2JsZW1zOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxib29sZWFuPj47XHJcbn07XHJcblxyXG5jb25zdCBQcm9ibGVtc1RhYmxlOiBSZWFjdC5GQzxQcm9ibGVtc1RhYmxlUHJvcHM+ID0gKHsgbG9hZGluZ1Byb2JsZW1zLHNldExvYWRpbmdQcm9ibGVtcyB9KSA9PiB7XHJcblxyXG5cdGNvbnN0IHByb2JsZW1zID0gdXNlR2V0UHJvYmxlbXMobG9hZGluZ1Byb2JsZW1zLHNldExvYWRpbmdQcm9ibGVtcyk7XHJcblx0XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDx0Ym9keSBjbGFzc05hbWU9J2dyYWRpYW50IHRleHQtZGFyayAnPlxyXG5cdFx0XHRcdHtwcm9ibGVtcy5tYXAoKHByb2JsZW0sIGlkeCkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgZGlmZmljdWx5Q29sb3IgPVxyXG5cdFx0XHRcdFx0XHRwcm9ibGVtLmRpZmZpY3VsdHkgPT09IFwiRWFzeVwiXHJcblx0XHRcdFx0XHRcdFx0PyBcInRleHQtZGFyay1ncmVlbi1zXCJcclxuXHRcdFx0XHRcdFx0XHQ6IHByb2JsZW0uZGlmZmljdWx0eSA9PT0gXCJNZWRpdW1cIlxyXG5cdFx0XHRcdFx0XHRcdD8gXCJ0ZXh0LWRhcmsteWVsbG93XCJcclxuXHRcdFx0XHRcdFx0XHQ6IFwidGV4dC1kYXJrLXBpbmtcIjtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9IFwiZ3JhZGlhbnQgaXRlbXMtY2VudGVyXCIga2V5PXtwcm9ibGVtLmlkfT5cclxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtcInB4LTYgcHktNFwifT57aWR4KzF9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPSdweC02IHB5LTQnPlxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TGlua1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT0naG92ZXI6dGV4dC1ibHVlLTYwMCBjdXJzb3ItcG9pbnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRocmVmPXtgL3Byb2JsZW1zLyR7cHJvYmxlbS5pZH1gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3Byb2JsZW0udGl0bGV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdDwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT17YHB4LTYgcHktNCAke2RpZmZpY3VseUNvbG9yfWB9Pntwcm9ibGVtLmRpZmZpY3VsdHl9PC90ZD5cclxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtcInB4LTYgcHktNFwifT57cHJvYmxlbS5jYXRlZ29yeX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncHgtMiBweS00IGZvbnQtbWVkaXVtIHdoaXRlc3BhY2Utbm93cmFwIHRleHQtZGFyay1ncmVlbi1zJz5cclxuXHRcdFx0XHRcdFx0XHQ8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9e1wicHgtNiBweS00XCJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9e2Avc29sdXRpb24vJHtwcm9ibGVtLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9hc3NldHMvaW1hZ2VzL3NvbHV0aW9uLnBuZ1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs0NX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezQ1fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb250YWluXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0PC90ZD5cclxuXHRcdFx0XHRcdFx0PC90cj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvYmxlbXNUYWJsZTtcclxuXHJcbmZ1bmN0aW9uIHVzZUdldFByb2JsZW1zKGxvYWRpbmdQcm9ibGVtczpib29sZWFuLHNldExvYWRpbmdQcm9ibGVtczogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248Ym9vbGVhbj4+KSB7XHJcblx0Y29uc3QgW3Byb2JsZW1zLCBzZXRQcm9ibGVtc10gPSB1c2VTdGF0ZTxEQlByb2JsZW1bXT4oW10pO1xyXG5cdGNvbnNvbGUubG9nKGxvYWRpbmdQcm9ibGVtcylcclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0Y29uc3QgZ2V0UHJvYmxlbXMgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRcdC8vIGZldGNoaW5nIGRhdGEgbG9naWNcclxuXHRcdFx0Y29uc29sZS5sb2cobG9hZGluZ1Byb2JsZW1zKVxyXG5cdFx0XHRzZXRMb2FkaW5nUHJvYmxlbXModHJ1ZSk7XHJcblx0XHRcdGNvbnN0IHEgPSBxdWVyeShjb2xsZWN0aW9uKGZpcmVzdG9yZSwgXCJwcm9ibGVtc1wiKSwgb3JkZXJCeShcIm9yZGVyXCIsIFwiYXNjXCIpKTtcclxuXHRcdFx0Y29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XHJcblx0XHRcdGNvbnN0IHRtcDogREJQcm9ibGVtW10gPSBbXTtcclxuXHRcdFx0cXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcclxuXHRcdFx0XHR0bXAucHVzaCh7IGlkOiBkb2MuaWQsIC4uLmRvYy5kYXRhKCkgfSBhcyBEQlByb2JsZW0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0c2V0UHJvYmxlbXModG1wKTtcclxuXHRcdFx0c2V0TG9hZGluZ1Byb2JsZW1zKGZhbHNlKTtcclxuXHRcdFx0Y29uc29sZS5sb2cobG9hZGluZ1Byb2JsZW1zKVxyXG5cdFx0fTtcclxuXHJcblx0XHRnZXRQcm9ibGVtcygpO1xyXG5cdH0sIFtzZXRMb2FkaW5nUHJvYmxlbXNdKTtcclxuXHRyZXR1cm4gcHJvYmxlbXM7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImdldERvY3MiLCJvcmRlckJ5IiwicXVlcnkiLCJQcm9ibGVtc1RhYmxlIiwibG9hZGluZ1Byb2JsZW1zIiwic2V0TG9hZGluZ1Byb2JsZW1zIiwicHJvYmxlbXMiLCJ1c2VHZXRQcm9ibGVtcyIsInRib2R5IiwiY2xhc3NOYW1lIiwibWFwIiwicHJvYmxlbSIsImlkeCIsImRpZmZpY3VseUNvbG9yIiwiZGlmZmljdWx0eSIsInRyIiwidGQiLCJocmVmIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5IiwidGgiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNldFByb2JsZW1zIiwiY29uc29sZSIsImxvZyIsImdldFByb2JsZW1zIiwicSIsInF1ZXJ5U25hcHNob3QiLCJ0bXAiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/problemsTable.tsx\n"));

/***/ })

});