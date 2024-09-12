import React from "react";
import Register from "./Register";
import Image from "next/image";
import Link from "next/link";
import { TextField } from "@/components";
import Reprint from "./Reprint";

export default function page() {
  return (
    <main className="flex min-h-screen pt-[5rem]">
      <section className="relative hidden md:w-1/2 lg:block">
        <Image
          src={"/svg/students.svg"}
          alt="students"
          fill
          className="h-full w-auto"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        />
      </section>
      <section className="mt-[3rem] flex w-full flex-col items-center px-4 lg:w-1/2">
        <h2 className="text-center font-righteous text-2xl text-primary">
          Welcome to PB Cambridge Consult
        </h2>
        <p className="mt-[4rem] text-primary">
          To Register for the competition{" "}
          <Link
            href={"/portal/register_student"}
            className="text-orange-500 underline"
          >
            Click Here
          </Link>{" "}
        </p>
        <p className="mt-4 text-primary">
          To Check Student&apos;s Result
          <Link href={"/results"} className="ml-2 text-orange-500 underline">
            Click Here
          </Link>{" "}
        </p>
        <div>
          <Reprint />
        </div>
      </section>
    </main>
  );
}
