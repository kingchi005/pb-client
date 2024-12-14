import { Button } from "@/components";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function AboutUS() {
  return (
    <section className=" relative  mb-20 mt-[5rem]">
      <h2 className="mb-14 text-center text-4xl font-bold text-neutral-900/90">
        What Are We really About
      </h2>
      <div className="mx-auto flex flex-col gap-4  px-4 md:flex-row lg:w-[80%]">
        <div className="flex flex-col gap-4 self-center text-neutral-500 md:w-1/2">
          <p>
            At PB Cambridge Consult, we are passionate advocates for education.
            Our mission is simple yet powerful: to empower students by providing
            quality education and scholarship opportunities. We believe that
            education is the key to a brighter future for all, and our
            commitment to educational excellence drives our work.
          </p>
          <p>
            With a dedicated team and a vision for a more equitable world,
            we&apos;ve been making a positive impact on students&apos; lives and
            communities. Join us in our mission to shape the future, one student
            at a time.
          </p>
          <Link href={"/about"} className="">
            <Button
              className="mt-5 rounded-3xl border border-primary bg-neutral-50/70 px-5 py-1.5 text-primary/70 hover:text-white"
              iconRight={
                <ArrowRightIcon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
              }
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
            className="rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
