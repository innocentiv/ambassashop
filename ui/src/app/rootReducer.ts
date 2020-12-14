import { combineReducers } from "@reduxjs/toolkit";
import currency from "../components/selectCurrency/slice";

export const rootReducer = combineReducers({
  currency,
});

export type RootState = ReturnType<typeof rootReducer>;
