"use client";
import { useRouter } from "next/navigation";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

export default function NavigationButtons() {
  const router = useRouter();
  return (
    <nav className="mt-[4.8rem] flex gap-2">
      <button
        className="flex h-[1.5rem] w-[2rem] items-center justify-center rounded-md border bg-[#f1f5f9]"
        onClick={() => router.back()}
      >
        <ArrowLongLeftIcon className="h-6 " />
      </button>
      <button
        className="flex h-[1.5rem] w-[2rem] items-center justify-center rounded-md border bg-[#f1f5f9]"
        onClick={() => router.forward()}
      >
        <ArrowLongRightIcon className="h-6" />
      </button>
    </nav>
  );
}
