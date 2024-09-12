import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components";
import { Event } from "@/lib/axios/requestTypes";

const date = new Date(2023, 11, 9, 9, 0, 0);
const time = date.toLocaleTimeString();
const day = date.toLocaleDateString();

type EventCardProps = {
  eventDetails: Event;
};

export default function EventCard({ eventDetails }: EventCardProps) {
  return (
    <div className="flex flex-col items-center gap-4 font-poppins shadow-md transition-shadow duration-300 hover:shadow-2xl">
      <div className="relative h-[25rem] w-full">
        <Image
          src={eventDetails.bannerImage}
          fill
          sizes="(min-width: 808px) 50vw, 100vw"
          className="max-h-full max-w-full object-cover"
          alt="pb cambridge flyer"
        />
      </div>
      <p className="w-full px-2 text-left text-sm font-semibold">
        {eventDetails.type}
        {": "}
        {eventDetails.title}
      </p>
      <div className="my-2 flex w-full items-center gap-2 px-2 text-sm">
        <span className="flex items-center gap-1">
          <CalendarIcon className="h-4 w-4 text-primary" aria-hidden="true" />
          {day}
        </span>

        <span className=" flex items-center gap-1">
          <ClockIcon className="h-4 w-4 text-primary" aria-hidden="true" />{" "}
          {time}
        </span>
        <Link
          href={`/events/${eventDetails.id}`}
          className="ml-auto text-primary hover:underline"
        >
          <Button className="h-[1.5rem] ">Details</Button>
        </Link>
      </div>
    </div>
  );
}
