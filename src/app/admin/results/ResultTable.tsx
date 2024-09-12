"use client";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import { getAllStudents } from "@/lib/axios/testRequests";
import { Loader } from "@/components";
import React, { useState } from "react";
import { StudentData } from "../students/StudentTypes";

type Student = {
  name: string;
  regNo: string;
  reading: number;
  writing: number;
  mathematics: number;
  totalScore: number;
  position: number;
};

export default function ResultTable() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, isError } = useQuery(["results"], getAllStudents, {
    select: React.useCallback((data: StudentData[]) => {
      return data.map((item: StudentData) => {
        return {
          name: item.name,
          regNo: item.regNo,
          mathematics: item.result.maths,
          reading: item.result.reading,
          writing: item.result.writing,
          totalScore: item.result.totalScore,
          position: item.result.position,
        };
      });
    }, []),
  });

  const columnHelper = createColumnHelper<Student>();
  const columns = [
    columnHelper.accessor("name", {
      header: "Name",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("regNo", {
      header: "Reg No",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("reading", {
      header: "Reading",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("writing", {
      header: "Writing",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("mathematics", {
      header: "Maths",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("totalScore", {
      header: "Total",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("position", {
      header: "Pos",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: data as Student[],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: searchValue,
    },
    onGlobalFilterChange: setSearchValue,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  if (isError)
    return <h2 className="mt-4 text-center">Error trying to get records</h2>;

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="search anything"
        className="h-[2.5rem] border pl-2 outline-none"
      />
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border-spacing-4 border border-primary text-center">
          <thead className="bg-primary text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="whitespace-nowrap px-2 py-1 ">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border border-primary hover:bg-disabled"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="whitespace-nowrap px-2 py-1 text-sm"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
