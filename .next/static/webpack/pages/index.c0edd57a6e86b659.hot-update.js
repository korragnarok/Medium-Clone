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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar styles = {\n    content: \"flex\",\n    postWrap: \"flex flex-col items-center\",\n    order: \"text-gray-200 text-[2rem] font-bold pr-7\",\n    author: \"flex items-center\",\n    authorImg: \"rounded-full object-cover \",\n    authorName: \"pl-2 text-sm font-medium\",\n    title: \"font-bold pt-1\",\n    info: \"font-thin text-xs pt-1\"\n};\nvar Trending = function(param) {\n    var post = param.post;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), authorData = ref[0], setAuthorData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var getAuthorData = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.t0 = setAuthorData;\n                            _ctx.next = 3;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\", post.data.author));\n                        case 3:\n                            _ctx.t1 = _ctx.sent.data();\n                            (0, _ctx.t0)(_ctx.t1);\n                        case 5:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getAuthorData() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getAuthorData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: styles.grid,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: styles.content,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: styles.order,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: \"01\"\n                        }, void 0, false, {\n                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: styles.postWrap,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: styles.author,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        className: styles.authorImg,\n                                        src: authorData === null || authorData === void 0 ? void 0 : authorData.imageUrl,\n                                        height: 30,\n                                        width: 30\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: styles.authorName,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                                            children: authorData === null || authorData === void 0 ? void 0 : authorData.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 29\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: styles.title,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {}, void 0, false, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: styles.info,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    children: [\n                                        new Date(post.data.postedOn.toDate()).toLocaleDateString(\"en-US\", {\n                                            day: \"numeric\",\n                                            month: \"short\"\n                                        }),\n                                        \"\\xb7 \",\n                                        post.data.postLength,\n                                        \" min read\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 25\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/components/Trending.js\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, _this);\n};\n_s(Trending, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Trending;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Trending);\nvar _c;\n$RefreshReg$(_c, \"Trending\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUksQ0FBQ0ksSUFBSSxDQUFDaUIsVUFBVTt3Q0FBQyxXQUFTOzs7Ozs7eUNBQU07Ozs7O3FDQUMxQzs7Ozs7OzZCQUNKOzs7Ozs7cUJBQ0k7Ozs7O2lCQUNKOzs7OzthQUNKLENBQ2I7Q0FDSjtHQS9DS3RCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQWlEZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJlbmRpbmcuanM/NDhhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RG9jLCBkb2MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuaW1wb3J0IHsgZGIgfSBmcm9tICcuLi9maXJlYmFzZSc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBjb250ZW50OiAnZmxleCcsXG4gICAgcG9zdFdyYXA6ICdmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlcicsXG4gICAgb3JkZXI6ICd0ZXh0LWdyYXktMjAwIHRleHQtWzJyZW1dIGZvbnQtYm9sZCBwci03JyxcbiAgICBhdXRob3I6ICdmbGV4IGl0ZW1zLWNlbnRlcicsXG4gICAgYXV0aG9ySW1nOiAncm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlciAnLFxuICAgIGF1dGhvck5hbWU6ICdwbC0yIHRleHQtc20gZm9udC1tZWRpdW0nLFxuICAgIHRpdGxlOiAnZm9udC1ib2xkIHB0LTEnLFxuICAgIGluZm86ICdmb250LXRoaW4gdGV4dC14cyBwdC0xJyxcbn1cblxuY29uc3QgVHJlbmRpbmcgPSAoe3Bvc3R9KSA9PiB7XG5cbiAgICBjb25zdCBbYXV0aG9yRGF0YSwgc2V0QXV0aG9yRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldEF1dGhvckRhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBzZXRBdXRob3JEYXRhKFxuICAgICAgICAgICAgICAgIChhd2FpdCAgZ2V0RG9jKGRvYyhkYiwgJ3VzZXJzJywgcG9zdC5kYXRhLmF1dGhvcikpKS5kYXRhKCkpfVxuXG4gICAgICAgICAgICBnZXRBdXRob3JEYXRhKCk7XG4gICAgfSwgW10pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9yZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj4wMTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFdyYXB9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9ySW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YXV0aG9yRGF0YT8uaW1hZ2VVcmx9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH0gXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3JOYW1lfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2F1dGhvckRhdGE/Lm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAge25ldyBEYXRlKHBvc3QuZGF0YS5wb3N0ZWRPbi50b0RhdGUoKSkudG9Mb2NhbGVEYXRlU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICDCtyB7cG9zdC5kYXRhLnBvc3RMZW5ndGh9IG1pbiByZWFkPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmVuZGluZzsiXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImdldERvYyIsImRvYyIsImRiIiwic3R5bGVzIiwiY29udGVudCIsInBvc3RXcmFwIiwib3JkZXIiLCJhdXRob3IiLCJhdXRob3JJbWciLCJhdXRob3JOYW1lIiwidGl0bGUiLCJpbmZvIiwiVHJlbmRpbmciLCJwb3N0IiwiYXV0aG9yRGF0YSIsInNldEF1dGhvckRhdGEiLCJnZXRBdXRob3JEYXRhIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImdyaWQiLCJzcmMiLCJpbWFnZVVybCIsImhlaWdodCIsIndpZHRoIiwiaDEiLCJuYW1lIiwiaDMiLCJEYXRlIiwicG9zdGVkT24iLCJ0b0RhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJkYXkiLCJtb250aCIsInBvc3RMZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Trending.js\n"));

/***/ })

});