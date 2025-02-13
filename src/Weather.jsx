import React from "react";
import { useState } from "react";
import axios from "axios";

function Weather() {
      const [ city, setCity ] = useState('');
      const [ weather, setWeather ] = useState(null)
      const API_KEY = '726aceb2dc1e3578f83341eeae7fa27b'



      const fetchWeather = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
          setWeather(response.data);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    

      return (
        <div className="weather-container">
          <h1>Weather App</h1>
          <input type='text' placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
          <button onClick={fetchWeather}>Get Weather</button>

          {weather && (
            <div className="weather-info">
              <h2>{weather.name}</h2>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Condition: {weather.weather[0].description}</p>
            </div>
          )}
        </div>
      );
 }

export default Weather;