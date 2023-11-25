import { createSlice } from '@reduxjs/toolkit';

const noticesQuerySlice = createSlice({
  name: 'query',
  initialState: {
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
