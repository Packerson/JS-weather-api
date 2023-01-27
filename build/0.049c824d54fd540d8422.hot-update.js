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
          wind = document.getElementsByClassName('wind-speed__value')[0].innerText = current.wind_kph;
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
/******/ 	__webpack_require__.h = () => ("192e95a75d1c624fe4d4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNDljODI0ZDU0ZmQ1NDBkODQyMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztTQUVlQSxPQUFPO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0xBQXRCO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUEsT0FFK0JDLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQztRQUFBO1VBQXpIQyxRQUFRO1VBQUE7VUFBQSxPQUM4QkEsUUFBUSxDQUFDQyxJQUFJLEVBQUU7UUFBQTtVQUFBO1VBQXBEQyxPQUFPLHdCQUFQQSxPQUFPO1VBQUVDLFFBQVEsd0JBQVJBLFFBQVE7VUFBRUMsUUFBUSx3QkFBUkEsUUFBUTtVQUNsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQztVQUNwQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNILFFBQVEsQ0FBQztVQUNyQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNGLFFBQVEsQ0FBQztVQUVmRyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBR04sUUFBUSxDQUFDTyxJQUFJO1VBQ2pGQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNJLEdBQUcsYUFBTVgsT0FBTyxDQUFDWSxTQUFTLENBQUNDLElBQUksQ0FBRTtVQUNwR0MsR0FBRyxHQUFHUixRQUFRLENBQUNDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBR1IsT0FBTyxDQUFDZSxXQUFXO1VBQzNGQyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxhQUFNUixPQUFPLENBQUNnQixRQUFRLE1BQUc7VUFDbkdDLElBQUksR0FBR1gsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUdSLE9BQU8sQ0FBQ2tCLFFBQVE7VUFFakdmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxZQUFZLENBQUM7VUFDekJQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxJQUFJLENBQUM7VUFDakJGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVSxHQUFHLENBQUM7VUFDaEJYLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWSxRQUFRLENBQUM7VUFDckJiLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxJQUFJLENBQUM7VUFBQTtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBRWpCZCxPQUFPLENBQUNDLEdBQUcsYUFBSztRQUFBO1FBQUE7VUFBQTtNQUFBO0lBQUE7RUFBQSxDQUV2QjtFQUFBO0FBQUE7QUFFRFIsT0FBTyxFQUFFOzs7Ozs7OztVQzFCVCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5hc3luYyBmdW5jdGlvbiBnZXRJbmZvICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT1hdXRvOmlwJmRheXM9NScpXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0KVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcblxuICAgICAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2l0eV9fbmFtZScpWzBdLmlubmVyVGV4dCA9IGxvY2F0aW9uLm5hbWVcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9pY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VhdGhlcl9faWNvbicpWzBdLnNyYyA9IGAke2N1cnJlbnQuY29uZGl0aW9uLmljb259YFxuICAgICAgICBjb25zdCBoUGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmVzc3VyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPSBjdXJyZW50LnByZXNzdXJlX21iXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHVtaWRpdHlfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID0gYCR7Y3VycmVudC5odW1pZGl0eX0lYFxuICAgICAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2luZC1zcGVlZF9fdmFsdWUnKVswXS5pbm5lclRleHQgPSBjdXJyZW50LndpbmRfa3BoXG5cbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlcl9pY29uKVxuICAgICAgICBjb25zb2xlLmxvZyhjaXR5KVxuICAgICAgICBjb25zb2xlLmxvZyhoUGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGh1bWlkaXR5KVxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kKVxufWNhdGNoIChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5nZXRJbmZvKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxOTJlOTVhNzVkMWM2MjRmZTRkNFwiKSJdLCJuYW1lcyI6WyJnZXRJbmZvIiwiZmV0Y2giLCJhbGxfaW5mbyIsImpzb24iLCJjdXJyZW50IiwiZm9yZWNhc3QiLCJsb2NhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJjaXR5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwibmFtZSIsIndlYXRoZXJfaWNvbiIsInNyYyIsImNvbmRpdGlvbiIsImljb24iLCJoUGEiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZCIsIndpbmRfa3BoIl0sInNvdXJjZVJvb3QiOiIifQ==