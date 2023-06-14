import clsx from "clsx";

export function getButtonClassName() {
  return clsx(
    "px-[25px]",
    "py-[16px]",
    "bg-mainBlue",
    "rounded-[25px]",
    "text-white",
    "hover:opacity-70"
  );
}
