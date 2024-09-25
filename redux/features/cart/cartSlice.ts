import type { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface CartState {
  carts: any;
  setCarts: any;
}

// Define the initial state using that type
const initialState: CartState = {
  carts:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("carts") || "[]")
      : [],
  setCarts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<any>): any => {
      const { id } = action.payload;

      const existingProductIndex = state.carts.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (existingProductIndex !== -1) {
        state.carts[existingProductIndex].qty++;
      } else {
        state.carts.push({
          ...action.payload,
          productId: +id,
        });
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    clearCart: (state): any => {
      state.carts = [];
      localStorage.removeItem("carts");
    },

    incrementCart: (state, action: PayloadAction<any>): any => {
      const existingProductIndex = state.carts.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state.carts[existingProductIndex].qty++;
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },

    decrementCart: (state, action: PayloadAction<any>): any => {
      const existingProductIndex = state.carts.findIndex(
        (item: any) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state.carts[existingProductIndex].qty--;
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    removeCart: (state, action: PayloadAction<any>): any => {
      const findProduct = state.carts.find(
        (item: any) => item.id === action.payload.id
      );
      if (findProduct) {
        state.carts = state.carts.filter(
          (item: any) => item.id !== findProduct.id
        );
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
  },
});

export const { addCart, decrementCart, removeCart, incrementCart, clearCart } =
  cartSlice.actions;
export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
