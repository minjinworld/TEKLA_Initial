import React, { useEffect, useState } from "react";
import styles from "./RelatedProductSlider.module.css";
import RelatedProductCard from "./RelatedProductCard";
import data from "@/backend/db.json";

const { products } = data;

type Props = {
  productId: number;
};

export default function RelatedProductSlider({ productId }: Props) {
  const [relatedProducts, setRelatedProducts] = useState<typeof products>([]);

  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    const randomProducts = shuffled.slice(0, 3);
    setRelatedProducts(randomProducts);
  }, [productId]);

  useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    const randomProducts = shuffled.slice(0, 3);
    setRelatedProducts(randomProducts);
  }, []);
  return (
    <div className={styles.related_slide}>
      {relatedProducts.map((product) => (
        <RelatedProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
