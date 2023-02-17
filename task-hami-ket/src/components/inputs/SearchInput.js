import React, { useContext } from "react";

import { CiSearch } from "react-icons/ci";
import { valueContext } from "../HomePages";

const SearchInput = () => {
  const { value, setValue } = useContext(valueContext);
  
  return (
    <div className="relative h-12">
      <input
        className="border w-full h-full pr-2 rounded-md outline-none focus:border-blue-500"
        type="text"
        placeholder="جستجو..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <CiSearch
        className="absolute text-gray-400 text-2xl left-2 top-3"
      />
    </div>
  );
};

export default SearchInput;
