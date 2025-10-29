import { useContext, createContext, useState } from "react";

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [selectedCurrency, setSelectedCurrency] = useState("BRL");

  function alterCurrency(currency) {
    setSelectedCurrency(currency);
    console.log(currency);
  }

  return (
    <CurrencyContext.Provider value={{ selectedCurrency, alterCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export const useCurrency = () => useContext(CurrencyContext);
