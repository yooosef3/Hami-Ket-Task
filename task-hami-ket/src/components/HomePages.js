import React, { createContext, useState } from "react";

import FilterInputs from "./inputs/FilterInputs";
import ProductsTable from "./table/ProductsTable";

export const valueContext = createContext();
export const statContext = createContext();
export const timeContext = createContext();

const HomePage = () => {
  const [value, setValue] = useState("");
  const [stat, setStat] = useState('4');
  const [time, setTime] = useState(1652222063545);
  return (
    <valueContext.Provider value={{ value, setValue }}>
      <statContext.Provider value={{ stat, setStat }}>
        <timeContext.Provider value={{time, setTime}}>
          <FilterInputs />
          <ProductsTable />
        </timeContext.Provider>
      </statContext.Provider>
    </valueContext.Provider>
  );
};

export default HomePage;
