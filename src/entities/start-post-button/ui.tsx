import React, { FC } from "react";
import { StartPostButtonProps } from "./model/types";
import { getStartPostButtonWrapperClassName } from "./model/start-post-button.style";

const StartPostButton: FC<StartPostButtonProps> = (props) => {
  const { onClick } = props;

  return (
    <div onClick={onClick} className={getStartPostButtonWrapperClassName()}>
      Start a post
    </div>
  );
};

export default StartPostButton;
