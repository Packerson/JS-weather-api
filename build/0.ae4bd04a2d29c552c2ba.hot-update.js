self["webpackHotUpdatees6_async_await"](0,Array(23).concat([
/* 23 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const default_forecast = document.getElementById('app');
const fetch_default_value = 'auto:ip';
let value = true;
function importAll(r) {
  return r.keys().map(r);
}
const images = importAll(__webpack_require__(24));

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

/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./clear-day.svg": 25,
	"./clear-night.svg": 26,
	"./cloudy.svg": 27,
	"./fog.svg": 28,
	"./hail.svg": 29,
	"./humidity.svg": 30,
	"./logo.svg": 31,
	"./partly-cloudy-day.svg": 32,
	"./partly-cloudy-night.svg": 33,
	"./pressure.svg": 34,
	"./rain.svg": 35,
	"./sleet.svg": 36,
	"./snow.svg": 37,
	"./thunderstorm.svg": 38,
	"./tornado.svg": 39,
	"./wind-speed.svg": 40,
	"./wind.svg": 41
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 24;

/***/ }),
/* 25 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 26 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 27 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 28 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 29 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 30 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z\" fill=\"#00b4ef\" /></svg>");

/***/ }),
/* 31 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg height=\"64px\" style=\"shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd\" version=\"1.1\" viewBox=\"0 0 64 64\" width=\"64px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><style type=\"text/css\">\n|    <![CDATA[\n|     .str0 {stroke:#FFC106;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:22.9256}");

/***/ }),
/* 32 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 33 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 34 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z\" fill=\"#828282\" /></svg>");

/***/ }),
/* 35 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 36 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 37 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 38 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 39 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ }),
/* 40 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z\" fill=\"#828282\" /></svg>");

/***/ }),
/* 41 */
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <?xml version=\"1.0\" encoding=\"utf-8\"?>\n| <!-- (c) ammap.com | SVG weather icons -->\n| <svg");

/***/ })
]),
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ebb4c0319f36295deee6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1pXLFVBQVUsRUFBRTs7Ozs7O0FDbktaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vYXNzZXRzL2ljb25zLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDanBlIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBkZWZhdWx0X2ZvcmVjYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG5jb25zdCBmZXRjaF9kZWZhdWx0X3ZhbHVlID0gJ2F1dG86aXAnXG5sZXQgdmFsdWUgPSB0cnVlXG5cbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG4gICAgcmV0dXJuIHIua2V5cygpLm1hcChyKTtcbn1cblxuY29uc3QgaW1hZ2VzID0gaW1wb3J0QWxsKHJlcXVpcmUuY29udGV4dCgnL2Fzc2V0cy9pY29ucycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcblxuXG4vKiBmdW5jdGlvbiBjbG9zaW5nIGlucHV0IGZpZWxkcyAqL1xuXG5mdW5jdGlvbiBDbG9zZUlucHV0KCkge1xuICAgIGNvbnN0IGNsb3NlX2lucHV0X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9pbnB1dCcpXG4gICAgY2xvc2VfaW5wdXRfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGFkZF9jaXR5LmhpZGRlbiA9IHRydWVcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiBzaG93aW5nIGlucHV0IGZpZWxkcyAqL1xuXG5hc3luYyBmdW5jdGlvbiBBZGRDaXR5KCkge1xuICAgIGNvbnN0IGFkZF9jaXR5X2J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWNpdHlcIilcbiAgICBhZGRfY2l0eV9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFkZF9jaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF9jaXR5JylcbiAgICAgICAgYWRkX2NpdHkuaGlkZGVuID0gZmFsc2VcbiAgICB9KVxufVxuXG4vKiBmdW5jdGlvbiBjbG9zaW5nIG1haW4gd2luZG93IHdpdGggd2VhdGhlciBmb3JlY2FzdCAqL1xuZnVuY3Rpb24gQ2xvc2VDb250YWluZXIgKHZhbHVlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX2NvbnRhaW5lcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSlcbn1cblxuLyogZnVuY3Rpb24gZm9yIGxvb2tpbmcgZm9yIGlucHV0IGNpdHkvdmFsdWUgYW5kIHNob3dpbmcuXG4qIGNsb25lIHdlYXRoZXIgY29udGFpbmVyICAqL1xuXG5mdW5jdGlvbiBJbnB1dEZpZWxkKG5vZGUsIGNoaWxkKSB7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoX2J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXJcbiAgICAoJ2NsaWNrJywgKGV2KSA9PiB7XG4gICAgICAgIGNvbnN0IGlucHV0X2ZpZWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaCcpLnZhbHVlXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0X2ZpZWxkKVxuICAgICAgICBldi5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlcicpXG5cbiAgICAgICAgLy8gem1pZW5pxIcgY2xvbmVOb2RlXG4gICAgICAgIC8vIGNvbnN0IGNsb25lID0gd2VhdGhlci5jbG9uZU5vZGUodHJ1ZSlcbiAgICAgICAgR2V0SW5mbyhpbnB1dF9maWVsZClcbiAgICAgICAgQ2xvc2VDb250YWluZXIoZmFsc2UpXG4gICAgICAgIGNvbnN0IGNsb3NlX2lucHV0X2J1dHRvbiAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZF9jaXR5XCIpXG4gICAgICAgIGNsb3NlX2lucHV0X2J1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9zZV9pbnB1dF9idXR0b24ubmV4dFNpYmxpbmcsIGNoaWxkKVxuICAgICAgICAvLyB3ZWF0aGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGNsb25lLCB3ZWF0aGVyKVxuXG4gICAgICAgIC8vIENsb3NlQ29udGFpbmVyKHZhbHVlLCB3aG9sZV9wYWdlKVxuICAgICAgICBjb25zb2xlLmxvZyhcImNpdHlcIilcblxuXG4gICAgfVxuKX1cblxuXG5cbi8qIG1haW4gZnVuY3Rpb24sIGZldGNoIHRvIHdlYXRoZXIgYXBpICAqL1xuXG5hc3luYyBmdW5jdGlvbiBHZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhbGxfaW5mbyA9IGF3YWl0IGZldGNoKGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PWRmMThmZTFiODQ4ZTQ2ZDg4YmIxNzQ5NDQyMzI3MDEmcT0ke2ZldGNoX2RlZmF1bHRfdmFsdWV9JmRheXM9NmApXG4gICAgICAgIGNvbnN0IHtjdXJyZW50LCBmb3JlY2FzdCwgbG9jYXRpb259ID0gYXdhaXQgYWxsX2luZm8uanNvbigpXG4gICAgICAgIGNvbnN0IHtmb3JlY2FzdGRheX0gPSBmb3JlY2FzdFxuXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0ZGF5KVxuICAgICAgICBjb25zb2xlLmxvZyhsb2NhdGlvbilcblxuXG4gICAgICAgIGNvbnN0IGRheV9hcnJheSA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZm9yZWNhc3RkYXkubGVuZ3RoOyBpKyspIHtcblxuICAgICAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZShmb3JlY2FzdGRheVtpXS5kYXRlKTtcbiAgICAgICAgICAgIGxldCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi11cycsIHt3ZWVrZGF5OiAnbG9uZyd9KTtcbiAgICAgICAgICAgIGRheV9hcnJheS5wdXNoKGRheSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNpdHkgPSBsb2NhdGlvbi5uYW1lXG4gICAgICAgIGNvbnN0IHdlYXRoZXJfaWNvbiA9IGN1cnJlbnQuY29uZGl0aW9uLmljb25cbiAgICAgICAgY29uc3QgaFBhID0gYCR7Y3VycmVudC5wcmVzc3VyZV9tYn0gaFBhYFxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGAke2N1cnJlbnQuaHVtaWRpdHl9ICVgXG4gICAgICAgIGNvbnN0IHdpbmQgPSBgJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZF9rcGggKiAxMDAwIC8gMzYwMCl9IG0vc2BcbiAgICAgICAgY29uc3QgdGVtcF9DID0gY3VycmVudC50ZW1wX2NcblxuXG4gICAgICAgIGNvbnN0IGRpdl9pbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfY2l0eScpXG5cbiAgICAgICAgY29uc3QgZGl2X2NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpdl9pbnB1dC5hZnRlcihkaXZfY29udGFpbmVyKVxuICAgICAgICBkaXZfY29udGFpbmVyLmlubmVySFRNTCA9XG4gICAgICAgICAgICBgPGRpdiBpZD0gJ3dlYXRoZXInIGNsYXNzPSdtb2R1bGUgbW9kdWxlX193ZWF0aGVyJyA+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tLWljb24gYnRuLS1jbG9zZSBjbG9zZV9jb250YWluZXJcIiBpZD1cImNsb3NlX2NvbnRhaW5lclwiPjxpIGNsYXNzPVwibWF0ZXJpYWwtaWNvbnNcIj5jbG9zZTwvaT48L2J1dHRvbj5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXJfX2ljb25cIj48aW1nIHNyYz1cImFzc2V0cy9pY29ucy9yYWluLnN2Z1wiLz48L2Rpdj5cbiAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyX19pbmZvXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXR5X19uYW1lXCI+PC9zcGFuPiAke2NpdHl9PHNwYW4gY2xhc3M9XCJidG4gYnRuLS1pY29uXCI+PGkgY2xhc3M9XCJtYXRlcmlhbC1pY29uc1wiPmVkaXQ8L2k+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPiR7dGVtcF9DfTxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVfX3ZhbHVlXCI+PC9zcGFuPiZkZWc7QzwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJ3ZWF0aGVyX19kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3ByZXNzdXJlLnN2Z1wiLz4ke2hQYX0gPHNwYW4gY2xhc3M9XCJwcmVzc3VyZV9fdmFsdWVcIj48L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGltZyBzcmM9XCJhc3NldHMvaWNvbnMvaHVtaWRpdHkuc3ZnXCIvPiR7aHVtaWRpdHl9IDxzcGFuIGNsYXNzPVwiaHVtaWRpdHlfX3ZhbHVlXCI+PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxpbWcgc3JjPVwiYXNzZXRzL2ljb25zL3dpbmQtc3BlZWQuc3ZnXCIvPiR7d2luZH0gPHNwYW4gY2xhc3M9XCJ3aW5kLXNwZWVkX192YWx1ZVwiPjwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICBcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIndlYXRoZXJfX2ZvcmVjYXN0XCIgaWQ9XCJ3ZWF0aGVyX19mb3JlY2FzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXlfYXJyYXlbMF19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVswXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXlfYXJyYXlbMV19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVsxXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXlfYXJyYXlbMl19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVsyXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXlfYXJyYXlbM119PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVszXS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3NOYW1lPVwiZGF5XCI+JHtkYXlfYXJyYXlbNF19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9jbGVhci1kYXkuc3ZnXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZW1wZXJhdHVyZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRlbXBlcmF0dXJlX192YWx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHtmb3JlY2FzdGRheVs0XS5kYXkuYXZndGVtcF9jfTwvc3Bhbj4mZGVnO0M8L3NwYW4+XFw8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcblxuXG4gICAgICAgIENsb3NlQ29udGFpbmVyKHZhbHVlKVxuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICB9XG59XG5cblxuXG5HZXRJbmZvKGZldGNoX2RlZmF1bHRfdmFsdWUpXG5cbkFkZENpdHkoKVxuQ2xvc2VJbnB1dCgpXG5JbnB1dEZpZWxkKClcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9jbGVhci1kYXkuc3ZnXCI6IDI1LFxuXHRcIi4vY2xlYXItbmlnaHQuc3ZnXCI6IDI2LFxuXHRcIi4vY2xvdWR5LnN2Z1wiOiAyNyxcblx0XCIuL2ZvZy5zdmdcIjogMjgsXG5cdFwiLi9oYWlsLnN2Z1wiOiAyOSxcblx0XCIuL2h1bWlkaXR5LnN2Z1wiOiAzMCxcblx0XCIuL2xvZ28uc3ZnXCI6IDMxLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1kYXkuc3ZnXCI6IDMyLFxuXHRcIi4vcGFydGx5LWNsb3VkeS1uaWdodC5zdmdcIjogMzMsXG5cdFwiLi9wcmVzc3VyZS5zdmdcIjogMzQsXG5cdFwiLi9yYWluLnN2Z1wiOiAzNSxcblx0XCIuL3NsZWV0LnN2Z1wiOiAzNixcblx0XCIuL3Nub3cuc3ZnXCI6IDM3LFxuXHRcIi4vdGh1bmRlcnN0b3JtLnN2Z1wiOiAzOCxcblx0XCIuL3Rvcm5hZG8uc3ZnXCI6IDM5LFxuXHRcIi4vd2luZC1zcGVlZC5zdmdcIjogNDAsXG5cdFwiLi93aW5kLnN2Z1wiOiA0MVxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDI0OyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImViYjRjMDMxOWYzNjI5NWRlZWU2XCIpIl0sIm5hbWVzIjpbImRlZmF1bHRfZm9yZWNhc3QiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZmV0Y2hfZGVmYXVsdF92YWx1ZSIsInZhbHVlIiwiaW1wb3J0QWxsIiwiciIsImtleXMiLCJtYXAiLCJpbWFnZXMiLCJyZXF1aXJlIiwiY29udGV4dCIsIkNsb3NlSW5wdXQiLCJjbG9zZV9pbnB1dF9idXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJhZGRfY2l0eSIsImhpZGRlbiIsIkFkZENpdHkiLCJhZGRfY2l0eV9idXR0b24iLCJDbG9zZUNvbnRhaW5lciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmUiLCJJbnB1dEZpZWxkIiwibm9kZSIsImNoaWxkIiwiaW5wdXRfZmllbGQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJ3ZWF0aGVyIiwiR2V0SW5mbyIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImFsbF9pbmZvIiwiZmV0Y2giLCJjdXJyZW50IiwiZm9yZWNhc3QiLCJsb2NhdGlvbiIsImpzb24iLCJmb3JlY2FzdGRheSIsImRheV9hcnJheSIsImkiLCJsZW5ndGgiLCJkYXRlIiwiRGF0ZSIsImRheSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsInB1c2giLCJjaXR5IiwibmFtZSIsIndlYXRoZXJfaWNvbiIsImNvbmRpdGlvbiIsImljb24iLCJoUGEiLCJwcmVzc3VyZV9tYiIsImh1bWlkaXR5Iiwid2luZCIsIk1hdGgiLCJyb3VuZCIsIndpbmRfa3BoIiwidGVtcF9DIiwidGVtcF9jIiwiZGl2X2lucHV0IiwiZGl2X2NvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJhZnRlciIsImlubmVySFRNTCIsImF2Z3RlbXBfYyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=