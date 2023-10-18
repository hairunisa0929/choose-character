import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataCheckout: {},
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    checkoutBooking: (state, action) => {
      state.dataCheckout = action.payload;
    },
  },
});

export const { checkoutBooking } = checkoutSlice.actions;

export default checkoutSlice.reducer;
