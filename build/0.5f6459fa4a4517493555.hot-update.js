self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

const default_forecast = document.getElementById('app');
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
    const city = default_forecast.getElementsByClassName('city__name')[0].innerText = location.name;
    const weather_icon = default_forecast.getElementsByClassName('weather__icon')[0].src = `${current.condition.icon}`;
    const hPa = default_forecast.getElementsByClassName('pressure__value')[0].innerText = `${current.pressure_mb} hPa`;
    const humidity = default_forecast.getElementsByClassName('humidity__value')[0].innerText = `${current.humidity} %`;
    const wind = default_forecast.getElementsByClassName('wind-speed__value')[0].innerText = `${Math.round(current.wind_kph * 1000 / 3600)} m/s`;
    const temp_C = default_forecast.getElementsByClassName('temperature__value')[0].innerText = current.temp_c;
    const forecastDayFunction = () => {
      const ul = default_forecast.getElementsByClassName('weather__forecast');
      console.log(ul);
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
/******/ 	__webpack_require__.h = () => ("f3524fd6e298f2d10f91")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0ksU0FBVSxzQkFBcUI7TUFDaEU7SUFDSixDQUFDO0lBQ0RaLG1CQUFtQixFQUFFO0VBRXpCLENBQUMsQ0FBQyxPQUFPYSxHQUFHLEVBQUU7SUFDVmhELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDK0MsR0FBRyxDQUFDO0VBQ3BCO0FBQ0o7QUFFQTFDLE9BQU8sQ0FBQ0csbUJBQW1CLENBQUM7QUFDNUJGLE9BQU8sRUFBRTtBQUNUaEIsVUFBVSxFQUFFO0FBQ1pNLFVBQVUsRUFBRTs7Ozs7Ozs7VUNyRloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRlZmF1bHRfZm9yZWNhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcblxuZnVuY3Rpb24gQ2xvc2VJbnB1dCgpIHtcbiAgICBjb25zdCBjbG9zZV9pbnB1dF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfaW5wdXQnKVxuICAgIGNsb3NlX2lucHV0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBhZGRfY2l0eS5oaWRkZW4gPSB0cnVlXG4gICAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gSW5wdXRGaWVsZCgpIHtcblxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9idXR0b24nKS5hZGRFdmVudExpc3RlbmVyXG4gICAgKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dF9maWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dF9maWVsZClcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbiAgICAgICAgY29uc3QgY2xvbmUgPSBhcHAuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIEdldEluZm8oaW5wdXRfZmllbGQpXG5cbiAgICB9XG4pfVxuXG5hc3luYyBmdW5jdGlvbiBBZGRDaXR5KCkge1xuICAgIGNvbnN0IGFkZF9jaXR5X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNpdHlcIilcbiAgICBhZGRfY2l0eV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZF9jaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jaXR5JylcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gZmFsc2VcbiAgICAgICAgY29uc29sZS5sb2coYWRkX2NpdHkpXG4gICAgfSlcbn1cbmNvbnN0IGZldGNoX2RlZmF1bHRfdmFsdWUgPSAnYXV0bzppcCdcbmFzeW5jIGZ1bmN0aW9uIEdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbF9pbmZvID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZGYxOGZlMWI4NDhlNDZkODhiYjE3NDk0NDIzMjcwMSZxPSR7ZmV0Y2hfZGVmYXVsdF92YWx1ZX0mZGF5cz02YClcbiAgICAgICAgY29uc3Qge2N1cnJlbnQsIGZvcmVjYXN0LCBsb2NhdGlvbn0gPSBhd2FpdCBhbGxfaW5mby5qc29uKClcbiAgICAgICAgY29uc3Qge2ZvcmVjYXN0ZGF5fSA9IGZvcmVjYXN0XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5Lmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG5cbiAgICAgICAgY29uc3QgY2l0eSA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2l0eV9fbmFtZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VhdGhlcl9faWNvbicpWzBdLnNyYyA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LmNvbmRpdGlvbi5pY29ufWBcbiAgICAgICAgY29uc3QgaFBhID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmVzc3VyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYFxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHVtaWRpdHlfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuaHVtaWRpdHl9ICVgXG4gICAgICAgIGNvbnN0IHdpbmQgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbmQtc3BlZWRfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke01hdGgucm91bmQoY3VycmVudC53aW5kX2twaCAqIDEwMDAgLyAzNjAwKX0gbS9zYFxuICAgICAgICBjb25zdCB0ZW1wX0MgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RlbXBlcmF0dXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9IGN1cnJlbnQudGVtcF9jXG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlGdW5jdGlvbiA9ICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgdWwgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ZvcmVjYXN0JylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVsKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBmb3JlY2FzdGRheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKVxuXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICAgICAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHt3ZWVrZGF5OiAnbG9uZyd9KTtcblxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JlY2FzdERheUZ1bmN0aW9uKClcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5HZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpXG5BZGRDaXR5KClcbkNsb3NlSW5wdXQoKVxuSW5wdXRGaWVsZCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMzUyNGZkNmUyOThmMmQxMGY5MVwiKSJdLCJuYW1lcyI6WyJkZWZhdWx0X2ZvcmVjYXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkNsb3NlSW5wdXQiLCJjbG9zZV9pbnB1dF9idXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJhZGRfY2l0eSIsImhpZGRlbiIsIklucHV0RmllbGQiLCJpbnB1dF9maWVsZCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiYXBwIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJHZXRJbmZvIiwiQWRkQ2l0eSIsImFkZF9jaXR5X2J1dHRvbiIsImZldGNoX2RlZmF1bHRfdmFsdWUiLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJsZW5ndGgiLCJjaXR5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImZvcmVjYXN0RGF5RnVuY3Rpb24iLCJ1bCIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImlubmVySFRNTCIsImF2Z3RlbXBfYyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=