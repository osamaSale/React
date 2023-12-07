import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
import { createUser, deleteUser, editUser, getAllUsers, login, searchUser } from "../api/users"
import { createBrand, deleteBrand, editBrand, getAllBrands, searchBrand } from "../api/brands";
import { createDevices, deleteDevices, editDevices, getAllDevices, searchDevices } from "../api/devices";
import { createProducts, deleteProducts, editProducts, getAllProducts, searchProducts } from "../api/products";
import { createContact, deleteContact, editContact, getAllContact, searchContact } from "../api/contact";
import { createNews, deleteNews, editNews, getAllNews, searchNews } from "../api/news";
import { createWishlist, deleteWishlist, editWishlist, getAllWishlist, searchWishlist } from "../api/wishlist";
import { createCart, deleteCart, editCart, getAllCarts, searchCarts } from "../api/carts";
import { createOrder, editOrder, getAllOrders, deleteOrder } from "../api/orders";
export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        loading: false,
        users: [],
        brands: [],
        devices: [],
        products: [],
        contact: [],
        news: [],
        wishlist: [],
        carts: [],
        orders: [],
        user: null,
    },
    reducers :{
        logout: (state, action) => {
           localStorage.removeItem("user")
           state.user  = null
        }
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
            let user = JSON.parse(localStorage.getItem('user'));
            if (user) {
                state.user = state.users?.find((u) => u.id === user.id)
            } else {
                state.user = null
            }
            state.users = action.payload.result
        },
        [getAllUsers.rejected]: (state) => {
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
        // =======================  Login   =========================== //

        [login.pending]: (state) => {
            state.loading = true
        },
        [login.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [login.rejected]: (state) => {
            state.loading = false
        },

        /* ============================== Search user  =============================== */

        [searchUser.pending]: (state) => {
            state.loading = false
        },
        [searchUser.fulfilled]: (state, action) => {
            let { status } = action.payload
            if (status === 200) {
                state.users = action.payload.result
            } else {
                state.users = [...state.users]
            }
        },
        [searchUser.rejected]: (state) => {
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
        /* ============================== Search brands  =============================== */

        [searchBrand.pending]: (state) => {
            state.loading = false
        },
        [searchBrand.fulfilled]: (state, action) => {
            let { status } = action.payload
            if (status === 200) {
                state.brands = action.payload.result
            } else {
                state.brands = [...state.brands]
            }
        },
        [searchBrand.rejected]: (state) => {
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
        /* ============================== Search Devices  =============================== */

        [searchDevices.pending]: (state) => {
            state.loading = false
        },
        [searchDevices.fulfilled]: (state, action) => {
            let { status } = action.payload
            if (status === 200) {
                state.devices = action.payload.result
            } else {
                state.devices = [...state.devices]
            }
        },
        [searchDevices.rejected]: (state) => {
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
        /* ============================== Search Product  =============================== */

        [searchProducts.pending]: (state) => {
            state.loading = false
        },
        [searchProducts.fulfilled]: (state, action) => {
            let { status } = action.payload
            if (status === 200) {
                state.products = action.payload.result
            } else {
                state.products = [...state.products]
            }
        },
        [searchProducts.rejected]: (state) => {
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

        /* ============================== Search Contact  =============================== */

        [searchContact.pending]: (state) => {
            state.loading = false
        },
        [searchContact.fulfilled]: (state, action) => {
            let { status } = action.payload
            if (status === 200) {
                state.contact = action.payload.result
            } else {
                state.contact = [...state.contact]
            }
        },
        [searchContact.rejected]: (state) => {
            state.loading = false
        },

        /* 
        ---------------------------------------------
        End Contact
       --------------------------------------------- 
        */
        /* 
         ---------------------------------------------
         Start News
         --------------------------------------------- 
         */

        /* ============================== Get All News   =============================== */

        [getAllNews.pending]: (state) => {
            state.loading = true
        },
        [getAllNews.fulfilled]: (state, action) => {
            state.news = action.payload.result
        },
        [getAllNews.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Create News   =============================== */

        [createNews.pending]: (state) => {
            state.loading = true
        },
        [createNews.fulfilled]: (state, action) => {
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
        [createNews.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Edit news   =============================== */

        [editNews.pending]: (state) => {
            state.loading = true
        },
        [editNews.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [editNews.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Delete news   =============================== */

        [deleteNews.pending]: (state) => {
            state.loading = true
        },
        [deleteNews.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [deleteNews.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Search news  =============================== */

        [searchNews.pending]: (state) => {
            state.loading = false
        },
        [searchNews.fulfilled]: (state, action) => {
            let { status } = action.payload
            if (status === 200) {
                state.news = action.payload.result
            } else {
                state.news = [...state.news]
            }
        },
        [searchNews.rejected]: (state) => {
            state.loading = false
        },

        /* 
        ---------------------------------------------
        End Contact
        --------------------------------------------- 
        */
        /* 
         ---------------------------------------------
         Start wishlist
         --------------------------------------------- 
         */

        /* ============================== Get All wishlist   =============================== */

        [getAllWishlist.pending]: (state) => {
            state.loading = true
        },
        [getAllWishlist.fulfilled]: (state, action) => {
            state.wishlist = action.payload.result
        },
        [getAllWishlist.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Create Wishlist   =============================== */

        [createWishlist.pending]: (state) => {
            state.loading = true
        },
        [createWishlist.fulfilled]: (state, action) => {
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
        [createWishlist.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Edit Wishlist   =============================== */

        [editWishlist.pending]: (state) => {
            state.loading = true
        },
        [editWishlist.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [editWishlist.rejected]: (state) => {
            state.loading = false
        },

        /* ============================== Delete Wishlist   =============================== */

        [deleteWishlist.pending]: (state) => {
            state.loading = true
        },
        [deleteWishlist.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [deleteWishlist.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Search wishlist  =============================== */

        [searchWishlist.pending]: (state) => {
            state.loading = false
        },
        [searchWishlist.fulfilled]: (state, action) => {
            let { status } = action.payload
            if (status === 200) {
                state.wishlist = action.payload.result
            } else {
                state.wishlist = [...state.wishlist]
            }
        },
        [searchWishlist.rejected]: (state) => {
            state.loading = false
        },
        /* 
       ---------------------------------------------
       End wishlist
       --------------------------------------------- 
       */
        /* 
         ---------------------------------------------
         Start Carts
         --------------------------------------------- 
         */

        /* ============================== Get All Carts   =============================== */

        [getAllCarts.pending]: (state) => {
            state.loading = true
        },
        [getAllCarts.fulfilled]: (state, action) => {
            state.carts = action.payload.result
        },
        [getAllCarts.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Create Cart   =============================== */

        [createCart.pending]: (state) => {
            state.loading = true
        },
        [createCart.fulfilled]: (state, action) => {
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
        [createCart.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Edit Cart   =============================== */

        [editCart.pending]: (state) => {
            state.loading = true
        },
        [editCart.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [editCart.rejected]: (state) => {
            state.loading = false
        },

        /* ============================== Delete Cart   =============================== */

        [deleteCart.pending]: (state) => {
            state.loading = true
        },
        [deleteCart.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [deleteCart.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Search Cart  =============================== */

        [searchCarts.pending]: (state) => {
            state.loading = false
        },
        [searchCarts.fulfilled]: (state, action) => {
            let { status } = action.payload
            if (status === 200) {
                state.carts = action.payload.result
            } else {
                state.carts = [...state.carts]
            }
        },
        [searchCarts.rejected]: (state) => {
            state.loading = false
        },
        /* 
        ---------------------------------------------
        End Carts
        --------------------------------------------- 
        */
        /* 
         ---------------------------------------------
         Start Orders
         --------------------------------------------- 
        */

        /* ============================== Get All Orders   =============================== */

        [getAllOrders.pending]: (state) => {
            state.loading = true
        },
        [getAllOrders.fulfilled]: (state, action) => {
            state.orders = action.payload.result
        },
        [getAllOrders.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Create Order   =============================== */

        [createOrder.pending]: (state) => {
            state.loading = true
        },
        [createOrder.fulfilled]: (state, action) => {
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
        [createOrder.rejected]: (state) => {
            state.loading = false
        },
        /* ============================== Edit Order   =============================== */

        [editOrder.pending]: (state) => {
            state.loading = true
        },
        [editOrder.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [editOrder.rejected]: (state) => {
            state.loading = false
        },

        /* ============================== Delete Wishlist   =============================== */

        [deleteOrder.pending]: (state) => {
            state.loading = true
        },
        [deleteOrder.fulfilled]: (state, action) => {
            const { status, massage } = action.payload
            if (status === 200) {
                toast.error(massage)
            } else {
                toast.error(massage)
            }
            state.loading = false
        },
        [deleteOrder.rejected]: (state) => {
            state.loading = false
        },
    }

})

export const { logout } = dataSlice.actions;
export default dataSlice.reducer