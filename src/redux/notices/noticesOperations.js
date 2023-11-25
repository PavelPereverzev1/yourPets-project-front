import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNoticesThunk = createAsyncThunk(
  'notices/getNoticesThunk',
  async (query, thunkAPI) => {
    const { category, searchQuery, filter, page } = query;
    const { upToOneYear, upToTwoYears, fromTwoYears, female, male } = filter;

    const path = `/notices?category=${category}&search=${searchQuery}&page=${page}&limit=12&upToOneYear=${upToOneYear}&upToTwoYears=${upToTwoYears}&fromTwoYears=${fromTwoYears}&female=${female}&male=${male}`;

    try {
      const res = await axios.get(path);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNoticeById = createAsyncThunk(
  'notices/{noticeId}',
  async (query, thunkAPI) => {
    const { id } = query;

    try {
      await axios.delete(`/notice/${id}`);
    } catch ({
      response: {
        data: { message },
      },
    }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getOwnNotices = createAsyncThunk(
  'notices/getOwnNotices',
  async (query, thunkAPI) => {
    const { searchQuery, page } = query;

    try {
      const res = await axios.get(
        `/notices/own?search=${searchQuery}&page=${page}&limit=12`
      );

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getFavoriteNotices = createAsyncThunk(
  'notices/getFavoriteNotices',
  async (query, thunkAPI) => {
    const { searchQuery, page } = query;

    try {
      const res = await axios.get(
        `/notices/favorite?search=${searchQuery}&page=${page}&limit=12`
      );

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
