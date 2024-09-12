import NewYear from "./NewYear";
import TopNavigation from "./TopNavigation";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./Footer"));
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col bg-[#f5f5f5]">
      <TopNavigation />
      {children}
      <Footer />
      {/* <NewYear /> */}
    </main>
  );
}
