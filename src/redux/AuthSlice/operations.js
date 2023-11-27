import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { resetAuthState } from './authSlice';

axios.defaults.baseURL = 'https://yourpets-project-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/register', credentials);

      setAuthHeader(response.data.token);

      return response.data;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/auth/login', credentials);

      setAuthHeader(response.data.token);

      return response.data;
    } catch ({
      response: {
        data: { message },
      },
    }) {
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('auth/logout');

    clearAuthHeader();
  } catch ({
    response: {
      data: { message },
    },
  }) {
    return thunkAPI.rejectWithValue(message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      thunkAPI.dispatch(resetAuthState());
      return thunkAPI.rejectWithValue();
    }

    setAuthHeader(persistedToken);
    try {
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        clearAuthHeader();
        thunkAPI.dispatch(resetAuthState());
        return thunkAPI.rejectWithValue(
          'Your session has expired. Please log in again.'
        );
      }
      return thunkAPI.rejectWithValue(
        'Failed to update the page with your data. Please refresh the page or try again later.'
      );
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (formData, thunkAPI) => {
    try {
      const res = await axios.patch('/users', formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
