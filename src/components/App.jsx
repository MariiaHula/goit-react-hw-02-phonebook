import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Notification from './Notification';
import { Wrapper } from '../styles/Styles';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleAddContact = contactData => {
    const { contacts } = this.state;
    const nameExists = contacts.find(
      contact =>
        contact.name.toLocaleLowerCase().trim() ===
        contactData.name.toLocaleLowerCase().trim()
    );

    if (nameExists) {
      alert(`${contactData.name} is already in your contacts.`);
    } else {
      const newContact = { id: nanoid(), ...contactData };
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  handleContactFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  handleDeleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;
    const handleContactFilter = this.handleContactFilter();
    return (
      <>
        <Wrapper>
          <h1>Phonebook</h1>
          <ContactForm addContact={this.handleAddContact} />
          <h2>Contacts List</h2>
          <Filter filteredContacts={this.handleChangeFilter} />
          {contacts.length ? (
            <ContactList
              list={handleContactFilter}
              onDeleteContact={this.handleDeleteContact}
            />
          ) : (
            <Notification message="Your contact list is empty" />
          )}
        </Wrapper>
      </>
    );
  }
}
