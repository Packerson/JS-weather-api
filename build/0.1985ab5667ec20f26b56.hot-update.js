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
    var all_info, _yield$all_info$json, current, forecast, location, city, weather_icon, hPa, humidity, wind;
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
          _yield$all_info$json = _context.sent;
          current = _yield$all_info$json.current;
          forecast = _yield$all_info$json.forecast;
          location = _yield$all_info$json.location;
          console.log(current);
          console.log(forecast);
          console.log(location);
          city = document.getElementsByClassName('city__name')[0].innerText = location.name;
          weather_icon = document.getElementsByClassName('weather__icon')[0].src = "".concat(current.condition.icon);
          hPa = document.getElementsByClassName('pressure__value')[0].innerText = current.pressure_mb;
          humidity = document.getElementsByClassName('humidity__value')[0].innerText = "".concat(current.humidity, "%");
          wind = document.getElementsByClassName('wind-speed__value')[0].innerText = Math.round(current.wind_kph * 1000 / 3600);
          console.log(weather_icon);
          console.log(city);
          console.log(hPa);
          console.log(humidity);
          console.log(wind);
          _context.next = 28;
          break;
        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 28:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 25]]);
  }));
  return _getInfo.apply(this, arguments);
}
getInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7fedf409d9e22359077a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4xOTg1YWI1NjY3ZWMyMGYyNmI1Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztTQUVlQSxPQUFPO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0xBQXRCO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUEsT0FFK0JDLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQztRQUFBO1VBQXpIQyxRQUFRO1VBQUE7VUFBQSxPQUM4QkEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7UUFBQTtVQUFBO1VBQXBEQyxPQUFPLHdCQUFQQSxPQUFPO1VBQUVDLFFBQVEsd0JBQVJBLFFBQVE7VUFBRUMsUUFBUSx3QkFBUkEsUUFBUTtVQUNsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQztVQUNwQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQztVQUNyQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztVQUVmRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBR04sUUFBUSxDQUFDTyxJQUFJO1VBQ2pGQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNJLEdBQUcsYUFBTVgsT0FBTyxDQUFDWSxTQUFTLENBQUNDLElBQUksQ0FBRTtVQUNwR0MsR0FBRyxHQUFHUixRQUFRLENBQUNDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBR1IsT0FBTyxDQUFDZSxXQUFXO1VBQzNGQyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxhQUFNUixPQUFPLENBQUNnQixRQUFRLE1BQUc7VUFDbkdDLElBQUksR0FBR1gsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUdVLElBQUksQ0FBQ0MsS0FBSyxDQUFDbkIsT0FBTyxDQUFDb0IsUUFBUSxHQUFDLElBQUksR0FBQyxJQUFJLENBQUM7VUFFdkhqQixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sWUFBWSxDQUFDO1VBQ3pCUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO1VBQ2pCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsR0FBRyxDQUFDO1VBQ2hCWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDO1VBQ3JCYixPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDO1VBQUE7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUVqQmQsT0FBTyxDQUFDQyxHQUFHLGFBQUs7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFdkI7RUFBQTtBQUFBO0FBRURSLE9BQU8sRUFBRTs7Ozs7Ozs7VUMxQlQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5mbyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9YXV0bzppcCZkYXlzPTUnKVxuICAgICAgICBjb25zdCB7Y3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9ufSA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdClcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG5cbiAgICAgICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NpdHlfX25hbWUnKVswXS5pbm5lclRleHQgPSBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ljb24nKVswXS5zcmMgPSBgJHtjdXJyZW50LmNvbmRpdGlvbi5pY29ufWBcbiAgICAgICAgY29uc3QgaFBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJlc3N1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID0gY3VycmVudC5wcmVzc3VyZV9tYlxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h1bWlkaXR5X192YWx1ZScpWzBdLmlubmVyVGV4dCA9IGAke2N1cnJlbnQuaHVtaWRpdHl9JWBcbiAgICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbmQtc3BlZWRfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID0gTWF0aC5yb3VuZChjdXJyZW50LndpbmRfa3BoKjEwMDAvMzYwMClcblxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyX2ljb24pXG4gICAgICAgIGNvbnNvbGUubG9nKGNpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKGhQYSlcbiAgICAgICAgY29uc29sZS5sb2coaHVtaWRpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmQpXG59Y2F0Y2ggKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cbmdldEluZm8oKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjdmZWRmNDA5ZDllMjIzNTkwNzdhXCIpIl0sIm5hbWVzIjpbImdldEluZm8iLCJmZXRjaCIsImFsbF9pbmZvIiwianNvbiIsImN1cnJlbnQiLCJmb3JlY2FzdCIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsImNpdHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lclRleHQiLCJuYW1lIiwid2VhdGhlcl9pY29uIiwic3JjIiwiY29uZGl0aW9uIiwiaWNvbiIsImhQYSIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kIiwiTWF0aCIsInJvdW5kIiwid2luZF9rcGgiXSwic291cmNlUm9vdCI6IiJ9