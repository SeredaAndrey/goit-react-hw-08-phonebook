import ContactForm from './contactform/contactform';
import Filter from './filter/filter';
import ContactList from './contactlist/contactlist';
import { AppContainer, AppTitle, ContactTitle } from './app.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilterContent } from 'redux/selectors';
import { deleteContact, addContact } from 'redux/contactsSlice';

export default function App() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContent);
  const contacts = useSelector(getContacts);

  const getVisbleContacts = () => {
    if (contacts.length !== 0) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  const addHandleContact = (name, number) => {
    let flag = false;
    if (contacts && contacts !== []) {
      for (const contact of contacts) {
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
    dispatch(deleteContact({ id }));
  };

  return (
    <AppContainer>
      <AppTitle>Phonebook</AppTitle>
      <ContactForm onSubmit={addHandleContact} />
      <ContactTitle>Contacts</ContactTitle>
      <Filter />
      {contacts.length !== 0 && (
        <ContactList
          contacts={getVisbleContacts()}
          onDeleteContact={onDeleteContact}
        />
      )}
    </AppContainer>
  );
}
