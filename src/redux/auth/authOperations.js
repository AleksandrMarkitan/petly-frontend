import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { toastStyled } from "../../components/AuthForms/Forms.styled";

const { REACT_APP_API_URL } = process.env;
const BASE_URL = REACT_APP_API_URL;

axios.defaults.baseURL = BASE_URL;
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzY2QwZDE4OWYyYzE5MjI4ZTU1M2Y0ZiIsImlhdCI6MTY3NDM4MjcxOSwiZXhwIjoxNjc1MjEwNzE5fQ.kONMeCBrIJcPokziKvTGWUsPwXewg04H1RTgG3H6CyE";
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//axios.defaults.baseURL = "http://localhost:4000/api/v1";

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = ``;
//   },
// };

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
      if (error.response.status === 401) {
        toast.error("Email or password is wrong!", toastStyled);
      } else {
        toast.error("Validation error!", toastStyled);
      }

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
    // token.set(tokenCurrent);
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
    avatarURL && console.log(123, avatarURL);
    try {
      const { data } = await axios.patch("/users/update", {
        name,
        email,
        birthday,
        phone,
        city,
        pets,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// оновлення картинки
export const updateUserAvatar = createAsyncThunk(
  "users/updateAvatar",
  async ({ avatarURL }, { rejectWithValue }) => {
    avatarURL && console.log(123, avatarURL);
    try {
      const { data } = await axios.patch("/users/update", avatarURL);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// додавання та видалення оголошення з обраних
export const updateFavoriteNotice = createAsyncThunk(
  "notices/updateFavoriteNotice",

  async ({ noticeId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/notices/${noticeId}/favorites`);
      return data.favoriteNotices;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
