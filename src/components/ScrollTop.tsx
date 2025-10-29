import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 cuộn mượt
  }, [pathname]);

  return null;
}