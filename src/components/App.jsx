import shortid from 'shortid';

import ContactForm from './contactform/contactform';
import Filter from './filter/filter';
import ContactList from './contactlist/contactlist';
import { AppContainer, AppTitle, ContactTitle } from './app.styled';
import { useState, useEffect, useRef } from 'react';

const LS_KEY = 'lokalStorageKey';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const isFirstRender = useRef(true);

  useEffect(() => {
    switch (isFirstRender.current) {
      case true: {
        const loadVariable = JSON.parse(localStorage.getItem(LS_KEY));
        if (loadVariable) {
          setContacts(loadVariable);
          isFirstRender.current = false;
        }

        break;
      }
      case false: {
        if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
        }
        localStorage.setItem(LS_KEY, JSON.stringify(contacts));
        break;
      }
      default:
        break;
    }
  }, [contacts]);

  const getVisbleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addContact = ({ name, number }) => {
    let flag = false;
    for (const contact of contacts) {
      if (contact.name === name) {
        alert(`${name} is alredy in contacts`);
        flag = true;
        break;
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
      {contacts !== '' && (
        <ContactList
          contacts={getVisbleContacts()}
          onDeleteContact={onDeleteContact}
        />
      )}
    </AppContainer>
  );
}
// class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const loadVariable = JSON.parse(localStorage.getItem(LS_KEY));
//     if (loadVariable) {
//       this.setState({ contacts: loadVariable });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       const writeVariable = JSON.stringify(this.state.contacts);
//       localStorage.setItem(LS_KEY, writeVariable);
//     }
//   }

//   addContact = ({ name, number }) => {
// let flag = false;
// for (const contact of this.state.contacts) {
//   if (contact.name === name) {
//     alert(`${name} is alredy in contacts`);
//     flag = true;
//     break;
//   }
// }
// if (!flag) {
//   const contact = { id: shortid.generate(), name, number };
//   this.setState(prevState => ({
//     contacts: [...prevState.contacts, contact],
//   }));
// }
//   };

//   onDeleteContact = id => {
// this.setState(prevState => ({
//   contacts: this.state.contacts.filter(contact => contact.id !== id),
// }));
//   };
//   onFilterList = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };
//   getVisbleContacts = () => {
// const { filter, contacts } = this.state;
// const normalizeFilter = filter.toLowerCase();
// return contacts.filter(contact =>
//   contact.name.toLowerCase().includes(normalizeFilter)
// );
//   };

//   render() {
//     const { filter } = this.state;

//     const visibleContacts = this.getVisbleContacts();

//     return (
// <AppContainer>
//   <AppTitle>Phonebook</AppTitle>
//   <ContactForm onSubmit={this.addContact} />
//   <ContactTitle>Contacts</ContactTitle>
//   <Filter filter={filter} handleChangeFilter={this.onFilterList} />
//   {this.state && (
//     <ContactList
//       contacts={visibleContacts}
//       onDeleteContact={this.onDeleteContact}
//     />
//   )}
// </AppContainer>
//     );
//   }
// }

// export default App;
