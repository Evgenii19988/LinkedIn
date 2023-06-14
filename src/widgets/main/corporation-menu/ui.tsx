import React, { FC } from "react";
import Icon from "../../../shared/icons";

const CorporationMenu: FC = () => {
  const listItem = (name: string) => {
    return (
      <li className="flex gap-[5px] leading-[14px]">
        <Icon iconName="Dot"></Icon>
        {name}
      </li>
    );
  };

  return (
    <div className="flex flex-col gap-[21px] w-[292px] pl-[21px] pr-[25px] pt-[32px] pb-[54px] rounded-[32px] bg-white text-xs">
      <div className="flex gap-[4px] text-[14px] font-medium">
        <Icon iconName="Logo"></Icon>
        <span>Corporation © 2021</span>
      </div>
      <div>
        <ul className="flex justify-between">
          <div className="flex flex-col gap-y-[5px]">
            {listItem("About")}
            {listItem("Accesibility ")}
            {listItem("Help Center")}
            {listItem("Privacy & Terms  ")}
          </div>
          <div className="flex flex-col gap-y-[5px]">
            {listItem("Advertising ")}
            {listItem("Business Services")}
            {listItem("Download Apps")}
            {listItem("More")}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CorporationMenu;
