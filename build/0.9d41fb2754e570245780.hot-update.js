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
    console.log(forecastday[0].condition.text);
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
                    <img src="assets/icons/${forecastday[0].condition}.svg"/>
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
/******/ 	__webpack_require__.h = () => ("b7c99a03d47b47efed64")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlKWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGVmYXVsdF9mb3JlY2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuY29uc3QgZmV0Y2hfZGVmYXVsdF92YWx1ZSA9ICdhdXRvOmlwJ1xubGV0IHZhbHVlID0gdHJ1ZVxuXG5cbi8qIGZ1bmN0aW9uIGNsb3NpbmcgaW5wdXQgZmllbGRzICovXG5cbmZ1bmN0aW9uIENsb3NlSW5wdXQoKSB7XG4gICAgY29uc3QgY2xvc2VfaW5wdXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2lucHV0JylcbiAgICBjbG9zZV9pbnB1dF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIHNob3dpbmcgaW5wdXQgZmllbGRzICovXG5cbmFzeW5jIGZ1bmN0aW9uIEFkZENpdHkoKSB7XG4gICAgY29uc3QgYWRkX2NpdHlfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtY2l0eVwiKVxuICAgIGFkZF9jaXR5X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkX2NpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2NpdHknKVxuICAgICAgICBhZGRfY2l0eS5oaWRkZW4gPSBmYWxzZVxuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIGNsb3NpbmcgbWFpbiB3aW5kb3cgd2l0aCB3ZWF0aGVyIGZvcmVjYXN0ICovXG5mdW5jdGlvbiBDbG9zZUNvbnRhaW5lciAodmFsdWUpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiBmb3IgbG9va2luZyBmb3IgaW5wdXQgY2l0eS92YWx1ZSBhbmQgc2hvd2luZy5cbiogY2xvbmUgd2VhdGhlciBjb250YWluZXIgICovXG5cbmZ1bmN0aW9uIElucHV0RmllbGQobm9kZSwgY2hpbGQpIHtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lclxuICAgICgnY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRfZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRfZmllbGQpXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyJylcblxuICAgICAgICAvLyB6bWllbmnEhyBjbG9uZU5vZGVcbiAgICAgICAgLy8gY29uc3QgY2xvbmUgPSB3ZWF0aGVyLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBHZXRJbmZvKGlucHV0X2ZpZWxkKVxuICAgICAgICBDbG9zZUNvbnRhaW5lcihmYWxzZSlcbiAgICAgICAgY29uc3QgY2xvc2VfaW5wdXRfYnV0dG9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX2NpdHlcIilcbiAgICAgICAgY2xvc2VfaW5wdXRfYnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb3NlX2lucHV0X2J1dHRvbi5uZXh0U2libGluZywgY2hpbGQpXG4gICAgICAgIC8vIHdlYXRoZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmUsIHdlYXRoZXIpXG5cbiAgICAgICAgLy8gQ2xvc2VDb250YWluZXIodmFsdWUsIHdob2xlX3BhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2l0eVwiKVxuXG5cbiAgICB9XG4pfVxuXG5cblxuLyogbWFpbiBmdW5jdGlvbiwgZmV0Y2ggdG8gd2VhdGhlciBhcGkgICovXG5cbmFzeW5jIGZ1bmN0aW9uIEdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbF9pbmZvID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZGYxOGZlMWI4NDhlNDZkODhiYjE3NDk0NDIzMjcwMSZxPSR7ZmV0Y2hfZGVmYXVsdF92YWx1ZX0mZGF5cz02YClcbiAgICAgICAgY29uc3Qge2N1cnJlbnQsIGZvcmVjYXN0LCBsb2NhdGlvbn0gPSBhd2FpdCBhbGxfaW5mby5qc29uKClcbiAgICAgICAgY29uc3Qge2ZvcmVjYXN0ZGF5fSA9IGZvcmVjYXN0XG5cbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudClcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RkYXkpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuXG5cbiAgICAgICAgY29uc3QgZGF5X2FycmF5ID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBmb3JlY2FzdGRheS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICAgICAgICAgICAgbGV0IGRheSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLXVzJywge3dlZWtkYXk6ICdsb25nJ30pO1xuICAgICAgICAgICAgZGF5X2FycmF5LnB1c2goZGF5KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2l0eSA9IGxvY2F0aW9uLm5hbWVcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9pY29uID0gY3VycmVudC5jb25kaXRpb24uaWNvblxuICAgICAgICBjb25zdCBoUGEgPSBgJHtjdXJyZW50LnByZXNzdXJlX21ifSBoUGFgXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gYCR7Y3VycmVudC5odW1pZGl0eX0gJWBcbiAgICAgICAgY29uc3Qgd2luZCA9IGAke01hdGgucm91bmQoY3VycmVudC53aW5kX2twaCAqIDEwMDAgLyAzNjAwKX0gbS9zYFxuICAgICAgICBjb25zdCB0ZW1wX0MgPSBjdXJyZW50LnRlbXBfY1xuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheVswXS5jb25kaXRpb24udGV4dClcblxuICAgICAgICBjb25zdCBkaXZfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2NpdHknKVxuXG4gICAgICAgIGNvbnN0IGRpdl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXZfaW5wdXQuYWZ0ZXIoZGl2X2NvbnRhaW5lcilcbiAgICAgICAgZGl2X2NvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYDxkaXYgaWQ9ICd3ZWF0aGVyJyBjbGFzcz0nbW9kdWxlIG1vZHVsZV9fd2VhdGhlcicgPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1pY29uIGJ0bi0tY2xvc2UgY2xvc2VfY29udGFpbmVyXCIgaWQ9XCJjbG9zZV9jb250YWluZXJcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+PC9idXR0b24+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyX19pY29uXCI+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvcmFpbi5zdmdcIi8+PC9kaXY+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlcl9faW5mb1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaXR5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2l0eV9fbmFtZVwiPjwvc3Bhbj4gJHtjaXR5fTxzcGFuIGNsYXNzPVwiYnRuIGJ0bi0taWNvblwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5lZGl0PC9pPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcGVyYXR1cmVcIj4ke3RlbXBfQ308c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlX192YWx1ZVwiPjwvc3Bhbj4mZGVnO0M8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgICAgICAgPHVsIGNsYXNzPVwid2VhdGhlcl9fZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImFzc2V0cy9pY29ucy9wcmVzc3VyZS5zdmdcIi8+JHtoUGF9IDxzcGFuIGNsYXNzPVwicHJlc3N1cmVfX3ZhbHVlXCI+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2h1bWlkaXR5LnN2Z1wiLz4ke2h1bWlkaXR5fSA8c3BhbiBjbGFzcz1cImh1bWlkaXR5X192YWx1ZVwiPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImFzc2V0cy9pY29ucy93aW5kLXNwZWVkLnN2Z1wiLz4ke3dpbmR9IDxzcGFuIGNsYXNzPVwid2luZC1zcGVlZF9fdmFsdWVcIj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIndlYXRoZXJfX2ZvcmVjYXN0XCIgaWQ9XCJ3ZWF0aGVyX19mb3JlY2FzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXlfYXJyYXlbMF19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy8ke2ZvcmVjYXN0ZGF5WzBdLmNvbmRpdGlvbn0uc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVswXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXlfYXJyYXlbMV19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXlfYXJyYXlbMl19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXlfYXJyYXlbM119PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVszXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXlfYXJyYXlbNF19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVs0XS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcblxuXG4gICAgICAgIENsb3NlQ29udGFpbmVyKHZhbHVlKVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cblxuXG5HZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpXG5cbkFkZENpdHkoKVxuQ2xvc2VJbnB1dCgpXG5JbnB1dEZpZWxkKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImI3Yzk5YTAzZDQ3YjQ3ZWZlZDY0XCIpIl0sIm5hbWVzIjpbImRlZmF1bHRfZm9yZWNhc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmV0Y2hfZGVmYXVsdF92YWx1ZSIsInZhbHVlIiwiQ2xvc2VJbnB1dCIsImNsb3NlX2lucHV0X2J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImFkZF9jaXR5IiwiaGlkZGVuIiwiQWRkQ2l0eSIsImFkZF9jaXR5X2J1dHRvbiIsIkNsb3NlQ29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsIklucHV0RmllbGQiLCJub2RlIiwiY2hpbGQiLCJpbnB1dF9maWVsZCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIndlYXRoZXIiLCJHZXRJbmZvIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiYWxsX2luZm8iLCJmZXRjaCIsImN1cnJlbnQiLCJmb3JlY2FzdCIsImxvY2F0aW9uIiwianNvbiIsImZvcmVjYXN0ZGF5IiwiZGF5X2FycmF5IiwiaSIsImxlbmd0aCIsImRhdGUiLCJEYXRlIiwiZGF5IiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwicHVzaCIsImNpdHkiLCJuYW1lIiwid2VhdGhlcl9pY29uIiwiY29uZGl0aW9uIiwiaWNvbiIsImhQYSIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kIiwiTWF0aCIsInJvdW5kIiwid2luZF9rcGgiLCJ0ZW1wX0MiLCJ0ZW1wX2MiLCJ0ZXh0IiwiZGl2X2lucHV0IiwiZGl2X2NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJhZnRlciIsImlubmVySFRNTCIsImF2Z3RlbXBfYyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=