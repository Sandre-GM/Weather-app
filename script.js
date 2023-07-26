let api_key = 'Noshowthisapikey:('
let convKelvin = 273.15
let baseUrl = 'https://api.openweathermap.org/data/2.5/weather'



document.getElementById('botonBusqueda').addEventListener('click', () => {
    const city = document.getElementById('ciudadEntrada').value
    if (city) {
        fetchData(city)
    }
})

function fetchData(city) {
    fetch(`${baseUrl}?q=${city}&appid=${api_key}`)
        .then(data => data.json())
        .then(data => showWeather(data))

}

function showWeather(data) {
    console.log(data)
    const divData = document.getElementById('datosClima')
    divData.innerHTML = ''

    const cityCountry = data.sys.country
    const cityName = data.name
    const cityTemp = data.main.temp
    const cityDesc = data.weather[0].description
    const cityHumidity = data.main.humidity
    const icon = data.weather[0].icon

    const cityTitle = document.createElement('h2')
    cityTitle.textContent = `${cityName}, ${cityCountry}`

    const tempInfo = document.createElement('p')
    tempInfo.textContent = `La temperatura es: ${Math.floor(cityTemp - convKelvin)}°C`

    const showIcon = document.createElement('img')
    showIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    const descriptionInfo = document.createElement('p')
    descriptionInfo.textContent = `La descripción meteorológica es: ${cityDesc}`

    const humidityInfo = document.createElement('p')
    humidityInfo.textContent = `La humedad es de: ${cityHumidity}%`

    divData.appendChild(cityTitle)
    divData.appendChild(tempInfo)
    divData.appendChild(showIcon)
    divData.appendChild(descriptionInfo)
    divData.appendChild(humidityInfo)

}
