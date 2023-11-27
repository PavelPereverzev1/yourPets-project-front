import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getNoticesThunk = createAsyncThunk(
  'notices/getNoticesThunk',
  async (query, thunkAPI) => {
    const { category, searchQuery, filter, page } = query;
    const { upToOneYear, upToTwoYears, fromTwoYears, female, male } = filter;

    const ownNoticesPath = `/notices/own?search=${searchQuery}&page=${page}&limit=12`;
    const favoriteNoticesPath = `/notices/favorite?search=${searchQuery}&page=${page}&limit=12`;
    const allNoticesPath = `/notices?category=${category}&search=${searchQuery}&page=${page}&limit=12&upToOneYear=${upToOneYear}&upToTwoYears=${upToTwoYears}&fromTwoYears=${fromTwoYears}&female=${female}&male=${male}`;

    try {
      switch (category) {
        case 'own':
          const resOwn = await axios.get(ownNoticesPath);
          return resOwn.data;

        case 'favorite':
          const resFavorite = await axios.get(favoriteNoticesPath);
          return resFavorite.data;

        default:
          const resAll = await axios.get(allNoticesPath);
          return resAll.data;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNoticeById = createAsyncThunk(
  'delete notices/{noticeId}',
  async (query, thunkAPI) => {
    const { id } = query;

    try {
      await axios.delete(`/notices/${id}`);

      return id;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addNoticeToFavorite = createAsyncThunk(
  'patch notices/favorite/{noticeId}',
  async (query, thunkAPI) => {
    const { id } = query;

    try {
      await axios.patch(`/notices/favorite/${id}`, null);

      // return id;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteNoticeFromFavorite = createAsyncThunk(
  'delete notices/favorite/{noticeId}',
  async (query, thunkAPI) => {
    const { id } = query;

    try {
      await axios.delete(`/notices/favorite/${id}`);

      // return id;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);
