import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as productReducer } from "./Slices/ProductSlice";

const rootReducer = combineReducers({
  producten: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
