import React, { FC } from "react";
import { AvatarProps } from "./avatar.types";

const Avatar: FC<AvatarProps> = (props) => {
  const { image, imageSize, borderSize, borderColor = "#DBE7FF" } = props;

  return (
    <div
      style={{
        padding: `${borderSize}px`,
        backgroundColor: `${borderColor}`,
        minHeight: `${imageSize}px`,
      }}
      className={`rounded-full`}
    >
      <img
        style={{ width: `${imageSize}px` }}
        className={`w-[${imageSize}px]`}
        src={image}
        alt=""
      />
    </div>
  );
};

export default Avatar;
