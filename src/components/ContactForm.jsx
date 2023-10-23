import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Button } from 'styles/Styles';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
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
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const addContactOnSubmit = this.handleAddNewContactOnSubmit;

    return (
      <form onSubmit={addContactOnSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={this.handleChangeInput}
          />
        </Label>
        <Label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.handleChangeInput}
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </form>
    );
  }
}

export default ContactForm;
