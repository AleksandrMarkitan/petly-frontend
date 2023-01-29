import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { DEFAULT_LIMIT } from '../../helpers/constants';
// "http://localhost:4000/api/v1"
// отримання оголошень по категоріям
export const fetchNotices = createAsyncThunk(
  'notices/fetchNotices',

  async (
    { category, qwery = '', page = 1, limit = DEFAULT_LIMIT },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios(
        `/notices/${category}?page=${page}&limit=${limit}&qwery=${qwery}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// отримання одного оголошення
export const fetchOneNotice = createAsyncThunk(
  'notices/fetchOneNotice',

  async ({ noticeId }, { rejectWithValue }) => {
    try {
      const { data } = await axios(`/notices/notice/${noticeId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// додавання оголошень відповідно до обраної категорії
export const addNotice = createAsyncThunk(
  'notices/addNotice',

  async (newNotice, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/notices`, newNotice);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//  видалення оголошення авторизованого користувача створеного цим же користувачем
export const deleteNotice = createAsyncThunk(
  'notices/deleteNotice',

  async ({ noticeId }, { rejectWithValue }) => {
    try {
      await axios.delete(`/notices/${noticeId}`);
      return noticeId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
