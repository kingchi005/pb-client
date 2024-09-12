"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAnnouncement } from "@/lib/axios/requests";

export default function Announcement() {
  const { data, isLoading, isError } = useQuery(
    ["announcement"],
    getAnnouncement,
  );
  if (isLoading && isError && data === undefined) {
    return;
  }

  if (data === undefined) {
    return;
  }

  return (
    <div className="relative flex h-[2rem] w-full items-center overflow-hidden whitespace-nowrap bg-primary px-6 py-1 font-inter">
      <span className="absolute bottom-0 left-0 top-0 z-[100] bg-primary px-2 text-white">
        Special Info
      </span>
      <div className="announcement-small-screen md:announcement-large-screen right-0 text-white">
        {data?.data?.announcements[0].content}
      </div>
    </div>
  );
}
