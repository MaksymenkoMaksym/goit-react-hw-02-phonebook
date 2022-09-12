import React, { Component } from 'react';
import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import ContactsList from './ContactsList/ContactsList';
import Section from './Section/Section';
import InputSearch from './InputSearch/InputSearch';

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

  saveContactToBook = user => {
    const { contacts } = this.state;

    if (contacts.some(contact => contact.name === user.name)) {
      return alert('BOOM');
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, user],
    }));
  };

  findByName = value => {
    const name = value.trim().toLocaleLowerCase();
    if (!name) {
      this.setState({ filter: name });
      return;
    }
    const { contacts } = this.state;
    const res = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(name)
    );
    console.log(res);
    this.setState({ filter: res });
  };

  onClickDelete = event => {
    const index = [...event.parentNode.parentNode.children].indexOf(
      event.parentNode
    );
    this.setState(prevState => {
      prevState.contacts.splice(index, 1);

      return {
        contacts: [...prevState.contacts],
      };
    });
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="PhoneBook">
          <PhoneBookForm onInputContact={this.saveContactToBook} />
        </Section>
        <Section title="Contacts">
          <InputSearch
            nameSearch="Find contacts by name"
            onSearchName={this.findByName}
          />
          <ContactsList
            onClickDelete={this.onClickDelete}
            contacts={
              this.state.filter === '' ? this.state.contacts : this.state.filter
            }
          />
        </Section>
      </div>
    );
  }
}
