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
    app.append(clone);
    console.log(clone);
    GetInfo(input_field, clone);
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
/******/ 	__webpack_require__.h = () => ("4aec477a0bd2cfc817ab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NmUyNTFiNGQ5MzA1ZTQzNmI1NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsTUFBTUEsZ0JBQWdCLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztBQUN2RCxNQUFNQyxtQkFBbUIsR0FBRyxTQUFTO0FBRXJDLFNBQVNDLFVBQVUsR0FBRztFQUNsQixNQUFNQyxrQkFBa0IsR0FBR0osUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0VBQ2pFRyxrQkFBa0IsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFHQyxFQUFFLElBQUs7SUFDakRDLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLElBQUk7RUFDMUIsQ0FBQyxDQUFDO0FBQ047QUFFQSxlQUFlQyxVQUFVLEdBQUc7RUFFeEJULFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDSSxnQkFBZ0IsQ0FDeEQsT0FBTyxFQUFHQyxFQUFFLElBQUs7SUFDZCxNQUFNSSxXQUFXLEdBQUdWLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDVSxLQUFLO0lBQzNEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsV0FBVyxDQUFDO0lBQ3hCSixFQUFFLENBQUNRLGNBQWMsRUFBRTtJQUNuQixNQUFNQyxHQUFHLEdBQUdmLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUMxQyxNQUFNZSxLQUFLLEdBQUdELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLElBQUksQ0FBQztJQUNqQ0YsR0FBRyxDQUFDRyxNQUFNLENBQUNGLEtBQUssQ0FBQztJQUNqQkosT0FBTyxDQUFDQyxHQUFHLENBQUNHLEtBQUssQ0FBQztJQUNsQkcsT0FBTyxDQUFDVCxXQUFXLEVBQUVNLEtBQUssQ0FBQztFQUMvQixDQUFDLENBQ0o7QUFBQTtBQUVELGVBQWVJLE9BQU8sR0FBRztFQUNyQixNQUFNQyxlQUFlLEdBQUdyQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxVQUFVLENBQUM7RUFDM0RvQixlQUFlLENBQUNoQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTTtJQUM1QyxNQUFNRSxRQUFRLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUNwRE0sUUFBUSxDQUFDQyxNQUFNLEdBQUcsS0FBSztFQUUzQixDQUFDLENBQUM7QUFDTjtBQUVBLGVBQWVXLE9BQU8sQ0FBQ2pCLG1CQUFtQixFQUFFSCxnQkFBZ0IsRUFBRTtFQUMxRCxJQUFJO0lBQ0EsTUFBTXVCLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsb0ZBQW1GckIsbUJBQW9CLFNBQVEsQ0FBQztJQUM5SSxNQUFNO01BQUNzQixPQUFPO01BQUVDLFFBQVE7TUFBRUM7SUFBUSxDQUFDLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFJLEVBQUU7SUFDM0QsTUFBTTtNQUFDQztJQUFXLENBQUMsR0FBR0gsUUFBUTtJQUM5QmIsT0FBTyxDQUFDQyxHQUFHLENBQUNXLE9BQU8sQ0FBQztJQUNwQlosT0FBTyxDQUFDQyxHQUFHLENBQUNlLFdBQVcsQ0FBQ0MsTUFBTSxDQUFDO0lBQy9CakIsT0FBTyxDQUFDQyxHQUFHLENBQUNhLFFBQVEsQ0FBQztJQUdyQixNQUFNSSxJQUFJLEdBQUcvQixnQkFBZ0IsQ0FBQ2dDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQzNFTixRQUFRLENBQUNPLElBQUk7SUFDakIsTUFBTUMsWUFBWSxHQUFHbkMsZ0JBQWdCLENBQUNnQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0ksR0FBRyxHQUMvRSxHQUFFWCxPQUFPLENBQUNZLFNBQVMsQ0FBQ0MsSUFBSyxFQUFDO0lBQy9CLE1BQU1DLEdBQUcsR0FBR3ZDLGdCQUFnQixDQUFDZ0Msc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUM5RSxHQUFFUixPQUFPLENBQUNlLFdBQVksTUFBSztJQUNoQyxNQUFNQyxRQUFRLEdBQUd6QyxnQkFBZ0IsQ0FBQ2dDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FDbkYsR0FBRVIsT0FBTyxDQUFDZ0IsUUFBUyxJQUFHO0lBQzNCLE1BQU1DLElBQUksR0FBRzFDLGdCQUFnQixDQUFDZ0Msc0JBQXNCLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUNqRixHQUFFVSxJQUFJLENBQUNDLEtBQUssQ0FBQ25CLE9BQU8sQ0FBQ29CLFFBQVEsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFFLE1BQUs7SUFDdkQsTUFBTUMsTUFBTSxHQUFHOUMsZ0JBQWdCLENBQUNnQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUdSLE9BQU8sQ0FBQ3NCLE1BQU07SUFFMUcsTUFBTUMsbUJBQW1CLEdBQUcsTUFBTTtNQUM5QixNQUFNQyxFQUFFLEdBQUdoRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQztNQUN2RDtNQUNBO01BQ0EsS0FBSyxJQUFJZ0QsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHckIsV0FBVyxDQUFDQyxNQUFNLEVBQUVvQixDQUFDLEVBQUUsRUFBRTtRQUN6QyxNQUFNQyxFQUFFLEdBQUdsRCxRQUFRLENBQUNtRCxhQUFhLENBQUMsSUFBSSxDQUFDO1FBRXZDSCxFQUFFLENBQUM5QixNQUFNLENBQUNnQyxFQUFFLENBQUM7UUFHYixJQUFJRSxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDekIsV0FBVyxDQUFDcUIsQ0FBQyxDQUFDLENBQUNHLElBQUksQ0FBQztRQUN4QyxJQUFJRSxHQUFHLEdBQUdGLElBQUksQ0FBQ0csY0FBYyxDQUFDLE9BQU8sRUFBRTtVQUFDQyxPQUFPLEVBQUU7UUFBTSxDQUFDLENBQUM7UUFFekROLEVBQUUsQ0FBQ08sU0FBUyxHQUFJO0FBQ2hDLDRDQUE0Q0gsR0FBSTtBQUNoRDtBQUNBO0FBQ0EsMEJBQTBCMUIsV0FBVyxDQUFDcUIsQ0FBQyxDQUFDLENBQUNLLEdBQUcsQ0FBQ0ksU0FBVSxzQkFBcUI7TUFDaEU7SUFDSixDQUFDO0lBQ0RYLG1CQUFtQixFQUFFO0VBRXpCLENBQUMsQ0FBQyxPQUFPWSxHQUFHLEVBQUU7SUFDVi9DLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDOEMsR0FBRyxDQUFDO0VBQ3BCO0FBQ0o7QUFFQXhDLE9BQU8sQ0FBQ2pCLG1CQUFtQixFQUFFSCxnQkFBZ0IsQ0FBQztBQUM5Q3FCLE9BQU8sRUFBRTtBQUNUakIsVUFBVSxFQUFFO0FBQ1pNLFVBQVUsRUFBRTs7Ozs7Ozs7VUN2RloiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRlZmF1bHRfZm9yZWNhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbmNvbnN0IGZldGNoX2RlZmF1bHRfdmFsdWUgPSAnYXV0bzppcCdcblxuZnVuY3Rpb24gQ2xvc2VJbnB1dCgpIHtcbiAgICBjb25zdCBjbG9zZV9pbnB1dF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfaW5wdXQnKVxuICAgIGNsb3NlX2lucHV0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBhZGRfY2l0eS5oaWRkZW4gPSB0cnVlXG4gICAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gSW5wdXRGaWVsZCgpIHtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lclxuICAgICgnY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRfZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRfZmllbGQpXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4gICAgICAgIGNvbnN0IGNsb25lID0gYXBwLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBhcHAuYXBwZW5kKGNsb25lKVxuICAgICAgICBjb25zb2xlLmxvZyhjbG9uZSlcbiAgICAgICAgR2V0SW5mbyhpbnB1dF9maWVsZCwgY2xvbmUpXG4gICAgfVxuKX1cblxuYXN5bmMgZnVuY3Rpb24gQWRkQ2l0eSgpIHtcbiAgICBjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaXR5XCIpXG4gICAgYWRkX2NpdHlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRfY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IGZhbHNlXG5cbiAgICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBHZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUsIGRlZmF1bHRfZm9yZWNhc3QpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT0ke2ZldGNoX2RlZmF1bHRfdmFsdWV9JmRheXM9NmApXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuXG5cbiAgICAgICAgY29uc3QgY2l0eSA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2l0eV9fbmFtZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VhdGhlcl9faWNvbicpWzBdLnNyYyA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LmNvbmRpdGlvbi5pY29ufWBcbiAgICAgICAgY29uc3QgaFBhID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmVzc3VyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYFxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaHVtaWRpdHlfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuaHVtaWRpdHl9ICVgXG4gICAgICAgIGNvbnN0IHdpbmQgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbmQtc3BlZWRfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke01hdGgucm91bmQoY3VycmVudC53aW5kX2twaCAqIDEwMDAgLyAzNjAwKX0gbS9zYFxuICAgICAgICBjb25zdCB0ZW1wX0MgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RlbXBlcmF0dXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9IGN1cnJlbnQudGVtcF9jXG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJfX2ZvcmVjYXN0JylcbiAgICAgICAgICAgIC8vIGNvbnN0IHVsX2FycmF5ID0gdWwuYXJyYXlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHVsX2FycmF5KVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBmb3JlY2FzdGRheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKVxuXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICAgICAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHt3ZWVrZGF5OiAnbG9uZyd9KTtcblxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JlY2FzdERheUZ1bmN0aW9uKClcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5HZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUsIGRlZmF1bHRfZm9yZWNhc3QpXG5BZGRDaXR5KClcbkNsb3NlSW5wdXQoKVxuSW5wdXRGaWVsZCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0YWVjNDc3YTBiZDJjZmM4MTdhYlwiKSJdLCJuYW1lcyI6WyJkZWZhdWx0X2ZvcmVjYXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZldGNoX2RlZmF1bHRfdmFsdWUiLCJDbG9zZUlucHV0IiwiY2xvc2VfaW5wdXRfYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiYWRkX2NpdHkiLCJoaWRkZW4iLCJJbnB1dEZpZWxkIiwiaW5wdXRfZmllbGQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImFwcCIsImNsb25lIiwiY2xvbmVOb2RlIiwiYXBwZW5kIiwiR2V0SW5mbyIsIkFkZENpdHkiLCJhZGRfY2l0eV9idXR0b24iLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJsZW5ndGgiLCJjaXR5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImZvcmVjYXN0RGF5RnVuY3Rpb24iLCJ1bCIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImlubmVySFRNTCIsImF2Z3RlbXBfYyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=