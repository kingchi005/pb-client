import { Loader } from "@/components";
import { School } from "@/lib/axios/apiRequestTypes";
import { adminGetRequest } from "@/lib/axios/apiRequests";
import { getSchools } from "@/lib/axios/requests";
import { useQuery } from "@tanstack/react-query";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";

const schools: School[] = [
  { id: "1", name: "Sue Spencer", students: 58 },
  { id: "2", name: "Cynthia Lawson", students: 58 },
  { id: "3", name: "Georgie Powell", students: 74 },
  { id: "4", name: "Milton Payne", students: 14 },
];

export default function SchoolTable() {
  const { data, isLoading, isError } = useQuery(["all-schools"], getSchools);

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (isError)
    return <h2 className="mt-4 text-center">Error trying to get records</h2>;

  return (
    <div className=" mt-5 border-collapse border-spacing-4 rounded-md border border-primary">
      <ul className="flex flex-col flex-wrap gap-4 p-5">
        {data.data.schools &&
          data.data.schools.map(({ id, name, students }) => (
            <li
              key={id}
              className="flex justify-between rounded bg-blue-100 p-4 "
            >
              <span>{name}</span>
              <span>{students} students</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
