import {  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('/');
  return response.data;
});

export const createUser = createAsyncThunk('users/createUser', async (user) => {
  const response = await axios.post('/', user);
  return response.data;
});

export const updateUser = createAsyncThunk('users/updateUser', async ({ id, user }) => {
  const response = await axios.put(`/${id}`, user);
  return response.data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  await axios.delete(`/${id}`);
  return id;
});