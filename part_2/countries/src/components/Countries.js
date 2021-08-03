import React, { useEffect } from "react"
import axios from "axios"

import Weather from "./Weather"

const Countries = ({ countries, newSearch, setNewSearch}) => {
    const handleClick = (event) => {
        setNewSearch(event.target.name)
    }

    let countriesToDisplay = countries.filter((country) => {
        if (newSearch === "") {
            return country;
          } else if (country.name.toLowerCase().includes(newSearch.toLowerCase())) {
            return country;
          }});

    const displayFunc = () => {
        if (countriesToDisplay.length > 10) {
            return "Too many matches, specify another filter"
        } else if (countriesToDisplay.length > 1) {
            return countriesToDisplay.map(country => (
                <p key={country.name}>
                    {country.name} <button onClick={handleClick} name={country.name}>show</button>
                </p>
            ))
        } else if (countriesToDisplay.length === 1) {
            return countriesToDisplay.map(country => (
                <div key={country.name}>
                    <h1>{country.name}</h1>
                    <p>Capital: {country.capital}</p>
                    <p>Population: {country.population}</p>
                    <h2>Languages</h2>
                    <ul>
                        {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
                    </ul>
                    <img src={country.flag} alt={country.name + " flag"} width="20%"/>
                    <Weather country={country}/>
                </div>
            ))
        } else {
            return 'no matches'
        }
    }

    return (
        <div>
            {
                displayFunc()
            }
        </div>
    )
}

export default Countries
