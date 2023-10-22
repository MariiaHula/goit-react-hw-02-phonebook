import React, { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  handleChangeInput = e => {
    e.target.name === 'name'
      ? this.setState({ name: e.target.value })
      : this.setState({ number: e.target.value });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleContactFilter = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.includes(filter)
    );
  };

  handleAddContact = () => {
    if (this.state.name.trim() === '') {
      return;
    }

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  render() {
    const filter = this.handleContactFilter();

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              required
              onChange={this.handleChangeInput}
            />
          </label>
          <label htmlFor="number">
            Number
            <input
              type="tel"
              name="number"
              required
              onChange={this.handleChangeInput}
            />
          </label>
          <button onClick={this.handleAddContact}>Add Contact</button>
        </div>
        <div>
          <ul>
            <input
              type="text"
              name="filter"
              onChange={this.handleChangeFilter}
            />
            {filter.map(item => {
              return (
                <li key={item.id}>
                  {item.name} : {item.number}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
