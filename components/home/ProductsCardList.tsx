import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import styles from "./ProductsCardList.module.css";

type Product = {
  id: number;
  title: string;
  image: string;
};

type Props = {
  limit?: number;
  offset?: number;
};

export default function ProductsCardList({ limit, offset }: Props) {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:4001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const visibleProducts =
    typeof limit === "number"
      ? products.slice(0, limit)
      : products.slice(offset ?? 0);

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
