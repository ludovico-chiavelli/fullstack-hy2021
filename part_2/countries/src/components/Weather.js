import React, { useState, useEffect } from "react"
import axios from "axios"

const Weather = ({ country }) => {
    const [weather, setWeather] = useState({})
    const [dataLoaded, setDataLoaded] = useState(false)
    
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
        .then((response) => {
            console.log(response.data)
            setWeather(response.data)
            setDataLoaded(true)
            // console.log("Data has been fetched")
        }).catch((error) => {
            console.log(error);
        });
    }, [])
    // console.log("This is the weather")
    // console.log(weather)

    return (
        <div>
            <h3>Weather in {country.capital}</h3>
            {
                dataLoaded 
                ? 
                    <div>
                        <p><b>Temperature:</b> {weather.main.temp} °C</p>
                        <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>
                        <p><b>Wind:</b> {weather.wind.speed} ms <b>Direction:</b>{weather.wind.deg} degrees</p>
                    </div>
                : <p>awaiting data</p>
            }
        </div>
    )
}

export default Weather