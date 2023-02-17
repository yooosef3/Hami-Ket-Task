import React, { useContext } from "react";

import { statContext } from "../HomePages";

const ProductsFilter = () => {
  const {stat, setStat} = useContext(statContext);

  const status = [
    { id: 4, name: "همه کالاها" },
    { id: 3, name: "رد شده" },
    { id: 2, name: "تایید شده" },
    { id: 1, name: "در انتظار تایید" },
  ];

  const handleChange = (e) => {
    setStat(e.target.value);
  };
  return (
    <div className="relative h-12 md:w-[50%]">
      <select value={stat} onChange={handleChange} className="border w-full font-bold text-gray-500 h-full pr-2 rounded-md outline-none focus:border-blue-500">
        {status.map(item => 
            <option  value={item.id} key={item.id} className='text-left '>
                {item.name}
            </option>
        )}
      </select>
    </div>
  );
};

export default ProductsFilter;
