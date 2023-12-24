import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { createUser, deleteUser, editUser, getAllUsers, login, searchUser, updatePassword } from "../api/users"

const initialState = {
    loading: false,
    users: [],
    user: null,
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem("user")
            state.user = null
        },
        descending: (state, action) => {
            state.products = state.products.sort((a, b) =>
                a.name < b.name ? 1 : -1,
            );
        },
        ascending: (state, action) => {
            state.products = state.products.sort((a, b) =>
                a.name > b.name ? 1 : -1,
            );
        },
        lowestPrice: (state, action) => {
            state.products = state.products.sort((a, b) => (a.price > b.price) ? 1 : -1)
        },
        highestPrice: (state, action) => {

            state.products = state.products.sort((a, b) => (a.price < b.price) ? 1 : -1)
        },
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
            } else {
                state.user = null
            }
           
            state.users = action.payload.result
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

       


       
    }
})

export const { logout, descending, ascending, lowestPrice, highestPrice } = dataSlice.actions;
export default dataSlice.reducer