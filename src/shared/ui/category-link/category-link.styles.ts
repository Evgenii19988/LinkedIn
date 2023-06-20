import clsx from "clsx";

export function getLinkClassName(isActive: boolean) {
  return clsx(
    "w-[45px] h-[45px] bg-mainBlue rounded-[15px] flex items-center justify-center cursor-pointer",
    isActive ? "opacity-100" : "opacity-75"
  );
}
