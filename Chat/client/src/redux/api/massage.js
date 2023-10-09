import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const addMessages = createAsyncThunk("addMessages", async (massage, { rejectWithValue, getState },) => {
    try {
        const res = await axios.post("massage", massage)
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
})
export const getMessages = createAsyncThunk("getMessages", async (chatId, { rejectWithValue, getState },) => {
    try {
        const res = await axios.get(`massage/${chatId}`)
        return res.data;
    }
    catch (error) {
        console.log(error);
    }
})