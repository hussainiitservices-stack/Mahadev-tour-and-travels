import HeroSlider from "@/components/HeroSlider";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Shield, Clock, MapPin, Star, Users, ThumbsUp, Car, Route } from "lucide-react";
import { motion } from "framer-motion";
// import heroSuv from "@/assets/hero-suv.png";
import heroSedan from "@/assets/hero-sedan.png";
import heroInnova from "@/assets/hero-innova.png";
import heroErtiga from "@/assets/hero-ertiga.png";
import heroTavera from "@/assets/hero-tavera.png";
import heroTraveller from "@/assets/hero-traveller.jpg";
// ✅ ADDED: Swiper carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// ✅ ADDED: Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// ─── PARALLAX: reusable hook ───────────────────────────────────────────────────
import { useEffect, useRef, useCallback } from "react";

/**
 * useParallax
 * Attaches a scroll listener to a ref'd element and applies a vertical
 * translateY based on how far the element's centre is from the viewport centre.
 * @param speed  multiplier — 0.05 is subtle, 0.15 is noticeable
 */
function useParallax<T extends HTMLElement>(speed: number = 0.08) {
  const ref = useRef<T>(null);

  const onScroll = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    // Distance from viewport centre to element centre
    const rect = el.getBoundingClientRect();
    const viewportCentre = window.innerHeight / 2;
    const elementCentre = rect.top + rect.height / 2;
    const offset = (elementCentre - viewportCentre) * speed;
    el.style.transform = `translateY(${offset}px)`;
  }, [speed]);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    // will-change hint for the browser compositor
    if (ref.current) ref.current.style.willChange = "transform";

    // Use rAF-throttled scroll listener for performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    onScroll(); // initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScroll]);

  return ref;
}
// ──────────────────────────────────────────────────────────────────────────────

const whyChoose = [
  { icon: Shield, title: "Safe & Reliable", desc: "GPS-tracked vehicles with experienced, verified drivers" },
  { icon: Clock, title: "24/7 Available", desc: "Round the clock booking and customer support" },
  { icon: MapPin, title: "Wide Coverage", desc: "Serving all major cities and tourist destinations" },
  { icon: ThumbsUp, title: "Best Prices", desc: "Competitive rates with no hidden charges" },
];

const cars = [
  { img: heroSedan, name: "Sedan", seats: "4 Passengers", price: "₹12/km" },
  // { img: heroSuv, name: "SUV", seats: "6 Passengers", price: "₹16/km" },
  { img: heroErtiga, name: "Ertiga", seats: "7 Passengers", price: "₹18/km" },
  { img: heroTavera, name: "Tavera", seats: "12-16 Passengers", price: "₹20/km" },
  { img: heroInnova, name: "Innova Crysta", seats: "7 Passengers", price: "₹18/km" },
  { img: heroTraveller, name: "Tempo Traveller", seats: "14-26 Seater", price: "₹22/km" , seatOptions: [14, 17, 20, 26],},
  
];

const reviews = [
  { name: "Rajesh Kumar", text: "Excellent service! The driver was punctual and the car was spotless. Highly recommended.", stars: 5 },
  { name: "Priya Sharma", text: "Best travel experience in Indore. Comfortable Innova for our family trip to Ujjain.", stars: 5 },
  { name: "Amit Patel", text: "Professional service with great pricing. Will definitely book again for airport transfers.", stars: 4 },
];

const routes = [
  {
    name: "Indore to Bhopal",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Bhopal to Ujjain",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Indore to Omkareshwar",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Bhopal to Indore",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Indore to Airport",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Local City Tours",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
];

// ─── PARALLAX: small wrapper so each card/image gets its own ref ───────────────
function ParallaxItem({ speed, children, className }: {
  speed?: number;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useParallax<HTMLDivElement>(speed);
  return <div ref={ref} className={className}>{children}</div>;
}
// ──────────────────────────────────────────────────────────────────────────────

const Index = () => {
  // ─── PARALLAX: ref for CTA section background overlay ─────────────────────
  const ctaParallaxRef = useParallax<HTMLDivElement>(0.06);
  // ──────────────────────────────────────────────────────────────────────────

  return (
    <div>
      <HeroSlider />

      {/* Featured Cars */}
<section className="py-20 bg-muted">
  <div className="container mx-auto px-4">
    <ScrollReveal>
      <div className="text-center mb-14">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Our Fleet
        </span>
        <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
          Featured <span className="text-gradient-orange">Vehicles</span>
        </h2>
      </div>
    </ScrollReveal>

    {/* ✅ CHANGED: Grid → Carousel */}
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      className="featured-vehicles"
    >
      {cars.map((car, i) => (
        <SwiperSlide key={i}>
          <ScrollReveal delay={i * 0.1}>
            <div className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all duration-300 hover:shadow-card hover:-translate-y-2">
              
              {/* Car Image */}
              <div className="relative h-48 overflow-hidden">
                <ParallaxItem speed={0.07 + i * 0.01} className="h-full w-full">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </ParallaxItem>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold font-display text-foreground">
                  {car.name}
                </h3>

                <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" /> {car.seats}
                </div>

                <div className="mt-3 flex flex-col gap-3">

  {/* <span className="text-lg font-bold text-primary">
    {car.price}
  </span> */}

  {/* NORMAL CARS */}
  {!car.seatOptions && (
    <a
      href={`https://wa.me/917024601594?text=${encodeURIComponent(
        `Hello, Hello, Mahadev Tours & Travels I want to book the ${car.name}.Please share details.`
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full text-center rounded-full bg-gradient-orange px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
    >
      Book Now
    </a>
  )}

  {/* TEMPO TRAVELLER SEAT OPTIONS */}
  {car.seatOptions && (
    <div className="flex flex-wrap gap-2">
      {car.seatOptions.map((seat: number) => (
        <a
          key={seat}
          href={`https://wa.me/917024601594?text=${encodeURIComponent(
            `Hello, I want to book a ${seat} Seater Tempo Traveller from Mahadev Tours & Travels. Kindly share availability and pricing.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-w-[60px] text-center rounded-full border border-primary px-3 py-1 text-xs font-semibold text-primary hover:bg-primary hover:text-white transition"
        >
          {seat} Seat
        </a>
      ))}
    </div>
  )}

</div>

                  
                
              </div>
            </div>
          </ScrollReveal>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>

<div className="section-separator" />

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</span>
              <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
                The Mahadev T&T <span className="text-gradient-orange">Advantage</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                {/* PARALLAX: subtle lift on each Why Choose Us card */}
                <ParallaxItem speed={0.04 + i * 0.01}>
                  <div className="group rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:shadow-card hover:-translate-y-2">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent transition-colors duration-300 group-hover:bg-gradient-orange">
                      <item.icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="mb-2 text-lg font-bold font-display text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </ParallaxItem>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      

      {/* Popular Routes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Destinations</span>
              <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
                Popular <span className="text-gradient-orange">Routes</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((route, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
{/* PARALLAX: route cards stagger slightly by index */}
<ParallaxItem speed={0.04 + (i % 3) * 0.015}>
  <div
    className="group relative flex items-center gap-4 rounded-xl border border-border p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-card overflow-hidden bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${route.img})` }}
  >

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20"></div>

    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent transition-colors group-hover:bg-gradient-orange">
      <Route className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors" />
    </div>

    <div className="relative">
      <h3 className="font-semibold text-white">{route.name}</h3>
      <p className="text-xs text-white/80">Comfortable rides available</p>
    </div>
<div className="absolute bottom-1 left-0 w-full border-t border-dashed border-orange-300/40"></div>
    {/* Animated Car */}
    <motion.div
      className="absolute bottom-0"
      initial={{ left: "-30px" }}
      animate={{ left: "100%" }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Car className="h-5 w-5 text-orange-400 opacity-90" />
    </motion.div>

  </div>
</ParallaxItem>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-separator" />

      {/* Reviews */}
<section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
              <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
                What Our Customers <span className="text-gradient-orange">Say</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                {/* PARALLAX: each testimonial card at a gently different depth */}
                <ParallaxItem speed={0.05 + i * 0.02}>
                  <div className="rounded-2xl bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-card">
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: r.stars }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
                    <p className="font-semibold text-foreground">{r.name}</p>
                  </div>
                </ParallaxItem>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 bg-gradient-orange">
        {/* PARALLAX: decorative background layer moves slower than content */}
        <div
          ref={ctaParallaxRef}
          aria-hidden="true"
          style={{ willChange: "transform" }}
          className="pointer-events-none absolute inset-0 opacity-10"
        >
          {/* subtle repeating circle pattern for depth */}
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="cta-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="3" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-dots)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold font-display text-primary-foreground md:text-5xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Book your ride today and experience the royal treatment with Mahadev Tours & Travels.
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-background px-10 py-4 font-semibold text-foreground transition-transform duration-200 hover:scale-105 shadow-elevated"
            >
              Book Your Ride Now
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;