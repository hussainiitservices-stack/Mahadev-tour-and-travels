import ScrollReveal from "@/components/ScrollReveal";
import { Users, Route, Car } from "lucide-react";
import { motion } from "framer-motion";
import heroSedan from "@/assets/hero-sedan.png";
import heroErtiga from "@/assets/hero-ertiga.png";
import heroInnova from "@/assets/hero-innova.png";
import heroTavera from "@/assets/hero-tavera.png";
import heroTraveller from "@/assets/hero-traveller.jpg";

/* Swiper Carousel */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef, useEffect } from "react";

/* PARALLAX */
function useParallax(speed = 0.08) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2) * speed;
      ref.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return ref;
}

function ParallaxItem({ children, speed }) {
  const ref = useParallax(speed);
  return <div ref={ref}>{children}</div>;
}

/* VEHICLES */
const vehicles = [
  { img: heroSedan, name: "Sedan", seats: "4 Passengers" },
  { img: heroErtiga, name: "Ertiga", seats: "7 Passengers" },
  { img: heroTavera, name: "Tavera", seats: "12-16 Passengers" },
  { img: heroInnova, name: "Innova Crysta", seats: "7 Passengers" },
  {
    img: heroTraveller,
    name: "Tempo Traveller",
    seats: "14-26 Seater",
    seatOptions: [14, 17, 20, 26],
  },
];

/* ROUTES */
const routes = [
  {
    name: "All over India",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Ujjain to Bhopal",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Ujjain to Omkareshwar",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Ujjain to Indore",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Ujjain to Airport",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Local City Tours",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
];


const Services = () => {
  return (
    <div>
      {/* HEADER */}
      <section className="relative bg-gradient-dark py-32 pt-40">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Our Services
            </span>

            <h1 className="mt-3 text-4xl font-bold font-display text-primary-foreground md:text-5xl">
              Premium <span className="text-gradient-orange">Fleet & Routes</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Choose from our wide range of well-maintained vehicles for any
              occasion.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* VEHICLE CAROUSEL */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">

          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Our Fleet
              </span>

              <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
                Choose Your <span className="text-gradient-orange">Ride</span>
              </h2>
            </div>
          </ScrollReveal>

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
          >
            {vehicles.map((car, i) => (
              <SwiperSlide key={i}>
                <ScrollReveal delay={i * 0.1}>

                  <div className="group rounded-2xl bg-card shadow-sm overflow-hidden hover:-translate-y-2 transition">

                    <div className="h-48 overflow-hidden">

                      <ParallaxItem speed={0.06 + i * 0.01}>
                        <img
                          src={car.img}
                          alt={car.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition"
                        />
                      </ParallaxItem>

                    </div>

                    <div className="p-5">

                      <h3 className="text-lg font-bold font-display text-foreground">
                        {car.name}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                        <Users className="h-4 w-4" />
                        {car.seats}
                      </div>

                      {/* NORMAL CAR BOOKING */}
                      {!car.seatOptions && (
                        <a
                          href={`https://wa.me/917024601594?text=${encodeURIComponent(
                            `Hello, Hello, Mahadev Tours & Travels I want to book the ${car.name}.Please share details.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 block text-center rounded-full bg-gradient-orange px-4 py-2 text-xs font-semibold text-white hover:scale-105 transition"
                        >
                          Book Now
                        </a>
                      )}

                      {/* TEMPO TRAVELLER OPTIONS */}
                      {car.seatOptions && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {car.seatOptions.map((seat) => (
                            <a
                              key={seat}
                              href={`https://wa.me/917024601594?text=${encodeURIComponent(
                                `Hello, I want to book a ${seat} Seater Tempo Traveller from Mahadev Tours & Travels. Kindly share availability and pricing.`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 min-w-[60px] text-center border border-primary px-3 py-1 text-xs rounded-full hover:bg-primary hover:text-white transition"
                            >
                              {seat} Seat
                            </a>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </ScrollReveal>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>

      <div className="section-separator" />

      {/* ROUTES */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">

          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                Destinations
              </span>

              <h2 className="mt-2 text-3xl font-bold font-display md:text-4xl text-foreground">
                Popular <span className="text-gradient-orange">Routes</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {routes.map((route, i) => (

              <ScrollReveal key={i} delay={i * 0.08}>

                <div
                  className="relative rounded-xl overflow-hidden border border-border bg-cover bg-center p-6"
                  style={{ backgroundImage: `url(${route.img})` }}
                >

                  <div className="absolute inset-0 bg-black/40"></div>

                  <div className="relative flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                      <Route className="h-5 w-5 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-white font-semibold">{route.name}</h3>
                      <p className="text-xs text-white/80">
                        Comfortable rides available
                      </p>
                    </div>

                  </div>

                  {/* ROAD LINE */}
                  <div className="absolute bottom-1 left-0 w-full border-t border-dashed border-orange-300"></div>

                  {/* MOVING CAR */}
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
                    <Car className="h-5 w-5 text-orange-400" />
                  </motion.div>

                </div>

              </ScrollReveal>

            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;