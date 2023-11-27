import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './news-thunk';

const newsInitialState = {
  currentPage: 1,
  totalPages: 1,
  data: [],
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
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.data = action.payload;
      state.totalPages = action.payload.totalPages;
    });
  },
});

export const getNews = state => state.news.data;
export const { setCurrentPage, setTotalPages } = newsSlice.actions;
export const NewsReducer = newsSlice.reducer;