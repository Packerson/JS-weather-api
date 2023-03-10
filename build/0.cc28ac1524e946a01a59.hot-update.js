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
    for (let i = 0; i < forecastday.length; i++) {
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
/******/ 	__webpack_require__.h = () => ("f11d64c7e8e2f1084519")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jYzI4YWMxNTI0ZTk0NmEwMWE1OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsZUFBZUEsT0FBTyxHQUFJO0VBQ3RCLElBQUk7SUFDQSxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLGlHQUFpRyxDQUFDO0lBQy9ILE1BQU07TUFBQ0MsT0FBTztNQUFFQyxRQUFRO01BQUVDO0lBQVEsQ0FBQyxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFO0lBQzNELE1BQU07TUFBQ0M7SUFBVyxDQUFDLEdBQUdILFFBQVE7SUFDOUJJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixPQUFPLENBQUM7SUFDcEJLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixXQUFXLENBQUNHLE1BQU0sQ0FBQztJQUMvQkYsT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVEsQ0FBQztJQUVyQixNQUFNTSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FDbkVULFFBQVEsQ0FBQ1UsSUFBSTtJQUNqQixNQUFNQyxZQUFZLEdBQUdKLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNJLEdBQUcsR0FDdkUsR0FBRWQsT0FBTyxDQUFDZSxTQUFTLENBQUNDLElBQUssRUFBQztJQUMvQixNQUFNQyxHQUFHLEdBQUdSLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUN2RVgsT0FBTyxDQUFDa0IsV0FBVztJQUN2QixNQUFNQyxRQUFRLEdBQUdWLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUMzRSxHQUFFWCxPQUFPLENBQUNtQixRQUFTLEdBQUU7SUFDMUIsTUFBTUMsSUFBSSxHQUFHWCxRQUFRLENBQUNDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FDekUsR0FBRVUsSUFBSSxDQUFDQyxLQUFLLENBQUN0QixPQUFPLENBQUN1QixRQUFRLEdBQUMsSUFBSSxHQUFDLElBQUksQ0FBRSxNQUFLO0lBQ25ELE1BQU1DLE1BQU0sR0FBR2YsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUdYLE9BQU8sQ0FBQ3lCLE1BQU07SUFFbEcsTUFBTUMsaUJBQWlCLEdBQUdqQixRQUFRLENBQUNDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO0lBRTlFLEtBQUssSUFBSWlCLENBQUMsR0FBQyxDQUFDLEVBQUNBLENBQUMsR0FBR3ZCLFdBQVcsQ0FBQ0csTUFBTSxFQUFFb0IsQ0FBQyxFQUFFLEVBQUM7TUFFckN0QixPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsUUFBUSxDQUFDMEIsQ0FBQyxDQUFDLENBQUM7SUFDNUI7SUFDQXRCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxZQUFZLENBQUM7SUFDekJSLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxJQUFJLENBQUM7SUFDakJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVyxHQUFHLENBQUM7SUFDaEJaLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxRQUFRLENBQUM7SUFDckJkLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYyxJQUFJLENBQUM7SUFDakJmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDa0IsTUFBTSxDQUFDO0VBQzNCLENBQUMsUUFBT0ksR0FBRyxFQUFDO0lBQ0p2QixPQUFPLENBQUNDLEdBQUcsQ0FBQ3NCLEdBQUcsQ0FBQztFQUNwQjtBQUNKO0FBRUEvQixPQUFPLEVBQUU7Ozs7Ozs7O1VDeENUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmFzeW5jIGZ1bmN0aW9uIGdldEluZm8gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGFsbF9pbmZvID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ZGYxOGZlMWI4NDhlNDZkODhiYjE3NDk0NDIzMjcwMSZxPWF1dG86aXAmZGF5cz01JylcbiAgICAgICAgY29uc3Qge2N1cnJlbnQsIGZvcmVjYXN0LCBsb2NhdGlvbn0gPSBhd2FpdCBhbGxfaW5mby5qc29uKClcbiAgICAgICAgY29uc3Qge2ZvcmVjYXN0ZGF5fSA9IGZvcmVjYXN0XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5Lmxlbmd0aClcbiAgICAgICAgY29uc29sZS5sb2cobG9jYXRpb24pXG5cbiAgICAgICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NpdHlfX25hbWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgbG9jYXRpb24ubmFtZVxuICAgICAgICBjb25zdCB3ZWF0aGVyX2ljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3ZWF0aGVyX19pY29uJylbMF0uc3JjID1cbiAgICAgICAgICAgIGAke2N1cnJlbnQuY29uZGl0aW9uLmljb259YFxuICAgICAgICBjb25zdCBoUGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmVzc3VyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPVxuICAgICAgICAgICAgY3VycmVudC5wcmVzc3VyZV9tYlxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h1bWlkaXR5X192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtjdXJyZW50Lmh1bWlkaXR5fSVgXG4gICAgICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3aW5kLXNwZWVkX192YWx1ZScpWzBdLmlubmVyVGV4dCA9XG4gICAgICAgICAgICBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGgqMTAwMC8zNjAwKX0gbS9zYFxuICAgICAgICBjb25zdCB0ZW1wX0MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0ZW1wZXJhdHVyZV9fdmFsdWUnKVswXS5pbm5lclRleHQgPSBjdXJyZW50LnRlbXBfY1xuXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfX2ZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2VhdGhlcl9fZm9yZWNhc3QnKVxuXG4gICAgICAgIGZvciAobGV0IGk9MDtpIDwgZm9yZWNhc3RkYXkubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhmb3JlY2FzdFtpXSlcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyX2ljb24pXG4gICAgICAgIGNvbnNvbGUubG9nKGNpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKGhQYSlcbiAgICAgICAgY29uc29sZS5sb2coaHVtaWRpdHkpXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmQpXG4gICAgICAgIGNvbnNvbGUubG9nKHRlbXBfQylcbn1jYXRjaCAoZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgIH1cbn1cblxuZ2V0SW5mbygpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZjExZDY0YzdlOGUyZjEwODQ1MTlcIikiXSwibmFtZXMiOlsiZ2V0SW5mbyIsImFsbF9pbmZvIiwiZmV0Y2giLCJjdXJyZW50IiwiZm9yZWNhc3QiLCJsb2NhdGlvbiIsImpzb24iLCJmb3JlY2FzdGRheSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjaXR5IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaW5uZXJUZXh0IiwibmFtZSIsIndlYXRoZXJfaWNvbiIsInNyYyIsImNvbmRpdGlvbiIsImljb24iLCJoUGEiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZCIsIk1hdGgiLCJyb3VuZCIsIndpbmRfa3BoIiwidGVtcF9DIiwidGVtcF9jIiwid2VhdGhlcl9fZm9yZWNhc3QiLCJpIiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==