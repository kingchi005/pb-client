"use client";
import React from "react";
import Image from "next/image";
import { isPast, isAfter } from "date-fns";
import CountDownTimer from "./CountDownTimer";
import {
	CalendarDaysIcon,
	MapPinIcon,
	UserCircleIcon,
} from "@heroicons/react/20/solid";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Events } from "@/lib/axios/apiRequestTypes";
import { adminGetRequest } from "@/lib/axios/apiRequests";
import { getEventDetails } from "@/lib/axios/requests";
import { Loader } from "@/components";
import Link from "next/link";

const startDate = new Date(2023, 11, 9, 9, 0, 0);
const endDate = new Date(2023, 11, 9, 16, 0, 0);

const eventDetails = [
	{
		id: 1,
		title: "Organised by",
		value: "Pbcambridge Consult",
		icon: <UserCircleIcon className="h-10 w-10" aria-hidden="true" />,
	},
	{
		id: 2,
		title: "Date and Time",
		value: startDate.toLocaleString(),
		icon: <CalendarDaysIcon className="h-10 w-10" aria-hidden="true" />,
	},
	{
		id: 3,
		title: "Location",
		value:
			"Rockview Hotel, plot CP/2-CP/5 Government Station layout, Owerri, Imo state",
		icon: <MapPinIcon className="h-10 w-10" aria-hidden="true" />,
	},
];

type TProps = { params: { eventId: string }; searchParams: {} };

export default function Page({ params: { eventId } }: TProps) {
	const { data, isLoading, isError, error } = useQuery(
		["event-details", eventId],
		() => getEventDetails(eventId)
	);

	if (!data)
		return (
			<div>
				<Loader />
			</div>
		);

	const { data: event } = data;

	const ongoing =
		isAfter(new Date(), new Date(event.startTime)) &&
		isPast(new Date(event.endTime)) !== true;
	//  console.log(isPast(endDate));
	//  console.log(ongoing);

	return (
		<main className="my-4 flex flex-col gap-4 px-2 pt-[7rem] lg:flex-row lg:px-[4rem]">
			<div className="lg:w-2/3">
				<div className="">
					<img src={event.bannerImage} />
				</div>
				<h2 className="mt-6 text-lg font-semibold">About this Event</h2>
				<p className="font-inter text-sm">{event.description}</p>
			</div>
			{true && (
				<div className="flex flex-col bg-white px-4 py-2 shadow-md lg:mx-10 lg:w-1/3">
					<h2 className=" p-2 text-center font-righteous text-lg font-semibold text-primary">
						Event Details
					</h2>
					<hr className=" mx-auto my-4 w-[80%]" />
					<div>{}</div>
					<CountDownTimer
						startDate={new Date(event.startTime)}
						endDate={new Date(event.endTime)}
					/>
					<div className="mt-4 flex flex-col gap-4">
						<div className="flex items-center gap-4">
							<span className="text-primary">
								<UserCircleIcon className="h-10 w-10" aria-hidden="true" />
							</span>
							<div>
								<h2 className="text-primary">Organised by</h2>
								<p className="text-lg font-semibold">{event.organisedBy}</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<span className="text-primary">
								<CalendarDaysIcon className="h-10 w-10" aria-hidden="true" />
							</span>
							<div>
								<h2 className="text-primary">Date and Time</h2>
								<p className="text-lg font-semibold">
									{new Date(event.startTime).toDateString()}
								</p>
							</div>
						</div>
						<div className="flex items-center gap-4">
							<span className="text-primary">
								<MapPinIcon className="h-10 w-10" aria-hidden="true" />
							</span>
							<div>
								<h2 className="text-primary">Location</h2>
								<p className="text-lg font-semibold">{event.location}</p>
							</div>
						</div>
						{event.type.toLowerCase() == "competition" && (
							<Link
								href="/portal/register_student"
								className="bg-app-primary px-6 py-2 rounded-3xl mt-3 text-white md:me-auto"
							>
								Register now
							</Link>
						)}{" "}
					</div>
				</div>
			)}
		</main>
	);
}
