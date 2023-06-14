import React, { FC } from "react";
import Icon from "../../../shared/icons";
import MoreButton from "../../../shared/ui/more-button";

const CoursesPopuler: FC = () => {
  return (
    <div className="flex flex-col gap-[21px] w-[292px] pl-[21px] pr-[25px] pt-[32px] pb-[54px] rounded-[32px] bg-white text-xs">
      <div>
        <div className="flex justify-between font-medium text-sm">
          <h3>Courses Populer</h3>
          <MoreButton arrowPosition="right" />
        </div>
        <div className="flex flex-col gap-[5px] mt-[7px]">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[5px]">
              <p className="max-w-[197px] text-sm">
                Learning UX Design - Mobile apps
              </p>
              <span>Thomas Wick</span>
            </div>
            <div className="flex flex-col items-end">
              <Icon iconName="Eye"></Icon>
              <span>50+</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[5px]">
              <p className="max-w-[197px] text-sm">How to Be UI Design</p>
              <span>Alan UI Design</span>
            </div>
            <div className="flex flex-col items-end">
              <Icon iconName="Eye"></Icon>
              <span>150+</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[5px]">
              <p className="max-w-[197px] text-sm">
                How to Be Develover Golang
              </p>
              <span>Rubicode </span>
            </div>
            <div className="flex flex-col items-end">
              <Icon iconName="Eye"></Icon>
              <span>50+</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[5px]">
              <p className="max-w-[197px] text-sm">Tips and Trick Freelance</p>
              <span>purwanstudio</span>
            </div>
            <div className="flex flex-col items-end">
              <Icon iconName="Eye"></Icon>
              <span>520+</span>
            </div>
          </div>
          <p className="text-darkGreen font-sm">Courses Populer</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesPopuler;
