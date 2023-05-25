import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const List: FC<IconsProps> = (props) => {
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
        <g clipPath="url(#clip0_1_444)">
          <path
            d="M17.4167 2.75H4.58333C3.575 2.75 2.75 3.575 2.75 4.58333V17.4167C2.75 18.425 3.575 19.25 4.58333 19.25H17.4167C18.425 19.25 19.25 18.425 19.25 17.4167V4.58333C19.25 3.575 18.425 2.75 17.4167 2.75ZM12.8333 15.5833H6.41667V13.75H12.8333V15.5833ZM15.5833 11.9167H6.41667V10.0833H15.5833V11.9167ZM15.5833 8.25H6.41667V6.41667H15.5833V8.25Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_444">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default List;
