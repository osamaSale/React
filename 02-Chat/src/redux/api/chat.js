import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// Create Chat
export const createChat = createAsyncThunk("createChat", async (chat, { rejectWithValue, }) => {
    const res = await axios.post("chat", chat)
    return res.data
})
/* // All Users
export const getAllUsers = createAsyncThunk("getAllUsers", async (arg, { rejectWithValue, }) => {
    const res = await axios.get("users")
    return res.data
}) */