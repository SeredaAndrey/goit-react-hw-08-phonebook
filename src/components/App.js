import { Route, Routes } from 'react-router-dom';

import { Layout } from './layout/layout';
import { Nav } from './nav/nav';
import Filter from './filter/filter';
import ContactForm from './contactform/contactform';
import ContactList from './contactlist/contactlist';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="" element={<Nav />}>
          <Route path="filter" element={<Filter />}>
            <Route path="" element={<ContactList />} />
          </Route>
          <Route path="add" element={<ContactForm />} />
          <Route path="*" element={<div>page not found</div>} />
        </Route>
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </>
  );
};
