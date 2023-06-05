import { ChangeEvent } from "react";
import { IconName } from "../../icons/model/icon.types";

export type InputProps = {
  label?: string;
  placeholder?: string;
  beforeIcon?: IconName;
  inputHeight?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  name?: any;
  error?: string
};
