import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './AuthSlice';
import { noticesPersistReducer } from './notices/noticesSlices';
import { queryReducer } from './notices/noticesQuerySlice';
import {NewsReducer} from './news/newsSlice'

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['isFirstLoggedIn'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    notices: noticesPersistReducer,
    query: queryReducer,
    news: NewsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
