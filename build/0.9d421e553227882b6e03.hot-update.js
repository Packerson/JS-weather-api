"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


function getInfo() {
  return _getInfo.apply(this, arguments);
}
function _getInfo() {
  _getInfo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var all_info, results;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('http://api.weatherapi.com/v1/forecast.json?key=df18fe1b848e46d88bb174944232701&q=auto:ip&days=5');
        case 3:
          all_info = _context.sent;
          _context.next = 6;
          return all_info.json();
        case 6:
          results = _context.sent;
          console.log(results);
          console.log(results.location.name);
          document.getElementsByClassName('city__name')[0].innerText = results.location.name;
          _context.next = 15;
          break;
        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 12]]);
  }));
  return _getInfo.apply(this, arguments);
}
getInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4428953b9bae31a7a2e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC45ZDQyMWU1NTMyMjc4ODJiNmUwMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztTQUVlQSxPQUFPO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0xBQXRCO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUEsT0FFK0JDLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQztRQUFBO1VBQXpIQyxRQUFRO1VBQUE7VUFBQSxPQUNRQSxRQUFRLENBQUNDLElBQUksRUFBRTtRQUFBO1VBQS9CQyxPQUFPO1VBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7VUFDcEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUNHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO1VBQ2xDQyxRQUFRLENBQUNDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUdQLE9BQU8sQ0FBQ0csUUFBUSxDQUFDQyxJQUFJO1VBQUE7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUdsRkgsT0FBTyxDQUFDQyxHQUFHLGFBQUs7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFdkI7RUFBQTtBQUFBO0FBRUROLE9BQU8sRUFBRTs7Ozs7Ozs7VUNmVCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5hc3luYyBmdW5jdGlvbiBnZXRJbmZvICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT1hdXRvOmlwJmRheXM9NScpXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhbGxfaW5mby5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5sb2NhdGlvbi5uYW1lKVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXR5X19uYW1lJylbMF0uaW5uZXJUZXh0ID0gcmVzdWx0cy5sb2NhdGlvbi5uYW1lXG5cbn1jYXRjaCAoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuZ2V0SW5mbygpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNDQyODk1M2I5YmFlMzFhN2EyZTVcIikiXSwibmFtZXMiOlsiZ2V0SW5mbyIsImZldGNoIiwiYWxsX2luZm8iLCJqc29uIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhdGlvbiIsIm5hbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9