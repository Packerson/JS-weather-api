self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

const default_forecast = document.getElementById('app');
const fetch_default_value = 'auto:ip';
let value = true;

/* function closing input fields */

function CloseInput() {
  const close_input_button = document.getElementById('close_input');
  close_input_button.addEventListener('click', ev => {
    add_city.hidden = true;
  });
}

/* function showing input fields */

async function AddCity() {
  const add_city_button = document.getElementById("add-city");
  add_city_button.addEventListener('click', () => {
    const add_city = document.getElementById('add_city');
    add_city.hidden = false;
  });
}

/* function closing main window with weather forecast */
function CloseContainer(value) {
  document.getElementById('close_container').addEventListener('click', function () {
    this.parentElement.remove();
  });
}

/* function for looking for input city/value and showing.
* clone weather container  */

function InputField(node, child) {
  document.getElementById('search_button').addEventListener('click', ev => {
    const input_field = document.getElementById('search').value;
    console.log(input_field);
    ev.preventDefault();
    const weather = document.getElementById('weather');

    // zmienić cloneNode
    // const clone = weather.cloneNode(true)
    GetInfo(input_field);
    CloseContainer(false);
    const close_input_button = document.getElementById("add_city");
    close_input_button.parentNode.insertBefore(close_input_button.nextSibling, child);
    // weather.parentNode.insertBefore(clone, weather)

    // CloseContainer(value, whole_page)
    console.log("city");
  });
}

/* main function, fetch to weather api  */

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
    const forecastDayFunction = () => {
      // const ul = document.getElementById('weather__forecast')

      for (let i = 1; i < forecastday.length; i++) {
        const li = document.createElement('li');

        // ul.append(li)

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
    const city = location.name;
    const weather_icon = current.condition.icon;
    const hPa = `${current.pressure_mb} hPa`;
    const humidity = `${current.humidity} %`;
    const wind = `${Math.round(current.wind_kph * 1000 / 3600)} m/s`;
    const temp_C = current.temp_c;
    const div_input = document.getElementById('add_city');
    const div_container = document.createElement('div');
    div_input.after(div_container);
    div_container.innerHTML = `<div id= 'weather' class='module module__weather' >
                <button class="btn btn--icon btn--close close_container" id="close_container"><i class="material-icons">close</i></button>
    
            <div class="weather">
                <div class="weather__icon"><img src="${weather_icon}"/></div>
    
            <div class="weather__info">
                <div class="city">
                    <span class="city__name"></span> ${city}<span class="btn btn--icon"><i class="material-icons">edit</i></span>
                </div>
                <div class="temperature">${temp_C}<span class="temperature__value"></span>&deg;C</div>
            </div>
    
            <ul class="weather__details">
                <li><img src="assets/icons/pressure.svg"/>${hPa} <span class="pressure__value"></span></li>
                <li><img src="assets/icons/humidity.svg"/>${humidity} <span class="humidity__value"></span></li>
                <li><img src="assets/icons/wind-speed.svg"/>${wind} <span class="wind-speed__value"></span></li>
            </ul>
    
            <ul class="weather__forecast" id="weather__forecast">
                    <li><span className="day"></span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        </span>&deg;C</span>\</li>
            </ul>
        </div>
        </div>`;
    CloseContainer(value);
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
/******/ 	__webpack_require__.h = () => ("c8e462a6249b1ab0d6e5")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLENBQUM7SUFDOUJBLGFBQWEsQ0FBQ2pCLFNBQVMsR0FDbEI7QUFDYjtBQUNBO0FBQ0E7QUFDQSx1REFBdURJLFlBQWE7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsdURBQXVERixJQUFLO0FBQzVEO0FBQ0EsMkNBQTJDWSxNQUFPO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLDREQUE0RFAsR0FBSTtBQUNoRSw0REFBNERFLFFBQVM7QUFDckUsOERBQThEQyxJQUFLO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7SUFHUDFDLGNBQWMsQ0FBQ1QsS0FBSyxDQUFDO0VBRXpCLENBQUMsQ0FBQyxPQUFPNEQsR0FBRyxFQUFFO0lBQ1Y1QyxPQUFPLENBQUNDLEdBQUcsQ0FBQzJDLEdBQUcsQ0FBQztFQUNwQjtBQUNKO0FBSUF4QyxPQUFPLENBQUNyQixtQkFBbUIsQ0FBQztBQUU1QlEsT0FBTyxFQUFFO0FBQ1ROLFVBQVUsRUFBRTtBQUNaVyxVQUFVLEVBQUU7Ozs7Ozs7O1VDL0laIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBkZWZhdWx0X2ZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5jb25zdCBmZXRjaF9kZWZhdWx0X3ZhbHVlID0gJ2F1dG86aXAnXG5sZXQgdmFsdWUgPSB0cnVlXG5cblxuLyogZnVuY3Rpb24gY2xvc2luZyBpbnB1dCBmaWVsZHMgKi9cblxuZnVuY3Rpb24gQ2xvc2VJbnB1dCgpIHtcbiAgICBjb25zdCBjbG9zZV9pbnB1dF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfaW5wdXQnKVxuICAgIGNsb3NlX2lucHV0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBhZGRfY2l0eS5oaWRkZW4gPSB0cnVlXG4gICAgfSlcbn1cblxuLyogZnVuY3Rpb24gc2hvd2luZyBpbnB1dCBmaWVsZHMgKi9cblxuYXN5bmMgZnVuY3Rpb24gQWRkQ2l0eSgpIHtcbiAgICBjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaXR5XCIpXG4gICAgYWRkX2NpdHlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRfY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IGZhbHNlXG4gICAgfSlcbn1cblxuLyogZnVuY3Rpb24gY2xvc2luZyBtYWluIHdpbmRvdyB3aXRoIHdlYXRoZXIgZm9yZWNhc3QgKi9cbmZ1bmN0aW9uIENsb3NlQ29udGFpbmVyICh2YWx1ZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIGZvciBsb29raW5nIGZvciBpbnB1dCBjaXR5L3ZhbHVlIGFuZCBzaG93aW5nLlxuKiBjbG9uZSB3ZWF0aGVyIGNvbnRhaW5lciAgKi9cblxuZnVuY3Rpb24gSW5wdXRGaWVsZChub2RlLCBjaGlsZCkge1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9idXR0b24nKS5hZGRFdmVudExpc3RlbmVyXG4gICAgKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dF9maWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dF9maWVsZClcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXInKVxuXG4gICAgICAgIC8vIHptaWVuacSHIGNsb25lTm9kZVxuICAgICAgICAvLyBjb25zdCBjbG9uZSA9IHdlYXRoZXIuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIEdldEluZm8oaW5wdXRfZmllbGQpXG4gICAgICAgIENsb3NlQ29udGFpbmVyKGZhbHNlKVxuICAgICAgICBjb25zdCBjbG9zZV9pbnB1dF9idXR0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfY2l0eVwiKVxuICAgICAgICBjbG9zZV9pbnB1dF9idXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvc2VfaW5wdXRfYnV0dG9uLm5leHRTaWJsaW5nLCBjaGlsZClcbiAgICAgICAgLy8gd2VhdGhlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZSwgd2VhdGhlcilcblxuICAgICAgICAvLyBDbG9zZUNvbnRhaW5lcih2YWx1ZSwgd2hvbGVfcGFnZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJjaXR5XCIpXG5cblxuICAgIH1cbil9XG5cbi8qIG1haW4gZnVuY3Rpb24sIGZldGNoIHRvIHdlYXRoZXIgYXBpICAqL1xuXG5hc3luYyBmdW5jdGlvbiBHZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT0ke2ZldGNoX2RlZmF1bHRfdmFsdWV9JmRheXM9NmApXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuXG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RGF5RnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX19mb3JlY2FzdCcpXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZm9yZWNhc3RkYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcblxuICAgICAgICAgICAgICAgIC8vIHVsLmFwcGVuZChsaSlcblxuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge3dlZWtkYXk6ICdsb25nJ30pO1xuXG4gICAgICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYCAgICBcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVtpXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNpdHkgPSBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGN1cnJlbnQuY29uZGl0aW9uLmljb25cbiAgICAgICAgY29uc3QgaFBhID0gYCR7Y3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYFxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGAke2N1cnJlbnQuaHVtaWRpdHl9ICVgXG4gICAgICAgIGNvbnN0IHdpbmQgPSBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gY3VycmVudC50ZW1wX2NcblxuXG4gICAgICAgIGNvbnN0IGRpdl9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG5cbiAgICAgICAgY29uc3QgZGl2X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdl9pbnB1dC5hZnRlcihkaXZfY29udGFpbmVyKVxuICAgICAgICBkaXZfY29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgPGRpdiBpZD0gJ3dlYXRoZXInIGNsYXNzPSdtb2R1bGUgbW9kdWxlX193ZWF0aGVyJyA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLWljb24gYnRuLS1jbG9zZSBjbG9zZV9jb250YWluZXJcIiBpZD1cImNsb3NlX2NvbnRhaW5lclwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvaT48L2J1dHRvbj5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXJfX2ljb25cIj48aW1nIHNyYz1cIiR7d2VhdGhlcl9pY29ufVwiLz48L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXR5X19uYW1lXCI+PC9zcGFuPiAke2NpdHl9PHNwYW4gY2xhc3M9XCJidG4gYnRuLS1pY29uXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVkaXQ8L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPiR7dGVtcF9DfTxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+PC9zcGFuPiZkZWc7QzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJ3ZWF0aGVyX19kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3ByZXNzdXJlLnN2Z1wiLz4ke2hQYX0gPHNwYW4gY2xhc3M9XCJwcmVzc3VyZV9fdmFsdWVcIj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvaHVtaWRpdHkuc3ZnXCIvPiR7aHVtaWRpdHl9IDxzcGFuIGNsYXNzPVwiaHVtaWRpdHlfX3ZhbHVlXCI+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3dpbmQtc3BlZWQuc3ZnXCIvPiR7d2luZH0gPHNwYW4gY2xhc3M9XCJ3aW5kLXNwZWVkX192YWx1ZVwiPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICBcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIndlYXRoZXJfX2ZvcmVjYXN0XCIgaWQ9XCJ3ZWF0aGVyX19mb3JlY2FzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuXG5cbiAgICAgICAgQ2xvc2VDb250YWluZXIodmFsdWUpXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuXG5cbkdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSlcblxuQWRkQ2l0eSgpXG5DbG9zZUlucHV0KClcbklucHV0RmllbGQoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYzhlNDYyYTYyNDliMWFiMGQ2ZTVcIikiXSwibmFtZXMiOlsiZGVmYXVsdF9mb3JlY2FzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmZXRjaF9kZWZhdWx0X3ZhbHVlIiwidmFsdWUiLCJDbG9zZUlucHV0IiwiY2xvc2VfaW5wdXRfYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiYWRkX2NpdHkiLCJoaWRkZW4iLCJBZGRDaXR5IiwiYWRkX2NpdHlfYnV0dG9uIiwiQ2xvc2VDb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwiSW5wdXRGaWVsZCIsIm5vZGUiLCJjaGlsZCIsImlucHV0X2ZpZWxkIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0Iiwid2VhdGhlciIsIkdldEluZm8iLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJsZW5ndGgiLCJmb3JlY2FzdERheUZ1bmN0aW9uIiwiaSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwiaW5uZXJIVE1MIiwiYXZndGVtcF9jIiwiY2l0eSIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImRpdl9pbnB1dCIsImRpdl9jb250YWluZXIiLCJhZnRlciIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=