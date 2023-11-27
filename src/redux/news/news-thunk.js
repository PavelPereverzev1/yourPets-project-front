import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://yourpets-project-backend.onrender.com';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async ({ page = 1, limit = 6, search = '' }, thunkAPI) => {
    try {
      const { data } = await axios.get('/news', {
        params: {
          page,
          limit,
          search,
        },
      });
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);