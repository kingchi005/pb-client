import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section className="my-[6rem] flex flex-col items-center gap-8">
      <h2 className="mb-10 text-center text-4xl font-bold text-neutral-900/90">
        Our Partners
      </h2>

      <div className="flex flex-wrap justify-center px-4 md:gap-4 ">
        <img
          src="/images/hilworth-college.webp"
          className="h-20 w-auto lg:h-32"
        />
        <img
          src="/images/the-community-solution.webp"
          className="h-20 w-auto lg:h-32"
        />
      </div>
    </section>
  );
}
