import React, { FC, forwardRef, ForwardedRef } from "react";
import {
  getTextareaClassName,
  getTextareaWrapperClassName,
} from "./textarea.styles";
import { TextareaProps } from "./textarea.types";

const Textarea = forwardRef(
  (props: TextareaProps, forwardedRef: ForwardedRef<HTMLTextAreaElement>) => {
    const {
      placeholder = "",
      label,
      textareaRows,
      error,
      onChange,
      name,
    } = props;

    const renderError = !!error && (
      <p className="text-sm text-red-600 absolute left-0 top-[calc(100%)]">
        <>{error}</>
      </p>
    );

    return (
      <div className={getTextareaWrapperClassName()}>
        <textarea
          ref={forwardedRef}
          onChange={onChange}
          name={name}
          rows={textareaRows}
          placeholder={placeholder}
          className={getTextareaClassName()}
        />
        {renderError}
      </div>
    );
  }
);

export default Textarea;
