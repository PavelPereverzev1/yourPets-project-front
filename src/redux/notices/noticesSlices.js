import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getNoticesThunk } from './noticesOperations';

const initialState = {
  items: [],
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getNoticesThunk.pending, (state, action) => {
        console.log('pending');
      })
      .addCase(getNoticesThunk.fulfilled, (state, { payload }) => {
        state.items = payload.data;
      })
      .addCase(getNoticesThunk.rejected, (state, action) => {
        console.log('rejected');
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
