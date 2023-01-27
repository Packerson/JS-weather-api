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
    var all_info, results, location, weather_icon;
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
          console.log(results.current.condition.icon);
          console.log(results.location.name);
          _context.next = 17;
          break;
        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);
        case 17:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 14]]);
  }));
  return _getInfo.apply(this, arguments);
}
getInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0776fbb0c3f5fed09c65")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNTgwMjhhZmYzNzUyOGNlNmYwNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztTQUVlQSxPQUFPO0VBQUE7QUFBQTtBQUFBO0VBQUEsb0xBQXRCO0lBQUE7SUFBQTtNQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUEsT0FFK0JDLEtBQUssQ0FBQyxpR0FBaUcsQ0FBQztRQUFBO1VBQXpIQyxRQUFRO1VBQUE7VUFBQSxPQUNRQSxRQUFRLENBQUNDLElBQUksRUFBRTtRQUFBO1VBQS9CQyxPQUFPO1VBQ2JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUM7VUFFZEcsUUFBUSxHQUFHQyxRQUFRLENBQUNDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUdOLE9BQU8sQ0FBQ0csUUFBUSxDQUFDSSxJQUFJO1VBQzdGQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNJLEdBQUcsYUFBTVQsT0FBTyxDQUFDVSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFFO1VBQ2xIWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDVSxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsSUFBSSxDQUFDO1VBQzNDWCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsT0FBTyxDQUFDRyxRQUFRLENBQUNJLElBQUksQ0FBQztVQUFBO1VBQUE7UUFBQTtVQUFBO1VBQUE7VUFFbENOLE9BQU8sQ0FBQ0MsR0FBRyxhQUFLO1FBQUE7UUFBQTtVQUFBO01BQUE7SUFBQTtFQUFBLENBRXZCO0VBQUE7QUFBQTtBQUVETixPQUFPLEVBQUU7Ozs7Ozs7O1VDakJUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEluZm8gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbF9pbmZvID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZGYxOGZlMWI4NDhlNDZkODhiYjE3NDk0NDIzMjcwMSZxPWF1dG86aXAmZGF5cz01JylcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxuXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2l0eV9fbmFtZScpWzBdLmlubmVyVGV4dCA9IHJlc3VsdHMubG9jYXRpb24ubmFtZVxuICAgICAgICBjb25zdCB3ZWF0aGVyX2ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3ZWF0aGVyX19pY29uJylbMF0uc3JjID0gYCR7cmVzdWx0cy5jdXJyZW50LmNvbmRpdGlvbi5pY29ufWBcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cy5jdXJyZW50LmNvbmRpdGlvbi5pY29uKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzLmxvY2F0aW9uLm5hbWUpXG59Y2F0Y2ggKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cbmdldEluZm8oKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjA3NzZmYmIwYzNmNWZlZDA5YzY1XCIpIl0sIm5hbWVzIjpbImdldEluZm8iLCJmZXRjaCIsImFsbF9pbmZvIiwianNvbiIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwibG9jYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lclRleHQiLCJuYW1lIiwid2VhdGhlcl9pY29uIiwic3JjIiwiY3VycmVudCIsImNvbmRpdGlvbiIsImljb24iXSwic291cmNlUm9vdCI6IiJ9