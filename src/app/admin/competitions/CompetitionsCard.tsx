import { formatAmount } from "@/app/(home)/portal/Step1";
import { Switch } from "@/components";
import { formatDateToString } from "@/lib/helpersFunctions";
import {
  AcademicCapIcon,
  CalendarIcon,
  MapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type Schools = {
  id: string;
  name: string;
};

type CardProps = {
  data: {
    active: boolean;
    id: string;
    name: string;
    graduateRegFee: number;
    seniorRegFee: number;
    juniorRegFee: number;
    startDate: Date;
    endDate: Date;
    schools: Schools[];
    createdAt: Date;
    updatedAt: Date;
    
  };
};

export default function CompetitionsCard({ data }: CardProps) {
  const handleToogleRegistration = (state: boolean) => {};
  return (
    <div className="flex flex-col gap-4 border p-4 font-inter text-sm shadow-md">
      <h2 className="text-primary">{data.name}</h2>
      <p className="flex items-center gap-2 text-primary">
        <span>
          <AcademicCapIcon className="h-5 w-5 text-primary" />
        </span>{" "}
        No of Schools:{" "}
        <span className="text-lg font-semibold "> {data.schools.length}</span>
      </p>
      <div className="flex w-full flex-col justify-between gap-4">
        <div className="competition-card flex flex-1 items-center gap-2 rounded-2xl border px-2 py-1 text-white ">
          <h5 className="text-xs capitalize">Junior</h5>
          <p className="text-sm">{formatAmount(data.juniorRegFee)}</p>
        </div>
        <div className="senior flex flex-1 items-center gap-2 rounded-2xl border px-2 py-1 text-white ">
          <h5 className="text-xs capitalize">Senior</h5>
          <p className="text-sm">{formatAmount(data.seniorRegFee)}</p>
        </div>
        <div className="graduated flex flex-1 items-center gap-2 rounded-2xl border px-2 py-1 text-white ">
          <h5 className="text-xs capitalize">graduated</h5>
          <p className="text-xs">{formatAmount(data.seniorRegFee)}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span>
          <CalendarIcon className="h-4 w-4" />
        </span>

        <span>{formatDateToString(new Date(data.startDate))}</span>
        <span>-</span>
        <span>{formatDateToString(new Date(data.endDate))}</span>
      </div>
      <div className="flex items-center gap-2">
        {data.active ? (
          <span>End registration</span>
        ) : (
          <span>Open Registration</span>
        )}
        <span className="">
          <Switch
            enabled={!data.active}
            setEnabled={handleToogleRegistration}
          />
        </span>
        <Link
          href={`/admin/competitions/${data.id}`}
          className="ml-auto text-primary hover:underline"
        >
          See More
        </Link>
      </div>
    </div>
  );
}
