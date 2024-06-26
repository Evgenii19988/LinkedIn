import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const Home: FC<IconsProps> = (props) => {
  const { size = 20 } = props;

  return (
    <div className="">
      <svg
        width={size}
        height={size}
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5492 0.53318C8.3872 -0.17382 9.6128 -0.17382 10.4508 0.53318L17.2008 6.22772C17.7076 6.65523 18 7.28447 18 7.94747V17.7504C18 18.7169 17.2165 19.5004 16.25 19.5004H13.25C12.2835 19.5004 11.5 18.7169 11.5 17.7504V12.7504C11.5 12.3362 11.1642 12.0004 10.75 12.0004H7.25C6.83579 12.0004 6.5 12.3362 6.5 12.7504V17.7504C6.5 18.7169 5.7165 19.5004 4.75 19.5004H1.75C0.7835 19.5004 0 18.7169 0 17.7504V7.94747C0 7.28447 0.29241 6.65523 0.79916 6.22772L7.5492 0.53318Z"
          fill="#F8F8FA"
        />
      </svg>
    </div>
  );
};

export default Home;
