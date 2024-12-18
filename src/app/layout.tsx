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
const ADSENCE = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1560521870894592"
     crossorigin="anonymous"></script>`;

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
			<html lang="en" className={`${poppins.className}`}>
				<body>
					{children}
					<Toaster />
					<div dangerouslySetInnerHTML={{ __html: ADSENCE }} />
				</body>
			</html>
		</Providers>
	);
}
