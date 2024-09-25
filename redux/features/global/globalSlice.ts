import type { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
export interface globalState {
  response: any;
  loading: any;
  action: any;
  searchText: string;
  searchedColumn: string;
  formValues: any;
  productView: boolean;
  productRating: any;
  productFilter: any;
  setting: any;
}

// Define the initial state using that type
const initialState: globalState = {
  response: {},
  loading: {},
  action: {},
  searchText: "",
  searchedColumn: "",
  formValues: {},
  productView: false,
  productRating: {},
  productFilter: {},
  setting: {},
};

export const globalSlice = createSlice({
  name: "global",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setResponse: (state, action: PayloadAction<any>): any => {
      state.response = action.payload;
    },

    setLoading: (state, action: PayloadAction<any>): any => {
      state.loading = action.payload;
    },

    setAction: (state, action: PayloadAction<any>): any => {
      state.action = action.payload;
    },
    setSearchText: (state, action: PayloadAction<any>): any => {
      state.searchText = action.payload;
    },
    setSearchedColumn: (state, action: PayloadAction<any>): any => {
      state.searchedColumn = action.payload;
    },
    setFormValues: (state, action: PayloadAction<any>): any => {
      state.formValues = action.payload;
    },
    setProductView: (state, action: PayloadAction<any>): any => {
      state.productView = action.payload;
    },
    setProductRating: (state, action: PayloadAction<any>): any => {
      state.productRating = action.payload;
    },

    setProductFilter: (state, action: PayloadAction<any>): any => {
      state.productFilter = action.payload;
    },
    setSetting: (state, action: PayloadAction<any>): any => {
      state.setting = action.payload;
    },
  },
});

export const {
  setResponse,
  setLoading,
  setAction,
  setSearchText,
  setSearchedColumn,
  setFormValues,
  setProductRating,
  setProductView,
  setProductFilter,
  setSetting
} = globalSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectGlobal = (state: RootState) => state.global;

export default globalSlice.reducer;
