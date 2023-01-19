import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// отримання оголошень по категоріям
export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",

  async ({ category, page = 1, limit = 8 }, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        `/notices?category=${category}&page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// отримання одного оголошення
export const fetchOneNotice = createAsyncThunk(
  "notices/fetchOneNotice",

  async ({ noticeId }, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/notices/${noticeId}`);
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
      await axios.patch(`/notices/${noticeId}/favorites`);
      return { noticeId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// отримання оголошень авторизованого користувача доданих ним же в обрані
export const fetchFavorites = createAsyncThunk(
  "notices/fetchFavorites",

  async ({ noticeId, page = 1, limit = 8 }, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        `/notices/${noticeId}?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// додавання оголошень відповідно до обраної категорії
export const addNotice = createAsyncThunk(
  "notices/addNotice",

  async (newNotice, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/notices", newNotice);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// отримання оголошень авторизованого користувача створених цим же користувачем
export const fetchOwnerNotices = createAsyncThunk(
  "notices/fetchOwnerNotices",

  async ({ page = 1, limit = 8 }, { rejectWithValue }) => {
    try {
      const { data } = await axios(
        `/notices/owner?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//  видалення оголошення авторизованого користувача створеного цим же користувачем
export const deleteNotice = createAsyncThunk(
  "notices/deleteNotice",

  async ({ noticeId }, { rejectWithValue }) => {
    try {
      await axios.delete(`/notices/${noticeId}`);
      return noticeId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
