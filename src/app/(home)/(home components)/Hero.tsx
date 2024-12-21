import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero mx-auto mb-20 max-w-5xl  rounded-2xl bg-white bg-[url('/images/housewb.png')] bg-cover bg-center bg-no-repeat object-center">
      <div className=" relative mt-14 w-full flex-row items-center space-y-10 overflow-hidden rounded-2xl bg-gradient-to-tl from-neutral-50/80 to-app-green/5 px-5  py-32  pt-[4rem] md:flex md:space-y-0 md:px-16 lg:px-20">
        <div className="justify-centermd:text-start flex-auto space-y-8 text-center md:justify-start md:text-start">
          <p className="text-4xl font-bold text-app-primary">
            PB Cambridge Consult
          </p>
          <p className="text-4xl font-bold">
            Empowering Tomorrow's Leaders Today
          </p>
          <p className="fo text-lg">Explore, Learn, Thrive</p>
          <Link href="/events"className="mx-auto flex flex-row items-center gap-3 rounded-3xl bg-gradient-to-r from-app-green to-app-primary px-5 py-1.5 text-white md:mx-0 w-fit">
            <span className="m-0 pb-1.5">Learn more</span>
            <ArrowRight size={20} />
          </Link>
        </div>
        <div className="">
          <img src="/images/hero-image.png" className="" alt="" />
        </div>
      </div>
    </section>
  );
  return (
    <section className="relative h-[30rem] w-full  overflow-hidden bg-black pt-[4rem] md:h-[40rem] md:pt-12">
      <Image
        src={"/images/hero-image.webp"}
        alt="hero image"
        fill={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        className="h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bottom-0 left-0 right-0 top-0 flex w-full flex-col items-center justify-center gap-4 pt-[4rem] text-white">
        <p className="w-fit px-4 text-center font-inter text-xl font-bold text-white md:text-5xl">
          Empowering Tomorrow&apos;s Leaders Today <br />
          <span className="text-sm md:text-2xl">
            {" "}
            Explore, Learn, Thrive 📚{" "}
          </span>
        </p>
      </div>
    </section>
  );
}
