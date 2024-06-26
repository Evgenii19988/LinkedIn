import clsx from "clsx";

export function getMoreButtonClassName(arrowPosition: string) {
  return clsx(
    "flex items-center justify-center w-[20px] h-[20px] bg-mainBlue opacity-75 rounded-full cursor-pointer",
    arrowPosition === "right" ? "-rotate-90" : ""
  );
}
