import React from "react";
import styles from "./ProductsCard.module.css";
import Link from "next/link";
import Image from "next/image";

type Props = {
  id: number;
  title: string;
  image: string;
};

export default function ProductsCard({ id, title, image }: Props) {
  return (
    <Link href={`/products/${id}`} className={styles.products_card_box}>
      <div className={styles.product_image}>
        <Image
          width={300}
          height={200}
          style={{ width: "100%", height: "100%" }}
          src={image}
          alt={title}
        />
      </div>

      <p className={styles.product_name}>{title}</p>
    </Link>
  );
}
