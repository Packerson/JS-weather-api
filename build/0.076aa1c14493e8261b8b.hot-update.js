self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

const default_forecast = document.getElementById('app');
const fetch_default_value = 'auto:ip';
function CloseInput() {
  const close_input_button = document.getElementById('close_input');
  close_input_button.addEventListener('click', ev => {
    add_city.hidden = true;
  });
}
async function InputField() {
  document.getElementById('search_button').addEventListener('click', ev => {
    const input_field = document.getElementById('search').value;
    console.log(input_field);
    ev.preventDefault();
    const app = document.getElementById('app');
    const clone = app.cloneNode(true);
    GetInfo(input_field);
  });
}
async function AddCity() {
  const add_city_button = document.getElementById("add-city");
  add_city_button.addEventListener('click', () => {
    const add_city = document.getElementById('add_city');
    add_city.hidden = false;
    console.log(add_city);
  });
}
async function GetInfo(fetch_default_value, default_forecast) {
  try {
    const all_info = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=df18fe1b848e46d88bb174944232701&q=${fetch_default_value}&days=6`);
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
    const city = default_forecast.getElementsByClassName('city__name')[0].innerText = location.name;
    const weather_icon = default_forecast.getElementsByClassName('weather__icon')[0].src = `${current.condition.icon}`;
    const hPa = default_forecast.getElementsByClassName('pressure__value')[0].innerText = `${current.pressure_mb} hPa`;
    const humidity = default_forecast.getElementsByClassName('humidity__value')[0].innerText = `${current.humidity} %`;
    const wind = default_forecast.getElementsByClassName('wind-speed__value')[0].innerText = `${Math.round(current.wind_kph * 1000 / 3600)} m/s`;
    const temp_C = default_forecast.getElementsByClassName('temperature__value')[0].innerText = current.temp_c;
    const forecastDayFunction = () => {
      const ul = document.getElementById('weather__forecast');
      // const ul_array = ul.array
      // console.log(ul_array)
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
GetInfo(fetch_default_value, default_forecast);
AddCity();
CloseInput();
InputField();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("015e506587b5600cb835")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O01BQ2hFO0lBQ0osQ0FBQztJQUNEWixtQkFBbUIsRUFBRTtFQUV6QixDQUFDLENBQUMsT0FBT2EsR0FBRyxFQUFFO0lBQ1YvQyxPQUFPLENBQUNDLEdBQUcsQ0FBQzhDLEdBQUcsQ0FBQztFQUNwQjtBQUNKO0FBRUF6QyxPQUFPLENBQUNoQixtQkFBbUIsRUFBRUgsZ0JBQWdCLENBQUM7QUFDOUNvQixPQUFPLEVBQUU7QUFDVGhCLFVBQVUsRUFBRTtBQUNaTSxVQUFVLEVBQUU7Ozs7Ozs7O1VDdkZaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBkZWZhdWx0X2ZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5jb25zdCBmZXRjaF9kZWZhdWx0X3ZhbHVlID0gJ2F1dG86aXAnXG5cbmZ1bmN0aW9uIENsb3NlSW5wdXQoKSB7XG4gICAgY29uc3QgY2xvc2VfaW5wdXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2lucHV0JylcbiAgICBjbG9zZV9pbnB1dF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIElucHV0RmllbGQoKSB7XG5cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lclxuICAgICgnY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRfZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRfZmllbGQpXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgICAgIGNvbnN0IGNsb25lID0gYXBwLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBHZXRJbmZvKGlucHV0X2ZpZWxkKVxuXG4gICAgfVxuKX1cblxuYXN5bmMgZnVuY3Rpb24gQWRkQ2l0eSgpIHtcbiAgICBjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaXR5XCIpXG4gICAgYWRkX2NpdHlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRfY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IGZhbHNlXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZF9jaXR5KVxuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIEdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSwgZGVmYXVsdF9mb3JlY2FzdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbF9pbmZvID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZGYxOGZlMWI4NDhlNDZkODhiYjE3NDk0NDIzMjcwMSZxPSR7ZmV0Y2hfZGVmYXVsdF92YWx1ZX0mZGF5cz02YClcbiAgICAgICAgY29uc3Qge2N1cnJlbnQsIGZvcmVjYXN0LCBsb2NhdGlvbn0gPSBhd2FpdCBhbGxfaW5mby5qc29uKClcbiAgICAgICAgY29uc3Qge2ZvcmVjYXN0ZGF5fSA9IGZvcmVjYXN0XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5Lmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG5cblxuICAgICAgICBjb25zdCBjaXR5ID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXR5X19uYW1lJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGxvY2F0aW9uLm5hbWVcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9pY29uID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3ZWF0aGVyX19pY29uJylbMF0uc3JjID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuY29uZGl0aW9uLmljb259YFxuICAgICAgICBjb25zdCBoUGEgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXNzdXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LnByZXNzdXJlX21ifSBoUGFgXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodW1pZGl0eV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5odW1pZGl0eX0gJWBcbiAgICAgICAgY29uc3Qgd2luZCA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2luZC1zcGVlZF9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7TWF0aC5yb3VuZChjdXJyZW50LndpbmRfa3BoICogMTAwMCAvIDM2MDApfSBtL3NgXG4gICAgICAgIGNvbnN0IHRlbXBfQyA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcGVyYXR1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID0gY3VycmVudC50ZW1wX2NcblxuICAgICAgICBjb25zdCBmb3JlY2FzdERheUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcl9fZm9yZWNhc3QnKVxuICAgICAgICAgICAgLy8gY29uc3QgdWxfYXJyYXkgPSB1bC5hcnJheVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codWxfYXJyYXkpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGZvcmVjYXN0ZGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQobGkpXG5cblxuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge3dlZWtkYXk6ICdsb25nJ30pO1xuXG4gICAgICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYCAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcmVjYXN0RGF5RnVuY3Rpb24oKVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cbkdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSwgZGVmYXVsdF9mb3JlY2FzdClcbkFkZENpdHkoKVxuQ2xvc2VJbnB1dCgpXG5JbnB1dEZpZWxkKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAxNWU1MDY1ODdiNTYwMGNiODM1XCIpIl0sIm5hbWVzIjpbImRlZmF1bHRfZm9yZWNhc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmV0Y2hfZGVmYXVsdF92YWx1ZSIsIkNsb3NlSW5wdXQiLCJjbG9zZV9pbnB1dF9idXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJhZGRfY2l0eSIsImhpZGRlbiIsIklucHV0RmllbGQiLCJpbnB1dF9maWVsZCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiYXBwIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJHZXRJbmZvIiwiQWRkQ2l0eSIsImFkZF9jaXR5X2J1dHRvbiIsImFsbF9pbmZvIiwiZmV0Y2giLCJjdXJyZW50IiwiZm9yZWNhc3QiLCJsb2NhdGlvbiIsImpzb24iLCJmb3JlY2FzdGRheSIsImxlbmd0aCIsImNpdHkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwibmFtZSIsIndlYXRoZXJfaWNvbiIsInNyYyIsImNvbmRpdGlvbiIsImljb24iLCJoUGEiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZCIsIk1hdGgiLCJyb3VuZCIsIndpbmRfa3BoIiwidGVtcF9DIiwidGVtcF9jIiwiZm9yZWNhc3REYXlGdW5jdGlvbiIsInVsIiwiaSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwiaW5uZXJIVE1MIiwiYXZndGVtcF9jIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==