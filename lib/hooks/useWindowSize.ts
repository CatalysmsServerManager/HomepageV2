import * as React from 'react';

interface ISize {
  width: number;
  height: number;
}

export function useWindowSize(): ISize {
  const isClient = typeof window === 'object';

  function getSize(): ISize {
    return (
      {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      }
    );
  }

  const [windowSize, setWindowSize] = React.useState(getSize);
  React.useEffect((): any => {
    if (!isClient) { return false; }

    function handleResize(): void {
      setWindowSize(getSize());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}
