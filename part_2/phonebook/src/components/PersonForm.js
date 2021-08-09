import React from "react";
import axios from "axios"

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

    if (Object.values(names).includes(newName)) {
      alert(`${newName} is already in the phonebook`);
      setNewName("");
      setNewNumber("");
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      axios
      .post("http://localhost:3001/persons", personObject)
      .then(response => {
          console.log(response)
          setPersons(persons.concat(personObject));
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
          phone number:{" "}
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
