import clsx from "clsx";
import { IconName } from "../../icons/model/icon.types";

export function getInputWrapperClassName() {
  return clsx(
    "relative",
    "border",
    "bg-[#F8F8FA]",
    "w-full",
    "rounded-[25px]",
    "flex",
    "relative"
  );
}

export function getInputClassName(
  beforeIcon: IconName | undefined,
  error: string | undefined
) {
  return clsx(
    "border-none",
    error ? "border-red" : "",
    "bg-[#F8F8FA]",
    "w-full",
    "h-full",
    "rounded-[25px]",
    "focus:outline-none",
    beforeIcon ? "px-[62px]" : "px-[23px]"
  );
}
