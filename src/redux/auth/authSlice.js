import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { register, login, logout, fetchCurrentUser } from "./authOperations";

const initialState = {
  user: {
    name: "",
    email: "",
    avatarURL: "",
    city: "",
    birthday: "",
    phone: "",
    pets: [],
    favoriteNotices: [],
  },
  token: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(logout.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.rejected, handleRejected)

      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
        state.isAuth = true;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.user = { name: "", email: "" };
        state.isAuth = false;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.isFetching = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
        state.isLoading = false;
        state.isFetching = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isFetching = false;
      });
  },
  reducers: {
    updateFavoriteNotices(state, { payload }) {
      const indexId = state.favoriteNotices.indexOf(payload);
      if (indexId === -1) {
        state.favoriteNotices.push(payload);
      } else {
        state.favoriteNotices.splice(indexId, 1);
      }
    },
  },
});

export const authPersistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const { updateFavoriteNotices } = authSlice.actions;
