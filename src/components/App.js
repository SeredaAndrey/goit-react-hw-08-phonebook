import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppPrimaryContainer } from './app.styled';
import operations from 'redux/authOperations';

import Contact from './contact/contact';
import Filter from './filter/filter';
import ContactList from './contactlist/contactlist';
import AppBar from './appbar/appbar';
import Login from './login/login';
import Register from './register/register';
import { PrivateRoute } from './PrivatRoute';
import { PublicRoute } from './PublicRoute';
const EditContactForm = lazy(() => import('./contactform/editContactform'));
const AddContactForm = lazy(() => import('./contactform/addContactform'));
const ContactDetails = lazy(() => import('./contactdetails/contactdetails'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.refreshUser());
  }, [dispatch]);

  return (
    <>
      <AppPrimaryContainer>
        <AppBar />
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<div>start page</div>}
              />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/contacts" component={<Register />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={
                  <Contact>
                    <Route path="filter" element={<Filter />}>
                      <Route path="" element={<ContactList />}>
                        <Route path=":id" element={<ContactDetails />}>
                          <Route path="edit" element={<EditContactForm />} />
                        </Route>
                        <Route path="*" element={<div>page not found</div>} />
                      </Route>
                    </Route>
                    <Route path="add" element={<AddContactForm />} />
                  </Contact>
                }
              />
            }
          />
          <Route path="*" element={<div>page not found</div>} />
        </Routes>
      </AppPrimaryContainer>
    </>
  );
};
