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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_trending_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/trending.png */ \"./assets/trending.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar styles = {\n    container: \"mb-[100px] pt-10 pb-10 pl-[5rem] border-b-2\",\n    grid: \"grid grid-cols-3 gap-10 pr-10 w-full\",\n    content: \"flex\",\n    heading: \"flex gap-3 font-bold uppercase text-xs tracking-widest pb-5\",\n    arrow: \"\",\n    postWrap: \"flex flex-col items-center\",\n    order: \"text-gray-200 text-[2rem] font-bold pr-7\",\n    author: \"flex items-center\",\n    authorImg: \"rounded-full object-cover \",\n    authorName: \"pl-2 text-sm font-medium\",\n    title: \"font-bold pt-1\",\n    info: \"font-thin text-xs pt-1\"\n};\nvar Trending = function(param) {\n    var post = param.post;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), authorData = ref[0], setAuthorData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var getAuthorData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = setAuthorData;\n                            _ctx.next = 3;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_6__.db, \"users\", post.data.author));\n                        case 3:\n                            _ctx.t1 = _ctx.sent.data();\n                            (0, _ctx.t0)(_ctx.t1);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getAuthorData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getAuthorData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: styles.heading,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: styles.arrow,\n                            src: _assets_trending_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            width: 20,\n                            height: 20\n                        }, void 0, false, {\n                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: \"Trending on medium\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: styles.grid,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: styles.content,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: styles.order,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: \"01\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: styles.postWrap,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: styles.author,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                className: styles.authorImg,\n                                                src: authorData === null || authorData === void 0 ? void 0 : authorData.imageUrl,\n                                                height: 30,\n                                                width: 30\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                lineNumber: 53,\n                                                columnNumber: 25\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                className: styles.authorName,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                                    children: authorData === null || authorData === void 0 ? void 0 : authorData.name\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 29\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                                lineNumber: 59,\n                                                columnNumber: 25\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: styles.title,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {}, void 0, false, {\n                                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 21\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: styles.info,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: [\n                                                new Date(post.data.postedOn.toDate()).toLocaleDateString(\"en-US\", {\n                                                    day: \"numeric\",\n                                                    month: \"short\"\n                                                }),\n                                                \"\\xb7 \",\n                                                post.data.postLength,\n                                                \" min read\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 21\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n            lineNumber: 36,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, _this);\n};\n_s(Trending, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Trending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trending);\nvar _c;\n$RefreshReg$(_c, \"Trending\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7eURBQU07Ozs7O3FEQUN6Qjs7Ozs7OzZDQUNKO2tEQUNOLDhEQUFDUCxLQUFHO3dDQUFDQyxTQUFTLEVBQUVwQixNQUFNLENBQUNXLEtBQUs7a0RBQ3hCLDRFQUFDZ0IsSUFBRTs7OztpREFBTTs7Ozs7NkNBQ1A7a0RBQ04sOERBQUNSLEtBQUc7d0NBQUNDLFNBQVMsRUFBRXBCLE1BQU0sQ0FBQ1ksSUFBSTtrREFDdkIsNEVBQUNPLEtBQUc7O2dEQUNILElBQUlTLElBQUksQ0FBQ2QsSUFBSSxDQUFDSSxJQUFJLENBQUNXLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFLENBQUMsQ0FBQ0Msa0JBQWtCLENBQUMsT0FBTyxFQUFFO29EQUMzREMsR0FBRyxFQUFFLFNBQVM7b0RBQ2RDLEtBQUssRUFBRSxPQUFPO2lEQUNqQixDQUFDO2dEQUFDLE9BQ0E7Z0RBQUNuQixJQUFJLENBQUNJLElBQUksQ0FBQ2dCLFVBQVU7Z0RBQUMsV0FBUzs7Ozs7O2lEQUFNOzs7Ozs2Q0FDMUM7Ozs7OztxQ0FDSjs7Ozs7OzZCQUNJOzs7Ozt5QkFDSjs7Ozs7O2lCQUNKOzs7OzthQUNKLENBQ1Q7Q0FDSjtHQTFES3JCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQTREZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJlbmRpbmcuanM/NDhhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgVHJlbmRpbmdBcnJvdyBmcm9tICcuLi9hc3NldHMvdHJlbmRpbmcucG5nJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXREb2MsIGRvYyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5pbXBvcnQgeyBkYiB9IGZyb20gJy4uL2ZpcmViYXNlJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICAgIGNvbnRhaW5lcjogJ21iLVsxMDBweF0gcHQtMTAgcGItMTAgcGwtWzVyZW1dIGJvcmRlci1iLTInLFxuICAgIGdyaWQ6ICdncmlkIGdyaWQtY29scy0zIGdhcC0xMCBwci0xMCB3LWZ1bGwnLFxuICAgIGNvbnRlbnQ6ICdmbGV4JyxcbiAgICBoZWFkaW5nOiAnZmxleCBnYXAtMyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQteHMgdHJhY2tpbmctd2lkZXN0IHBiLTUnLFxuICAgIGFycm93OiAnJyxcbiAgICBwb3N0V3JhcDogJ2ZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyJyxcbiAgICBvcmRlcjogJ3RleHQtZ3JheS0yMDAgdGV4dC1bMnJlbV0gZm9udC1ib2xkIHByLTcnLFxuICAgIGF1dGhvcjogJ2ZsZXggaXRlbXMtY2VudGVyJyxcbiAgICBhdXRob3JJbWc6ICdyb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyICcsXG4gICAgYXV0aG9yTmFtZTogJ3BsLTIgdGV4dC1zbSBmb250LW1lZGl1bScsXG4gICAgdGl0bGU6ICdmb250LWJvbGQgcHQtMScsXG4gICAgaW5mbzogJ2ZvbnQtdGhpbiB0ZXh0LXhzIHB0LTEnLFxufVxuXG5jb25zdCBUcmVuZGluZyA9ICh7cG9zdH0pID0+IHtcblxuICAgIGNvbnN0IFthdXRob3JEYXRhLCBzZXRBdXRob3JEYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0QXV0aG9yRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNldEF1dGhvckRhdGEoXG4gICAgICAgICAgICAgICAgKGF3YWl0ICBnZXREb2MoZG9jKGRiLCAndXNlcnMnLCBwb3N0LmRhdGEuYXV0aG9yKSkpLmRhdGEoKSl9XG5cbiAgICAgICAgICAgIGdldEF1dGhvckRhdGEoKTtcbiAgICB9LCBbXSlcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17VHJlbmRpbmdBcnJvd31cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjB9IFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlRyZW5kaW5nIG9uIG1lZGl1bTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ncmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcmRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+MDE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RXcmFwfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvckltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2F1dGhvckRhdGE/LmltYWdlVXJsfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezMwfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yTmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnthdXRob3JEYXRhPy5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuZXcgRGF0ZShwb3N0LmRhdGEucG9zdGVkT24udG9EYXRlKCkpLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgwrcge3Bvc3QuZGF0YS5wb3N0TGVuZ3RofSBtaW4gcmVhZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRyZW5kaW5nOyJdLCJuYW1lcyI6WyJJbWFnZSIsIlRyZW5kaW5nQXJyb3ciLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldERvYyIsImRvYyIsImRiIiwic3R5bGVzIiwiY29udGFpbmVyIiwiZ3JpZCIsImNvbnRlbnQiLCJoZWFkaW5nIiwiYXJyb3ciLCJwb3N0V3JhcCIsIm9yZGVyIiwiYXV0aG9yIiwiYXV0aG9ySW1nIiwiYXV0aG9yTmFtZSIsInRpdGxlIiwiaW5mbyIsIlRyZW5kaW5nIiwicG9zdCIsImF1dGhvckRhdGEiLCJzZXRBdXRob3JEYXRhIiwiZ2V0QXV0aG9yRGF0YSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlVXJsIiwiaDEiLCJuYW1lIiwiaDMiLCJEYXRlIiwicG9zdGVkT24iLCJ0b0RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInBvc3RMZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Trending.js\n"));

/***/ })

});