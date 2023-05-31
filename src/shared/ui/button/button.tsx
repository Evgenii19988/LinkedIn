import React, { FC } from "react";
import { getButtonClassName } from "./button.styles";
import { ButtonProps } from "./button.types";

const Button: FC<ButtonProps> = (props) => {
  const {
    label,
    disabled,
    isFull = false,
    onClick,
  } = props

  return (
    <div>
      <button
        onClick={onClick?.bind(null)}
        disabled={disabled}
        className={getButtonClassName()}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
