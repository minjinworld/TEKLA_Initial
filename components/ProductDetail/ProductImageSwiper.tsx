import React from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./ProductImageSwiper.module.css";

type Props = {
  detailImages: {
    id: number;
    image: string;
  }[];
};

export default function ProductImageSwiper({ detailImages }: Props) {
  console.log(detailImages);
  return (
    <div className={styles.product_slide}>
      <Swiper
        modules={[Pagination]}
        pagination={{ type: "progressbar" }}
        spaceBetween={0}
        slidesPerView={1}
        className="swiper-pdp-gallery"
      >
        {detailImages.map((img) => (
          <SwiperSlide key={img.id} className={styles.slide}>
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={img.image}
              alt="Product image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
