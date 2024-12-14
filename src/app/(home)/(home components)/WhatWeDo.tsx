import { CheckCircleIcon } from "@heroicons/react/24/solid";

const whatWeDoData = [
  {
    id: 1,
    header: "Student Examinations",
    icon: "/svg/examination.svg",
    content:
      "We organize a wide range of educational examinations, nuturing students of different age and academic level. These examinations aim to assess and improve students' knowledge and skills in various subjects.",
  },
  {
    id: 2,
    header: "Scholarship Opportunities",
    icon: "/svg/scholarship.svg",
    content:
      "We offer valuable guidance and resources to students seeking scholarships for further education. Our scholarship programs include workshops, application support, and information on available opportunities.",
  },
  {
    id: 4,
    header: "Textbook Distribution",
    icon: "/svg/textbook.svg",
    content:
      "We understand the importance of learning materials. We provide textbooks and educational resources to students to enhance their academic journey, making quality education accessible to all.",
  },
  {
    id: 6,
    header: "Support for Academic Excellence",
    icon: "/svg/support.svg",
    content:
      "Recognizing and rewarding academic excellence is vital. We honor and support students who achieve outstanding results in our examinations, motivating them to excel further.",
  },
  {
    id: 7,
    header: "Partnerships and Collaboration",
    icon: "/svg/partnerships.svg",
    content:
      "We actively seek partnerships with local and international educational institutions, companies, and other organizations that share our vision. Collaboration helps us expand our reach and impact globally.",
  },

  {
    id: 8,
    header: "Advocacy for Education",
    icon: "/svg/advocacy.svg",
    content:
      "We advocate for the importance of education and the need for equal access to quality learning. Our initiatives include raising awareness about educational issues.",
  },
];

type cardProp = {
  item: {
    id: number;
    icon: string;
    header: string;
    content: string;
  };
};

const WhatWeDoCard = ({ item }: cardProp) => {
  return (
    <div key={item.id} className="flex gap-4 rounded-md bg-neutral-50 p-10">
      {/* <CheckCircleIcon className="h-[6rem] w-[6rem] text-primary" /> */}
      <div className="flex flex-col gap-3">
        <div className="mb-14 flex justify-center">
          <img src={item.icon} className="size-20 text-center" alt="" />
        </div>
        <h3 className="font-poppins text-xl font-bold text-neutral-900">
          {item.header}
        </h3>
        <p className="font-inter text-sm text-neutral-500">{item.content}</p>
      </div>
    </div>
  );
};

export default function WhatWeDo() {
  return (
    <section className="mx-auto mb-20 mt-10 w-[90%] md:w-[80%]">
      <h2 className="mb-14 text-center text-4xl font-bold text-neutral-900/90">
        What we Do
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
        {whatWeDoData.map((item) => {
          return <WhatWeDoCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}
