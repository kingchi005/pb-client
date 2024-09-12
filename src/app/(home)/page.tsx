import dynamic from "next/dynamic";

import { Hero, WhatWeDo } from "./(home components)";
const AboutUS = dynamic(() => import("./(home components)/AboutUS"));
const Testimonials = dynamic(() => import("./(home components)/Testimonials"));
const FAQS = dynamic(() => import("./(home components)/FAQS"));
const Partners = dynamic(() => import("./(home components)/Partners"));
const Announcement = dynamic(() => import("./(home components)/Announcement"));

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PB Cambridge Consult - Empowering Futures Through Education",
  description:
    "PB Cambridge Consult - Organizing exams, awarding certificates, and providing scholarship opportunities for students. Empowering futures through education.",
  keywords:
    "PB Cambridge Consult, exams, certificates, scholarships, education, student services",
  openGraph: {
    type: "website",
    title: "PB Cambridge Consult - Empowering Futures Through Education",
    description:
      "Organizing exams, awarding certificates, and providing scholarship opportunities for students. Empowering futures through education.",
    images: "/images/logo_name.jpg",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Hero />
      {/* <Announcement /> */}
      <WhatWeDo />
      <AboutUS />
      <Testimonials />
      <FAQS />
      <Partners />
    </div>
  );
}
