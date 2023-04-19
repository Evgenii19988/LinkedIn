import React, { FC } from "react";
import { getInputClassName, getInputWrapperClassName } from "./input.styles";
import { InputProps } from "./input.types";
import Icon from "../../icons";

const Input: FC<InputProps> = (props) => {
  const { placeholder = "" } = props;

  return (
    <div className={getInputWrapperClassName()}>
      <span className="absolute top-[13px] left-[31px] cursor-pointer">
        <Icon iconName="Search"></Icon>
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className={getInputClassName()}
      />
    </div>
  );
};

export default Input;
