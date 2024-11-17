"use client";

import Footer from "@/components/Footer";
import FirstTopbar from "@/components/Navbar/firstTopbar";
import SecondTopbar from "@/components/Navbar/secondTopbar";

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <FirstTopbar />
      <SecondTopbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
}
