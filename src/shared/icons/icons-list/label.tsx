import React, { FC } from "react";
import { IconsProps } from "../model/icon.types";

const Label: FC<IconsProps> = (props) => {
  const { size = 20 } = props;

  return (
    <div className="">
      <svg
        width="47"
        height="45"
        viewBox="0 0 47 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_456)">
          <path
            d="M43.5305 0H3.46951C2.54934 0 1.66686 0.349983 1.0162 0.972955C0.365538 1.59593 0 2.44086 0 3.32188V41.6781C0 42.5591 0.365538 43.4041 1.0162 44.0271C1.66686 44.65 2.54934 45 3.46951 45H43.5305C44.4507 45 45.3331 44.65 45.9838 44.0271C46.6345 43.4041 47 42.5591 47 41.6781V3.32188C47 2.44086 46.6345 1.59593 45.9838 0.972955C45.3331 0.349983 44.4507 0 43.5305 0ZM14.0086 38.3344H6.94229V16.8438H14.0086V38.3344ZM10.4706 13.8656C9.66901 13.8613 8.88675 13.6297 8.22252 13.2002C7.55829 12.7706 7.04185 12.1622 6.73839 11.4519C6.43492 10.7416 6.35802 9.96111 6.51739 9.20898C6.67677 8.45685 7.06528 7.76677 7.63389 7.22584C8.2025 6.68491 8.92572 6.31738 9.71229 6.16961C10.4989 6.02185 11.3135 6.10049 12.0534 6.3956C12.7934 6.69071 13.4254 7.18906 13.8698 7.82777C14.3142 8.46648 14.5511 9.21692 14.5504 9.98438C14.558 10.4982 14.4574 11.0082 14.2547 11.484C14.052 11.9598 13.7514 12.3917 13.3707 12.7539C12.9899 13.1161 12.537 13.4012 12.0387 13.5922C11.5405 13.7832 11.0071 13.8762 10.4706 13.8656ZM40.0544 38.3531H32.9914V26.6125C32.9914 23.15 31.4541 22.0813 29.4697 22.0813C27.3742 22.0813 25.318 23.5938 25.318 26.7V38.3531H18.2517V16.8594H25.0471V19.8375H25.1385C25.8206 18.5156 28.2098 16.2563 31.8556 16.2563C35.7983 16.2563 40.0577 18.4969 40.0577 25.0594L40.0544 38.3531Z"
            fill="#0A66C2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_456">
            <rect width="47" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Label;
