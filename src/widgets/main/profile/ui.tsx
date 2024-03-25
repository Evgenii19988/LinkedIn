import React, { FC } from "react";
import { Avatar } from "../../../shared/ui";
import Icon from "../../../shared/icons";
import { useAppSelector } from "../../../shared/hooks/use-app-selector";

const Profile: FC = () => {
  const { user } = useAppSelector((state) => state.authSlice);

  return (
    <div className="w-[292px]">
      <div className="flex justify-center w-full bg-mainBlue h-[99px] rounded-t-[32px]">
        <div className="translate-y-[37px]">
          <label className="cursor-pointer">
            <Avatar
              borderSize={6}
              imageSize={90}
              borderColor={"#F8F8FA"}
              image={user?.image}
            />
            <input type="file" className="absolute top-[-1000px]" />
          </label>
        </div>
      </div>
      <div className="bg-white rounded-b-[32px]">
        <h3 className="text-center text-sm font-medium pt-[46px]">
          {user.firstName + " " + user.lastName}
        </h3>
        <p className="text-xs text-center mt-[10px] font-Roboto text-opacityBlack">
          {" "}
          {user.description}
        </p>
        <div className="flex justify-center gap-[50px] mt-[23px] text-sm">
          <div className="flex flex-col items-center">
            <span className="font-medium">Profile Views</span>
            <span className="text-opacityBlack">16+</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium">Profile Post</span>
            <span className="text-opacityBlack">400+</span>
          </div>
        </div>
        <div className="flex justify-center gap-[50px] mt-[21px] pb-[38px]">
          <div className="flex rounded-full items-center justify-center gap-[3px]">
            <div className="bg-opacityBlue rounded-full p-[4px]">
              <Icon iconName="Bookmark"></Icon>
            </div>
            <span className="text-xs text-opacityBlack">Saved</span>
          </div>
          <div className="flex rounded-full items-center justify-center gap-[3px]">
            <div className="bg-opacityBlue rounded-full p-[4px]">
              <Icon iconName="Award"></Icon>
            </div>
            <span className="text-xs text-opacityBlack">Try Premium</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
