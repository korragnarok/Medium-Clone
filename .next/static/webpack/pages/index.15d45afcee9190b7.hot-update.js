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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_author_avif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/author.avif */ \"./assets/author.avif\");\n/* harmony import */ var _assets_trending_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/trending.png */ \"./assets/trending.png\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar styles = {\n    content: \"flex ml-[8.5rem]\",\n    heading: \"flex gap-3 font-bold uppercase text-xs tracking-widest pb-5\",\n    arrow: \"\",\n    postWrap: \"flex flex-col \",\n    order: \"text-gray-200 text-[2rem] font-bold pr-7\",\n    author: \"flex items-center\",\n    authorImg: \"rounded-full object-cover \",\n    authorName: \"pl-2 text-sm font-medium\",\n    title: \"font-bold pt-1\",\n    info: \"flex gap-5 font-thin text-xs pt-1\"\n};\nvar Trending = function(param) {\n    var post = param.post;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), authorData = ref[0], setAuthorData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var getAuthorData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = setAuthorData;\n                            _ctx.next = 3;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, \"users\", post.data.author));\n                        case 3:\n                            _ctx.t1 = _ctx.sent.data();\n                            (0, _ctx.t0)(_ctx.t1, \"\\uD83D\\uDE0E\");\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getAuthorData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        setdat = authorData.slice(0, 6);\n        getAuthorData();\n    }, [\n        post\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: styles.grid,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: styles.content,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: styles.order,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: post.data.number\n                        }, void 0, false, {\n                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: styles.postWrap,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: styles.author,\n                                children: [\n                                    (authorData === null || authorData === void 0 ? void 0 : authorData.imageUrl) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        className: styles.authorImg,\n                                        src: authorData === null || authorData === void 0 ? void 0 : authorData.imageUrl,\n                                        height: 50,\n                                        width: 50\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: styles.authorName,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                            children: authorData === null || authorData === void 0 ? void 0 : authorData.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 29\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: styles.title,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                    children: post.data.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 54,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: styles.info,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        new Date(post.data.postedOn.toDate()).toLocaleDateString(\"en-US\", {\n                                            day: \"numeric\",\n                                            month: \"short\"\n                                        }),\n                                        \" \",\n                                        \" • \",\n                                        \" \",\n                                        post.data.postLength,\n                                        \" min read\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 57,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, _this);\n};\n_s(Trending, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Trending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trending);\nvar _c;\n$RefreshReg$(_c, \"Trending\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ1AsS0FBSzs7Ozs7eUNBQU07Ozs7O3FDQUN4QjswQ0FDTiw4REFBQ1UsS0FBRztnQ0FBQ0MsU0FBUyxFQUFFcEIsTUFBTSxDQUFDVSxJQUFJOzBDQUN2Qiw0RUFBQ1MsS0FBRzs7d0NBQ0gsSUFBSVcsSUFBSSxDQUFDbEIsSUFBSSxDQUFDSSxJQUFJLENBQUNlLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFLENBQUMsQ0FBQ0Msa0JBQWtCLENBQUMsT0FBTyxFQUFFOzRDQUMzREMsR0FBRyxFQUFFLFNBQVM7NENBQ2RDLEtBQUssRUFBRSxPQUFPO3lDQUNqQixDQUFDO3dDQUNKLEdBQUc7d0NBQUMsS0FBRzt3Q0FBQyxHQUFHO3dDQUNYdkIsSUFBSSxDQUFDSSxJQUFJLENBQUNvQixVQUFVO3dDQUFDLFdBQVM7Ozs7Ozt5Q0FBTTs7Ozs7cUNBQ3BDOzs7Ozs7NkJBQ0o7Ozs7OztxQkFDSjs7Ozs7aUJBQ0E7Ozs7O2FBQ0osQ0FDVDtDQUNKO0dBbERLekIsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBb0RkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UcmVuZGluZy5qcz80OGFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRvYywgZ2V0RG9jIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXV0aG9yIGZyb20gJy4uL2Fzc2V0cy9hdXRob3IuYXZpZic7XG5pbXBvcnQgVHJlbmRpbmdBcnJvdyBmcm9tICcuLi9hc3NldHMvdHJlbmRpbmcucG5nJztcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi4vZmlyZWJhc2UnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgY29udGVudDogJ2ZsZXggbWwtWzguNXJlbV0nLFxuICAgIGhlYWRpbmc6ICdmbGV4IGdhcC0zIGZvbnQtYm9sZCB1cHBlcmNhc2UgdGV4dC14cyB0cmFja2luZy13aWRlc3QgcGItNScsXG4gICAgYXJyb3c6ICcnLFxuICAgIHBvc3RXcmFwOiAnZmxleCBmbGV4LWNvbCAnLFxuICAgIG9yZGVyOiAndGV4dC1ncmF5LTIwMCB0ZXh0LVsycmVtXSBmb250LWJvbGQgcHItNycsXG4gICAgYXV0aG9yOiAnZmxleCBpdGVtcy1jZW50ZXInLFxuICAgIGF1dGhvckltZzogJ3JvdW5kZWQtZnVsbCBvYmplY3QtY292ZXIgJyxcbiAgICBhdXRob3JOYW1lOiAncGwtMiB0ZXh0LXNtIGZvbnQtbWVkaXVtJyxcbiAgICB0aXRsZTogJ2ZvbnQtYm9sZCBwdC0xJyxcbiAgICBpbmZvOiAnZmxleCBnYXAtNSBmb250LXRoaW4gdGV4dC14cyBwdC0xJyxcbn1cblxuY29uc3QgVHJlbmRpbmcgPSAoe3Bvc3R9KSA9PiB7XG5cbiAgICBjb25zdCBbYXV0aG9yRGF0YSwgc2V0QXV0aG9yRGF0YV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRBdXRob3JEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgc2V0QXV0aG9yRGF0YShcbiAgICAgICAgICAgICAgICAoYXdhaXQgIGdldERvYyhkb2MoZGIsICd1c2VycycsIHBvc3QuZGF0YS5hdXRob3IpKSkuZGF0YSgpLCAn8J+YjidcbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICBzZXRkYXQgPSBhdXRob3JEYXRhLnNsaWNlKDAsNilcbiAgICAgICAgICAgIGdldEF1dGhvckRhdGEoKTtcbiAgICB9LCBbcG9zdF0pXG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3Bvc3QuZGF0YS5udW1iZXJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0V3JhcH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT5cbiAgICAgICAgICAgICAgICAgICAge2F1dGhvckRhdGE/LmltYWdlVXJsICYmICggXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9ySW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXV0aG9yRGF0YT8uaW1hZ2VVcmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnthdXRob3JEYXRhPy5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntwb3N0LmRhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBvc3QuZGF0YS5wb3N0ZWRPbi50b0RhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHsnICd9IOKAoiB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LmRhdGEucG9zdExlbmd0aH0gbWluIHJlYWQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyZW5kaW5nOyJdLCJuYW1lcyI6WyJkb2MiLCJnZXREb2MiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXV0aG9yIiwiVHJlbmRpbmdBcnJvdyIsImRiIiwic3R5bGVzIiwiY29udGVudCIsImhlYWRpbmciLCJhcnJvdyIsInBvc3RXcmFwIiwib3JkZXIiLCJhdXRob3IiLCJhdXRob3JJbWciLCJhdXRob3JOYW1lIiwidGl0bGUiLCJpbmZvIiwiVHJlbmRpbmciLCJwb3N0IiwiYXV0aG9yRGF0YSIsInNldEF1dGhvckRhdGEiLCJnZXRBdXRob3JEYXRhIiwiZGF0YSIsInNldGRhdCIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZ3JpZCIsIm51bWJlciIsImltYWdlVXJsIiwic3JjIiwiaGVpZ2h0Iiwid2lkdGgiLCJoMSIsIm5hbWUiLCJoMyIsIkRhdGUiLCJwb3N0ZWRPbiIsInRvRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwicG9zdExlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Trending.js\n"));

/***/ })

});