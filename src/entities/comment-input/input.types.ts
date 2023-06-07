import { ChangeEvent } from "react";
import { IconName } from "../../shared/icons/model/icon.types";

export type CommentInputProps = {
  label?: string;
  placeholder?: string;
  inputHeight?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: any;
  error?: string
};
