import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// Get Chat Group
export const getChatGroup = createAsyncThunk("getChatGroup", async (chat, { rejectWithValue, }) => {
    const res = await axios.get("chatGroup")
    return res.data
})
// Create Chat Group
export const createChatGroup = createAsyncThunk("crateChatGroup", async (chat, { rejectWithValue, }) => {
    const res = await axios.post("chatGroup", chat)
    return res.data
})


// Get Chat Group Users
export const getChatGroupUsers = createAsyncThunk("getChatGroupUsers", async (chat, { rejectWithValue, }) => {
    const res = await axios.get("chatGroupUsers")
    return res.data
})

// Create Chat Group Users
export const createChatGroupUsers = createAsyncThunk("chatGroupUsers", async (chat, { rejectWithValue, }) => {
    const res = await axios.post("chatGroupUsers", chat)
    return res.data
})


// Get Chat Group Message
export const getChatGroupMessage= createAsyncThunk("getChatGroupMessage", async (chat, { rejectWithValue, }) => {
    const res = await axios.get("chatGroupMessage")
    return res.data
})

// Create Chat Group Message
export const createChatGroupMessage = createAsyncThunk("createChatGroupMessage", async (chat, { rejectWithValue, }) => {
    const res = await axios.post("chatGroupMessage", chat)
    return res.data
})