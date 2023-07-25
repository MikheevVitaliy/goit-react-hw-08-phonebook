import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

// Начальное состояние 'createSlice'
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth', // Имя slice
  initialState, // Начальное состояние 'createSlice', прописан выше
  extraReducers: {
    // В 'contactsSlice.js' ещё один вариант записи
    // Выполнится, в случае успешного запроса на бэкенд
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    // Выполнится, в случае успешного запроса на бэкенд
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    // Выполнится, в случае выхода
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    // Выполняется, в процессе запроса на бэкенд
    [refreshUser.pending](state) {
      state.isRefreshing = true;
    },
    // Выполнится, в случае успешного запроса на бэкенд
    [refreshUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    // Выполнится, в случае не успешного запроса на бэкенд
    [refreshUser.rejected](state, action) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
