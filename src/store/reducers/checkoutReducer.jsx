import { CHECKOUT_BOOKING } from "../types";

const initialState = {
  dataCheckout: null,
};

const checkoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      return {
        ...state,
        dataCheckout: action.payload,
      };
    default:
      return state;
  }
};

export default checkoutReducer;