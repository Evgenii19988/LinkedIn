import clsx from "clsx";

export function getInputWrapperClassName() {
  return clsx(
    "relative",
    "border",
    "bg-[#F8F8FA]",
    "w-full",
    "h-[50px]",
    "rounded-[25px]",
    "flex"
  );
}

export function getInputClassName() {
  return clsx(
    "border-none",
    "bg-[#F8F8FA]",
    "w-full",
    "h-full",
    "rounded-[25px]",
    "focus:outline-none",
    "px-[62px]"
  );
}
