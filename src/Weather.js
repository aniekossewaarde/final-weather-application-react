import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import './index.css';


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
   
    function handleResponse(response) {
        setWeatherData({
          ready: true,
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          date: new Date(response.data.dt * 1000),
          description: response.data.weather[0].description,
          wind: response.data.wind.speed,
          city: response.data.name,
          iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        });
      }

      function handleSubmit(event) {
        event.preventDefault();
        search();
      }

      function handleCityChange(event) {
        setCity(event.target.value);
      }

  function search() {
    let apiKey = "ab69138d433c5c85edafefc09e466c07";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="search-button w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
            </div>
            );
        } else {
            search();
            return "Loading...";
          }
        }