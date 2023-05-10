import clsx from "clsx";

export function getHeaderDropdownClassName(isOpen: boolean) {
  return clsx(
    "absolute left-[100%] top-[23px] overflow-hidden transition-all z-100 bg-white translate-x-[-50%] rounded-[5px] shadow-md",
    isOpen ? "h-[68px]" : "h-0"
  );
}
