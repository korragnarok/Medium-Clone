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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_author_avif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/author.avif */ \"./assets/author.avif\");\n/* harmony import */ var _assets_trending_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/trending.png */ \"./assets/trending.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar styles = {\n    container: \"mb-[100px] pt-10 pb-10 pl-[5rem] border-b-2\",\n    grid: \"grid grid-cols-3 gap-10 pr-10 w-full\",\n    content: \"flex\",\n    heading: \"flex gap-3 font-bold uppercase text-xs tracking-widest pb-5\",\n    arrow: \"\",\n    postWrap: \"flex flex-col items-center\",\n    order: \"text-gray-200 text-[2rem] font-bold pr-7\",\n    author: \"flex items-center\",\n    authorImg: \"rounded-full object-cover \",\n    authorName: \"pl-2 text-sm font-medium\",\n    title: \"font-bold pt-1\",\n    info: \"font-thin text-xs pt-1\"\n};\nvar Trending = function(param) {\n    var post = param.post;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null), authorData = ref[0], setAuthorData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        var getAuthorData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = setAuthorData;\n                            _ctx.next = 3;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_6__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_7__.db, \"users\", post.data.author));\n                        case 3:\n                            _ctx.t1 = _ctx.sent.data();\n                            (0, _ctx.t0)(_ctx.t1, \"\\uD83D\\uDE0E\");\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getAuthorData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getAuthorData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: styles.container,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: styles.heading,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        className: styles.arrow,\n                        src: _assets_trending_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        width: 20,\n                        height: 20\n                    }, void 0, false, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: \"Trending on medium\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: styles.grid,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: styles.content,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: styles.order,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: \"01\"\n                            }, void 0, false, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 50,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                            lineNumber: 49,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: styles.postWrap,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: styles.author,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            className: styles.authorImg,\n                                            src: authorData === null || authorData === void 0 ? void 0 : authorData.imageUrl,\n                                            height: 30,\n                                            width: 30\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 25\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            className: styles.authorName,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                                children: authorData === null || authorData === void 0 ? void 0 : authorData.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 29\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 25\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: styles.title,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                        children: post.data.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 21\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: styles.info,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: [\n                                            new Date(post.data.postedOn.toDate()).toLocaleDateString(\"en-US\", {\n                                                day: \"numeric\",\n                                                month: \"short\"\n                                            }),\n                                            \"\\xb7 \",\n                                            post.data.postLength,\n                                            \" min read\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 25\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, _this);\n};\n_s(Trending, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Trending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trending);\nvar _c;\n$RefreshReg$(_c, \"Trending\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxDQUFnQixHQUFoQkEsVUFBVSxDQUFFVyxJQUFJOzs7OztxREFBTTs7Ozs7aURBQ3pCOzs7Ozs7eUNBQ0o7OENBQ04sOERBQUNQLEtBQUc7b0NBQUNDLFNBQVMsRUFBRXBCLE1BQU0sQ0FBQ1csS0FBSzs4Q0FDeEIsNEVBQUNnQixJQUFFO2tEQUFFYixJQUFJLENBQUNJLElBQUksQ0FBQ1AsS0FBSzs7Ozs7NkNBQU07Ozs7O3lDQUN4Qjs4Q0FDTiw4REFBQ1EsS0FBRztvQ0FBQ0MsU0FBUyxFQUFFcEIsTUFBTSxDQUFDWSxJQUFJOzhDQUN2Qiw0RUFBQ08sS0FBRzs7NENBQ0gsSUFBSVMsSUFBSSxDQUFDZCxJQUFJLENBQUNJLElBQUksQ0FBQ1csUUFBUSxDQUFDQyxNQUFNLEVBQUUsQ0FBQyxDQUFDQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7Z0RBQzNEQyxHQUFHLEVBQUUsU0FBUztnREFDZEMsS0FBSyxFQUFFLE9BQU87NkNBQ2pCLENBQUM7NENBQUMsT0FDQTs0Q0FBQ25CLElBQUksQ0FBQ0ksSUFBSSxDQUFDZ0IsVUFBVTs0Q0FBQyxXQUFTOzs7Ozs7NkNBQU07Ozs7O3lDQUMxQzs7Ozs7O2lDQUNKOzs7Ozs7eUJBQ0o7Ozs7O3FCQUNBOzs7Ozs7YUFFSixDQUNUO0NBQ0o7R0ExREtyQixRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUE0RGQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RyZW5kaW5nLmpzPzQ4YWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IEF1dGhvciBmcm9tICcuLi9hc3NldHMvYXV0aG9yLmF2aWYnO1xuaW1wb3J0IFRyZW5kaW5nQXJyb3cgZnJvbSAnLi4vYXNzZXRzL3RyZW5kaW5nLnBuZyc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RG9jLCBkb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBjb250YWluZXI6ICdtYi1bMTAwcHhdIHB0LTEwIHBiLTEwIHBsLVs1cmVtXSBib3JkZXItYi0yJyxcbiAgICBncmlkOiAnZ3JpZCBncmlkLWNvbHMtMyBnYXAtMTAgcHItMTAgdy1mdWxsJyxcbiAgICBjb250ZW50OiAnZmxleCcsXG4gICAgaGVhZGluZzogJ2ZsZXggZ2FwLTMgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXhzIHRyYWNraW5nLXdpZGVzdCBwYi01JyxcbiAgICBhcnJvdzogJycsXG4gICAgcG9zdFdyYXA6ICdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcicsXG4gICAgb3JkZXI6ICd0ZXh0LWdyYXktMjAwIHRleHQtWzJyZW1dIGZvbnQtYm9sZCBwci03JyxcbiAgICBhdXRob3I6ICdmbGV4IGl0ZW1zLWNlbnRlcicsXG4gICAgYXV0aG9ySW1nOiAncm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciAnLFxuICAgIGF1dGhvck5hbWU6ICdwbC0yIHRleHQtc20gZm9udC1tZWRpdW0nLFxuICAgIHRpdGxlOiAnZm9udC1ib2xkIHB0LTEnLFxuICAgIGluZm86ICdmb250LXRoaW4gdGV4dC14cyBwdC0xJyxcbn1cblxuY29uc3QgVHJlbmRpbmcgPSAoe3Bvc3R9KSA9PiB7XG5cbiAgICBjb25zdCBbYXV0aG9yRGF0YSwgc2V0QXV0aG9yRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldEF1dGhvckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRob3JEYXRhKFxuICAgICAgICAgICAgICAgIChhd2FpdCAgZ2V0RG9jKGRvYyhkYiwgJ3VzZXJzJywgcG9zdC5kYXRhLmF1dGhvcikpKS5kYXRhKCksICfwn5iOJ1xuICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgZ2V0QXV0aG9yRGF0YSgpO1xuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17VHJlbmRpbmdBcnJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9IFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRyZW5kaW5nIG9uIG1lZGl1bTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+MDE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RXcmFwfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvckltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2F1dGhvckRhdGE/LmltYWdlVXJsfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnthdXRob3JEYXRhPy5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPntwb3N0LmRhdGEudGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBvc3QuZGF0YS5wb3N0ZWRPbi50b0RhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCtyB7cG9zdC5kYXRhLnBvc3RMZW5ndGh9IG1pbiByZWFkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJlbmRpbmc7Il0sIm5hbWVzIjpbIkltYWdlIiwiQXV0aG9yIiwiVHJlbmRpbmdBcnJvdyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZ2V0RG9jIiwiZG9jIiwiZGIiLCJzdHlsZXMiLCJjb250YWluZXIiLCJncmlkIiwiY29udGVudCIsImhlYWRpbmciLCJhcnJvdyIsInBvc3RXcmFwIiwib3JkZXIiLCJhdXRob3IiLCJhdXRob3JJbWciLCJhdXRob3JOYW1lIiwidGl0bGUiLCJpbmZvIiwiVHJlbmRpbmciLCJwb3N0IiwiYXV0aG9yRGF0YSIsInNldEF1dGhvckRhdGEiLCJnZXRBdXRob3JEYXRhIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiaW1hZ2VVcmwiLCJoMSIsIm5hbWUiLCJoMyIsIkRhdGUiLCJwb3N0ZWRPbiIsInRvRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwicG9zdExlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Trending.js\n"));

/***/ })

});