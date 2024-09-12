"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";

import { Avatar, Button, Loader } from "@/components";
import Image from "next/image";
import { PartialDetails, Student, Students } from "@/lib/axios/apiRequestTypes";
import { adminGetRequest } from "@/lib/axios/apiRequests";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type StudentTableProps = {
  competitionId?: string;
};

const columnHelper = createColumnHelper<PartialDetails<Student>>();
const columns = [
  columnHelper.accessor("passport", {
    header: "Photo",
    cell: (info) => (
      <Avatar
        imageUrl={info.getValue() as string}
        size="medium"
        alt="student photo"
      />
    ),
  }),

  columnHelper.accessor("lastName", {
    header: "Last Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("firstName", {
    header: "First Name",
    cell: (info) => info.getValue(),
  }),

  columnHelper.accessor("regNo", {
    header: "Reg No",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("email", {
    header: "Email",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("scienceOrArt", {
    header: "Class",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("level", {
    header: "Level",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("regNo", {
    header: "Action",
    cell: (info) => (
      <Link href={`/admin/students/${info.getValue()}`}>
        <Button className="h-[2rem]">View</Button>
      </Link>
    ),
  }),
];

export default function StudentsTable({ competitionId }: StudentTableProps) {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, isError } = useQuery(
    ["students", competitionId],
    () => adminGetRequest<Students>(`students/${competitionId}?page=1`),
  );

  // console.log(competitionId);

  const table = useReactTable({
    data: data?.students as Student[],
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

  if (!competitionId)
    return (
      <h2 className="mt-4 text-center">
        Please Select a competition to view registered students
      </h2>
    );

  if (isError)
    return <h2 className="mt-4 text-center">Error trying to get records</h2>;

  return (
    <div>
      <div className="border-gray relative flex h-[2.5rem] w-[2.5rem] items-center gap-1 rounded-md border px-2 md:w-fit ">
        <MagnifyingGlassIcon className=" h-6 w-6 text-secondary-gray" />
        <input
          type="search"
          placeholder="students"
          className="hidden h-full outline-none md:block"
          value={searchValue}
          onChange={handleInputChange}
        />
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse border-spacing-4 border border-primary text-center">
          <caption className="py-1 font-inter text-2xl font-semibold text-primary">
            Registered Students
          </caption>
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
                    className={`whitespace-nowrap px-2 py-2 text-sm `}
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
