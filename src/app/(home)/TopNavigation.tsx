"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useClickAwayListener from "@/hooks/useClickwayListener";
import dynamic from "next/dynamic";

import { Bars3Icon } from "@heroicons/react/24/solid";
import { Button } from "@/components";
import Announcement from "./(home components)/Announcement";

export const navLinks = [
  { id: 1, name: "home", url: "/" },
  { id: 2, name: "events", url: "/events" },
  { id: 3, name: "about us", url: "/about" },
  { id: 4, name: "contact us", url: "/contact" },
];
const MobileNav = dynamic(() => import("./MobileNav"));

export default function TopNavigation() {
  const pathname = usePathname();
  const [navVisible, setNavVisible] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement | null>(null);
  useClickAwayListener(mobileNavRef, () => setNavVisible(false));

  useEffect(() => {
    setNavVisible(false);
  }, [pathname]);

  return (
    <header
      ref={mobileNavRef}
      className=" fixed z-[500] flex w-full flex-col  bg-white   shadow-md "
    >
      {/* <Announcement /> */}
      <div className="flex w-full items-center px-4 py-2 md:px-[2rem] lg:px-[4rem]">
        <div className="flex items-center gap-2 md:flex-1">
          <Image
            src={"/images/logo.jpg"}
            alt="logo"
            height={60}
            width={60}
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
          />
          <Link href={"/"} className=" font-righteous text-xs font-[600]">
            <span className="text-primary">PB</span>{" "}
            <span className="text-secondary-500">Cambridge Consult</span>
          </Link>
        </div>
        <div className="hidden items-center justify-evenly md:flex md:flex-[0.7]">
          {navLinks.map((link) => {
            const active = pathname === link.url;
            return (
              <Link
                key={link.id}
                href={link.url}
                className={`font-oswald text-base font-[500] capitalize ${
                  active ? "border-b-2 border-primary" : "border-0"
                } text-primary`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            className="rounded-3xl bg-app-primary px-6 py-1.5 pb-2 text-sm text-white"
            href={"/portal"}
          >
            Portal
          </Link>
        </div>
        <button
          className="ml-auto"
          onClick={() => setNavVisible((prev) => !prev)}
        >
          <Bars3Icon
            className="h-6 w-6 text-primary md:hidden"
            aria-hidden="true"
            aria-label="menu"
          />
        </button>
        {navVisible && <MobileNav />}
      </div>
    </header>
  );
}
