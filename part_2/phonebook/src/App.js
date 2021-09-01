import React, { useEffect, useState } from "react";
import personService from "./services/persons"

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  const handlePersonDeletion = (id) => {
      if (window.confirm(`Do you really want to delete ${id}`)) {
        personService.remove(id).then(res => {
          console.log(res)
          personService.getAll().then((response) => {
            console.log(response.data);
            setPersons(response.data);
        })
        });
      }
    
  };

  useEffect(() => {
    personService.getAll().then((response) => {
      console.log(response.data);
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchTerm={newSearch} handleSearchChange={handleSearchChange} />
      <h2>Add a new person</h2>
      <PersonForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons 
        persons={persons} 
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        newSearch={newSearch} 
        handlePersonDeletion={handlePersonDeletion} 

      />
    </div>
  );
};

export default App;
