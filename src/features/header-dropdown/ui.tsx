import React, { useRef } from "react";
import { HeaderDropdownProps } from "./model/types";
import { getHeaderDropdownClassName } from "./model/header-dropdown.style";
import useClickOutside from "../../shared/lib/hooks/click-outside-hook";

const HeaderDropdown = (props: HeaderDropdownProps) => {
  const { isOpen, setIsOpen } = props;
  const headerDropdownRef = useRef(null)

  useClickOutside(headerDropdownRef, () => {
    setIsOpen(false);
  });
  return (
    <div ref={headerDropdownRef} className={getHeaderDropdownClassName(isOpen)}>
      <p className="cursor-pointer hover:bg-slate-100 px-[10px] py-[5px]">
        Редактировать
      </p>
      <p className="cursor-pointer hover:bg-slate-100 px-[10px] py-[5px]">
        Выйти
      </p>
    </div>
  );
};

export default HeaderDropdown;
