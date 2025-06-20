import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./RelatedProductCard.module.css";
import TeklaButton from "../common/TeklaButton";

type Props = {
  id: number;
  title: string;
  price: string;
  image: string;
};

export default function RelatedProductCard({ id, title, price, image }: Props) {
  return (
    <Link href={`/products/${id}`} className={styles.related_product_card}>
      <div className={styles.related_product_image}>
        <Image fill style={{ objectFit: "cover" }} src={image} alt={title} />
      </div>
      <div className={styles.related_product_name_wrap}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>{price}</p>
      </div>
      <TeklaButton>{"Add to cart"}</TeklaButton>
    </Link>
  );
}
