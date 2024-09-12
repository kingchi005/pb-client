import React from "react";

export default function SecondSection() {
  return (
    <section className="my-8 flex flex-col items-center font-inter">
      <h2 className="mx-auto w-fit border-b-2 border-primary text-center font-righteous text-2xl text-primary">
        About Us
      </h2>
      <p className="mx-auto px-4 text-center text-secondary lg:w-[70%]">
        Welcome to <span className="text-primary">PB</span>Cambridge Consult,
        where education meets opportunity. Our journey began with a passionate
        commitment to empower young minds through education. We&apos;ve
        dedicated ourselves to guiding students toward success by providing
        educational resources, facilitating scholarship opportunities,
        conducting examinations, and recognizing achievement with certificates.
      </p>
    </section>
  );
}
