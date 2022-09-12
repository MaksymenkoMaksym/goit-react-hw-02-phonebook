import React, { Component } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactsList from './ContactsList/ContactsList';
// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  saveContactToBook = contact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>PhoneBook</h1>
        <PhoneBookForm onInputContact={this.saveContactToBook} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
