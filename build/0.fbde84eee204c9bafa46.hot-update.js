self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

const add_city_button = document.getElementById('"add-city"');
function AddCity() {
  add_city_button.addEventListener('click', ev => {
    const add_city = document.getElementById('add_city');
    console.log(add_city);
    add_city.removeAttribute('hidden');
  });
}
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
      }
    };
    forecastDayFunction();
  } catch (err) {
    console.log(err);
  }
}
getInfo();
AddCity();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("774c8d74753d3717328d")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixJQUFJLENBQUNHLGNBQWMsQ0FBQyxPQUFPLEVBQUU7VUFBQ0MsT0FBTyxFQUFFO1FBQU0sQ0FBQyxDQUFDO1FBRXpEUCxFQUFFLENBQUNRLFNBQVMsR0FBSTtBQUNoQyw0Q0FBNENILEdBQUk7QUFDaEQ7QUFDQTtBQUNBLDBCQUEwQjNCLFdBQVcsQ0FBQ3FCLENBQUMsQ0FBQyxDQUFDTSxHQUFHLENBQUNJLFNBQVUsc0JBQXFCO01BR2hFO0lBQ0osQ0FBQztJQUNEWixtQkFBbUIsRUFBRTtFQUU3QixDQUFDLFFBQU9hLEdBQUcsRUFBQztJQUNKMUMsT0FBTyxDQUFDQyxHQUFHLENBQUN5QyxHQUFHLENBQUM7RUFDcEI7QUFDSjtBQUVBdkMsT0FBTyxFQUFFO0FBQ1RQLE9BQU8sRUFBRTs7Ozs7Ozs7VUN4RFQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnXCJhZGQtY2l0eVwiJylcblxuZnVuY3Rpb24gQWRkQ2l0eSAoKSB7IGFkZF9jaXR5X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgIFxuICAgIGNvbnN0IGFkZF9jaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jaXR5JylcbiAgICBjb25zb2xlLmxvZyhhZGRfY2l0eSlcbiAgICBhZGRfY2l0eS5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpXG59KX1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5mbyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9YXV0bzppcCZkYXlzPTYnKVxuICAgICAgICBjb25zdCB7Y3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9ufSA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3RkYXl9ID0gZm9yZWNhc3RcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudClcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RkYXkubGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcblxuICAgICAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2l0eV9fbmFtZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ljb24nKVswXS5zcmMgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5jb25kaXRpb24uaWNvbn1gXG4gICAgICAgIGNvbnN0IGhQYSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXNzdXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LnByZXNzdXJlX21ifSBoUGFgXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHVtaWRpdHlfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuaHVtaWRpdHl9ICVgXG4gICAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aW5kLXNwZWVkX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGgqMTAwMC8zNjAwKX0gbS9zYFxuICAgICAgICBjb25zdCB0ZW1wX0MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZW1wZXJhdHVyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPSBjdXJyZW50LnRlbXBfY1xuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5RnVuY3Rpb24gPSAgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcl9fZm9yZWNhc3QnKVxuICAgICAgICAgICAgZm9yIChsZXQgaT0xIDtpIDwgZm9yZWNhc3RkYXkubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZChsaSlcblxuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge3dlZWtkYXk6ICdsb25nJ30pO1xuXG4gICAgICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYCAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+YFxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JlY2FzdERheUZ1bmN0aW9uKClcblxufWNhdGNoIChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5nZXRJbmZvKClcbkFkZENpdHkoKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc3NGM4ZDc0NzUzZDM3MTczMjhkXCIpIl0sIm5hbWVzIjpbImFkZF9jaXR5X2J1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBZGRDaXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiYWRkX2NpdHkiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlQXR0cmlidXRlIiwiZ2V0SW5mbyIsImFsbF9pbmZvIiwiZmV0Y2giLCJjdXJyZW50IiwiZm9yZWNhc3QiLCJsb2NhdGlvbiIsImpzb24iLCJmb3JlY2FzdGRheSIsImxlbmd0aCIsImNpdHkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwibmFtZSIsIndlYXRoZXJfaWNvbiIsInNyYyIsImNvbmRpdGlvbiIsImljb24iLCJoUGEiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZCIsIk1hdGgiLCJyb3VuZCIsIndpbmRfa3BoIiwidGVtcF9DIiwidGVtcF9jIiwiZm9yZWNhc3REYXlGdW5jdGlvbiIsInVsIiwiaSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwiaW5uZXJIVE1MIiwiYXZndGVtcF9jIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==