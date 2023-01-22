import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { deletePet, addPet } from "../user/userOperations";
import {
  register,
  login,
  logout,
  fetchCurrentUser,
  updateUserData,
  updateFavoriteNotice,
} from "./authOperations";

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
  items: [],
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
      .addCase(updateFavoriteNotice.rejected, handleRejected)
      .addCase(updateFavoriteNotice.pending, handlePending)

      .addCase(register.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, { payload: { user, token } }) => {
        state.token = token;
        state.user = user;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state = initialState;
        state.isLoading = false;
      })
      .addCase(fetchCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.isFetching = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.isFetching = false;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isFetching = false;
      })
      .addCase(updateUserData.pending, handlePending)
      .addCase(updateUserData.fulfilled, (state, { payload }) => {
        // const index = state.items.findIndex(({ id }) => id === payload.id);
        // state.items[index] = payload;
        state.user = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUserData.rejected, handleRejected)
      .addCase(deletePet.pending, handlePending)
      .addCase(deletePet.fulfilled, (state, { payload }) => {
        state.user.pets = state.user.pets.filter(({ _id }) => _id !== payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deletePet.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addPet.pending, handlePending)
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addPet.rejected, handleRejected)
      .addCase(updateFavoriteNotice.fulfilled, (state, { payload }) => {
        state.user.favoriteNotices = payload;
        state.isLoading = false;
      });
  },
});

export const authPersistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
