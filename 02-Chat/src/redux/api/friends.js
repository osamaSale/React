import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


// All friends
export const getAllFriends = createAsyncThunk("getAllFriends", async (arg, { rejectWithValue, }) => {
    const res = await axios.get("friends")
    return res.data
})




// Create friends
export const createFriends = createAsyncThunk("createFriends", async (friend, { rejectWithValue }) => {
    const res = await axios.post("friends", friend)
    return res.data
})