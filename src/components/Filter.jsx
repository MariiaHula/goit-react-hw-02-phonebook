import React from 'react';

const Filter = ({ filteredContacts }) => {
  return (
    <input
      type="text"
      name="filter"
      onChange={filteredContacts}
      placeholder="Find contact by name"
    />
  );
};

export default Filter;
