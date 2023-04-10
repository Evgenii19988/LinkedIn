import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const Message: FC<IconsProps> = (props) => {
  const { size = 20 } = props;

  return (
    <div className="">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.9926e-05 10C1.9926e-05 4.47716 4.47718 0 10 0C15.5229 0 20 4.47716 20 10C20 15.5228 15.5229 20 10 20C8.25466 20 6.61136 19.552 5.18148 18.7644L1.29118 19.9484C0.93788 20.056 0.55406 19.96 0.29292 19.6988C0.03178 19.4378 -0.0641781 19.0538 0.0433599 18.7006L1.22868 14.8059C0.44536 13.379 1.9926e-05 11.7402 1.9926e-05 10ZM6 9C6 9.55228 6.44772 10 7 10H13C13.5523 10 14 9.55228 14 9C14 8.44772 13.5523 8 13 8H7C6.44772 8 6 8.44772 6 9ZM7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14H11C11.5523 14 12 13.5523 12 13C12 12.4477 11.5523 12 11 12H7Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default Message;
