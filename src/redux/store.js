import { configureStore } from "@reduxjs/toolkit";

import { authPersistedReducer } from "./auth/authSlice";
import { petsReducer, userReducer } from "./user/userSlice";
import noticesReduser from "./notices/noticesSlice";

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    // user: userReducer,
    // pets: petsReducer,
    notices: noticesReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
