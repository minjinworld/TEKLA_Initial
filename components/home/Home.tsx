import React from "react";
import MobileLayout from "../layouts/MobileLayout";
import HeaderSection from "./HeaderSection";
import BannerSection from "./BannerSection";
import TextBlock from "./TextBlock";
import ProductsCardList from "./ProductsCardList";
import FeaturedSection from "./FeaturedSection";
import FooterSection from "./FooterSection";

type Product = {
  id: number;
  title: string;
  image: string;
  productName: string;
  price: string;
};

type Props = {
  products: Product[];
};

export default function Home({ products }: Props) {
  return (
    <div className="fade-in">
      <MobileLayout>
        <HeaderSection />
        <BannerSection />
        <TextBlock />
        <ProductsCardList products={products} limit={2} />
        <FeaturedSection />
        <ProductsCardList products={products} offset={2} />
        <FooterSection />
      </MobileLayout>
    </div>
  );
}
