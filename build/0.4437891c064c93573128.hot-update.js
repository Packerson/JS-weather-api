self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

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
const fetch_default_value = 'auto:ip';
async function GetInfo(fetch_default_value) {
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
    const app = document.getElementById('app');
    const city = app.getElementsByClassName('city__name')[0].innerText = location.name;
    const weather_icon = app.getElementsByClassName('weather__icon')[0].src = `${current.condition.icon}`;
    const hPa = app.getElementsByClassName('pressure__value')[0].innerText = `${current.pressure_mb} hPa`;
    const humidity = app.getElementsByClassName('humidity__value')[0].innerText = `${current.humidity} %`;
    const wind = app.getElementsByClassName('wind-speed__value')[0].innerText = `${Math.round(current.wind_kph * 1000 / 3600)} m/s`;
    const temp_C = app.getElementsByClassName('temperature__value')[0].innerText = current.temp_c;
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
GetInfo(fetch_default_value);
AddCity();
CloseInput();
InputField();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6a61b534ae9bb4a30d59")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDLE9BQU9hLEdBQUcsRUFBRTtJQUNWaEQsT0FBTyxDQUFDQyxHQUFHLENBQUMrQyxHQUFHLENBQUM7RUFDcEI7QUFDSjtBQUVBMUMsT0FBTyxDQUFDRyxtQkFBbUIsQ0FBQztBQUM1QkYsT0FBTyxFQUFFO0FBQ1RsQixVQUFVLEVBQUU7QUFDWlEsVUFBVSxFQUFFOzs7Ozs7OztVQzlFWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIENsb3NlSW5wdXQoKSB7XG4gICAgY29uc3QgY2xvc2VfaW5wdXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2lucHV0JylcbiAgICBjbG9zZV9pbnB1dF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIElucHV0RmllbGQoKSB7XG5cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lclxuICAgICgnY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRfZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRfZmllbGQpXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgICAgIGNvbnN0IGNsb25lID0gYXBwLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBHZXRJbmZvKGlucHV0X2ZpZWxkKVxuXG4gICAgfVxuKX1cblxuYXN5bmMgZnVuY3Rpb24gQWRkQ2l0eSgpIHtcbiAgICBjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaXR5XCIpXG4gICAgYWRkX2NpdHlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRfY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IGZhbHNlXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZF9jaXR5KVxuICAgIH0pXG59XG5jb25zdCBmZXRjaF9kZWZhdWx0X3ZhbHVlID0gJ2F1dG86aXAnXG5hc3luYyBmdW5jdGlvbiBHZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT0ke2ZldGNoX2RlZmF1bHRfdmFsdWV9JmRheXM9NmApXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbiAgICAgICAgY29uc3QgY2l0eSA9IGFwcC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXR5X19uYW1lJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGxvY2F0aW9uLm5hbWVcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9pY29uID0gYXBwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ljb24nKVswXS5zcmMgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5jb25kaXRpb24uaWNvbn1gXG4gICAgICAgIGNvbnN0IGhQYSA9IGFwcC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmVzc3VyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYFxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGFwcC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodW1pZGl0eV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5odW1pZGl0eX0gJWBcbiAgICAgICAgY29uc3Qgd2luZCA9IGFwcC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aW5kLXNwZWVkX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gYXBwLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RlbXBlcmF0dXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9IGN1cnJlbnQudGVtcF9jXG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJfX2ZvcmVjYXN0JylcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZm9yZWNhc3RkYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQobGkpXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICAgICAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHt3ZWVrZGF5OiAnbG9uZyd9KTtcblxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JlY2FzdERheUZ1bmN0aW9uKClcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5HZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpXG5BZGRDaXR5KClcbkNsb3NlSW5wdXQoKVxuSW5wdXRGaWVsZCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI2YTYxYjUzNGFlOWJiNGEzMGQ1OVwiKSJdLCJuYW1lcyI6WyJDbG9zZUlucHV0IiwiY2xvc2VfaW5wdXRfYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImFkZF9jaXR5IiwiaGlkZGVuIiwiSW5wdXRGaWVsZCIsImlucHV0X2ZpZWxkIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJhcHAiLCJjbG9uZSIsImNsb25lTm9kZSIsIkdldEluZm8iLCJBZGRDaXR5IiwiYWRkX2NpdHlfYnV0dG9uIiwiZmV0Y2hfZGVmYXVsdF92YWx1ZSIsImFsbF9pbmZvIiwiZmV0Y2giLCJjdXJyZW50IiwiZm9yZWNhc3QiLCJsb2NhdGlvbiIsImpzb24iLCJmb3JlY2FzdGRheSIsImxlbmd0aCIsImNpdHkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwibmFtZSIsIndlYXRoZXJfaWNvbiIsInNyYyIsImNvbmRpdGlvbiIsImljb24iLCJoUGEiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZCIsIk1hdGgiLCJyb3VuZCIsIndpbmRfa3BoIiwidGVtcF9DIiwidGVtcF9jIiwiZm9yZWNhc3REYXlGdW5jdGlvbiIsInVsIiwiaSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwiaW5uZXJIVE1MIiwiYXZndGVtcF9jIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==