
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
        // add_city.hidden = !add_city.hidden;

        // if (add_city.hidden) {
        //
        // }else {
        //     add_city.hidden = true
        // }

    })
}

/* function closing main window with weather forecast */
function CloseContainer (value, whole_page) {
    document.getElementById('close_container').addEventListener('click', function () {
        this.parentElement.remove();
    })
}

/* function for looking for input city/value and showing.
* clone weather container  */

function InputField() {

    document.getElementById('search_button').addEventListener
    ('click', (ev) => {
        const input_field = document.getElementById('search').value
        console.log(input_field)
        ev.preventDefault()
        const weather = document.getElementById('weather')

        // zmienić cloneNode
        const clone = weather.cloneNode(true)
        GetInfo(input_field, clone)
        CloseContainer(false, clone)
        const close_input_button  = document.getElementById("add_city")
        close_input_button.parentNode.insertBefore(clone, close_input_button.nextSibling)
        // weather.parentNode.insertBefore(clone, weather)

        // CloseContainer(value, whole_page)
        console.log("city")
        console.log(clone)

    }
)}

/* main function, fetch to weather api  */

async function GetInfo(fetch_default_value, default_forecast) {
    try {
        const all_info = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=df18fe1b848e46d88bb174944232701&q=${fetch_default_value}&days=6`)
        const {current, forecast, location} = await all_info.json()
        const {forecastday} = forecast
        console.log(current)
        console.log(forecastday.length)
        console.log(location)


        const city = default_forecast.getElementsByClassName('city__name')[0].innerText =
            location.name
        const weather_icon = default_forecast.getElementsByClassName('weather__icon')[0].src =
            `${current.condition.icon}`
        const hPa = default_forecast.getElementsByClassName('pressure__value')[0].innerText =
            `${current.pressure_mb} hPa`
        const humidity = default_forecast.getElementsByClassName('humidity__value')[0].innerText =
            `${current.humidity} %`
        const wind = default_forecast.getElementsByClassName('wind-speed__value')[0].innerText =
            `${Math.round(current.wind_kph * 1000 / 3600)} m/s`
        const temp_C = default_forecast.getElementsByClassName('temperature__value')[0].innerText = current.temp_c


        const forecastDayFunction = () => {
            const ul = document.getElementById('weather__forecast')

            for (let i = 1; i < forecastday.length; i++) {
                const li = document.createElement('li')

                ul.append(li)

                let date = new Date(forecastday[i].date);
                let day = date.toLocaleString('en-us', {weekday: 'long'});

                li.innerHTML = `    
                    <span className="day">${day}</span>
                    <img src="assets/icons/clear-day.svg"/>
                    <span className="temperature"><span className="temperature__value">
                        ${forecastday[i].day.avgtemp_c}</span>&deg;C</span>`
            }
        }
        forecastDayFunction()
        CloseContainer(value, whole_page)

    } catch (err) {
        console.log(err)
    }
}
const whole_page = document


GetInfo(fetch_default_value, default_forecast)

AddCity()
CloseInput()
InputField()
