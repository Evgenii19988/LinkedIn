import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const Share: FC<IconsProps> = (props) => {
  const { size = 20 } = props;

  return (
    <div>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.2857 12C19.126 12 21.4286 9.69746 21.4286 6.85715C21.4286 4.01683 19.126 1.71429 16.2857 1.71429C13.4454 1.71429 11.1429 4.01683 11.1429 6.85715C11.1429 7.68644 11.3391 8.46988 11.6877 9.16355L8.80903 11.1883C8.12146 10.1291 6.92825 9.42858 5.57143 9.42858C3.44119 9.42858 1.71429 11.1555 1.71429 13.2857C1.71429 15.416 3.44119 17.1429 5.57143 17.1429C6.77244 17.1429 7.84525 16.5939 8.55266 15.7333L13.0112 18.3341C12.9113 18.6331 12.8571 18.9531 12.8571 19.2857C12.8571 20.9426 14.2003 22.2857 15.8571 22.2857C17.514 22.2857 18.8571 20.9426 18.8571 19.2857C18.8571 17.6289 17.514 16.2857 15.8571 16.2857C14.9955 16.2857 14.2186 16.649 13.6714 17.2308L9.19234 14.618C9.34517 14.2028 9.42857 13.754 9.42857 13.2857C9.42857 12.9798 9.39292 12.6822 9.32563 12.3969L12.4044 10.2314C13.3473 11.315 14.7365 12 16.2857 12Z"
          fill="#070928"
          fillOpacity="0.75"
        />
      </svg>
    </div>
  );
};

export default Share;
