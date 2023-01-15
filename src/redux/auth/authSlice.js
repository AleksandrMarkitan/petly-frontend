import { createSlice } from '@reduxjs/toolkit';
import {
	registration,
	login,
	logout,
	fetchCurrentUser,
} from './authOperations';

const initialState = {
	user: {
		name: '',
		email: '',
		avatarURL: '',
	},
	token: null,
	isLoading: false,
	error: null,
	isFetchingCurrentUser: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,

	extraReducers: {
		[registration.pending]: state => {
			state.isLoading = true;
		},
		[registration.fulfilled]: (state, { payload: { user, token } }) => {
			state.isLoading = false;
			state.user = user;
			state.token = token;
		},
		[registration.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		[login.pending]: state => {
			state.isLoading = true;
			state.error = null;
		},
		[login.fulfilled]: (state, { payload: { user, token } }) => {
			state.isLoading = false;
			state.user = user;
			state.token = token;
		},
		[login.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		[logout.pending]: state => {
			state.isLoading = true;
		},
		[logout.fulfilled]: state => {
			state.isLoading = false;
			state.user = {
				name: '',
				email: '',
			};
			state.token = null;
		},
		[logout.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
		[fetchCurrentUser.pending]: state => {
			state.isLoading = true;
			state.error = null;
		},
		[fetchCurrentUser.fulfilled]: (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
		},
		[fetchCurrentUser.rejected]: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
			state.user = {
				name: '',
				email: '',
			};
			state.token = null;
			// }
		},
	},
});

export const authReducer = authSlice.reducer;
