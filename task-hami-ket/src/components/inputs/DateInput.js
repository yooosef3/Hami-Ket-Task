import React, { useContext } from "react";

import { BsCalendar2Date } from "react-icons/bs";
import { timeContext } from "../HomePages";

const DateInput = () => {
  const {time, setTime} = useContext(timeContext);
  const dates = [
    { id: 1, date: "۱۴۰۱/۱۰/۷" , value: 1672222063545},
    { id: 2, date: "۱۴۰۱/۱۰/۱۰", value: 1672443432998},
    { id: 3, date: "۱۴۰۱/۱۰/۱۲", value: 1672663439468},
    { id: 4, date: "۱۴۰۱/۱۰/۱۵", value: 1672883439515},
  ];

  const handleChange = (e) => {
    setTime(e.target.value);
  };
  console.log(time);
  return (
    <div className="relative h-12 md:w-[50%]">
      <select value={time} onChange={handleChange} className="border text-gray-400 font-bold w-full h-full pr-5 rounded-md outline-none focus:border-blue-500">
        {dates.map((item) => (
          <option value={item.value} key={item.id}>
            {item.date}
          </option>
        ))}
      </select>

      <BsCalendar2Date className="absolute text-2xl left-2 text-gray-500 top-3" />
    </div>
  );
};

export default DateInput;
