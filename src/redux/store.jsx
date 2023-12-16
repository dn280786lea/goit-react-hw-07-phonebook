import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from '../redux/contacts';
import { filtersReducer } from '../redux/filtersSlice';
import {
  /*  persistStore,
  persistReducer, */
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
/* import storage from 'redux-persist/lib/storage'; */

/* export const persistConfig = {
  key: 'contacts',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const reducer = {
  contacts: persistedReducer,
  filter: filtersReducer,
}; */

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/* export const persistor = persistStore(store); */
