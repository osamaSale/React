import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// Create Chat
export const createChat = createAsyncThunk("createChat", async (chat, { rejectWithValue, }) => {
    const res = await axios.post("chat", chat)
    return res.data
})
