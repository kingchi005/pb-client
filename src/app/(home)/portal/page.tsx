import React from "react";
import Register from "./Register";
import Image from "next/image";
import Link from "next/link";
import { TextField } from "@/components";
import Reprint from "./Reprint";

export default function page() {
  return (
    <main className="flex flex-row min-h-screen items-center mb-20 px-5 md:px-10 pt-24 gap-6">
      <section className="relative hidden md:w-1/2 md:block">
        <img src="/images/young-student.webp" className="min-w-72 rounded-3xl"/>
      </section>
      <section className="mt-[3rem] flex w-full flex-col items-start px-4 ps-8 md:ps-0 md:w-1/2">
        <h2 className="mb-14 space-y-3 text-start text-4xl font-bold text-neutral-900/90">
          <p>
            Welcome to 
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
