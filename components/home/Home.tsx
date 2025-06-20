import React from "react";
import MobileLayout from "../layouts/MobileLayout";
import HeaderSection from "./HeaderSection";
import BannerSection from "./BannerSection";
import TextBlock from "./TextBlock";
import ProductsCardList from "./ProductsCardList";
import FeaturedSection from "./FeaturedSection";
import FooterSection from "./FooterSection";

export default function Home() {
  return (
    <div className="fade-in">
      <MobileLayout>
        <HeaderSection />
        <BannerSection />
        <TextBlock />
        <ProductsCardList limit={2} />
        <FeaturedSection />
        <ProductsCardList offset={2} />
        <FooterSection />
      </MobileLayout>
    </div>
  );
}
