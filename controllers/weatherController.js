const request = require('request-promise');
require('dotenv').config();

const getCurrentWeather = async (req, res) => {
  try {
    const location = req.params.location;
    if (!location) {
      return res.status(400).json({ error: 'Location parameter is required' });
    }
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
    const response = await request(url);
    const weatherData = JSON.parse(response);
    const formattedData = {
      location: weatherData.name,
      temperature: weatherData.main.temp,
      description: weatherData.weather[0].description,
      feelsLike: weatherData.main.feels_like,
      humidity: weatherData.main.humidity,
      pressure: weatherData.main.pressure,
      visibility: weatherData.visibility,
      windSpeed: weatherData.wind.speed,
      windDirection: weatherData.wind.deg,
      sunrise: weatherData.sys.sunrise,
      sunset: weatherData.sys.sunset,
  };

res.json(formattedData);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports = { getCurrentWeather };
