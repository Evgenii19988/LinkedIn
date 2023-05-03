import React, { FC, forwardRef, ForwardedRef } from "react";
import { HeaderDropdownProps } from "./model/types";
import { getHeaderDropdownClassName } from "./model/header-dropdown.style";

const HeaderDropdown = forwardRef(
  (props: HeaderDropdownProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { isOpen } = props;
    return (
      <div ref={ref} className={getHeaderDropdownClassName(isOpen)}>
        <p className="cursor-pointer hover:bg-slate-100">Редактировать</p>
        <p className="cursor-pointer hover:bg-slate-100">Выйти</p>
      </div>
    );
  }
);

export default HeaderDropdown;
