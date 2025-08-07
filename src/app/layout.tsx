import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";




export const metadata: Metadata = {
  title: "car management",
  description: "Manage your car inventory with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="relative"
        suppressHydrationWarning={true}  // Prevent hydration errors
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
