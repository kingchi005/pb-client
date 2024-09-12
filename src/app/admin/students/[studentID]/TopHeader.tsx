import { Avatar } from "@/components";
import React from "react";
import { Student } from "@/lib/axios/apiRequestTypes";

type TopHeaderProps = {
  data: Student;
};

export default function TopHeader({ data }: TopHeaderProps) {
  return (
    <div className="flex gap-4">
      <Avatar
        imageUrl={data.passport}
        alt={`image of ${data.lastName} ${data.firstName}`}
        rounded="sm"
        size="large"
      />
      <div className="flex flex-col justify-center gap-2">
        <h2 className="font-righteous text-lg text-primary">{`${data.firstName} ${data.lastName}`}</h2>
        <p className="text-xs">{data.email}</p>
      </div>
    </div>
  );
}
