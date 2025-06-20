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
              width={300}
              height={200}
              style={{ width: "100%", height: "100%" }}
              src={img.image}
              alt="Product image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
