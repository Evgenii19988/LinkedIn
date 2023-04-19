import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const ArrowBottom: FC<IconsProps> = (props) => {
  const { size = 20 } = props;

  return (
    <div>
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.9033 0.612341C11.1359 0.389472 11.5052 0.397332 11.728 0.630011C11.9509 0.862631 11.943 1.23189 11.7104 1.45476L6.49596 6.45068C6.27273 6.66461 5.92128 6.66712 5.69495 6.45646L0.408814 1.53557C0.172973 1.3161 0.159774 0.946998 0.379294 0.711156C0.598813 0.475372 0.96792 0.462116 1.2037 0.681636L6.08663 5.22711L10.9033 0.612341Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default ArrowBottom;
