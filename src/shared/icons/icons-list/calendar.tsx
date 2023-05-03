import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const Calendar: FC<IconsProps> = (props) => {
  const { size = 20 } = props;

  return (
    <div>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_441)">
          <path
            d="M15 2.25H14.25V0.75H12.75V2.25H5.25V0.75H3.75V2.25H3C2.175 2.25 1.5 2.925 1.5 3.75V15.75C1.5 16.575 2.175 17.25 3 17.25H15C15.825 17.25 16.5 16.575 16.5 15.75V3.75C16.5 2.925 15.825 2.25 15 2.25ZM15 15.75H3V6H15V15.75Z"
            fill="#070928"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_441">
            <rect width="18" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Calendar;
