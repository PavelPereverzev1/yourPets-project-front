import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from 'services/axiosConfig';

export const getFriendsThunk = createAsyncThunk(
  'ourFriends/getFriendsThunk',

  async (credentials, thunkAPI) => {
    try {
      const res = await axiosInstance.get(`/friends`, credentials);

      return res.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
