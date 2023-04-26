import React, { FC } from "react";
import { Avatar } from "../../../shared/ui";
import Icon from "../../../shared/icons";

const Profile: FC = () => {
  return (
    <div className="w-[292px]">
      <div className="flex justify-center w-full bg-[#3456FF] h-[99px] rounded-t-[32px]">
        <div className="translate-y-[37px]">
          <Avatar
            borderSize={6}
            imageSize={90}
            borderColor={"#F8F8FA"}
            image="images/WawanPurwanto.png"
          />
        </div>
      </div>
      <div className="bg-white rounded-b-[32px]">
        <h3 className="text-center text-sm font-medium mt-[46px]">
          Wawan Purwanto
        </h3>
        <p className="text-xs text-center mt-[10px]">
          {" "}
          I have experince 1 year UI/UX Design
        </p>
        <div className="flex justify-center gap-[50px] mt-[23px] text-sm">
          <div className="flex flex-col items-center">
            <span className="font-medium">Profile Views</span>
            <span>16+</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-medium">Profile Post</span>
            <span>400+</span>
          </div>
        </div>
        <div className="flex justify-center gap-[50px] mt-[21px]">
          <div className="flex rounded-full items-center justify-center gap-[3px]">
            <div className="bg-[#3456FFBF] rounded-full p-[4px]">
              <Icon iconName="Bookmark"></Icon>
            </div>
            <span className="text-xs">Saved</span>
          </div>
          <div className="flex rounded-full items-center justify-center gap-[3px]">
            <div className="bg-[#3456FFBF] rounded-full p-[4px]">
              <Icon iconName="Award"></Icon>
            </div>
            <span className="text-xs">Try Premium</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
