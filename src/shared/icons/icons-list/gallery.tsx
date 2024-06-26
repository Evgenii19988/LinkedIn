import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const Gallery: FC<IconsProps> = (props) => {
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
        <g clipPath="url(#clip0_1_450)">
          <path
            d="M19.25 17.4167V4.58333C19.25 3.575 18.425 2.75 17.4167 2.75H4.58333C3.575 2.75 2.75 3.575 2.75 4.58333V17.4167C2.75 18.425 3.575 19.25 4.58333 19.25H17.4167C18.425 19.25 19.25 18.425 19.25 17.4167ZM7.79167 12.375L10.0833 15.1342L13.2917 11L17.4167 16.5H4.58333L7.79167 12.375Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_450">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Gallery;
