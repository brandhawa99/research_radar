import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Research Radar: Discover Jobs in Research - Find Your Next Career Opportunity",
  description:
    "Research Radar is your ultimate resource for navigating the dynamic landscape of research careers. Our innovative platform connects talented professionals with exciting opportunities in academia, industry, and beyond, empowering you to take the next step in your research career with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-100">
      <body className={[inter.className, "overflow-x-hidden"].join(" ")}>
        {children}
      </body>
    </html>
  );
}
