import React from "react";
import personService from "../services/persons"

const PersonForm = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  handleNameChange,
  handleNumberChange,
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    let names = [];
    for (let i = 0; i < persons.length; i++) {
      names.push(persons[i].name);
    }

    if (names.includes(newName)) {
      if(window.confirm(`${newName} is already in the phonebook. Would you like to replace the old number with the new one?`)){
        personService.getAll()
        .then(response => {
          const match = response.data.find(person => person.name === newName)
          return match
        })
        .then(person => {
          const updatedPersonObject = {
            name: person.name,
            number: newNumber,
          };
          personService.update(person.id, updatedPersonObject)
            .then(response => {
              console.log(response)
              personService.getAll().then((response) => {
                setPersons(response.data);
              });
          })
        })
      }
      setNewName("");
      setNewNumber("");
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      personService
      .create(personObject)
      .then(response => {
          console.log(response)
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
        })
    }

  };
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          phone number:
          <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
