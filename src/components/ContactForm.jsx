import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddNewContactOnSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (name.trim() === '' || number.trim() === '') {
      return;
    }

    this.props.addContact({ name, number });
    this.setState({ name: '', number: '' });
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleAddNewContactOnSubmit}>
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
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default ContactForm;
