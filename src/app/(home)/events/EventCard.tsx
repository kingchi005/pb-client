import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components";

const date = new Date(2023, 11, 9, 9, 0, 0);
const time = date.toLocaleTimeString();
const day = date.toLocaleDateString();
export default function EventCard() {
  return (
    <div className="flex flex-col items-center gap-4 font-poppins shadow-md transition-shadow duration-300 hover:shadow-2xl">
      <Image
        src="/images/seminar-flyer.webp"
        height={400}
        width={300}
        sizes="(min-width: 808px) 50vw, 100vw"
        className="h-auto w-auto object-cover"
        alt="pb cambridge flyer"
      />
      <p className="px-2 text-sm font-semibold">
        Seminar: unleashing the benefits of being an international student
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
          href="/events/clp3y0j8b0006o0b4hyw5zpz6"
          className="ml-auto text-primary hover:underline"
        >
          <Button className="h-[1.5rem] ">Details</Button>
        </Link>
      </div>
    </div>
  );
}
