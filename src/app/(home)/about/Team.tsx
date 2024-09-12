"use client";
import { Avatar } from "@/components";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const team = [
  {
    id: 1,
    name: "Eni Samson",
    position: "Secretary",
    image: "/images/sammy.webp",
  },
  {
    id: 2,
    name: "Buba Amarachukwu Precious",
    position: "CEO",
    image: "/images/ceo.webp",
  },
  {
    id: 3,
    name: "Nwogu Sandra C",
    position: "Director",
    image: "/images/director.webp",
  },
];
type TeamCardProp = {
  id: number;
  name: string;
  position: string;
  image: string;
};
const TeamCard = ({ name, position, image }: TeamCardProp) => {
  const teamCardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(teamCardRef, { once: true, amount: 0.5 });
  return (
    <div
      ref={teamCardRef}
      className="flex flex-1 flex-col items-center gap-2 p-6 shadow-lg"
      style={{
        transform: isInView ? "none" : "translateY(50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 1s ease",
      }}
    >
      <Avatar
        imageUrl={image}
        alt={name}
        className="h-[10rem] w-[10rem] lg:h-[12rem] lg:w-[12rem]"
      />
      <h3 className="text-center font-poppins text-lg font-semibold">{name}</h3>
      <p className="mt-auto font-semibold text-secondary-gray">{position}</p>
    </div>
  );
};

export default function Team() {
  return (
    <section className="mx-auto my-[4rem] flex w-[80%] flex-col items-center gap-4">
      <h2 className="mx-auto flex w-fit flex-col items-center border-b-2 border-primary text-center font-righteous text-2xl text-primary">
        Meet the Team
      </h2>

      <div className="flex flex-col gap-6 md:flex-row">
        {team.map((item) => {
          return <TeamCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
