import React, { useState } from "react";

const Pending = ({ open, setOpen, price, quantity }) => {
  const [priceValue, setPriceValue] = useState();
  const [count, setCount] = useState(0);
  const cancelHandler = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const updateHandler = (e)=> {
    e.preventDefault();
    console.log(`قیمت جدید: ${priceValue} موجودی جدید: ${count}`);
  }

  const decreaseHandler=()=> {
    if(!count <= 0) {
      setCount(count -1)
    } 
  }
  return (
    <tr className={`${open ? "h-20" : "h-0"}`}>
      <td colSpan={7}>
        <form className="flex justify-between py-5 px-4 items-end bg-slate-50 border-b border-gray-300">
          <div className="w-[65%] flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="flex flex-col flex-grow">
                <label
                  htmlFor="current-price"
                  className="font-bold text-slate-400 mb-1"
                >
                  قیمت فعلی
                </label>
                <input
                  disabled
                  id="current-price"
                  className="border h-12 text-gray-400 pr-2 font-bold border-gray-300 rounded-md outline-none focus:border-blue-600"
                  type="text"
                  value={`${price.toLocaleString(3)} تومان`}
                />
              </div>
              <div className="flex flex-col flex-grow">
                <label
                  htmlFor="new-price"
                  className="font-bold text-slate-400 mb-1"
                >
                  قیمت جدید
                </label>
                <input
                  id="new-price"
                  className="pr-2 font-bold border h-12 border-gray-300 rounded-md outline-none focus:border-blue-600"
                  type="text"
                  placeholder="تومان"
                  value={priceValue}
                  onChange={(e) => setPriceValue(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col flex-grow">
                <label
                  htmlFor="current-quantity"
                  className="font-bold text-slate-400 mb-1"
                >
                  موجودی فعلی
                </label>
                <input
                  disabled
                  id="current-quantity"
                  className="border font-bold pr-2 text-gray-400 h-12 border-gray-300 rounded-md outline-none focus:border-blue-600"
                  type="text"
                  value={quantity}
                />
              </div>
              <div className="flex flex-col w-[26%] flex-grow">
                <label
                  className="font-bold text-slate-400 mb-1"
                >
                  موجودی جدید
                </label>
                <div className="relative font-bold border h-12 border-gray-300 rounded-md ">
                  <div className="absolute font-bold text-lg inset-0 flex justify-between items-center px-3">
                    <span className="border rounded-lg px-1 text-gray-400 border-gray-400 hover:border-black hover:text-black duration-200 cursor-pointer" onClick={()=> setCount(count + 1)}>+</span>
                    <span>{count}</span>
                    <span className="border rounded-lg px-1 text-gray-400 border-gray-400 hover:border-black hover:text-black duration-200 cursor-pointer" onClick={decreaseHandler}>-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[15%] flex gap-5">
            <button onClick={updateHandler} className="bg-blue-500 text-white hover:bg-blue-600 duration-200 font-bold p-1 px-2 rounded-md">
              به روزرسانی
            </button>
            <button
              className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white duration-200 border border-blue-500 font-bold p-1 px-2 rounded-md"
              onClick={cancelHandler}
            >
              انصراف
            </button>
          </div>
        </form>
      </td>
    </tr>
  );
};

export default Pending;
