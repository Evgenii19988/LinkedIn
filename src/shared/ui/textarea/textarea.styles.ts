import clsx from "clsx";
import { IconName } from "../../icons/model/icon.types";

export function getTextareaWrapperClassName() {
  return clsx(
    "relative",
    "border",
    "bg-[#F8F8FA]",
    "w-full",
    "rounded-[25px]",
    "flex"
  );
}

export function getTextareaClassName() {
  return clsx(
    "resize-none",
    "border-none",
    "bg-[#F8F8FA]",
    "w-full",
    "h-full",
    "rounded-[25px]",
    "focus:outline-none",
    "p-[23px]"
  );
}
