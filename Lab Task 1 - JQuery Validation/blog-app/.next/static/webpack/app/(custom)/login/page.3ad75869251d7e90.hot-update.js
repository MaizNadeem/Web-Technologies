"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(custom)/login/page",{

/***/ "(app-pages-browser)/./app/(custom)/login/page.jsx":
/*!*************************************!*\
  !*** ./app/(custom)/login/page.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nextui-org/button */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-KHVXTQA4.mjs\");\n/* harmony import */ var _nextui_org_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/input */ \"(app-pages-browser)/./node_modules/@nextui-org/input/dist/chunk-NDPHUITX.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"(app-pages-browser)/./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"(app-pages-browser)/./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ \"(app-pages-browser)/./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery-validation */ \"(app-pages-browser)/./node_modules/jquery-validation/dist/jquery.validate.js\");\n/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const handleLogin = ()=>{\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#loginForm\").submit();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#loginForm\").validate({\n            rules: {\n                emailInput: {\n                    required: true,\n                    email: true\n                },\n                passwordInput: {\n                    required: true,\n                    minlength: 8\n                }\n            },\n            messages: {\n                emailInput: {\n                    required: \"Please enter your email address\",\n                    email: \"Please enter a valid email address\"\n                },\n                passwordInput: {\n                    required: \"Please enter your password\",\n                    minlength: \"Password must be at least 8 characters long\"\n                }\n            },\n            submitHandler: function(form) {\n                if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(\"#loginForm\").valid()) {\n                    console.log(\"Form submitted\");\n                // You can add code here to handle form submission\n                // For example, send data to the server\n                } else {\n                    console.log(\"Form not submitted. Please check your inputs.\");\n                }\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex justify-center items-center h-[100vh]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-12 justify-center items-center bg-background-900 min-w-[400px] h-[90vh] rounded-xl\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-3xl font-semibold text-center\",\n                    children: \"Welcome Back!\"\n                }, void 0, false, {\n                    fileName: \"/home/maiz/Documents/Web Technologies/Lab Task 1 - JQuery Validation/blog-app/app/(custom)/login/page.jsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"loginForm\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_5__.input_default, {\n                            id: \"emailInput\",\n                            classNames: {\n                                inputWrapper: \"bg-default-100\"\n                            },\n                            labelPlacement: \"outside\",\n                            placeholder: \"Enter email...\",\n                            startContent: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faEnvelope,\n                                className: \"h-4 w-4 text-base text-default-400 pointer-events-none flex-shrink-0\"\n                            }, void 0, false, void 0, void 0),\n                            type: \"email\"\n                        }, void 0, false, {\n                            fileName: \"/home/maiz/Documents/Web Technologies/Lab Task 1 - JQuery Validation/blog-app/app/(custom)/login/page.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_input__WEBPACK_IMPORTED_MODULE_5__.input_default, {\n                            id: \"passwordInput\",\n                            classNames: {\n                                inputWrapper: \"bg-default-100\"\n                            },\n                            labelPlacement: \"outside\",\n                            placeholder: \"Enter Password...\",\n                            startContent: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faKey,\n                                className: \"h-4 w-4 text-base text-default-400 pointer-events-none flex-shrink-0\"\n                            }, void 0, false, void 0, void 0),\n                            type: \"password\"\n                        }, void 0, false, {\n                            fileName: \"/home/maiz/Documents/Web Technologies/Lab Task 1 - JQuery Validation/blog-app/app/(custom)/login/page.jsx\",\n                            lineNumber: 68,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_button__WEBPACK_IMPORTED_MODULE_7__.button_default, {\n                            color: \"primary\",\n                            onClick: handleLogin,\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/home/maiz/Documents/Web Technologies/Lab Task 1 - JQuery Validation/blog-app/app/(custom)/login/page.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/maiz/Documents/Web Technologies/Lab Task 1 - JQuery Validation/blog-app/app/(custom)/login/page.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/maiz/Documents/Web Technologies/Lab Task 1 - JQuery Validation/blog-app/app/(custom)/login/page.jsx\",\n            lineNumber: 53,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/maiz/Documents/Web Technologies/Lab Task 1 - JQuery Validation/blog-app/app/(custom)/login/page.jsx\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, this);\n}\n_s(Login, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8oY3VzdG9tKS9sb2dpbi9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMyQztBQUNGO0FBQ3VCO0FBQ0s7QUFDOUM7QUFDSTtBQUNhO0FBRXpCLFNBQVNROztJQUVwQixNQUFNQyxjQUFjO1FBQ2xCSiw2Q0FBQ0EsQ0FBQyxjQUFjSyxNQUFNO0lBQ3hCO0lBRUFILGdEQUFTQSxDQUFDO1FBQ05GLDZDQUFDQSxDQUFDLGNBQWNNLFFBQVEsQ0FBQztZQUNyQkMsT0FBTztnQkFDSEMsWUFBWTtvQkFDUkMsVUFBVTtvQkFDVkMsT0FBTztnQkFDWDtnQkFDQUMsZUFBZTtvQkFDWEYsVUFBVTtvQkFDVkcsV0FBVztnQkFDZjtZQUNKO1lBQ0FDLFVBQVU7Z0JBQ05MLFlBQVk7b0JBQ1JDLFVBQVU7b0JBQ1ZDLE9BQU87Z0JBQ1g7Z0JBQ0FDLGVBQWU7b0JBQ1hGLFVBQVU7b0JBQ1ZHLFdBQVc7Z0JBQ2Y7WUFDSjtZQUNBRSxlQUFlLFNBQVVDLElBQUk7Z0JBQ3pCLElBQUlmLDZDQUFDQSxDQUFDLGNBQWNnQixLQUFLLElBQUk7b0JBQ3pCQyxRQUFRQyxHQUFHLENBQUM7Z0JBQ1osa0RBQWtEO2dCQUNsRCx1Q0FBdUM7Z0JBQzNDLE9BQU87b0JBQ0hELFFBQVFDLEdBQUcsQ0FBQztnQkFDaEI7WUFDSjtRQUNKO0lBQ0osR0FBRyxFQUFFO0lBR0wscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBRUQsV0FBWTs4QkFBcUM7Ozs7Ozs4QkFDcEQsOERBQUNMO29CQUFLTyxJQUFHOztzQ0FDTCw4REFBQzFCLDREQUFLQTs0QkFDRjBCLElBQUc7NEJBQ0hDLFlBQVk7Z0NBQ1JDLGNBQWM7NEJBQ2xCOzRCQUNBQyxnQkFBZTs0QkFDZkMsYUFBWTs0QkFDWkMsNEJBQ0ksOERBQUM5QiwyRUFBZUE7Z0NBQUMrQixNQUFNN0IseUVBQVVBO2dDQUFFcUIsV0FBVTs7NEJBRWpEUyxNQUFLOzs7Ozs7c0NBRVQsOERBQUNqQyw0REFBS0E7NEJBQ0YwQixJQUFHOzRCQUNIQyxZQUFZO2dDQUNSQyxjQUFjOzRCQUNsQjs0QkFDQUMsZ0JBQWU7NEJBQ2ZDLGFBQVk7NEJBQ1pDLDRCQUNJLDhEQUFDOUIsMkVBQWVBO2dDQUFDK0IsTUFBTTlCLG9FQUFLQTtnQ0FBRXNCLFdBQVU7OzRCQUU1Q1MsTUFBSzs7Ozs7O3NDQUVULDhEQUFDbEMsOERBQU1BOzRCQUFDbUMsT0FBTTs0QkFBVUMsU0FBUzNCO3NDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRTtHQTNFd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8oY3VzdG9tKS9sb2dpbi9wYWdlLmpzeD8yODU4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICdAbmV4dHVpLW9yZy9idXR0b24nXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0BuZXh0dWktb3JnL2lucHV0J1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFLZXksIGZhRW52ZWxvcGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdqcXVlcnktdmFsaWRhdGlvbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luICgpIHtcblxuICAgIGNvbnN0IGhhbmRsZUxvZ2luID0gKCkgPT4ge1xuICAgICAgJCgnI2xvZ2luRm9ybScpLnN1Ym1pdCgpO1xuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAkKCcjbG9naW5Gb3JtJykudmFsaWRhdGUoe1xuICAgICAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgICAgICBlbWFpbElucHV0OiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aDogOCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgZW1haWxJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1BsZWFzZSBlbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRJbnB1dDoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1BsZWFzZSBlbnRlciB5b3VyIHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoOiAnUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnMgbG9uZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgICAgIGlmICgkKCcjbG9naW5Gb3JtJykudmFsaWQoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRm9ybSBzdWJtaXR0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gWW91IGNhbiBhZGQgY29kZSBoZXJlIHRvIGhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIHNlbmQgZGF0YSB0byB0aGUgc2VydmVyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0Zvcm0gbm90IHN1Ym1pdHRlZC4gUGxlYXNlIGNoZWNrIHlvdXIgaW5wdXRzLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1bMTAwdmhdJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0xMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmFja2dyb3VuZC05MDAgbWluLXctWzQwMHB4XSBoLVs5MHZoXSByb3VuZGVkLXhsJz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2B0ZXh0LTN4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyYH0+V2VsY29tZSBCYWNrITwvcD5cbiAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImxvZ2luRm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVzPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRXcmFwcGVyOiBcImJnLWRlZmF1bHQtMTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQbGFjZW1lbnQ9XCJvdXRzaWRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWwuLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDb250ZW50PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRW52ZWxvcGV9IGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1iYXNlIHRleHQtZGVmYXVsdC00MDAgcG9pbnRlci1ldmVudHMtbm9uZSBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFdyYXBwZXI6IFwiYmctZGVmYXVsdC0xMDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFBsYWNlbWVudD1cIm91dHNpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZC4uLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydENvbnRlbnQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFLZXl9IGNsYXNzTmFtZT1cImgtNCB3LTQgdGV4dC1iYXNlIHRleHQtZGVmYXVsdC00MDAgcG9pbnRlci1ldmVudHMtbm9uZSBmbGV4LXNocmluay0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J3ByaW1hcnknIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufT5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiSW5wdXQiLCJGb250QXdlc29tZUljb24iLCJmYUtleSIsImZhRW52ZWxvcGUiLCIkIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJMb2dpbiIsImhhbmRsZUxvZ2luIiwic3VibWl0IiwidmFsaWRhdGUiLCJydWxlcyIsImVtYWlsSW5wdXQiLCJyZXF1aXJlZCIsImVtYWlsIiwicGFzc3dvcmRJbnB1dCIsIm1pbmxlbmd0aCIsIm1lc3NhZ2VzIiwic3VibWl0SGFuZGxlciIsImZvcm0iLCJ2YWxpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaWQiLCJjbGFzc05hbWVzIiwiaW5wdXRXcmFwcGVyIiwibGFiZWxQbGFjZW1lbnQiLCJwbGFjZWhvbGRlciIsInN0YXJ0Q29udGVudCIsImljb24iLCJ0eXBlIiwiY29sb3IiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(custom)/login/page.jsx\n"));

/***/ })

});