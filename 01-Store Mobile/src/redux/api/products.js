import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

// All All Products
export const getAllProducts= createAsyncThunk("getAllProducts", async (arg, { rejectWithValue, }) => {
    const res = await axios.get("products")
    return res.data
})

// Create Products
export const createProducts = createAsyncThunk("createProducts", async (Product, { rejectWithValue }) => {
    const res = await axios.post("products", Product)
    return res.data
})

// Edit Products
export const editProducts = createAsyncThunk("editProducts", async (Product, { rejectWithValue }) => {
    const res = await axios.put(`products`, Product)
    return res.data
})

// Delete Products
export const deleteProducts = createAsyncThunk("deleteProducts", async (id, { rejectWithValue }) => {
    const res = await axios.delete(`products/${id}`)
    return res.data
})