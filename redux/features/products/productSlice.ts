import type { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface ProductState {
  products: any;
  setProducts: any;
}

// Define the initial state using that type
const initialState: ProductState = {
  products: [],
  setProducts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<any>): any => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export const selectProduct = (state: RootState) => state.product;

export default productSlice.reducer;
