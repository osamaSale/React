import { configureStore } from "@reduxjs/toolkit"
import usersSlice from "./slice/users"
import chatsSlice from "./slice/chat"
const store = configureStore({
    reducer: {
        users: usersSlice,
        chats : chatsSlice
    }
})
export default store