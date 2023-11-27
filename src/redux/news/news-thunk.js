// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'http://localhost:3001';

// export const fetchNews = createAsyncThunk(
//   'news/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const { data } = await axios.get('/news');
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );


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