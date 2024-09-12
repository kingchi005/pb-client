"use client";
import { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { Button, EventCard, List, Loader, Modal, Overlay } from "@/components";
import React from "react";
import { getEvents } from "@/lib/axios/requests";
import { userGetRequest } from "@/lib/axios/apiRequests";
import { Events } from "@/lib/axios/apiRequestTypes";

const list = [
  { name: "all", id: 1 },
  { name: "Upcoming", id: 2 },
  { name: "Completed", id: 3 },
];

export default function Page() {
  const [selectedValue, setSelectedValue] = useState(list[0]);
  const { data, isLoading, isError } = useQuery(["events"], () =>
    userGetRequest<Events>("events"),
  );


  return (
    <main>
      <h1 className="my-1 font-righteous text-2xl">Events</h1>
      <div className="flex items-center">
        <div className="mt-2 w-8/12 lg:w-3/12">
          <List
            label={"Filter"}
            dropdownList={list}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
          />
        </div>
        <Link href={"/admin/events/create"} className="ml-auto self-end">
          <Button className="">create</Button>
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p>Error fetching events</p>
      ) : (
        <section className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data.event.map((item) => (
            <EventCard key={item.id} eventDetails={item} />
          ))}
        </section>
      )}
    </main>
  );
}
