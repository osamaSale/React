import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// All Users
export const getAllUsers = createAsyncThunk("getAllUsers", async (arg, { rejectWithValue, }) => {
    const res = await axios.get("users")
    return res.data
})


// Single User
export const singleUser = createAsyncThunk("singleUser", async (arg, { rejectWithValue, }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await axios.get(`/users/single/${user.id}`)
    return res.data
})

// Create User
export const createUser = createAsyncThunk("createUser", async (user, { rejectWithValue }) => {
    const res = await axios.post("users", user)
    return res.data
})

// Login
export const login = createAsyncThunk("login", async (user, { rejectWithValue }) => {
    const res = await axios.post(`users/login`, user)
    return res.data
})


// Delete User
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    const res = await axios.delete(`users/${id}`)
    return res.data
})

// Edit User
export const editUser = createAsyncThunk("editUser", async (user, { rejectWithValue }) => {
    const res = await axios.put(`users`, user)
    return res.data
})