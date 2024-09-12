import React from "react";
import DetailsCard from "./DetailsCard";

const content = [
  {
    id: 1,
    header: "Our Mission",
    description:
      "At the core of our mission is the belief that every student deserves access to quality education and the chance to pursue their dreams. We strive to bridge gaps and open doors to brighter futures.",
    image: "/images/hero-image.webp",
  },
  {
    id: 2,
    header: "Scholarship Initiatives",
    description:
      "We are committed to making education accessible. Through strategic partnerships and initiatives, we actively seek and secure scholarships to support deserving students on their academic journey",
    image: "/images/certificate-image.jpg",
  },
  {
    id: 3,
    header: "Examinations and Certifications",
    description:
      "To foster academic excellence, we organize rigorous examinations that challenge and showcase the capabilities of our students. Our certification process not only acknowledges their hard work but also prepares them for future academic and professional endeavors",
    image: "/images/exam.jpg",
  },
];

export default function DetailsSection() {
  return (
    <section className="mx-auto my-4 flex w-[80%] flex-col gap-[4rem]">
      {content.map((item) => {
        return <DetailsCard key={item.id} {...item} />;
      })}
    </section>
  );
}
