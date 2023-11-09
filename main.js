//Using https://openweathermap.org/

const apiKey = '57f46111b1ee632f2447a488a3b289a1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.getElementById('weatherIcon');

async function getWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humid').innerHTML = data.main.humidity + "%";
    document.querySelector('.speed').innerHTML = data.wind.speed + " km/h";
    if (data.weather[0].main == 'Rain'){
        weatherIcon.className = 'fa-solid fa-cloud-rain';
        weatherIcon.style.color = 'rgb(0, 0, 76)';
    } else if (data.weather[0].main == 'Clear'){
        weatherIcon.className = 'fa-solid fa-sun';
        weatherIcon.style.color = 'rgb(255, 217, 0)';
    } else if (data.weather[0].main == 'Clouds'){
        weatherIcon.className = 'fa-solid fa-cloud';
        weatherIcon.style.color = '#aaa';
    } else if (data.weather[0].main == 'Drizzle'){
        weatherIcon.className = 'fa-solid fa-cloud-sun-rain';
        weatherIcon.style.color = 'gray';
    } else if (data.weather[0].main == 'Mist'){
        weatherIcon.className = 'fa-solid fa-cloud-sun';
        weatherIcon.style.color = '#aaa';
    } else if (data.weather[0].main == 'Snow'){
        weatherIcon.className = 'fa-solid fa-snowflake';
        weatherIcon.style.color = 'snow';
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchBox.value);
})

searchBox.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        getWeather(searchBox.value);
    }
})

