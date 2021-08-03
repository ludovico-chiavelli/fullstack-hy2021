import React, { useState, useEffect } from "react"
import axios from "axios"

const Weather = ({ country }) => {
    const [weather, setWeather] = useState([])
    
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
        .then((response) => {
            setWeather(response.data)
            console.log("This is the weather")
            console.log(weather)
            console.log(weather.main.temp)
        }).catch((error) => {
            console.log(error);
        });
    }, [])
    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            {/* <p><b>Temperature:</b> {weather.main.temp}</p>
            <img src={`http://openweathermap.org/img/w/${weather.weather.icon}.png`} width="30%"/>
            <p><b>Wind:</b> {weather.wind.speed} ms <b>Direction:</b>{weather.wind.deg} degrees</p> */}
        </div>
    )
}

export default Weather