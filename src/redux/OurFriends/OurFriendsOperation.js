import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({

  baseURL: 'https://yourpets-project-backend.onrender.com',
});

export const getFriendsThunk = createAsyncThunk(
  'ourFriends/getFriendsThunk',
  
  async (credentials, thunkAPI) => {

    try {
      const res = await instance.get(`/friends`, credentials);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);