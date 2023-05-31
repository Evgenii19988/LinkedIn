import { ChangeEvent } from "react";
import { IconName } from "../../icons/model/icon.types";

export type ButtonProps = {
  label: string;
  disabled?: boolean;
  isFull?: boolean;
  onClick?: () => void;
};
