import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchOneNotice,
  addNotice,
  deleteNotice,
} from './noticesOperations';

const initialState = {
  notices: [],
  oneNotice: {},
  isLoading: false,
  error: null,
  notifyNotices: null,
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  extraReducers: {
    // отримання оголошень по категоріям
    [fetchNotices.pending]: state => {
      state.isLoading = true;
      state.error = null;
      state.notifyNotices = null;
    },
    [fetchNotices.fulfilled]: (state, { payload }) => {
      state.notices = payload.notices;
      state.isLoading = false;
    },
    [fetchNotices.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    // отримання одного оголошення
    [fetchOneNotice.pending]: state => {
      state.isLoading = true;
      state.error = null;
      state.notifyNotices = null;
    },
    [fetchOneNotice.fulfilled]: (state, { payload }) => {
      state.oneNotice = payload;
      state.isLoading = false;
    },
    [fetchOneNotice.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    // додавання оголошень відповідно до обраної категорії
    [addNotice.pending]: state => {
      state.isLoading = true;
      state.error = null;
      state.notifyNotices = null;
    },
    [addNotice.fulfilled]: (state, { payload }) => {
      state.notices.push(payload);
      state.notifyNotices = 'Notice was successfully added!';
      state.isLoading = false;
    },
    [addNotice.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    //  видалення оголошення авторизованого користувача створеного цим же користувачем
    [deleteNotice.pending]: state => {
      state.isLoading = true;
      state.error = null;
      state.notifyNotices = null;
    },
    [deleteNotice.fulfilled]: (state, { payload }) => {
      state.notices = state.notices.filter(({ _id }) => _id !== payload);
      state.notifyNotices = 'Notice was successfully deleted!';
      state.isLoading = false;
    },
    [deleteNotice.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
  reducers: {
    clearNotices(state, { payload }) {
      state.notices = payload;
    },
    changeFavotitesNotices(state, { payload }) {
      state.notices = state.notices.filter(notice => notice._id !== payload);
    },
  },
});

export default noticesSlice.reducer;
export const { clearNotices, changeFavotitesNotices } = noticesSlice.actions;
