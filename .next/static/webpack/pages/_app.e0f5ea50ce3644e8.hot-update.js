"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/MediumContext.js":
/*!**********************************!*\
  !*** ./context/MediumContext.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MediumContext\": function() { return /* binding */ MediumContext; },\n/* harmony export */   \"MediumProvider\": function() { return /* binding */ MediumProvider; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"../../../../../node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"../../../../../node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar MediumContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)();\nvar MediumProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), users = ref[0], setUsers = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), posts = ref1[0], setPosts = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), currentUser = ref2[0], setCurrentUser = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var getUsers = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var querySnapshot;\n                return _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\"));\n                        case 2:\n                            querySnapshot = _ctx.sent;\n                            setUsers(querySnapshot.docs.map(function(doc) {\n                                return {\n                                    id: doc.id,\n                                    data: (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({}, doc.data())\n                                };\n                                cons;\n                            }));\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getUsers() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getUsers();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var getPosts = function() {\n            var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                var querySnapshot;\n                return _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"articles\"));\n                        case 2:\n                            querySnapshot = _ctx.sent;\n                            setPosts(querySnapshot.docs.map(function(doc) {\n                                return {\n                                    id: doc.id,\n                                    data: {\n                                        body: doc.data().body,\n                                        brief: doc.data().brief,\n                                        category: doc.data().category,\n                                        postLength: doc.data().postLength,\n                                        thumbnail: doc.data().thumbnail,\n                                        title: doc.data().title,\n                                        // comments: doc.data().comments,\n                                        postedOn: doc.data().postedOn,\n                                        author: doc.data().author,\n                                        number: doc.data().number\n                                    }\n                                };\n                            }));\n                        case 4:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return function getPosts() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        getPosts();\n    }, []);\n    var addUserToFirebase = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {\n            return _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"users\", user.email), {\n                            email: user.email,\n                            name: user.displayName,\n                            imageUrl: user.photoURL,\n                            followerCount: 0\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function addUserToFirebase(user) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleUserAuth = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var userData, user;\n            return _Users_kourtneycallahan_Documents_Builds_clones_medium_clone_Medium_Clone_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_5__.auth, _firebase__WEBPACK_IMPORTED_MODULE_5__.provider);\n                    case 2:\n                        userData = _ctx.sent;\n                        user = userData.user;\n                        console.log(user, \"\\uD83E\\uDD29\");\n                        setCurrentUser(user);\n                        addUserToFirebase(user);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleUserAuth() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var limitPosts = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_5__.db, \"articles\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.orderBy)(\"number\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.limit)(6));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(MediumContext.Provider, {\n        value: {\n            posts: posts,\n            users: users,\n            handleUserAuth: handleUserAuth,\n            currentUser: currentUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/context/MediumContext.js\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, _this);\n};\n_s(MediumProvider, \"p1+XKO0R26EfrW/qVcmQfy+JVF4=\");\n_c = MediumProvider;\n\nvar _c;\n$RefreshReg$(_c, \"MediumProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVcsRUFBWEEsV0FBVztTQUFFO2tCQUNuREwsUUFBUTs7Ozs7YUFDWSxDQUM1QjtDQUVKO0dBNUVLRCxjQUFjO0FBQWRBLEtBQUFBLGNBQWM7QUFnRnFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvTWVkaXVtQ29udGV4dC5qcz80MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25JbldpdGhQb3B1cCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXREb2NzLCBjb2xsZWN0aW9uLCBzZXREb2MsIGRvYywgcXVlcnksIG9yZGVyQnksIGxpbWl0IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5cblxuXG5jb25zdCBNZWRpdW1Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBNZWRpdW1Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCAndXNlcnMnICkpO1xuICAgIFxuICAgICAgICAgICAgc2V0VXNlcnMocXVlcnlTbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFVzZXJzKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICdhcnRpY2xlcycpKVxuXG4gICAgICAgICAgICBzZXRQb3N0cyhxdWVyeVNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZG9jLmRhdGEoKS5ib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJpZWY6IGRvYy5kYXRhKCkuYnJpZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZG9jLmRhdGEoKS5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RMZW5ndGg6IGRvYy5kYXRhKCkucG9zdExlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDogZG9jLmRhdGEoKS50aHVtYm5haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbW1lbnRzOiBkb2MuZGF0YSgpLmNvbW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVkT246IGRvYy5kYXRhKCkucG9zdGVkT24sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGRvYy5kYXRhKCkuYXV0aG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiBkb2MuZGF0YSgpLm51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRQb3N0cygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGFkZFVzZXJUb0ZpcmViYXNlID0gYXN5bmMgdXNlciA9PiB7XG4gICAgICAgIGF3YWl0IHNldERvYyhkb2MoZGIsICd1c2VycycsIHVzZXIuZW1haWwpLCB7XG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBpbWFnZVVybDogdXNlci5waG90b1VSTCxcbiAgICAgICAgICAgIGZvbGxvd2VyQ291bnQ6IDBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVVc2VyQXV0aCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPWF3YWl0IHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJEYXRhLnVzZXJcbiAgICAgICAgY29uc29sZS5sb2coIHVzZXIsICfwn6SpJyk7XG4gICAgICAgIHNldEN1cnJlbnRVc2VyKHVzZXIpXG4gICAgICAgIGFkZFVzZXJUb0ZpcmViYXNlKHVzZXIpXG4gICAgfVxuXG4gICAgY29uc3QgbGltaXRQb3N0cyA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsICdhcnRpY2xlcycpLCBvcmRlckJ5KCdudW1iZXInLCAnZGVzYycpLCBsaW1pdCg2KSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVkaXVtQ29udGV4dC5Qcm92aWRlciBcbiAgICAgICAgICAgIHZhbHVlPXt7IHBvc3RzLCB1c2VycywgaGFuZGxlVXNlckF1dGgsIGN1cnJlbnRVc2VyIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01lZGl1bUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuXG59O1xuXG5cblxuZXhwb3J0IHsgTWVkaXVtQ29udGV4dCwgTWVkaXVtUHJvdmlkZXIgfTsiXSwibmFtZXMiOlsic2lnbkluV2l0aFBvcHVwIiwiZ2V0RG9jcyIsImNvbGxlY3Rpb24iLCJzZXREb2MiLCJkb2MiLCJxdWVyeSIsIm9yZGVyQnkiLCJsaW1pdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwiTWVkaXVtQ29udGV4dCIsIk1lZGl1bVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VycyIsInNldFVzZXJzIiwicG9zdHMiLCJzZXRQb3N0cyIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJnZXRVc2VycyIsInF1ZXJ5U25hcHNob3QiLCJkb2NzIiwibWFwIiwiaWQiLCJkYXRhIiwiY29ucyIsImdldFBvc3RzIiwiYm9keSIsImJyaWVmIiwiY2F0ZWdvcnkiLCJwb3N0TGVuZ3RoIiwidGh1bWJuYWlsIiwidGl0bGUiLCJwb3N0ZWRPbiIsImF1dGhvciIsIm51bWJlciIsImFkZFVzZXJUb0ZpcmViYXNlIiwidXNlciIsImVtYWlsIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiaW1hZ2VVcmwiLCJwaG90b1VSTCIsImZvbGxvd2VyQ291bnQiLCJoYW5kbGVVc2VyQXV0aCIsInVzZXJEYXRhIiwiY29uc29sZSIsImxvZyIsImxpbWl0UG9zdHMiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/MediumContext.js\n"));

/***/ })

});