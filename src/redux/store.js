import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './ContactsSlice';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    Contacts: contactsReducer,
  },
});
