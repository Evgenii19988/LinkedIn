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
        minWidth: `${imageSize}px`,
        maxHeight: `${imageSize + borderSize * 2}px`,
      }}
      className={`rounded-full`}
    >
      <img
        style={{
          width: `${imageSize}px`,
          height: `${imageSize}px`,
          borderRadius: "50%",
        }}
        src={image as string}
        alt=""
      />
    </div>
  );
};

export default Avatar;
