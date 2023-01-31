self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const default_forecast = document.getElementById('app');
const fetch_default_value = 'auto:ip';
let value = true;
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(__webpack_require__(24));
console.log(images);

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
/******/ 	__webpack_require__.h = () => ("0eee1ee3085c60cfea3f")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzVCLG1CQUFtQixDQUFDO0FBRTVCaUIsT0FBTyxFQUFFO0FBQ1ROLFVBQVUsRUFBRTtBQUNaVyxVQUFVLEVBQUU7Ozs7Ozs7O1VDbktaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBkZWZhdWx0X2ZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5jb25zdCBmZXRjaF9kZWZhdWx0X3ZhbHVlID0gJ2F1dG86aXAnXG5sZXQgdmFsdWUgPSB0cnVlXG5cbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gICAgcmV0dXJuIHIua2V5cygpLm1hcChyKTtcbn1cblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnL2Fzc2V0cy9pY29ucycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcbmNvbnNvbGUubG9nKGltYWdlcylcblxuLyogZnVuY3Rpb24gY2xvc2luZyBpbnB1dCBmaWVsZHMgKi9cblxuZnVuY3Rpb24gQ2xvc2VJbnB1dCgpIHtcbiAgICBjb25zdCBjbG9zZV9pbnB1dF9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfaW5wdXQnKVxuICAgIGNsb3NlX2lucHV0X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBhZGRfY2l0eS5oaWRkZW4gPSB0cnVlXG4gICAgfSlcbn1cblxuLyogZnVuY3Rpb24gc2hvd2luZyBpbnB1dCBmaWVsZHMgKi9cblxuYXN5bmMgZnVuY3Rpb24gQWRkQ2l0eSgpIHtcbiAgICBjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZC1jaXR5XCIpXG4gICAgYWRkX2NpdHlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBhZGRfY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IGZhbHNlXG4gICAgfSlcbn1cblxuLyogZnVuY3Rpb24gY2xvc2luZyBtYWluIHdpbmRvdyB3aXRoIHdlYXRoZXIgZm9yZWNhc3QgKi9cbmZ1bmN0aW9uIENsb3NlQ29udGFpbmVyICh2YWx1ZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9jb250YWluZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIGZvciBsb29raW5nIGZvciBpbnB1dCBjaXR5L3ZhbHVlIGFuZCBzaG93aW5nLlxuKiBjbG9uZSB3ZWF0aGVyIGNvbnRhaW5lciAgKi9cblxuZnVuY3Rpb24gSW5wdXRGaWVsZChub2RlLCBjaGlsZCkge1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaF9idXR0b24nKS5hZGRFdmVudExpc3RlbmVyXG4gICAgKCdjbGljaycsIChldikgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dF9maWVsZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gnKS52YWx1ZVxuICAgICAgICBjb25zb2xlLmxvZyhpbnB1dF9maWVsZClcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXInKVxuXG4gICAgICAgIC8vIHptaWVuacSHIGNsb25lTm9kZVxuICAgICAgICAvLyBjb25zdCBjbG9uZSA9IHdlYXRoZXIuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgIEdldEluZm8oaW5wdXRfZmllbGQpXG4gICAgICAgIENsb3NlQ29udGFpbmVyKGZhbHNlKVxuICAgICAgICBjb25zdCBjbG9zZV9pbnB1dF9idXR0b24gID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRfY2l0eVwiKVxuICAgICAgICBjbG9zZV9pbnB1dF9idXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvc2VfaW5wdXRfYnV0dG9uLm5leHRTaWJsaW5nLCBjaGlsZClcbiAgICAgICAgLy8gd2VhdGhlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZSwgd2VhdGhlcilcblxuICAgICAgICAvLyBDbG9zZUNvbnRhaW5lcih2YWx1ZSwgd2hvbGVfcGFnZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJjaXR5XCIpXG5cblxuICAgIH1cbil9XG5cblxuXG4vKiBtYWluIGZ1bmN0aW9uLCBmZXRjaCB0byB3ZWF0aGVyIGFwaSAgKi9cblxuYXN5bmMgZnVuY3Rpb24gR2V0SW5mbyhmZXRjaF9kZWZhdWx0X3ZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9JHtmZXRjaF9kZWZhdWx0X3ZhbHVlfSZkYXlzPTZgKVxuICAgICAgICBjb25zdCB7Y3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9ufSA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3RkYXl9ID0gZm9yZWNhc3RcblxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheSlcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG5cblxuICAgICAgICBjb25zdCBkYXlfYXJyYXkgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGZvcmVjYXN0ZGF5Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7d2Vla2RheTogJ2xvbmcnfSk7XG4gICAgICAgICAgICBkYXlfYXJyYXkucHVzaChkYXkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaXR5ID0gbG9jYXRpb24ubmFtZVxuICAgICAgICBjb25zdCB3ZWF0aGVyX2ljb24gPSBjdXJyZW50LmNvbmRpdGlvbi5pY29uXG4gICAgICAgIGNvbnN0IGhQYSA9IGAke2N1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWBcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBgJHtjdXJyZW50Lmh1bWlkaXR5fSAlYFxuICAgICAgICBjb25zdCB3aW5kID0gYCR7TWF0aC5yb3VuZChjdXJyZW50LndpbmRfa3BoICogMTAwMCAvIDM2MDApfSBtL3NgXG4gICAgICAgIGNvbnN0IHRlbXBfQyA9IGN1cnJlbnQudGVtcF9jXG5cblxuICAgICAgICBjb25zdCBkaXZfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2NpdHknKVxuXG4gICAgICAgIGNvbnN0IGRpdl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXZfaW5wdXQuYWZ0ZXIoZGl2X2NvbnRhaW5lcilcbiAgICAgICAgZGl2X2NvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYDxkaXYgaWQ9ICd3ZWF0aGVyJyBjbGFzcz0nbW9kdWxlIG1vZHVsZV9fd2VhdGhlcicgPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1pY29uIGJ0bi0tY2xvc2UgY2xvc2VfY29udGFpbmVyXCIgaWQ9XCJjbG9zZV9jb250YWluZXJcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+PC9idXR0b24+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyX19pY29uXCI+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvcmFpbi5zdmdcIi8+PC9kaXY+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlcl9faW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2l0eV9fbmFtZVwiPjwvc3Bhbj4gJHtjaXR5fTxzcGFuIGNsYXNzPVwiYnRuIGJ0bi0taWNvblwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lZGl0PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGVyYXR1cmVcIj4ke3RlbXBfQ308c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlX192YWx1ZVwiPjwvc3Bhbj4mZGVnO0M8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgPHVsIGNsYXNzPVwid2VhdGhlcl9fZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImFzc2V0cy9pY29ucy9wcmVzc3VyZS5zdmdcIi8+JHtoUGF9IDxzcGFuIGNsYXNzPVwicHJlc3N1cmVfX3ZhbHVlXCI+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2h1bWlkaXR5LnN2Z1wiLz4ke2h1bWlkaXR5fSA8c3BhbiBjbGFzcz1cImh1bWlkaXR5X192YWx1ZVwiPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImFzc2V0cy9pY29ucy93aW5kLXNwZWVkLnN2Z1wiLz4ke3dpbmR9IDxzcGFuIGNsYXNzPVwid2luZC1zcGVlZF9fdmFsdWVcIj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJ3ZWF0aGVyX19mb3JlY2FzdFwiIGlkPVwid2VhdGhlcl9fZm9yZWNhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5X2FycmF5WzBdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbMF0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPlxcPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5X2FycmF5WzFdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbMV0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPlxcPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5X2FycmF5WzJdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbMl0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPlxcPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5X2FycmF5WzNdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbM10uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPlxcPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5X2FycmF5WzRdfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbNF0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPlxcPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG5cblxuICAgICAgICBDbG9zZUNvbnRhaW5lcih2YWx1ZSlcblxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgfVxufVxuXG5cblxuR2V0SW5mbyhmZXRjaF9kZWZhdWx0X3ZhbHVlKVxuXG5BZGRDaXR5KClcbkNsb3NlSW5wdXQoKVxuSW5wdXRGaWVsZCgpXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwZWVlMWVlMzA4NWM2MGNmZWEzZlwiKSJdLCJuYW1lcyI6WyJkZWZhdWx0X2ZvcmVjYXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZldGNoX2RlZmF1bHRfdmFsdWUiLCJ2YWx1ZSIsImltcG9ydEFsbCIsInIiLCJrZXlzIiwibWFwIiwiaW1hZ2VzIiwicmVxdWlyZSIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiQ2xvc2VJbnB1dCIsImNsb3NlX2lucHV0X2J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImFkZF9jaXR5IiwiaGlkZGVuIiwiQWRkQ2l0eSIsImFkZF9jaXR5X2J1dHRvbiIsIkNsb3NlQ29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsIklucHV0RmllbGQiLCJub2RlIiwiY2hpbGQiLCJpbnB1dF9maWVsZCIsInByZXZlbnREZWZhdWx0Iiwid2VhdGhlciIsIkdldEluZm8iLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJkYXlfYXJyYXkiLCJpIiwibGVuZ3RoIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJwdXNoIiwiY2l0eSIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImRpdl9pbnB1dCIsImRpdl9jb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiYWZ0ZXIiLCJpbm5lckhUTUwiLCJhdmd0ZW1wX2MiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9