import React, { FC } from "react";
import { Outlet } from "react-router";
import Icon from "../../shared/icons";
import {Avatar, Input, CategoryLink} from "../../shared/ui";

const LayoutWrapper: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1260px] w-full px-[15px] flex items-center h-[89px]">
        <div>
          <Icon iconName="Label"></Icon>
        </div>
        <div className="w-full max-w-[500px] ml-[32px]">
          <Input placeholder="Serach Jobs" />
        </div>
        <nav className="flex gap-[30px] ml-[25px] pr-[40px] border-r-[2px]">
          <CategoryLink link='/' iconName={"Home"}></CategoryLink>
          <CategoryLink link='/contacts' iconName={"Contacts"}></CategoryLink>
          <CategoryLink link='/work' iconName={"Work"}></CategoryLink>
          <CategoryLink link='/messages' iconName={"Message"}></CategoryLink>
          <CategoryLink link='/notifications' iconName={"Notification"}></CategoryLink>
        </nav>
        <div>
          <Avatar borderSize={2} imageSize={2}  image="../src/shared/images/avatars/WawanPurwanto.png"/>
        </div>
      </div>
      <div className="bg-[#F8F8FA] w-full flex flex-col items-center">
        <div className="max-w-[1260px] w-full px-[15px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
