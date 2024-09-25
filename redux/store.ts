import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import layoutSlice from "./features/layout/layoutSlice";
import globalSlice from "./features/global/globalSlice";
import cartSlice from "./features/cart/cartSlice";
import  productSlice  from "./features/products/productSlice";

export const store = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      layout: layoutSlice,
      global: globalSlice,
      cart: cartSlice,
      product: productSlice,
    },
  });
};

// Infer the type of store
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
