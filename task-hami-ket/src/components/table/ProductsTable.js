import React, { useContext } from "react";
import { statContext, timeContext, valueContext } from "../HomePages";

import Product from "./Product";
import { motion } from "framer-motion";
import { productsContext } from "../../App";

const ProductsTable = () => {
  const products = useContext(productsContext);
  const { value } = useContext(valueContext);
  const { time } = useContext(timeContext);
  const { stat } = useContext(statContext);

  let searched = products;

  if (value !== "") {
    searched = searched.filter((product) =>
      product.productDetail.productName.includes(value)
    );
  }


  if (stat !== "4") {
    searched = searched.filter((product) => product.stockStatus === stat);
  }
  return (
    <motion.div
      initial={{ opacity: 0, transform: "translateY(70%)" }}
      whileInView={{ opacity: 1, transform: "translateY(0%)" }}
      transition={{ duration: 0.9 }}
      className="w-[100%] mt-14 shadow-xl overflow-auto"
    >
      <table className="table-auto w-[1300px]">
        <thead className="bg-gray-300">
          <tr className="text-right text-gray-500">
            <th className="py-2 pr-4">کالا</th>
            <th>خریدار</th>
            <th>تعداد</th>
            <th>قیمت</th>
            <th>هزینه ارسال</th>
            <th>وضعیت</th>
            <th>تاریخ</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {searched.map((product) => (
            <Product key={product.id} {...product}  />
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default ProductsTable;