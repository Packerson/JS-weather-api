
const default_forecast = document.getElementById('app')
const fetch_default_value = 'auto:ip'
let value = true


/* function closing input fields */

function CloseInput() {
    const close_input_button = document.getElementById('close_input')
    close_input_button.addEventListener('click', (ev) => {
        add_city.hidden = true
    })
}

/* function showing input fields */

async function AddCity() {
    const add_city_button = document.getElementById("add-city")
    add_city_button.addEventListener('click', () => {
        const add_city = document.getElementById('add_city')
        add_city.hidden = false
    })
}

/* function closing main window with weather forecast */
function CloseContainer (value) {
    document.getElementById('close_container').addEventListener('click', function () {
        this.parentElement.remove();
    })
}

/* function for looking for input city/value and showing.
* clone weather container  */

function InputField(node, child) {

    document.getElementById('search_button').addEventListener
    ('click', (ev) => {
        const input_field = document.getElementById('search').value
        console.log(input_field)
        ev.preventDefault()
        const weather = document.getElementById('weather')

        // zmienić cloneNode
        // const clone = weather.cloneNode(true)
        GetInfo(input_field)
        CloseContainer(false)
        const close_input_button  = document.getElementById("add_city")
        close_input_button.parentNode.insertBefore(close_input_button.nextSibling, child)
        // weather.parentNode.insertBefore(clone, weather)

        // CloseContainer(value, whole_page)
        console.log("city")


    }
)}



/* main function, fetch to weather api  */

async function GetInfo(fetch_default_value) {
    try {
        const all_info = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=df18fe1b848e46d88bb174944232701&q=${fetch_default_value}&days=6`)
        const {current, forecast, location} = await all_info.json()
        const {forecastday} = forecast

        console.log(current)
        console.log(forecastday)
        console.log(location)


        const day_array = []
        for (let i = 1; i < forecastday.length; i++) {

            let date = new Date(forecastday[i].date);
            let day = date.toLocaleString('en-us', {weekday: 'long'});
            day_array.push(day)
        }

        const city = location.name
        const weather_icon = current.condition.icon
        const hPa = `${current.pressure_mb} hPa`
        const humidity = `${current.humidity} %`
        const wind = `${Math.round(current.wind_kph * 1000 / 3600)} m/s`
        const temp_C = current.temp_c
        console.log(forecastday[0].day.condition.text)

        const div_input = document.getElementById('add_city')

        const div_container = document.createElement('div')
        div_input.after(div_container)
        div_container.innerHTML =
            `<div id= 'weather' class='module module__weather' >
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
        </div>`


        CloseContainer(value)

    } catch (err) {
        console.log(err)
    }
}



GetInfo(fetch_default_value)

AddCity()
CloseInput()
InputField()
