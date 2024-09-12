"use client";
import React, { RefObject } from "react";

import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components";
import { PowerIcon } from "@heroicons/react/24/solid";
import { logout } from "@/lib/axios/requests";
const sideBarLinks = [
  {
    id: 1,
    title: "Dashboard",
    link: "/admin/dashboard",
    imgUrl: "/svg/dashboard_icon.svg",
  },
  {
    id: 2,
    title: "Students",
    link: "/admin/students",
    imgUrl: "/svg/employee_user_icon.svg",
  },
  // {
  //   id: 3,
  //   title: "Results",
  //   link: "/admin/results",
  //   imgUrl: "/svg/community.svg",
  // },
  {
    id: 4,
    title: "Events",
    link: "/admin/events",
    imgUrl: "/svg/coin-dollar.svg",
  },
  // {
  //   id: 5,
  //   title: "Announcements",
  //   link: "/admin/announcements",
  //   imgUrl: "/svg/clipboard.svg",
  // },
  {
    id: 6,
    title: "Schools",
    link: "/admin/schools",
    imgUrl: "/svg/task.svg",
  },
  {
    id: 6,
    title: "Competitions",
    link: "/admin/competitions",
    imgUrl: "/svg/task.svg",
  },
  // {
  //   id: 7,
  //   title: "Settings",
  //   link: "/admin/settings",
  //   imgUrl: "/svg/setting.svg",
  // },
];

type SideBarProps = {
  screen: "desktop" | "mobile";
  sideBarRef?: RefObject<any>;
};

export default function SideBar({ screen, sideBarRef }: SideBarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logout()
      .then(() => router.push("/login"))
      .catch((err) => toast.error("Error logging out"));
  };

  return (
    <aside
      ref={sideBarRef}
      className={`relative  flex-col  ${
        screen === "desktop"
          ? "hidden p-[1.28rem] md:flex md:w-4/12 lg:w-3/12"
          : "flex h-full w-8/12 bg-white"
      } `}
    >
      <div className="flex h-full w-full flex-col rounded-md px-2 py-[1.87rem] md:bg-[#A2A1A819] md:p-[1.87rem] md:px-4">
        <h2 className="text-center font-righteous">
          <span className="text-primary">PB</span> Cambridge Consult
        </h2>
        <section className="mt-6 flex flex-col gap-4">
          {sideBarLinks.map((item) => {
            const active = pathname.includes(item.link);
            return (
              <Link
                href={item.link}
                key={item.id}
                className={`flex items-center gap-2 px-4 py-2 font-inter ${
                  active
                    ? "border-l-primary-800 rounded-md border-l-2 bg-primary font-semibold text-white"
                    : "bg-transparent"
                }`}
              >
                <Image
                  src={item.imgUrl}
                  alt=""
                  height={18}
                  width={18}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  className={`${active ? "svg-color" : ""} `}
                />
                <p className="text-sm">{item.title}</p>
              </Link>
            );
          })}
        </section>
        <div className="mt-auto flex items-center gap-2">
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
        <button
          onClick={handleLogout}
          className="mt-4 flex items-center justify-center gap-4 rounded-2xl border border-primary py-1 font-semibold text-primary md:mt-auto"
        >
          Logout <PowerIcon className="h-6 w-6 stroke-[6px]" />{" "}
        </button>
      </div>
    </aside>
  );
}
