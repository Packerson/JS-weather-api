self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

const add_city_button = document.getElementById('"add-city"');
async function AddCity() {
  add_city_button.addEventListener('click', ev => {
    ev.preventDefault();
    const add_city = document.getElementById('add_city');
    console.log(add_city);
    add_city.removeAttribute('hidden');
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
        console.log(forecastday[i]);
      }
    };
    forecastDayFunction();
    console.log(weather_icon);
    console.log(city);
    console.log(hPa);
    console.log(humidity);
    console.log(wind);
    console.log(temp_C);
  } catch (err) {
    console.log(err);
  }
}
getInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("93a5a57f042de8d158e0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDO1FBQ3hDLElBQUlFLEdBQUcsR0FBR0YsSUFBSSxDQUFDRyxjQUFjLENBQUMsT0FBTyxFQUFFO1VBQUNDLE9BQU8sRUFBRTtRQUFNLENBQUMsQ0FBQztRQUV6RFAsRUFBRSxDQUFDUSxTQUFTLEdBQUk7QUFDaEMsNENBQTRDSCxHQUFJO0FBQ2hEO0FBQ0E7QUFDQSwwQkFBMEIzQixXQUFXLENBQUNxQixDQUFDLENBQUMsQ0FBQ00sR0FBRyxDQUFDSSxTQUFVLHNCQUFxQjtRQUU1RHpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxXQUFXLENBQUNxQixDQUFDLENBQUMsQ0FBQztNQUMvQjtJQUNKLENBQUM7SUFDREYsbUJBQW1CLEVBQUU7SUFDckI3QixPQUFPLENBQUNDLEdBQUcsQ0FBQ2UsWUFBWSxDQUFDO0lBQ3pCaEIsT0FBTyxDQUFDQyxHQUFHLENBQUNXLElBQUksQ0FBQztJQUNqQlosT0FBTyxDQUFDQyxHQUFHLENBQUNtQixHQUFHLENBQUM7SUFDaEJwQixPQUFPLENBQUNDLEdBQUcsQ0FBQ3FCLFFBQVEsQ0FBQztJQUNyQnRCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDc0IsSUFBSSxDQUFDO0lBQ2pCdkIsT0FBTyxDQUFDQyxHQUFHLENBQUMwQixNQUFNLENBQUM7RUFDM0IsQ0FBQyxRQUFPZSxHQUFHLEVBQUM7SUFDSjFDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeUMsR0FBRyxDQUFDO0VBQ3BCO0FBQ0o7QUFFQXZDLE9BQU8sRUFBRTs7Ozs7Ozs7VUM1RFQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRfY2l0eV9idXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnXCJhZGQtY2l0eVwiJylcblxuYXN5bmMgZnVuY3Rpb24gQWRkQ2l0eSAoKSB7IGFkZF9jaXR5X2J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldikgPT4ge1xuICAgIGV2LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBhZGRfY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG4gICAgY29uc29sZS5sb2coYWRkX2NpdHkpXG4gICAgYWRkX2NpdHkucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKVxufSl9XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEluZm8gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbF9pbmZvID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZGYxOGZlMWI4NDhlNDZkODhiYjE3NDk0NDIzMjcwMSZxPWF1dG86aXAmZGF5cz02JylcbiAgICAgICAgY29uc3Qge2N1cnJlbnQsIGZvcmVjYXN0LCBsb2NhdGlvbn0gPSBhd2FpdCBhbGxfaW5mby5qc29uKClcbiAgICAgICAgY29uc3Qge2ZvcmVjYXN0ZGF5fSA9IGZvcmVjYXN0XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5Lmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG5cbiAgICAgICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NpdHlfX25hbWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgbG9jYXRpb24ubmFtZVxuICAgICAgICBjb25zdCB3ZWF0aGVyX2ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3ZWF0aGVyX19pY29uJylbMF0uc3JjID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuY29uZGl0aW9uLmljb259YFxuICAgICAgICBjb25zdCBoUGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmVzc3VyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYFxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h1bWlkaXR5X192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtjdXJyZW50Lmh1bWlkaXR5fSAlYFxuICAgICAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2luZC1zcGVlZF9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7TWF0aC5yb3VuZChjdXJyZW50LndpbmRfa3BoKjEwMDAvMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcGVyYXR1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID0gY3VycmVudC50ZW1wX2NcblxuICAgICAgICBjb25zdCBmb3JlY2FzdERheUZ1bmN0aW9uID0gICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoZXJfX2ZvcmVjYXN0JylcbiAgICAgICAgICAgIGZvciAobGV0IGk9MSA7aSA8IGZvcmVjYXN0ZGF5Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICB1bC5hcHBlbmQobGkpXG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICAgICAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHt3ZWVrZGF5OiAnbG9uZyd9KTtcblxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7ZGF5fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvaWNvbnMvY2xlYXItZGF5LnN2Z1wiLz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVcIj48c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZV9fdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICR7Zm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfY308L3NwYW4+JmRlZztDPC9zcGFuPmBcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5W2ldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvcmVjYXN0RGF5RnVuY3Rpb24oKVxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyX2ljb24pXG4gICAgICAgIGNvbnNvbGUubG9nKGNpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKGhQYSlcbiAgICAgICAgY29uc29sZS5sb2coaHVtaWRpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBfQylcbn1jYXRjaCAoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuZ2V0SW5mbygpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOTNhNWE1N2YwNDJkZThkMTU4ZTBcIikiXSwibmFtZXMiOlsiYWRkX2NpdHlfYnV0dG9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFkZENpdHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJwcmV2ZW50RGVmYXVsdCIsImFkZF9jaXR5IiwiY29uc29sZSIsImxvZyIsInJlbW92ZUF0dHJpYnV0ZSIsImdldEluZm8iLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJsZW5ndGgiLCJjaXR5IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImZvcmVjYXN0RGF5RnVuY3Rpb24iLCJ1bCIsImkiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmQiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImlubmVySFRNTCIsImF2Z3RlbXBfYyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=