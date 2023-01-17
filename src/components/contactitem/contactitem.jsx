import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ContactItemContainer, ContactName } from './contactitem.styled';

const ContactItem = ({ id, name }) => {
  const location = useLocation();

  return (
    <ContactItemContainer key={id}>
      <NavLink to={`/contacts/filter/${id}`} state={{ from: location }}>
        <ContactName>{name}</ContactName>
      </NavLink>
    </ContactItemContainer>
  );
};

export default ContactItem;

ContactItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
