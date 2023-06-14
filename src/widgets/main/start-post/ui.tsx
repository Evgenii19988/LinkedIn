import React, { FC } from "react";
import { Avatar, Input } from "../../../shared/ui";
import Icon from "../../../shared/icons";
import { IconName } from "../../../shared/icons/model/icon.types";
import { StartPostProps } from "./model/types";
import { StartPostButton } from "../../../entities/start-post-button";

const StartPost: FC<StartPostProps> = (props) => {
  const { setValue } = props;
  const menuItem = (name: string, iconName: IconName) => {
    return (
      <li className="flex gap-[5px] items-center cursor-pointer">
        <div className="flex justify-center items-center w-[32px] h-[32px] rounded-full bg-[#3456FF] opacity-75">
          <Icon iconName={iconName} />
        </div>
        <div>{name}</div>
      </li>
    );
  };
  return (
    <div className="mt-[10px] flex flex-col rounded-[22px] bg-white ] px-[13px] pt-[13px] pb-[31px] mb-[13px]">
      <div className="flex items-center gap-[10px]">
        <Avatar
          borderSize={0}
          imageSize={60}
          image="images/WawanPurwanto.png"
        />
        <StartPostButton
          onClick={() => {
            setValue(true);
          }}
        />
      </div>
      <div className="flex justify-between mt-[15px]">
        <ul>{menuItem("Photo", "Gallery")}</ul>
        <ul>{menuItem("Vidieos", "Play")}</ul>
        <ul>{menuItem("Working", "Bag")}</ul>
        <ul>{menuItem("Create Article", "List")}</ul>
      </div>
    </div>
  );
};

export default StartPost;
