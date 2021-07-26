import React from "react";

const Filter = ({ searchTerm, handleSearchChange }) => {
  return (
    <div>
      Find countries{" "}
      <input value={searchTerm} onChange={handleSearchChange} />
    </div>
  );
};

export default Filter;