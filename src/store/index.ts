// store/index.js

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { TUESDAY_APP_API } from "./api/apiSlice";
import authReducer from "./slices/authSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  [TUESDAY_APP_API.reducerPath]: TUESDAY_APP_API.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

let store:any;

function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(TUESDAY_APP_API.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });
}

export const initializeStore = () => {
  let _store = store ?? makeStore();

  // After navigating to a page, always remove the reference to the store to avoid memory leaks.
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;

  return _store;
};

export const persistor = persistStore(initializeStore());

export type RootState = ReturnType<typeof store.getState>;