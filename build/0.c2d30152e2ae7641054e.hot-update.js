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
    const div_container = document.createElement('div').innerHTML = ` <div id= 'weather' class='module module__weather' > /n
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

            </ul>
        </div>
        </div>`;
    div_input.after(div_container);
    CloseContainer(value);
  } catch (err) {
    console.log(err);
  }
}

// GetInfo(fetch_default_value)

AddCity();
CloseInput();
InputField();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e0ce00dd8607fd1a78da")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLHVEQUF1REksWUFBYTtBQUNwRTtBQUNBO0FBQ0E7QUFDQSx1REFBdURGLElBQUs7QUFDNUQ7QUFDQSwyQ0FBMkNZLE1BQU87QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsNERBQTREUCxHQUFJO0FBQ2hFLDREQUE0REUsUUFBUztBQUNyRSw4REFBOERDLElBQUs7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtJQUNQTSxTQUFTLENBQUNFLEtBQUssQ0FBQ0QsYUFBYSxDQUFDO0lBRTlCakQsY0FBYyxDQUFDVCxLQUFLLENBQUM7RUFFekIsQ0FBQyxDQUFDLE9BQU80RCxHQUFHLEVBQUU7SUFDVjVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDMkMsR0FBRyxDQUFDO0VBQ3BCO0FBQ0o7O0FBSUE7O0FBRUFyRCxPQUFPLEVBQUU7QUFDVE4sVUFBVSxFQUFFO0FBQ1pXLFVBQVUsRUFBRTs7Ozs7Ozs7VUMxSVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGRlZmF1bHRfZm9yZWNhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbmNvbnN0IGZldGNoX2RlZmF1bHRfdmFsdWUgPSAnYXV0bzppcCdcbmxldCB2YWx1ZSA9IHRydWVcblxuXG4vKiBmdW5jdGlvbiBjbG9zaW5nIGlucHV0IGZpZWxkcyAqL1xuXG5mdW5jdGlvbiBDbG9zZUlucHV0KCkge1xuICAgIGNvbnN0IGNsb3NlX2lucHV0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9pbnB1dCcpXG4gICAgY2xvc2VfaW5wdXRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IHRydWVcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiBzaG93aW5nIGlucHV0IGZpZWxkcyAqL1xuXG5hc3luYyBmdW5jdGlvbiBBZGRDaXR5KCkge1xuICAgIGNvbnN0IGFkZF9jaXR5X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNpdHlcIilcbiAgICBhZGRfY2l0eV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZF9jaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jaXR5JylcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gZmFsc2VcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiBjbG9zaW5nIG1haW4gd2luZG93IHdpdGggd2VhdGhlciBmb3JlY2FzdCAqL1xuZnVuY3Rpb24gQ2xvc2VDb250YWluZXIgKHZhbHVlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2NvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuLyogZnVuY3Rpb24gZm9yIGxvb2tpbmcgZm9yIGlucHV0IGNpdHkvdmFsdWUgYW5kIHNob3dpbmcuXG4qIGNsb25lIHdlYXRoZXIgY29udGFpbmVyICAqL1xuXG5mdW5jdGlvbiBJbnB1dEZpZWxkKG5vZGUsIGNoaWxkKSB7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXJcbiAgICAoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0X2ZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0X2ZpZWxkKVxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcicpXG5cbiAgICAgICAgLy8gem1pZW5pxIcgY2xvbmVOb2RlXG4gICAgICAgIC8vIGNvbnN0IGNsb25lID0gd2VhdGhlci5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgR2V0SW5mbyhpbnB1dF9maWVsZClcbiAgICAgICAgQ2xvc2VDb250YWluZXIoZmFsc2UpXG4gICAgICAgIGNvbnN0IGNsb3NlX2lucHV0X2J1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9jaXR5XCIpXG4gICAgICAgIGNsb3NlX2lucHV0X2J1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9zZV9pbnB1dF9idXR0b24ubmV4dFNpYmxpbmcsIGNoaWxkKVxuICAgICAgICAvLyB3ZWF0aGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lLCB3ZWF0aGVyKVxuXG4gICAgICAgIC8vIENsb3NlQ29udGFpbmVyKHZhbHVlLCB3aG9sZV9wYWdlKVxuICAgICAgICBjb25zb2xlLmxvZyhcImNpdHlcIilcblxuXG4gICAgfVxuKX1cblxuLyogbWFpbiBmdW5jdGlvbiwgZmV0Y2ggdG8gd2VhdGhlciBhcGkgICovXG5cbmFzeW5jIGZ1bmN0aW9uIEdldEluZm8oZmV0Y2hfZGVmYXVsdF92YWx1ZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbF9pbmZvID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZGYxOGZlMWI4NDhlNDZkODhiYjE3NDk0NDIzMjcwMSZxPSR7ZmV0Y2hfZGVmYXVsdF92YWx1ZX0mZGF5cz02YClcbiAgICAgICAgY29uc3Qge2N1cnJlbnQsIGZvcmVjYXN0LCBsb2NhdGlvbn0gPSBhd2FpdCBhbGxfaW5mby5qc29uKClcbiAgICAgICAgY29uc3Qge2ZvcmVjYXN0ZGF5fSA9IGZvcmVjYXN0XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5Lmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlGdW5jdGlvbiA9ICgpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJfX2ZvcmVjYXN0JylcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBmb3JlY2FzdGRheS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuXG4gICAgICAgICAgICAgICAgLy8gdWwuYXBwZW5kKGxpKVxuXG4gICAgICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JlY2FzdGRheVtpXS5kYXRlKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tdXMnLCB7d2Vla2RheTogJ2xvbmcnfSk7XG5cbiAgICAgICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBgICAgIFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXlcIj4ke2RheX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2l0eSA9IGxvY2F0aW9uLm5hbWVcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9pY29uID0gY3VycmVudC5jb25kaXRpb24uaWNvblxuICAgICAgICBjb25zdCBoUGEgPSBgJHtjdXJyZW50LnByZXNzdXJlX21ifSBoUGFgXG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gYCR7Y3VycmVudC5odW1pZGl0eX0gJWBcbiAgICAgICAgY29uc3Qgd2luZCA9IGAke01hdGgucm91bmQoY3VycmVudC53aW5kX2twaCAqIDEwMDAgLyAzNjAwKX0gbS9zYFxuICAgICAgICBjb25zdCB0ZW1wX0MgPSBjdXJyZW50LnRlbXBfY1xuXG5cbiAgICAgICAgY29uc3QgZGl2X2lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jaXR5JylcblxuICAgICAgICBjb25zdCBkaXZfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykuaW5uZXJIVE1MPVxuICAgICAgICAgICAgICAgYCA8ZGl2IGlkPSAnd2VhdGhlcicgY2xhc3M9J21vZHVsZSBtb2R1bGVfX3dlYXRoZXInID4gL25cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0taWNvbiBidG4tLWNsb3NlIGNsb3NlX2NvbnRhaW5lclwiIGlkPVwiY2xvc2VfY29udGFpbmVyXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmNsb3NlPC9pPjwvYnV0dG9uPlxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2VhdGhlcl9faWNvblwiPjxpbWcgc3JjPVwiJHt3ZWF0aGVyX2ljb259XCIvPjwvZGl2PlxuICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXJfX2luZm9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2l0eVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNpdHlfX25hbWVcIj48L3NwYW4+ICR7Y2l0eX08c3BhbiBjbGFzcz1cImJ0biBidG4tLWljb25cIj48aSBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+ZWRpdDwvaT48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+JHt0ZW1wX0N9PHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj48L3NwYW4+JmRlZztDPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIndlYXRoZXJfX2RldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvcHJlc3N1cmUuc3ZnXCIvPiR7aFBhfSA8c3BhbiBjbGFzcz1cInByZXNzdXJlX192YWx1ZVwiPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48aW1nIHNyYz1cImFzc2V0cy9pY29ucy9odW1pZGl0eS5zdmdcIi8+JHtodW1pZGl0eX0gPHNwYW4gY2xhc3M9XCJodW1pZGl0eV9fdmFsdWVcIj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvd2luZC1zcGVlZC5zdmdcIi8+JHt3aW5kfSA8c3BhbiBjbGFzcz1cIndpbmQtc3BlZWRfX3ZhbHVlXCI+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgIFxuICAgICAgICAgICAgPHVsIGNsYXNzPVwid2VhdGhlcl9fZm9yZWNhc3RcIiBpZD1cIndlYXRoZXJfX2ZvcmVjYXN0XCI+XG5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG4gICAgICAgIGRpdl9pbnB1dC5hZnRlcihkaXZfY29udGFpbmVyKVxuXG4gICAgICAgIENsb3NlQ29udGFpbmVyKHZhbHVlKVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cblxuXG4vLyBHZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpXG5cbkFkZENpdHkoKVxuQ2xvc2VJbnB1dCgpXG5JbnB1dEZpZWxkKClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUwY2UwMGRkODYwN2ZkMWE3OGRhXCIpIl0sIm5hbWVzIjpbImRlZmF1bHRfZm9yZWNhc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmV0Y2hfZGVmYXVsdF92YWx1ZSIsInZhbHVlIiwiQ2xvc2VJbnB1dCIsImNsb3NlX2lucHV0X2J1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsImFkZF9jaXR5IiwiaGlkZGVuIiwiQWRkQ2l0eSIsImFkZF9jaXR5X2J1dHRvbiIsIkNsb3NlQ29udGFpbmVyIiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsIklucHV0RmllbGQiLCJub2RlIiwiY2hpbGQiLCJpbnB1dF9maWVsZCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsIndlYXRoZXIiLCJHZXRJbmZvIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIm5leHRTaWJsaW5nIiwiYWxsX2luZm8iLCJmZXRjaCIsImN1cnJlbnQiLCJmb3JlY2FzdCIsImxvY2F0aW9uIiwianNvbiIsImZvcmVjYXN0ZGF5IiwibGVuZ3RoIiwiZm9yZWNhc3REYXlGdW5jdGlvbiIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImlubmVySFRNTCIsImF2Z3RlbXBfYyIsImNpdHkiLCJuYW1lIiwid2VhdGhlcl9pY29uIiwiY29uZGl0aW9uIiwiaWNvbiIsImhQYSIsInByZXNzdXJlX21iIiwiaHVtaWRpdHkiLCJ3aW5kIiwiTWF0aCIsInJvdW5kIiwid2luZF9rcGgiLCJ0ZW1wX0MiLCJ0ZW1wX2MiLCJkaXZfaW5wdXQiLCJkaXZfY29udGFpbmVyIiwiYWZ0ZXIiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9