import React, { FC, useState } from "react";
import { Profile } from "../../widgets/main/profile";
import { Sidebar } from "../../widgets/main/sidebar";
import { FriendsBlock } from "../../widgets/main/friends-block";
import { CoursesPopuler } from "../../widgets/main/courses-populer";
import { FriendSlider } from "../../features/friend-slider";
import { CorporationMenu } from "../../widgets/main/corporation-menu";
import { StartPost } from "../../widgets/main/start-post";
import { NewPostForm } from "../../features/new-post-form";

const MainPage: FC = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="flex gap-[29px]">
      <div className="flex flex-col gap-[21px] w-[292px]">
        <Profile></Profile>
        <Sidebar></Sidebar>
      </div>
      <div className="w-full">
        <FriendSlider />
        <StartPost setValue={setIsShow} />
      </div>
      <div className="flex flex-col gap-[21px] w-[292px]">
        <FriendsBlock />
        <CoursesPopuler />
        <CorporationMenu />
      </div>
      <NewPostForm isShow={isShow} setIsShow={setIsShow} />
    </div>
  );
};

export default MainPage;
