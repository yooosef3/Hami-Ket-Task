import CountInput from "./CountInput";
import DateInput from "./DateInput";
import ProductsFilter from "./ProductsFilter";
import React from "react";
import SearchInput from "./SearchInput";

const FilterInputs = () => {
  return (
    <div className="flex border-b border-gray-300 pb-16 flex-col gap-4 md:flex-row md:justify-between md:gap-20">
      <div className="flex flex-col gap-4 md:w-[60%]">
        <SearchInput />
        <div className="flex flex-col gap-4 md:flex-row">
          <DateInput />
          <ProductsFilter />
        </div>
      </div>
      <CountInput />
    </div>
  );
};

export default FilterInputs;
