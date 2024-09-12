import { Button } from "@/components";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function AboutUS() {
  return (
    <section className=" relative mx-auto mt-[5rem] flex flex-col gap-4 px-4  md:flex-row lg:w-[80%]">
      <div className="flex flex-col gap-4 self-center md:w-1/2">
        <h2 className="relative mx-auto mb-4 flex w-fit items-center justify-center px-6 font-righteous text-lg font-semibold text-primary before:absolute before:-bottom-2 before:h-1 before:w-full before:bg-primary md:text-2xl">
          What Are We really About
        </h2>
        <p>
          At PB Cambridge Consult, we are passionate advocates for education.
          Our mission is simple yet powerful: to empower students by providing
          quality education and scholarship opportunities. We believe that
          education is the key to a brighter future for all, and our commitment
          to educational excellence drives our work.
        </p>
        <p>
          With a dedicated team and a vision for a more equitable world,
          we&apos;ve been making a positive impact on students&apos; lives and
          communities. Join us in our mission to shape the future, one student
          at a time.
        </p>
        <Link href={"/about"}>
          <Button
            size="medium"
            iconRight=<ArrowRightIcon
              className="h-6 w-6 text-primary-foreground"
              aria-hidden="true"
            />
          >
            About Us
          </Button>
        </Link>
      </div>
      <div className="relative min-h-[20rem] w-full flex-1 md:w-1/2">
        <Image
          src={"/images/about-section-1.webp"}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
