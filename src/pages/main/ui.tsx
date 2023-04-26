import React, { FC } from "react";
import { Profile } from "../../widgets/main/profile";

const MainPage: FC = () => {
  return (
    <div className="flex gap-[29px] pt-[24px]">
      <div className="w-[292px]">
        <Profile></Profile>
      </div>
      <div className="w-full">2</div>
      <div className="w-[292px]">3</div>
    </div>
  );
};

export default MainPage;
