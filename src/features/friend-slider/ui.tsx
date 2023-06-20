import React, { useEffect } from "react";
import SwiperCore, { Virtual, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./model/styles.css";
import { Avatar, Loading } from "../../shared/ui";
import GetLazyUsersQuery from "./model/get-lazy-users-query";
import { User } from "../../shared/model/types/users.types";

// install Virtual module
SwiperCore.use([Virtual, Navigation, Pagination]);

export default function App() {
  const { getUsers, data, isLoading } = GetLazyUsersQuery();
  useEffect(() => {
    getUsers(null);
  }, []);

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
        {data?.data?.map((user: User, index: number) => (
          <SwiperSlide
            className="flex flex-col"
            key={index}
            virtualIndex={index}
          >
            <Avatar
              borderSize={4}
              imageSize={52}
              borderColor="rgba(52, 86, 255, 0.5)"
              image={user.image}
            ></Avatar>
            {user.name}
          </SwiperSlide>
        ))}
      </Swiper>
      {isLoading && <Loading></Loading>}
    </>
  );
}
