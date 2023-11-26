import { createSlice } from '@reduxjs/toolkit';
import { getFriendsThunk } from './OurFriendsOperation';

const handlePending = state => {
  state.isLoading = true;
  state.friendsError = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.friendsError = payload;
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState: { friends: [], isLoading: false, friendsError: null },
  reducers:{},
  extraReducers: builder => {
    builder
      .addCase(getFriendsThunk.pending, handlePending)
      .addCase(getFriendsThunk.rejected, handleRejected)
      .addCase(getFriendsThunk.fulfilled, (state, { payload }) => {
        state.friends = payload;
        state.isLoading = false;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;

export const selectFriend = state => state.friends?.friends ?? [];
export const selectIsLoading = state => state.friends?.isLoading
export const selectError = state => state.friends?.friendsError
