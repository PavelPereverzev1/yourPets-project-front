import { createAsyncThunk } from '@reduxjs/toolkit';
import { createRequestTimer } from 'helpers/createRequestTimer';
import axiosInstance from 'services/axiosConfig';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async ({ page = 1, search = '' }, thunkAPI) => {
    const timerId = createRequestTimer();

    try {
      const { data } = await axiosInstance.get('/news?', {
        params: {
          page,
          search,
        },
      });

      clearTimeout(timerId);

      return data;
    } catch ({ response }) {
      clearTimeout(timerId);

      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
