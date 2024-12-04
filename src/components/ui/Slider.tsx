"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

import { AngleNextIcon, AnglePrevIcon } from "@/components/Icons";
import { mainContentsSample, MainContents } from "@/data/sampleData";

export default function Slider() {
  const mainContents: Array<MainContents> = mainContentsSample;
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
        {mainContents.map((content, el) => {
          // slide samples
          return (
            <SwiperSlide key={el}>
              <div className="relative w-[64vw] max-md:w-[91vw] h-[400px] max-md:h-[360px]">
                <Image
                  alt=""
                  src={content.src}
                  sizes="auto"
                  fill
                  className="object-cover rounded-3xl"
                  priority={content.priority}
                  loading={content.priority ? undefined : "lazy"}
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAL0lEQVR42u3NMQEAAAgDINfVHlY3g4cfFCA99S4SiUQikUgkEolEIpFIJBKJ5GYB6wMsic3M3xIAAAAASUVORK5CYII="
                ></Image>
                <div className="absolute top-16 left-10 flex flex-col gap-4 items-start">
                  <div className="py-1 px-2 rounded-3xl text-sm text-white bg-purple-500 font-bold">
                    {content.chip.label}
                  </div>
                  <div className="flex flex-col gap-1">
                    {content.text.title.split("|").map((content, el) => {
                      return (
                        <p key={el} className="text-3xl text-white font-bold">
                          {content}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex flex-col gap-1">
                    {content.text.detail.split("|").map((content, el) => {
                      return (
                        <p key={el} className="text-sm text-slate-400">
                          {content}
                        </p>
                      );
                    })}
                  </div>
                </div>
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
