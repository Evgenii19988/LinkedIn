import React, { FC, useRef } from "react";
import useClickOutside from "../../lib/hooks/click-outside-hook";
import { ModalProps } from "./modal.types";
import Icon from "../../icons";

const Modal: FC<ModalProps> = (props) => {
  const { children, value, setValue } = props;
  const ModalWrapperRef = useRef<HTMLDivElement | null>(null);

  function closeModal() {
    setValue(false);
  }

  return (
    <div
      onClick={(e) => e.target === ModalWrapperRef.current && closeModal()}
      ref={ModalWrapperRef}
      className={`w-[100vw] h-[100vh] fixed bg-black/80 top-0 left-0 z-[2] ${
        value ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="bg-white p-[20px] w-[500px] h-fit absolute m-auto left-0 right-0 top-0 bottom-0 opacity-100 rounded-[25px]">
        <div className="flex justify-end">
          <div onClick={closeModal} className="cursor-pointer mb-[16px]">
            <Icon iconName="Close"></Icon>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
