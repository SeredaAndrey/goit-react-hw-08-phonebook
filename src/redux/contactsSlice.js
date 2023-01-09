import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialContent = [
  { id: '1', name: 'mango', number: '123456' },
  { id: '2', name: 'banana', number: '234567' },
  { id: '3', name: 'orange', number: '345678' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialContent,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { name, number, id: nanoid() } };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(
        contacts => contacts.id === action.payload.id
      );
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
