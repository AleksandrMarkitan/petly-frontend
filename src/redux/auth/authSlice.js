import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
});

export const authReducer = authSlice.reducer;
