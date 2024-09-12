"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { getStudents } from "@/lib/axios/requests";
import { StudentData } from "../../students/StudentTypes";
import { Loader } from "@/components";

type StudentType = {
  name: string;
  regNo: string;
  email: string;
  scienceOrArt: "Science" | "Art";
  level: "Junior" | "Senior" | "Graduated";
  phoneNumber: string;
};

type StudentTableProps = {
  competitionId: string;
};

const columnHelper = createColumnHelper<StudentType>();
const columns = [
  columnHelper.accessor("name", {
    header: "Name",
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
  columnHelper.accessor("phoneNumber", {
    header: "Phone",
    cell: (info) => info.getValue(),
  }),
];

export default function StudentsTable({ competitionId }: StudentTableProps) {
  const { data, isLoading, isError } = useQuery(
    [competitionId, "competition-students"],
    () => getStudents(competitionId),
    {
      select: (data) => {
        return data.data.students.map((student) => {
          const {
            lastName,
            firstName,
            email,
            regNo,
            phoneNumber,
            scienceOrArt,
            level,
          } = student;
          return {
            name: `${firstName} ${lastName}`,
            email,
            regNo,
            phoneNumber,
            scienceOrArt,
            level,
          };
        });
      },
    },
  );

  const table = useReactTable({
    data: data as StudentType[],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    // state: {
    //   globalFilter: searchValue,
    // },
    // onGlobalFilterChange: setSearchValue,
  });

  //   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     setSearchValue(e.target.value);
  //   };

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
