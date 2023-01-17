import React, { Suspense } from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/operations';
import { getFilterContent, getContacts } from 'redux/selectors';

import ContactItem from 'components/contactitem/contactitem';

import { ContactListContainer, ContactListMesage } from './contactlist.styled';
import { Outlet } from 'react-router-dom';

const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getFilterContent);

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

  return (
    <>
      {isLoading && <ContactListMesage>Loading contacts...</ContactListMesage>}
      {error && <ContactListMesage>{error}</ContactListMesage>}
      {items.length !== 0 && (
        <ContactListContainer key="contactList">
          {getVisbleContacts().map(({ id, name }) => {
            return <ContactItem id={id} name={name} />;
          })}
        </ContactListContainer>
      )}
      <Suspense fallback={<ContactListMesage>Loading...</ContactListMesage>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ContactList;
