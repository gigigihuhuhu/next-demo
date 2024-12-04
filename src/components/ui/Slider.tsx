"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import { AngleNextIcon, AnglePrevIcon } from "@/components/Icons";

export default function Slider() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        breakpoints={{
          768: {
            slidesPerView: 1.4,
            spaceBetween: 5,
          },
        }}
        slidesPerView={1.1}
        spaceBetween={5}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="max-w-[90%] max-md:max-w-[100%]"
      >
        {[1, 2, 3, 4, 5, 6].map((i) => {
          // slide samples
          return (
            <SwiperSlide key={i}>
              <div className="relative w-[64vw] max-md:w-[91vw] h-[400px] max-md:h-[360px]">
                <Image
                  alt=""
                  src={`https://cdn.kyungsu.com/samples/panel/pc/panel-sample${
                    (i % 3) + 1
                  }.webp`} // number of samples not enough for infinite loop
                  sizes="auto"
                  fill
                  className="object-cover rounded-3xl"
                  priority
                ></Image>
              </div>
            </SwiperSlide>
          );
        })}
        <button // buttons for navigation
          className="swiper-button-prev w-12 h-12 rounded-full transition-colors duration-200 hover:bg-gray-700 bg-gray-700/50 absolute left-[11%] top-[50%] translate-y-[-50%] z-10 flex items-center justify-center"
        >
          <AnglePrevIcon fill="white"></AnglePrevIcon>
        </button>
        <button className="swiper-button-next w-12 h-12 rounded-full  transition-colors duration-200 hover:bg-gray-700 bg-gray-700/50 absolute right-[11%] top-[50%] translate-y-[-50%] z-10 flex items-center justify-center">
          <AngleNextIcon fill="white"></AngleNextIcon>
        </button>
      </Swiper>
    </>
  );
}
