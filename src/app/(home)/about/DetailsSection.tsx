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
  	<section>
				{content.map((cont)=>(<div className="relative px-5 mx-10 py-10 items-center gap-8  to-white md:flex flex-row border-l-[3px] border-l-neutral-500/50">
<span className="absolute grid grid-flow-col -left-[19px] -top-[19px] place-items-center w-[36px] h-[36px] justify-center rounded-full border-2 border-neutral-500/50 bg-neutral-50">#<span className="text-app-primary font-bold">{cont.id}</span></span>
					<div className="md:w-3/5">
						<h2 className="mb-5 text-xl font-bold">
							{cont.header}
						</h2>
						<p className="mb-5 text-base text-neutral-500 font-semibold">{cont.description}</p>
					</div>
					<div className="md:w-2/5">
						<img
							src={cont.image}
							className="rounded-2xl"
						/>
					</div>
				</div>)
        )}
			</section>
  );
}
