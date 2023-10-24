import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authSlice";
import checkoutSlice from "./reducers/checkoutSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    checkout: checkoutSlice,
  },
});

export default store;
