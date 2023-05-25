import React, { FC } from "react";
import { getInputClassName, getInputWrapperClassName } from "./input.styles";
import { InputProps } from "./input.types";
import Icon from "../../icons";

const Input: FC<InputProps> = (props) => {
  const { placeholder = "", beforeIcon, inputHeight = 50 } = props;

  return (
    <div style={{height:`${inputHeight}px`}} className={getInputWrapperClassName()}>
      {beforeIcon && (
        <span className="absolute top-[13px] left-[31px] cursor-pointer">
          <Icon iconName={beforeIcon}></Icon>
        </span>
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={getInputClassName(beforeIcon)}
      />
    </div>
  );
};

export default Input;
