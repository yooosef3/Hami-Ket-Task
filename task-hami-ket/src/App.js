import "./styles/index.css";

import { createContext, useEffect, useState } from "react";

import HomePages from "./components/HomePages";
import data from "./data.json";

export const productsContext = createContext();
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <productsContext.Provider value={products}>
      <HomePages />
    </productsContext.Provider>
  );
}

export default App;
