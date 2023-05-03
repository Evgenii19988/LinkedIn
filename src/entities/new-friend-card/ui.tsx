import React, { FC } from "react";
import { Avatar } from "../../shared/ui";
import { NewFriendCardProps } from "./model/types";

const NewFriendCard: FC<NewFriendCardProps> = (props) => {
  const { name, description } = props;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Avatar
          borderSize={0}
          imageSize={50}
          image="images/WawanPurwanto.png"
        />
        <div className="flex flex-col ml-[14px]">
          <span className="font-medium text-[16px]">{name}</span>
          <span>{description}</span>
        </div>
      </div>
      <div className="flex items-center justify-center w-[18px] h-[18px] border-[2px] border-[#070928] opacity-50 rounded-full text-lg font-bold">
        +
      </div>
    </div>
  );
};

export default NewFriendCard;
