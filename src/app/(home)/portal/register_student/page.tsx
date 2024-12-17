import Image from "next/image";
import Register from "../Register";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* <div className="relative mt-[8rem] h-[18rem]">
        <Image
          src={"/svg/no-registration.svg"}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          className="h-[16rem] w-auto"
        />
      </div>

      <h2 className="text-center font-righteous text-xl text-primary">
        No ongoing Registration{" "}
      </h2> */}
      <Register />
    </main>
  );
}
