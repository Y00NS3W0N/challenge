const API_KEY = "a1a37f9fbfc9eaeec134886c44f1a5b6"

function onGeoSuccess(position){
    const lat = position.coords.latitude
    const lng = position.coords.longitude 
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#weather span:first-child")
            const weather = document.querySelector("#weather span:last-child")
            city.innerText = ` @ ${data.name}`
            weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}`

        })
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)