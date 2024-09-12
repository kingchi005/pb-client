"use client";
import { useState } from "react";
import { Metadata } from "next";
import { useQuery } from "@tanstack/react-query";
import { EventCard } from "@/components";
// import EventCard from "./EventCard";
import { Events } from "@/lib/axios/apiRequestTypes";
import { getEvents } from "@/lib/axios/requests";
import { Event } from "@/lib/axios/requestTypes";

const filter = ["All", "Upcoming", "Completed"];
const list = [
  { name: "all", id: 1 },
  { name: "Upcoming", id: 2 },
  { name: "Completed", id: 3 },
];

export default function Events() {
  const [filterEvent, setFilterEvent] = useState(1);
  const [events, setEvents] = useState<Event[]>([]);

  const [selectedValue, setSelectedValue] = useState(list[0]);
  const { data, isLoading, isError } = useQuery(["events-list"], () =>
    getEvents(),
  );

  // console.log(data)

  return (
    <main className=" px-4 pt-[7rem]">
      <div className="my-2 flex h-[2rem] items-center gap-4 overflow-x-auto text-sm">
        {filter.map((item, key) => (
          <button
            key={key}
            onClick={() => setFilterEvent(key + 1)}
            className={`rounded-lg px-4 py-1 ${
              key + 1 === filterEvent
                ? "bg-primary text-white"
                : "bg-secondary-gray"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="relative grid grid-cols-1 gap-6 py-4 md:grid-cols-3 lg:grid-cols-4">
        {data?.data?.event?.length &&
          data?.data?.event?.map((ev, i) => <EventCard eventDetails={ev} key={i} />)}

        {/* {filterEvent === 1 ? (
          <EventCard />
        ) : filterEvent === 2 ? (
         
       <div className="font-righteous text-lg">No upcoming events</div>
        ) : (
          <EventCard />
        )} */}
      </section>
    </main>
  );
}
