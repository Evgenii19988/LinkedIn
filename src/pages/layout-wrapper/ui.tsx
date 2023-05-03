import React, { FC, useRef, useState } from "react";
import { Outlet } from "react-router";
import Icon from "../../shared/icons";
import { Avatar, Input, CategoryLink } from "../../shared/ui";
import MoreButton from "../../shared/ui/more-button";
import { HeaderDropdown } from "../../features/header-dropdown";
import useClickOutside from "../../shared/lib/hooks/click-outside-hook";

const LayoutWrapper: FC = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const headerDropdownRef = useRef(null);
  useClickOutside(headerDropdownRef, (event) => console.log(event.target));

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
          <CategoryLink link="/" iconName={"Home"}></CategoryLink>
          <CategoryLink link="/contacts" iconName={"Contacts"}></CategoryLink>
          <CategoryLink link="/work" iconName={"Work"}></CategoryLink>
          <CategoryLink link="/messages" iconName={"Message"}></CategoryLink>
          <CategoryLink
            link="/notifications"
            iconName={"Notification"}
          ></CategoryLink>
        </nav>
        <div className="flex items-center ml-[55px] gap-[7px]">
          <Avatar
            borderSize={3}
            imageSize={40}
            image="images/WawanPurwanto.png"
          />
          <p className="text-sm font-medium">Wawan Purwanto</p>
          <div className="flex items-center">
            <div className="relative">
              <div
                className={isOpenDropdown ? "rotate-180" : ""}
                onClick={() => setIsOpenDropdown(!isOpenDropdown)}
              >
                <MoreButton></MoreButton>
              </div>
              <HeaderDropdown
                ref={headerDropdownRef}
                isOpen={isOpenDropdown}
              ></HeaderDropdown>
            </div>
          </div>
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
