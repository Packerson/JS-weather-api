self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

async function getInfo() {
  try {
    const all_info = await fetch('http://api.weatherapi.com/v1/forecast.json?key=df18fe1b848e46d88bb174944232701&q=auto:ip&days=5');
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
    const hPa = document.getElementsByClassName('pressure__value')[0].innerText = current.pressure_mb;
    const humidity = document.getElementsByClassName('humidity__value')[0].innerText = `${current.humidity}%`;
    const wind = document.getElementsByClassName('wind-speed__value')[0].innerText = `${Math.round(current.wind_kph * 1000 / 3600)} m/s`;
    const temp_C = document.getElementsByClassName('temperature__value')[0].innerText = current.temp_c;
    const weather__forecast = document.getElementsByClassName('weather__forecast');
    for (let i = 0; i++; i <= forecastday.length) {
      console.log(forecast[i]);
    }
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
/******/ 	__webpack_require__.h = () => ("a6c9121535b4bbaa10e8")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5mNGZkYWU2NDA3NzI0ZjU2YTRlMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsZUFBZUEsT0FBTyxHQUFJO0VBQ3RCLElBQUk7SUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGlHQUFpRyxDQUFDO0lBQy9ILE1BQU07TUFBQ0MsT0FBTztNQUFFQyxRQUFRO01BQUVDO0lBQVEsQ0FBQyxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFO0lBQzNELE1BQU07TUFBQ0M7SUFBVyxDQUFDLEdBQUdILFFBQVE7SUFDOUJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixPQUFPLENBQUM7SUFDcEJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXLENBQUNHLE1BQU0sQ0FBQztJQUMvQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVEsQ0FBQztJQUVyQixNQUFNTSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FDbkVULFFBQVEsQ0FBQ1UsSUFBSTtJQUNqQixNQUFNQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNJLEdBQUcsR0FDdkUsR0FBRWQsT0FBTyxDQUFDZSxTQUFTLENBQUNDLElBQUssRUFBQztJQUMvQixNQUFNQyxHQUFHLEdBQUdSLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUN2RVgsT0FBTyxDQUFDa0IsV0FBVztJQUN2QixNQUFNQyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUMzRSxHQUFFWCxPQUFPLENBQUNtQixRQUFTLEdBQUU7SUFDMUIsTUFBTUMsSUFBSSxHQUFHWCxRQUFRLENBQUNDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FDekUsR0FBRVUsSUFBSSxDQUFDQyxLQUFLLENBQUN0QixPQUFPLENBQUN1QixRQUFRLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBRSxNQUFLO0lBQ25ELE1BQU1DLE1BQU0sR0FBR2YsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUdYLE9BQU8sQ0FBQ3lCLE1BQU07SUFFbEcsTUFBTUMsaUJBQWlCLEdBQUdqQixRQUFRLENBQUNDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO0lBRTlFLEtBQUssSUFBSWlCLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsRUFBRSxFQUFFQSxDQUFDLElBQUl2QixXQUFXLENBQUNHLE1BQU0sRUFBQztNQUV0Q0YsT0FBTyxDQUFDQyxHQUFHLENBQUNMLFFBQVEsQ0FBQzBCLENBQUMsQ0FBQyxDQUFDO0lBQzVCO0lBQ0F0QixPQUFPLENBQUNDLEdBQUcsQ0FBQ08sWUFBWSxDQUFDO0lBQ3pCUixPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO0lBQ2pCSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ1csR0FBRyxDQUFDO0lBQ2hCWixPQUFPLENBQUNDLEdBQUcsQ0FBQ2EsUUFBUSxDQUFDO0lBQ3JCZCxPQUFPLENBQUNDLEdBQUcsQ0FBQ2MsSUFBSSxDQUFDO0lBQ2pCZixPQUFPLENBQUNDLEdBQUcsQ0FBQ2tCLE1BQU0sQ0FBQztFQUMzQixDQUFDLFFBQU9JLEdBQUcsRUFBQztJQUNKdkIsT0FBTyxDQUFDQyxHQUFHLENBQUNzQixHQUFHLENBQUM7RUFDcEI7QUFDSjtBQUVBL0IsT0FBTyxFQUFFOzs7Ozs7OztVQ3hDVCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5hc3luYyBmdW5jdGlvbiBnZXRJbmZvICgpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT1hdXRvOmlwJmRheXM9NScpXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KVxuICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdGRheS5sZW5ndGgpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuXG4gICAgICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXR5X19uYW1lJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGxvY2F0aW9uLm5hbWVcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9pY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VhdGhlcl9faWNvbicpWzBdLnNyYyA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LmNvbmRpdGlvbi5pY29ufWBcbiAgICAgICAgY29uc3QgaFBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJlc3N1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGN1cnJlbnQucHJlc3N1cmVfbWJcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodW1pZGl0eV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5odW1pZGl0eX0lYFxuICAgICAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2luZC1zcGVlZF9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7TWF0aC5yb3VuZChjdXJyZW50LndpbmRfa3BoKjEwMDAvMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcGVyYXR1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID0gY3VycmVudC50ZW1wX2NcblxuICAgICAgICBjb25zdCB3ZWF0aGVyX19mb3JlY2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ZvcmVjYXN0JylcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGk9MDtpKys7IGkgPD0gZm9yZWNhc3RkYXkubGVuZ3RoKXtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RbaV0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlcl9pY29uKVxuICAgICAgICBjb25zb2xlLmxvZyhjaXR5KVxuICAgICAgICBjb25zb2xlLmxvZyhoUGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGh1bWlkaXR5KVxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kKVxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wX0MpXG59Y2F0Y2ggKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cbmdldEluZm8oKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImE2YzkxMjE1MzViNGJiYWExMGU4XCIpIl0sIm5hbWVzIjpbImdldEluZm8iLCJhbGxfaW5mbyIsImZldGNoIiwiY3VycmVudCIsImZvcmVjYXN0IiwibG9jYXRpb24iLCJqc29uIiwiZm9yZWNhc3RkYXkiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY2l0eSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImlubmVyVGV4dCIsIm5hbWUiLCJ3ZWF0aGVyX2ljb24iLCJzcmMiLCJjb25kaXRpb24iLCJpY29uIiwiaFBhIiwicHJlc3N1cmVfbWIiLCJodW1pZGl0eSIsIndpbmQiLCJNYXRoIiwicm91bmQiLCJ3aW5kX2twaCIsInRlbXBfQyIsInRlbXBfYyIsIndlYXRoZXJfX2ZvcmVjYXN0IiwiaSIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=