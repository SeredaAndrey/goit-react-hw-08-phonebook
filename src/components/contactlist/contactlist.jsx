import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul key="contactList">
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li key={id}>
      <h3>{name}:</h3>
      <p>{number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete contact
      </button>
    </li>
  );
};
