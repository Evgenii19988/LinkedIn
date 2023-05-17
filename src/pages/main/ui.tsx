import React, { FC } from "react";
import { Profile } from "../../widgets/main/profile";
import { Sidebar } from "../../widgets/main/sidebar";
import { FriendsBlock } from "../../widgets/main/friends-block";
import { CoursesPopuler } from "../../widgets/main/courses-populer";
import { FriendSlider } from "../../features/friend-slider";
import { CorporationMenu } from "../../widgets/main/corporation-menu";

const MainPage: FC = () => {
  return (
    <div className="flex gap-[29px] pt-[24px]">
      <div className="flex flex-col gap-[21px] w-[292px]">
        <Profile></Profile>
        <Sidebar></Sidebar>
      </div>
      <div className="w-full">
        <FriendSlider />
      </div>
      <div className="flex flex-col gap-[21px] w-[292px]">
        <FriendsBlock />
        <CoursesPopuler />
        <CorporationMenu />
      </div>
    </div>
  );
};

export default MainPage;
