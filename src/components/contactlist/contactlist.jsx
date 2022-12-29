import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/contactitem/contactitem';

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

ContactList.prototype = {
  contacts: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
