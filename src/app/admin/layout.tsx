"use client";
import { ReactNode, useEffect, useLayoutEffect, useState } from "react";
import { redirect, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import SideBar from "./SideBar";
import TopBar from "./TopBar";
import NavigationButtons from "./NavigationButtons";
import { Loader, Overlay } from "@/components";
import { getSession } from "@/lib/axios/requests";
import { useAuth } from "@/hooks/useAuth";

type LayoutProp = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProp) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(false);

  useLayoutEffect(() => {
    getSession()
      .then((data) => {
        setUser(true);
      })
      .catch((err) =>
        console.log(() => {
          redirect("/login");
        }),
      )
      .finally(() => setIsLoading(false));
  }, [router]);

  if (isLoading && !user) {
    return (
      <Overlay>
        <Loader />
      </Overlay>
    );
  }

  // if (!isUser && !isLoading) {
  //   return redirect("/login");
  // }

  return (
    <main className="flex max-h-screen min-h-screen overflow-y-auto">
      <SideBar screen="desktop" />
      <section className="max-h-screen w-full flex-1 overflow-y-auto px-2 md:w-8/12">
        <TopBar />
        <NavigationButtons />
        {children}
      </section>
    </main>
  );
}
