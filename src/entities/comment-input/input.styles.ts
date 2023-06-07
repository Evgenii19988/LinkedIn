import clsx from "clsx";
import { IconName } from "../../shared/icons/model/icon.types";

export function getInputWrapperClassName() {
  return clsx(
    "relative",
    "border",
    "bg-[#F8F8FA]",
    "w-full",
    "rounded-[25px]",
    "flex"
  );
}

export function getInputClassName(error: string | undefined) {
  return clsx(
    "border-none",
    error ? "border-red" : "",
    "bg-[#F8F8FA]",
    "w-full",
    "h-full",
    "rounded-[25px]",
    "focus:outline-none",
    "pl-[38px]",
    "pr-[140px]"
  );
}
