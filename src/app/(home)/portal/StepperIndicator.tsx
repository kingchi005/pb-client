import { motion } from "framer-motion";
export default function StepperIndicator({ steps }: { steps: number }) {
  return (
    <div className="my-4">
      <div className="my-2 flex items-center justify-between font-righteous text-primary">
        <h3 className=" lg:text-xl">
          {steps === 1
            ? "Registration Details"
            : steps === 2
            ? "Payment Details"
            : "Acknowledgement Slip"}
        </h3>
        <p>Step {steps}/3</p>
      </div>
      <div className="relative h-[1rem] overflow-hidden rounded-md border border-secondary-gray">
        <motion.span
          className={`absolute bottom-0 top-0 ${
            steps === 1 ? "w-1/3" : steps === 2 ? "w-2/3" : "w-full"
          } bg-primary transition-all duration-500`}
        ></motion.span>
      </div>
    </div>
  );
}
