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
    const div_input = document.getElementById('add_city');
    const div_container = document.createElement('div');
    div_input.after(div_container);
    div_container.innerHTML = `<div id= 'weather' class='module module__weather' >
                <button class="btn btn--icon btn--close close_container" id="close_container"><i class="material-icons">close</i></button>
    
            <div class="weather">
                <div class="weather__icon"><img src="assets/icons/${current.condition}.svg"/></div>
    
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
/******/ 	__webpack_require__.h = () => ("7b1abb54f7706f2f261e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDaEUsNERBQTRERSxRQUFTO0FBQ3JFLDhEQUE4REMsSUFBSztBQUNuRTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0RqQixTQUFTLENBQUMsQ0FBQyxDQUFFO0FBQzdEO0FBQ0E7QUFDQSwwQkFBMEJELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sR0FBRyxDQUFDdUIsU0FBVTtBQUN2RDtBQUNBLG9EQUFvRDVCLFNBQVMsQ0FBQyxDQUFDLENBQUU7QUFDakU7QUFDQTtBQUNBLDBCQUEwQkQsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDTSxHQUFHLENBQUN1QixTQUFVO0FBQ3ZEO0FBQ0Esb0RBQW9ENUIsU0FBUyxDQUFDLENBQUMsQ0FBRTtBQUNqRTtBQUNBO0FBQ0EsMEJBQTBCRCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNNLEdBQUcsQ0FBQ3VCLFNBQVU7QUFDdkQ7QUFDQSxvREFBb0Q1QixTQUFTLENBQUMsQ0FBQyxDQUFFO0FBQ2pFO0FBQ0E7QUFDQSwwQkFBMEJELFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sR0FBRyxDQUFDdUIsU0FBVTtBQUN2RDtBQUNBLG9EQUFvRDVCLFNBQVMsQ0FBQyxDQUFDLENBQUU7QUFDakU7QUFDQTtBQUNBLDBCQUEwQkQsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDTSxHQUFHLENBQUN1QixTQUFVO0FBQ3ZEO0FBQ0E7QUFDQSxlQUFlO0lBR1BsRCxjQUFjLENBQUNULEtBQUssQ0FBQztFQUV6QixDQUFDLENBQUMsT0FBTzRELEdBQUcsRUFBRTtJQUNWNUMsT0FBTyxDQUFDQyxHQUFHLENBQUMyQyxHQUFHLENBQUM7RUFDcEI7QUFDSjtBQUlBeEMsT0FBTyxDQUFDckIsbUJBQW1CLENBQUM7QUFFNUJRLE9BQU8sRUFBRTtBQUNUTixVQUFVLEVBQUU7QUFDWlcsVUFBVSxFQUFFOzs7Ozs7OztVQzNKWiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgZGVmYXVsdF9mb3JlY2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuY29uc3QgZmV0Y2hfZGVmYXVsdF92YWx1ZSA9ICdhdXRvOmlwJ1xubGV0IHZhbHVlID0gdHJ1ZVxuXG5cbi8qIGZ1bmN0aW9uIGNsb3NpbmcgaW5wdXQgZmllbGRzICovXG5cbmZ1bmN0aW9uIENsb3NlSW5wdXQoKSB7XG4gICAgY29uc3QgY2xvc2VfaW5wdXRfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2lucHV0JylcbiAgICBjbG9zZV9pbnB1dF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gdHJ1ZVxuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIHNob3dpbmcgaW5wdXQgZmllbGRzICovXG5cbmFzeW5jIGZ1bmN0aW9uIEFkZENpdHkoKSB7XG4gICAgY29uc3QgYWRkX2NpdHlfYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtY2l0eVwiKVxuICAgIGFkZF9jaXR5X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkX2NpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2NpdHknKVxuICAgICAgICBhZGRfY2l0eS5oaWRkZW4gPSBmYWxzZVxuICAgIH0pXG59XG5cbi8qIGZ1bmN0aW9uIGNsb3NpbmcgbWFpbiB3aW5kb3cgd2l0aCB3ZWF0aGVyIGZvcmVjYXN0ICovXG5mdW5jdGlvbiBDbG9zZUNvbnRhaW5lciAodmFsdWUpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2VfY29udGFpbmVyJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiBmb3IgbG9va2luZyBmb3IgaW5wdXQgY2l0eS92YWx1ZSBhbmQgc2hvd2luZy5cbiogY2xvbmUgd2VhdGhlciBjb250YWluZXIgICovXG5cbmZ1bmN0aW9uIElucHV0RmllbGQobm9kZSwgY2hpbGQpIHtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hfYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lclxuICAgICgnY2xpY2snLCAoZXYpID0+IHtcbiAgICAgICAgY29uc3QgaW5wdXRfZmllbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoJykudmFsdWVcbiAgICAgICAgY29uc29sZS5sb2coaW5wdXRfZmllbGQpXG4gICAgICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyJylcblxuICAgICAgICAvLyB6bWllbmnEhyBjbG9uZU5vZGVcbiAgICAgICAgLy8gY29uc3QgY2xvbmUgPSB3ZWF0aGVyLmNsb25lTm9kZSh0cnVlKVxuICAgICAgICBHZXRJbmZvKGlucHV0X2ZpZWxkKVxuICAgICAgICBDbG9zZUNvbnRhaW5lcihmYWxzZSlcbiAgICAgICAgY29uc3QgY2xvc2VfaW5wdXRfYnV0dG9uICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkX2NpdHlcIilcbiAgICAgICAgY2xvc2VfaW5wdXRfYnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb3NlX2lucHV0X2J1dHRvbi5uZXh0U2libGluZywgY2hpbGQpXG4gICAgICAgIC8vIHdlYXRoZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoY2xvbmUsIHdlYXRoZXIpXG5cbiAgICAgICAgLy8gQ2xvc2VDb250YWluZXIodmFsdWUsIHdob2xlX3BhZ2UpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2l0eVwiKVxuXG5cbiAgICB9XG4pfVxuXG4vKiBtYWluIGZ1bmN0aW9uLCBmZXRjaCB0byB3ZWF0aGVyIGFwaSAgKi9cblxuYXN5bmMgZnVuY3Rpb24gR2V0SW5mbyhmZXRjaF9kZWZhdWx0X3ZhbHVlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9JHtmZXRjaF9kZWZhdWx0X3ZhbHVlfSZkYXlzPTZgKVxuICAgICAgICBjb25zdCB7Y3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9ufSA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zdCB7Zm9yZWNhc3RkYXl9ID0gZm9yZWNhc3RcblxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheSlcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG5cblxuICAgICAgICBjb25zdCBkYXlfYXJyYXkgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGZvcmVjYXN0ZGF5Lmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZm9yZWNhc3RkYXlbaV0uZGF0ZSk7XG4gICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7d2Vla2RheTogJ2xvbmcnfSk7XG4gICAgICAgICAgICBkYXlfYXJyYXkucHVzaChkYXkpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaXR5ID0gbG9jYXRpb24ubmFtZVxuICAgICAgICBjb25zdCB3ZWF0aGVyX2ljb24gPSBjdXJyZW50LmNvbmRpdGlvbi5pY29uXG4gICAgICAgIGNvbnN0IGhQYSA9IGAke2N1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWBcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBgJHtjdXJyZW50Lmh1bWlkaXR5fSAlYFxuICAgICAgICBjb25zdCB3aW5kID0gYCR7TWF0aC5yb3VuZChjdXJyZW50LndpbmRfa3BoICogMTAwMCAvIDM2MDApfSBtL3NgXG4gICAgICAgIGNvbnN0IHRlbXBfQyA9IGN1cnJlbnQudGVtcF9jXG5cblxuICAgICAgICBjb25zdCBkaXZfaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2NpdHknKVxuXG4gICAgICAgIGNvbnN0IGRpdl9jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXZfaW5wdXQuYWZ0ZXIoZGl2X2NvbnRhaW5lcilcbiAgICAgICAgZGl2X2NvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgICAgICAgICAgYDxkaXYgaWQ9ICd3ZWF0aGVyJyBjbGFzcz0nbW9kdWxlIG1vZHVsZV9fd2VhdGhlcicgPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLS1pY29uIGJ0bi0tY2xvc2UgY2xvc2VfY29udGFpbmVyXCIgaWQ9XCJjbG9zZV9jb250YWluZXJcIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+Y2xvc2U8L2k+PC9idXR0b24+XG4gICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyX19pY29uXCI+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvJHtjdXJyZW50LmNvbmRpdGlvbn0uc3ZnXCIvPjwvZGl2PlxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXJfX2luZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNpdHlfX25hbWVcIj48L3NwYW4+ICR7Y2l0eX08c3BhbiBjbGFzcz1cImJ0biBidG4tLWljb25cIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZWRpdDwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+JHt0ZW1wX0N9PHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj48L3NwYW4+JmRlZztDPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIndlYXRoZXJfX2RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvcHJlc3N1cmUuc3ZnXCIvPiR7aFBhfSA8c3BhbiBjbGFzcz1cInByZXNzdXJlX192YWx1ZVwiPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImFzc2V0cy9pY29ucy9odW1pZGl0eS5zdmdcIi8+JHtodW1pZGl0eX0gPHNwYW4gY2xhc3M9XCJodW1pZGl0eV9fdmFsdWVcIj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvd2luZC1zcGVlZC5zdmdcIi8+JHt3aW5kfSA8c3BhbiBjbGFzcz1cIndpbmQtc3BlZWRfX3ZhbHVlXCI+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgIFxuICAgICAgICAgICAgPHVsIGNsYXNzPVwid2VhdGhlcl9fZm9yZWNhc3RcIiBpZD1cIndlYXRoZXJfX2ZvcmVjYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheV9hcnJheVswXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5WzBdLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheV9hcnJheVsxXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5WzFdLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheV9hcnJheVsyXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5WzJdLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheV9hcnJheVszXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5WzNdLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheV9hcnJheVs0XX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5WzRdLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5cXDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+YFxuXG5cbiAgICAgICAgQ2xvc2VDb250YWluZXIodmFsdWUpXG5cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuXG5cbkdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSlcblxuQWRkQ2l0eSgpXG5DbG9zZUlucHV0KClcbklucHV0RmllbGQoKVxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2IxYWJiNTRmNzcwNmYyZjI2MWVcIikiXSwibmFtZXMiOlsiZGVmYXVsdF9mb3JlY2FzdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmZXRjaF9kZWZhdWx0X3ZhbHVlIiwidmFsdWUiLCJDbG9zZUlucHV0IiwiY2xvc2VfaW5wdXRfYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2IiwiYWRkX2NpdHkiLCJoaWRkZW4iLCJBZGRDaXR5IiwiYWRkX2NpdHlfYnV0dG9uIiwiQ2xvc2VDb250YWluZXIiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlIiwiSW5wdXRGaWVsZCIsIm5vZGUiLCJjaGlsZCIsImlucHV0X2ZpZWxkIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0Iiwid2VhdGhlciIsIkdldEluZm8iLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwibmV4dFNpYmxpbmciLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJkYXlfYXJyYXkiLCJpIiwibGVuZ3RoIiwiZGF0ZSIsIkRhdGUiLCJkYXkiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJwdXNoIiwiY2l0eSIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImRpdl9pbnB1dCIsImRpdl9jb250YWluZXIiLCJjcmVhdGVFbGVtZW50IiwiYWZ0ZXIiLCJpbm5lckhUTUwiLCJhdmd0ZW1wX2MiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9