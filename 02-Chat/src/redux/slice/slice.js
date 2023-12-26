import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { createUser, deleteUser, editUser, findUserEmail, getAllUsers, login, searchUser, updatePassword } from "../api/users"
import { createFriends, getAllFriends } from "../api/friends";

const initialState = {
    loading: false,
    users: [],
    friends: [],
    people: [],
    user: null,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem("user")
            state.user = null
        }

    },

    extraReducers: builder => {

        /* ===================== Users ======================== */

        // Get All Users

        builder.addCase(getAllUsers.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAllUsers.fulfilled, (state, action) => {

            let user = JSON.parse(localStorage.getItem('user'));

            if (user) {
                state.user = state.users?.find((u) => u.id === user.id)
                state.people = action.payload.result.filter((f) => f.id !== user.id)
            } else {
                state.user = null
            }
            state.users = action.payload.result
            state.loading = false
        })
        builder.addCase(getAllUsers.rejected, (state, action) => {
            state.loading = false
        })

        // Create User

        builder.addCase(createUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createUser.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = false
        })

        // Edit User 

        builder.addCase(editUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(editUser.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(editUser.rejected, (state, action) => {
            state.loading = false
        })
        // update Password

        builder.addCase(updatePassword.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(updatePassword.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(updatePassword.rejected, (state, action) => {
            state.loading = false
        })

        // Delete User

        builder.addCase(deleteUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false
        })

        // Search User

        builder.addCase(searchUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(searchUser.fulfilled, (state, action) => {
            let { status } = action.payload
            if (status === 200) {
                state.users = action.payload.result
            } else {
                state.users = [...state.users]
            }
            state.loading = false
        })
        builder.addCase(searchUser.rejected, (state, action) => {
            state.loading = false
        })

        // Login 

        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
        })

        // Find User Email

        builder.addCase(findUserEmail.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(findUserEmail.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                console.log(status, "esgseges")
                toast.error(massage)
            } else {
                console.log(status, "fsefsef")
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(findUserEmail.rejected, (state, action) => {
            state.loading = false
        })

        /* ===================== Friends ======================== */

        // Get All Friends

        builder.addCase(getAllFriends.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getAllFriends.fulfilled, (state, action) => {
            state.friends = action.payload.result
            state.loading = false
        })
        builder.addCase(getAllFriends.rejected, (state, action) => {
            state.loading = false
        })

        // Create friends

        builder.addCase(createFriends.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(createFriends.fulfilled, (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        })
        builder.addCase(createFriends.rejected, (state, action) => {
            state.loading = false
        })

    }
})

export const { logout } = dataSlice.actions;
export default dataSlice.reducer