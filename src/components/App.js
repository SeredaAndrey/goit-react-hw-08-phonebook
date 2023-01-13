import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './layout/layout';
import Nav from './nav/nav';
import Filter from './filter/filter';
import ContactList from './contactlist/contactlist';
import ContactDetails from './contactdetails/contactdetails';
const ContactForm = lazy(() => import('./contactform/addContactform'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="" element={<Nav />}>
          <Route path="filter" element={<Filter />}>
            <Route index element={<ContactList />} />
          </Route>
          <Route path="add" element={<ContactForm />} />
          <Route path="contacts/:id" element={<ContactDetails />} />
          <Route path="*" element={<div>page not found</div>} />
        </Route>
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </>
  );
};
