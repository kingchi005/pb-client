import { cn } from "@/lib/utils";
import Image from "next/image";

type AvatarProps = {
  imageUrl: string;
  size?: "small" | "medium" | "large";
  rounded?: "sm" | "md";
  alt: string;
  className?: string;
  placeholder?: "empty" | "blur" | "data:image/...";
  blurDataUrl?: string;
};

export default function Avatar({
  imageUrl,
  size,
  rounded,
  alt,
  className,
  placeholder,
  blurDataUrl,
}: AvatarProps) {
  const normal = "h-[3rem] w-[3rem] relative rounded-full overflow-hidden";

  const defaultClasses = cn(normal, {
    "h-[2rem] w-[2rem]": size === "small",
    "h-[4rem] w-[4rem]": size === "medium",
    "h-[5rem] w-[5rem]": size === "large",
    "rounded-sm": rounded === "sm",
    "rounded-md": rounded === "md",
  });
  const combinedClasses = cn(defaultClasses, className);
  return (
    <div className={combinedClasses}>
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        blurDataURL={blurDataUrl}
        placeholder={placeholder}
        className="h-[100%] w-[100%] object-fill object-center"
      />
    </div>
  );
}
