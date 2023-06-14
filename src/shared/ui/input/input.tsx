import React, { forwardRef, ForwardedRef } from "react";
import { getInputClassName, getInputWrapperClassName } from "./input.styles";
import { InputProps } from "./input.types";
import Icon from "../../icons";

const Input = forwardRef(
  (props: InputProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    const {
      placeholder = "",
      beforeIcon,
      inputHeight = 50,
      onChange,
      name,
      error,
      label,
    } = props;

    const renderError = !!error && (
      <p className="text-sm text-red-600 absolute left-0 top-[calc(100%)]">
        <>{error}</>
      </p>
    );

    return (
      <div>
        {label && <span className="text-sm text-gray-500 ml-[5px]">{label}</span>}
        <div
          style={{ height: `${inputHeight}px` }}
          className={getInputWrapperClassName()}
        >
          {beforeIcon && (
            <span className="absolute top-[13px] left-[31px] cursor-pointer">
              <Icon iconName={beforeIcon}></Icon>
            </span>
          )}
          <input
            onChange={onChange}
            ref={forwardedRef}
            name={name}
            type="text"
            placeholder={placeholder}
            className={getInputClassName(beforeIcon, error)}
          />
          {renderError}
        </div>
      </div>
    );
  }
);

export default Input;
