import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      console.log(product);
      const cart = state;

      const pId = findProduct(cart, product.productId);
      const result = !pId ? [...state, action.payload] : [...state];
      return result;
    },
    removeItem: (state, action) => {
      return state.filter((i) => i.productId !== action.payload.productId);
    },
  },
});

const findProduct = (cart, pId) => {
  return cart.some((p) => p.productId === pId);
};

export const { actions, reducer } = CartSlice;
export const { addItem, removeItem } = actions;
