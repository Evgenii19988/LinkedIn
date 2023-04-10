import React, { FC } from "react";
import { Outlet } from "react-router";
import Input from "../../shared/ui/input";
import Icon from "../../shared/icons";
import { Link } from "react-router-dom";
import CategoryLink from "../../shared/ui/CategoryLink";

const LayoutWrapper: FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-[1260px] w-full px-[15px] flex items-center h-[89px]">
        <div className="w-[47px] h-[45px] bg-[#0A66C2] rounded-lg">
          <Icon iconName="Label"></Icon>
        </div>
        <div className="w-full max-w-[500px] ml-[32px]">
          <Input placeholder="Serach Jobs" />
        </div>
        <nav className="flex gap-[30px] ml-[25px]">
          <CategoryLink link='/' iconName={"Home"}></CategoryLink>
          <CategoryLink link='/contacts' iconName={"Contacts"}></CategoryLink>
          <CategoryLink link='/work' iconName={"Work"}></CategoryLink>
          <CategoryLink link='/messages' iconName={"Message"}></CategoryLink>
          <CategoryLink link='/notifications' iconName={"Notification"}></CategoryLink>
        </nav>
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
