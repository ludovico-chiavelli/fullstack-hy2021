import React from "react";

const Persons = ({ persons, newSearch }) => {
  return (
    <div>
      {persons
        .filter((person) => {
          if (newSearch === "") {
            return person;
          } else if (
            person.name.toLowerCase().includes(newSearch.toLowerCase())
          ) {
            return person;
          }
        })
        .map((person) => (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        ))}
    </div>
  );
};

export default Persons;
