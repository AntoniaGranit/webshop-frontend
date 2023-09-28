import { createSlice } from '@reduxjs/toolkit';
import { apiUrl } from '../utils/api';

const cart = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    error: null,
  },
  reducers: {},
});

export default cart;
