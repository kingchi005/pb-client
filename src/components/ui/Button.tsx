import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type buttonProps = {
  size?: "small" | "medium" | "fullwidth";
  type?: "button" | "submit";
  children: ReactNode;
  disabled?: boolean;
  className?: string;
  iconRight?: ReactNode;
  onClick?: () => void;
};

export default function Button({
  size,
  type,
  children,
  disabled,
  className,
  iconRight,
  onClick,
}: buttonProps) {
  const normal =
    "bg-primary flex items-center justify-center gap-2 text-white rounded-md hover:bg-[#0284c7] disabled:bg-disabled transition-colors duration-150 px-2 w-fit";
  const defaultClasses = cn(normal, {
    " w-[5rem]": size === "small",
    " w-[12rem]": size === "medium",
    " w-full": size === "fullwidth",
  });

  const combinedClasses = cn(defaultClasses, className);

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
      {iconRight}
    </button>
  );
}
