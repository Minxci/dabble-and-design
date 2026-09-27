import type { Metadata } from "next";
import { Caveat_Brush, Fraunces, Nunito } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", axes: ["SOFT", "opsz"] });
const caveatBrush = Caveat_Brush({ weight: "400", subsets: ["latin"], variable: "--font-caveat-brush" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });

export const metadata: Metadata = {
  title: "Dabble & Design Co. | Custom Apparel in Moline, IL",
  description:
    "Custom shirts, gifts, team apparel and business partner orders, made with a little Dabble & Design magic.",
  icons: {
    icon: "/logo.png?v=2",
    apple: "/logo.png?v=2",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${caveatBrush.variable} ${nunito.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}