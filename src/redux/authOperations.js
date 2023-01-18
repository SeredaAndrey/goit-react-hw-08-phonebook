import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
});

//token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M4NDFhOWM4NWMyYzAwMTZkYjJhMWYiLCJpYXQiOjE2NzQwNjgzOTN9.Wev4y0cTjqy4vJH91cQ1t5fgBU9BdEUeid4lfIPF4p0;
//andreys / andrey.s@mail.com / andrey00560215
