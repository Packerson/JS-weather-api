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
    console.log(forecastday);
    console.log(location);
    const day_array = [];
    for (let i = 1; i < forecastday.length; i++) {
      let date = new Date(forecastday[i].date);
      let day = date.toLocaleString('en-us', {
        weekday: 'long'
      });
      day_array.push(day);
    }
    const city = location.name;
    const weather_icon = current.condition.icon;
    const hPa = `${current.pressure_mb} hPa`;
    const humidity = `${current.humidity} %`;
    const wind = `${Math.round(current.wind_kph * 1000 / 3600)} m/s`;
    const temp_C = current.temp_c;
    console.log(forecastday[0].day.condition.text);
    const div_input = document.getElementById('add_city');
    const div_container = document.createElement('div');
    div_input.after(div_container);
    div_container.innerHTML = `<div id= 'weather' class='module module__weather' >
                <button class="btn btn--icon btn--close close_container" id="close_container"><i class="material-icons">close</i></button>
    
            <div class="weather">
                <div class="weather__icon"><img src="assets/icons/rain.svg"/></div>
    
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
                    <li><span className="day">${day_array[0]}</span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        ${forecastday[0].day.avgtemp_c}</span>&deg;C</span>\</li>
                        
                        <li><span className="day">${day_array[1]}</span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        ${forecastday[1].day.avgtemp_c}</span>&deg;C</span>\</li>
                        
                        <li><span className="day">${day_array[2]}</span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        ${forecastday[2].day.avgtemp_c}</span>&deg;C</span>\</li>
                        
                        <li><span className="day">${day_array[3]}</span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        ${forecastday[3].day.avgtemp_c}</span>&deg;C</span>\</li>
                        
                        <li><span className="day">${day_array[4]}</span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        ${forecastday[4].day.avgtemp_c}</span>&deg;C</span>\</li>
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
/******/ 	__webpack_require__.h = () => ("0269b684cc259c388d52")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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czYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRlZmF1bHRfZm9yZWNhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbmNvbnN0IGZldGNoX2RlZmF1bHRfdmFsdWUgPSAnYXV0bzppcCdcbmxldCB2YWx1ZSA9IHRydWVcblxuXG4vKiBmdW5jdGlvbiBjbG9zaW5nIGlucHV0IGZpZWxkcyAqL1xuXG5mdW5jdGlvbiBDbG9zZUlucHV0KCkge1xuICAgIGNvbnN0IGNsb3NlX2lucHV0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9pbnB1dCcpXG4gICAgY2xvc2VfaW5wdXRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IHRydWVcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiBzaG93aW5nIGlucHV0IGZpZWxkcyAqL1xuXG5hc3luYyBmdW5jdGlvbiBBZGRDaXR5KCkge1xuICAgIGNvbnN0IGFkZF9jaXR5X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNpdHlcIilcbiAgICBhZGRfY2l0eV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZF9jaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jaXR5JylcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gZmFsc2VcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiBjbG9zaW5nIG1haW4gd2luZG93IHdpdGggd2VhdGhlciBmb3JlY2FzdCAqL1xuZnVuY3Rpb24gQ2xvc2VDb250YWluZXIgKHZhbHVlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2NvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuLyogZnVuY3Rpb24gZm9yIGxvb2tpbmcgZm9yIGlucHV0IGNpdHkvdmFsdWUgYW5kIHNob3dpbmcuXG4qIGNsb25lIHdlYXRoZXIgY29udGFpbmVyICAqL1xuXG5mdW5jdGlvbiBJbnB1dEZpZWxkKG5vZGUsIGNoaWxkKSB7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXJcbiAgICAoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0X2ZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0X2ZpZWxkKVxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcicpXG5cbiAgICAgICAgLy8gem1pZW5pxIcgY2xvbmVOb2RlXG4gICAgICAgIC8vIGNvbnN0IGNsb25lID0gd2VhdGhlci5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgR2V0SW5mbyhpbnB1dF9maWVsZClcbiAgICAgICAgQ2xvc2VDb250YWluZXIoZmFsc2UpXG4gICAgICAgIGNvbnN0IGNsb3NlX2lucHV0X2J1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9jaXR5XCIpXG4gICAgICAgIGNsb3NlX2lucHV0X2J1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9zZV9pbnB1dF9idXR0b24ubmV4dFNpYmxpbmcsIGNoaWxkKVxuICAgICAgICAvLyB3ZWF0aGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lLCB3ZWF0aGVyKVxuXG4gICAgICAgIC8vIENsb3NlQ29udGFpbmVyKHZhbHVlLCB3aG9sZV9wYWdlKVxuICAgICAgICBjb25zb2xlLmxvZyhcImNpdHlcIilcblxuXG4gICAgfVxuKX1cblxuXG5cbi8qIG1haW4gZnVuY3Rpb24sIGZldGNoIHRvIHdlYXRoZXIgYXBpICAqL1xuXG5hc3luYyBmdW5jdGlvbiBHZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT0ke2ZldGNoX2RlZmF1bHRfdmFsdWV9JmRheXM9NmApXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5KVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcblxuXG4gICAgICAgIGNvbnN0IGRheV9hcnJheSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZm9yZWNhc3RkYXkubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JlY2FzdGRheVtpXS5kYXRlKTtcbiAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHt3ZWVrZGF5OiAnbG9uZyd9KTtcbiAgICAgICAgICAgIGRheV9hcnJheS5wdXNoKGRheSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNpdHkgPSBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGN1cnJlbnQuY29uZGl0aW9uLmljb25cbiAgICAgICAgY29uc3QgaFBhID0gYCR7Y3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYFxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGAke2N1cnJlbnQuaHVtaWRpdHl9ICVgXG4gICAgICAgIGNvbnN0IHdpbmQgPSBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gY3VycmVudC50ZW1wX2NcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RkYXlbMF0uZGF5LmNvbmRpdGlvbi50ZXh0KVxuXG4gICAgICAgIGNvbnN0IGRpdl9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG5cbiAgICAgICAgY29uc3QgZGl2X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdl9pbnB1dC5hZnRlcihkaXZfY29udGFpbmVyKVxuICAgICAgICBkaXZfY29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgPGRpdiBpZD0gJ3dlYXRoZXInIGNsYXNzPSdtb2R1bGUgbW9kdWxlX193ZWF0aGVyJyA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLWljb24gYnRuLS1jbG9zZSBjbG9zZV9jb250YWluZXJcIiBpZD1cImNsb3NlX2NvbnRhaW5lclwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvaT48L2J1dHRvbj5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXJfX2ljb25cIj48aW1nIHNyYz1cImFzc2V0cy9pY29ucy9yYWluLnN2Z1wiLz48L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXR5X19uYW1lXCI+PC9zcGFuPiAke2NpdHl9PHNwYW4gY2xhc3M9XCJidG4gYnRuLS1pY29uXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVkaXQ8L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPiR7dGVtcF9DfTxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+PC9zcGFuPiZkZWc7QzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJ3ZWF0aGVyX19kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3ByZXNzdXJlLnN2Z1wiLz4ke2hQYX0gPHNwYW4gY2xhc3M9XCJwcmVzc3VyZV9fdmFsdWVcIj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvaHVtaWRpdHkuc3ZnXCIvPiR7aHVtaWRpdHl9IDxzcGFuIGNsYXNzPVwiaHVtaWRpdHlfX3ZhbHVlXCI+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3dpbmQtc3BlZWQuc3ZnXCIvPiR7d2luZH0gPHNwYW4gY2xhc3M9XCJ3aW5kLXNwZWVkX192YWx1ZVwiPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgPHVsIGNsYXNzPVwid2VhdGhlcl9fZm9yZWNhc3RcIiBpZD1cIndlYXRoZXJfX2ZvcmVjYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheV9hcnJheVswXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5WzBdLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheV9hcnJheVsxXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5WzFdLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheV9hcnJheVsyXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5WzJdLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheV9hcnJheVszXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5WzNdLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheV9hcnJheVs0XX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5WzRdLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuXG5cbiAgICAgICAgQ2xvc2VDb250YWluZXIodmFsdWUpXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuXG5cbkdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSlcblxuQWRkQ2l0eSgpXG5DbG9zZUlucHV0KClcbklucHV0RmllbGQoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMDI2OWI2ODRjYzI1OWMzODhkNTJcIikiXSwibmFtZXMiOlsiZGVmYXVsdF9mb3JlY2FzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmZXRjaF9kZWZhdWx0X3ZhbHVlIiwidmFsdWUiLCJDbG9zZUlucHV0IiwiY2xvc2VfaW5wdXRfYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiYWRkX2NpdHkiLCJoaWRkZW4iLCJBZGRDaXR5IiwiYWRkX2NpdHlfYnV0dG9uIiwiQ2xvc2VDb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwiSW5wdXRGaWVsZCIsIm5vZGUiLCJjaGlsZCIsImlucHV0X2ZpZWxkIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0Iiwid2VhdGhlciIsIkdldEluZm8iLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJkYXlfYXJyYXkiLCJpIiwibGVuZ3RoIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJwdXNoIiwiY2l0eSIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsInRleHQiLCJkaXZfaW5wdXQiLCJkaXZfY29udGFpbmVyIiwiY3JlYXRlRWxlbWVudCIsImFmdGVyIiwiaW5uZXJIVE1MIiwiYXZndGVtcF9jIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==