import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { PhoneIcon } from "@heroicons/react/20/solid";
import Banner from "../about/Banner";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us - PB Cambridge Consult",
  description:
    "Get in touch with PB Cambridge Consult. Reach out for inquiries, support, or collaboration opportunities. We are here to assist you.",
  keywords:
    "Contact PB Cambridge Consult, inquiries, support, collaboration, exams, certificates, scholarships",
  openGraph: {
    type: "website",
    title: "Contact Us - PB Cambridge Consult",
    description:
      "Get in touch with PB Cambridge Consult. Reach out for inquiries, support, or collaboration opportunities. We are here to assist you.",
    images: "/images/logo_name.jpg",
  },
};

const conatactDetails = [
  {
    id: 1,
    title: "Phone",
    value: "08129567372",
    icon: <PhoneIcon className="h-8 w-8 text-primary" />,
  },

  {
    id: 2,
    title: "Email",
    value: "pbcambridgeconsult@gmail.com",
    icon: <EnvelopeIcon className="h-8 w-8 text-primary" />,
  },
];

export default function page() {
  return (
		<main className="relative min-h-screen pt-[4.8rem] font-inter">
			<div className="">
				<div className="h-[80vh]  rounded-2xl bg-gradient-to-r from-app-green/10 to-white"></div>
				<div className="-mt-[50vh] px-5 md:px-20">
					<h2 className="mb-5 text-3xl font-bold text-app-primary">
						Contact Us
					</h2>
					<p className="mb-5 text-sm">We are here for You. How can we help?</p>
					<div className="flex flex-col gap-y-[4rem] py-6 md:flex-row  w-full rounded-2xl bg-neutral-50 p-10">
						<div className="md:flex flex-col  gap-4 md:w-1/2">
							<img src="/images/certificate-image.jpg" className="rounded-2xl"/>
							<div className="flex flex-col gap-4">
								<div className="flex  gap-4 px-6 py-4 bg-white w-full">
									<img src="/svg/contact/gmail.svg"/>
									<Link  href={"mailto:pbcambridgeconsult@gmail.com"} className="text-primary w-full text-sm">
										pbcambridgeconsult@gmail.com
									</Link>
								</div>
								<div className="flex  gap-4 px-6 py-4 bg-white w-full">
									<img src="/svg/contact.svg"/>
									<Link href="tel:+2348167761550" className="text-primary w-full text-sm">
										+2348167761550
									</Link>
								</div>
							
							</div>
						</div>

						<ContactForm />
					</div>
				</div>
			</div>
		</main>
	);
}
