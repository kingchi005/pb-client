"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./Select";

type ListType = { id: string | number; name: string; value: string };

type SelectListProps = {
  value: string;
  setValue: (value: string) => void;
  list: ListType[] | undefined;
};

export default function SelectList({ value, setValue, list }: SelectListProps) {
  return (
    <div>
      <Select onValueChange={setValue} defaultValue={value}>
        <SelectTrigger className="h-[3rem]">
          <SelectValue placeholder="Select School" />
        </SelectTrigger>

        <SelectContent>
          {list?.map((item) => (
            <SelectItem key={item.id} value={item.value}>
              {item.name}
            </SelectItem>
          ))}
          {/* <SelectItem value="m@example.com">m@example.com</SelectItem>
          <SelectItem value="m@google.com">m@google.com</SelectItem>
          <SelectItem value="m@support.com">m@support.com</SelectItem> */}
        </SelectContent>
      </Select>
    </div>
  );
}
