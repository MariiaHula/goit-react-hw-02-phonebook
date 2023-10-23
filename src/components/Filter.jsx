import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filteredContacts }) => {
  return (
    <input
      name="filter"
      onChange={filteredContacts}
      placeholder="Find contact by name"
    />
  );
};

Filter.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
};

export default Filter;
