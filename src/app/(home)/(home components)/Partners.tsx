import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section className="my-[6rem] flex flex-col items-center gap-8">
      <h2 className="relative mx-auto mb-4 flex w-fit items-center justify-center px-6 font-righteous text-lg font-semibold text-primary before:absolute before:-bottom-2 before:h-1 before:w-full before:bg-primary md:text-2xl">
        Our Partners
      </h2>
      <div className="flex gap-4 px-4">
        <span className="inline">
          <Image
            src={"/images/hilworth-college.webp"}
            alt="hilworth college"
            height={250}
            width={250}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </span>
        <span className="flex items-center">
          <Image
            src={"/images/the-community-solution.webp"}
            alt="hilworth college"
            height={50}
            width={200}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </span>
      </div>
    </section>
  );
}
