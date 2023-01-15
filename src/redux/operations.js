/* eslint-disable no-unused-vars */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://63be9521585bedcb36b10d3c.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const responce = await axios.get('/contacts');
      return responce.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const responceFull = await axios.delete(
        `/contacts/${contactId}/details/${contactId}`
      );
      const responceShot = await axios.delete(`/contacts/${contactId}`);

      return responceShot.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ fullname, firstname, lastname, email, number, city }, thunkAPI) => {
    try {
      const responceShot = await axios.post('/contacts', {
        fullname,
      });
      const responceFull = await axios.post(
        `/contacts/${responceShot.data.id}/details`,
        {
          firstname,
          lastname,
          email,
          number,
          city,
        }
      );
      return responceShot.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
