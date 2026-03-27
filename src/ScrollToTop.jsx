import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "auto"; // ✅ reset scroll lock
  }, [pathname]);

  return null;
};

export default ScrollToTop;