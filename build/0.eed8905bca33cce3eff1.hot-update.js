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
GetInfo(fetch_default_value);
AddCity();
CloseInput();
InputField();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("61afa49179a71ebaf99f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUM7RUFDcEI7QUFDSjtBQUVBMUMsT0FBTyxDQUFDRyxtQkFBbUIsQ0FBQztBQUM1QkYsT0FBTyxFQUFFO0FBQ1RsQixVQUFVLEVBQUU7QUFDWlEsVUFBVSxFQUFFOzs7Ozs7OztVQzlFWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIENsb3NlSW5wdXQoKSB7XG4gICAgY29uc3QgY2xvc2VfaW5wdXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2lucHV0JylcbiAgICBjbG9zZV9pbnB1dF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIElucHV0RmllbGQoKSB7XG5cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lclxuICAgICgnY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRfZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRfZmllbGQpXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgICAgIGNvbnN0IGNsb25lID0gYXBwLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBHZXRJbmZvKGlucHV0X2ZpZWxkKVxuXG4gICAgfVxuKX1cblxuYXN5bmMgZnVuY3Rpb24gQWRkQ2l0eSgpIHtcbiAgICBjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaXR5XCIpXG4gICAgYWRkX2NpdHlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRfY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IGZhbHNlXG4gICAgICAgIGNvbnNvbGUubG9nKGFkZF9jaXR5KVxuICAgIH0pXG59XG5jb25zdCBmZXRjaF9kZWZhdWx0X3ZhbHVlID0gJ2F1dG86aXAnXG5hc3luYyBmdW5jdGlvbiBHZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT0ke2ZldGNoX2RlZmF1bHRfdmFsdWV9JmRheXM9NmApXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuXG4gICAgICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXR5X19uYW1lJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGxvY2F0aW9uLm5hbWVcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9pY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VhdGhlcl9faWNvbicpWzBdLnNyYyA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LmNvbmRpdGlvbi5pY29ufWBcbiAgICAgICAgY29uc3QgaFBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJlc3N1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWBcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodW1pZGl0eV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5odW1pZGl0eX0gJWBcbiAgICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbmQtc3BlZWRfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke01hdGgucm91bmQoY3VycmVudC53aW5kX2twaCAqIDEwMDAgLyAzNjAwKX0gbS9zYFxuICAgICAgICBjb25zdCB0ZW1wX0MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZW1wZXJhdHVyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPSBjdXJyZW50LnRlbXBfY1xuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX19mb3JlY2FzdCcpXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGZvcmVjYXN0ZGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKVxuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JlY2FzdGRheVtpXS5kYXRlKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7d2Vla2RheTogJ2xvbmcnfSk7XG5cbiAgICAgICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yZWNhc3REYXlGdW5jdGlvbigpXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuR2V0SW5mbyhmZXRjaF9kZWZhdWx0X3ZhbHVlKVxuQWRkQ2l0eSgpXG5DbG9zZUlucHV0KClcbklucHV0RmllbGQoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjFhZmE0OTE3OWE3MWViYWY5OWZcIikiXSwibmFtZXMiOlsiQ2xvc2VJbnB1dCIsImNsb3NlX2lucHV0X2J1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJhZGRfY2l0eSIsImhpZGRlbiIsIklucHV0RmllbGQiLCJpbnB1dF9maWVsZCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiYXBwIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJHZXRJbmZvIiwiQWRkQ2l0eSIsImFkZF9jaXR5X2J1dHRvbiIsImZldGNoX2RlZmF1bHRfdmFsdWUiLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJsZW5ndGgiLCJjaXR5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImZvcmVjYXN0RGF5RnVuY3Rpb24iLCJ1bCIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImlubmVySFRNTCIsImF2Z3RlbXBfYyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=