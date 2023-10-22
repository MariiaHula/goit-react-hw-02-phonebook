import React from 'react';

const Filter = ({ filteredContacts }) => {
  return <input type="text" name="filter" onChange={filteredContacts} />;
};

export default Filter;
