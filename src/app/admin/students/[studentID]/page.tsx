"use client";
import { useParams } from "next/navigation";
import { StudentData } from "../StudentTypes";
import TopHeader from "./TopHeader";
import Profile from "./Profile";
import Results from "./Results";
import { BookOpenIcon, UserIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getStudent } from "@/lib/axios/testRequests";
import { Loader } from "@/components";
import Image from "next/image";
import { adminGetRequest } from "@/lib/axios/apiRequests";
import { StudentDetails } from "@/lib/axios/apiRequestTypes";

export default function Student() {
  const [view, setView] = useState(1);
  const { studentID } = useParams();
  const { data, isLoading, isError } = useQuery(["students", studentID], () =>
    adminGetRequest<StudentDetails>(`student/${studentID}`),
  );
  console.log(data);
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (isError)
    return (
      <div className="flex h-full w-full items-center justify-center">
        <p className="text-lg">could not fetch student data</p>
      </div>
    );

  return (
    <section className="mt-4 min-h-full">
      <TopHeader data={data.studentDetails} />
      <section className="mt-6 flex flex-col md:flex-row">
        <aside className=" flex gap-4 px-4 md:w-2/12 md:flex-col">
          <button
            className={`flex items-center gap-2 rounded-md border px-2  py-2 ${
              view === 1
                ? "border-primary bg-primary text-white"
                : "border-secondary-gray  text-secondary-gray"
            }  `}
            onClick={() => setView(1)}
          >
            <UserIcon className="h-6 w-6" arai-hidden="true" />
            Profile
          </button>
          <button
            className={`flex items-center gap-2 rounded-md border px-2  py-2 ${
              view !== 1
                ? "border-primary bg-primary text-white"
                : "border-secondary-gray  text-secondary-gray"
            }  `}
            onClick={() => setView(2)}
          >
            <span>
              <BookOpenIcon className="h-8 w-8" />
            </span>{" "}
            Results
          </button>
        </aside>
        <section className="flex-1">
          {view === 1 ? (
            <Profile profileData={data} />
          ) : (
            <Results result={data.studentDetails.result} />
          )}
        </section>
      </section>
    </section>
  );
}
