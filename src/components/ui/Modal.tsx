"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
export default function Modal() {
  return (
    <AnimatePresence>
      <motion.div className="relative flex h-full w-full items-center justify-center">
        <motion.div
          className=" self-center bg-white p-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          this a container
        </motion.div>
        <button className="">
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
