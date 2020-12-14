import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const currency = createSlice({
  name: "ambassashop/currency",
  initialState,
  reducers: {
    setCurrency: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setCurrency } = currency.actions;
export default currency.reducer;
