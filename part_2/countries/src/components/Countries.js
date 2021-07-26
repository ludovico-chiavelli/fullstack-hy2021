import React from "react"

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
    return (
        <div>
            {
                //https://github.com/josalmi/hy-fullstack/blob/master/week2/e12-13/src/App.js
                countriesToDisplay.length > 10
                ? "Too many matches, specify another filter"
                : countriesToDisplay.length > 1
                ? countriesToDisplay.map(country => (
                    <p key={country.name}>
                        {country.name} <button onClick={handleClick} name={country.name}>show</button>
                    </p>
                ))
                : countriesToDisplay.length === 1
                ? countriesToDisplay.map(country => (
                    <div>
                        <h1>{country.name}</h1>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                        <h2>Languages</h2>
                        <ul>
                            {country.languages.map(language => <li>{language.name}</li>)}
                        </ul>
                        <img src={country.flag} alt={country.name + " flag"} width="20%"/>
                    </div>
                ))
                : 'no matches'
            }
        </div>
    )
}

export default Countries
