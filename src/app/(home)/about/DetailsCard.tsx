"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

type DetailsCardProp = {
  id: number;
  header: string;
  description: string;
  image: string;
};

export default function DetailsCard({
  id,
  header,
  description,
  image,
}: DetailsCardProp) {
  const contentRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contentRef, { once: true, amount: 0.4 });
  return (
    <div
      className={`flex flex-col gap-4 ${
        id % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <div className="relative h-[20rem] overflow-hidden rounded-md md:w-1/2">
        <Image
          src={image}
          alt="our mission mission"
          fill
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className={`relative p-2 ${
          id % 2 !== 0 ? "md:left-[-4rem]" : "md:left-[4rem]"
        }  flex items-center justify-center md:w-1/2`}
      >
        <div
          ref={contentRef}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s ease",
          }}
          className="relative flex h-[80%] w-full  flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 px-4 shadow-2xl"
        >
          <h2 className="mx-auto w-fit border-b-2 border-primary text-center font-oswald text-xl text-primary">
            {header}
          </h2>
          <p className="text-sm ">{description}</p>
        </div>
      </div>
    </div>
  );
}
