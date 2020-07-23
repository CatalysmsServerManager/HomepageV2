import * as React from 'react';

export function useLockBodyScroll(): void {
  React.useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    // re-enable scrolling when component unmounts
    return () => { document.body.style.overflow = originalStyle; };
  }, []);
}
