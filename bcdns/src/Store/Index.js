import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./Log";

const store = configureStore({
  reducer: { log: logReducer },
});

export default store;