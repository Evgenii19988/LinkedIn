import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const Play: FC<IconsProps> = (props) => {
  const { size = 20 } = props;

  return (
    <div>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_447)">
          <path
            d="M11 1.83337C5.94001 1.83337 1.83334 5.94004 1.83334 11C1.83334 16.06 5.94001 20.1667 11 20.1667C16.06 20.1667 20.1667 16.06 20.1667 11C20.1667 5.94004 16.06 1.83337 11 1.83337ZM9.16668 15.125V6.87504L14.6667 11L9.16668 15.125Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_447">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Play;
