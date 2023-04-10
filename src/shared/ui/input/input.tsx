import React, { FC } from "react";
import { getInputClassName } from "./input.styles";
import { InputProps } from "./input.types";

const Input: FC<InputProps> = (props) => {
  const {placeholder = ''} = props

  return (
    <div className="w-full">
      <input type="text" placeholder={placeholder} className={getInputClassName()} />
    </div>
  );
};

export default Input;
