import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
  const [dataCheckout, setDataCheckout] = useState({});

  const contextValue = {
    dataCheckout,
    setDataCheckout,
  };

  return (
    <CheckoutContext.Provider value={contextValue}>
      {children}
    </CheckoutContext.Provider>
  );
};
