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
      <Banner title="Contact Us" url="/images/award.jpg" />
      <section className="flex flex-col gap-y-[4rem] py-6 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:w-1/2">
          <Image
            src={"/svg/contact/contact-us-svg.svg"}
            alt=""
            height={350}
            width={350}
            priority
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
          <div className="flex flex-col gap-4">
            <div className="flex w-full items-center gap-4 px-6">
              <span className="min-h-8 min-w-8 flex items-center justify-center rounded-full border-2 border-primary p-2">
                <PhoneIcon className="h-4 w-4 text-primary md:h-8 md:w-8" />
              </span>{" "}
              <Link href="tel:+2348167761550" className="text-primary">
                +2348167761550
              </Link>
            </div>
            <div className="flex w-full items-center gap-4 px-6">
              <span className="min-h-8 min-w-8 flex items-center justify-center rounded-full border-2 border-primary p-2">
                <EnvelopeIcon className="h-4 w-4 text-primary md:h-8 md:w-8" />
              </span>{" "}
              <Link
                href={"mailto:pbcambridgeconsult@gmail.com"}
                className=" text-primary"
              >
                pbcambridgeconsult@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
