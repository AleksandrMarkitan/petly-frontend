import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//axios.defaults.baseURL = "https://pets-support-backend.onrender.com/api/v1";

const { REACT_APP_API_URL } = process.env;
const BASE_URL = REACT_APP_API_URL;

axios.defaults.baseURL = BASE_URL;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2Q2NzhlYmZmN2YxODM2ZDg4ZmJmMiIsImlhdCI6MTY3NDQwOTEzNywiZXhwIjoxNjc1MjM3MTM3fQ.2Ejp1wqGmA6zTpgJoe829bgz2EInYIVuNEg1haSXrN8";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

//axios.defaults.baseURL = "http://localhost:4000/api/v1";

// export const fetchUserPets = createAsyncThunk(
//   "/auth/current",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios("/users/current");
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const updateUserData = createAsyncThunk(
//   "users/update",
//   async (
//     { name, email, birthday, phone, city, avatarURL },
//     { rejectWithValue }
//   ) => {
//     try {
//       const { data } = await axios.patch("/users/update", {
//         name,
//         email,
//         birthday,
//         phone,
//         city,
//         avatarURL,
//       });
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

export const addPet = createAsyncThunk(
  "pets/addPet",
  async (pet, { rejectWithValue }) => {
    pet && console.log(123, pet);
    console.log(pet);
    try {
      const { data } = await axios.post("/pets", pet);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePet = createAsyncThunk(
  "pets/deletePet",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`/pets/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
