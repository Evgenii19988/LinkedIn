import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const Dot: FC<IconsProps> = (props) => {
  const { size = 20 } = props;

  return (
    <div>
      <svg
        width="12"
        height="13"
        viewBox="0 0 12 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9.5C7.65685 9.5 9 8.15685 9 6.5C9 4.84315 7.65685 3.5 6 3.5C4.34315 3.5 3 4.84315 3 6.5C3 8.15685 4.34315 9.5 6 9.5ZM11 6.5C11 9.26142 8.76142 11.5 6 11.5C3.23858 11.5 1 9.26142 1 6.5C1 3.73858 3.23858 1.5 6 1.5C8.76142 1.5 11 3.73858 11 6.5ZM10 6.5C10 4.29086 8.20914 2.5 6 2.5C3.79086 2.5 2 4.29086 2 6.5C2 8.70914 3.79086 10.5 6 10.5C8.20914 10.5 10 8.70914 10 6.5Z"
          fill="#3456FF"
        />
      </svg>
    </div>
  );
};

export default Dot;
