import React, { FC } from "react";
import { getLinkClassName } from "./avatar.styles";
import { NavLink } from "react-router-dom";
import Icon from "../../icons";
import { AvatarProps } from "./avatar.types";
// import Logo from "../../../../public/images/WawanPurwanto.png";

const Avatar: FC<AvatarProps> = (props) => {
  const { image } = props;

  return (
    <div>
      <img
        src="../../../../public/images/WawanPurwanto.png"
        alt="вы"
      />
      1
    </div>
  );
};

export default Avatar;
