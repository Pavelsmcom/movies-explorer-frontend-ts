import { useCallback, useEffect, useState } from "react";

import debounce from "../functions/debounce";

export function usePageWidth(ms: number) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const handleResizeDebaunced = debounce(handleResize, ms);

  useEffect(() => {
    window.addEventListener("resize", handleResizeDebaunced);

    return () => {
      window.addEventListener("resize", handleResizeDebaunced);
    };
  }, []);

  return { screenWidth };
}
