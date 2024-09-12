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
    <main className="pt-[4.8rem]">
      <Banner title="About Us" url="/images/hero-image.webp" />

      <SecondSection />
      <DetailsSection />
      <Team />
    </main>
  );
}
