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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Banner */ \"./components/Banner.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ \"./pages/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_trending_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/trending.png */ \"./assets/trending.png\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _components_Trending__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Trending */ \"./components/Trending.js\");\n/* harmony import */ var _context_MediumContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/MediumContext */ \"./context/MediumContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar styles = {\n    container: \"grid grid-cols-3 gap-y-5 pr-[8rem] w-full mb-[100px] pt-10 pb-10 pl-[1rem] border-b-2\",\n    heading: \"flex gap-3 font-bold uppercase text-xs tracking-widest pt-3 pl-[2rem]\"\n};\nfunction Home() {\n    var _this = this;\n    _s();\n    var posts = (0,react__WEBPACK_IMPORTED_MODULE_9__.useContext)(_context_MediumContext__WEBPACK_IMPORTED_MODULE_8__.MediumContext).posts;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]), tar = ref[0], settar = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(function() {\n        settar(posts.slice(0, 6));\n    }, [\n        posts\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styles.heading,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: styles.arrow,\n                        src: _assets_trending_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        width: 20,\n                        height: 20\n                    }, void 0, false, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"Trending on medium\"\n                    }, void 0, false, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/index.js\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styles.container,\n                children: tar.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Trending__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        post: post\n                    }, post.id, false, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: posts.map(function(post) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        post: post\n                    }, post.id, false, {\n                        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/index.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/index.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"gczonIRydEo5lkfJjZ/AQJMD+qg=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQztBQUMvQjtBQUNvQjtBQUNvQjtBQUNUO0FBQ0E7QUFDSTtBQUNXO0FBQ0Q7QUFFeEQsSUFBTVUsTUFBTSxHQUFHO0lBQ1hDLFNBQVMsRUFBRSx1RkFBdUY7SUFDbEdDLE9BQU8sRUFBRSx1RUFBdUU7Q0FDbkY7QUFFYyxTQUFTQyxJQUFJLEdBQUc7OztJQUM3QixJQUFNLEtBQU8sR0FBS04saURBQVUsQ0FBQ0QsaUVBQWEsQ0FBQyxDQUFuQ1EsS0FBSztJQUVaLElBQXFCTCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQTFCTSxHQUFHLEdBQVdOLEdBQVksR0FBdkIsRUFBQ08sTUFBTSxHQUFJUCxHQUFZLEdBQWhCO0lBQ2hCRCxnREFBUyxDQUFDLFdBQU07UUFDaEJRLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3pCLEVBQUU7UUFBQ0gsS0FBSztLQUFDLENBQUMsQ0FBQztJQUVaLHFCQUNFLDhEQUFDSSxLQUFHOzswQkFDRiw4REFBQ2YsMERBQU07Ozs7b0JBQUc7MEJBQ1YsOERBQUNILDBEQUFNOzs7O29CQUFHOzBCQUNWLDhEQUFDa0IsS0FBRztnQkFBQ0MsU0FBUyxFQUFFVCxNQUFNLENBQUNFLE9BQU87O2tDQUMxQiw4REFBQ1gsbURBQUs7d0JBQUNrQixTQUFTLEVBQUVULE1BQU0sQ0FBQ1UsS0FBSzt3QkFBRUMsR0FBRyxFQUFFbkIsNERBQWE7d0JBQUVvQixLQUFLLEVBQUUsRUFBRTt3QkFBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7OzRCQUFJO2tDQUM3RSw4REFBQ0wsS0FBRztrQ0FBQyxvQkFBa0I7Ozs7OzRCQUFNOzs7Ozs7b0JBQzNCOzBCQUNOLDhEQUFDQSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVULE1BQU0sQ0FBQ0MsU0FBUzswQkFDN0JJLEdBQUcsQ0FBQ1MsR0FBRyxDQUFDLFNBQUNDLElBQUk7eUNBQ1osOERBQUNwQiw0REFBUTt3QkFBQ29CLElBQUksRUFBRUEsSUFBSTt1QkFBT0EsSUFBSSxDQUFDQyxFQUFFOzs7OzZCQUFHO2lCQUN0QyxDQUFDOzs7OztvQkFDRTswQkFDTiw4REFBQ1IsS0FBRzswQkFDREosS0FBSyxDQUFDVSxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5Q0FDZCw4REFBQ3JCLDREQUFJO3dCQUFDcUIsSUFBSSxFQUFFQSxJQUFJO3VCQUFPQSxJQUFJLENBQUNDLEVBQUU7Ozs7NkJBQUc7aUJBQ2xDLENBQUM7Ozs7O29CQUNFOzs7Ozs7WUFDRixDQUNQO0NBQ0Y7R0E1QnVCYixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvQmFubmVyJztcbmltcG9ydCAnLi8nXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgVHJlbmRpbmdBcnJvdyBmcm9tICcuLi9hc3NldHMvdHJlbmRpbmcucG5nJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0Q2FyZCc7XG5pbXBvcnQgVHJlbmRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9UcmVuZGluZyc7XG5pbXBvcnQgeyBNZWRpdW1Db250ZXh0IH0gZnJvbSAnLi4vY29udGV4dC9NZWRpdW1Db250ZXh0JztcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBjb250YWluZXI6ICdncmlkIGdyaWQtY29scy0zIGdhcC15LTUgcHItWzhyZW1dIHctZnVsbCBtYi1bMTAwcHhdIHB0LTEwIHBiLTEwIHBsLVsxcmVtXSBib3JkZXItYi0yJyxcbiAgICBoZWFkaW5nOiAnZmxleCBnYXAtMyBmb250LWJvbGQgdXBwZXJjYXNlIHRleHQteHMgdHJhY2tpbmctd2lkZXN0IHB0LTMgcGwtWzJyZW1dJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBwb3N0cyB9ID0gdXNlQ29udGV4dChNZWRpdW1Db250ZXh0KTtcblxuICAgY29uc3QgW3RhcixzZXR0YXJdID0gdXNlU3RhdGUoW10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0dGFyKHBvc3RzLnNsaWNlKDAsNikpXG4gIH0sIFtwb3N0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxCYW5uZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGluZ30+XG4gICAgICAgICAgPEltYWdlIGNsYXNzTmFtZT17c3R5bGVzLmFycm93fSBzcmM9e1RyZW5kaW5nQXJyb3d9IHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICA8ZGl2PlRyZW5kaW5nIG9uIG1lZGl1bTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHt0YXIubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgPFRyZW5kaW5nIHBvc3Q9e3Bvc3R9IGtleT17cG9zdC5pZH0vPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgIDxQb3N0IHBvc3Q9e3Bvc3R9IGtleT17cG9zdC5pZH0vPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PiAgIFxuICApXG59XG4iXSwibmFtZXMiOlsiQmFubmVyIiwiSW1hZ2UiLCJUcmVuZGluZ0Fycm93IiwiSGVhZGVyIiwiUG9zdCIsIlRyZW5kaW5nIiwiTWVkaXVtQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImNvbnRhaW5lciIsImhlYWRpbmciLCJIb21lIiwicG9zdHMiLCJ0YXIiLCJzZXR0YXIiLCJzbGljZSIsImRpdiIsImNsYXNzTmFtZSIsImFycm93Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJtYXAiLCJwb3N0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});