import React, { useEffect } from "react";
import styles from "./ProductDetail.module.css";
import RelatedProductSlider from "./RelatedProductSlider";
import ProductImageSwiper from "./ProductImageSwiper";
import TeklaButton from "../common/TeklaButton";

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

export default function ProductDetail({ product }: Props) {
  useEffect(() => {
    console.log("클라이언트 baseURL:", process.env.NEXT_PUBLIC_API_URL);
  }, []);

  return (
    <div className={styles.product_detail_wrap}>
      <ProductImageSwiper detailImages={product.detailImages} />

      <p className={styles.texture_explain}>{product.textureExplain}</p>

      <div className={styles.info}>
        <div className={styles.title_wrap}>
          <span className={styles.title}>{product.productName}</span>
          <span className={styles.price}>{product.price}</span>
        </div>

        <div className={styles.color_size_wrap}>
          <span className={styles.color_name}>{product.colorName}</span>

          <div className={styles.solid_box}>
            <span className={styles.solid}>Solid</span>

            <div className={styles.solidcolor}>
              <div
                className={styles.colorbox}
                style={{ background: product.color }}
              ></div>
            </div>
          </div>

          <span className={styles.size_info}>{product.size}</span>
        </div>

        <TeklaButton>{"Add to cart"}</TeklaButton>
      </div>

      <div className={styles.related_wrap}>
        <p className={styles.related_title}>Related products</p>

        <RelatedProductSlider productId={product.id} />
      </div>
    </div>
  );
}
