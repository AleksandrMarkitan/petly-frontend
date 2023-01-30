import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { toastStyled } from '../../components/AuthForms/Forms.styled';

const { REACT_APP_API_URL } = process.env;
const BASE_URL = REACT_APP_API_URL;

axios.defaults.baseURL = BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/register', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('Email already is used!', toastStyled);
      } else {
        toast.error('Validation error.', toastStyled);
      }

      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/auth/login', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        toast.error('Email not found!', toastStyled);
      } else if (error.response.status === 401) {
        toast.error('Wrong email or password!', toastStyled);
      } else {
        toast.error('Validation error!', toastStyled);
      }

      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.get('/auth/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const tokenCurrent = getState().auth.token;
    if (!tokenCurrent) {
      return rejectWithValue();
    }
    token.set(tokenCurrent);
    try {
      const { data } = await axios('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  'users/update',
  async ({ name, email, birthday, phone, city }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/users/update', {
        name,
        email,
        birthday,
        phone,
        city,
      });
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);
// оновлення картинки
export const updateUserAvatar = createAsyncThunk(
  'users/updateAvatar',
  async ({ avatarURL }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/users/update', avatarURL);
      return data;
    } catch (error) {
      toast.error(error.message);
      return rejectWithValue(error.message);
    }
  }
);

// додавання та видалення оголошення з обраних
export const updateFavoriteNotice = createAsyncThunk(
  'notices/updateFavoriteNotice',

  async ({ noticeId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/notices/${noticeId}/favorites`);
      return data.favoriteNotices;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
