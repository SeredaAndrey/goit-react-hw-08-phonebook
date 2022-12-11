import React, { Component } from 'react';
import shortid from 'shortid';

import ContactForm from './contactform/contactform';
import Filter from './filter/filter';
import ContactList from './contactlist/contactlist';

class App extends Component {
  static defaultProps = {
    initialContacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  state = {
    contacts: this.props.initialContacts,
    name: '',
    number: '',
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = { id: shortid.generate(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  // checkInputName = name => {
  //   this.state.contacts.forEach(contact => {
  //     if (contact.name === name) {
  //       alert(`${name} is alredy in contacts`);
  //       return true;
  //     } else {
  //       return addContact();
  //     }
  //   });
  // };

  onDeleteContact = id => {
    this.setState(prevState => ({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    }));
  };
  onFilterList = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  getVisbleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisbleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChangeFilter={this.onFilterList} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default App;
