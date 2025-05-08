import { useEffect, useCallback } from "react";

export function useScrollToHash() {
  const scrollToHash = useCallback((hash: string, offset: number = 100) => {
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
      });
    }
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        scrollToHash(window.location.hash);
      }, 100);
    }
  }, [scrollToHash]);

  return scrollToHash;
}
