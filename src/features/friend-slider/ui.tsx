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
  const [slides] = useState<{ name: string; image: string }[]>([
    { name: "Dwight", image: "images/Dwight.png" },
    { name: "Julie", image: "images/Julie.png" },
    { name: "Leslie", image: "images/Leslie.png" },
    { name: "Marvin", image: "images/Marvin.png" },
    { name: "Randall", image: "images/Randall.png" },
    { name: "Shane", image: "images/Shane.png" },
    { name: "Wendy", image: "images/Wendy.png" },
    { name: "Philip", image: "images/Philip.png" },
    { name: "Randal", image: "images/Julie.png" },
    { name: "Dwight", image: "images/Dwight.png" },
    { name: "Julie", image: "images/Julie.png" },
    { name: "Leslie", image: "images/Leslie.png" },
  ]);

  return (
    <>
      <Swiper
        slidesPerView={8}
        spaceBetween={10}
        // pagination={{
        //   type: "fraction",
        // }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide
            className="flex flex-col"
            key={index}
            virtualIndex={index}
          >
            <Avatar
              borderSize={4}
              imageSize={52}
              borderColor="rgba(52, 86, 255, 0.5)"
              image={slideContent.image}
            ></Avatar>
            {slideContent.name}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
