import React from "react"
import DeleteButton from "../components/DeleteButton"

const Persons = ({ 
  persons, 
  newSearch, 
  handlePersonDeletion, 
  setPersons,
}) => {
  return (
    <div>
      {persons
        .filter((person) => {
          if (newSearch === "") {
            return person
          } else if (person.name.toLowerCase().includes(newSearch.toLowerCase())) {
            return person
          } else {
            return false
          }
        })
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.phoneNumber} 
            <DeleteButton 
              handlePersonDeletion={handlePersonDeletion} 
              id={person.id}
              setPersons={setPersons}
            />
          </p>
        ))}
    </div>
  )
}

export default Persons
