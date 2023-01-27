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
    var all_info, _yield$all_info$json, current, forecast, location, city, weather_icon, hPa, humidity, wind, temp_C;
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
          wind = document.getElementsByClassName('wind-speed__value')[0].innerText = "".concat(Math.round(current.wind_kph * 1000 / 3600), " m/s");
          temp_C = document.getElementsByClassName('temperature__value')[0].innerText = current.temp_c;
          console.log(weather_icon);
          console.log(city);
          console.log(hPa);
          console.log(humidity);
          console.log(wind);
          console.log(temp_C);
          _context.next = 30;
          break;
        case 27:
          _context.prev = 27;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 30:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 27]]);
  }));
  return _getInfo.apply(this, arguments);
}
getInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("981072e41decea164661")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4yMzljNjVmOGYzNTM2NjE5MmE1Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztTQUVlQSxPQUFPO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0xBQXRCO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUEsT0FFK0JDLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQztRQUFBO1VBQXpIQyxRQUFRO1VBQUE7VUFBQSxPQUM4QkEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7UUFBQTtVQUFBO1VBQXBEQyxPQUFPLHdCQUFQQSxPQUFPO1VBQUVDLFFBQVEsd0JBQVJBLFFBQVE7VUFBRUMsUUFBUSx3QkFBUkEsUUFBUTtVQUNsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQztVQUNwQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQztVQUNyQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztVQUVmRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FDbkVOLFFBQVEsQ0FBQ08sSUFBSTtVQUNYQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNJLEdBQUcsYUFDckVYLE9BQU8sQ0FBQ1ksU0FBUyxDQUFDQyxJQUFJLENBQUU7VUFDekJDLEdBQUcsR0FBR1IsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQ3ZFUixPQUFPLENBQUNlLFdBQVc7VUFDakJDLFFBQVEsR0FBR1YsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLGFBQ3pFUixPQUFPLENBQUNnQixRQUFRLE1BQUc7VUFDcEJDLElBQUksR0FBR1gsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLGFBQ3ZFVSxJQUFJLENBQUNDLEtBQUssQ0FBQ25CLE9BQU8sQ0FBQ29CLFFBQVEsR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFNBQU07VUFDN0NDLE1BQU0sR0FBR2YsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUdSLE9BQU8sQ0FBQ3NCLE1BQU07VUFFbEduQixPQUFPLENBQUNDLEdBQUcsQ0FBQ00sWUFBWSxDQUFDO1VBQ3pCUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO1VBQ2pCRixPQUFPLENBQUNDLEdBQUcsQ0FBQ1UsR0FBRyxDQUFDO1VBQ2hCWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1ksUUFBUSxDQUFDO1VBQ3JCYixPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsSUFBSSxDQUFDO1VBQ2pCZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2lCLE1BQU0sQ0FBQztVQUFBO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFFbkJsQixPQUFPLENBQUNDLEdBQUcsYUFBSztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQSxDQUV2QjtFQUFBO0FBQUE7QUFFRFIsT0FBTyxFQUFFOzs7Ozs7OztVQ2pDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5hc3luYyBmdW5jdGlvbiBnZXRJbmZvICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT1hdXRvOmlwJmRheXM9NScpXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0KVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcblxuICAgICAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2l0eV9fbmFtZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ljb24nKVswXS5zcmMgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5jb25kaXRpb24uaWNvbn1gXG4gICAgICAgIGNvbnN0IGhQYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXNzdXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBjdXJyZW50LnByZXNzdXJlX21iXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHVtaWRpdHlfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuaHVtaWRpdHl9JWBcbiAgICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbmQtc3BlZWRfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke01hdGgucm91bmQoY3VycmVudC53aW5kX2twaCoxMDAwLzM2MDApfSBtL3NgXG4gICAgICAgIGNvbnN0IHRlbXBfQyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RlbXBlcmF0dXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9IGN1cnJlbnQudGVtcF9jXG5cbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlcl9pY29uKVxuICAgICAgICBjb25zb2xlLmxvZyhjaXR5KVxuICAgICAgICBjb25zb2xlLmxvZyhoUGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGh1bWlkaXR5KVxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kKVxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wX0MpXG59Y2F0Y2ggKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cbmdldEluZm8oKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk4MTA3MmU0MWRlY2VhMTY0NjYxXCIpIl0sIm5hbWVzIjpbImdldEluZm8iLCJmZXRjaCIsImFsbF9pbmZvIiwianNvbiIsImN1cnJlbnQiLCJmb3JlY2FzdCIsImxvY2F0aW9uIiwiY29uc29sZSIsImxvZyIsImNpdHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lclRleHQiLCJuYW1lIiwid2VhdGhlcl9pY29uIiwic3JjIiwiY29uZGl0aW9uIiwiaWNvbiIsImhQYSIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kIiwiTWF0aCIsInJvdW5kIiwid2luZF9rcGgiLCJ0ZW1wX0MiLCJ0ZW1wX2MiXSwic291cmNlUm9vdCI6IiJ9