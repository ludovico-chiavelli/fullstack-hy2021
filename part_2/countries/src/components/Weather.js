import React, { useState, useEffect } from "react"
import axios from "axios"

const Weather = ({ country }) => {
    const [weather, setWeather] = useState([])
    
    useEffect(() => {
        axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${encodeURIComponent(country.capital)}`).then((response) => {
            setWeather(response.data)
        });
    })
    console.log("This is weather")
    console.log(weather)
    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {weather.temperature}</p>
            {/* <img src={}/> */}
        </div>
    )
}

export default Weather