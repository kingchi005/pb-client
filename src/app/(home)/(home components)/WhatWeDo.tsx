import { CheckCircleIcon } from "@heroicons/react/24/solid";

const whatWeDoData = [
  {
    id: 1,
    header: "Student Examinations",
    content:
      "We organize a wide range of educational examinations, nuturing students of different age and academic level. These examinations aim to assess and improve students' knowledge and skills in various subjects.",
  },
  {
    id: 2,
    header: "Scholarship Opportunities",
    content:
      "We offer valuable guidance and resources to students seeking scholarships for further education. Our scholarship programs include workshops, application support, and information on available opportunities.",
  },
  {
    id: 4,
    header: "Textbook Distribution",
    content:
      "We understand the importance of learning materials. We provide textbooks and educational resources to students to enhance their academic journey, making quality education accessible to all.",
  },
  {
    id: 6,
    header: "Support for Academic Excellence",
    content:
      "Recognizing and rewarding academic excellence is vital. We honor and support students who achieve outstanding results in our examinations, motivating them to excel further.",
  },
  {
    id: 7,
    header: "Partnerships and Collaboration",
    content:
      "We actively seek partnerships with local and international educational institutions, companies, and other organizations that share our vision. Collaboration helps us expand our reach and impact globally.",
  },

  {
    id: 8,
    header: "Advocacy for Education",
    content:
      "We advocate for the importance of education and the need for equal access to quality learning. Our initiatives include raising awareness about educational issues.",
  },
];

type cardProp = {
  item: {
    id: number;
    header: string;
    content: string;
  };
};

const WhatWeDoCard = ({ item }: cardProp) => {
  return (
    <div key={item.id} className="flex gap-4 rounded-md p-2 shadow-md">
      <CheckCircleIcon className="h-[6rem] w-[6rem] text-primary" />
      <div className="flex flex-col">
        <h3 className="font-poppins font-bold text-primary">{item.header}</h3>
        <p className="font-inter text-sm text-secondary">{item.content}</p>
      </div>
    </div>
  );
};

export default function WhatWeDo() {
  return (
    <section className="mx-auto mt-10 w-[90%] md:w-[80%]">
      <h2 className="relative mx-auto mb-4 flex w-fit items-center justify-center px-6 font-righteous text-lg font-semibold text-primary before:absolute before:-bottom-2 before:h-1 before:w-full before:bg-primary md:text-2xl">
        What we Do
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {whatWeDoData.map((item) => {
          return <WhatWeDoCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}
