self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

const default_forecast = document.getElementById('app');
const fetch_default_value = 'auto:ip';
let value = true;
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
    const weather = document.getElementById('weather');
    const clone = weather.cloneNode(true);
    GetInfo(input_field, clone);
    const close_input_button = document.getElementById("add_city");
    close_input_button.parentNode.insertBefore(clone, close_input_button.nextSibling);
    // weather.parentNode.insertBefore(clone, weather)
    const weather_container = clone.getElementById('weather');
    clone.hidden = false;
    // CloseContainer(false, clone)
    console.log("city");
    console.log(clone);
  });
}
async function AddCity() {
  const add_city_button = document.getElementById("add-city");
  add_city_button.addEventListener('click', () => {
    const add_city = document.getElementById('add_city');
    add_city.hidden = false;
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
const whole_page = document;
function CloseContainer(value, whole_page) {
  document.getElementById('close_container').addEventListener('click', () => {
    const weather_container = whole_page.getElementById('weather');
    weather_container.hidden = value;
  });
}
GetInfo(fetch_default_value, default_forecast);
CloseContainer(value, whole_page);
AddCity();
CloseInput();
InputField();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f3f62331d8a57b1e6a12")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ni1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBkZWZhdWx0X2ZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5jb25zdCBmZXRjaF9kZWZhdWx0X3ZhbHVlID0gJ2F1dG86aXAnXG5sZXQgdmFsdWUgPSB0cnVlXG5cbmZ1bmN0aW9uIENsb3NlSW5wdXQoKSB7XG4gICAgY29uc3QgY2xvc2VfaW5wdXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2lucHV0JylcbiAgICBjbG9zZV9pbnB1dF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIElucHV0RmllbGQoKSB7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXJcbiAgICAoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0X2ZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0X2ZpZWxkKVxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcicpXG4gICAgICAgIGNvbnN0IGNsb25lID0gd2VhdGhlci5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgR2V0SW5mbyhpbnB1dF9maWVsZCwgY2xvbmUpXG4gICAgICAgIGNvbnN0IGNsb3NlX2lucHV0X2J1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9jaXR5XCIpXG4gICAgICAgIGNsb3NlX2lucHV0X2J1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZSwgY2xvc2VfaW5wdXRfYnV0dG9uLm5leHRTaWJsaW5nKVxuICAgICAgICAvLyB3ZWF0aGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lLCB3ZWF0aGVyKVxuICAgICAgICBjb25zdCB3ZWF0aGVyX2NvbnRhaW5lciA9IGNsb25lLmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyJylcbiAgICAgICAgY2xvbmUuaGlkZGVuID0gZmFsc2VcbiAgICAgICAgLy8gQ2xvc2VDb250YWluZXIoZmFsc2UsIGNsb25lKVxuICAgICAgICBjb25zb2xlLmxvZyhcImNpdHlcIilcbiAgICAgICAgY29uc29sZS5sb2coY2xvbmUpXG5cbiAgICB9XG4pfVxuXG5hc3luYyBmdW5jdGlvbiBBZGRDaXR5KCkge1xuICAgIGNvbnN0IGFkZF9jaXR5X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNpdHlcIilcbiAgICBhZGRfY2l0eV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZF9jaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jaXR5JylcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gZmFsc2VcblxuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIEdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSwgZGVmYXVsdF9mb3JlY2FzdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbF9pbmZvID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZGYxOGZlMWI4NDhlNDZkODhiYjE3NDk0NDIzMjcwMSZxPSR7ZmV0Y2hfZGVmYXVsdF92YWx1ZX0mZGF5cz02YClcbiAgICAgICAgY29uc3Qge2N1cnJlbnQsIGZvcmVjYXN0LCBsb2NhdGlvbn0gPSBhd2FpdCBhbGxfaW5mby5qc29uKClcbiAgICAgICAgY29uc3Qge2ZvcmVjYXN0ZGF5fSA9IGZvcmVjYXN0XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5Lmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG5cblxuICAgICAgICBjb25zdCBjaXR5ID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXR5X19uYW1lJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGxvY2F0aW9uLm5hbWVcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9pY29uID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3ZWF0aGVyX19pY29uJylbMF0uc3JjID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuY29uZGl0aW9uLmljb259YFxuICAgICAgICBjb25zdCBoUGEgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXNzdXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LnByZXNzdXJlX21ifSBoUGFgXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodW1pZGl0eV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5odW1pZGl0eX0gJWBcbiAgICAgICAgY29uc3Qgd2luZCA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2luZC1zcGVlZF9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7TWF0aC5yb3VuZChjdXJyZW50LndpbmRfa3BoICogMTAwMCAvIDM2MDApfSBtL3NgXG4gICAgICAgIGNvbnN0IHRlbXBfQyA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcGVyYXR1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID0gY3VycmVudC50ZW1wX2NcblxuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX19mb3JlY2FzdCcpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZm9yZWNhc3RkYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcblxuICAgICAgICAgICAgICAgIHVsLmFwcGVuZChsaSlcblxuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge3dlZWtkYXk6ICdsb25nJ30pO1xuXG4gICAgICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYCAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcmVjYXN0RGF5RnVuY3Rpb24oKVxuXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cbmNvbnN0IHdob2xlX3BhZ2UgPSBkb2N1bWVudFxuZnVuY3Rpb24gQ2xvc2VDb250YWluZXIgKHZhbHVlLCB3aG9sZV9wYWdlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2NvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB3ZWF0aGVyX2NvbnRhaW5lciA9IHdob2xlX3BhZ2UuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXInKVxuICAgICAgICB3ZWF0aGVyX2NvbnRhaW5lci5oaWRkZW4gPSB2YWx1ZVxuICAgIH0pXG59XG5cbkdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSwgZGVmYXVsdF9mb3JlY2FzdClcbkNsb3NlQ29udGFpbmVyKHZhbHVlLCB3aG9sZV9wYWdlKVxuQWRkQ2l0eSgpXG5DbG9zZUlucHV0KClcbklucHV0RmllbGQoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjNmNjIzMzFkOGE1N2IxZTZhMTJcIikiXSwibmFtZXMiOlsiZGVmYXVsdF9mb3JlY2FzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmZXRjaF9kZWZhdWx0X3ZhbHVlIiwidmFsdWUiLCJDbG9zZUlucHV0IiwiY2xvc2VfaW5wdXRfYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiYWRkX2NpdHkiLCJoaWRkZW4iLCJJbnB1dEZpZWxkIiwiaW5wdXRfZmllbGQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJ3ZWF0aGVyIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJHZXRJbmZvIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwid2VhdGhlcl9jb250YWluZXIiLCJBZGRDaXR5IiwiYWRkX2NpdHlfYnV0dG9uIiwiYWxsX2luZm8iLCJmZXRjaCIsImN1cnJlbnQiLCJmb3JlY2FzdCIsImxvY2F0aW9uIiwianNvbiIsImZvcmVjYXN0ZGF5IiwibGVuZ3RoIiwiY2l0eSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lclRleHQiLCJuYW1lIiwid2VhdGhlcl9pY29uIiwic3JjIiwiY29uZGl0aW9uIiwiaWNvbiIsImhQYSIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kIiwiTWF0aCIsInJvdW5kIiwid2luZF9rcGgiLCJ0ZW1wX0MiLCJ0ZW1wX2MiLCJmb3JlY2FzdERheUZ1bmN0aW9uIiwidWwiLCJpIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJpbm5lckhUTUwiLCJhdmd0ZW1wX2MiLCJlcnIiLCJ3aG9sZV9wYWdlIiwiQ2xvc2VDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9