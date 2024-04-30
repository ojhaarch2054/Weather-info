import React from 'react';

const WeatherCard = ({ weatherData }) => {
    return (
      <div className="weather">
        {/*  In this part it will display city name and weather description */}
        <div>
          <h3>{weatherData.name}</h3>
          <p>{weatherData.weather[0].main}</p>
          <p>{weatherData.weather[0].description}</p>
        </div>
        {/* this section is for displaying icon*/}
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].main}
          />
        </div>
        {/* Display temperature, feels like temperature, humidity, and wind speed */}
        <div>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Feels like: {weatherData.main.feels_like} °C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind speed: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    );
  };

  export default WeatherCard;
  