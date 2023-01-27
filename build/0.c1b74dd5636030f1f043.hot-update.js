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
    var all_info, results, location, weather_icon, hPa;
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
          location = document.getElementsByClassName('city__name')[0].innerText = results.location.name;
          weather_icon = document.getElementsByClassName('weather__icon')[0].src = "".concat(results.current.condition.icon);
          hPa = document.getElementsByClassName('pressure__value')[0].innerText = results.current.pressure_mb;
          console.log(results.current.condition.icon);
          console.log(results.location.name);
          console.log(results.current.pressure_mb);
          _context.next = 19;
          break;
        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 16]]);
  }));
  return _getInfo.apply(this, arguments);
}
getInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0842be71a3d801cb9feb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMWI3NGRkNTYzNjAzMGYxZjA0My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztTQUVlQSxPQUFPO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0xBQXRCO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUEsT0FFK0JDLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQztRQUFBO1VBQXpIQyxRQUFRO1VBQUE7VUFBQSxPQUNRQSxRQUFRLENBQUNDLElBQUksRUFBRTtRQUFBO1VBQS9CQyxPQUFPO1VBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7VUFFZEcsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ0csUUFBUSxDQUFDSSxJQUFJO1VBQzdGQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNJLEdBQUcsYUFBTVQsT0FBTyxDQUFDVSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFFO1VBQzVHQyxHQUFHLEdBQUdULFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHTixPQUFPLENBQUNVLE9BQU8sQ0FBQ0ksV0FBVztVQUV6R2IsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ1UsT0FBTyxDQUFDQyxTQUFTLENBQUNDLElBQUksQ0FBQztVQUMzQ1gsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQ0csUUFBUSxDQUFDSSxJQUFJLENBQUM7VUFDbENOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUNVLE9BQU8sQ0FBQ0ksV0FBVyxDQUFDO1VBQUE7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUV4Q2IsT0FBTyxDQUFDQyxHQUFHLGFBQUs7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFdkI7RUFBQTtBQUFBO0FBRUROLE9BQU8sRUFBRTs7Ozs7Ozs7VUNwQlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5mbyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9YXV0bzppcCZkYXlzPTUnKVxuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXG5cbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXR5X19uYW1lJylbMF0uaW5uZXJUZXh0ID0gcmVzdWx0cy5sb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ljb24nKVswXS5zcmMgPSBgJHtyZXN1bHRzLmN1cnJlbnQuY29uZGl0aW9uLmljb259YFxuICAgICAgICBjb25zdCBoUGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmVzc3VyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPSByZXN1bHRzLmN1cnJlbnQucHJlc3N1cmVfbWJcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmN1cnJlbnQuY29uZGl0aW9uLmljb24pXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMubG9jYXRpb24ubmFtZSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5jdXJyZW50LnByZXNzdXJlX21iKVxufWNhdGNoIChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5nZXRJbmZvKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwODQyYmU3MWEzZDgwMWNiOWZlYlwiKSJdLCJuYW1lcyI6WyJnZXRJbmZvIiwiZmV0Y2giLCJhbGxfaW5mbyIsImpzb24iLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyIsImxvY2F0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwibmFtZSIsIndlYXRoZXJfaWNvbiIsInNyYyIsImN1cnJlbnQiLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiXSwic291cmNlUm9vdCI6IiJ9