// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/InventorySlice';

const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export default store;
