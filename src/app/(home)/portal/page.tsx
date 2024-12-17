import React from "react";
import Register from "./Register";
import Image from "next/image";
import Link from "next/link";
import { TextField } from "@/components";
import Reprint from "./Reprint";

export default function page() {
  return (
    <main className="flex flex-row min-h-screen items-center">
      <section className="relative hidden md:w-1/2 md:block">
        {/* <Image
          src={"/svg/students.svg"}
          alt="students"
          fill
          className="h-full w-auto"
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
        /> */}
        <img src="/svg/students.svg" className="min-w-[400px]"/>
      </section>
      <section className="mt-[3rem] flex w-full flex-col items-start px-4 ps-8 md:ps-0 lg:w-1/2">
        <h2 className="mb-14 space-y-3 text-start text-4xl font-bold text-neutral-900/90">
          <p>
            What we Do Welcome to <br />{" "}
          </p>
          <p><span className="text-app-primary">PB</span> Cambridge Consult</p>
        </h2>
        <p className="text-neutral-500">
          To Register for the competition{" "}
          <Link
            href={"/portal/register_student"}
            className="text-app-primary font-semibold underline"
          >
            Click Here
          </Link>{" "}
        </p>
        <p className="mt-4 text-neutral-500">
          To Check Student&apos;s Result
          <Link href={"/results"} className="ml-2 text-app-primary font-semibold underline">
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
