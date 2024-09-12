"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Button, Combobox, SelectList } from "@/components";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { Competitions } from "@/lib/axios/apiRequestTypes";
import { adminGetRequest } from "@/lib/axios/apiRequests";

type TProp = {
  selectCompetition(text: string): void;
};

export default function Header({ selectCompetition }: TProp) {
  const [selected, setSelected] = useState("");
  const {
    data: listData,
    isError,
    isLoading,
  } = useQuery(
    ["all-competitions"],
    () => adminGetRequest<Competitions>("competitions"),
    {
      staleTime: 20 * 60 * 60 * 1000,
      select: (data) => {
        return data.competitions.map((item) => {
          return { value: item.id, label: item.name };
        });
      },
    },
  );

  return (
    <div>
      <div className="relative mt-4 flex items-center gap-4">
        <h2 className="font-righteous text-2xl">Students</h2>
        <Link
          href={"/admin/students/register"}
          className="ml-auto flex h-[2.5rem] w-fit items-center justify-center gap-2 rounded-md bg-primary px-2 text-white transition-colors duration-150 hover:bg-[#0284c7] lg:hidden"
        >
          {" "}
          <PlusCircleIcon className="h-8 w-8" />
        </Link>
        <Link
          href={"/admin/students/register"}
          className="ml-auto hidden h-[2.5rem] w-fit items-center justify-center gap-2 rounded-md bg-primary px-2 text-white transition-colors duration-150 hover:bg-[#0284c7] lg:flex"
        >
          {" "}
          <PlusCircleIcon className="h-8 w-8" />
          Add Student
        </Link>
      </div>
      <div className="mt-2 flex items-center gap-2">
        <Combobox
          listData={listData ? listData : []}
          placeholderText="competitions"
          value={selected}
          setValue={setSelected}
        />
        <Button
          onClick={() => selectCompetition(selected)}
          className="h-[2.5rem]"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
