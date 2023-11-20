import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getNoticesThunk } from './noticesOperations';

const initialState = {
  items: [],
  isLoading: false,
  noticesError: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.noticesError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.noticesError = payload;
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getNoticesThunk.pending, handlePending)
      .addCase(getNoticesThunk.rejected, handleRejected)
      .addCase(getNoticesThunk.fulfilled, (state, { payload }) => {
        state.items = payload.data;
        state.isLoading = false;
      });
  },
});

const persistConfig = {
  key: 'notices',
  storage,
  whitelist: ['items'],
};

export const noticesPersistReducer = persistReducer(
  persistConfig,
  noticesSlice.reducer
);
