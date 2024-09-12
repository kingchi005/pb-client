"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Overlay } from "@/components";
import { XCircleIcon } from "@heroicons/react/24/outline";

export default function NewYear() {
  const [displayImage, setDisplayImage] = useState(false);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setDisplayImage(true);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, []);

  if (!displayImage) {
    return null;
  }

  return (
    <Overlay>
      <div className="flex h-full w-full items-center justify-center">
        <div className="new-year relative  h-[25rem] w-[80%]  px-4 md:h-[30rem] lg:w-1/2">
          <Image
            src="/images/2024.jpg"
            fill
            sizes="(min-width: 808px) 50vw, 100vw"
            alt="new year banner"
            className="h-auto w-full"
          />
        </div>
        <button
          className="absolute  right-10 top-[4rem] h-[4rem] w-[4rem]"
          onClick={() => setDisplayImage(false)}
        >
          <XCircleIcon aria-hidden="true" />
        </button>
      </div>
    </Overlay>
  );
}
