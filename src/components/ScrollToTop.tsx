import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    setPageVisible(false);
    const timeout = setTimeout(() => {
      setPageVisible(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Page Fade Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "#ffffff",
          pointerEvents: "none",
          zIndex: 1,
          opacity: pageVisible ? 0 : 1,
          transition: "opacity 0.5s ease",
        }}
      />

      {/* Scroll Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        style={{
          position: "fixed",
          bottom: "32px",
          left: "32px",
          zIndex: 50,
          padding: "12px",
          borderRadius: "999px",
          backgroundColor: "#ff6a00",   // ORANGE
          color: "#ffffff",
          border: "none",
          boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          cursor: "pointer",
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
          opacity: isVisible ? 1 : 0,
          transition: "all 0.5s ease",
        }}
      >
        <ChevronUp size={20} />
      </button>
    </>
  );
};

export default ScrollToTop;