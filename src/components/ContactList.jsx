import React from 'react';
import PropTypes from 'prop-types';
import { Item, Button } from 'styles/Styles';

const ContactList = ({ list, onDeleteContact }) => {
  return (
    <ul>
      {list.map(contact => {
        return (
          <Item key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
          </Item>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  list: PropTypes.node.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactList;
