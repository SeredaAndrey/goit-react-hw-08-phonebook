import React from 'react';
import {
  ContactItemContainer,
  ContactName,
  ContactTelephone,
  DelButon,
} from './contactitem.styled';

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

export default ContactItem;
