import React, { FC } from "react";
import { HeaderDropdownProps } from "./model/types";
import { getHeaderDropdownClassName } from "./model/header-dropdown.style";

const HeaderDropdown: FC<HeaderDropdownProps> = (props) => {
  const { isOpen } = props;
  return (
    <div className={getHeaderDropdownClassName(isOpen)}>
      <p className='cursor-pointer hover:bg-slate-100'>Редактировать</p>
      <p className='cursor-pointer hover:bg-slate-100'>Выйти</p>
    </div>
  );
};

export default HeaderDropdown;
