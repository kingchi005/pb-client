import Image from "next/image";
import React from "react";

export default function ErrorPage() {
  return (
    <main className="relative ">
      <div className="relative mt-[8rem] h-[18rem]">
        <Image
          src={"/svg/404.svg"}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          className="h-[16rem] w-auto"
        />
      </div>

      <h2 className="text-center font-righteous text-xl text-primary">
        Page not found
      </h2>
    </main>
  );
}
