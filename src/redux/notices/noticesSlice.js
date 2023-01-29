import { createSlice } from '@reduxjs/toolkit';
import {
  fetchNotices,
  fetchOneNotice,
  // fetchFavorites,
  addNotice,
  // fetchOwnerNotices,
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
    // отримання оголошень авторизованого користувача доданих ним же в обрані
    // [fetchFavorites.pending]: (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    //   state.notifyNotices = null;
    // },
    // [fetchFavorites.fulfilled]: (state, { payload }) => {
    //   state.notices = payload;
    //   state.isLoading = false;
    // },
    // [fetchFavorites.rejected]: (state, { payload }) => {
    //   state.error = payload;
    //   state.isLoading = false;
    // },

    // отримання оголошень авторизованого користувача створених цим же користувачем
    // [fetchOwnerNotices.pending]: (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    //   state.notifyNotices = null;
    // },
    // [fetchOwnerNotices.fulfilled]: (state, { payload }) => {
    //   state.notices = payload;
    //   state.isLoading = false;
    // },
    // [fetchOwnerNotices.rejected]: (state, { payload }) => {
    //   state.error = payload;
    //   state.isLoading = false;
    // },
  },
});

export default noticesSlice.reducer;
