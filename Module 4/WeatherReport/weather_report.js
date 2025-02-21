function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
        })

        // Invalid city name
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerHTML = `<p>Failed to fetch weather by city. Please try again.</p>`;
        });
}

document.getElementById('weatherForm').addEventListener('submit',showWeatherDetails );

// Practice Task (by lat and long)
function showWeatherDetails2(event) {
    event.preventDefault();
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('long').value;
    const apiKey = 'c4f86ece00bc8aa272652ac9065af12d'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
        const weatherInfo2 = document.getElementById('weatherInfo2');
        weatherInfo2.innerHTML = `<h2>Weather at ${data.coord.lat}, ${data.coord.lon}</h2>
                                <p>Temperature: ${data.main.temp} &#8451;</p>
                                <p>Weather: ${data.weather[0].description}</p>`;
        })

    // Invalid lat/long
    .catch(error => {
        console.error('Error fetching weather:', error);
        const weatherInfo2 = document.getElementById('weatherInfo2');
        weatherInfo2.innerHTML = `<p>Failed to fetch weather by latitude and longitude. Please try again.</p>`;
        });
}

document.getElementById('weatherForm2').addEventListener('submit',showWeatherDetails2 );