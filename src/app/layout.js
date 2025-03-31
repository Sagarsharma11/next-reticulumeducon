import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import Notice from "../components/Notice/Notice";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Reticulum Educon",
  description: "Expert MBBS Admission Consultation | Reticulum Educon LLP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="synthweave">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Notice />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
