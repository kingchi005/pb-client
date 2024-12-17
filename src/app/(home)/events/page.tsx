"use client";
import { useState } from "react";
import { Metadata } from "next";
import { useQuery } from "@tanstack/react-query";
import { EventCard } from "@/components";
// import EventCard from "./EventCard";
import { type Events } from "@/lib/axios/apiRequestTypes";
import { getEvents } from "@/lib/axios/requests";
import { Event } from "@/lib/axios/requestTypes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

  console.log(data);

  return (
    <main className="px-8 pb-[50vh] pt-[7rem]">
      <div className="">
        <div className="h-[80vh]  rounded-2xl bg-gradient-to-r from-app-green/10 to-white"></div>
        <div className="-mt-[50vh] px-5 md:px-20">
          <h2 className="mb-5 text-3xl font-bold text-app-primary">Events</h2>
          <p className="mb-5 text-sm">
            Empowering growth and connection through tailored events and
            insightful consultations.
          </p>
          <div className="w-full rounded-2xl bg-neutral-50 p-10">
            <p className="mb-6 text-xl font-bold">Upcoming</p>
            {data?.data?.event?.length &&
              data?.data?.event?.slice(1, 2).map((ev, i) => (
                <div className="mb-20 grid-flow-col gap-10 gap-y-10 space-y-6 md:grid md:space-y-0">
                  <div className="">
                    <img
                      src={ev.bannerImage}
                      alt=""
                      className="w-full min-w-[180px] rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-between space-y-5">
                    <p className="text-justify text-sm">{ev.description}</p>
                    <h2 className="text-xl  font-bold text-app-primary">
                      {ev.title}
                    </h2>
                    <button
                      // className="mt-5 rounded-3xl border border-primary bg-neutral-50/70 px-5 py-1.5 text-primary/70 hover:text-white"
                      className="rounded-3xl border border-app-primary px-5 py-1.5 text-app-primary"
                    >
                      <Link
                        href={`/events/${ev.id}`}
                        className="flex flex-row items-center gap-3"
                      >
                        <span className="m-0">Apply Now</span>
                        <ArrowRight size={20} />
                      </Link>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <h2 className="mb-10 mt-20 text-center text-4xl font-bold text-neutral-900/90">
        Past Events
      </h2>
      <section className="mb-20 bg-neutral-50 px-5 py-10 md:px-20">
        <div className="p-10 ">
          <div className="grid-flow-col items-center justify-center gap-10 gap-y-10 space-y-6 md:grid md:justify-items-end md:space-y-0">
            <div className="">
              <h2 className="mb-4 text-5xl font-bold">2024</h2>
              <p className="text-2xl font-bold text-neutral-500 ">
                Save a life 1.0
              </p>
            </div>
            <div className=" md:w-2/3">
              <img
                src="/images/save-a-life.jpg"
                alt=""
                className="w-full min-w-[250px] rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:gap-10">
          {[
            "/images/save-life1.jpg",
            "/images/save-life2.jpg",
            "/images/save-life3.jpg",
            "/images/save-life4.jpg",
          ].map((img, i) => (
            <img key={i} src={img} alt="" className="rounded-2xl" />
          ))}
        </div>
      </section>
      <section className="mb-20 bg-neutral-50 px-5 py-10 md:px-20">
        <div className="p-10 ">
          <div className="grid-flow-col items-center justify-center gap-10 gap-y-10 space-y-6 md:grid md:justify-items-end md:space-y-0">
            <div className="">
              <h2 className="mb-4 text-5xl font-bold">2023</h2>
              <p className="text-2xl font-bold text-neutral-500 ">
                Unleashing the Power of Being an International Student{" "}
              </p>
            </div>
            <div className=" md:w-2/3">
              <img
                src="/images/unleash-benefit.jpg"
                alt=""
                className="w-full min-w-[250px] rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 sm:gap-10">
          {[
            "/images/unlease1.jpg",
            "/images/unlease2.jpg",
            "/images/unlease3.jpg",
            "/images/unlease4.jpg",
          ].map((img, i) => (
            <img key={i} src={img} alt="" className="rounded-2xl" />
          ))}
        </div>
      </section>
    </main>
  );
  return (
    <main className=" px-4 pt-[7rem]">
      {/* <div className="my-2 flex h-[2rem] items-center gap-4 overflow-x-auto text-sm">
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
      </div> */}

      {/* <section className="relative grid grid-cols-1 gap-6 py-4 md:grid-cols-3 lg:grid-cols-4">
        {data?.data?.event?.length &&
          data?.data?.event?.map((ev, i) => (
            <EventCard eventDetails={ev} key={i} />
          ))}
      </section> */}
    </main>
  );
}
