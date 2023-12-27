import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isError: false,
  isLoader: false,
};

export const cartSlice = createSlice({
  
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.isError = false;
      state.isLoader = false;
      const existingItem = state.data.find(
        (data) => data.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const increase = state.data.find((item) => item.id == action.payload.id);
      if (increase) {
        increase.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const decrease = state.data.find((item) => item.id === action.payload.id);
      if (decrease && decrease.quantity > 1) {
        decrease.quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((ele) => ele.id !== action.payload.id);
    },
  },
});

export const { addItem, increaseQuantity, decreaseQuantity, removeItem } =
  cartSlice.actions;

export default cartSlice.reducer;
