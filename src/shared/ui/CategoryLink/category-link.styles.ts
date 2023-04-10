import clsx from "clsx";

export function getLinkClassName(isActive: boolean) {
  return clsx(
    "w-[45px] h-[45px] bg-[#3456FF] rounded-[15px] flex items-center justify-center cursor-pointer opacity-75",
    isActive ? "opacity-100" : ""
  );
}
