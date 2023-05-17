import React, { FC } from "react";
import Icon from "../../../shared/icons";

const CorporationMenu: FC = () => {
  return (
    <div className="flex flex-col gap-[21px] w-[292px] pl-[21px] pr-[25px] pt-[32px] pb-[54px] rounded-[32px] bg-white text-xs">
      <div className="flex gap-[4px] text-[14px] font-medium">
        <Icon iconName="Logo"></Icon>
        <span>Corporation © 2021</span>
      </div>
      <div>
        <ul>
          {/* <li><Icon iconName="Dot"></Icon></li> */}
        </ul>
      </div>
    </div>
  );
};

export default CorporationMenu;
