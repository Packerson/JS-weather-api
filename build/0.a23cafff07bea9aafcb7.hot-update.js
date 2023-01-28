self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

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
        li.innerHTML = `    
                    <span className="day">${forecastday[i].date}</span>
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
/******/ 	__webpack_require__.h = () => ("243b1ea143290ba0fbbd")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2EsUUFBUSxDQUFDO0lBQ3JCZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDO0lBQ2pCZixPQUFPLENBQUNDLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQztFQUMzQixDQUFDLFFBQU9hLEdBQUcsRUFBQztJQUNKaEMsT0FBTyxDQUFDQyxHQUFHLENBQUMrQixHQUFHLENBQUM7RUFDcEI7QUFDSjtBQUVBeEMsT0FBTyxFQUFFOzs7Ozs7OztVQ2pEVCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5hc3luYyBmdW5jdGlvbiBnZXRJbmZvICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT1hdXRvOmlwJmRheXM9NicpXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuXG4gICAgICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXR5X19uYW1lJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGxvY2F0aW9uLm5hbWVcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9pY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VhdGhlcl9faWNvbicpWzBdLnNyYyA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LmNvbmRpdGlvbi5pY29ufWBcbiAgICAgICAgY29uc3QgaFBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJlc3N1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQucHJlc3N1cmVfbWJ9IGhQYWBcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodW1pZGl0eV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5odW1pZGl0eX0gJWBcbiAgICAgICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dpbmQtc3BlZWRfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGAke01hdGgucm91bmQoY3VycmVudC53aW5kX2twaCoxMDAwLzM2MDApfSBtL3NgXG4gICAgICAgIGNvbnN0IHRlbXBfQyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RlbXBlcmF0dXJlX192YWx1ZScpWzBdLmlubmVyVGV4dCA9IGN1cnJlbnQudGVtcF9jXG5cbiAgICAgICAgY29uc3QgZm9yZWNhc3REYXlGdW5jdGlvbiA9ICAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWF0aGVyX19mb3JlY2FzdCcpXG4gICAgICAgICAgICBmb3IgKGxldCBpPTEgO2kgPCBmb3JlY2FzdGRheS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kKGxpKVxuICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRheVwiPiR7Zm9yZWNhc3RkYXlbaV0uZGF0ZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL2NsZWFyLWRheS5zdmdcIi8+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2ZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2N9PC9zcGFuPiZkZWc7Qzwvc3Bhbj5gXG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3JlY2FzdERheUZ1bmN0aW9uKClcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlcl9pY29uKVxuICAgICAgICBjb25zb2xlLmxvZyhjaXR5KVxuICAgICAgICBjb25zb2xlLmxvZyhoUGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGh1bWlkaXR5KVxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kKVxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wX0MpXG59Y2F0Y2ggKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cbmdldEluZm8oKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI0M2IxZWExNDMyOTBiYTBmYmJkXCIpIl0sIm5hbWVzIjpbImdldEluZm8iLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY2l0eSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsImZvcmVjYXN0RGF5RnVuY3Rpb24iLCJ1bCIsImdldEVsZW1lbnRCeUlkIiwiaSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZCIsImlubmVySFRNTCIsImRhdGUiLCJkYXkiLCJhdmd0ZW1wX2MiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9