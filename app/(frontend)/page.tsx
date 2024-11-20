"use client";

import KidsBanner from "@/components/Banners/kidsBanner";
import WomenBanner from "@/components/Banners/womenBanner";
import FeaturedProd from "@/components/FeaturedProd";
import { HomeCategories } from "@/components/HomeCategories";
import LandingPage from "@/components/LandingPage";
import NewProducts from "@/components/NewProducts";
import SlidingText from "@/components/NewsSlider";
import ShirtsComponent from "@/components/Shirts";
import TrouserComponent from "@/components/Trouser";

export default function Home() {
  return (
    <div className="bg-[#F7F7FA]">
      <section>
        <LandingPage />
      </section>

      {/* Categories */}
      <section className="">
        <HomeCategories />
      </section>

      <section>
        {" "}
        <FeaturedProd />
      </section>

      <section>
        <KidsBanner />
      </section>

      <section>
        <NewProducts />
      </section>

      <section>
        <WomenBanner />
      </section>

      <section>
        <ShirtsComponent />
      </section>

      <SlidingText />

      <section>
        <TrouserComponent />
      </section>
    </div>
  );
}
