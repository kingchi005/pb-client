"use client";
import React from "react";
import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function TimePicker({ dateValue, setDate, minDate }) {
  return (
    <>
      <div className="relative flex items-center border px-2">
        <Flatpickr
          value={dateValue}
          onChange={([date]) => setDate(date)}
          options={{
            dateFormat: "Y-m-d",
            disableMobile: true,
            minDate,
          }}
          className="text-gray h-[3rem] flex-1 bg-transparent outline-none"
        ></Flatpickr>
        <span className="">
          <CalendarIcon className="h-6 w-6 " />
        </span>
      </div>
    </>
  );
}
