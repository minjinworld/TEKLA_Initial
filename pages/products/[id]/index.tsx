import React from "react";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import MobileLayout from "@/components/layouts/MobileLayout";
import FooterSection from "@/components/home/FooterSection";

import { GetServerSideProps } from "next";
import HeaderSection from "@/components/home/HeaderSection";

type Product = {
  id: number;
  title: string;
  image: string;
  textureExplain?: string;
  productName: string;
  price: string;
  colorName: string;
  color: string;
  size: string;
  detailImages: {
    id: number;
    image: string;
  }[];
};

type Props = {
  product: Product;
};

export default function ProductDetailPage({ product }: Props) {
  return (
    <div className="productDetail">
      <MobileLayout padding="12px">
        <HeaderSection />
        <ProductDetail product={product} />
        <FooterSection />
      </MobileLayout>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;
  // const res = await fetch(`http://localhost:4001/products/${id}`);
  // const res = await fetch(
  //   `https://tekla-json-server-production.up.railway.app/api/products/${id}`
  // );
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  console.log("baseURL in getServerSideProps:", baseURL);

  const res = await fetch(`${baseURL}/products/${id}`);

  if (!res.ok) {
    console.error("서버 응답 에러:", await res.text());
    return { notFound: true };
  }

  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
