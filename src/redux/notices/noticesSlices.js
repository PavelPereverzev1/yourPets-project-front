import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  getNoticesThunk,
  deleteNoticeById,
  getOwnNotices,
  addNoticeToFavorite,
  deleteNoticeFromFavorite,
} from './noticesOperations';

const initialState = {
  items: [],
  isRefreshing: false,
  isLoading: false,
  noticesError: null,
};

const handlePending = state => {
  state.isRefreshing = true;
  state.isLoading = false;
  state.noticesError = null;
};

const handleRejected = (state, { payload }) => {
  state.isRefreshing = false;
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
        state.isRefreshing = false;
      })
      .addCase(deleteNoticeById.pending, handlePending)
      .addCase(deleteNoticeById.fulfilled, (state, { payload }) => {
        const itemsWithoutDeletedNotice = state.items.filter(
          item => item.id !== payload
        );

        state.items = [...itemsWithoutDeletedNotice];
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(deleteNoticeById.rejected, handleRejected)
      .addCase(getOwnNotices.pending, handlePending)
      .addCase(getOwnNotices.rejected, handleRejected)
      .addCase(getOwnNotices.fulfilled, (state, { payload }) => {
        state.items = payload.data;
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(addNoticeToFavorite.pending, handlePending)
      .addCase(addNoticeToFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(addNoticeToFavorite.rejected, handleRejected)
      .addCase(deleteNoticeFromFavorite.pending, handlePending)
      .addCase(deleteNoticeFromFavorite.fulfilled, (state, { payload }) => {
        state.isLoading = false;
      })
      .addCase(deleteNoticeFromFavorite.rejected, handleRejected);
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
