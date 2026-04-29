import type { Metadata } from "next";
// 1. We import the magical fonts alongside Geist
import {
  Geist,
  Geist_Mono,
  Dancing_Script,
  Amita,
  Rasa,
  Tiro_Bangla,
} from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Configure your English mystical font
const dancing_script = Dancing_Script({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

// 3. Configure your Sanskrit/Devanagari font
const amita = Amita({
  weight: ["400", "700"],
  subsets: ["devanagari"],
  variable: "--font-amita",
});

// 4. Configure your Gujarati font
const rasa = Rasa({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-rasa",
});

// 5. Configure your Bengali font
const tiroBangla = Tiro_Bangla({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-tiro-bangla",
});

export const metadata: Metadata = {
  title: "Varsha Rana | Portfolio",
  description: "Personal portfolio and development projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // 4. Inject the new font variables into the HTML tag
      className={`${geistSans.variable} ${geistMono.variable} ${dancing_script.variable} ${amita.variable} ${rasa.variable} ${tiroBangla.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
