import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reducer as productReducer } from "./Slices/ProductSlice";
import { reducer as cartReducer } from "./Slices/CartSlice";
import { loadState, saveState } from "./loadedStateFromLocalStorage";
import { throttle } from "lodash";

const rootReducer = combineReducers({
  producten: productReducer,
  cart: cartReducer,
});

const loadedStateFromLocalStorage = loadState();
export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadedStateFromLocalStorage,
});

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);
