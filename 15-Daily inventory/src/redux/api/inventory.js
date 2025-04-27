import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('inventory/fetchItems', async () => {
  const response = await axios.get('/');
  return response.data;
});

export const addItem = createAsyncThunk('inventory/addItem', async (user) => {
  const response = await axios.post('/', user);
  console.log(response)
  return response.data;
});

export const updateUser = createAsyncThunk('inventory/updateUser', async ({ id, user }) => {
  const response = await axios.put(`/${id}`, user);
  return response.data;
});

export const deleteItem = createAsyncThunk('inventory/deleteItem', async (id) => {
  await axios.delete(`/${id}`);
  return id;
});