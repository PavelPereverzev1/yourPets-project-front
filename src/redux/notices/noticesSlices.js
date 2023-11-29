import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  getNoticesThunk,
  deleteNoticeById,
  addNoticeToFavorite,
  deleteNoticeFromFavorite,
} from './noticesOperations';
import { logOut, logIn, register } from 'redux/AuthSlice/operations';

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
      state.query.searchQuery = payload;
    },
    setCategory(state, { payload }) {
      state.query.page = 1;
      state.query.category = payload;
    },
    setFilter(state, { payload }) {
      state.query.filter = payload;
    },
    setPage(state, { payload }) {
      state.query.page = payload;
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
        state.items = state.items.filter(item => item._id !== payload);
        state.isLoading = false;
        state.isRefreshing = false;
      })
      .addCase(deleteNoticeById.rejected, handleRejected)

      .addCase(addNoticeToFavorite.pending, state => {
        state.noticesError = null;
      })
      .addCase(addNoticeToFavorite.fulfilled, state => {
        state.noticesError = null;
      })
      .addCase(addNoticeToFavorite.rejected, (state, { payload }) => {
        state.noticesError = payload;
      })
      .addCase(deleteNoticeFromFavorite.pending, state => {
        state.noticesError = null;
      })
      .addCase(deleteNoticeFromFavorite.fulfilled, (state, { payload }) => {
        state.noticesError = null;
        if (state.query.category === 'favorite') {
          state.items = state.items.filter(item => item._id !== payload);
        }
      })
      .addCase(deleteNoticeFromFavorite.rejected, (state, { payload }) => {
        state.noticesError = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.query.category = 'sell';
      })
      .addCase(logIn.fulfilled, state => {
        state.query.category = 'sell';
      })
      .addCase(register.fulfilled, state => {
        state.query.category = 'sell';
      });
  },
});

export const { setSearchQuery, setCategory, setFilter, setPage } =
  noticesSlice.actions;

const persistConfig = {
  key: 'notices',
  storage,
  whitelist: ['items', 'query'],
};

export const noticesPersistReducer = persistReducer(
  persistConfig,
  noticesSlice.reducer
);
