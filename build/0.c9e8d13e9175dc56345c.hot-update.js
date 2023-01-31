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
    const day_array = [];
    for (let i = 1; i < forecastday.length; i++) {
      const li = document.createElement('li');

      // ul.append(li)

      let date = new Date(forecastday[i].date);
      let day = date.toLocaleString('en-us', {
        weekday: 'long'
      });
      day_array.push(day);
      li.innerHTML = `    
                    <span className="day">${day}</span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        </span>&deg;C</span>`;
    }
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
/******/ 	__webpack_require__.h = () => ("7950a609a0d4de4e9426")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1ROLFVBQVUsRUFBRTtBQUNaVyxVQUFVLEVBQUU7Ozs7Ozs7O1VDbEtaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBkZWZhdWx0X2ZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5jb25zdCBmZXRjaF9kZWZhdWx0X3ZhbHVlID0gJ2F1dG86aXAnXG5sZXQgdmFsdWUgPSB0cnVlXG5cblxuLyogZnVuY3Rpb24gY2xvc2luZyBpbnB1dCBmaWVsZHMgKi9cblxuZnVuY3Rpb24gQ2xvc2VJbnB1dCgpIHtcbiAgICBjb25zdCBjbG9zZV9pbnB1dF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfaW5wdXQnKVxuICAgIGNsb3NlX2lucHV0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBhZGRfY2l0eS5oaWRkZW4gPSB0cnVlXG4gICAgfSlcbn1cblxuLyogZnVuY3Rpb24gc2hvd2luZyBpbnB1dCBmaWVsZHMgKi9cblxuYXN5bmMgZnVuY3Rpb24gQWRkQ2l0eSgpIHtcbiAgICBjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaXR5XCIpXG4gICAgYWRkX2NpdHlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRfY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IGZhbHNlXG4gICAgfSlcbn1cblxuLyogZnVuY3Rpb24gY2xvc2luZyBtYWluIHdpbmRvdyB3aXRoIHdlYXRoZXIgZm9yZWNhc3QgKi9cbmZ1bmN0aW9uIENsb3NlQ29udGFpbmVyICh2YWx1ZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIGZvciBsb29raW5nIGZvciBpbnB1dCBjaXR5L3ZhbHVlIGFuZCBzaG93aW5nLlxuKiBjbG9uZSB3ZWF0aGVyIGNvbnRhaW5lciAgKi9cblxuZnVuY3Rpb24gSW5wdXRGaWVsZChub2RlLCBjaGlsZCkge1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9idXR0b24nKS5hZGRFdmVudExpc3RlbmVyXG4gICAgKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dF9maWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dF9maWVsZClcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXInKVxuXG4gICAgICAgIC8vIHptaWVuacSHIGNsb25lTm9kZVxuICAgICAgICAvLyBjb25zdCBjbG9uZSA9IHdlYXRoZXIuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIEdldEluZm8oaW5wdXRfZmllbGQpXG4gICAgICAgIENsb3NlQ29udGFpbmVyKGZhbHNlKVxuICAgICAgICBjb25zdCBjbG9zZV9pbnB1dF9idXR0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfY2l0eVwiKVxuICAgICAgICBjbG9zZV9pbnB1dF9idXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvc2VfaW5wdXRfYnV0dG9uLm5leHRTaWJsaW5nLCBjaGlsZClcbiAgICAgICAgLy8gd2VhdGhlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZSwgd2VhdGhlcilcblxuICAgICAgICAvLyBDbG9zZUNvbnRhaW5lcih2YWx1ZSwgd2hvbGVfcGFnZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJjaXR5XCIpXG5cblxuICAgIH1cbil9XG5cbi8qIG1haW4gZnVuY3Rpb24sIGZldGNoIHRvIHdlYXRoZXIgYXBpICAqL1xuXG5hc3luYyBmdW5jdGlvbiBHZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT0ke2ZldGNoX2RlZmF1bHRfdmFsdWV9JmRheXM9NmApXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuICAgICAgICBjb25zdCBkYXlfYXJyYXkgPSBbXVxuXG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZm9yZWNhc3RkYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcblxuICAgICAgICAgICAgICAgIC8vIHVsLmFwcGVuZChsaSlcblxuICAgICAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge3dlZWtkYXk6ICdsb25nJ30pO1xuICAgICAgICAgICAgICAgIGRheV9hcnJheS5wdXNoKGRheSlcbiAgICAgICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+JmRlZztDPC9zcGFuPmBcbiAgICAgICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaXR5ID0gbG9jYXRpb24ubmFtZVxuICAgICAgICBjb25zdCB3ZWF0aGVyX2ljb24gPSBjdXJyZW50LmNvbmRpdGlvbi5pY29uXG4gICAgICAgIGNvbnN0IGhQYSA9IGAke2N1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWBcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBgJHtjdXJyZW50Lmh1bWlkaXR5fSAlYFxuICAgICAgICBjb25zdCB3aW5kID0gYCR7TWF0aC5yb3VuZChjdXJyZW50LndpbmRfa3BoICogMTAwMCAvIDM2MDApfSBtL3NgXG4gICAgICAgIGNvbnN0IHRlbXBfQyA9IGN1cnJlbnQudGVtcF9jXG5cblxuICAgICAgICBjb25zdCBkaXZfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2NpdHknKVxuXG4gICAgICAgIGNvbnN0IGRpdl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXZfaW5wdXQuYWZ0ZXIoZGl2X2NvbnRhaW5lcilcbiAgICAgICAgZGl2X2NvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYDxkaXYgaWQ9ICd3ZWF0aGVyJyBjbGFzcz0nbW9kdWxlIG1vZHVsZV9fd2VhdGhlcicgPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1pY29uIGJ0bi0tY2xvc2UgY2xvc2VfY29udGFpbmVyXCIgaWQ9XCJjbG9zZV9jb250YWluZXJcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+PC9idXR0b24+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyX19pY29uXCI+PGltZyBzcmM9XCIke3dlYXRoZXJfaWNvbn1cIi8+PC9kaXY+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlcl9faW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2l0eV9fbmFtZVwiPjwvc3Bhbj4gJHtjaXR5fTxzcGFuIGNsYXNzPVwiYnRuIGJ0bi0taWNvblwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lZGl0PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGVyYXR1cmVcIj4ke3RlbXBfQ308c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlX192YWx1ZVwiPjwvc3Bhbj4mZGVnO0M8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgPHVsIGNsYXNzPVwid2VhdGhlcl9fZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImFzc2V0cy9pY29ucy9wcmVzc3VyZS5zdmdcIi8+JHtoUGF9IDxzcGFuIGNsYXNzPVwicHJlc3N1cmVfX3ZhbHVlXCI+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2h1bWlkaXR5LnN2Z1wiLz4ke2h1bWlkaXR5fSA8c3BhbiBjbGFzcz1cImh1bWlkaXR5X192YWx1ZVwiPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImFzc2V0cy9pY29ucy93aW5kLXNwZWVkLnN2Z1wiLz4ke3dpbmR9IDxzcGFuIGNsYXNzPVwid2luZC1zcGVlZF9fdmFsdWVcIj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJ3ZWF0aGVyX19mb3JlY2FzdFwiIGlkPVwid2VhdGhlcl9fZm9yZWNhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5X2FycmF5WzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbMF0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPlxcPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5X2FycmF5WzFdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbMV0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPlxcPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5X2FycmF5WzJdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbMl0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPlxcPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5X2FycmF5WzNdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbM10uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPlxcPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5X2FycmF5WzRdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbNF0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPlxcPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG5cblxuICAgICAgICBDbG9zZUNvbnRhaW5lcih2YWx1ZSlcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5cblxuR2V0SW5mbyhmZXRjaF9kZWZhdWx0X3ZhbHVlKVxuXG5BZGRDaXR5KClcbkNsb3NlSW5wdXQoKVxuSW5wdXRGaWVsZCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3OTUwYTYwOWEwZDRkZTRlOTQyNlwiKSJdLCJuYW1lcyI6WyJkZWZhdWx0X2ZvcmVjYXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZldGNoX2RlZmF1bHRfdmFsdWUiLCJ2YWx1ZSIsIkNsb3NlSW5wdXQiLCJjbG9zZV9pbnB1dF9idXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJhZGRfY2l0eSIsImhpZGRlbiIsIkFkZENpdHkiLCJhZGRfY2l0eV9idXR0b24iLCJDbG9zZUNvbnRhaW5lciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJJbnB1dEZpZWxkIiwibm9kZSIsImNoaWxkIiwiaW5wdXRfZmllbGQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJ3ZWF0aGVyIiwiR2V0SW5mbyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImFsbF9pbmZvIiwiZmV0Y2giLCJjdXJyZW50IiwiZm9yZWNhc3QiLCJsb2NhdGlvbiIsImpzb24iLCJmb3JlY2FzdGRheSIsImxlbmd0aCIsImRheV9hcnJheSIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsInB1c2giLCJpbm5lckhUTUwiLCJjaXR5IiwibmFtZSIsIndlYXRoZXJfaWNvbiIsImNvbmRpdGlvbiIsImljb24iLCJoUGEiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZCIsIk1hdGgiLCJyb3VuZCIsIndpbmRfa3BoIiwidGVtcF9DIiwidGVtcF9jIiwiZGl2X2lucHV0IiwiZGl2X2NvbnRhaW5lciIsImFmdGVyIiwiYXZndGVtcF9jIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==