// @ts-nocheck
"use client";

import React from "react";
import { getAdminIndex } from "@/lib/axios/requests";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@/components";

export default function Page() {
  const { data, isLoading, isError } = useQuery(["admin-index"], getAdminIndex);

  // console.log(data);

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  return (
    <div className="p-5">
      <div className="flex flex-row gap-5">
        <div className="mb-5 flex-1 items-center gap-5 space-y-2 rounded-lg bg-white p-4 shadow-md shadow-blue-300">
          <p className="text-sm text-gray-700">Number of Schools</p>
          <h2 className="text-5xl font-bold text-blue-600">
            {data?.data?.schools}
          </h2>
        </div>
        <div className="mb-5 flex-1 items-center gap-5 space-y-2 rounded-lg bg-white p-4 shadow-md shadow-blue-300">
          <p className="text-sm text-gray-700">Number of Students</p>
          <h2 className="text-5xl font-bold text-blue-600">
            {data?.data?.student}
          </h2>
        </div>
        <div className="mb-5 flex-1 items-center gap-5 space-y-2 rounded-lg bg-white p-4 shadow-md shadow-blue-300">
          <p className="text-sm text-gray-700">Number of Competition</p>
          <h2 className="text-5xl font-bold text-blue-600">
            {data?.data?.competition}
          </h2>
        </div>
      </div>
    </div>
  );
}
