import { useEffect, useState } from "react";

export const useToggleSidebar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);

  useEffect(() => {
    let lastMobile = window.innerWidth < 768;

    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile !== lastMobile) {
        setIsMobile(mobile);
        setIsCollapsed(mobile);
        lastMobile = mobile;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleSidebar = () => {
    if (isMobile) {
      setIsCollapsed((prev) => !prev);
    }
  };

  return { isCollapsed, isMobile, handleToggleSidebar };
};
