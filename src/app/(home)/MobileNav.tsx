"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "./TopNavigation";
import Link from "next/link";
import { Button } from "@/components";

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        className="absolute left-[50%] top-[5rem] flex w-[90%] translate-x-[-50%] flex-col bg-white p-2 font-oswald shadow-lg backdrop-invert backdrop-opacity-60 md:hidden"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 1, ease: "easeInOut" },
        }}
      >
        <div className="flex flex-col items-center gap-4 ">
          {navLinks.map((link) => {
            const active = pathname === link.url;
            return (
              <Link
                key={link.id}
                href={link.url}
                className={`w-fit font-[500] capitalize ${
                  active
                    ? "border-b-2 border-primary font-semibold text-primary"
                    : "text-secondary-500 border-0"
                } `}
              >
                {link.name}
              </Link>
            );
          })}
          <Link href={"/portal"}>
            <Button size="medium">Portal</Button>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
