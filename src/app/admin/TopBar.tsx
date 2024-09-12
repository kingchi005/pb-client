"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import useClickAwayListener from "@/hooks/useClickwayListener";
import { AnimatePresence, motion } from "framer-motion";

import { Avatar, Overlay } from "@/components";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import SideBar from "./SideBar";

type MobileSideNavProp = {
  isVisible: boolean;
  openSideNav: (value: boolean) => void;
};

const MobileSideNav = ({ isVisible, openSideNav }: MobileSideNavProp) => {
  const sideBarRef = useRef(null);
  useClickAwayListener(sideBarRef, () => openSideNav(false));
  return (
    <Overlay>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="relative h-full w-full"
            initial={{ x: "-100vw" }}
            animate={{ x: 0, transition: { duration: 0.8, ease: "easeOut" } }}
            exit={{
              x: "-100vw",
              transition: { duration: 0.8, ease: "easeIn" },
            }}
          >
            <SideBar screen="mobile" sideBarRef={sideBarRef} />
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="absolute right-4 top-4 border border-white"
        onClick={() => openSideNav(false)}
      >
        <XMarkIcon className="h-8 w-8 text-white" />
      </button>
    </Overlay>
  );
};

export default function TopBar() {
  const pathname = usePathname();
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  useEffect(() => {
    setMobileNavVisible(false);
  }, [pathname]);
  return (
    <div className="fixed right-0 z-[500] flex w-full items-center gap-2 bg-white  p-4 shadow-sm md:w-9/12 ">
      <button onClick={() => setMobileNavVisible(true)}>
        <Bars3Icon className="h-8 w-8 text-primary md:hidden" />
      </button>
      <Image
        src={"/images/logo.jpg"}
        alt="site logo"
        height={40}
        width={40}
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        className=""
      />
      <div className="border-gray ml-auto hidden h-[2rem] items-center rounded-md border px-2 md:flex">
        <MagnifyingGlassIcon className=" text-gray h-6 w-6" />
        <input type="search" placeholder="search" />
      </div>

      <MagnifyingGlassIcon className=" ml-auto h-6 w-6 md:hidden" />
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#A2A1A819] p-1">
        <Image
          src={"/svg/bell.svg"}
          alt="site logo"
          height={30}
          width={30}
          sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
        />
      </div>

      <div className="hidden items-center gap-2 md:flex">
        <Avatar
          imageUrl="/images/girl.jpg"
          alt="girl"
          rounded="md"
          size="small"
        />
        <div className="flex flex-col text-sm">
          <p className="font-bold">Robert Allen</p>
          <p>Admin</p>
        </div>
      </div>

      {mobileNavVisible && (
        <MobileSideNav
          isVisible={mobileNavVisible}
          openSideNav={setMobileNavVisible}
        />
      )}
    </div>
  );
}
