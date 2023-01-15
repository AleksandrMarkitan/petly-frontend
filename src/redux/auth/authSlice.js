import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
	name: 'auth',
	initialState: null,
});

export const authReducer = authSlice.reducer;
