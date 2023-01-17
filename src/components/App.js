import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './layout/layout';
import Nav from './nav/nav';
import Filter from './filter/filter';
import ContactList from './contactlist/contactlist';
const EditContactForm = lazy(() => import('./contactform/editContactform'));
const AddContactForm = lazy(() => import('./contactform/addContactform'));
const ContactDetails = lazy(() => import('./contactdetails/contactdetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="contacts" element={<Nav />}>
            <Route path="filter" element={<Filter />}>
              <Route path="" element={<ContactList />}>
                <Route path=":id" element={<ContactDetails />}>
                  <Route path="edit" element={<EditContactForm />} />
                </Route>
                <Route path="*" element={<div>page not found</div>} />
              </Route>
            </Route>
            <Route path="add" element={<AddContactForm />} />
          </Route>
        </Route>
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </>
  );
};
