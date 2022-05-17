import { useCallback, useEffect } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLElement>, onClickOutside: () => void) => {
  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;

      const path = e.composedPath && e.composedPath();

      if (!path.includes(ref.current)) {
        onClickOutside();
      }
    },
    [ref, onClickOutside]
  );

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  }, [handleOutsideClick]);
};

export default useClickOutside;
