import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './news-thunk';

const NewsInitialState = [];

const newsSlice = createSlice({
  name: 'news',
  initialState: NewsInitialState,
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const getNews = state => state.news;
export const { setNews } = newsSlice.actions;
export const NewsReducer = newsSlice.reducer;