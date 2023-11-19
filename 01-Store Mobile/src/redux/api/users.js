import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getAllUsers = createAsyncThunk("getAllUsers", async (arg, { rejectWithValue, }) => {
    const res = await axios.get("users")
    return res.data
})

export const singleUser = createAsyncThunk("singleUser", async (arg, { rejectWithValue, }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await axios.get(`/users/single/${user.id}`)
    return res.data
})