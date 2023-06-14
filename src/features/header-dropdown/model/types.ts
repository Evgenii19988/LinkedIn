import { RefObject, SetStateAction, Dispatch } from "react";

export type HeaderDropdownProps = {
  isOpen: boolean;
  isOpenEditProfileModal: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setIsOpenEditProfileModal: Dispatch<SetStateAction<boolean>>;
};
