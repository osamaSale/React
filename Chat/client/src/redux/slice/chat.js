import { createSlice } from "@reduxjs/toolkit"
import { userChats, createChat } from "../api/chat"

export const chatsSlice = createSlice({
    name: "chats",
    initialState: {
        loading: false,
        chats: []
    },
    extraReducers: {
        // =======================  Users chat   ============================ //
        [userChats.pending]: (state) => {
            state.loading = true
        },
        [userChats.fulfilled]: (state, action) => {
            state.chats = action.payload?.result
            state.loading = false
        },
        [userChats.rejected]: (state) => {
            state.loading = false
        },
        // =======================  Create  chat   ============================ //
        [createChat.pending]: (state) => {
            state.loading = true
        },
        [createChat.fulfilled]: (state, action) => {
            state.chats = [...state.chats, action.payload?.result]
            state.loading = false
        },
        [createChat.rejected]: (state) => {
            state.loading = false
        },
    }

})

export default chatsSlice.reducer