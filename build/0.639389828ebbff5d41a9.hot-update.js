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
                        </span>&deg;C</span>`;
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
                        ${forecastday[0].day.avgtemp_c}</span>&deg;C</span>\</li>
                        
                        <li><span className="day"></span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        ${forecastday[1].day.avgtemp_c}</span>&deg;C</span>\</li>
                        
                        <li><span className="day"></span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        ${forecastday[2].day.avgtemp_c}</span>&deg;C</span>\</li>
                        
                        <li><span className="day"></span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        ${forecastday[3].day.avgtemp_c}</span>&deg;C</span>\</li>
                        
                        <li><span className="day"></span>
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
/******/ 	__webpack_require__.h = () => ("1b6e06c0db85c970246a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLHVEQUF1REcsWUFBYTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSx1REFBdURGLElBQUs7QUFDNUQ7QUFDQSwyQ0FBMkNZLE1BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsNERBQTREUCxHQUFJO0FBQ2hFLDREQUE0REUsUUFBUztBQUNyRSw4REFBOERDLElBQUs7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCcEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFHLENBQUNxQixTQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCN0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFHLENBQUNxQixTQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCN0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFHLENBQUNxQixTQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCN0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFHLENBQUNxQixTQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCN0IsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDUSxHQUFHLENBQUNxQixTQUFVO0FBQ3ZEO0FBQ0E7QUFDQSxlQUFlO0lBR1BsRCxjQUFjLENBQUNULEtBQUssQ0FBQztFQUV6QixDQUFDLENBQUMsT0FBTzRELEdBQUcsRUFBRTtJQUNWNUMsT0FBTyxDQUFDQyxHQUFHLENBQUMyQyxHQUFHLENBQUM7RUFDcEI7QUFDSjtBQUlBeEMsT0FBTyxDQUFDckIsbUJBQW1CLENBQUM7QUFFNUJRLE9BQU8sRUFBRTtBQUNUTixVQUFVLEVBQUU7QUFDWlcsVUFBVSxFQUFFOzs7Ozs7OztVQ25LWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGVmYXVsdF9mb3JlY2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuY29uc3QgZmV0Y2hfZGVmYXVsdF92YWx1ZSA9ICdhdXRvOmlwJ1xubGV0IHZhbHVlID0gdHJ1ZVxuXG5cbi8qIGZ1bmN0aW9uIGNsb3NpbmcgaW5wdXQgZmllbGRzICovXG5cbmZ1bmN0aW9uIENsb3NlSW5wdXQoKSB7XG4gICAgY29uc3QgY2xvc2VfaW5wdXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2lucHV0JylcbiAgICBjbG9zZV9pbnB1dF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIHNob3dpbmcgaW5wdXQgZmllbGRzICovXG5cbmFzeW5jIGZ1bmN0aW9uIEFkZENpdHkoKSB7XG4gICAgY29uc3QgYWRkX2NpdHlfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtY2l0eVwiKVxuICAgIGFkZF9jaXR5X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkX2NpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2NpdHknKVxuICAgICAgICBhZGRfY2l0eS5oaWRkZW4gPSBmYWxzZVxuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIGNsb3NpbmcgbWFpbiB3aW5kb3cgd2l0aCB3ZWF0aGVyIGZvcmVjYXN0ICovXG5mdW5jdGlvbiBDbG9zZUNvbnRhaW5lciAodmFsdWUpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiBmb3IgbG9va2luZyBmb3IgaW5wdXQgY2l0eS92YWx1ZSBhbmQgc2hvd2luZy5cbiogY2xvbmUgd2VhdGhlciBjb250YWluZXIgICovXG5cbmZ1bmN0aW9uIElucHV0RmllbGQobm9kZSwgY2hpbGQpIHtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lclxuICAgICgnY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRfZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRfZmllbGQpXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyJylcblxuICAgICAgICAvLyB6bWllbmnEhyBjbG9uZU5vZGVcbiAgICAgICAgLy8gY29uc3QgY2xvbmUgPSB3ZWF0aGVyLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBHZXRJbmZvKGlucHV0X2ZpZWxkKVxuICAgICAgICBDbG9zZUNvbnRhaW5lcihmYWxzZSlcbiAgICAgICAgY29uc3QgY2xvc2VfaW5wdXRfYnV0dG9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX2NpdHlcIilcbiAgICAgICAgY2xvc2VfaW5wdXRfYnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb3NlX2lucHV0X2J1dHRvbi5uZXh0U2libGluZywgY2hpbGQpXG4gICAgICAgIC8vIHdlYXRoZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmUsIHdlYXRoZXIpXG5cbiAgICAgICAgLy8gQ2xvc2VDb250YWluZXIodmFsdWUsIHdob2xlX3BhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2l0eVwiKVxuXG5cbiAgICB9XG4pfVxuXG4vKiBtYWluIGZ1bmN0aW9uLCBmZXRjaCB0byB3ZWF0aGVyIGFwaSAgKi9cblxuYXN5bmMgZnVuY3Rpb24gR2V0SW5mbyhmZXRjaF9kZWZhdWx0X3ZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9JHtmZXRjaF9kZWZhdWx0X3ZhbHVlfSZkYXlzPTZgKVxuICAgICAgICBjb25zdCB7Y3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9ufSA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3RkYXl9ID0gZm9yZWNhc3RcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudClcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RkYXkubGVuZ3RoKVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcblxuICAgICAgICBjb25zdCBmb3JlY2FzdERheUZ1bmN0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgLy8gY29uc3QgdWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcl9fZm9yZWNhc3QnKVxuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGZvcmVjYXN0ZGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cbiAgICAgICAgICAgICAgICAvLyB1bC5hcHBlbmQobGkpXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICAgICAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHt3ZWVrZGF5OiAnbG9uZyd9KTtcblxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj4mZGVnO0M8L3NwYW4+YFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNpdHkgPSBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGN1cnJlbnQuY29uZGl0aW9uLmljb25cbiAgICAgICAgY29uc3QgaFBhID0gYCR7Y3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYFxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGAke2N1cnJlbnQuaHVtaWRpdHl9ICVgXG4gICAgICAgIGNvbnN0IHdpbmQgPSBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gY3VycmVudC50ZW1wX2NcblxuXG4gICAgICAgIGNvbnN0IGRpdl9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG5cbiAgICAgICAgY29uc3QgZGl2X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdl9pbnB1dC5hZnRlcihkaXZfY29udGFpbmVyKVxuICAgICAgICBkaXZfY29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgPGRpdiBpZD0gJ3dlYXRoZXInIGNsYXNzPSdtb2R1bGUgbW9kdWxlX193ZWF0aGVyJyA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLWljb24gYnRuLS1jbG9zZSBjbG9zZV9jb250YWluZXJcIiBpZD1cImNsb3NlX2NvbnRhaW5lclwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvaT48L2J1dHRvbj5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXJfX2ljb25cIj48aW1nIHNyYz1cIiR7d2VhdGhlcl9pY29ufVwiLz48L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXR5X19uYW1lXCI+PC9zcGFuPiAke2NpdHl9PHNwYW4gY2xhc3M9XCJidG4gYnRuLS1pY29uXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVkaXQ8L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPiR7dGVtcF9DfTxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+PC9zcGFuPiZkZWc7QzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJ3ZWF0aGVyX19kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3ByZXNzdXJlLnN2Z1wiLz4ke2hQYX0gPHNwYW4gY2xhc3M9XCJwcmVzc3VyZV9fdmFsdWVcIj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvaHVtaWRpdHkuc3ZnXCIvPiR7aHVtaWRpdHl9IDxzcGFuIGNsYXNzPVwiaHVtaWRpdHlfX3ZhbHVlXCI+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3dpbmQtc3BlZWQuc3ZnXCIvPiR7d2luZH0gPHNwYW4gY2xhc3M9XCJ3aW5kLXNwZWVkX192YWx1ZVwiPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICBcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIndlYXRoZXJfX2ZvcmVjYXN0XCIgaWQ9XCJ3ZWF0aGVyX19mb3JlY2FzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVswXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVszXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVs0XS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcblxuXG4gICAgICAgIENsb3NlQ29udGFpbmVyKHZhbHVlKVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cblxuXG5HZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpXG5cbkFkZENpdHkoKVxuQ2xvc2VJbnB1dCgpXG5JbnB1dEZpZWxkKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFiNmUwNmMwZGI4NWM5NzAyNDZhXCIpIl0sIm5hbWVzIjpbImRlZmF1bHRfZm9yZWNhc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmV0Y2hfZGVmYXVsdF92YWx1ZSIsInZhbHVlIiwiQ2xvc2VJbnB1dCIsImNsb3NlX2lucHV0X2J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImFkZF9jaXR5IiwiaGlkZGVuIiwiQWRkQ2l0eSIsImFkZF9jaXR5X2J1dHRvbiIsIkNsb3NlQ29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsIklucHV0RmllbGQiLCJub2RlIiwiY2hpbGQiLCJpbnB1dF9maWVsZCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIndlYXRoZXIiLCJHZXRJbmZvIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiYWxsX2luZm8iLCJmZXRjaCIsImN1cnJlbnQiLCJmb3JlY2FzdCIsImxvY2F0aW9uIiwianNvbiIsImZvcmVjYXN0ZGF5IiwibGVuZ3RoIiwiZm9yZWNhc3REYXlGdW5jdGlvbiIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImlubmVySFRNTCIsImNpdHkiLCJuYW1lIiwid2VhdGhlcl9pY29uIiwiY29uZGl0aW9uIiwiaWNvbiIsImhQYSIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kIiwiTWF0aCIsInJvdW5kIiwid2luZF9rcGgiLCJ0ZW1wX0MiLCJ0ZW1wX2MiLCJkaXZfaW5wdXQiLCJkaXZfY29udGFpbmVyIiwiYWZ0ZXIiLCJhdmd0ZW1wX2MiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9