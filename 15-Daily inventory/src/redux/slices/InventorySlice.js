// src/slices/inventorylice.js
import { createSlice } from '@reduxjs/toolkit';
import { addItem, deleteItem, fetchItems, updateUser } from "../api/inventory"
const InventorySlice = createSlice({
  name: 'inventory',
  initialState: {
    inventory: [],
    loading: false,
    loadingBut: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.loading = false;
        state.inventory = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.inventory.push(action.payload);
        state.inventory = action.payload.inventory;
     
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.inventory.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.inventory[index] = action.payload;
        }
        state.inventory = action.payload.inventory;
     
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.inventory = state.inventory.filter((user) => user.id !== action.payload);
      });
  },
});

export default InventorySlice.reducer;
