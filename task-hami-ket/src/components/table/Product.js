import React, { useState } from "react";

import Pending from "./Pending";
import product from "../../images/product.avif";

const Product = ({
  productDetail,
  userName,
  quantity,
  price,
  sendPrice,
  stockStatus,
  create_time,
}) => {
  const [open, setOpen] = useState(false);
  switch (stockStatus) {
    case "1":
      stockStatus = "در انتظار تایید";
      break;
    case "2":
      stockStatus = "تایید شده";
      break;
    case "3":
      stockStatus = "رد شده";
      break;
    default:
      break;
  }

  const pendingHandler = () => {
    if (stockStatus === "در انتظار تایید") {
      setOpen(!open);
    }
  };

  let date = new Date(create_time);
  let fullYear = date.toLocaleDateString('fa-IR');
  return (
    <>
      <tr
        onClick={pendingHandler}
        className={`border-b font-bold text-gray-700 border-gray-300 duration-300 cursor-pointer ${
          open ? "bg-blue-200 hover:bg-blue-200" : " hover:bg-gray-100"
        }`}
      >
        <td className="flex items-center gap-5">
          <img className="w-14 rounded-[25%]" alt="product" src={product} />
          <h1>{productDetail.productName}</h1>
        </td>
        <td>{userName}</td>
        <td>{quantity}</td>
        <td className="text-green-600">{price.toLocaleString(3)} تومان</td>
        <td>{sendPrice}</td>
        <td>
          <h1
            className={`text-center rounded-lg font-bold py-1 text-xs w-20 ${
              stockStatus === "در انتظار تایید"
                ? "bg-yellow-100 text-yellow-600"
                : stockStatus === "تایید شده"
                ? "bg-green-200 text-green-600"
                : "bg-red-200 text-red-600"
            }`}
          >
            {stockStatus}
          </h1>
        </td>
        <td>
          {fullYear}
        </td>
      </tr>
      {open && (
        <Pending
          price={price}
          quantity={quantity}
          open={open}
          setOpen={setOpen}
        />
      )}
    </>
  );
};

export default Product;
