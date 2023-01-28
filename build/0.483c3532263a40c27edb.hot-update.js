self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

async function getInfo() {
  try {
    const all_info = await fetch('http://api.weatherapi.com/v1/forecast.json?key=df18fe1b848e46d88bb174944232701&q=auto:ip&days=6');
    const {
      current,
      forecast,
      location
    } = await all_info.json();
    const {
      forecastday
    } = forecast;
    console.log(current);
    console.log(forecastday.length);
    console.log(location);
    const city = document.getElementsByClassName('city__name')[0].innerText = location.name;
    const weather_icon = document.getElementsByClassName('weather__icon')[0].src = `${current.condition.icon}`;
    const hPa = document.getElementsByClassName('pressure__value')[0].innerText = `${current.pressure_mb} hPa`;
    const humidity = document.getElementsByClassName('humidity__value')[0].innerText = `${current.humidity} %`;
    const wind = document.getElementsByClassName('wind-speed__value')[0].innerText = `${Math.round(current.wind_kph * 1000 / 3600)} m/s`;
    const temp_C = document.getElementsByClassName('temperature__value')[0].innerText = current.temp_c;

    // const weather__forecast = document.getElementsByClassName('weather__forecast')

    const forecastDayFunction = () => {
      const ul = document.getElementById('weather__forecast');
      for (let i = 1; i < forecastday.length; i++) {
        const li = document.createElement('li').innerHTML = `<span className="day">${forecastday[i].date}</span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">10.0</span>&deg;C</span>`;
        ul.append(li);
        console.log(forecastday[i]);
      }
    };
    forecastDayFunction();
    console.log(weather_icon);
    console.log(city);
    console.log(hPa);
    console.log(humidity);
    console.log(wind);
    console.log(temp_C);
  } catch (err) {
    console.log(err);
  }
}
getInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4ac088f09ab6ecb1416c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUNrQixNQUFNLENBQUM7RUFDM0IsQ0FBQyxRQUFPVyxHQUFHLEVBQUM7SUFDSjlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDNkIsR0FBRyxDQUFDO0VBQ3BCO0FBQ0o7QUFFQXRDLE9BQU8sRUFBRTs7Ozs7Ozs7VUNoRFQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5mbyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9YXV0bzppcCZkYXlzPTYnKVxuICAgICAgICBjb25zdCB7Y3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9ufSA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3RkYXl9ID0gZm9yZWNhc3RcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudClcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RkYXkubGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcblxuICAgICAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2l0eV9fbmFtZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ljb24nKVswXS5zcmMgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5jb25kaXRpb24uaWNvbn1gXG4gICAgICAgIGNvbnN0IGhQYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXNzdXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LnByZXNzdXJlX21ifSBoUGFgXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHVtaWRpdHlfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuaHVtaWRpdHl9ICVgXG4gICAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aW5kLXNwZWVkX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGgqMTAwMC8zNjAwKX0gbS9zYFxuICAgICAgICBjb25zdCB0ZW1wX0MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZW1wZXJhdHVyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPSBjdXJyZW50LnRlbXBfY1xuXG4gICAgICAgIC8vIGNvbnN0IHdlYXRoZXJfX2ZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VhdGhlcl9fZm9yZWNhc3QnKVxuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5RnVuY3Rpb24gPSAgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcl9fZm9yZWNhc3QnKVxuICAgICAgICAgICAgZm9yIChsZXQgaT0xIDtpIDwgZm9yZWNhc3RkYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKS5pbm5lckhUTUwgPVxuICAgICAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtmb3JlY2FzdGRheVtpXS5kYXRlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj4xMC4wPC9zcGFuPiZkZWc7Qzwvc3Bhbj5gXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5W2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcmVjYXN0RGF5RnVuY3Rpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyX2ljb24pXG4gICAgICAgIGNvbnNvbGUubG9nKGNpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKGhQYSlcbiAgICAgICAgY29uc29sZS5sb2coaHVtaWRpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBfQylcbn1jYXRjaCAoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuZ2V0SW5mbygpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGFjMDg4ZjA5YWI2ZWNiMTQxNmNcIikiXSwibmFtZXMiOlsiZ2V0SW5mbyIsImFsbF9pbmZvIiwiZmV0Y2giLCJjdXJyZW50IiwiZm9yZWNhc3QiLCJsb2NhdGlvbiIsImpzb24iLCJmb3JlY2FzdGRheSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjaXR5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwibmFtZSIsIndlYXRoZXJfaWNvbiIsInNyYyIsImNvbmRpdGlvbiIsImljb24iLCJoUGEiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZCIsIk1hdGgiLCJyb3VuZCIsIndpbmRfa3BoIiwidGVtcF9DIiwidGVtcF9jIiwiZm9yZWNhc3REYXlGdW5jdGlvbiIsInVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZGF0ZSIsImFwcGVuZCIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=