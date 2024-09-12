import Image from "next/image";
import React from "react";

export default function Banner({ title, url }: { title: string; url: string }) {
  return (
    <section className="relative h-[15rem] w-full  overflow-hidden bg-black md:h-[20rem]">
      <Image
        src={url}
        alt="hero image"
        fill={true}
        priority
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        className="h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 flex w-full flex-col items-center justify-center gap-4 text-white">
        <p className="w-fit px-4 text-center font-righteous text-2xl font-bold text-white md:text-5xl">
          {title}
        </p>
      </div>
    </section>
  );
}
