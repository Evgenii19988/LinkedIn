import React, { FC } from "react";
import { Profile } from "../../widgets/main/profile";
import { Sidebar } from "../../widgets/main/sidebar";
import { FriendsBlock } from "../../widgets/main/friends-block";

const MainPage: FC = () => {
  return (
    <div className="flex gap-[29px] pt-[24px]">
      <div className="flex flex-col gap-[21px] w-[292px]">
        <Profile></Profile>
        <Sidebar></Sidebar>
      </div>
      <div className="w-full">2</div>
      <div className="w-[292px]">
        <FriendsBlock />
      </div>
    </div>
  );
};

export default MainPage;
