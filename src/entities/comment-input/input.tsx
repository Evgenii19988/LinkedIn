import React, { forwardRef, ForwardedRef } from "react";
import { getInputClassName, getInputWrapperClassName } from "./input.styles";
import { CommentInputProps } from "./input.types";
import Icon from "../../shared/icons";

const CommentInput = forwardRef(
  (props: CommentInputProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const { placeholder = "", inputHeight = 50, onChange, name, error } = props;

    return (
      <div
        style={{ height: `${inputHeight}px` }}
        className={getInputWrapperClassName()}
      >
        <input
          onChange={onChange}
          ref={forwardedRef}
          name={name}
          type="text"
          placeholder={placeholder}
          className={getInputClassName(error)}
        />
        <span className="absolute top-[13px] right-[47px] cursor-pointer">
          <Icon iconName='Send'></Icon>
        </span>
        <span className="absolute top-[13px] right-[115px] cursor-pointer">
          <Icon iconName='Send'></Icon>
        </span>
      </div>
    );
  }
);

export default CommentInput;
