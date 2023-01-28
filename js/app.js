function CloseInput() {
    const close_input_button = document.getElementById('close_input')
    close_input_button.addEventListener('click', (ev) => {
        add_city.hidden = true
    })
}

async function InputField() {


    document.getElementById('search_button').addEventListener
    ('click', (ev) => {
        const input_field = document.getElementById('search').value
        console.log(input_field)
        ev.preventDefault()
        const app = document.getElementById('app')
        const clone = app.cloneNode(true)
        GetInfo(input_field)

    }
)}

async function AddCity() {
    const add_city_button = document.getElementById("add-city")
    add_city_button.addEventListener('click', () => {
        const add_city = document.getElementById('add_city')
        add_city.hidden = false
        console.log(add_city)
    })
}
const fetch_default_value = 'auto:ip'
async function GetInfo(fetch_default_value) {
    try {
        const all_info = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=df18fe1b848e46d88bb174944232701&q=${fetch_default_value}&days=6`)
        const {current, forecast, location} = await all_info.json()
        const {forecastday} = forecast
        console.log(current)
        console.log(forecastday.length)
        console.log(location)

        const city = document.getElementsByClassName('city__name')[0].innerText =
            location.name
        const weather_icon = document.getElementsByClassName('weather__icon')[0].src =
            `${current.condition.icon}`
        const hPa = document.getElementsByClassName('pressure__value')[0].innerText =
            `${current.pressure_mb} hPa`
        const humidity = document.getElementsByClassName('humidity__value')[0].innerText =
            `${current.humidity} %`
        const wind = document.getElementsByClassName('wind-speed__value')[0].innerText =
            `${Math.round(current.wind_kph * 1000 / 3600)} m/s`
        const temp_C = document.getElementsByClassName('temperature__value')[0].innerText = current.temp_c

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

    } catch (err) {
        console.log(err)
    }
}

GetInfo(fetch_default_value)
AddCity()
CloseInput()
InputField()
