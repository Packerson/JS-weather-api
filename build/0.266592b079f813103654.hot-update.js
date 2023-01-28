self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

const add_city_button = document.getElementById('"add-city"');
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
    const forecastDayFunction = () => {
      const ul = document.getElementById('weather__forecast');
      for (let i = 1; i < forecastday.length; i++) {
        const li = document.createElement('li');
        ul.append(li);
        let date = new Date(forecastday[i].date);
        let day = date.toLocaleString('en-us', {
          weekday: 'long'
        });
        li.innerHTML = `    
                    <span className="day">${day}</span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        ${forecastday[i].day.avgtemp_c}</span>&deg;C</span>`;
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
/******/ 	__webpack_require__.h = () => ("187718ab80f76aadce24")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDLENBQUM7TUFDL0I7SUFDSixDQUFDO0lBQ0RGLG1CQUFtQixFQUFFO0lBQ3JCcEIsT0FBTyxDQUFDQyxHQUFHLENBQUNNLFlBQVksQ0FBQztJQUN6QlAsT0FBTyxDQUFDQyxHQUFHLENBQUNFLElBQUksQ0FBQztJQUNqQkgsT0FBTyxDQUFDQyxHQUFHLENBQUNVLEdBQUcsQ0FBQztJQUNoQlgsT0FBTyxDQUFDQyxHQUFHLENBQUNZLFFBQVEsQ0FBQztJQUNyQmIsT0FBTyxDQUFDQyxHQUFHLENBQUNhLElBQUksQ0FBQztJQUNqQmQsT0FBTyxDQUFDQyxHQUFHLENBQUNpQixNQUFNLENBQUM7RUFDM0IsQ0FBQyxRQUFPZSxHQUFHLEVBQUM7SUFDSmpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZ0MsR0FBRyxDQUFDO0VBQ3BCO0FBQ0o7QUFFQXpDLE9BQU8sRUFBRTs7Ozs7Ozs7VUNyRFQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnXCJhZGQtY2l0eVwiJylcblxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5mbyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9YXV0bzppcCZkYXlzPTYnKVxuICAgICAgICBjb25zdCB7Y3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9ufSA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3RkYXl9ID0gZm9yZWNhc3RcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudClcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RkYXkubGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcblxuICAgICAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2l0eV9fbmFtZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ljb24nKVswXS5zcmMgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5jb25kaXRpb24uaWNvbn1gXG4gICAgICAgIGNvbnN0IGhQYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXNzdXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LnByZXNzdXJlX21ifSBoUGFgXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHVtaWRpdHlfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuaHVtaWRpdHl9ICVgXG4gICAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aW5kLXNwZWVkX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGgqMTAwMC8zNjAwKX0gbS9zYFxuICAgICAgICBjb25zdCB0ZW1wX0MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZW1wZXJhdHVyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPSBjdXJyZW50LnRlbXBfY1xuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5RnVuY3Rpb24gPSAgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcl9fZm9yZWNhc3QnKVxuICAgICAgICAgICAgZm9yIChsZXQgaT0xIDtpIDwgZm9yZWNhc3RkYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZChsaSlcblxuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge3dlZWtkYXk6ICdsb25nJ30pO1xuXG4gICAgICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYCAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+YFxuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RkYXlbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yZWNhc3REYXlGdW5jdGlvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJfaWNvbilcbiAgICAgICAgY29uc29sZS5sb2coY2l0eSlcbiAgICAgICAgY29uc29sZS5sb2coaFBhKVxuICAgICAgICBjb25zb2xlLmxvZyhodW1pZGl0eSlcbiAgICAgICAgY29uc29sZS5sb2cod2luZClcbiAgICAgICAgY29uc29sZS5sb2codGVtcF9DKVxufWNhdGNoIChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5nZXRJbmZvKCkiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIxODc3MThhYjgwZjc2YWFkY2UyNFwiKSJdLCJuYW1lcyI6WyJhZGRfY2l0eV9idXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0SW5mbyIsImFsbF9pbmZvIiwiZmV0Y2giLCJjdXJyZW50IiwiZm9yZWNhc3QiLCJsb2NhdGlvbiIsImpzb24iLCJmb3JlY2FzdGRheSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjaXR5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImZvcmVjYXN0RGF5RnVuY3Rpb24iLCJ1bCIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImlubmVySFRNTCIsImF2Z3RlbXBfYyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=