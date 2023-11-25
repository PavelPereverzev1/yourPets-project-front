import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, updateUser } from './operations';

const initialState = {
  user: {
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
    avatarURL: '/yourPets-project-front/defaultAvatar.png',
    favourites: [],
    _id: '',
  },
  token: null,
  isLoggedIn: false,
  isFirstLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isUserDataLoaded: false,
  authError: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.authError = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.authError = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: buider =>
    buider
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.isFirstLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.user = {
          name: '',
          email: '',
          birthday: '',
          phone: '',
          city: '',
          avatarURL: null,
          favourites: [],
          _id: '',
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.isUserDataLoaded = false;
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isUserDataLoaded = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
      }),
});

export const authReducer = authSlice.reducer;

//Selectors

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoading = state => state.auth.isLoading;

export const selectAuthError = state => state.auth.authError;

export const selectIsFirstLoggedIn = state => state.auth.isFirstLoggedIn;

export const selectIsUserDataLoaded = state => state.auth.isUserDataLoaded;
