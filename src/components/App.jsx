import ContactForm from './contactform/contactform';
import Filter from './filter/filter';
import ContactList from './contactlist/contactlist';
import { AppContainer, AppTitle, ContactTitle } from './app.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterContent } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts, deleteContact, addContact } from 'redux/operations';

export default function App() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContent);
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisbleContacts = () => {
    if (items.length !== 0) {
      return items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const addHandleContact = (name, number) => {
    let flag = false;
    if (items && items !== []) {
      for (const contact of items) {
        if (contact.name === name) {
          alert(`${name} is alredy in contacts`);
          flag = true;
          break;
        }
      }
    }
    if (!flag) {
      dispatch(addContact({ name, number }));
    }
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <AppContainer>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm onSubmit={addHandleContact} />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {items.length !== 0 && (
        <ContactList
          contacts={getVisbleContacts()}
          onDeleteContact={onDeleteContact}
        />
      )}
    </AppContainer>
  );
}
