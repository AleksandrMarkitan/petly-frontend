import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:4000/api/v1";
// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYzkzMDc0Nzc4MDA3ZDg1NmVlZDhiOCIsImlhdCI6MTY3NDIzODgxNiwiZXhwIjoxNjc1MDY2ODE2fQ.wQ92xAMifrRnJLbkPhYiBUMzGYewGrxIZBwMu5gPaVg";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
axios.defaults.baseURL = "http://localhost:4000/api/v1";

export const register = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/register", userData);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", userData);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.get("/auth/logout");
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    // const tokenCurrent = getState().auth.token;
    // if (!tokenCurrent) {
    //   return rejectWithValue();
    // }
    //token.set(tokenCurrent);
    try {
      const { data } = await axios("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  "users/update",
  async (
    { name, email, birthday, phone, city, avatarURL, pets },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.patch("/users/update", {
        name,
        email,
        birthday,
        phone,
        city,
        avatarURL,
        pets,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
