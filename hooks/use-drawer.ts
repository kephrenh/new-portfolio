import { useEffect, useState } from "react";

export function useDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", (e: any) => {
      if (e.target.innerWidth >= 640) {
        setIsOpen(false);
      }
    });
    return () => {
      window.addEventListener("resize", () => {});
    };
  }, []);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, setIsOpen, handleToggleMenu };
}
