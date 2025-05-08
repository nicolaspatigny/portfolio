import { useState, useEffect } from "react";

export function useScrollSpy(ids: string[], offset: number = 100) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;
      
      // Find the section that is currently being viewed
      const found = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return { id, top: -1, bottom: -1 };
          
          const rect = element.getBoundingClientRect();
          const top = rect.top + scroll - offset;
          const bottom = rect.bottom + scroll - offset;
          
          return { id, top, bottom };
        })
        .find(({ top, bottom }) => scroll >= top && scroll < bottom);
      
      setActiveId(found?.id || null);
    };

    listener();
    window.addEventListener("scroll", listener);
    
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
}
