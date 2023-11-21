import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNoticesThunk = createAsyncThunk(
  'notices/getNoticesThunk',
  async (query, thunkAPI) => {
    const { category, searchQuery, filter } = query;
    const { upToOneYear, upToTwoYears, fromTwoYears, female, male } = filter;

    const path = `/notices?category=${category}&search=${searchQuery}&upToOneYear=${upToOneYear}&upToTwoYears=${upToTwoYears}&fromTwoYears=${fromTwoYears}&female=${female}&male=${male}`;

    try {
      const res = await axios.get(path);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
