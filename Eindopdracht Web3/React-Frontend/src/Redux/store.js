import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as productReducer } from "./Slices/ProductSlice";
import { cartReducer } from "./Slices/Cart/cartReducer";

const rootReducer = combineReducers({
  producten: productReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
