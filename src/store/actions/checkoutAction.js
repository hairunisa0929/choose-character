import { CHECKOUT_BOOKING } from "../types";

export const checkoutBooking = (payload) => ({
  type: CHECKOUT_BOOKING,
  payload,
});
