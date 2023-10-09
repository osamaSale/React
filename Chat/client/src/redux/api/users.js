import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"




export const getAllUsers = createAsyncThunk("getAllUsers", async (arg, { rejectWithValue , }) => {
    const res = await axios.get("users")
    return res.data
})

export const singleUser = createAsyncThunk("singleUser", async (id, { rejectWithValue }) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await axios.get(`/users/single/${user._id}`)
        return res.data
    }
    catch (error) {
        console.log(error);
    }
})

export const login = createAsyncThunk("login", async (user, { rejectWithValue }) => {
    try {
        const res = await axios.post(`users/login`, user)
        return res.data
    }
    catch (error) {
        console.log(error);
    }
})

export const register = createAsyncThunk("register", async (user, { rejectWithValue }) => {
    try {
        const res = await axios.post("users", user)
        return res.data
    }
    catch (error) {
        console.log(error);
    }
})


