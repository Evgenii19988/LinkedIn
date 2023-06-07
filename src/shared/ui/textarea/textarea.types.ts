import { ChangeEvent } from "react";
import { IconName } from "../../icons/model/icon.types";

export type TextareaProps = {
  label?: string;
  placeholder?: string;
  textareaRows?: number
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  name?: any;
  error?: string
};
