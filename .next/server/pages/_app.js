/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/MediumContext.js":
/*!**********************************!*\
  !*** ./context/MediumContext.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MediumContext\": () => (/* binding */ MediumContext),\n/* harmony export */   \"MediumProvider\": () => (/* binding */ MediumProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, _firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst MediumContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)();\nconst MediumProvider = ({ children  })=>{\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getUsers = async ()=>{\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\"));\n            setUsers(querySnapshot.docs.map((doc)=>{\n                return {\n                    id: doc.id,\n                    data: {\n                        ...doc.data()\n                    }\n                };\n                cons;\n            }));\n        };\n        getUsers();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getPosts = async ()=>{\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"articles\"));\n            setPosts(querySnapshot.docs.map((doc)=>{\n                return {\n                    id: doc.id,\n                    data: {\n                        body: doc.data().body,\n                        brief: doc.data().brief,\n                        category: doc.data().category,\n                        postLength: doc.data().postLength,\n                        thumbnail: doc.data().thumbnail,\n                        title: doc.data().title,\n                        // comments: doc.data().comments,\n                        postedOn: doc.data().postedOn,\n                        author: doc.data().author,\n                        number: doc.data().number\n                    }\n                };\n            }));\n        };\n        getPosts();\n    }, []);\n    const addUserToFirebase = async (user)=>{\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"users\", user.email), {\n            email: user.email,\n            name: user.displayName,\n            imageUrl: user.photoURL,\n            followerCount: 0\n        });\n    };\n    const handleUserAuth = async ()=>{\n        const userData = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, _firebase__WEBPACK_IMPORTED_MODULE_4__.provider);\n        const user = userData.user;\n        console.log(user, \"\\uD83E\\uDD29\");\n        setCurrentUser(user);\n        addUserToFirebase(user);\n    };\n    const limitPosts = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_4__.db, \"articles\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.orderBy)(\"number\", \"desc\"), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.limit)(6));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MediumContext.Provider, {\n        value: {\n            posts,\n            users,\n            handleUserAuth,\n            currentUser\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/context/MediumContext.js\",\n        lineNumber: 80,\n        columnNumber: 9\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLEVBQUVKLElBQUksQ0FBQ0ssUUFBUTtZQUN2QkMsYUFBYSxFQUFFLENBQUM7U0FDbkIsQ0FBQztLQUNMO0lBRUQsTUFBTUMsY0FBYyxHQUFHLFVBQVk7UUFDL0IsTUFBTUMsUUFBUSxHQUFFLE1BQU1qRCw4REFBZSxDQUFDWSwyQ0FBSSxFQUFFQywrQ0FBUSxDQUFDO1FBQ3JELE1BQU00QixJQUFJLEdBQUdRLFFBQVEsQ0FBQ1IsSUFBSTtRQUMxQlMsT0FBTyxDQUFDQyxHQUFHLENBQUVWLElBQUksRUFBRSxjQUFHLENBQUMsQ0FBQztRQUN4Qm5CLGNBQWMsQ0FBQ21CLElBQUksQ0FBQztRQUNwQkQsaUJBQWlCLENBQUNDLElBQUksQ0FBQztLQUMxQjtJQUVELE1BQU1XLFVBQVUsR0FBRy9DLHlEQUFLLENBQUNILDhEQUFVLENBQUNTLHlDQUFFLEVBQUUsVUFBVSxDQUFDLEVBQUVMLDJEQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFQyx5REFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXpGLHFCQUNJLDhEQUFDTyxhQUFhLENBQUN1QyxRQUFRO1FBQ25CQyxLQUFLLEVBQUU7WUFBRW5DLEtBQUs7WUFBRUYsS0FBSztZQUFFK0IsY0FBYztZQUFFM0IsV0FBVztTQUFFO2tCQUNuREwsUUFBUTs7Ozs7aUJBQ1ksQ0FDNUI7Q0FFSjtBQUl3QyIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGl1bS8uL2NvbnRleHQvTWVkaXVtQ29udGV4dC5qcz80MjFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpZ25JbldpdGhQb3B1cCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXREb2NzLCBjb2xsZWN0aW9uLCBzZXREb2MsIGRvYywgcXVlcnksIG9yZGVyQnksIGxpbWl0IH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5cblxuXG5jb25zdCBNZWRpdW1Db250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBNZWRpdW1Qcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCAndXNlcnMnICkpO1xuICAgIFxuICAgICAgICAgICAgc2V0VXNlcnMocXVlcnlTbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBkb2MuaWQsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRvYy5kYXRhKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnNcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFVzZXJzKCk7XG5cbiAgICB9LCBbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICdhcnRpY2xlcycpKVxuXG4gICAgICAgICAgICBzZXRQb3N0cyhxdWVyeVNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogZG9jLmRhdGEoKS5ib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgYnJpZWY6IGRvYy5kYXRhKCkuYnJpZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogZG9jLmRhdGEoKS5jYXRlZ29yeSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RMZW5ndGg6IGRvYy5kYXRhKCkucG9zdExlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbDogZG9jLmRhdGEoKS50aHVtYm5haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZG9jLmRhdGEoKS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbW1lbnRzOiBkb2MuZGF0YSgpLmNvbW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVkT246IGRvYy5kYXRhKCkucG9zdGVkT24sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I6IGRvYy5kYXRhKCkuYXV0aG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiBkb2MuZGF0YSgpLm51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRQb3N0cygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IGFkZFVzZXJUb0ZpcmViYXNlID0gYXN5bmMgdXNlciA9PiB7XG4gICAgICAgIGF3YWl0IHNldERvYyhkb2MoZGIsICd1c2VycycsIHVzZXIuZW1haWwpLCB7XG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIG5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICBpbWFnZVVybDogdXNlci5waG90b1VSTCxcbiAgICAgICAgICAgIGZvbGxvd2VyQ291bnQ6IDBcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVVc2VyQXV0aCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdXNlckRhdGEgPWF3YWl0IHNpZ25JbldpdGhQb3B1cChhdXRoLCBwcm92aWRlcilcbiAgICAgICAgY29uc3QgdXNlciA9IHVzZXJEYXRhLnVzZXJcbiAgICAgICAgY29uc29sZS5sb2coIHVzZXIsICfwn6SpJyk7XG4gICAgICAgIHNldEN1cnJlbnRVc2VyKHVzZXIpXG4gICAgICAgIGFkZFVzZXJUb0ZpcmViYXNlKHVzZXIpXG4gICAgfVxuXG4gICAgY29uc3QgbGltaXRQb3N0cyA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsICdhcnRpY2xlcycpLCBvcmRlckJ5KCdudW1iZXInLCAnZGVzYycpLCBsaW1pdCg2KSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TWVkaXVtQ29udGV4dC5Qcm92aWRlciBcbiAgICAgICAgICAgIHZhbHVlPXt7IHBvc3RzLCB1c2VycywgaGFuZGxlVXNlckF1dGgsIGN1cnJlbnRVc2VyIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01lZGl1bUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuXG59O1xuXG5cblxuZXhwb3J0IHsgTWVkaXVtQ29udGV4dCwgTWVkaXVtUHJvdmlkZXIgfTsiXSwibmFtZXMiOlsic2lnbkluV2l0aFBvcHVwIiwiZ2V0RG9jcyIsImNvbGxlY3Rpb24iLCJzZXREb2MiLCJkb2MiLCJxdWVyeSIsIm9yZGVyQnkiLCJsaW1pdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRiIiwiYXV0aCIsInByb3ZpZGVyIiwiTWVkaXVtQ29udGV4dCIsIk1lZGl1bVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VycyIsInNldFVzZXJzIiwicG9zdHMiLCJzZXRQb3N0cyIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJnZXRVc2VycyIsInF1ZXJ5U25hcHNob3QiLCJkb2NzIiwibWFwIiwiaWQiLCJkYXRhIiwiY29ucyIsImdldFBvc3RzIiwiYm9keSIsImJyaWVmIiwiY2F0ZWdvcnkiLCJwb3N0TGVuZ3RoIiwidGh1bWJuYWlsIiwidGl0bGUiLCJwb3N0ZWRPbiIsImF1dGhvciIsIm51bWJlciIsImFkZFVzZXJUb0ZpcmViYXNlIiwidXNlciIsImVtYWlsIiwibmFtZSIsImRpc3BsYXlOYW1lIiwiaW1hZ2VVcmwiLCJwaG90b1VSTCIsImZvbGxvd2VyQ291bnQiLCJoYW5kbGVVc2VyQXV0aCIsInVzZXJEYXRhIiwiY29uc29sZSIsImxvZyIsImxpbWl0UG9zdHMiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/MediumContext.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"provider\": () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyC1rJLG-pluegpu52YsV6xT4QJgERqxM-k\",\n    authDomain: \"medium-clone-48268.firebaseapp.com\",\n    projectId: \"medium-clone-48268\",\n    storageBucket: \"medium-clone-48268.appspot.com\",\n    messagingSenderId: \"979506769321\",\n    appId: \"1:979506769321:web:94959a05bdcc24284a68b8\",\n    measurementId: \"G-48ZNG1QF7W\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkM7QUFDTDtBQUNXO0FBQ0Q7QUFHbEQsTUFBTUksY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsb0NBQW9DO0lBQ2hEQyxTQUFTLEVBQUUsb0JBQW9CO0lBQy9CQyxhQUFhLEVBQUUsZ0NBQWdDO0lBQy9DQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUVELE1BQU1DLEdBQUcsR0FBR1osMkRBQWEsQ0FBQ0ksY0FBYyxDQUFDO0FBQ3pDLE1BQU1TLElBQUksR0FBR1osc0RBQU8sQ0FBQ1csR0FBRyxDQUFDO0FBQ3pCLE1BQU1FLFFBQVEsR0FBRyxJQUFJWiw2REFBa0IsRUFBRTtBQUN6QyxNQUFNYSxFQUFFLEdBQUdaLGdFQUFZLENBQUNTLEdBQUcsQ0FBQztBQUVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUMxckpMRy1wbHVlZ3B1NTJZc1Y2eFQ0UUpnRVJxeE0ta1wiLFxuICBhdXRoRG9tYWluOiBcIm1lZGl1bS1jbG9uZS00ODI2OC5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcIm1lZGl1bS1jbG9uZS00ODI2OFwiLFxuICBzdG9yYWdlQnVja2V0OiBcIm1lZGl1bS1jbG9uZS00ODI2OC5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI5Nzk1MDY3NjkzMjFcIixcbiAgYXBwSWQ6IFwiMTo5Nzk1MDY3NjkzMjE6d2ViOjk0OTU5YTA1YmRjYzI0Mjg0YTY4YjhcIixcbiAgbWVhc3VyZW1lbnRJZDogXCJHLTQ4Wk5HMVFGN1dcIlxufTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5jb25zdCBhdXRoID0gZ2V0QXV0aChhcHApO1xuY29uc3QgcHJvdmlkZXIgPSBuZXcgR29vZ2xlQXV0aFByb3ZpZGVyKCk7XG5jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuXG5leHBvcnQgeyBhdXRoLCBwcm92aWRlciwgZGIgfTsiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9qZWN0SWQiLCJzdG9yYWdlQnVja2V0IiwibWVzc2FnaW5nU2VuZGVySWQiLCJhcHBJZCIsIm1lYXN1cmVtZW50SWQiLCJhcHAiLCJhdXRoIiwicHJvdmlkZXIiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_MediumContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/MediumContext */ \"./context/MediumContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_MediumContext__WEBPACK_IMPORTED_MODULE_2__]);\n_context_MediumContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_MediumContext__WEBPACK_IMPORTED_MODULE_2__.MediumProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 7\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQThCO0FBQzRCO0FBRTFELFNBQVNDLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNJLDhEQUFDSCxrRUFBYztrQkFDYiw0RUFBQ0UsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O2dCQUFJOzs7OztZQUNiLENBQ25CO0NBQ0g7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL21lZGl1bS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IE1lZGl1bVByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dC9NZWRpdW1Db250ZXh0JztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgICA8TWVkaXVtUHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTWVkaXVtUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiTWVkaXVtUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();