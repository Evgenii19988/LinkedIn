import { TypedUseSelectorHook, useSelector } from "react-redux";

import { RootState } from "../model";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
