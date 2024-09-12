import Image from "next/image";

export default function Hero() {
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
