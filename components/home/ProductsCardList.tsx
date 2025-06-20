import React from "react";
import ProductsCard from "./ProductsCard";
import styles from "./ProductsCardList.module.css";

type Product = {
  id: number;
  title: string;
  image: string;
  productName: string;
  price: string;
};

type Props = {
  products: Product[];
  limit?: number;
  offset?: number;
};

export default function ProductsCardList({
  products,
  limit,
  offset = 0,
}: Props) {
  const visibleProducts =
    typeof limit === "number"
      ? products.slice(offset, offset + limit)
      : products.slice(offset);

  return (
    <div className={styles.gridWrap}>
      {visibleProducts.map((item) => (
        <ProductsCard
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
}
