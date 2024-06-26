import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const MoreVertical: FC<IconsProps> = (props) => {
  const { size = 20 } = props;

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        id="more-vertical"
      >
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </svg>
    </div>
  );
};

export default MoreVertical;
