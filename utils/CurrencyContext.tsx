"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCurrencyRate } from "./getCurrencyRate";

interface CurrencyContextProps {
  rate: number;
  currencySymbol: string;
}

const CurrencyContext = createContext<CurrencyContextProps | undefined>(
  undefined
);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [rate, setRate] = useState<number>(1);
  const [currencySymbol, setCurrencySymbol] = useState<string>("GHS");

  useEffect(() => {
    const storedRate = localStorage.getItem("rate");

    getCurrencyRate("GHS").then((conversionRate) => {
      setRate(conversionRate);
      setCurrencySymbol("₵");
      localStorage.setItem("rate", String(conversionRate));
    });

    if (storedRate) {
      setRate(Number(storedRate));
    }
  }, []);

  return (
    <CurrencyContext.Provider value={{ rate, currencySymbol }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  } // throw error
  return context;
};
