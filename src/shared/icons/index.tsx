import React, { FC } from "react";
import * as Icons from "./icons-list";

type IconProps = {
  iconName: string
  size?: number
  color?: string
}

const icons = Object(Icons)

const Icon: FC<IconProps> = (props) => {
  const {iconName, size, color} = props
  const CurrentIcon = icons[iconName]

  return (
    <CurrentIcon size={size} color={color}/>
  );
};

export default Icon;
