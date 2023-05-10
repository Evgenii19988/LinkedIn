import { RefObject, SetStateAction, Dispatch } from "react";

export type HeaderDropdownProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
