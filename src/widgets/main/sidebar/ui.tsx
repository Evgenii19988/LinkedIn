import React, { FC } from "react";
import { Avatar } from "../../../shared/ui";
import Icon from "../../../shared/icons";
import MoreButton from "../../../shared/ui/more-button";

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col gap-[21px] w-[292px] pl-[21px] pr-[25px] pt-[32px] pb-[54px] rounded-[32px] bg-white text-xs">
      <div>
        <div className="flex justify-between font-medium text-sm">
          <h3>Groups</h3>
          <MoreButton arrowPosition="right" />
        </div>
        <div className="flex flex-col gap-[5px] mt-[7px]">
          <div className="flex items-center gap-[3px] mt-[3px]">
            <Icon iconName="Peoples"></Icon>
            <span>UI/UX Design</span>
          </div>
          <div className="flex items-center gap-[3px]">
            <Icon iconName="Peoples"></Icon>
            <span>UI Design</span>
          </div>
          <div className="flex items-center gap-[3px]">
            <Icon iconName="Peoples"></Icon>
            <span>UI Design</span>
          </div>
          <p className="text-[#4FCB8D] ml-[21px]">More</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between font-medium text-sm">
          <h3>Event</h3>
          <MoreButton arrowPosition="right" />
        </div>
        <div className="flex flex-col gap-[5px] mt-[7px]">
          <div className="flex items-center gap-[3px] mt-[3px]">
            <Icon iconName="Calendar"></Icon>
            <span>Webinar UI Design at 09:00 am.</span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between font-medium text-sm">
          <h3>Followed Hastag</h3>
          <MoreButton arrowPosition="right" />
        </div>
        <div className="flex flex-wrap gap-[5px] mt-[7px]">
          <span>#UIDesign</span>
          <span>#UIUXDesign</span>
          <span>#UIRemote</span>
          <span>#wfh</span>
          <span>#RemoteWork</span>
          <span>#UXDesign</span>
          <span>#Userexperince</span>
          <span>#UIDesign</span>
          <span>#UIUXDesign</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
