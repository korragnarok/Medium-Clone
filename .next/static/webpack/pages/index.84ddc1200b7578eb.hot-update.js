"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Trending.js":
/*!********************************!*\
  !*** ./components/Trending.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_author_avif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/author.avif */ \"./assets/author.avif\");\n/* harmony import */ var _assets_trending_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/trending.png */ \"./assets/trending.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar styles = {\n    container: \"mb-[100px] pt-10 pb-10 pl-[5rem] border-b-2\",\n    grid: \"grid grid-cols-3 gap-10 pr-10 w-full\",\n    content: \"flex\",\n    heading: \"flex gap-3 font-bold uppercase text-xs tracking-widest pb-5\",\n    arrow: \"\",\n    postWrap: \"flex flex-col items-center\",\n    order: \"text-gray-200 text-[2rem] font-bold pr-7\",\n    author: \"flex items-center\",\n    authorImg: \"rounded-full object-cover \",\n    authorName: \"pl-2 text-sm font-medium\",\n    title: \"font-bold pt-1\",\n    info: \"font-thin text-xs pt-1\"\n};\nvar Trending = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null), authorData = ref[0], setAuthorData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        var getAuthorData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = setAuthorData;\n                            _ctx.next = 3;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, \"users\", post.data.author));\n                        case 3:\n                            _ctx.t1 = _ctx.sent.data();\n                            (0, _ctx.t0)(_ctx.t1, \"\\uD83D\\uDE0E\");\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getAuthorData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getAuthorData();\n    }, [\n        post\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: styles.heading,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: styles.arrow,\n                        src: _assets_trending_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        width: 20,\n                        height: 20\n                    }, void 0, false, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: \"Trending on medium\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: styles.grid,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: styles.content,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: styles.order,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: \"01\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: styles.postWrap,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: styles.author,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: styles.authorImg,\n                                            src: authorData === null || authorData === void 0 ? void 0 : authorData.imageUrl,\n                                            height: 30,\n                                            width: 30\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: styles.authorName,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                                children: authorData === null || authorData === void 0 ? void 0 : authorData.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 29\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 25\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: styles.title,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: post.data.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: styles.info,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: [\n                                            new Date(post.data.postedOn.toDate()).toLocaleDateString(\"en-US\", {\n                                                day: \"numeric\",\n                                                month: \"short\"\n                                            }),\n                                            \"\\xb7 \",\n                                            post.data.postLength,\n                                            \" min read\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, _this);\n};\n_s(Trending, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Trending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trending);\nvar _c;\n$RefreshReg$(_c, \"Trending\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEJBLFVBQVUsQ0FBRVksSUFBSTs7Ozs7cURBQU07Ozs7O2lEQUN6Qjs7Ozs7O3lDQUNKOzhDQUNOLDhEQUFDUCxLQUFHO29DQUFDQyxTQUFTLEVBQUVwQixNQUFNLENBQUNXLEtBQUs7OENBQ3hCLDRFQUFDZ0IsSUFBRTtrREFBRVYsSUFBSSxDQUFDQyxJQUFJLENBQUNQLEtBQUs7Ozs7OzZDQUFNOzs7Ozt5Q0FDeEI7OENBQ04sOERBQUNRLEtBQUc7b0NBQUNDLFNBQVMsRUFBRXBCLE1BQU0sQ0FBQ1ksSUFBSTs4Q0FDdkIsNEVBQUNPLEtBQUc7OzRDQUNILElBQUlTLElBQUksQ0FBQ1gsSUFBSSxDQUFDQyxJQUFJLENBQUNXLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFLENBQUMsQ0FBQ0Msa0JBQWtCLENBQUMsT0FBTyxFQUFFO2dEQUMzREMsR0FBRyxFQUFFLFNBQVM7Z0RBQ2RDLEtBQUssRUFBRSxPQUFPOzZDQUNqQixDQUFDOzRDQUFDLE9BQ0E7NENBQUNoQixJQUFJLENBQUNDLElBQUksQ0FBQ2dCLFVBQVU7NENBQUMsV0FBUzs7Ozs7OzZDQUFNOzs7Ozt5Q0FDMUM7Ozs7OztpQ0FDSjs7Ozs7O3lCQUNKOzs7OztxQkFDQTs7Ozs7O2FBRUosQ0FDVDtDQUNKO0dBMURLckIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBNERkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmVuZGluZy5qcz80OGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBBdXRob3IgZnJvbSAnLi4vYXNzZXRzL2F1dGhvci5hdmlmJztcbmltcG9ydCBUcmVuZGluZ0Fycm93IGZyb20gJy4uL2Fzc2V0cy90cmVuZGluZy5wbmcnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldERvYywgZG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgY29udGFpbmVyOiAnbWItWzEwMHB4XSBwdC0xMCBwYi0xMCBwbC1bNXJlbV0gYm9yZGVyLWItMicsXG4gICAgZ3JpZDogJ2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTEwIHByLTEwIHctZnVsbCcsXG4gICAgY29udGVudDogJ2ZsZXgnLFxuICAgIGhlYWRpbmc6ICdmbGV4IGdhcC0zIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC14cyB0cmFja2luZy13aWRlc3QgcGItNScsXG4gICAgYXJyb3c6ICcnLFxuICAgIHBvc3RXcmFwOiAnZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInLFxuICAgIG9yZGVyOiAndGV4dC1ncmF5LTIwMCB0ZXh0LVsycmVtXSBmb250LWJvbGQgcHItNycsXG4gICAgYXV0aG9yOiAnZmxleCBpdGVtcy1jZW50ZXInLFxuICAgIGF1dGhvckltZzogJ3JvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgJyxcbiAgICBhdXRob3JOYW1lOiAncGwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICB0aXRsZTogJ2ZvbnQtYm9sZCBwdC0xJyxcbiAgICBpbmZvOiAnZm9udC10aGluIHRleHQteHMgcHQtMScsXG59XG5cbmNvbnN0IFRyZW5kaW5nID0gKCkgPT4ge1xuXG4gICAgY29uc3QgW2F1dGhvckRhdGEsIHNldEF1dGhvckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRBdXRob3JEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0QXV0aG9yRGF0YShcbiAgICAgICAgICAgICAgICAoYXdhaXQgIGdldERvYyhkb2MoZGIsICd1c2VycycsIHBvc3QuZGF0YS5hdXRob3IpKSkuZGF0YSgpLCAn8J+YjidcbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIGdldEF1dGhvckRhdGEoKTtcbiAgICB9LCBbcG9zdF0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFycm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtUcmVuZGluZ0Fycm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH0gXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VHJlbmRpbmcgb24gbWVkaXVtPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj4wMTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFdyYXB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9ySW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXV0aG9yRGF0YT8uaW1hZ2VVcmx9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3JOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2F1dGhvckRhdGE/Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Bvc3QuZGF0YS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmV3IERhdGUocG9zdC5kYXRhLnBvc3RlZE9uLnRvRGF0ZSgpKS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIMK3IHtwb3N0LmRhdGEucG9zdExlbmd0aH0gbWluIHJlYWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmVuZGluZzsiXSwibmFtZXMiOlsiSW1hZ2UiLCJBdXRob3IiLCJUcmVuZGluZ0Fycm93IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJnZXREb2MiLCJkb2MiLCJkYiIsInN0eWxlcyIsImNvbnRhaW5lciIsImdyaWQiLCJjb250ZW50IiwiaGVhZGluZyIsImFycm93IiwicG9zdFdyYXAiLCJvcmRlciIsImF1dGhvciIsImF1dGhvckltZyIsImF1dGhvck5hbWUiLCJ0aXRsZSIsImluZm8iLCJUcmVuZGluZyIsImF1dGhvckRhdGEiLCJzZXRBdXRob3JEYXRhIiwiZ2V0QXV0aG9yRGF0YSIsInBvc3QiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZVVybCIsImgxIiwibmFtZSIsImgzIiwiRGF0ZSIsInBvc3RlZE9uIiwidG9EYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiZGF5IiwibW9udGgiLCJwb3N0TGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Trending.js\n"));

/***/ })

});