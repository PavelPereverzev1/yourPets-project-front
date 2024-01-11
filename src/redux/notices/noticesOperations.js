import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'services/axiosConfig';

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
          const resOwn = await axiosInstance.get(ownNoticesPath);
          return resOwn.data;

        case 'favorite':
          const resFavorite = await axiosInstance.get(favoriteNoticesPath);
          return resFavorite.data;

        default:
          const resAll = await axiosInstance.get(allNoticesPath);
          return resAll.data;
      }
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const deleteNoticeById = createAsyncThunk(
  'delete notices/{noticeId}',
  async (query, thunkAPI) => {
    const { id } = query;

    try {
      await axiosInstance.delete(`/notices/${id}`);

      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const addNoticeToFavorite = createAsyncThunk(
  'patch notices/favorite/{noticeId}',
  async (query, thunkAPI) => {
    const { id } = query;

    try {
      await axiosInstance.patch(`/notices/favorite/${id}`, null);

      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const deleteNoticeFromFavorite = createAsyncThunk(
  'delete notices/favorite/{noticeId}',
  async (query, thunkAPI) => {
    const { id } = query;

    try {
      await axiosInstance.delete(`/notices/favorite/${id}`);

      return id;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
