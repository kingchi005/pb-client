"use client";
import React from "react";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SchoolTable from "./SchoolTable";

export default function Page() {
  return (
    <div>
      <div>
        <div className="relative mt-4 flex items-center gap-4">
          <h2 className="font-righteous text-2xl">Schools</h2>
          <Link
            href={"/admin/schools/create"}
            className="ml-auto flex h-[2.5rem] w-fit items-center justify-center gap-2 rounded-md bg-primary px-2 text-white transition-colors duration-150 hover:bg-[#0284c7] lg:hidden"
          >
            <PlusCircleIcon className="h-8 w-8" />
          </Link>
          <Link
            href={"/admin/schools/create"}
            className="ml-auto hidden h-[2.5rem] w-fit items-center justify-center gap-2 rounded-md bg-primary px-2 text-white transition-colors duration-150 hover:bg-[#0284c7] lg:flex"
          >
            <PlusCircleIcon className="h-8 w-8" />
            Add School
          </Link>
        </div>
      </div>

      <SchoolTable />
    </div>
  );
}
