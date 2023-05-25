import clsx from "clsx";
import { IconName } from "../../icons/model/icon.types";

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

export function getInputClassName(beforeIcon: IconName | undefined) {
  return clsx(
    "border-none",
    "bg-[#F8F8FA]",
    "w-full",
    "h-full",
    "rounded-[25px]",
    "focus:outline-none",
    beforeIcon ? "px-[62px]" : "px-[23px]"
  );
}
