import Providers from "@/components/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Inter, Poppins, Oswald, Righteous, Manrope } from "@next/font/google";

export const metadata: Metadata = {
  title: "PB Cambridge Consult",
  icons: {
    icon: "/images/logo.jpg",
  },
  description:
    "Organizing exams, awarding certificates, and providing scholarship opportunities for students. Empowering futures through education.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",

  variable: "--font-inter",
});

const righteous = Righteous({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-righteous",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  display: "swap",

  variable: "--font-poppins",
});

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",

  variable: "--font-oswald",
});

// const manrope = Manrope({
//   subsets: ["latin"],
//   display: "swap",

//   variable: "--font-manrope",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <html
        lang="en"
        className={`${inter.variable} ${righteous.className} ${poppins.className} ${oswald.className}`}
      >
        <body>
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
