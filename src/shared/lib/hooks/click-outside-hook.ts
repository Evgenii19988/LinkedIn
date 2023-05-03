import { useEffect, RefObject } from "react";

function useClickOutside<T>(
  itemRef: RefObject<T>,
  clickHandler: (event: MouseEvent) => void
) {
  const item = itemRef?.current as HTMLElement;
  function handler(event: MouseEvent) {
    if (!itemRef.current && item?.contains(event?.target as Node)) return;
    clickHandler(event);
  }
  useEffect(() => {
    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, [itemRef, clickHandler]);
}

export default useClickOutside;
