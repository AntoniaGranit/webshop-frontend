import { createSlice } from '@reduxjs/toolkit';
import { apiUrl } from '../utils/api';

const user = createSlice({
  name: 'user',
  initialState: {
    email: null,
    userId: null,
    accessToken: null,
    cart: null,
    error: null,
  },
  reducers: {
    setUser: (store, action) => {
      const { email, userId, accessToken, cart } = action.payload;
      store.email = email;
      store.userId = userId;
      store.accessToken = accessToken;
      store.cart = cart;
    },
    setErrors: (store, action) => {
      store.error = action.payload;
    },
    logout: (store) => {
      store.email = null;
      store.userId = null;
      store.accessToken = null;
      store.error = null;
    },
  },
});

export default user;
