import React from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, fetchContacts, putContact } from 'redux/operations';
import { getFilterContent, getContacts } from 'redux/selectors';

import ContactItem from 'components/contactitem/contactitem';

import { ContactListContainer, ContactListMesage } from './contactlist.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilterContent);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const onPutContact = id => {
    dispatch(putContact(id));
  };

  const getVisbleContacts = () => {
    if (items.length !== 0) {
      return items.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  return (
    <>
      {isLoading && <ContactListMesage>Loading contacts...</ContactListMesage>}
      {error && <ContactListMesage>{error}</ContactListMesage>}
      {items.length !== 0 && (
        <ContactListContainer key="contactList">
          {getVisbleContacts().map(({ id, name, number, avatar }) => {
            return (
              <ContactItem
                id={id}
                name={name}
                number={number}
                avatar={avatar}
                onDeleteContact={onDeleteContact}
                onPutContact={onPutContact}
              />
            );
          })}
        </ContactListContainer>
      )}
    </>
  );
};

export default ContactList;
