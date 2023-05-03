import React, { FC } from "react";
import { MoreButtonProps } from "./more-button.types";
import Icon from "../../icons";
import { getMoreButtonClassName } from "./more-button.styles";

const MoreButton: FC<MoreButtonProps> = (props) => {
  const { arrowPosition = "bottom" } = props;

  return (
    <div className={getMoreButtonClassName(arrowPosition)}>
      <Icon iconName='ArrowBottom'></Icon>
    </div>
  );
};

export default MoreButton;
