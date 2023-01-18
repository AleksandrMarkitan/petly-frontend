import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzMwN2E1MGM1NTc3ODYxN2RmOWRjYSIsImlhdCI6MTY3NDA2MjM1NSwiZXhwIjoxNjc0MTQ1MTU1fQ.WLbu6I6lK54NdjyS-DGRWyyX3Hhh2vFNtjhU9z3XyDU";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
axios.defaults.baseURL = "http://localhost:5000/api/v1";

console.log("uuu");

export const fetchUserPets = createAsyncThunk(
  "/auth/current",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  "contacts/updateUserData",
  async (
    { name, email, birthday, phone, city, avatarURL },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch(`/auth/update`, {
        name,
        email,
        birthday,
        phone,
        city,
        avatarURL,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPet = createAsyncThunk(
  "pets/addPet",
  async (pet, { rejectWithValue }) => {
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
