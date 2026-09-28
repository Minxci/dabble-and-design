import type { Metadata } from "next";
import { Caveat_Brush, Nunito } from "next/font/google";
import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const caveatBrush = Caveat_Brush({ weight: "400", subsets: ["latin"], variable: "--font-caveat-brush" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Dabble & Design Co. | Custom Apparel in Moline, IL",
  description:
    "Custom shirts, gifts, team apparel and business partner orders, made with a little Dabble & Design magic.",
  icons: {
    icon: "/logo.png?v=2",
    apple: "/logo.png?v=2",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${caveatBrush.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased">
        <AnnouncementBar />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}