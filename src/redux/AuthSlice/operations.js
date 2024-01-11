import { createAsyncThunk } from '@reduxjs/toolkit';
import { resetAuthState } from './authSlice';
import axiosInstance, {
  clearAuthHeader,
  setAuthHeader,
} from 'services/axiosConfig';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/auth/register', credentials);

      setAuthHeader(response.data.token);

      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axiosInstance.post('/auth/login', credentials);

      setAuthHeader(response.data.token);

      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const logOut = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
  try {
    await axiosInstance.post('auth/logout');

    clearAuthHeader();
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.message);
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
      const response = await axiosInstance.get('/users/current');

      return response.data;
    } catch ({ response }) {
      if (response.status === 401) {
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
      const response = await axiosInstance.patch('/users', formData);

      return response.data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);
