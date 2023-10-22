import React from 'react';

const ContactList = ({ list, deleteContact }) => {
  return (
    <div>
      <ul>
        {list.map(contact => {
          return (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button onClick={() => deleteContact(contact.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
