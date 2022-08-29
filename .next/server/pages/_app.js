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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MediumContext\": () => (/* binding */ MediumContext),\n/* harmony export */   \"MediumProvider\": () => (/* binding */ MediumProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst MediumContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nconst MediumProvider = ({ children  })=>{\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const { 0: posts , 1: setPosts  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getUsers = async ()=>{\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"users\"));\n            setUsers(querySnapshot.docs.map((doc)=>{\n                return {\n                    id: doc.id,\n                    data: {\n                        ...doc.data()\n                    }\n                };\n            }));\n        };\n        getUsers();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const getPosts = async ()=>{\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_3__.db, \"articles\"));\n            setPosts(querySnapshot.docs.map((doc)=>{\n                return {\n                    id: doc.id,\n                    data: {\n                        body: doc.data().body,\n                        brief: doc.data().brief,\n                        catergory: doc.data().catergory,\n                        postLength: doc.data().postLength,\n                        bannerImg: doc.data().bannerImg,\n                        title: doc.data().title,\n                        // comments: doc.data().comments,\n                        postedOn: doc.data().postedOn,\n                        author: doc.data().author\n                    }\n                };\n            }));\n        };\n        getPosts();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MediumContext.Provider, {\n        value: {\n            posts,\n            users\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/kourtneycallahan/Documents/Builds/clones/medium-clone/Medium-Clone/context/MediumContext.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, undefined);\n};\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L01lZGl1bUNvbnRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFzRTtBQUNYO0FBQzFCO0FBR2pDLE1BQU1RLGFBQWEsaUJBQUdKLG9EQUFhLEVBQUU7QUFFckMsTUFBTUssY0FBYyxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDckMsTUFBTSxLQUFDQyxLQUFLLE1BQUVDLFFBQVEsTUFBSVAsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDdEMsTUFBTSxLQUFDUSxLQUFLLE1BQUVDLFFBQVEsTUFBSVQsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFdENDLGdEQUFTLENBQUMsSUFBTTtRQUNaLE1BQU1TLFFBQVEsR0FBRyxVQUFZO1lBQ3pCLE1BQU1DLGFBQWEsR0FBRyxNQUFNaEIsMkRBQU8sQ0FBQ0MsOERBQVUsQ0FBQ00seUNBQUUsRUFBRSxPQUFPLENBQUUsQ0FBQztZQUU3REssUUFBUSxDQUFDSSxhQUFhLENBQUNDLElBQUksQ0FBQ0MsR0FBRyxDQUFDZixDQUFBQSxHQUFHLEdBQUk7Z0JBQ25DLE9BQU87b0JBQ0hnQixFQUFFLEVBQUVoQixHQUFHLENBQUNnQixFQUFFO29CQUNWQyxJQUFJLEVBQUU7d0JBQ0YsR0FBR2pCLEdBQUcsQ0FBQ2lCLElBQUksRUFBRTtxQkFDaEI7aUJBQ0o7YUFDSixDQUFDLENBQUMsQ0FBQztTQUNQO1FBRURMLFFBQVEsRUFBRSxDQUFDO0tBRWQsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQVCxnREFBUyxDQUFDLElBQU07UUFDWixNQUFNZSxRQUFRLEdBQUcsVUFBWTtZQUN6QixNQUFNTCxhQUFhLEdBQUcsTUFBTWhCLDJEQUFPLENBQUNDLDhEQUFVLENBQUNNLHlDQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFFL0RPLFFBQVEsQ0FBQ0UsYUFBYSxDQUFDQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ2YsQ0FBQUEsR0FBRyxHQUFJO2dCQUNuQyxPQUFPO29CQUNIZ0IsRUFBRSxFQUFFaEIsR0FBRyxDQUFDZ0IsRUFBRTtvQkFDVkMsSUFBSSxFQUFFO3dCQUNGRSxJQUFJLEVBQUVuQixHQUFHLENBQUNpQixJQUFJLEVBQUUsQ0FBQ0UsSUFBSTt3QkFDckJDLEtBQUssRUFBRXBCLEdBQUcsQ0FBQ2lCLElBQUksRUFBRSxDQUFDRyxLQUFLO3dCQUN2QkMsU0FBUyxFQUFFckIsR0FBRyxDQUFDaUIsSUFBSSxFQUFFLENBQUNJLFNBQVM7d0JBQy9CQyxVQUFVLEVBQUV0QixHQUFHLENBQUNpQixJQUFJLEVBQUUsQ0FBQ0ssVUFBVTt3QkFDakNDLFNBQVMsRUFBRXZCLEdBQUcsQ0FBQ2lCLElBQUksRUFBRSxDQUFDTSxTQUFTO3dCQUMvQkMsS0FBSyxFQUFFeEIsR0FBRyxDQUFDaUIsSUFBSSxFQUFFLENBQUNPLEtBQUs7d0JBQ3ZCLGlDQUFpQzt3QkFDakNDLFFBQVEsRUFBRXpCLEdBQUcsQ0FBQ2lCLElBQUksRUFBRSxDQUFDUSxRQUFRO3dCQUM3QkMsTUFBTSxFQUFFMUIsR0FBRyxDQUFDaUIsSUFBSSxFQUFFLENBQUNTLE1BQU07cUJBQzVCO2lCQUNKO2FBQ0osQ0FBQyxDQUFDLENBQUM7U0FDUDtRQUNEUixRQUFRLEVBQUUsQ0FBQztLQUNkLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFDSSw4REFBQ2IsYUFBYSxDQUFDc0IsUUFBUTtRQUNuQkMsS0FBSyxFQUFFO1lBQUVsQixLQUFLO1lBQUVGLEtBQUs7U0FBRTtrQkFDdEJELFFBQVE7Ozs7O2lCQUNZLENBQzVCO0NBRUo7QUFJd0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZWRpdW0vLi9jb250ZXh0L01lZGl1bUNvbnRleHQuanM/NDIxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREb2NzLCBjb2xsZWN0aW9uLCBzZXREb2MsIGRvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uL2ZpcmViYXNlXCI7XG5cblxuY29uc3QgTWVkaXVtQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuY29uc3QgTWVkaXVtUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gICAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRVc2VycyA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKGNvbGxlY3Rpb24oZGIsICd1c2VycycgKSk7XG4gICAgXG4gICAgICAgICAgICBzZXRVc2VycyhxdWVyeVNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRvYy5pZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZG9jLmRhdGEoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0VXNlcnMoKTtcblxuICAgIH0sIFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MoY29sbGVjdGlvbihkYiwgJ2FydGljbGVzJykpXG5cbiAgICAgICAgICAgIHNldFBvc3RzKHF1ZXJ5U25hcHNob3QuZG9jcy5tYXAoZG9jID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZG9jLmlkLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBkb2MuZGF0YSgpLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICBicmllZjogZG9jLmRhdGEoKS5icmllZixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVyZ29yeTogZG9jLmRhdGEoKS5jYXRlcmdvcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0TGVuZ3RoOiBkb2MuZGF0YSgpLnBvc3RMZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJJbWc6IGRvYy5kYXRhKCkuYmFubmVySW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRvYy5kYXRhKCkudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb21tZW50czogZG9jLmRhdGEoKS5jb21tZW50cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RlZE9uOiBkb2MuZGF0YSgpLnBvc3RlZE9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yOiBkb2MuZGF0YSgpLmF1dGhvcixcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBnZXRQb3N0cygpO1xuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNZWRpdW1Db250ZXh0LlByb3ZpZGVyIFxuICAgICAgICAgICAgdmFsdWU9e3sgcG9zdHMsIHVzZXJzIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L01lZGl1bUNvbnRleHQuUHJvdmlkZXI+XG4gICAgKVxuXG59O1xuXG5cblxuZXhwb3J0IHsgTWVkaXVtQ29udGV4dCwgTWVkaXVtUHJvdmlkZXIgfTsiXSwibmFtZXMiOlsiZ2V0RG9jcyIsImNvbGxlY3Rpb24iLCJzZXREb2MiLCJkb2MiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYiIsIk1lZGl1bUNvbnRleHQiLCJNZWRpdW1Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlcnMiLCJzZXRVc2VycyIsInBvc3RzIiwic2V0UG9zdHMiLCJnZXRVc2VycyIsInF1ZXJ5U25hcHNob3QiLCJkb2NzIiwibWFwIiwiaWQiLCJkYXRhIiwiZ2V0UG9zdHMiLCJib2R5IiwiYnJpZWYiLCJjYXRlcmdvcnkiLCJwb3N0TGVuZ3RoIiwiYmFubmVySW1nIiwidGl0bGUiLCJwb3N0ZWRPbiIsImF1dGhvciIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/MediumContext.js\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"provider\": () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyC1rJLG-pluegpu52YsV6xT4QJgERqxM-k\",\n    authDomain: \"medium-clone-48268.firebaseapp.com\",\n    projectId: \"medium-clone-48268\",\n    storageBucket: \"medium-clone-48268.appspot.com\",\n    messagingSenderId: \"979506769321\",\n    appId: \"1:979506769321:web:94959a05bdcc24284a68b8\",\n    measurementId: \"G-48ZNG1QF7W\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNkM7QUFDTDtBQUNXO0FBQ0Q7QUFFbEQsTUFBTUksY0FBYyxHQUFHO0lBQ3JCQyxNQUFNLEVBQUUseUNBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsb0NBQW9DO0lBQ2hEQyxTQUFTLEVBQUUsb0JBQW9CO0lBQy9CQyxhQUFhLEVBQUUsZ0NBQWdDO0lBQy9DQyxpQkFBaUIsRUFBRSxjQUFjO0lBQ2pDQyxLQUFLLEVBQUUsMkNBQTJDO0lBQ2xEQyxhQUFhLEVBQUUsY0FBYztDQUM5QjtBQUVELE1BQU1DLEdBQUcsR0FBR1osMkRBQWEsQ0FBQ0ksY0FBYyxDQUFDO0FBQ3pDLE1BQU1TLElBQUksR0FBR1osc0RBQU8sQ0FBQ1csR0FBRyxDQUFDO0FBQ3pCLE1BQU1FLFFBQVEsR0FBRyxJQUFJWiw2REFBa0IsRUFBRTtBQUN6QyxNQUFNYSxFQUFFLEdBQUdaLGdFQUFZLENBQUNTLEdBQUcsQ0FBQztBQUVFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lDMXJKTEctcGx1ZWdwdTUyWXNWNnhUNFFKZ0VScXhNLWtcIixcbiAgYXV0aERvbWFpbjogXCJtZWRpdW0tY2xvbmUtNDgyNjguZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJtZWRpdW0tY2xvbmUtNDgyNjhcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJtZWRpdW0tY2xvbmUtNDgyNjguYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiOTc5NTA2NzY5MzIxXCIsXG4gIGFwcElkOiBcIjE6OTc5NTA2NzY5MzIxOndlYjo5NDk1OWEwNWJkY2MyNDI4NGE2OGI4XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy00OFpORzFRRjdXXCJcbn07XG5cbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcbmNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcblxuZXhwb3J0IHsgYXV0aCwgcHJvdmlkZXIsIGRiIH07Il0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiZ2V0RmlyZXN0b3JlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYXV0aCIsInByb3ZpZGVyIiwiZGIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase.js\n");

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