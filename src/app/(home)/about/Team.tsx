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
			className="flex flex-1 flex-col gap-2 pb-6 shadow-sm"
			style={{
				transform: isInView ? "none" : "translateY(50px)",
				opacity: isInView ? 1 : 0,
				transition: "all 1s ease",
			}}
		>
			<img src={image} className="w-full rounded-lg h-full" />
			<h3 className="font-poppins text-base font-semibold">
				{name}
			</h3>
			<p className="font-semibold text-app-primary">{position}</p>
		</div>
	);
};

export default function Team() {
	return (
		<section className="mx-auto my-[4rem] flex w-[80%] flex-col items-center gap-4">
			<h2 className="mb-14 text-center text-4xl font-bold text-neutral-900/90">
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
