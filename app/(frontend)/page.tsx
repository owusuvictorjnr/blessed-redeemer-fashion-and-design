"use client";


import { HomeCategories } from "@/components/HomeCategories";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
      <section>
        <LandingPage />
      </section>

      {/* Categories */}
      <section className="">
     <HomeCategories />
      </section>
    </div>
  );
}
