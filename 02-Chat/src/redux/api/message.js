import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// Create Massage
export const createMessage = createAsyncThunk("createMessage", async (chat, { rejectWithValue, }) => {
    const res = await axios.post("massage", chat)
    return res.data
})
// getMessages
export const getMessages = createAsyncThunk("getMessages", async (chatId, { rejectWithValue, }) => {
    const res = await axios.post(`/massage/${chatId}`)
    return res.data
})
