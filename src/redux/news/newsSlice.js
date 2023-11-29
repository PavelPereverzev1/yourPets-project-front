import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './news-thunk';

const newsInitialState = {
  currentPage: 1,
  totalPages: 1,
  data: [],
  isLoading: false,
  newsError: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.newsError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.newsError = payload;
};

const newsSlice = createSlice({
  name: 'news',
  initialState: newsInitialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTotalPages(state, action) {
      state.totalPages = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.data = action.payload;
        state.currentPage = action.meta.arg.page;
        state.totalPages = action.payload.totalPages;
        state.isLoading = false;
      })
      .addCase(fetchNews.pending, handlePending)
      .addCase(fetchNews.rejected, handleRejected);
  },
});

export const getNews = state => state.news.data.data;
export const totalNews = state => state.news.data;
export const { setCurrentPage, setTotalPages } = newsSlice.actions;
export const NewsReducer = newsSlice.reducer;
