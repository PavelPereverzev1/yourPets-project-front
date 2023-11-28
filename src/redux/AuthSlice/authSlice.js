import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser, updateUser } from './operations';
import {
  addNoticeToFavorite,
  deleteNoticeFromFavorite,
} from '../notices/noticesOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    birthday: '',
    phone: '',
    city: '',
    avatarURL: '/yourPets-project-front/defaultAvatar.png',
    favorites: [],
    _id: '',
  },
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  authError: null,
  isFirstLoggedIn: false,
  isUserDataLoaded: false,
  token: null,
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
  reducers: {
    resetAuthState: () => initialState,
    resetAuthError: state => {
      state.authError = null;
    },
    setIsFirstLoggedIn(state) {
      state.isFirstLoggedIn = false;
    },
  },
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
          favorites: [],
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
        state.isLoading = false;
        state.isUserDataLoaded = true;
      })
      .addCase(refreshUser.rejected, (state, { payload }) => {
        state.authError = payload;
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.isLoading = false;
      })
      .addCase(addNoticeToFavorite.fulfilled, (state, { payload }) => {
        state.user.favorites = [...state.user.favorites, payload];
      })
      .addCase(deleteNoticeFromFavorite.fulfilled, (state, { payload }) => {
        state.user.favorites = state.user.favorites.filter(
          favorite => favorite !== payload
        );
      }),
});

export const { resetAuthState, resetAuthError, setIsFirstLoggedIn } =
  authSlice.actions;
export const authReducer = authSlice.reducer;

//Selectors

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectIsLoading = state => state.auth.isLoading;

export const selectAuthError = state => state.auth.authError;

export const selectIsFirstLoggedIn = state => state.auth.isFirstLoggedIn;

export const selectIsUserDataLoaded = state => state.auth.isUserDataLoaded;
