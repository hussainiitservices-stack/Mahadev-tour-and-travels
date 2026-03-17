import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

/* ✅ Logo */
import Logo from "../assets/LOGO.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/contact", label: "Contact" },
  { to: "/image", label: "Gallery" }
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-elevated py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Mahadev Tours & Travels Logo"
            className="h-16 w-auto object-contain"
          />
          <span
            className={`text-xl font-bold font-display ${
              scrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Mahadev Tours & Travels
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-semibold uppercase tracking-wider transition-colors duration-200 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                location.pathname === link.to
                  ? `text-primary after:scale-x-100`
                  : scrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-gradient-orange px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>

      {/* ✅ Mobile Slider Navigation (ONLY navigation now) */}
      <div className="md:hidden overflow-x-auto no-scrollbar backdrop-blur-sm">
        <div className="flex gap-3 px-4 py-2 min-w-max">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                location.pathname === link.to
                  ? "bg-primary text-white"
                  : scrolled
                  ? "bg-foreground/10 text-foreground hover:bg-foreground/20"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;