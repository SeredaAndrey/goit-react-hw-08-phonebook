import React from 'react';
import PropTypes from 'prop-types';

import {
  ContactItemContainer,
  ContactAvatar,
  ContactName,
  ContactTelephone,
  DelButon,
} from './contactitem.styled';

const ContactItem = ({ id, name, number, avatar, onDeleteContact }) => {
  return (
    <ContactItemContainer key={id}>
      <ContactAvatar src={avatar} alt="name" />
      <ContactName>{name}:</ContactName>
      <ContactTelephone>{number}</ContactTelephone>
      <DelButon type="button" onClick={() => onDeleteContact(id)}>
        Delete contact
      </DelButon>
    </ContactItemContainer>
  );
};

export default ContactItem;

ContactItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
