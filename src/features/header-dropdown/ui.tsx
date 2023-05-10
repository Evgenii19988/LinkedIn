import React from "react";
import { HeaderDropdownProps } from "./model/types";
import { getHeaderDropdownClassName } from "./model/header-dropdown.style";

const HeaderDropdown = (props: HeaderDropdownProps) => {
  const { isOpen } = props;
  return (
    <div className={getHeaderDropdownClassName(isOpen)}>
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
