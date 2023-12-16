import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://657dc1123e3f5b1894631687.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'Contact/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/Contact');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'Contact/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post('/Contact', { name, phone });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'Contact/deleteContact',
  async (ContactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/Contact/${ContactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
