import React, { FC, useState, MouseEvent, useEffect } from "react";
import { Outlet } from "react-router";
import Icon from "../../shared/icons";
import { Avatar, Input, CategoryLink } from "../../shared/ui";
import MoreButton from "../../shared/ui/more-button";
import { HeaderDropdown } from "../../features/header-dropdown";
import { EditProfileForm } from "../../features/edit-profile-form";
import { useAppSelector } from "../../shared/hooks/use-app-selector";
import { Navigate } from "react-router";

const LayoutWrapper: FC = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenEditProfileModal, setIsOpenEditProfileModal] = useState(false);
  const { user } = useAppSelector((state) => state.authSlice);

  return (
    <>
      {!user?.id ? (
        <Navigate to={"/login"} />
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex justify-center border-bottom border-b border-mainGray w-full">
            <div className="max-w-[1260px] w-full px-[15px] flex items-center h-[89px]">
              <div>
                <Icon iconName="Label"></Icon>
              </div>
              <div className="w-full max-w-[500px] ml-[32px]">
                <Input beforeIcon="Search" placeholder="Serach Jobs" />
              </div>
              <nav className="flex gap-[30px] ml-[25px] pr-[40px] border-r-[2px]">
                <CategoryLink link="/" iconName={"Home"}></CategoryLink>
                <CategoryLink
                  link="/contacts"
                  iconName={"Contacts"}
                ></CategoryLink>
                <CategoryLink link="/work" iconName={"Work"}></CategoryLink>
                <CategoryLink
                  link="/messages"
                  iconName={"Message"}
                ></CategoryLink>
                <CategoryLink
                  link="/notifications"
                  iconName={"Notification"}
                ></CategoryLink>
              </nav>
              <div className="flex items-center ml-[55px] gap-[7px]">
                <Avatar borderSize={3} imageSize={40} image={user.image} />
                <p className="text-sm font-medium">
                  {user.firstName + " " + user.lastName}
                </p>
                <div className="flex items-center">
                  <div className="relative profile-active">
                    <div
                      className={isOpenDropdown ? "rotate-180" : ""}
                      onClick={(event: MouseEvent<HTMLDivElement>) => {
                        event.stopPropagation();
                        setIsOpenDropdown(!isOpenDropdown);
                      }}
                    >
                      <MoreButton></MoreButton>
                    </div>
                    <HeaderDropdown
                      isOpen={isOpenDropdown}
                      setIsOpen={setIsOpenDropdown}
                      isOpenEditProfileModal={isOpenEditProfileModal}
                      setIsOpenEditProfileModal={setIsOpenEditProfileModal}
                    ></HeaderDropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EditProfileForm
            isShow={isOpenEditProfileModal}
            setIsShow={setIsOpenEditProfileModal}
          ></EditProfileForm>
          <div className="bg-[#F8F8FA] w-full flex flex-col items-center overflow-auto h-[calc(100vh-89px)]">
            <div className="max-w-[1260px] w-full px-[15px] pt-[24px] pb-[30px]">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LayoutWrapper;
