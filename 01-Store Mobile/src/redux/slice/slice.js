import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { createUser, deleteUser, editUser, getAllUsers, singleUser } from "../api/users"
import { createBrand, deleteBrand, editBrand, getAllBrands } from "../api/brands";
import { createDevices, deleteDevices, editDevices, getAllDevices } from "../api/devices";
import { createProducts, deleteProducts, editProducts, getAllProducts } from "../api/products";
import { createContact, deleteContact, editContact, getAllContact } from "../api/contact";
export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        users: [],
        brands: [],
        devices: [],
        products: [],
        contact: [],
        user: null,
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
        /* ============================== Single User   =============================== */

        [singleUser.pending]: (state) => {
            state.loading = true
        },
        [singleUser.fulfilled]: (state, action) => {
            /*   state.user = action.payload.result[0] */
        },
        [singleUser.rejected]: (state) => {
            state.loading = false
        },

        /* ============================== Create User   =============================== */

        [createUser.pending]: (state) => {
            state.loading = true
        },
        [createUser.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 422) {
                toast.error(massage)
            } else if (status === 201) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [createUser.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Edit User   =============================== */

        [editUser.pending]: (state) => {
            state.loading = true
        },
        [editUser.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [editUser.rejected]: (state) => {
            state.loading = false
        },
        // =======================  Delete User   =========================== //

        [deleteUser.pending]: (state) => {
            state.loading = true
        },
        [deleteUser.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [deleteUser.rejected]: (state) => {
            state.loading = false
        },


        /* 
      ---------------------------------------------
      End Users
      --------------------------------------------- 
      */
        /* 
      ---------------------------------------------
      Start Brand
      --------------------------------------------- 
      */

        /* ============================== Get All Brand   =============================== */

        [getAllBrands.pending]: (state) => {
            state.loading = true
        },
        [getAllBrands.fulfilled]: (state, action) => {
            state.brands = action.payload.result
        },
        [getAllBrands.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Create Brand   =============================== */

        [createBrand.pending]: (state) => {
            state.loading = true
        },
        [createBrand.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 422) {
                toast.error(massage)
            } else if (status === 201) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [createBrand.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Edit Brand   =============================== */

        [editBrand.pending]: (state) => {
            state.loading = true
        },
        [editBrand.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [editBrand.rejected]: (state) => {
            state.loading = false
        },

        /* ============================== Delete Brand   =============================== */
        [deleteBrand.pending]: (state) => {
            state.loading = true
        },
        [deleteBrand.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [deleteBrand.rejected]: (state) => {
            state.loading = false
        },

        /* 
    ---------------------------------------------
    End Brands
    --------------------------------------------- 
    */
        /* 
      ---------------------------------------------
      Start Devices
      --------------------------------------------- 
      */

        /* ============================== Get All Devices   =============================== */

        [getAllDevices.pending]: (state) => {
            state.loading = true
        },
        [getAllDevices.fulfilled]: (state, action) => {
            state.devices = action.payload.result
        },
        [getAllDevices.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Create Devices   =============================== */

        [createDevices.pending]: (state) => {
            state.loading = true
        },
        [createDevices.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 422) {
                toast.error(massage)
            } else if (status === 201) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [createDevices.rejected]: (state) => {
            state.loading = false
        },

        /* ============================== Edit Devices   =============================== */

        [editDevices.pending]: (state) => {
            state.loading = true
        },
        [editDevices.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [editDevices.rejected]: (state) => {
            state.loading = false
        },

        /* ============================== Delete Devices   =============================== */

        [deleteDevices.pending]: (state) => {
            state.loading = true
        },
        [deleteDevices.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [deleteDevices.rejected]: (state) => {
            state.loading = false
        },

        /* 
        ---------------------------------------------
        End Devices
       --------------------------------------------- 
       */
        /* 
         ---------------------------------------------
         Start Products
         --------------------------------------------- 
         */
        /* ============================== Get All Products   =============================== */

        [getAllProducts.pending]: (state) => {
            state.loading = true
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.products = action.payload.result
        },
        [getAllProducts.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Create Products   =============================== */

        [createProducts.pending]: (state) => {
            state.loading = true
        },
        [createProducts.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 422) {
                toast.error(massage)
            } else if (status === 201) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [createProducts.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Edit Products   =============================== */

        [editProducts.pending]: (state) => {
            state.loading = true
        },
        [editProducts.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [editProducts.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Delete Products   =============================== */

        [deleteProducts.pending]: (state) => {
            state.loading = true
        },
        [deleteProducts.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [deleteProducts.rejected]: (state) => {
            state.loading = false
        },

            /* 
    ---------------------------------------------
    End Brands
    --------------------------------------------- 
    */
        /* 
      ---------------------------------------------
      Start Devices
      --------------------------------------------- 
      */

        /* ============================== Get All Devices   =============================== */

        [getAllDevices.pending]: (state) => {
            state.loading = true
        },
        [getAllDevices.fulfilled]: (state, action) => {
            state.devices = action.payload.result
        },
        [getAllDevices.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Create Devices   =============================== */

        [createDevices.pending]: (state) => {
            state.loading = true
        },
        [createDevices.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 422) {
                toast.error(massage)
            } else if (status === 201) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [createDevices.rejected]: (state) => {
            state.loading = false
        },

        /* ============================== Edit Devices   =============================== */

        [editDevices.pending]: (state) => {
            state.loading = true
        },
        [editDevices.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [editDevices.rejected]: (state) => {
            state.loading = false
        },

        /* ============================== Delete Devices   =============================== */

        [deleteDevices.pending]: (state) => {
            state.loading = true
        },
        [deleteDevices.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [deleteDevices.rejected]: (state) => {
            state.loading = false
        },

        /* 
        ---------------------------------------------
        End Products
       --------------------------------------------- 
       */
        /* 
         ---------------------------------------------
         Start Contact
         --------------------------------------------- 
         */
        /* ============================== Get All Contact   =============================== */

        [getAllContact.pending]: (state) => {
            state.loading = true
        },
        [getAllContact.fulfilled]: (state, action) => {
            state.contact = action.payload.result
        },
        [getAllContact.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Create Contact   =============================== */

        [createContact.pending]: (state) => {
            state.loading = true
        },
        [createContact.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 422) {
                toast.error(massage)
            } else if (status === 201) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [createContact.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Edit Contact   =============================== */

        [editContact.pending]: (state) => {
            state.loading = true
        },
        [editContact.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [editContact.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Delete Contact   =============================== */

        [deleteContact.pending]: (state) => {
            state.loading = true
        },
        [deleteContact.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [deleteContact.rejected]: (state) => {
            state.loading = false
        },
    }
})


export default dataSlice.reducer