import React, { useRef, useState } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./model/styles.css";
import { Avatar } from "../../shared/ui";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function App() {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState([1, 2, 3, 4, 5, 6]);

  // const prepend = () => {
  //   setSlides([
  //     `Slide ${prependNumber.current - 2}`,
  //     `Slide ${prependNumber.current - 1}`,
  //     ...slides,
  //   ]);
  //   prependNumber.current = prependNumber.current - 2;
  //   swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  // };

  // const append = () => {
  //   setSlides([...slides, "Slide " + ++appendNumber.current]);
  // };

  // const slideTo = (index: number) => {
  //   swiperRef.slideTo(index - 1, 0);
  // };

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={6}
        centeredSlides={true}
        spaceBetween={10}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide className="" key={slideContent} virtualIndex={index}>
            <Avatar
              borderSize={4}
              imageSize={52}
              borderColor='#3456FF'
              image="images/WawanPurwanto.png"
            ></Avatar>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
