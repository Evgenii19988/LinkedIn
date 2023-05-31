import { ReactNode } from "react";

export type ModalProps = {
  value: boolean;
  setValue: (value: boolean) => void;
  children: ReactNode;
};
