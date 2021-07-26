import React, {useState, useEffect} from "react"
import axios from "axios"

import Countries from "./components/Countries"
import Filter from "./components/Filter"

const App = () => {
  const [countries, setCountries] = useState([]);
  const [newSearch, setNewSearch] = useState("");

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response.data)
      setCountries(response.data)
      console.log(countries)
    });
  }, []);

  return (
    <div>
      <Filter searchTerm={newSearch} handleSearchChange={handleSearchChange}/>
      <Countries countries={countries} newSearch={newSearch} setNewSearch={setNewSearch}/>
    </div>
  )
}

export default App;
