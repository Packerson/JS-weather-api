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

          // const location = document.getElementsByClassName('city__name')[0].innerText = results.location.name
          // const weather_icon = document.getElementsByClassName('weather__icon')[0].src = `${results.current.condition.icon}`
          // const hPa = document.getElementsByClassName('pressure__value')[0].innerText = results.current.pressure_mb
          // const humidity = document.getElementsByClassName('humidity__value')[0].innerText = `${results.current.humidity}%`
          // const
          //
          // console.log(weather_icon)
          // console.log(location)
          // console.log(hPa)
          // console.log(humidity)
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return _getInfo.apply(this, arguments);
}
getInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("295261274476cfa075b7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYTUyM2U2YTJiNmVhZDgyYmUxOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztTQUVlQSxPQUFPO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0xBQXRCO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUEsT0FFK0JDLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQztRQUFBO1VBQXpIQyxRQUFRO1VBQUE7VUFBQSxPQUNRQSxRQUFRLENBQUNDLElBQUksRUFBRTtRQUFBO1VBQS9CQyxPQUFPO1VBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7O1VBRXBCO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQUE7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUVBQyxPQUFPLENBQUNDLEdBQUcsYUFBSztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQSxDQUV2QjtFQUFBO0FBQUE7QUFFRE4sT0FBTyxFQUFFOzs7Ozs7OztVQ3ZCVCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5hc3luYyBmdW5jdGlvbiBnZXRJbmZvICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT1hdXRvOmlwJmRheXM9NScpXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhbGxfaW5mby5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcblxuICAgICAgICAvLyBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NpdHlfX25hbWUnKVswXS5pbm5lclRleHQgPSByZXN1bHRzLmxvY2F0aW9uLm5hbWVcbiAgICAgICAgLy8gY29uc3Qgd2VhdGhlcl9pY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VhdGhlcl9faWNvbicpWzBdLnNyYyA9IGAke3Jlc3VsdHMuY3VycmVudC5jb25kaXRpb24uaWNvbn1gXG4gICAgICAgIC8vIGNvbnN0IGhQYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXNzdXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9IHJlc3VsdHMuY3VycmVudC5wcmVzc3VyZV9tYlxuICAgICAgICAvLyBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h1bWlkaXR5X192YWx1ZScpWzBdLmlubmVyVGV4dCA9IGAke3Jlc3VsdHMuY3VycmVudC5odW1pZGl0eX0lYFxuICAgICAgICAvLyBjb25zdFxuICAgICAgICAvL1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh3ZWF0aGVyX2ljb24pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhoUGEpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGh1bWlkaXR5KVxufWNhdGNoIChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5nZXRJbmZvKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIyOTUyNjEyNzQ0NzZjZmEwNzViN1wiKSJdLCJuYW1lcyI6WyJnZXRJbmZvIiwiZmV0Y2giLCJhbGxfaW5mbyIsImpzb24iLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=