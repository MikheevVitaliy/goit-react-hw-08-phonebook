import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Функция принимает 'token' и по пути 'headers.common.Authorization' записывает его
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Функция очищает 'token'
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

// Функция на регистрацию
export const register = createAsyncThunk(
  'auth/register', // Тип экшена
  // В 'credentials' опрокидываем пароль, мэил и юзерНэйм
  async (credentials, thunkAPI) => {
    try {
      // По адресу 'https://connections-api.herokuapp.com/users/signup' передаем 'credentials';
      const res = await axios.post('/users/signup', credentials); // Ответ с бэкенда записываем в 'res'

      setAuthHeader(res.data.token); // При каждом запросе принимает 'token'
      toast.success('Welcome to the Phonebook');
      return res.data; // Возвращаем данные
    } catch (error) {
      toast.error('oops');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Функция на авторизацию
export const logIn = createAsyncThunk(
  'auth/login', // Тип экшена
  // В 'credentials' опрокидываем пароль и юзерНэйм
  async (credentials, thunkAPI) => {
    try {
      // По адресу 'https://connections-api.herokuapp.com/users/signup' передаем 'credentials';
      const res = await axios.post('/users/login', credentials); // Ответ с бэкенда записываем в 'res'

      setAuthHeader(res.data.token); // При каждом запросе принимает 'token'
      toast.success('Welcome to the Phonebook');
      return res.data; // Возвращаем данные
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Выход
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const { auth } = getState();
    const persistedToken = auth.token;

    if (persistedToken === null) {
      return rejectWithValue('Unable to fetch user');
    }

    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
