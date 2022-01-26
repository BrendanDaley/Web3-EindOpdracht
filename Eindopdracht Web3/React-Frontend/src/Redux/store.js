import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as productReducer } from "./Slices/ProductSlice";
import { reducer as cartReducer } from "./Slices/CartSlice";

const rootReducer = combineReducers({
  producten: productReducer,
  cart: cartReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
