import { createSlice } from "@reduxjs/toolkit"
/* import { toast } from "react-toastify"; */
import { getAllUsers, singleUser } from "../api/users"
export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        users: [],
        user: null
    },
    extraReducers: {
        /* 
          ---------------------------------------------
          Start Users
          --------------------------------------------- 
          */

        /* ============================== All  Users   =============================== */

        [getAllUsers.pending]: (state) => {
            state.loading = true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload.result
        },
        [getAllUsers.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== All  Users   =============================== */

        [singleUser.pending]: (state) => {
            state.loading = true
        },
        [singleUser.fulfilled]: (state, action) => {
            state.user = action.payload.result[0]
        },
        [singleUser.rejected]: (state) => {
            state.loading = false
        }
    }
})


export default dataSlice.reducer