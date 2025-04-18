import { Metadata } from "next";
import Banner from "./Banner";
import DetailsSection from "./DetailsSection";
import SecondSection from "./SecondSection";
import Team from "./Team";

export const metadata: Metadata = {
	title: "About Us - PB Cambridge Consult",
	description:
		"Discover the mission, values, and history of PB Cambridge Consult. Learn how we empower students through exams, certificates, and scholarship opportunities.",
	keywords:
		"About PB Cambridge Consult, mission, values, exams, certificates, scholarships, education",
	openGraph: {
		type: "website",
		title: "About Us - PB Cambridge Consult",
		description:
			"Discover the mission, values, and history of PB Cambridge Consult. Learn how we empower students through exams, certificates, and scholarship opportunities.",
		images: "/images/logo_name.jpg",
	},
};

export default function Page() {
	return (
		<main className="px-8 pt-32 pb-20">
			<div className="rounded-2xl px-5 md:px-16 items-center gap-8 bg-gradient-to-r from-app-green/10 to-white pt-40 md:flex flex-row mb-20">
				<div className="md:w-3/5">
					<h2 className="mb-5 text-3xl font-bold text-app-primary">About Us</h2>
					<p className="mb-5 text-base text-neutral-500 font-semibold">
						Welcome to PBCambridge Consult, where education meets opportunity.
						Our journey began with a passionate commitment to empower young
						minds through education. We've dedicated ourselves to guiding
						students toward success by providing educational resources,
						facilitating scholarship opportunities, conducting examinations, and
						recognizing achievement with certificates.
					</p>
				</div>
				<div className="md:w-2/5">
					<img
						src="/images/hero-image.webp"
						className="rounded-lg border-[6px] border-white shadow-md"
					/>
				</div>
			</div>
			<DetailsSection />		
			<Team />
		</main>
	);
	return (
		<main className="pt-[4.8rem]">
			{/* <Banner title="About Us" url="/images/hero-image.webp" /> */}

			<SecondSection />
			<DetailsSection />
			<Team />
		</main>
	);
}
