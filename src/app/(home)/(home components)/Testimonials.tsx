"use client";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper as swiperType } from "swiper/types";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Avatar } from "@/components";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

const slideData = [
  {
    id: 1,
    name: "Grace Mbalisi",
    school: "University of Maryland Baltimore Maryland U.S.A",
    year: "Class 2020",
    content: `Pb Cambridge Consult has exposed me more about the SAT Exam. This consult assured me my success which was gained. 
    This great academy is a blessing to my life, it has made way for me in my academics. Pb Cambridge Consult was with me throughout the process in getting admissions and scholarships in different schools in the United States of America.
    I’m so grateful for this Academy that has impacted more knowledge in me . 
    Thank you Pb Cambridge Academy!!!!!`,
    photo: "/images/Grace Mbalisi.jpg",
  },
  {
    id: 2,
    name: "Chizuberem Ferdy-Mbagwu.",
    school: "Jacksonville University, Florida U.S.A",
    year: "Class 2022",
    content: `I got to know of PB Cambridge Consult while in my final year in secondary school.My school was opportune to be one of the schools that benefited from the organisation's outreach. Starting from the SAT practice mock exams to the tutorials on apppying to colleges in the US,as well as Visa Interview practice sessions. I must say,before I got acquainted with PB Cambridge, I had always tried applying to schools abroad on my own but unfortunately,my efforts always   led to a dead end. "Ignorance indeed is a disease and information is power", I confirmed this statement when I finally joined the organisation. To the glory of God,I got accepted into 5 schools in the US each with huge amount of scholarships and hence, my plan to pursue my dream of studying in the United States gradually came to reality. Thank you PB Cambridge🔥
`,
    photo: "/images/florida.jpg",
  },
  {
    id: 3,
    name: "Aliche Nnaemeka",
    school: "SAIT Alberta Calgary Canada",
    year: "Class 2021",
    content: `Joining the PB Cambridge consult was sudden for me at first because I wasn't sure of what I was doing but along the line, it made me get exposed to how the system works outside Nigeria. It was an amazing experience for me preparing for the SAT, writing the SAT, Writing personal statements and essays for college applications and with the help of PB Cambridge consult, My essays became more better than how it was, just mention a few of what I've gained from PB Cambridge consult.
    Lastly, I'm glad because it's paying off, already receiving College acceptance letter and scholarships. Forever grateful to have joined the PB Cambridge consult 🙌🙌🙌`,
    photo: "/images/emeka.jpg",
  },
  {
    id: 4,
    name: "Ekeocha Samuel",
    school: "Regina University Saskatchewan Regina Canada",
    year: "Class 2022",
    content: `Helping someone is a way to show you care. Further on, I will state how a group,pb Cambridge consult, has helped me in my application for schooling abroad.
    There was a time the group came to my school,Alvana Model School Ow., to brief us about schooling abroad and how to apply.
    Those who were interested meet the head of the group, Miss Buba Percious, so she set up a meeting for us to discuss; then she told us about SAT, test for school entrance and scholarship, and she walked us through it.After the test she guided us throughout our application.
    I have always wanted to school abroad; if not for pb Cambridge consult group, I will not have known what is involved in applying to school abroad. Thanks alot for your time and guidance.`,
    photo: "/images/eko-sam.jpg",
  },
];

interface StudentItemProps {
  item: {
    id: number;
    name: string;
    school: string;
    year: string;
    content: string;
    photo: string;
  };
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const Slide = ({ item, setActiveIndex }: StudentItemProps) => {
  const swiperSlide = useSwiperSlide();
  useEffect(() => {
    setActiveIndex(item.id);
  }, [swiperSlide.isActive, item.id, setActiveIndex]);

  return (
    <div className="mx-auto w-[80%] rounded-3xl border-2 border-app-primary/70 bg-white p-10 px-14 md:w-[60%] xl:w-[50%]">
      <div className="mb-10 flex items-center gap-14">
        <img src={item.photo} className="h-20 w-20 rounded-lg object-cover" />
        <div className="space-y-2 text-start">
          <p className="text-2xl font-bold">{item.name}</p>
          <p className="text-sm text-app-primary">{item.school}</p>
        </div>
      </div>
      <div>
        <p className="text-start  text-neutral-500">{item.content}</p>
      </div>
    </div>
  );

  return (
    <div className="mx-auto flex w-[90%] flex-col gap-4 px-2  py-[1rem] shadow-lg md:w-[80%]  md:flex-row">
      <div className="flex flex-col items-center justify-stretch gap-4 md:w-1/2">
        <Avatar
          imageUrl={item.photo}
          alt={`${item.name} image`}
          size="large"
          className="h-[15rem] w-[15rem] object-center md:h-[20rem] md:w-[20rem]"
        />
        <p className="text-md font-semibold">{item.name}</p>
        <p className="text-xs text-secondary-gray">{item.school}</p>
        <p className="text-xs text-secondary-gray">{item.year}</p>
      </div>
      <div
        className="flex items-center justify-center text-primary-foreground md:w-1/2"
        id="talkbubble"
      >
        <p className="p-4 font-inter text-sm font-normal leading-6">
          {item.content}
        </p>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const [swiperInstance, setSwiperInstance] = useState<swiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(1);
  return (
    <section className="relative mb-20 mt-[4rem] flex flex-col pb-[2rem] text-center">
      <h2 className="mb-14 text-center text-4xl font-bold text-neutral-900/90">
        Testimonials
      </h2>

      <div className="relative mx-auto mt-12 w-full flex-1">
        <Swiper
          grabCursor={true}
          speed={3000}
          onSwiper={setSwiperInstance}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: "bullets",
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className="relative h-full"
        >
          {slideData.map((item) => {
            return (
              <SwiperSlide key={item.id} className="h-[80%]">
                <Slide item={item} setActiveIndex={setActiveIndex} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* custom navigation buttons */}
      <button
        className="text-primary-primaryforground absolute left-[2rem] top-[4rem]  z-[200] flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white md:top-[50%] md:translate-y-[-50%] lg:left-[5rem]"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <ChevronLeftIcon
          className="h-6 w-6"
          aria-hidden="true"
          aria-label="previous slide"
        />
      </button>
      <button
        className="text-primary-primaryforground absolute right-[2rem] top-[4rem]  z-[200] flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white md:top-[50%] md:translate-y-[-50%] lg:right-[5rem]"
        onClick={() => swiperInstance?.slideNext()}
      >
        <ChevronRightIcon
          className="h-6 w-6"
          aria-hidden="true"
          aria-label="next slide"
        />
      </button>

      {/* custom active indicator */}
      <div className="absolute bottom-4 flex w-full justify-center gap-4">
        {Array.from({ length: slideData.length }, (_, index) => {
          return (
            <div
              key={index}
              className={`h-3 w-3 border-2 ${
                activeIndex === index + 1
                  ? "border-primary bg-primary"
                  : "border-primary bg-primary-foreground"
              } rounded-full bg-primary`}
            />
          );
        })}
      </div>
    </section>
  );
}
