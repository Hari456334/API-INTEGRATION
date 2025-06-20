const apiKey = "28bf6d498cb06e454a82c0fd9661dee8"; // Replace with your real API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const weatherHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
          <p><strong>Weather:</strong> ${data.weather[0].description}</p>
          <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        `;
        document.getElementById("weatherResult").innerHTML = weatherHTML;
      } else {
        document.getElementById("weatherResult").innerHTML = `<p>City not found!</p>`;
      }
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
      document.getElementById("weatherResult").innerHTML = `<p>Error retrieving data.</p>`;
    });
}
