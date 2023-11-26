import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  getNoticesThunk,
  deleteNoticeById,
  addNoticeToFavorite,
  deleteNoticeFromFavorite,
} from './noticesOperations';

const initialState = {
  items: [],
  total: 12,
  query: {
    searchQuery: '',
    category: 'sell',
    page: 1,
    filter: {
      upToOneYear: false,
      upToTwoYears: false,
      fromTwoYears: false,
      female: false,
      male: false,
    },
  },
  isRefreshing: false,
  isLoading: false,
  noticesError: null,
};

const handlePending = state => {
  state.isRefreshing = true;
  state.isLoading = true;
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
  reducers: {
    setSearchQuery(state, { payload }) {
      state.isLoading = true;
      state.query.searchQuery = payload;
    },
    setCategory(state, { payload }) {
      state.isLoading = true;
      state.query.category = payload;
    },
    setFilter(state, { actions }) {
      state.isLoading = true;
      state.query.filter = actions;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNoticesThunk.pending, handlePending)
      .addCase(getNoticesThunk.rejected, handleRejected)
      .addCase(getNoticesThunk.fulfilled, (state, { payload }) => {
        state.items = payload.data;
        state.total = payload.total;
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

export const { setSearchQuery, setCategory, setFilter } = noticesSlice.actions;

const persistConfig = {
  key: 'notices',
  storage,
  whitelist: ['items', 'query'],
};

export const noticesPersistReducer = persistReducer(
  persistConfig,
  noticesSlice.reducer
);
