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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_trending_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/trending.png */ \"./assets/trending.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! postcss */ \"./node_modules/postcss/lib/postcss.mjs\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar styles = {\n    container: \"mb-[100px] pt-10 pb-10 pl-[5rem] border-b-2\",\n    grid: \"grid grid-cols-3 gap-10 pr-10 w-full\",\n    content: \"flex\",\n    heading: \"flex gap-3 font-bold uppercase text-xs tracking-widest pb-5\",\n    arrow: \"\",\n    postWrap: \"flex flex-col items-center\",\n    order: \"text-gray-200 text-[2rem] font-bold pr-7\",\n    author: \"flex items-center\",\n    authorImg: \"rounded-full object-cover \",\n    authorName: \"pl-2 text-sm font-medium\",\n    title: \"font-bold pt-1\",\n    info: \"font-thin text-xs pt-1\"\n};\nvar Trending = function(param) {\n    var post = param.post;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), authorData = ref[0], setAuthorData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var getAuthorData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = setAuthorData;\n                            _ctx.next = 3;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"users\", post.data.author));\n                        case 3:\n                            _ctx.t1 = _ctx.sent.data();\n                            (0, _ctx.t0)(_ctx.t1);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getAuthorData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getAuthorData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: styles.container,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: posts.map(function(post) {\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: styles.heading,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: styles.arrow,\n                                    src: _assets_trending_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    width: 20,\n                                    height: 20\n                                }, void 0, false, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: \"Trending on medium\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: styles.grid,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: styles.content,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: styles.order,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"01\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: styles.postWrap,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                className: styles.author,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        className: styles.authorImg,\n                                                        src: authorData === null || authorData === void 0 ? void 0 : authorData.imageUrl,\n                                                        height: 30,\n                                                        width: 30\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 25\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                        className: styles.authorName,\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                                            children: authorData === null || authorData === void 0 ? void 0 : authorData.name\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 29\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                        lineNumber: 62,\n                                                        columnNumber: 25\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                lineNumber: 55,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                className: styles.title,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {}, void 0, false, {\n                                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                lineNumber: 66,\n                                                columnNumber: 21\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                className: styles.info,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        new Date(post.data.postedOn.toDate()).toLocaleDateString(\"en-US\", {\n                                                            day: \"numeric\",\n                                                            month: \"short\"\n                                                        }),\n                                                        \"\\xb7 \",\n                                                        post.data.postLength,\n                                                        \" min read\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                    lineNumber: 70,\n                                                    columnNumber: 25\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                lineNumber: 69,\n                                                columnNumber: 21\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, _this);\n};\n_s(Trending, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Trending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trending);\nvar _c;\n$RefreshReg$(_c, \"Trending\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sQ0FBQ1UsVUFBVTtrRUFDN0IsNEVBQUNpQixJQUFFO3NFQUFFWixVQUFVLGFBQVZBLFVBQVUsV0FBTSxHQUFoQkEsS0FBQUEsQ0FBZ0IsR0FBaEJBLFVBQVUsQ0FBRWEsSUFBSTs7Ozs7aUVBQU07Ozs7OzZEQUN6Qjs7Ozs7O3FEQUNKOzBEQUNOLDhEQUFDVCxLQUFHO2dEQUFDQyxTQUFTLEVBQUVwQixNQUFNLENBQUNXLEtBQUs7MERBQ3hCLDRFQUFDa0IsSUFBRTs7Ozt5REFBTTs7Ozs7cURBQ1A7MERBQ04sOERBQUNWLEtBQUc7Z0RBQUNDLFNBQVMsRUFBRXBCLE1BQU0sQ0FBQ1ksSUFBSTswREFDdkIsNEVBQUNPLEtBQUc7O3dEQUNILElBQUlXLElBQUksQ0FBQ2hCLElBQUksQ0FBQ0ksSUFBSSxDQUFDYSxRQUFRLENBQUNDLE1BQU0sRUFBRSxDQUFDLENBQUNDLGtCQUFrQixDQUFDLE9BQU8sRUFBRTs0REFDM0RDLEdBQUcsRUFBRSxTQUFTOzREQUNkQyxLQUFLLEVBQUUsT0FBTzt5REFDakIsQ0FBQzt3REFBQyxPQUNBO3dEQUFDckIsSUFBSSxDQUFDSSxJQUFJLENBQUNrQixVQUFVO3dEQUFDLFdBQVM7Ozs7Ozt5REFBTTs7Ozs7cURBQzFDOzs7Ozs7NkNBQ0o7Ozs7OztxQ0FDSTs7Ozs7aUNBQ0o7Ozs7Ozt5QkFDQTthQUNMLENBQUM7Ozs7O2lCQUVBOzs7OzthQUNKLENBQ1Q7Q0FDSjtHQS9ES3ZCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWlFZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJlbmRpbmcuanM/NDhhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgVHJlbmRpbmdBcnJvdyBmcm9tICcuLi9hc3NldHMvdHJlbmRpbmcucG5nJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXREb2MsIGRvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcbmltcG9ydCBwb3N0Y3NzIGZyb20gJ3Bvc3Rjc3MnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgY29udGFpbmVyOiAnbWItWzEwMHB4XSBwdC0xMCBwYi0xMCBwbC1bNXJlbV0gYm9yZGVyLWItMicsXG4gICAgZ3JpZDogJ2dyaWQgZ3JpZC1jb2xzLTMgZ2FwLTEwIHByLTEwIHctZnVsbCcsXG4gICAgY29udGVudDogJ2ZsZXgnLFxuICAgIGhlYWRpbmc6ICdmbGV4IGdhcC0zIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC14cyB0cmFja2luZy13aWRlc3QgcGItNScsXG4gICAgYXJyb3c6ICcnLFxuICAgIHBvc3RXcmFwOiAnZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInLFxuICAgIG9yZGVyOiAndGV4dC1ncmF5LTIwMCB0ZXh0LVsycmVtXSBmb250LWJvbGQgcHItNycsXG4gICAgYXV0aG9yOiAnZmxleCBpdGVtcy1jZW50ZXInLFxuICAgIGF1dGhvckltZzogJ3JvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgJyxcbiAgICBhdXRob3JOYW1lOiAncGwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICB0aXRsZTogJ2ZvbnQtYm9sZCBwdC0xJyxcbiAgICBpbmZvOiAnZm9udC10aGluIHRleHQteHMgcHQtMScsXG59XG5cbmNvbnN0IFRyZW5kaW5nID0gKHtwb3N0fSkgPT4ge1xuXG4gICAgY29uc3QgW2F1dGhvckRhdGEsIHNldEF1dGhvckRhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRBdXRob3JEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0QXV0aG9yRGF0YShcbiAgICAgICAgICAgICAgICAoYXdhaXQgIGdldERvYyhkb2MoZGIsICd1c2VycycsIHBvc3QuZGF0YS5hdXRob3IpKSkuZGF0YSgpKX1cblxuICAgICAgICAgICAgZ2V0QXV0aG9yRGF0YSgpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFycm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtUcmVuZGluZ0Fycm93fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH0gXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VHJlbmRpbmcgb24gbWVkaXVtPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj4wMTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFdyYXB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9ySW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXV0aG9yRGF0YT8uaW1hZ2VVcmx9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3JOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2F1dGhvckRhdGE/Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBvc3QuZGF0YS5wb3N0ZWRPbi50b0RhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCtyB7cG9zdC5kYXRhLnBvc3RMZW5ndGh9IG1pbiByZWFkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJlbmRpbmc7Il0sIm5hbWVzIjpbIkltYWdlIiwiVHJlbmRpbmdBcnJvdyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0RG9jIiwiZG9jIiwiZGIiLCJwb3N0Y3NzIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZ3JpZCIsImNvbnRlbnQiLCJoZWFkaW5nIiwiYXJyb3ciLCJwb3N0V3JhcCIsIm9yZGVyIiwiYXV0aG9yIiwiYXV0aG9ySW1nIiwiYXV0aG9yTmFtZSIsInRpdGxlIiwiaW5mbyIsIlRyZW5kaW5nIiwicG9zdCIsImF1dGhvckRhdGEiLCJzZXRBdXRob3JEYXRhIiwiZ2V0QXV0aG9yRGF0YSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJwb3N0cyIsIm1hcCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VVcmwiLCJoMSIsIm5hbWUiLCJoMyIsIkRhdGUiLCJwb3N0ZWRPbiIsInRvRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwicG9zdExlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Trending.js\n"));

/***/ })

});