import { createSlice } from "@reduxjs/toolkit";
import {
  addPet,
  deletePet,
  //   fetchUserPets,
  //   updateUserData,
} from "./userOperations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const petsSlice = createSlice({
  // name: "user",
  name: "pets",
  initialState,

  extraReducers: (builder) => {
    builder
      //   .addCase(fetchUserPets.pending, (state) => {
      //     state.isLoading = true;
      //     state.error = null;
      //   })
      //   .addCase(fetchUserPets.fulfilled, (state, { payload }) => {
      //     state.items = payload;
      //     state.isLoading = false;
      //     state.error = null;
      //   })
      //   .addCase(fetchUserPets.rejected, (state, { payload }) => {
      //     state.error = payload;
      //     state.isLoading = false;
      //   })
      //   .addCase(updateUserData.pending, (state) => {
      //     state.isLoading = true;
      //     state.error = null;
      //   })
      //   .addCase(updateUserData.fulfilled, (state, { payload }) => {
      //     // const index = state.items.findIndex(({ id }) => id === payload.id);
      //     // state.items[index] = payload;
      //     state.items = payload;
      //     state.isLoading = false;
      //     state.error = null;
      //   })
      //   .addCase(updateUserData.rejected, (state, { payload }) => {
      //     state.error = payload;
      //     state.isLoading = false;
      //   })
      .addCase(addPet.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPet.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addPet.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
    //   .addCase(deletePet.pending, (state) => {
    //     state.isLoading = true;
    //   })
    //   .addCase(deletePet.fulfilled, (state, { payload }) => {
    //     state.items = state.items.filter(({ _id }) => _id !== payload);
    //     state.isLoading = false;
    //     state.error = null;
    //   })
    //   .addCase(deletePet.rejected, (state, { payload }) => {
    //     state.error = payload;
    //     state.isLoading = false;
    //   });
  },
});

export const petsReducer = petsSlice.reducer;
