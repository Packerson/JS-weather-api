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

    // CloseContainer(false)

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
function CloseContainer(value) {
  document.getElementById('close_container').addEventListener('click', () => {
    const weather_container = document.getElementById('weather');
    weather_container.hidden = value;
  });
}
GetInfo(fetch_default_value, default_forecast);
CloseContainer();
AddCity();
CloseInput();
InputField();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("cdaa7bd1db7337f562c4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxjQUFjLENBQUMsT0FBTyxFQUFFO1VBQUNDLE9BQU8sRUFBRTtRQUFNLENBQUMsQ0FBQztRQUV6RFAsRUFBRSxDQUFDUSxTQUFTLEdBQUk7QUFDaEMsNENBQTRDSCxHQUFJO0FBQ2hEO0FBQ0E7QUFDQSwwQkFBMEIzQixXQUFXLENBQUNxQixDQUFDLENBQUMsQ0FBQ00sR0FBRyxDQUFDSSxTQUFVLHNCQUFxQjtNQUNoRTtJQUNKLENBQUM7SUFDRFosbUJBQW1CLEVBQUU7RUFHekIsQ0FBQyxDQUFDLE9BQU9hLEdBQUcsRUFBRTtJQUNWbEQsT0FBTyxDQUFDQyxHQUFHLENBQUNpRCxHQUFHLENBQUM7RUFDcEI7QUFDSjtBQUVBLFNBQVNDLGNBQWMsQ0FBRTVELEtBQUssRUFBRTtFQUM1QkgsUUFBUSxDQUFDQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0ssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07SUFDdkUsTUFBTTBELGlCQUFpQixHQUFHaEUsUUFBUSxDQUFDQyxjQUFjLENBQUMsU0FBUyxDQUFDO0lBQzVEK0QsaUJBQWlCLENBQUN2RCxNQUFNLEdBQUdOLEtBQUs7RUFDcEMsQ0FBQyxDQUFDO0FBQ047QUFFQWUsT0FBTyxDQUFDaEIsbUJBQW1CLEVBQUVILGdCQUFnQixDQUFDO0FBQzlDZ0UsY0FBYyxFQUFFO0FBQ2hCekMsT0FBTyxFQUFFO0FBQ1RsQixVQUFVLEVBQUU7QUFDWk0sVUFBVSxFQUFFOzs7Ozs7OztVQ3RHWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGVmYXVsdF9mb3JlY2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuY29uc3QgZmV0Y2hfZGVmYXVsdF92YWx1ZSA9ICdhdXRvOmlwJ1xubGV0IHZhbHVlID0gdHJ1ZVxuXG5mdW5jdGlvbiBDbG9zZUlucHV0KCkge1xuICAgIGNvbnN0IGNsb3NlX2lucHV0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9pbnB1dCcpXG4gICAgY2xvc2VfaW5wdXRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IHRydWVcbiAgICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBJbnB1dEZpZWxkKCkge1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9idXR0b24nKS5hZGRFdmVudExpc3RlbmVyXG4gICAgKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dF9maWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dF9maWVsZClcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXInKVxuICAgICAgICBjb25zdCBjbG9uZSA9IHdlYXRoZXIuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIEdldEluZm8oaW5wdXRfZmllbGQsIGNsb25lKVxuICAgICAgICBjb25zdCBjbG9zZV9pbnB1dF9idXR0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfY2l0eVwiKVxuICAgICAgICBjbG9zZV9pbnB1dF9idXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmUsIGNsb3NlX2lucHV0X2J1dHRvbi5uZXh0U2libGluZylcbiAgICAgICAgLy8gd2VhdGhlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZSwgd2VhdGhlcilcblxuICAgICAgICAvLyBDbG9zZUNvbnRhaW5lcihmYWxzZSlcblxuICAgICAgICBjb25zb2xlLmxvZyhjbG9uZSlcblxuICAgIH1cbil9XG5cbmFzeW5jIGZ1bmN0aW9uIEFkZENpdHkoKSB7XG4gICAgY29uc3QgYWRkX2NpdHlfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtY2l0eVwiKVxuICAgIGFkZF9jaXR5X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkX2NpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2NpdHknKVxuICAgICAgICBhZGRfY2l0eS5oaWRkZW4gPSBmYWxzZVxuXG4gICAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gR2V0SW5mbyhmZXRjaF9kZWZhdWx0X3ZhbHVlLCBkZWZhdWx0X2ZvcmVjYXN0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9JHtmZXRjaF9kZWZhdWx0X3ZhbHVlfSZkYXlzPTZgKVxuICAgICAgICBjb25zdCB7Y3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9ufSA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3RkYXl9ID0gZm9yZWNhc3RcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudClcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RkYXkubGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcblxuXG4gICAgICAgIGNvbnN0IGNpdHkgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NpdHlfX25hbWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgbG9jYXRpb24ubmFtZVxuICAgICAgICBjb25zdCB3ZWF0aGVyX2ljb24gPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ljb24nKVswXS5zcmMgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5jb25kaXRpb24uaWNvbn1gXG4gICAgICAgIGNvbnN0IGhQYSA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJlc3N1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWBcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h1bWlkaXR5X192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtjdXJyZW50Lmh1bWlkaXR5fSAlYFxuICAgICAgICBjb25zdCB3aW5kID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aW5kLXNwZWVkX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZW1wZXJhdHVyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPSBjdXJyZW50LnRlbXBfY1xuXG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJfX2ZvcmVjYXN0JylcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBmb3JlY2FzdGRheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKVxuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JlY2FzdGRheVtpXS5kYXRlKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7d2Vla2RheTogJ2xvbmcnfSk7XG5cbiAgICAgICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yZWNhc3REYXlGdW5jdGlvbigpXG5cblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5mdW5jdGlvbiBDbG9zZUNvbnRhaW5lciAodmFsdWUpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdlYXRoZXJfY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXInKVxuICAgICAgICB3ZWF0aGVyX2NvbnRhaW5lci5oaWRkZW4gPSB2YWx1ZVxuICAgIH0pXG59XG5cbkdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSwgZGVmYXVsdF9mb3JlY2FzdClcbkNsb3NlQ29udGFpbmVyKClcbkFkZENpdHkoKVxuQ2xvc2VJbnB1dCgpXG5JbnB1dEZpZWxkKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImNkYWE3YmQxZGI3MzM3ZjU2MmM0XCIpIl0sIm5hbWVzIjpbImRlZmF1bHRfZm9yZWNhc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmV0Y2hfZGVmYXVsdF92YWx1ZSIsInZhbHVlIiwiQ2xvc2VJbnB1dCIsImNsb3NlX2lucHV0X2J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImFkZF9jaXR5IiwiaGlkZGVuIiwiSW5wdXRGaWVsZCIsImlucHV0X2ZpZWxkIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0Iiwid2VhdGhlciIsImNsb25lIiwiY2xvbmVOb2RlIiwiR2V0SW5mbyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsIkFkZENpdHkiLCJhZGRfY2l0eV9idXR0b24iLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJsZW5ndGgiLCJjaXR5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImZvcmVjYXN0RGF5RnVuY3Rpb24iLCJ1bCIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImlubmVySFRNTCIsImF2Z3RlbXBfYyIsImVyciIsIkNsb3NlQ29udGFpbmVyIiwid2VhdGhlcl9jb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9