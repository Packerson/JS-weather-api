self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

const default_forecast = document.getElementById('app');
const fetch_default_value = 'auto:ip';
let value = true;

// function CloseInput() {
//     const close_input_button = document.getElementById('close_input')
//     close_input_button.addEventListener('click', (ev) => {
//         add_city.hidden = true
//     })
// }

async function AddCity() {
  const add_city_button = document.getElementById("add-city");
  add_city_button.addEventListener('click', () => {
    const add_city = document.getElementById('add_city');
    add_city.hidden = false;
    // add_city.hidden = !add_city.hidden;

    // if (add_city.hidden) {
    //
    // }else {
    //     add_city.hidden = true
    // }
  });
}

function CloseContainer(value, whole_page) {
  document.getElementById('close_container').addEventListener('click', () => {
    const weather_container = document.getElementById('weather');
    weather_container.hidden = value;
  });
}
function InputField() {
  document.getElementById('search_button').addEventListener('click', ev => {
    const input_field = document.getElementById('search').value;
    console.log(input_field);
    ev.preventDefault();
    const weather = document.getElementById('weather');
    const clone = weather.cloneNode(true);
    GetInfo(input_field, clone);
    CloseContainer(false, clone);
    const close_input_button = document.getElementById("add_city");
    close_input_button.parentNode.insertBefore(clone, close_input_button.nextSibling);
    // weather.parentNode.insertBefore(clone, weather)

    CloseContainer(value, whole_page);
    console.log("city");
    console.log(clone);
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
    CloseContainer(value, whole_page);
  } catch (err) {
    console.log(err);
  }
}
const whole_page = document;
GetInfo(fetch_default_value, default_forecast);
AddCity();
CloseInput();
InputField();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("439dfdef1596840e1ce9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxFQUFFLEVBQUU7UUFDekMsTUFBTUMsRUFBRSxHQUFHdEQsUUFBUSxDQUFDdUQsYUFBYSxDQUFDLElBQUksQ0FBQztRQUV2Q0gsRUFBRSxDQUFDSSxNQUFNLENBQUNGLEVBQUUsQ0FBQztRQUViLElBQUlHLElBQUksR0FBRyxJQUFJQyxJQUFJLENBQUMxQixXQUFXLENBQUNxQixDQUFDLENBQUMsQ0FBQ0ksSUFBSSxDQUFDO1FBQ3hDLElBQUlFLEdBQUcsR0FBR0YsSUFBSSxDQUFDRyxjQUFjLENBQUMsT0FBTyxFQUFFO1VBQUNDLE9BQU8sRUFBRTtRQUFNLENBQUMsQ0FBQztRQUV6RFAsRUFBRSxDQUFDUSxTQUFTLEdBQUk7QUFDaEMsNENBQTRDSCxHQUFJO0FBQ2hEO0FBQ0E7QUFDQSwwQkFBMEIzQixXQUFXLENBQUNxQixDQUFDLENBQUMsQ0FBQ00sR0FBRyxDQUFDSSxTQUFVLHNCQUFxQjtNQUNoRTtJQUNKLENBQUM7SUFDRFosbUJBQW1CLEVBQUU7SUFDckIxQyxjQUFjLENBQUNOLEtBQUssRUFBRU8sVUFBVSxDQUFDO0VBRXJDLENBQUMsQ0FBQyxPQUFPc0QsR0FBRyxFQUFFO0lBQ1ZqRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2dELEdBQUcsQ0FBQztFQUNwQjtBQUNKO0FBQ0EsTUFBTXRELFVBQVUsR0FBR1YsUUFBUTtBQUczQnFCLE9BQU8sQ0FBQ25CLG1CQUFtQixFQUFFSCxnQkFBZ0IsQ0FBQztBQUU5Q0ssT0FBTyxFQUFFO0FBQ1Q2RCxVQUFVLEVBQUU7QUFDWnJELFVBQVUsRUFBRTs7Ozs7Ozs7VUNuSFoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRlZmF1bHRfZm9yZWNhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbmNvbnN0IGZldGNoX2RlZmF1bHRfdmFsdWUgPSAnYXV0bzppcCdcbmxldCB2YWx1ZSA9IHRydWVcblxuLy8gZnVuY3Rpb24gQ2xvc2VJbnB1dCgpIHtcbi8vICAgICBjb25zdCBjbG9zZV9pbnB1dF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfaW5wdXQnKVxuLy8gICAgIGNsb3NlX2lucHV0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuLy8gICAgICAgICBhZGRfY2l0eS5oaWRkZW4gPSB0cnVlXG4vLyAgICAgfSlcbi8vIH1cblxuYXN5bmMgZnVuY3Rpb24gQWRkQ2l0eSgpIHtcbiAgICBjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaXR5XCIpXG4gICAgYWRkX2NpdHlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRfY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IGZhbHNlXG4gICAgICAgIC8vIGFkZF9jaXR5LmhpZGRlbiA9ICFhZGRfY2l0eS5oaWRkZW47XG5cbiAgICAgICAgLy8gaWYgKGFkZF9jaXR5LmhpZGRlbikge1xuICAgICAgICAvL1xuICAgICAgICAvLyB9ZWxzZSB7XG4gICAgICAgIC8vICAgICBhZGRfY2l0eS5oaWRkZW4gPSB0cnVlXG4gICAgICAgIC8vIH1cblxuXG4gICAgfSlcbn1cbmZ1bmN0aW9uIENsb3NlQ29udGFpbmVyICh2YWx1ZSwgd2hvbGVfcGFnZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcicpXG4gICAgICAgIHdlYXRoZXJfY29udGFpbmVyLmhpZGRlbiA9IHZhbHVlXG4gICAgfSlcbn1cblxuXG5mdW5jdGlvbiBJbnB1dEZpZWxkKCkge1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9idXR0b24nKS5hZGRFdmVudExpc3RlbmVyXG4gICAgKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dF9maWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dF9maWVsZClcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXInKVxuICAgICAgICBjb25zdCBjbG9uZSA9IHdlYXRoZXIuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIEdldEluZm8oaW5wdXRfZmllbGQsIGNsb25lKVxuICAgICAgICBDbG9zZUNvbnRhaW5lcihmYWxzZSwgY2xvbmUpXG4gICAgICAgIGNvbnN0IGNsb3NlX2lucHV0X2J1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9jaXR5XCIpXG4gICAgICAgIGNsb3NlX2lucHV0X2J1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZSwgY2xvc2VfaW5wdXRfYnV0dG9uLm5leHRTaWJsaW5nKVxuICAgICAgICAvLyB3ZWF0aGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lLCB3ZWF0aGVyKVxuXG4gICAgICAgIENsb3NlQ29udGFpbmVyKHZhbHVlLCB3aG9sZV9wYWdlKVxuICAgICAgICBjb25zb2xlLmxvZyhcImNpdHlcIilcbiAgICAgICAgY29uc29sZS5sb2coY2xvbmUpXG5cbiAgICB9XG4pfVxuXG5cblxuYXN5bmMgZnVuY3Rpb24gR2V0SW5mbyhmZXRjaF9kZWZhdWx0X3ZhbHVlLCBkZWZhdWx0X2ZvcmVjYXN0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9JHtmZXRjaF9kZWZhdWx0X3ZhbHVlfSZkYXlzPTZgKVxuICAgICAgICBjb25zdCB7Y3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9ufSA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3RkYXl9ID0gZm9yZWNhc3RcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudClcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RkYXkubGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcblxuXG4gICAgICAgIGNvbnN0IGNpdHkgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NpdHlfX25hbWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgbG9jYXRpb24ubmFtZVxuICAgICAgICBjb25zdCB3ZWF0aGVyX2ljb24gPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ljb24nKVswXS5zcmMgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5jb25kaXRpb24uaWNvbn1gXG4gICAgICAgIGNvbnN0IGhQYSA9IGRlZmF1bHRfZm9yZWNhc3QuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJlc3N1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWBcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkZWZhdWx0X2ZvcmVjYXN0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h1bWlkaXR5X192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtjdXJyZW50Lmh1bWlkaXR5fSAlYFxuICAgICAgICBjb25zdCB3aW5kID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aW5kLXNwZWVkX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gZGVmYXVsdF9mb3JlY2FzdC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZW1wZXJhdHVyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPSBjdXJyZW50LnRlbXBfY1xuXG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJfX2ZvcmVjYXN0JylcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBmb3JlY2FzdGRheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKVxuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JlY2FzdGRheVtpXS5kYXRlKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7d2Vla2RheTogJ2xvbmcnfSk7XG5cbiAgICAgICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yZWNhc3REYXlGdW5jdGlvbigpXG4gICAgICAgIENsb3NlQ29udGFpbmVyKHZhbHVlLCB3aG9sZV9wYWdlKVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5jb25zdCB3aG9sZV9wYWdlID0gZG9jdW1lbnRcblxuXG5HZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUsIGRlZmF1bHRfZm9yZWNhc3QpXG5cbkFkZENpdHkoKVxuQ2xvc2VJbnB1dCgpXG5JbnB1dEZpZWxkKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjQzOWRmZGVmMTU5Njg0MGUxY2U5XCIpIl0sIm5hbWVzIjpbImRlZmF1bHRfZm9yZWNhc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmV0Y2hfZGVmYXVsdF92YWx1ZSIsInZhbHVlIiwiQWRkQ2l0eSIsImFkZF9jaXR5X2J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJhZGRfY2l0eSIsImhpZGRlbiIsIkNsb3NlQ29udGFpbmVyIiwid2hvbGVfcGFnZSIsIndlYXRoZXJfY29udGFpbmVyIiwiSW5wdXRGaWVsZCIsImV2IiwiaW5wdXRfZmllbGQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJ3ZWF0aGVyIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJHZXRJbmZvIiwiY2xvc2VfaW5wdXRfYnV0dG9uIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiYWxsX2luZm8iLCJmZXRjaCIsImN1cnJlbnQiLCJmb3JlY2FzdCIsImxvY2F0aW9uIiwianNvbiIsImZvcmVjYXN0ZGF5IiwibGVuZ3RoIiwiY2l0eSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpbm5lclRleHQiLCJuYW1lIiwid2VhdGhlcl9pY29uIiwic3JjIiwiY29uZGl0aW9uIiwiaWNvbiIsImhQYSIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kIiwiTWF0aCIsInJvdW5kIiwid2luZF9rcGgiLCJ0ZW1wX0MiLCJ0ZW1wX2MiLCJmb3JlY2FzdERheUZ1bmN0aW9uIiwidWwiLCJpIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJpbm5lckhUTUwiLCJhdmd0ZW1wX2MiLCJlcnIiLCJDbG9zZUlucHV0Il0sInNvdXJjZVJvb3QiOiIifQ==