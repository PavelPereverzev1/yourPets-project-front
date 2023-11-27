import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3001';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/news');
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
