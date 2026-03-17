import ScrollReveal from "@/components/ScrollReveal";
import { Users, Route, Car , Plane, Building2, MapPinned, Repeat, ArrowRight , Crown, Flower } from "lucide-react";
import { motion } from "framer-motion";
import heroSedan from "@/assets/hero-sedan.png";
import heroErtiga from "@/assets/hero-ertiga.png";
import heroInnova from "@/assets/hero-innova.png";
import heroTavera from "@/assets/hero-tavera.png";
import heroTraveller from "@/assets/hero-traveller.jpg";
import { Link } from "react-router-dom";

/* Swiper Carousel */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useRef, useEffect } from "react";
import { FaEyeSlash } from "react-icons/fa";

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
    name: "Local City Tours",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Ujjain to Airport",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Ujjain to Bhopal",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Ujjain to Indore",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "Ujjain to Omkareshwar",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
  {
    name: "All over India",
    img: "https://thumbs.dreamstime.com/b/indore-india-skyline-cityscape-illustration-black-background-404500839.jpg",
  },
];

const serviceCards = [
  {
    title: "Airport Taxi",
    desc: "Hire Taxi for Airport Pickup/Drop",
    icon: Plane,
  },
  {
    title: "Local Taxi",
    desc: "Hire Taxi for Local Travel within City limits",
    icon: Building2,
  },
  {
    title: "Outstation Cabs",
    desc: "Hire Taxi for Outstation Travel",
    icon: MapPinned,
  },
  {
    title: "Roundtrip Cabs",
    desc: "Hire Taxi for Roundtrip Travel",
    icon: Repeat,
  },
  {
    title: "One Way Cabs",
    desc: "Hire Taxi for One Way Drop/Pickup",
    icon: ArrowRight,
  },
  {
    title: "Vip Darshan Facilities",
    desc: "Special Taxi Services for VIP Darshan",
    icon: Crown,
  },
  {
    title: "Poojan Facilities",
    desc: "Special Taxi Services for Poojan and Rituals",
    icon: Flower,
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

      {/* SERVICE CARDS */}
<section className="py-16 bg-background">
  <div className="container mx-auto px-4">

    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 items-stretch">

      {serviceCards.map((service, i) => {
        const Icon = service.icon;

        return (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="group rounded-2xl bg-card border border-border p-6 shadow-sm 
hover:-translate-y-2 hover:shadow-lg transition 
flex flex-col h-full">

              <Icon className="h-8 w-8 text-foreground mb-4" />

<h3 className="text-lg font-bold text-primary font-display">
  {service.title}
</h3>

<p className="text-sm text-muted-foreground mt-2 flex-grow">
  {service.desc}
</p>

<a
  href={`https://wa.me/917024601594?text=${encodeURIComponent(
    `Hello Mahadev Tours & Travels, I want to book ${service.title}. Please share details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 mt-5 rounded-full bg-gradient-orange px-4 py-2 text-xs font-semibold text-white hover:scale-105 transition self-start"
>
  BOOK →
</a>

            </div>
          </ScrollReveal>
        );
      })}

    </div>

  </div>
</section>

      {/* ── HIRE A TAXI IN UJJAIN — INFO SECTION ── */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-2xl font-bold font-display text-foreground mb-2">
              Hire a Taxi in Ujjain for All Your Travel Needs!
            </h2>
            <p className="text-muted-foreground mb-10">
              Looking for reliable taxi services in Ujjain? We offer a range of options to cater to all your travel requirements:
            </p>

            <div className="space-y-8">

              {/* 1. Airport Transfer */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  1. Airport Transfer
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-none">
                  <li>
                    <span className="font-semibold text-foreground">Convenient Pick-Up and Drop-Off: </span>
                    Start and end your journey stress-free with our airport transfer services.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Timely Service: </span>
                    We ensure timely pickups, so you never miss your flight.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Comfortable Vehicles: </span>
                    Travel in comfort with our well-maintained and air-conditioned vehicles.
                  </li>
                </ul>
              </div>

              {/* 2. Local City Use */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  2. Local City Use
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-none">
                  <li>
                    <span className="font-semibold text-foreground">Explore Ujjain: </span>
                    Discover the rich cultural heritage of Ujjain with our local city taxi services.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Flexible Booking: </span>
                    Hire a cab for a few hours or the whole day based on your itinerary.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Knowledgeable Drivers: </span>
                    Our drivers are familiar with the city and can guide you to popular attractions.
                  </li>
                </ul>
              </div>

              {/* 3. Outstation Travel */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  3. Outstation Travel
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-none">
                  <li>
                    <span className="font-semibold text-foreground">Travel Beyond Ujjain: </span>
                    Planning a trip out of Ujjain? We offer reliable outstation taxi services to various destinations.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Competitive Rates: </span>
                    Enjoy affordable pricing for long-distance travel.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Comfort and Safety: </span>
                    Our vehicles are equipped for long journeys, ensuring your comfort and safety.
                  </li>
                </ul>
              </div>

              {/* 4. One Way Cab Service */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  4. One Way Cab Service
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-none">
                  <li>
                    <span className="font-semibold text-foreground">One-Way Transfers: </span>
                    Need a ride to a specific location? Our one-way cab service is perfect for you.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">No Return Hassle: </span>
                    Pay only for the distance you travel, without the need for a return journey.
                  </li>
                </ul>
              </div>

              {/* Why Choose Us */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-3">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground list-none">
                  <li>
                    <span className="font-semibold text-foreground">24/7 Availability: </span>
                    Our taxi services are available round the clock, ensuring you can book a cab whenever you need it.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Transparent Pricing: </span>
                    No hidden charges, just honest pricing.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Professional Drivers: </span>
                    Our drivers are experienced, courteous, and committed to ensuring your safety and comfort.
                  </li>
                </ul>
              </div>

              {/* Booking Made Easy */}
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Booking Made Easy
                </h3>
                <p className="text-sm text-muted-foreground">
                  Contact us today to book your taxi in Ujjain! You can reach us via phone, or visit our website for quick bookings. Experience hassle-free travel with our reliable taxi services.
                </p>
                <p className="mt-4 text-sm font-bold text-foreground">
                  Travel Smart, Travel Safe!
                </p>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* ── END HIRE A TAXI SECTION ── */}

      {/* VEHICLE CAROUSEL / MOBILE LIST */}
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

          {/* ── MOBILE: plain stacked list, no slider ── */}
          <div className="flex flex-col gap-4 sm:hidden">
            {vehicles.map((car, i) => (
              <ScrollReveal key={i} delay={i * 0.07}>
                <div className="group rounded-2xl bg-card shadow-sm overflow-hidden flex flex-row items-center transition-all duration-300 hover:shadow-card">
                  {/* Image — left strip, object-contain, pop shadow */}
                  <div className="relative shrink-0 w-36 h-28 flex items-center justify-center bg-muted/60 overflow-hidden p-2">
                    <img
                      src={car.img}
                      alt={car.name}
                      className="w-full h-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] scale-105 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Info */}
                  <div className="flex-1 p-4 flex flex-col gap-2">
                    <h3 className="text-base font-bold font-display text-foreground leading-tight">{car.name}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Users className="h-3.5 w-3.5" />{car.seats}
                    </div>
                    {/* NORMAL CAR BOOKING */}
                    {!car.seatOptions && (
                      <a
                        href={`https://wa.me/917024601594?text=${encodeURIComponent(
                          `Hello, Hello, Mahadev Tours & Travels I want to book the ${car.name}.Please share details.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center rounded-full bg-gradient-orange px-4 py-1.5 text-xs font-semibold text-white hover:scale-105 transition"
                      >
                        Book Now
                      </a>
                    )}
                    {/* TEMPO TRAVELLER OPTIONS */}
                    {car.seatOptions && (
                      <div className="flex flex-wrap gap-1.5">
                        {car.seatOptions.map((seat) => (
                          <a
                            key={seat}
                            href={`https://wa.me/917024601594?text=${encodeURIComponent(
                              `Hello, I want to book a ${seat} Seater Tempo Traveller from Mahadev Tours & Travels. Kindly share availability and pricing.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 min-w-[48px] text-center border border-primary px-2 py-1 text-xs rounded-full hover:bg-primary hover:text-white transition"
                          >
                            {seat}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ── DESKTOP sm+: Swiper carousel (unchanged) ── */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={2}
            breakpoints={{
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="hidden sm:block"
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