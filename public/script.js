document.addEventListener("DOMContentLoaded", function () {
  const getWeatherButton = document.getElementById("getWeatherButton");
  const locationInput = document.getElementById("locationInput");
  const weatherData = document.getElementById("weatherData");

  getWeatherButton.addEventListener("click", function () {
    const location = locationInput.value;

    // Make a GET request to your backend API with the full URL
    fetch(`http://localhost:8000/weather/current/${location}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Display weather data on the page
        const formattedWeather = `
            <p><strong>Location:</strong> ${data.location}</p>
            <p><strong>Temperature:</strong> ${data.temperature} °C</p>
            <p><strong>Description:</strong> ${data.description}</p>
            <p><strong>Feels Like:</strong> ${data.feelsLike} °C</p>
            <p><strong>Humidity:</strong> ${data.humidity} %</p>
            <p><strong>Pressure:</strong> ${data.pressure} hPa</p>
            <p><strong>Visibility:</strong> ${data.visibility} meters</p>
            <p><strong>Wind Speed:</strong> ${data.windSpeed} m/s</p>
            <p><strong>Wind Direction:</strong> ${
              data.windDirection
            } degrees</p>
            <p><strong>Sunrise:</strong> ${new Date(data.sunrise * 1000)}</p>
            <p><strong>Sunset:</strong> ${new Date(data.sunset * 1000)}</p>
          `;
        weatherData.innerHTML = formattedWeather;
      })
      .catch((error) => {
        console.error(error);
        weatherData.innerHTML = "Something went wrong. Please try again later.";
      });
  });
});
