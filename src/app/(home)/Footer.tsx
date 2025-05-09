import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, name: "home", icon: "/svg/home.svg", link: "/" },
  { id: 2, name: "events", icon: "/svg/event.svg", link: "/events" },
  { id: 3, name: "about us", icon: "/svg/about.svg", link: "/about" },
  { id: 4, name: "contact us", icon: "/svg/contact.svg", link: "/contact" },
  { id: 5, name: "portal", icon: "/svg/portal.svg", link: "/portal" },
];
const socialLinks = [
  {
    id: 1,
    icon: "/svg/linkedin.svg",
    name: "linkdin",
    link: "https://www.linkedin.com/in/pb-cambridge-consult-781a07278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    id: 2,
    icon: "/svg/facebook.svg",
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=100071174163287&mibextid=9R9pXO",
  },
  {
    id: 3,
    icon: "/svg/instagram.svg",
    name: "instagram",
    link: "https://instagram.com/pb_cambridge_consult?igshid=MzNlNGNkZWQ4Mg==",
  },
  {
    id: 4,
    icon: "/svg/youtube.svg",
    name: "Youtube",
    link: "https://www.youtube.com/@pbcambridgeconsult",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      // style={{
      //   backgroundImage: "url(/images/housebw.png",
      //   objectFit: "contain",
      //   backgroundSize: "contain",
      // }}
      className="hero bg-neutral-800 bg-[url('/images/housebw.png')] bg-cover bg-center bg-no-repeat object-contain"
      // bg-neutral-800
    >
      <div className="relative mt-auto flex flex-col flex-wrap gap-x-5 gap-y-6  px-4 py-12 pb-[4rem] font-inter sm:flex-row lg:px-[4rem]">
        <div className="rounded-xl bg-neutral-700 p-5 md:w-2/4 lg:w-2/6">
          <p className="mb-3 text-base font-semibold text-white">
            <span className="text-primary">PB</span> Cambridge Consult
          </p>
          <p className="text-sm text-secondary-gray">
            Committed to providing access to quality education and scholarship
            opportunities, we believe that education is the cornerstone of a
            brighter future for all.
          </p>
        </div>
        <div className=" border-l border-l-neutral-700 ps-5">
          <h2 className="mb-5 text-sm font-semibold text-white">
            Useful Links
          </h2>
          <div className="mt-2 flex flex-col gap-2">
            {links.map((item) => {
              return (
                <Link
                  href={item.link}
                  key={item.id}
                  className="flex items-center gap-2 font-inter text-sm capitalize text-secondary-gray hover:underline"
                >
                  <span>
                    <img src={item.icon} alt="" className="size-10" />{" "}
                  </span>
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="border-l border-l-neutral-700 ps-5 md:w-2/4 md:text-start lg:w-1/4">
          <h2 className="mb-5 text-sm font-semibold text-white">
            Contact Info
          </h2>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm text-secondary-gray">
              <span>
                {/* <EnvelopeIcon className="h-4 w-4 text-primary" /> */}
                <img
                  src="/svg/contact/gmail.svg"
                  alt=""
                  className="size-10 text-neutral-600"
                />
              </span>{" "}
              <Link href={"mailto:pbcambridgeconsult@gmail.com"}>
                pbcambridgeconsult@gmail.com
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary-gray">
              <span>
                <img src="/svg/contact.svg" alt="" className="size-10" />{" "}
              </span>{" "}
              <Link href="tel:+2348167761550">+2348167761550</Link>
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary-gray">
              <img src="/svg/socials/whatsapp.svg" alt="" className="size-10" />
              <Link href={"https://wa.me/+2348167761550"}>+2348167761550</Link>
            </div>
          </div>
        </div>
        <div className="border-l border-l-neutral-700 ps-5 md:w-2/4 md:text-start lg:w-1/5">
          <h2 className="mb-5 text-sm font-semibold text-white">Follow Us</h2>
          <div className="mt-2 flex gap-4 md:justify-start">
            {socialLinks.map((item) => {
              return (
                <Link key={item.id} href={item.link}>
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                    sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <p className="absolute bottom-0 left-[50%] my-2 w-full translate-x-[-50%] text-center text-xs text-secondary-gray">
          &copy; {year} PB Cambridge Consult. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
