import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { HeaderDropdownProps } from "./model/types";
import { getHeaderDropdownClassName } from "./model/header-dropdown.style";
import useClickOutside from "../../shared/lib/hooks/click-outside-hook";
import { authActions } from "../../shared/model/slices/auth.slice";
import { useNavigate } from "react-router";

const HeaderDropdown = (props: HeaderDropdownProps) => {
  const {
    isOpen,
    setIsOpen,
    isOpenEditProfileModal,
    setIsOpenEditProfileModal,
  } = props;
  const navigate = useNavigate()
  const headerDropdownRef = useRef(null);
  const dispatch = useDispatch()

  useClickOutside(headerDropdownRef, () => {
    setIsOpen(false);
  });

  function logOut() {
    sessionStorage.removeItem('user')
    dispatch(authActions.setUserFirstName(null));
    dispatch(authActions.setUserLastName(null));
    dispatch(authActions.setUserDescription(null));
    dispatch(authActions.setUserImage(null));
    dispatch(authActions.setUserId(null));
    navigate('/login')
  }

  return (
    <div ref={headerDropdownRef} className={getHeaderDropdownClassName(isOpen)}>
      <p
        onClick={() => {
          setIsOpenEditProfileModal(!isOpenEditProfileModal);
        }}
        className="cursor-pointer hover:bg-slate-100 px-[10px] py-[5px]"
      >
        Редактировать
      </p>
      <p onClick={logOut} className="cursor-pointer hover:bg-slate-100 px-[10px] py-[5px]">
        Выйти
      </p>
    </div>
  );
};

export default HeaderDropdown;
