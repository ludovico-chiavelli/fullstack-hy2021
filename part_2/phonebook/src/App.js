import React, { useEffect, useState } from "react";
import personService from "./services/persons"

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newSearch, setNewSearch] = useState("");
  const [message, setMessage] = useState(null)
  const [notificationColor, setNotificationColor] = useState({color: 'green'})

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  const handlePersonDeletion = (idNumber) => {
      const personName = persons.find((person) => person.id === idNumber).name
      if (window.confirm(`Do you really want to delete ${personName}?`)) {
        personService.remove(idNumber).then(res => {
          console.log(res)
          personService.getAll().then((response) => {
            console.log(response.data);
            setPersons(response.data);
          });
        })
        .catch(() => {
          setNotificationColor({color: "red"})
          setMessage(`Information of ${personName} has alredy been removed from the server. \n${personName} will now be removed from view.`)
          setNewName("");
          setNewNumber("");
          setTimeout(() => {
            setMessage(null)
            personService.getAll().then((response) => {
              setPersons(response.data);
            });
          }, 5000)
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
      <Notification message={message} color={notificationColor}/>
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
        setMessage={setMessage}
        setNotificationColor={setNotificationColor}
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
