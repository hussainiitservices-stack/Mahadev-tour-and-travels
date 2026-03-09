import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import heroSuv from "@/assets/hero-suv.jpg";
import heroSedan from "@/assets/hero-sedan.png";
import heroInnova from "@/assets/hero-innova.png";
import heroTraveller from "@/assets/hero-traveller.jpg";
import heroErtiga from "@/assets/hero-ertiga.png";
import heroTavera from "@/assets/hero-tavera.png";

const slides = [
  { img: heroSedan, label: "Luxury Sedans" },
  { img: heroInnova, label: "Premium SUV's Like " },
  { img: heroErtiga, label: "Ertiga" },
  { img: heroTavera, label: "Tavera" },
  { img: heroTraveller, label: "Tempo Travellers" },
  
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={slides[current].img}
          alt={slides[current].label}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl"
          >
            <span className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-primary backdrop-blur-sm">
               {slides[current].label}
            </span>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl font-display">
              Your Trusted
              <span className="text-gradient-orange block">Travel Partner</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-primary-foreground/80">
              Experience premium travel with Mahadev Tours &. Comfortable rides, professional drivers, and unforgettable journeys across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-gradient-orange px-8 py-3.5 font-semibold text-primary-foreground transition-transform duration-200 hover:scale-105 shadow-lg"
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="rounded-full border-2 border-primary-foreground/30 px-8 py-3.5 font-semibold text-primary-foreground backdrop-blur-sm transition-all duration-200 hover:border-primary hover:bg-primary/10"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-primary" : "w-2 bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
