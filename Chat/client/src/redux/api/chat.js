import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const createChat = createAsyncThunk("createChat", async (chat, { rejectWithValue, getState },) => {
    try {
        const res = await axios.post("chat", chat)
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
})
export const userChats = createAsyncThunk("userChats", async (userId, { rejectWithValue }) => {
    try {
        const user = JSON.parse(localStorage.getItem('user'));
        const res = await axios.get(`chat/single/${user._id}`)
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
})

export const singleUserChat = createAsyncThunk("singleUserChat", async (id, { rejectWithValue }) => {
    try {
        const res = await axios.get(`/users/single/${id}`)
        return res.data
    }
    catch (error) {
        console.log(error);
    }
})
