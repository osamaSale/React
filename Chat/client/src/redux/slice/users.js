import { createSlice } from "@reduxjs/toolkit"
import { getAllUsers, singleUser, login, register } from "../api/users"
import { toast } from "react-toastify";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        user: [],
        loading: false,
        users: []
    },
    extraReducers: {
        // =======================  Single User  =========================== //
        [singleUser.pending]: (state) => {
            state.loading = true
        },
        [singleUser.fulfilled]: (state, action) => {
            state.loading = false
            state.user = action.payload?.result
        },
        [singleUser.rejected]: (state) => {
            state.loading = false
        },
        // =======================  List Users   =========================== //
        [getAllUsers.pending]: (state) => {
            state.loading = true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload.result
            state.loading = false
        },
        [getAllUsers.rejected]: (state) => {
            state.loading = false
        },

        // =======================  Login   =========================== //

        [login.pending]: (state) => {
            state.loading = true
        },
        [login.fulfilled]: (state, action) => {
            const { status, message, result } = action.payload
            // IF Empty Email And Password
            if (status === 422) {
                toast.error(message)
                //  invalid Email And Password
            } else if (status === 201) {
                toast.error(message)
            } else {
                state.user = localStorage.setItem("user", JSON.stringify(result))
                toast(message)
                state.user = JSON.parse(localStorage.getItem('user'));
                state.loading = false
            }
        },
        [login.rejected]: (state) => {
            state.loading = false
        },

        // =======================  Register   =========================== //

        [register.pending]: (state) => {
            state.loading = true
        },
        [register.fulfilled]: (state, action) => {
            const { status, message, result } = action.payload
            if (status === 422) {
                toast.error(message)
            } else if (status === 201) {
                toast.error(message)
            } else {
                state.user = localStorage.setItem("user", JSON.stringify(result));
                toast.error(message)
                state.user = JSON.parse(localStorage.getItem('user'));
            }
            state.loading = true
        },
        [register.rejected]: (state) => {
            state.loading = false
        },
    }

})



export default usersSlice.reducer