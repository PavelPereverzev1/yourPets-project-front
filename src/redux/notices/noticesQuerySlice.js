import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const noticesQuerySlice = createSlice({
  name: 'query',
  initialState: {
    searchQuery: '',
    category: '',
    filter: {
      upToOneYear: false,
      upToTwoYears: false,
      fromTwoYears: false,
      female: false,
      male: false,
    },
  },
  reducers: {
    setSearchQuery(state, { payload }) {
      state.searchQuery = payload;
    },
    setCategory(state, { payload }) {
      state.category = payload;
    },
    setFilter(state, { actions }) {
      console.log(actions);
      state.filter = actions;
    },
  },
});

export const { setSearchQuery, setCategory, setFilter } =
  noticesQuerySlice.actions;
export const queryReducer = noticesQuerySlice.reducer;
