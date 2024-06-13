import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./counterReducer";

const RootReducer = combineReducers({
  counter: counterReducer,
});

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>;
