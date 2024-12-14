import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    question: "What is the purpose of this organization?",
    ans: "Our organization is dedicated to organizing examinations for students while providing them with textbooks and opportunities for scholarship guidance and preparation.",
  },
  {
    id: 2,
    question: "How can students participate in these exams?",
    ans: "Students can participate by registering through our online portal or by following the registration process detailed on our website. We typically announce exam dates well in advance.",
  },
  {
    id: 4,
    question: "What kinds of exams are offered?",
    ans: "We offer a range of exams covering various subjects and educational levels, from school subjects to competitive exams. Details about the specific exams can be found on our website.",
  },
  {
    id: 6,
    question: "How do students benefit from the textbooks you provide?",
    ans: "After participating in our exams, students can receive textbooks that are relevant to their academic level and the subjects they have chosen. These textbooks are provided to enhance their learning and help them succeed in their studies.",
  },
  {
    id: 7,
    question: "How do you assist students in securing scholarships?",
    ans: "We offer scholarship guidance and preparation through workshops and seminars. Our experts provide valuable insights, tips, and resources to help students understand the scholarship application process and improve their chances of securing scholarships.",
  },
  {
    id: 9,
    question:
      "Are these scholarship opportunities limited to a specific field of study?",
    ans: "No, we strive to offer scholarship opportunities in a wide range of fields, including science, technology, arts, and more. Our aim is to support students pursuing diverse educational paths.",
  },
  {
    id: 10,
    question:
      "How can students stay updated on upcoming exams and scholarship workshops?",
    ans: "Students can regularly check our website and follow our social media channels for announcements about upcoming exams and scholarship workshops.",
  },
  {
    id: 11,
    question:
      "Are there any eligibility criteria for participating in these programs?",
    ans: "Eligibility criteria may vary for different exams and scholarship opportunities. Please check the specific eligibility requirements mentioned in the exam or scholarship details on our website.",
  },
];

export default function FAQS() {
  return (
    <section className="mx-auto mb-20 mt-[3rem] px-8 lg:w-2/3">
      <h2 className="mb-14 text-center text-4xl font-bold text-neutral-900/90">
        Frequently asked questions (FAQS)
      </h2>

      <Accordion type="single" collapsible className="mt-6">
        {faqs.map((item) => {
          return (
            <AccordionItem key={item.id} value={`item-${item.id}`}>
              <AccordionTrigger className=" text-md">
                <p className="flex justify-start gap-5">
                  <span className="bg-app-green/10 text-app-primary grid h-6 w-6 place-items-center rounded-full text-lg font-bold">
                    ?
                  </span>
                  <span className="font-semibold text-neutral-700">
                    {item.question}
                  </span>
                </p>
              </AccordionTrigger>
              <AccordionContent className="text-md font-normal text-neutral-500">
                <p className="ms-12">{item.ans}</p>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
}
