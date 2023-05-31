import React, { FC } from "react";
import {
  getTextareaClassName,
  getTextareaWrapperClassName,
} from "./textarea.styles";
import { InputProps } from "./textarea.types";

const Textarea: FC<InputProps> = (props) => {
  const { placeholder = "", label, textareaRows } = props;

  return (
    <div className={getTextareaWrapperClassName()}>
      <textarea
        rows={textareaRows}
        placeholder={placeholder}
        className={getTextareaClassName()}
      />
    </div>
  );
};

export default Textarea;
