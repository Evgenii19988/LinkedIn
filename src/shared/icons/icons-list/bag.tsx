import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const Bag: FC<IconsProps> = (props) => {
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
        <g clipPath="url(#clip0_1_208)">
          <path
            d="M18.3333 5.50004H14.6667V3.66671C14.6667 2.64921 13.8508 1.83337 12.8333 1.83337H9.16666C8.14916 1.83337 7.33333 2.64921 7.33333 3.66671V5.50004H3.66666C2.64916 5.50004 1.84249 6.31587 1.84249 7.33337L1.83333 17.4167C1.83333 18.4342 2.64916 19.25 3.66666 19.25H18.3333C19.3508 19.25 20.1667 18.4342 20.1667 17.4167V7.33337C20.1667 6.31587 19.3508 5.50004 18.3333 5.50004ZM12.8333 5.50004H9.16666V3.66671H12.8333V5.50004Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_208">
            <rect width="22" height="22" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Bag;
