import React from "react";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import MobileLayout from "@/components/layouts/MobileLayout";
import FooterSection from "@/components/common/FooterSection";
import HeaderSection from "@/components/common/HeaderSection";

import { GetStaticPaths, GetStaticProps } from "next";

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

export const getStaticPaths: GetStaticPaths = async () => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseURL}/products`);
  const products: Product[] = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseURL}/products/${id}`);

  if (!res.ok) {
    return { notFound: true };
  }

  const product = await res.json();

  return {
    props: { product },
    revalidate: 60, // 60초마다 재생성 (ISR)
  };
};
