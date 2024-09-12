"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Button, Loader } from "@/components";
import CompetitionsCard from "./CompetitionsCard";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { adminGetRequest } from "@/lib/axios/apiRequests";
import { Competitions } from "@/lib/axios/apiRequestTypes";

export default function Page() {
  const { data, isError, isLoading } = useQuery(
    ["all-competitions"],
    () => adminGetRequest<Competitions>("competitions"),
    { staleTime: 20 * 60 * 60 * 1000 },
  );

  return (
    <div>
      <div className="flex items-center py-1">
        <h2 className="mt-2 font-righteous text-2xl">Competitions</h2>

        <Link href="/admin/competitions/create" className="ml-auto">
          <Button className=" h-[2rem]">
            <span>
              <PlusCircleIcon className="h-6 w-6" aria-hidden="true" />
            </span>
            Create
          </Button>
        </Link>
      </div>

      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : isError ? (
        <p>Error fetching Data</p>
      ) : (
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.competitions.map((competition) => (
            <CompetitionsCard key={competition.id} data={competition} />
          ))}
        </section>
      )}
    </div>
  );
}
