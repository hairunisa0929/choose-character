import { configureStore } from "@reduxjs/toolkit";
import checkoutSlice from "./reducers/checkoutSlice";

const store = configureStore({
  reducer: {
    checkout: checkoutSlice,
  },
});

export default store;