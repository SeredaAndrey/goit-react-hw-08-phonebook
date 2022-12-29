import shortid from 'shortid';

import ContactForm from './contactform/contactform';
import Filter from './filter/filter';
import ContactList from './contactlist/contactlist';
import { AppContainer, AppTitle, ContactTitle } from './app.styled';
import { useState, useEffect } from 'react';

const LS_KEY = 'localstorage_key_phonebook';

const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem(LS_KEY));
  return data;
};

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return getLocalStorage() ? getLocalStorage() : [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const getVisbleContacts = () => {
    if (contacts.length !== 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const addContact = (name, number) => {
    let flag = false;
    if (contacts) {
      for (const contact of contacts) {
        if (contact.name === name) {
          alert(`${name} is alredy in contacts`);
          flag = true;
          break;
        }
      }
    }
    if (!flag) {
      setContacts([...contacts, { id: shortid.generate(), name, number }]);
    }
  };

  const onFilterList = event => {
    setFilter(event.currentTarget.value);
  };

  const onDeleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <AppContainer>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm onSubmit={addContact} />
      <ContactTitle>Contacts</ContactTitle>
      <Filter filter={filter} handleChangeFilter={onFilterList} />
      {contacts.length !== 0 && (
        <ContactList
          contacts={getVisbleContacts()}
          onDeleteContact={onDeleteContact}
        />
      )}
    </AppContainer>
  );
}
