import React from 'react';
import {
  ContactItemContainer,
  ContactName,
  ContactTelephone,
  DelButon,
} from './contactlist.styled';

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
    <ContactItemContainer key={id}>
      <ContactName>{name}:</ContactName>
      <ContactTelephone>{number}</ContactTelephone>
      <DelButon type="button" onClick={() => onDeleteContact(id)}>
        Delete contact
      </DelButon>
    </ContactItemContainer>
  );
};
