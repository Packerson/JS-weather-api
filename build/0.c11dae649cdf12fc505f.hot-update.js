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
    const [forecast_array] = forecast;
    console.log(current);
    console.log(forecast_array);
    console.log(location);
    const city = document.getElementsByClassName('city__name')[0].innerText = location.name;
    const weather_icon = document.getElementsByClassName('weather__icon')[0].src = `${current.condition.icon}`;
    const hPa = document.getElementsByClassName('pressure__value')[0].innerText = current.pressure_mb;
    const humidity = document.getElementsByClassName('humidity__value')[0].innerText = `${current.humidity}%`;
    const wind = document.getElementsByClassName('wind-speed__value')[0].innerText = `${Math.round(current.wind_kph * 1000 / 3600)} m/s`;
    const temp_C = document.getElementsByClassName('temperature__value')[0].innerText = current.temp_c;
    const weather__forecast = document.getElementsByClassName('weather__forecast');
    console.log(forecast.length);
    // for (let i=0;i++; i >= forecast_array.length){
    //
    //     console.log(forecast[i])
    // }
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
/******/ 	__webpack_require__.h = () => ("6ef0b3eb3c63f00f4a7a")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMTFkYWU2NDljZGYxMmZjNTA1Zi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsZUFBZUEsT0FBTyxHQUFJO0VBQ3RCLElBQUk7SUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGlHQUFpRyxDQUFDO0lBQy9ILE1BQU07TUFBQ0MsT0FBTztNQUFFQyxRQUFRO01BQUVDO0lBQVEsQ0FBQyxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFO0lBQzNELE1BQU0sQ0FBQ0MsY0FBYyxDQUFDLEdBQUdILFFBQVE7SUFDakNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixPQUFPLENBQUM7SUFDcEJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixjQUFjLENBQUM7SUFDM0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixRQUFRLENBQUM7SUFFckIsTUFBTUssSUFBSSxHQUFHQyxRQUFRLENBQUNDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQ25FUixRQUFRLENBQUNTLElBQUk7SUFDakIsTUFBTUMsWUFBWSxHQUFHSixRQUFRLENBQUNDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSSxHQUFHLEdBQ3ZFLEdBQUViLE9BQU8sQ0FBQ2MsU0FBUyxDQUFDQyxJQUFLLEVBQUM7SUFDL0IsTUFBTUMsR0FBRyxHQUFHUixRQUFRLENBQUNDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FDdkVWLE9BQU8sQ0FBQ2lCLFdBQVc7SUFDdkIsTUFBTUMsUUFBUSxHQUFHVixRQUFRLENBQUNDLHNCQUFzQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FDM0UsR0FBRVYsT0FBTyxDQUFDa0IsUUFBUyxHQUFFO0lBQzFCLE1BQU1DLElBQUksR0FBR1gsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQ3pFLEdBQUVVLElBQUksQ0FBQ0MsS0FBSyxDQUFDckIsT0FBTyxDQUFDc0IsUUFBUSxHQUFDLElBQUksR0FBQyxJQUFJLENBQUUsTUFBSztJQUNuRCxNQUFNQyxNQUFNLEdBQUdmLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFHVixPQUFPLENBQUN3QixNQUFNO0lBRWxHLE1BQU1DLGlCQUFpQixHQUFHakIsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQztJQUM5RUosT0FBTyxDQUFDQyxHQUFHLENBQUNMLFFBQVEsQ0FBQ3lCLE1BQU0sQ0FBQztJQUM1QjtJQUNBO0lBQ0E7SUFDQTtJQUNBckIsT0FBTyxDQUFDQyxHQUFHLENBQUNNLFlBQVksQ0FBQztJQUN6QlAsT0FBTyxDQUFDQyxHQUFHLENBQUNDLElBQUksQ0FBQztJQUNqQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNVLEdBQUcsQ0FBQztJQUNoQlgsT0FBTyxDQUFDQyxHQUFHLENBQUNZLFFBQVEsQ0FBQztJQUNyQmIsT0FBTyxDQUFDQyxHQUFHLENBQUNhLElBQUksQ0FBQztJQUNqQmQsT0FBTyxDQUFDQyxHQUFHLENBQUNpQixNQUFNLENBQUM7RUFDM0IsQ0FBQyxRQUFPSSxHQUFHLEVBQUM7SUFDSnRCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDcUIsR0FBRyxDQUFDO0VBQ3BCO0FBQ0o7QUFFQTlCLE9BQU8sRUFBRTs7Ozs7Ozs7VUN4Q1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuYXN5bmMgZnVuY3Rpb24gZ2V0SW5mbyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYWxsX2luZm8gPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1kZjE4ZmUxYjg0OGU0NmQ4OGJiMTc0OTQ0MjMyNzAxJnE9YXV0bzppcCZkYXlzPTUnKVxuICAgICAgICBjb25zdCB7Y3VycmVudCwgZm9yZWNhc3QsIGxvY2F0aW9ufSA9IGF3YWl0IGFsbF9pbmZvLmpzb24oKVxuICAgICAgICBjb25zdCBbZm9yZWNhc3RfYXJyYXldID0gZm9yZWNhc3RcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudClcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3RfYXJyYXkpXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2F0aW9uKVxuXG4gICAgICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaXR5X19uYW1lJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGxvY2F0aW9uLm5hbWVcbiAgICAgICAgY29uc3Qgd2VhdGhlcl9pY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VhdGhlcl9faWNvbicpWzBdLnNyYyA9XG4gICAgICAgICAgICBgJHtjdXJyZW50LmNvbmRpdGlvbi5pY29ufWBcbiAgICAgICAgY29uc3QgaFBhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJlc3N1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID1cbiAgICAgICAgICAgIGN1cnJlbnQucHJlc3N1cmVfbWJcbiAgICAgICAgY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodW1pZGl0eV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7Y3VycmVudC5odW1pZGl0eX0lYFxuICAgICAgICBjb25zdCB3aW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2luZC1zcGVlZF9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgYCR7TWF0aC5yb3VuZChjdXJyZW50LndpbmRfa3BoKjEwMDAvMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcGVyYXR1cmVfX3ZhbHVlJylbMF0uaW5uZXJUZXh0ID0gY3VycmVudC50ZW1wX2NcblxuICAgICAgICBjb25zdCB3ZWF0aGVyX19mb3JlY2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2ZvcmVjYXN0JylcbiAgICAgICAgY29uc29sZS5sb2coZm9yZWNhc3QubGVuZ3RoKVxuICAgICAgICAvLyBmb3IgKGxldCBpPTA7aSsrOyBpID49IGZvcmVjYXN0X2FycmF5Lmxlbmd0aCl7XG4gICAgICAgIC8vXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdFtpXSlcbiAgICAgICAgLy8gfVxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyX2ljb24pXG4gICAgICAgIGNvbnNvbGUubG9nKGNpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKGhQYSlcbiAgICAgICAgY29uc29sZS5sb2coaHVtaWRpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBfQylcbn1jYXRjaCAoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuZ2V0SW5mbygpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNmVmMGIzZWIzYzYzZjAwZjRhN2FcIikiXSwibmFtZXMiOlsiZ2V0SW5mbyIsImFsbF9pbmZvIiwiZmV0Y2giLCJjdXJyZW50IiwiZm9yZWNhc3QiLCJsb2NhdGlvbiIsImpzb24iLCJmb3JlY2FzdF9hcnJheSIsImNvbnNvbGUiLCJsb2ciLCJjaXR5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwibmFtZSIsIndlYXRoZXJfaWNvbiIsInNyYyIsImNvbmRpdGlvbiIsImljb24iLCJoUGEiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZCIsIk1hdGgiLCJyb3VuZCIsIndpbmRfa3BoIiwidGVtcF9DIiwidGVtcF9jIiwid2VhdGhlcl9fZm9yZWNhc3QiLCJsZW5ndGgiLCJlcnIiXSwic291cmNlUm9vdCI6IiJ9