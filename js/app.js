

async function getInfo () {
    try {
        const all_info = await fetch('http://api.weatherapi.com/v1/forecast.json?key=df18fe1b848e46d88bb174944232701&q=auto:ip&days=5')
        const {current, forecast, location} = await all_info.json()
        console.log(current)
        console.log(forecast)
        console.log(location)

        const city = document.getElementsByClassName('city__name')[0].innerText =
            location.name
        const weather_icon = document.getElementsByClassName('weather__icon')[0].src =
            `${current.condition.icon}`
        const hPa = document.getElementsByClassName('pressure__value')[0].innerText =
            current.pressure_mb
        const humidity = document.getElementsByClassName('humidity__value')[0].innerText =
            `${current.humidity}%`
        const wind = document.getElementsByClassName('wind-speed__value')[0].innerText =
            `${Math.round(current.wind_kph*1000/3600)} m/s`
        const temp_C = document.getElementsByClassName('temperature__value')[0].innerText = current.temp_c

        console.log(weather_icon)
        console.log(city)
        console.log(hPa)
        console.log(humidity)
        console.log(wind)
        console.log(temp_C)
}catch (err){
        console.log(err)
    }
}

getInfo()