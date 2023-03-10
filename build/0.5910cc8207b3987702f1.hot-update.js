self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

const add_city_button = document.getElementById("add-city");
async function AddCity() {
  add_city_button.addEventListener('click', () => {
    const add_city = document.getElementById('add_city').hidden = false;
    console.log(add_city);
  });
}
async function getInfo() {
  try {
    const all_info = await fetch('http://api.weatherapi.com/v1/forecast.json?key=df18fe1b848e46d88bb174944232701&q=auto:ip&days=6');
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
    const city = document.getElementsByClassName('city__name')[0].innerText = location.name;
    const weather_icon = document.getElementsByClassName('weather__icon')[0].src = `${current.condition.icon}`;
    const hPa = document.getElementsByClassName('pressure__value')[0].innerText = `${current.pressure_mb} hPa`;
    const humidity = document.getElementsByClassName('humidity__value')[0].innerText = `${current.humidity} %`;
    const wind = document.getElementsByClassName('wind-speed__value')[0].innerText = `${Math.round(current.wind_kph * 1000 / 3600)} m/s`;
    const temp_C = document.getElementsByClassName('temperature__value')[0].innerText = current.temp_c;
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
getInfo();
AddCity();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c821a48307e62f850acd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRTtVQUFDQyxPQUFPLEVBQUU7UUFBTSxDQUFDLENBQUM7UUFFekRQLEVBQUUsQ0FBQ1EsU0FBUyxHQUFJO0FBQ2hDLDRDQUE0Q0gsR0FBSTtBQUNoRDtBQUNBO0FBQ0EsMEJBQTBCM0IsV0FBVyxDQUFDcUIsQ0FBQyxDQUFDLENBQUNNLEdBQUcsQ0FBQ0ksU0FBVSxzQkFBcUI7TUFHaEU7SUFDSixDQUFDO0lBQ0RaLG1CQUFtQixFQUFFO0VBRTdCLENBQUMsUUFBT2EsR0FBRyxFQUFDO0lBQ0p6QyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3dDLEdBQUcsQ0FBQztFQUNwQjtBQUNKO0FBRUF2QyxPQUFPLEVBQUU7QUFDVE4sT0FBTyxFQUFFOzs7Ozs7OztVQzNEVCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFkZF9jaXR5X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNpdHlcIilcblxuYXN5bmMgZnVuY3Rpb24gQWRkQ2l0eSAoKSB7XG4gICAgYWRkX2NpdHlfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG5cbiAgICAgICAgY29uc3QgYWRkX2NpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkX2NpdHknKS5oaWRkZW4gPSBmYWxzZVxuICAgICAgICBjb25zb2xlLmxvZyhhZGRfY2l0eSlcblxuICAgIH0pXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEluZm8gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbF9pbmZvID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZGYxOGZlMWI4NDhlNDZkODhiYjE3NDk0NDIzMjcwMSZxPWF1dG86aXAmZGF5cz02JylcbiAgICAgICAgY29uc3Qge2N1cnJlbnQsIGZvcmVjYXN0LCBsb2NhdGlvbn0gPSBhd2FpdCBhbGxfaW5mby5qc29uKClcbiAgICAgICAgY29uc3Qge2ZvcmVjYXN0ZGF5fSA9IGZvcmVjYXN0XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5Lmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG5cbiAgICAgICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NpdHlfX25hbWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgbG9jYXRpb24ubmFtZVxuICAgICAgICBjb25zdCB3ZWF0aGVyX2ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3ZWF0aGVyX19pY29uJylbMF0uc3JjID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuY29uZGl0aW9uLmljb259YFxuICAgICAgICBjb25zdCBoUGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmVzc3VyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYFxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h1bWlkaXR5X192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtjdXJyZW50Lmh1bWlkaXR5fSAlYFxuICAgICAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2luZC1zcGVlZF9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7TWF0aC5yb3VuZChjdXJyZW50LndpbmRfa3BoKjEwMDAvMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcGVyYXR1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID0gY3VycmVudC50ZW1wX2NcblxuICAgICAgICBjb25zdCBmb3JlY2FzdERheUZ1bmN0aW9uID0gICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJfX2ZvcmVjYXN0JylcbiAgICAgICAgICAgIGZvciAobGV0IGk9MSA7aSA8IGZvcmVjYXN0ZGF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQobGkpXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICAgICAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHt3ZWVrZGF5OiAnbG9uZyd9KTtcblxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPmBcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yZWNhc3REYXlGdW5jdGlvbigpXG5cbn1jYXRjaCAoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuZ2V0SW5mbygpXG5BZGRDaXR5KClcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImM4MjFhNDgzMDdlNjJmODUwYWNkXCIpIl0sIm5hbWVzIjpbImFkZF9jaXR5X2J1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJBZGRDaXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZF9jaXR5IiwiaGlkZGVuIiwiY29uc29sZSIsImxvZyIsImdldEluZm8iLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJsZW5ndGgiLCJjaXR5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImZvcmVjYXN0RGF5RnVuY3Rpb24iLCJ1bCIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImlubmVySFRNTCIsImF2Z3RlbXBfYyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=